import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote | Get Best Prices - Bluestar Enterprises',
  description: 'Request a free quote for Hastelloy, Inconel, Monel, Titanium & specialty metal products. Fast response, competitive pricing, bulk order discounts available.',
  openGraph: {
    title: 'Request a Quote | Bluestar Enterprises',
    description: 'Get competitive quotes on premium nickel alloys and specialty metals. Fast response guaranteed.',
  },
};

export default function EnquiryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
