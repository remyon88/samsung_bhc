// scripts/generate-qrcode.js
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const TARGET_URL = 'https://samsung-bhc-zzvw.vercel.app/'; // ← 여기 배포 URL로 바꿔

const outDir = path.join(__dirname, '..', 'public', 'qr');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outputFile = path.join(outDir, 'bhc-menu.png');

QRCode.toFile(outputFile, TARGET_URL, { width: 600, margin: 2 }, err => {
  if (err) { console.error(err); return; }
  console.log('✅ QR 코드 생성 완료:', outputFile);
});
