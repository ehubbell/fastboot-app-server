require('dotenv').config();

const S3Downloader = require('fastboot-s3-downloader');
const S3Notifier = require('fastboot-s3-notifier');
const FastBootAppServer = require('fastboot-app-server');

const S3_BUCKET = process.env.FASTBOOT_S3_BUCKET;
const S3_KEY = process.env.FASTBOOT_S3_KEY;
const AWS_KEY = process.env.AWS_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;

let downloader = new S3Downloader({
  bucket: S3_BUCKET,
  key: S3_KEY,
  accessKeyId: AWS_KEY,
  secretAccessKey: AWS_SECRET_KEY
});

let notifier = new S3Notifier({
  bucket: S3_BUCKET,
  key: S3_KEY,
  accessKeyId: AWS_KEY,
  secretAccessKey: AWS_SECRET_KEY
});

let server = new FastBootAppServer({
  downloader: downloader,
  notifier: notifier,
  gzip: true,
  host: '0.0.0.0',
  port: 4000,
  chunkedResponse: true
});

server.start();