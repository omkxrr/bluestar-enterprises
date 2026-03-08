import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | Oil & Gas, Chemical, Marine - Bluestar Enterprises',
  description: 'Bluestar Enterprises supplies premium alloys to Oil & Gas, Chemical, Marine, Aerospace, Power, Pharmaceutical, and other critical industries across India.',
  openGraph: {
    title: 'Industries Served | Bluestar Enterprises',
    description: 'Trusted alloy supplier for Oil & Gas, Chemical Processing, Marine, Aerospace, Power Generation, and Pharmaceutical industries.',
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
