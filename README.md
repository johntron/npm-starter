[![Build Status](https://travis-ci.org/johntron/npm-starter.svg?branch=master)](https://travis-ci.org/johntron/npm-starter)
[![Maintainability](https://api.codeclimate.com/v1/badges/a6a94889cc58ffddd9a2/maintainability)](https://codeclimate.com/github/johntron/npm-starter/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/johntron/npm-starter.svg)](https://greenkeeper.io/)
[![codecov](https://codecov.io/gh/johntron/npm-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/johntron/npm-starter)

## Getting Started

You just need to clone this project, delete the `.git` folder and install the NPM dependencies.

Also, change the travis-ci badge at the top from .org to travis-ci.com and set your account up there.

```shell
git clone https://github.com/johntron/npm-starter.git
rm -rf npm-starter/.git
cp -r npm-starter/* .
cp -r npm-starter/.* .
npm install
rm -rf npm-starter
```

Then these manual steps:

-   Copy Code Climate test reporter ID to environment variable in travis-ci
