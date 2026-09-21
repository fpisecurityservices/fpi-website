import type { Block } from 'payload';

const TRUST_ICONS = ['shield-check', 'badge-check', 'clock', 'phone', 'map-pin'].map((v) => ({ label: v, value: v }));
const TECH_ICONS = ['monitor', 'radio', 'file-text', 'map-pin', 'bell', 'lock', 'shield-check'].map((v) => ({ label: v, value: v }));

export const HomeHero: Block = {
  slug: 'homeHero',
  labels: { singular: 'Home Hero', plural: 'Home Heroes' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Small label above the headline, e.g. the states served.' } },
    { name: 'heading', type: 'text', required: true },
    { name: 'accentHeading', type: 'text', admin: { description: 'Second line of the headline, shown in the accent color.' } },
    { name: 'tagline', type: 'text' },
    { name: 'subhead', type: 'textarea' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    { name: 'statValue', type: 'text', admin: { description: 'e.g. $202,000' } },
    { name: 'statNote', type: 'textarea' },
    { name: 'primaryCtaText', type: 'text' },
    { name: 'primaryCtaLink', type: 'text', defaultValue: '/contact' },
    { name: 'phone', type: 'text', defaultValue: '(800) 374-4316' },
    { name: 'badges', type: 'array', fields: [{ name: 'text', type: 'text' }] },
    { name: 'stats', type: 'array', fields: [{ name: 'value', type: 'text' }, { name: 'label', type: 'text' }] },
  ],
};

export const TrustBarBlock: Block = {
  slug: 'trustBar',
  labels: { singular: 'Trust Bar', plural: 'Trust Bars' },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'icon', type: 'select', defaultValue: 'shield-check', options: TRUST_ICONS },
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
};

export const ServicesGrid: Block = {
  slug: 'servicesGrid',
  labels: { singular: 'Services Grid', plural: 'Services Grids' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'subhead', type: 'textarea' },
  ],
};

export const AboutSplit: Block = {
  slug: 'aboutSplit',
  labels: { singular: 'About Split', plural: 'About Splits' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', admin: { description: 'Use a line break in the field for the two-line heading.' } },
    { name: 'body', type: 'textarea', admin: { description: 'Separate paragraphs with a blank line.' } },
    { name: 'stats', type: 'array', maxRows: 3, fields: [{ name: 'value', type: 'text' }, { name: 'label', type: 'text' }] },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/contact' },
    { name: 'imageMain', type: 'upload', relationTo: 'media' },
    { name: 'imageInset', type: 'upload', relationTo: 'media' },
  ],
};

export const TechShowcase: Block = {
  slug: 'techShowcase',
  labels: { singular: 'Tech Showcase', plural: 'Tech Showcases' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'subhead', type: 'textarea' },
    { name: 'features', type: 'array', fields: [{ name: 'text', type: 'text' }] },
    {
      name: 'techItems',
      type: 'array',
      fields: [
        { name: 'icon', type: 'select', defaultValue: 'monitor', options: TECH_ICONS },
        { name: 'label', type: 'text' },
        { name: 'desc', type: 'text' },
        { name: 'link', type: 'text', admin: { description: 'Optional. A linked item spans the full width.' } },
      ],
    },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/technology/platform' },
  ],
};

export const IndustriesGrid: Block = {
  slug: 'industriesGrid',
  labels: { singular: 'Industries Grid', plural: 'Industries Grids' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'subhead', type: 'textarea' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/industries' },
  ],
};

export const CTABanner: Block = {
  slug: 'ctaBanner',
  labels: { singular: 'CTA Banner', plural: 'CTA Banners' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subhead', type: 'textarea' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    { name: 'primaryCtaText', type: 'text' },
    { name: 'primaryCtaLink', type: 'text', defaultValue: '/contact' },
    { name: 'phone', type: 'text', defaultValue: '(800) 374-4316' },
  ],
};

export const homeBlocks: Block[] = [
  HomeHero,
  TrustBarBlock,
  ServicesGrid,
  AboutSplit,
  TechShowcase,
  IndustriesGrid,
  CTABanner,
];
