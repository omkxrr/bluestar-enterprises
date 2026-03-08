import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Bluestar Enterprises - Nickel Alloy Supplier Since 2011',
  description: 'Learn about Bluestar Enterprises - India\'s trusted supplier of Hastelloy, Inconel, Monel, Titanium & specialty metals. Founded in 2011, serving 500+ clients across 8+ industries.',
  openGraph: {
    title: 'About Bluestar Enterprises | Our Story & Vision',
    description: 'Established in 2011, Bluestar Enterprises is a leading supplier of premium nickel alloys and specialty metals in India.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
