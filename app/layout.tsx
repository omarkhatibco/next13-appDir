import Link from 'next/link';
import 'styles/globals.css';
import NavMenu from './NavMenu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='bg-gray-50 antialiased'>
      <head />
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
