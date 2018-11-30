#!/bin/sh

set -e

LAST_COMMIT=$(git rev-parse HEAD)
LAST_DOCS_RELATED_COMMIT=$(git log -1 --format=format:%H \
  --full-diff -- docs -- .bookignore -- book.json -- README.md -- SUMMARY.md)

func updateGithubPage() {
  git config --global user.name 'CircleCI';
  git config --global user.email 'circleci@users.noreply.github.com';
  npx jsdoc2md src/** -g none > API.md;
  npx gitbook build;
  npx gh-pages -d _book -m 'Automated Github Page Update [skip ci]';
}

if [ $LAST_COMMIT = $LAST_DOCS_RELATED_COMMIT ] ; then
  updateGithubPage()
else
  echo 'Nothing related to docs have been changed. Skip.'
fi;
