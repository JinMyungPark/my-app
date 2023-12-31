import { Metadata } from 'next';

export const metadata = {
  title: {
    default: '___root___',
  },
  description: '설명',
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
