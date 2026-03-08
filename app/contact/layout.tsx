import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Bluestar Enterprises - Pune & Mumbai Offices',
  description: 'Contact Bluestar Enterprises for nickel alloy inquiries. Call +91-9930707298, email sales@bluestarenterprises.co.in. Offices in Pune (Chakan MIDC) & Mumbai.',
  openGraph: {
    title: 'Contact Bluestar Enterprises',
    description: 'Get in touch for inquiries, quotations, or technical support. Offices in Pune and Mumbai.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
