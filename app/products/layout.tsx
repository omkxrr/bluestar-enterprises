import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Premium Nickel Alloys & Specialty Metals - Bluestar Enterprises',
  description: 'Browse our range of Hastelloy, Inconel, Monel, Titanium, Duplex Steel, Alloy 20, Nimonic & more. Available in pipes, tubes, plates, sheets, bars, fittings & flanges.',
  openGraph: {
    title: 'Premium Alloy Products | Bluestar Enterprises',
    description: 'Comprehensive range of nickel alloys and specialty metals - Hastelloy, Inconel, Monel, Titanium, Duplex, and more.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
