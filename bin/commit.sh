#!/bin/bash

function git-branch-name {
  git symbolic-ref --short -q HEAD
}

cd ../
branch=`git-branch-name`
echo "执行提交"
git config --global user.email "448216252@qq.com"
git config --global user.name "ChenXiaoSong12321"
git add .
ls_date=`date +%Y.%m.%d`
git commit -m "$1 push in $ls_date"
git config --global credential.helper store
git pull origin $branch
git push origin $branch
git push github $branch

echo "提交完成"