import type { ImageMetadata } from 'astro:assets';
import { default as heroImg } from '../assets/complexity.png';
import authorImg from '../assets/dirk.png';
import logoDark from '../assets/generated/logo_dark.png';
import logoLight from '../assets/logo.png';

export type Image = {
    src: ImageMetadata;
    alt?: string;
    caption?: string;
};

export type Author = {
    name: string;
    image?: Image;
    url?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    author: Author;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

// ✅ Move this OUTSIDE of the config object
const base = '/teaching/complex-systems';

const siteConfig: SiteConfig = {
    logo: {
        src: logoLight,
        alt: 'SynoSys'
    },
    logoDark: {
        src: logoDark,
        alt: 'SynoSys (Dark)'
    },
    website: 'https://synosys.github.io',
    title: 'Introduction to Complex Systems in Biology (and Beyond)',
    author: {
        name: 'Dirk Brockmann',
        image: {
            src: authorImg,
            alt: 'Dirk Brockmann'
        },
        url: 'https://synosys.github.io'
    },
    subtitle: 'A course by Dirk Brockmann',
    description: '',
    image: {
        src: '/complexity.jpg',
        alt: 'Complex Systems in Biology'
    },
    headerNavLinks: [
        { text: 'Home', href: `${base}/` },
        { text: 'Tutorials', href: `${base}/tutorials/` },
        { text: 'Contact', href: `${base}/contact/` },
        { text: 'Explorables', href: 'https://complexity-explorables.org' }
    ],
    footerNavLinks: [
        { text: 'Contact', href: `${base}/contact/` },
        { text: 'Terms', href: `${base}/terms/` }
    ],
    socialLinks: [
        {
            text: 'Center Synergy of Systems',
            href: 'https://synosys.github.io'
        },
        {
            text: 'TU Dresden',
            href: 'https://tu-dresden.de'
        }
    ],
    hero: {
        title: 'Welcome!',
        text: 'brüllafen alarm ist auch was schönes, vor allem morgens',
        image: {
            src: heroImg,
            alt: 'A person sitting at a desk in front of a computer'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
