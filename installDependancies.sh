#!/usr/bin/env bash
brew reinstall nvm
mkdir -p .nvm
export NVM_DIR="$PWD/.nvm"
source $(brew --prefix nvm)/nvm.sh
nvm install 5.1.0
rm -Rf "${TMPDIR}/jest_preprocess_cache"
npm config set progress=false
npm install -g mocha
npm install
npm install -g flow-bin@`node -p "require('fs').readFileSync('.flowconfig', 'utf8').split('[version]')[1].trim()"`