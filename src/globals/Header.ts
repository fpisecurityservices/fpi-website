import type { GlobalConfig } from 'payload';
import { anyone, isAdmin } from '../access';

export const Header: GlobalConfig = {
  slug: 'header',
  admin: { group: 'Site' },
  access: { read: anyone, update: isAdmin },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation links',
      maxRows: 10,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'path', type: 'text', required: true, admin: { description: 'e.g. /industries' } },
      ],
    },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Get a Quote' },
    { name: 'ctaPath', type: 'text', defaultValue: '/contact' },
  ],
};
