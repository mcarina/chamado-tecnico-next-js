import PageNavBar from "@/app/(root)/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''>
        <PageNavBar />
        {children}
      </body>
    </html>
  );
}
