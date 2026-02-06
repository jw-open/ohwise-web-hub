# Backend Build Guide — CMS for Ohwise (ohwise-cms repo)

This document describes the **API** the frontend expects and **suggested** content-type schemas. Build your CMS in the **ohwise-cms** repo (https://github.com/jw-open/ohwise-cms) so it satisfies the endpoint contract; the schema details below are a starting point, not a strict spec.

**Repo:** Your backend work goes in **ohwise-cms**. **heunify-backend** (https://github.com/jw-open/heunify-backend) uses **Strapi v5** (open-source CMS). You can copy it to ohwise-cms and adapt, or use another CMS you're familiar with — as long as the API contract below is met.

**Schema flexibility:** The field lists and content-type tables in this guide are **suggestions**. If you have better ideas — add, remove, rename, or drop redundant fields. Keep the API behavior (endpoints, query params, and the shapes the frontend consumes) consistent; the rest is up to you.

**Strapi version:** The frontend is written for Strapi-style responses (e.g. `data`, `attributes`, `documentId`, `meta.pagination`). Heunify-backend uses **Strapi v5**; v4 or v5 both work if the response shapes match.

**Database:** Production uses **MySQL on AWS EC2** (not RDS); it is already set up. For development and testing, use **local MySQL** — no need to configure or use the production database.

**Tip:** Using Cursor, Claude Code, or other AI tools is fine. Keep the backend maintainable: clear controller/service structure, consistent naming, and Strapi best practices (e.g. use lifecycle hooks or services for shared logic instead of duplicating code). Avoid one-off hacks that will be hard to understand or change later.

---

## 1. API Overview

The frontend calls these endpoints:

| Area | Endpoints | Auth |
|------|-----------|------|
| Site config | site-setting, navigation-items, about | None |
| Content (blog) | contents (list, by slug, featured) | None |
| Contact | contacts (POST) | None |
| Newsletter | newsletter-subscribers (status, subscribe, resubscribe, unsubscribe) | None |
| Comments | content-comments (GET list, POST create) | GET: none, POST: JWT optional |
| OAuth | connect/:provider, auth/:provider/callback | None (callback returns JWT) |

**Ohwise backend domain:** Use **https://strapi.ohwise.com** for production. Set `NEXT_PUBLIC_STRAPI_API_URL` to that (or `http://localhost:1337` for local). All paths below are under `/api`.

---

## 2. Endpoints and Data Shapes

### 2.1 Site setting (single type)

- **GET** `/site-setting?populate=*`

**Response:** One object with the following (Strapi v4 may wrap in `data.attributes`). The frontend reads `data` or `data.attributes`. Fields below are suggested; you can add/remove/rename as long as the frontend still gets what it needs (see heunify-frontend `strapi.tsx` / `get-static-data`).

| Field | Type | Notes |
|-------|------|--------|
| id | string/number | |
| siteName | string | |
| siteDescription | string | |
| logo | media or relation | Frontend resolves to URL (local or S3). |
| favicon | media or relation | Same. |
| theme | object | `{ primaryColor, secondaryColor, fontFamily }` |
| hero | object | `{ title, description, ctaPrimary: { text, link }, ctaSecondary: { text, link } }` |
| seo | object | `{ defaultTitle, defaultDescription, defaultKeywords: string[] }` |
| social | object | `{ twitter?, github?, linkedin?, youtube? }` |
| contact | object | `{ email?, phone?, address? }` |
| features | object | `{ enableComments, enableNewsletter, enableRSS, enableDarkMode }` (booleans) |
| quickLinks | array | `[{ id, title, path, type: 'internal'|'external', externalUrl? }]` |
| copyright | string | |

---

### 2.2 Navigation items (collection)

- **GET** `/navigation-items?populate=*`

**Response:** Array of items (in `data`). Each item (suggested fields; adjust if you prefer):

| Field | Type | Notes |
|-------|------|--------|
| id | string/number | |
| documentId | string | Optional; frontend uses id or documentId. |
| title | string | |
| path | string | Use only: `/`, `/blog`, `/about`, `/contact`, `/privacy`, `/terms`. Do **not** use thoughts, product, or content-by-type paths. Pricing (`/pricing`) can be added later. |
| type | string | `'internal'` or `'external'` |
| externalUrl | string | Optional. |
| order | number | Frontend sorts by this. |

---

### 2.3 About (single type)

- **GET** `/about?populate=*`

**Response:** One object. Frontend reads `data` (and optionally `data.attributes`). Suggested fields:

| Field | Type | Notes |
|-------|------|--------|
| id | string/number | |
| name | string | |
| title | string | |
| bio | string | |
| avatar | media | Frontend uses URL; for S3 it may look for `small_` prefixed variant. |
| location | string | |
| email | string | |
| social | object | `{ github?, twitter?, linkedin?, youtube? }` |
| skills | array | strings or objects as you prefer. |
| exploring | string | |
| experience | array | `[{ company, title, period, description }]` |
| education | array | `[{ institution, degree, period, description }]` |

---

### 2.4 Contents (blog posts only)

Collection name must be **contents** (plural). Each document is one **blog post**. Use a single content type with `type = 'post'` (or a fixed value). **Do not** use multiple content types or nav items like thoughts, product, or content-by-type — only **blog** at `/blog` and `/blog/[slug]`.

- **GET** `/contents?pagination[page]=1&pagination[pageSize]=10&populate=*&filters[publishedAt][$notNull]=true`
- For blog, always filter by type: `filters[type][$eq]=post`
- Optional query params:
  - `filters[featured][$eq]=true`
  - `filters[tags][name][$eq]=...` (if you use a tag relation)
  - `pagination[limit]=3` for featured

**Response:** Strapi-style list:

- `data`: array of content items (or single object in some setups).
- `meta.pagination`: `{ page, pageSize, pageCount, total }`.

Each **content item** (suggested fields; feel free to add/remove/rename):

| Field | Type | Notes |
|-------|------|--------|
| id | string/number | |
| documentId | string | Optional; frontend uses for comments and stable IDs. |
| title | string | |
| description | string | |
| type | string | Use **`post`** for all blog posts. No other types (no thoughts, product, etc.). |
| slug | string | Unique per type (or globally). UID recommended. |
| publishedAt | datetime | Only items with non-null publishedAt are shown. |
| tags | array or relation | Frontend uses as list of tag names. |
| image | media | Frontend resolves to URL (supports S3; optional `small_` prefix for thumbnails). |
| featured | boolean | For "featured" posts on home. |
| content | string | Rich text or markdown body. |
| seo | object | `{ title?, description?, keywords? }` |
| externalUrl | string | Optional. |

**Get one by slug (blog post):**

- **GET** `/contents?filters[slug][$eq]=my-post&filters[type][$eq]=post&filters[publishedAt][$notNull]=true&populate=*`

Response: same item shape in `data` (array with one element or single object).

---

### 2.5 Contacts (contact form)

- **POST** `/contacts`

**Body (JSON):**

```json
{
  "data": {
    "name": "string",
    "email": "string",
    "subject": "string",
    "message": "string"
  }
}
```

**Response:** Any success response (e.g. 200 with created document). Frontend only needs success; it shows a fixed thank-you message.

---

### 2.6 Newsletter subscribers

The frontend expects **custom** behavior for status, resubscribe, and unsubscribe (not only Strapi's default create/find). Implement these as custom routes/controllers that use your newsletter-subscriber collection.

**Collection (or single type) suggested name:** `newsletter-subscriber`. Suggested fields (adjust as needed):

- email (string, unique)
- subscription_status (enum: `active`, `unsubscribed`)
- subscribedAt (datetime)
- unsubscribedAt (datetime, optional)
- unsubscribe_token (string, optional; 64-char hex for one-click unsubscribe)

**Endpoints:**

1. **GET** `/newsletter-subscribers/status?email=...`  
   **Response (JSON):**  
   `{ "exists": boolean, "status": "active" | "unsubscribed" | null, "subscribedAt"?: string, "unsubscribedAt"?: string, "id"?: number }`

2. **POST** `/newsletter-subscribers`  
   **Body:**  
   `{ "data": { "email": "...", "subscription_status": "active", "subscribedAt": "ISO date" } }`  
   **Response:** Can include `message`; frontend shows "Successfully subscribed..." or your message.

3. **PUT** `/newsletter-subscribers/resubscribe`  
   **Body:**  
   `{ "email": "..." }`  
   **Response:** `{ "message"?: "..." }` — frontend uses this for "Welcome back! You have been resubscribed."

4. **GET** `/newsletter-subscribers/unsubscribe?token=...`  
   Token: 64-character hex string (e.g. SHA-256 of email + secret).  
   **Response:** Strapi response with optional `data.message`; frontend shows "Successfully unsubscribed..." or your message.

Implement these in Strapi as custom API routes and controllers that find/update/create documents in the newsletter-subscriber content type.

---

### 2.7 Content comments

- **GET** `/content-comments?filters[content][documentId][$eq]=<contentId>&filters[comment_status][$eq]=approved&populate[user][fields]=username,email,provider&populate[content][fields]=id,documentId&populate[parentComment][fields]=id,documentId`

**Response:** `data` = array of comments. Each comment (suggested shape):

| Field | Type | Notes |
|-------|------|--------|
| id or documentId | string | Frontend uses as comment id. |
| comment | string | Body. |
| createdAt | string (ISO) | |
| user | object (optional) | `{ username, email, provider }` — populated from Strapi User. |
| content | object (optional) | `{ id }` or `{ documentId }` for reference. |
| parentComment | object (optional) | Same; for replies. |

- **POST** `/content-comments`  
  **Body:**  
  `{ "data": { "content": "<content documentId or id>", "comment": "...", "parentComment"?: "<id>", "user"?: "<user documentId>" } }`  
  **Auth:** Optional JWT (for associating comment with logged-in user).  
  **Response:** Standard Strapi create response.

Comment status: use a field like `comment_status` (e.g. `pending`, `approved`). Only return `approved` in the GET so the frontend shows only approved comments.

---

### 2.8 OAuth (GitHub / Google)

The frontend redirects users to your backend; the backend redirects to the provider and then handles the callback.

- **GET** `/connect/:provider?redirect_uri=...`  
  **provider:** `github` or `google`.  
  **redirect_uri:** Frontend passes the current page URL. Your backend should redirect the user to the provider's OAuth authorization URL with this as the redirect_uri (or a backend callback that then redirects here).

- **GET** `/auth/:provider/callback?access_token=...`  
  **provider:** `github` or `google`.  
  **access_token:** The frontend obtains this (e.g. from URL fragment after provider redirect) and calls this endpoint.  
  **Response (JSON):**  
  `{ "jwt": "<Strapi JWT>", "user": { "id", "documentId?", "username", "email", "provider", "avatar?" } }`

Implement this with Strapi's grant config or a custom auth flow that creates/finds a User and returns a Strapi JWT. The frontend stores the JWT (e.g. in a cookie) and sends it when submitting comments.

---

## 3. Strapi Content Types Checklist (Suggested)

Create these in the Strapi admin (or via schema files). **This is a suggested checklist, not a fixed spec** — add, remove, or rename fields and types if it makes sense. Just keep the API contract (endpoints and response shapes the frontend uses) intact.

| Content type | Kind | Main fields (suggested) |
|--------------|------|-------------------------|
| site-setting | Single | siteName, siteDescription, logo, favicon, theme (JSON), hero (JSON), seo (JSON), social (JSON), contact (JSON), features (JSON), quickLinks (JSON), copyright |
| navigation-item | Collection | title, path, type (enum: internal, external), externalUrl, order (number) |
| about | Single | name, title, bio, avatar (media), location, email, social (JSON), skills (JSON), exploring, experience (JSON), education (JSON) |
| content | Collection | title, description, type (enum), slug (UID), publishedAt, tags (relation or JSON), image (media), featured (boolean), content (richtext), seo (JSON), externalUrl |
| contact | Collection | name, email, subject, message |
| newsletter-subscriber | Collection | email, subscription_status (enum), subscribedAt, unsubscribedAt, unsubscribe_token |
| content-comment | Collection | content (relation to content), user (relation to user), parentComment (relation to content-comment), comment (text), comment_status (enum) |

Use Strapi's media library; for production you can use a provider like `aws-s3` so image URLs are absolute. The frontend supports both local and S3 URLs.

---

## 4. Permissions (Strapi admin)

- **Public:**  
  - Allow `find` and `findOne` for: site-setting, navigation-items, about, contents, content-comments (you can restrict approved-only in controller or by policy).  
  - Allow `create` for: contacts, newsletter-subscribers (and your custom newsletter routes).  
  - Allow `get` for connect and auth callback routes (no auth).

- **Authenticated:**  
  - Allow `create` for content-comments when you want to attach the current user.

Restrict admin panel to authenticated admin users only.

---

## 5. Build and Run

- **Strapi version:** v4.x.
- **Database:** **MySQL**. Production DB is **MySQL on AWS EC2** (already provisioned). For development, use **local MySQL** — set `DATABASE_HOST=localhost` (and your local port/name/user/password). You do not need to use the production EC2 database for your work.

- **Environment variables** — use a `.env` file in the Strapi project root. Template (secrets will be provided separately; use your own for local dev):

```bash
# App (generate or get from project owner)
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
ENCRYPTION_KEY=
JWT_SECRET=

# Database — for local dev use local MySQL (e.g. DATABASE_HOST=localhost); production uses EC2
DATABASE_CLIENT=mysql
DATABASE_HOST=172.31.84.65
DATABASE_PORT=3306
DATABASE_NAME=ohwise
DATABASE_USERNAME=ohwise
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db

# Email (SendGrid or Resend)
SENDGRID_API_KEY=
# or use Resend if preferred
EMAIL_USER=jw@ohwise.com
EMAIL_PASS=

# AWS S3 (uploads / media CDN)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1
AWS_BUCKET=ohwise
AWS_BUCKET_BASE_URL=https://ohwise.s3.amazonaws.com
```

For local dev: set `DATABASE_HOST=localhost` (and your local `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`). OAuth: add provider client ID/secret for GitHub/Google if you implement login.

- **Run:**  
  `npm run develop` (dev) or `npm run build` + `npm run start` (prod).

- **Deploy:** Keep the backend lightweight (single instance or small cluster). The frontend only needs the API at build time and for contact/newsletter/comments/OAuth; most traffic is static from the CDN.

---

## 6. Frontend Build-Time Requirements

When the frontend runs `npm run build`:

1. It runs `next build` (static export). Next.js will call Strapi for layout data (site-setting, navigation-items) and for every blog/content page (generateStaticParams and page data).
2. After the build, a sitemap script runs and calls Strapi again (e.g. `/navigation-items`, then `/contents` with `type=post`) to build `sitemap.xml` and optionally search data.

So your Strapi must:

- Be reachable at `NEXT_PUBLIC_STRAPI_API_URL` (production: **https://strapi.ohwise.com**) during the build.
- Expose the endpoints above with the shapes described.
- Have at least one published blog post (`type = 'post'`) and navigation items for `/`, `/blog`, `/about`, `/contact`, `/privacy`, `/terms` so the sitemap and static params are generated.

Once this is in place, follow **03-FRONTEND-IMPLEMENTATION-GUIDE.md** to wire **ohwise-web-hub** to this API. The project owner will add GitHub Actions to deploy ohwise-cms and ohwise-web-hub.
