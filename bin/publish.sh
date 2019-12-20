#!/bin/bash

rm -rf ./packages/hupo-ui/components
rm -rf ./packages/hupo-ui/core
cp -R ./src/components ./packages/hupo-ui
cp -R ./src/core ./packages/hupo-ui
