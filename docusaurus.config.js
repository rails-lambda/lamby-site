// @ts-check
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lamby - Simple Rails & AWS Lambda Integration using Rack',
  url: 'https://lamby.custominktech.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'customink',
  projectName: 'lamby',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/customink/lamby-site/tree/main',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true
  },
  themes: [
    '@docusaurus/theme-mermaid'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lamby',
        logo: {
          alt: 'Lamby Logo',
          src: 'img/lamby-logo-small.png',
        },
        items: [
          {
            href: '/docs/quick-start',
            label: 'Quick Start',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'anatomy',
            position: 'left',
            label: 'Documentation',
          },
          { 
            to: '/blog', 
            label: 'Updates Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/customink/lamby',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quick-start',
              },
              {
                label: 'Documentation',
                to: '/docs/anatomy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter @CustomInkTech',
                href: 'https://twitter.com/custominktech',
              },
              {
                label: 'Technology Blog on Dev.to',
                href: 'https://dev.to/customink'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Lamby Blog',
                to: '/blog',
              },
              {
                label: 'GitHub Project',
                href: 'https://github.com/customink/lamby',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} - Made with ❤️ by Custom Ink | Tech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'ruby', 
          'docker',
          'yaml'
        ]
      },
      metadata: [
        {name: 'keywords', content: 'rails, rack, lambda, serverless, containers'}
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true
      }
    })
};

module.exports = config;
