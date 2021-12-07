#!/usr/bin/env sh

set -e

npm install
npm run build

cd dist

git init 
git add -A
git commit -m "New deployment"
git push -f git@github.com:matheusode/matheusode.me.git master:gh-pages

cd -
