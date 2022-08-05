install:
	yarn

test:
	npx jest

test-coverage:
	npx jest --coverage

lint:
	npx tsc -p tsconfig.ci.json
	npx prettier --write ./src

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

build:
	make prebuild copy-dts copy-npm build-dts build-js

ci:
	make lint test build

publish:
	make ci
	yarn publish lib --non-interactive

.PHONY: test lint prebuild copy-dts copy-npm build-dts build-js build
