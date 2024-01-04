'use strict';

const serverless = require('serverless-http');
const { createApp } = require('./dist/app');

module.exports.startApp = serverless(createApp());
