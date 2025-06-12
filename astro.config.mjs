import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import generateDarkImages from './src/integrations/generate-dark-images';

export default defineConfig({
    site: 'https://shariful7834.github.io/complex-testing-astro/',
    base: '/complex-testing-astro/',
    trailingSlash: 'always',

    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [
                rehypeKatex,
                {
                    // KaTeX plugin options (optional)
                }
            ]
        ]
    },

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [mdx(), sitemap(), generateDarkImages(), react()]
});
