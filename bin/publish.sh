#!/bin/bash

rm -rf ./packages/hupo-cml-ui/components
rm -rf ./packages/hupo-cml-ui/assets
rm -rf ./packages/hupo-cml-ui/core
cp -R ./src/components ./packages/hupo-cml-ui
cp -R ./src/assets ./packages/hupo-cml-ui
cp -R ./src/core ./packages/hupo-cml-ui
