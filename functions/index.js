const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp();

const fs = require('fs');
const path = require('path');

exports.resultOgTags1 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="人間失格度0% 「走れメロス」級" />'
    + '<meta property="og:description" content="人間失格度0%のあなたは「走れメロス」級の人間です！友人との約束を守るメロスのように模範となる人間でしょう。「走れメロス」は教科書にも載っており、太宰治の代表的な作品の1つです。話が暗くなく読みやすいので、読んでみてはいかがでしょうか。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result1.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags2 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="人間失格度25% 「お伽草子」級" />'
    + '<meta property="og:description" content="人間失格度25%のあなたは「お伽草子」級の人間です！お伽草子は、昔話を太宰流に想像を膨らませてリメイクした昔話パロディ作品です。この昔話そんな話じゃないだろ！とツッコミながら笑ってしまいます。パロディ短編の詰め合わせで読みやすいので、ぜひ読んでみて下さい" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result2_2.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags3 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="人間失格度50% 「女生徒」級" />'
    + '<meta property="og:description" content="人間失格度50%のあなたは「女生徒」級の人間です！「女生徒」は、太宰治が女子になりきって書いた日記風の小説です。主人公の純粋で無邪気な部分と、どこか寂しさを感じる影の部分が描かれていて、奥深さがあります。この「女生徒」は、一人称で書かれており、主人公の内面が丁寧に描かれています。短編でとても読みやすいので、ぜひ読んでみて下さい。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result3.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags4 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="人間失格度75% 「ヴィヨンの妻」級" />'
    + '<meta property="og:description" content="人間失格度75%のあなたは「ヴィヨンの妻」級の人間です！「ヴィヨンの妻」は、ダメな夫を持つ妻を主人公とし、彼女の苦悩と生き方を描いた作品です。辛い状況でも明るく振る舞って生きる主人公の姿は好感が持てます。登場人物が妙に人間臭くて魅力のある作品なので、一度手にとってみてはいかがでしょうか。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result4.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});

exports.resultOgTags5 = functions.https.onRequest((req, res) => {
  const ogTags = '<meta name="twitter:card" content="summary_large_image"></meta>'
    + '<meta property="og:title" content="人間失格度100% 「人間失格」級" />'
    + '<meta property="og:description" content="人間失格度100%のあなたは、「人間失格」の主人公「大庭葉蔵」に共感出来るかもしれません！「人間失格」は、太宰治の人生が反映されていると言われており、太宰治の人生の切り売りとも言える小説です。日本人に長く愛されている名作なので、ぜひ読んでみて下さい。" />'
    + '<meta property="og:image" content="https://no-longer-human.s3.ap-northeast-1.amazonaws.com/result5.png" />';
  const htmlFile = fs.readFileSync(path.join(__dirname, './index.html'));
  const html = htmlFile.toString().replace('</head>', `${ogTags}</head>`);
  res.send(html);
});
