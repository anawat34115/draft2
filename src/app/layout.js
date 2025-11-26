// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "The Reality - ตัวแทนซื้อขายอสังหาริมทรัพย์ระดับพรีเมียม",
  description: "Asset Plus Agent Co., Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        {/* ใส่ FontAwesome CDN ตรงนี้เพื่อให้ icon ติดทันที */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}