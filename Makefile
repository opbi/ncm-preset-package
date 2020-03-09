## CONFIG
export PATH := ./node_modules/.bin:$(PATH)
SHELL := /bin/bash -v

## VARIABLES

## COMMANDS
install:
	@yarn

cleanup:
	@rm -rf node_modules coverage .build dist _book docs  *.log API.md

build:
	@rm -rf dist
	@babel src -d dist --ignore '**/__tests__/*.js'

build-watch:
	@babel src -d dist --ignore '**/__tests__/*.js' --watch

typecheck:
	@tsc

lint:
	@eslint_d src

lint-fix:
	@eslint_d src --fix

lint-reset:
	@eslint_d restart

test:
	@jest

test-watch:
	@jest --watch --coverage

test-coverage:
	@jest --coverage

docs:
	@documentation build src/** -f md --markdown-toc false > API.md

docs-watch:
	@documentation serve --shallow --watch src/**

book:
	@rm -rf _book
	@gitbook serve

commit:
	@commit

release:
	@semantic-release
