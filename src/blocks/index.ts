import type { Block } from 'payload';
import { serviceBlocks } from './service';
import { homeBlocks } from './home';

// A constrained icon set (lucide-react names already used across the site).
const ICON_OPTIONS = [
  'shield', 'car', 'video', 'camera', 'lock', 'bot', 'cpu', 'home',
  'shopping-bag', 'hard-hat', 'building-2', 'heart-pulse', 'warehouse',
  'hotel', 'map-pin', 'phone', 'check-circle', 'clock',
].map((v) => ({ label: v, value: v }));

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'command',
      options: [
        { label: 'Command (dark, full-bleed image)', value: 'command' },
        { label: 'Clarity (light, split layout)', value: 'clarity' },
      ],
    },
    { name: 'eyebrow', type: 'text', admin: { description: 'Small label above the headline.' } },
    { name: 'headline', type: 'text', required: true, maxLength: 80 },
    { name: 'subhead', type: 'textarea', maxLength: 400 },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', admin: { description: 'e.g. /contact' } },
  ],
};

export const RichTextBlock: Block = {
  slug: 'richText',
  labels: { singular: 'Rich Text', plural: 'Rich Text Sections' },
  fields: [{ name: 'content', type: 'richText' }],
};

export const CTABlock: Block = {
  slug: 'cta',
  labels: { singular: 'CTA Band', plural: 'CTA Bands' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'textarea' },
    { name: 'buttonText', type: 'text' },
    { name: 'buttonLink', type: 'text', admin: { description: 'e.g. /contact' } },
  ],
};

export const FeatureGrid: Block = {
  slug: 'featureGrid',
  labels: { singular: 'Feature Grid', plural: 'Feature Grids' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'icon', type: 'select', options: ICON_OPTIONS },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
};

export const StatBand: Block = {
  slug: 'statBand',
  labels: { singular: 'Stat Band', plural: 'Stat Bands' },
  fields: [
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: 'value', type: 'text', required: true, admin: { description: 'e.g. 24/7 or $202,000' } },
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
};

export const layoutBlocks: Block[] = [
  ...homeBlocks,
  ...serviceBlocks,
  Hero,
  RichTextBlock,
  FeatureGrid,
  StatBand,
  CTABlock,
];
