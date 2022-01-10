git add -A
git commit -m "$1"
git push 

git checkout gh-pages
git merge main
git push