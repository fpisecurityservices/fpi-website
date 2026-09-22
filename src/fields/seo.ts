import type { Field } from 'payload';

// Per-page SEO fields, mirroring what src/lib/seo.js provides for the static routes.
export const seoField: Field = {
  name: 'meta',
  type: 'group',
  label: 'SEO',
  admin: { description: 'Controls the search-result title, description, and social share image.' },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: { description: 'Browser tab + Google result title. ~60 characters.' },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 200,
      admin: { description: 'Google result description. ~155 characters.' },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Image shown when the page is shared on social media.' },
    },
  ],
};
