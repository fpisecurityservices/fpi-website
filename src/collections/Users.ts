import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminField } from '../access';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'email', defaultColumns: ['name', 'email', 'role'], group: 'Admin' },
  access: {
    // Admins manage accounts; anyone logged in can read the list.
    admin: ({ req }) => Boolean(req.user),
    create: isAdmin,
    read: ({ req }) => Boolean(req.user),
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: { update: isAdminField },
      admin: { description: 'Editors manage pages, posts, and media. Admins also manage users, globals, and redirects.' },
    },
  ],
};
