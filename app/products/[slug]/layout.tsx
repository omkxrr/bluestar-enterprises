import { Metadata } from 'next';
import { PRODUCTS } from '@/lib/constants';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Bluestar Enterprises',
    };
  }

  const title = `${product.name} (${product.grade}) | Bluestar Enterprises`;
  const description = `${product.description} Available in ${product.forms.join(', ')}. Buy ${product.name} from trusted supplier Bluestar Enterprises.`;

  return {
    title,
    description,
    keywords: `${product.name}, ${product.grade}, ${product.name} supplier india, ${product.name} pipes tubes, ${product.forms.map(f => `${product.name} ${f}`).join(', ')}`,
    openGraph: {
      title: `${product.name} - Premium ${product.grade} Products`,
      description,
      images: product.image ? [{ url: product.image, alt: product.name }] : undefined,
    },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
