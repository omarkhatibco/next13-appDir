import 'styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='bg-gray-50 antialiased'>
      <head />
      <body>{children}</body>
    </html>
  );
}
