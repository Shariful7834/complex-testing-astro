import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import siteConfig from './src/data/site-config';
import generateDarkImages from './src/integrations/generate-dark-images';

import react from '@astrojs/react';

export default defineConfig({
    site: siteConfig.website,
    base: '/teaching/complex-systems/', // Adjust the base path as needed

    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [
                rehypeKatex,
                {
                    // Katex plugin options
                }
            ]
        ]
    },
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap(), generateDarkImages(), react()]
});
