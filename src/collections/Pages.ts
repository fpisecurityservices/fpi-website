import type { CollectionConfig } from 'payload';
import { authenticated, readPublished } from '../access';
import { layoutBlocks } from '../blocks';
import { seoField } from '../fields/seo';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    group: 'Content',
  },
  versions: {
    drafts: { autosave: { interval: 375 } },
    maxPerDoc: 25,
  },
  access: {
    read: readPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'The URL path, e.g. "security-officers" or "industries/retail-shopping-center-security". Use "home" for the homepage.',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page sections',
      blocks: layoutBlocks,
      admin: { description: 'Add, remove, and reorder the sections that make up this page.' },
    },
    seoField,
  ],
};
