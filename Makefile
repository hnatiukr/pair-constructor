install:
	yarn

test:
	npx jest

test-coverage:
	npx jest --coverage

lint:
	npx tsc -p tsconfig.ci.json
	npx prettier --write .

prebuild:
	rm -rf lib

copy-dts:
	mkdir lib
	mkdir lib/types
	find ./src/types -name '*.d.ts' -exec cp -prv '{}' 'lib/types' ';'

copy-npm:
	cp package.json lib
	cp README.md lib
	cp LICENSE lib

build-dts:
	npx tsc -p tsconfig.declaration.json

build-js:
	npx tsc -p tsconfig.build.json

build-docs:
	npx documentation build src/** -f md --markdown-toc-max-depth 2 --sort-order alpha --shallow > docs/README.md

build:
	make prebuild copy-dts copy-npm build-dts build-js build-docs

ci:
	make lint test build

publish:
	make ci
	yarn npm publish lib --non-interactive

.PHONY: test lint prebuild copy-dts copy-npm build-dts build-js build docs
