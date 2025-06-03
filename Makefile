include build-args.env

ARGS := $(foreach kv,$(shell sed '/^#/d' build-args.env),--build-arg $(kv))

.PHONY: build
build:
	sudo docker build $(ARGS) -t liveget/ohwise-web-hub:0.0.3 .
push:
	sudo docker push liveget/ohwise-web-hub:0.0.3
