import type { Access, FieldAccess } from 'payload';

// Any logged-in user (admin or editor) may manage content.
export const authenticated: Access = ({ req }) => Boolean(req.user);

// Admins only.
export const isAdmin: Access = ({ req }) => req.user?.role === 'admin';
export const isAdminField: FieldAccess = ({ req }) => req.user?.role === 'admin';

// Public reads see only published docs; logged-in users see drafts too.
export const readPublished: Access = ({ req }) => {
  if (req.user) return true;
  return { _status: { equals: 'published' } };
};

export const anyone: Access = () => true;
