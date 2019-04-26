#!/bin/bash
rm -rf ./package/components
rm -rf ./package/assets
rm -rf ./package/core
cp -R ./src/components/ ./package/components
cp -R  ./src/assets/ ./package/assets
cp -R  ./src/core/ ./package/core