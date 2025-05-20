import type { MarkdownHeading } from 'astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { getCollection, render } from 'astro:content';

const pageTitle = 'Arden Swim Club';

const backgrounds = [
  'bg-teal-200',
  'bg-teal-300',
  'bg-teal-400'
];

const collection  = await getCollection('landingPageSections');

export type SectionInfo = { 
    Content: AstroComponentFactory;
    headings: MarkdownHeading[];
    id: string;
    title: string;
    textColor?: string | undefined;
    background?: string | undefined;
    order: number;  
}

export const sections : SectionInfo[] = await Promise.all(
    collection.map(async (section, index) => {
      const { Content, headings } = await render(section);
      const data = section.data;
      const background = backgrounds[index % backgrounds.length];
  
      return {
        Content,
        headings,
        background,
        id: section.id,
        title: data.title,
        textColor: data.textColor,
        order: data.order
      };
    })
  );    

  //

export const links = [
  // { href: '/', title: 'Home' },
  { href: '/hours', title: 'Hours' },
  { href: '/pool-rules', title: 'Pool Rules' },
  { href: '/swim-team', title: 'Swim Team' },
  ...sections.sort((a,b) => a.order - b.order ).map(s => {
      return { href: `/#${s.id}`, title: s.title };
  }),
];