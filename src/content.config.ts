// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const landingPageSections = defineCollection({ 
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/sections/landing-page" }),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        bg: z.string().optional(),
        textColor: z.string().optional(),
        order: z.number()
      }),
 });


// 4. Export a single `collections` object to register your collection(s)
export const collections = { 
  landingPageSections  
};