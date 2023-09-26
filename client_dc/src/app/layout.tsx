import NavBar from '@/components/NavBar';
import './globals.css';
import type { Metadata } from 'next';

import RootRecoil from '@/recoil/RootRecoil';

export const metadata: Metadata = {
  title: 'Dream Consumer',
  description: 'Dream Consumer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <RootRecoil>
          <NavBar />
          {children}
        </RootRecoil>
      </body>
    </html>
  );
}
