import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const faviconSVG = {
    __html: `
    <svg width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-gray-800">
      <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" stopColor="#000000"></path>
      <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" stopColor="#000000"></path>
    </svg>`
  };

  return (
    <html lang="en">
      <Head>
        <title>Cloud Compiler</title>
        <meta name="description" content="AI coding tutor" />
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMzkiIHZpZXdCb3g9IjAgMCA1MCAzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzc05hbWU9ImZpbGwtZ3JheS04MDAiPjxwYXRoIGQ9Ik0xNi40OTkyIDJIMzcuNTgwOEwyMi4wODE2IDI0Ljk3MjlIMUwxNi40OTkyIDJaIiBzdG9wQ29sb3I9IiMwMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNMTcuNDIyNCAyNy4xMDJMMTEuNDE5MiAzNkgzMy41MDA4TDQ5IDEzLjAyNzFIMzIuNzAyNEwyMy4yMDY0IDI3LjEwMkgxNy40MjI0WiIgc3RvcENvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9zdmc+" type="image/svg+xml" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
