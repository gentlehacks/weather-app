"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import "./globals.css";
import { usePathname } from 'next/navigation';                                  

export default function RootLayout({
  children,
}: Readonly<{          
  children: ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <script defer data-domain="weather-app-ibbu.vercel.app" src="https://plausible.io/js/scrip.js" />
      </head>
      <body
        className={`antialiased`}
      >
        <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      </body>
    </html>
  );
}
