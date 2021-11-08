const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp();

const fs = require('fs');
const path = require('path');

exports.resultOgTags1 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="「人間失格度」0%" />'
    + '<meta property="og:description" content="「人間失格度」0% 「走れメロス」級です。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result1.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags2 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="「人間失格度」25%" />'
    + '<meta property="og:description" content="「人間失格度」25% 「御伽草子」級です。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result2.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags3 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="「人間失格度」50%" />'
    + '<meta property="og:description" content="「人間失格度」50% 「女生徒」級です。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result3.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags4 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="「人間失格度」75%" />'
    + '<meta property="og:description" content="「人間失格度」75% 「ヴィヨンの妻」級です。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result4.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags5 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="「人間失格度」100%" />'
    + '<meta property="og:description" content="「人間失格度」100% 大庭葉蔵の生き写しです！" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result5.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});
