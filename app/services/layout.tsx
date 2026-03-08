import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Custom Supply & Trading - Bluestar Enterprises',
  description: 'Bluestar Enterprises offers manufacturing, supply, trading, custom fabrication, quality testing, and global logistics for nickel alloys & specialty metals.',
  openGraph: {
    title: 'Services | Bluestar Enterprises',
    description: 'Expert supply, trading and custom fabrication services for industrial nickel alloys and specialty metal products.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
