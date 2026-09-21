import type { Block } from 'payload';

const bgField = {
  name: 'background',
  type: 'select' as const,
  defaultValue: 'white',
  options: [
    { label: 'White', value: 'white' },
    { label: 'Light gray', value: 'gray' },
  ],
};

export const ServiceHeroBlock: Block = {
  slug: 'serviceHero',
  labels: { singular: 'Service Hero', plural: 'Service Heroes' },
  fields: [
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    { name: 'heading', type: 'text', required: true },
    { name: 'intro', type: 'textarea' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/contact' },
  ],
};

export const ContentSection: Block = {
  slug: 'contentSection',
  labels: { singular: 'Content Section', plural: 'Content Sections' },
  fields: [
    bgField,
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '2',
      options: [
        { label: '1 column', value: '1' },
        { label: '2 columns', value: '2' },
        { label: '3 columns', value: '3' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'body', type: 'textarea' },
        { name: 'wide', type: 'checkbox', label: 'Full width' },
      ],
    },
    { name: 'afterHeading', type: 'text', admin: { description: 'Optional heading shown below the grid (e.g. a highlighted sub-point).' } },
    { name: 'afterBody', type: 'textarea' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/contact' },
    {
      name: 'ctaAlign',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
      ],
    },
    {
      name: 'ctaVariant',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'Primary (filled)', value: 'primary' },
        { label: 'Secondary (outline)', value: 'secondary' },
      ],
    },
  ],
};

export const CompareSection: Block = {
  slug: 'compareSection',
  labels: { singular: 'Compare Section', plural: 'Compare Sections' },
  fields: [
    bgField,
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      name: 'columns',
      type: 'array',
      maxRows: 2,
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'intro', type: 'textarea' },
        { name: 'bullets', type: 'array', fields: [{ name: 'text', type: 'text' }] },
      ],
    },
    { name: 'listsHeading', type: 'text' },
    {
      name: 'lists',
      type: 'array',
      maxRows: 2,
      fields: [
        { name: 'label', type: 'text' },
        { name: 'items', type: 'array', fields: [{ name: 'text', type: 'text' }] },
      ],
    },
  ],
};

export const StepsBlock: Block = {
  slug: 'steps',
  labels: { singular: 'Steps', plural: 'Steps Sections' },
  fields: [
    bgField,
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'body', type: 'textarea' },
      ],
    },
    { name: 'afterHeading', type: 'text' },
    { name: 'afterBody', type: 'textarea' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/contact' },
  ],
};

export const StatsSection: Block = {
  slug: 'statsSection',
  labels: { singular: 'Stats + Content', plural: 'Stats + Content Sections' },
  fields: [
    bgField,
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'stat', type: 'text' },
        { name: 'label', type: 'text' },
        { name: 'source', type: 'text' },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 columns', value: '2' },
        { label: '3 columns', value: '3' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'body', type: 'textarea' },
      ],
    },
  ],
};

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonials', plural: 'Testimonials Sections' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'note', type: 'text', admin: { description: 'Optional italic note under the heading.' } },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'attribution', type: 'text' },
      ],
    },
  ],
};

export const FAQBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQ Sections' },
  fields: [
    bgField,
    { name: 'heading', type: 'text' },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'question', type: 'text' },
        { name: 'answer', type: 'textarea' },
      ],
    },
    { name: 'contactText', type: 'text' },
    { name: 'phone', type: 'text' },
  ],
};

export const FinalCTABlock: Block = {
  slug: 'finalCta',
  labels: { singular: 'Final CTA', plural: 'Final CTAs' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'textarea' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/contact' },
  ],
};

export const PricingTiers: Block = {
  slug: 'pricingTiers',
  labels: { singular: 'Pricing Tiers', plural: 'Pricing Tiers' },
  fields: [
    bgField,
    { name: 'heading', type: 'text' },
    { name: 'intro', type: 'textarea' },
    {
      name: 'tiers',
      type: 'array',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'tagline', type: 'text' },
        { name: 'bullets', type: 'array', fields: [{ name: 'text', type: 'text' }] },
        { name: 'bestFor', type: 'textarea' },
      ],
    },
    { name: 'afterBody', type: 'textarea' },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaLink', type: 'text', defaultValue: '/contact' },
  ],
};

export const serviceBlocks: Block[] = [
  ServiceHeroBlock,
  ContentSection,
  CompareSection,
  StepsBlock,
  StatsSection,
  TestimonialsBlock,
  FAQBlock,
  FinalCTABlock,
  PricingTiers,
];
