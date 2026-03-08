import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClientBody from '@/components/ClientBody';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C2B5A',
};

export const metadata: Metadata = {
  title: 'BLUESTAR ENTERPRISES | Leading Nickel Alloy & Specialty Metals Supplier India',
  description: 'BLUESTAR ENTERPRISES - Leading supplier & trader of nickel alloys, Hastelloy, Inconel, Monel, Titanium, Duplex Steel & specialty metal products. Serving industries across India since 2011.',
  keywords: 'nickel alloy supplier, hastelloy supplier india, inconel supplier, industrial alloys supplier india, monel 400 supplier, titanium supplier pune, duplex steel supplier',
  openGraph: {
    title: 'BLUESTAR ENTERPRISES | Nickel Alloy & Specialty Metals Supplier',
    description: 'Leading supplier of Hastelloy, Inconel, Monel, Titanium & specialty metals. Serving Oil & Gas, Chemical, Marine & Power industries since 2011.',
    url: 'https://www.bluestarenterprises.co.in',
    siteName: 'Bluestar Enterprises',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BLUESTAR ENTERPRISES',
              url: 'https://www.bluestarenterprises.co.in',
              logo: 'https://www.bluestarenterprises.co.in/img/logo.png',
              description: 'Leading supplier of nickel alloys and specialty metal products in India.',
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Gat No. 1436, Chakan - Talegaon Road, Chakan MIDC, Phase - I',
                  addressLocality: 'Pune',
                  postalCode: '410501',
                  addressRegion: 'Maharashtra',
                  addressCountry: 'IN',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Shop No-24/2, 2nd Lane, Khetwadi',
                  addressLocality: 'Mumbai',
                  postalCode: '400004',
                  addressRegion: 'Maharashtra',
                  addressCountry: 'IN',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9930707298',
                contactType: 'sales',
                email: 'sales@bluestarenterprises.co.in',
              },
              sameAs: ['https://www.instagram.com/thebluestarenterprises/'],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white">
        <ClientBody>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientBody>
      </body>
    </html>
  );
}
