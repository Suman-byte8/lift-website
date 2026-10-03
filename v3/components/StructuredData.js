import { siteConfig } from '@/data/site';

const origin = siteConfig.origin;

export default function StructuredData({ type = 'organization', data }) {
  let schema = data;
  if (type === 'organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AUREL Home Lifts',
      url: origin,
      logo: `${origin}/aurel-mark.svg`,
      description: 'A considered approach to residential home mobility, designed around the architecture of home.'
    };
  }
  if (!schema) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}
