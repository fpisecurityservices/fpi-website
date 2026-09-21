import type { GlobalConfig } from 'payload';
import { anyone, isAdmin } from '../access';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: { group: 'Site' },
  access: { read: anyone, update: isAdmin },
  fields: [
    { name: 'phone', type: 'text', defaultValue: '(800) 374-4316' },
    { name: 'email', type: 'text', defaultValue: 'info@fpisecurity.com' },
    {
      name: 'offices',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'address', type: 'textarea' },
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'text' },
      ],
    },
    {
      name: 'licenseNumbers',
      type: 'array',
      label: 'License Numbers',
      fields: [
        { name: 'state', type: 'text' },
        { name: 'number', type: 'text' },
      ],
    },
  ],
};
