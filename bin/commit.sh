#!/bin/bash

function git-branch-name {
  git symbolic-ref --short -q HEAD
}

function get-project-path {
  path=`pwd`
  path=${path//bin/}
  echo $path
}

path=`get-project-path`
cd $path
branch=`git-branch-name`
echo "执行提交 当前在$branch分支"

git add .
ls_date=`date +%Y.%m.%d`
username=`git config user.name`
git commit -m "$1 push at $ls_date by $username"

git pull origin $branch
git pull github $branch
git config --global credential.helper store
git push origin $branch
git push github $branch

echo "提交完成"