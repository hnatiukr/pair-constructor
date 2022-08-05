install:
	yarn

test:
	npx jest

test-coverage:
	npx jest --coverage

lint:
	tsc -p tsconfig.ci.json

prebuild:
	rm -rf lib

copy-dts:
	mkdir lib
	mkdir lib/types
	find ./src/types -name '*.d.ts' -exec cp -prv '{}' 'lib/types' ';'

copy-npm:
	cp {README.md,package.json,LICENSE} lib

build-dts:
	tsc -p tsconfig.declaration.json

build-js:
	tsc -p tsconfig.build.json

build:
	make prebuild copy-dts copy-npm build-dts build-js

ci:
	make lint test build

bump:
	standard-version

release:
	yarn publish lib --non-interactive

docs:
	mkdir -p docs
	npx documentation build src/** -f md --markdown-toc-max-depth 2 --sort-order alpha --shallow > docs/README.md

.PHONY: test lint prebuild copy-dts copy-npm build-dts build-js build docs