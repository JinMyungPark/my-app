import { Metadata } from 'next';

export const metadata = {
  title: '데시보드/ddddddddddddOO',
  description: '설명/ddddddddOO',
  //metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
