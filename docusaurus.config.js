// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wazo E-UC Plugins SDK',
  tagline: 'Extend the capabilities of Wazo Products through our open architecture, leveraging public REST APIs, WebSocket support, Webhooks, and WebRTC. Seamlessly integrate the Wazo softphone or other tools into any existing system, and customize functionality with our powerful plugin system.',

  url: 'https://wazo.io',
  baseUrl: isDev ? '/' : 'developers.wazo.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wazo-communication', // Usually your GitHub org/user name.
  projectName: 'developers.wazo.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          editUrl: 'https://github.com/wazo-communication/developers.wazo.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    path.resolve(__dirname, 'doc-assets', 'softphone-plugin'),
    [
      '@docusaurus/plugin-content-blog',
      {
        blogTitle: 'Case Studies',
        id: 'case-studies',
        routeBasePath: 'case-studies',
        path: './case-studies',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        title: 'Developers',
        logo: {
          alt: 'Wazo Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/use-cases', label: 'Use cases', position: 'left' },
          {
            type: 'dropdown',
            label: 'Modular Plugins',
            position: 'left',
            to: '/docs/plugins/introduction',
            items: [
              { to: '/docs/plugins/introduction', label: 'Introduction' },
              { to: '/docs/plugins/overview', label: 'Philosophy' },
              { type: 'html', value: "<hr />"  },
              { to: '/docs/plugins/ui/get-started/', label: 'UI Plugin' },
              { to: '/docs/plugins/pbx', label: 'Stack Plugin' },
              { to: '/docs/plugins/provisioning', label: 'Provisioning Plugin' },
            ]
          },
          {
            type: 'dropdown',
            label: 'Integrations',
            position: 'left',
            items: [
              { to: '/docs/integrations/embedded-softphone', label: 'Embedded Softphone' },
              { to: '/docs/integrations/deeplink', label: 'Deep Linking' },
            ]
          },

          {
            type: 'dropdown',
            label: 'APIs & References',
            position: 'left',
            items: [
              { to: '/docs/sdk-librairies/plugins-js-sdk', label: 'JS - Plugins SDK' },
              { href: 'https://github.com/wazo-platform/wazo-js-sdk?tab=readme-ov-file#wazos-javascript-software-development-kit', label: 'JS - Wazo SDK' },
              { href: 'https://github.com/wazo-platform/?q=client&type=all&language=python&sort=', label: 'Python - Library Clients' },
            ]
          },


          // Right
          { to: '/case-studies', label: 'Case studies', position: 'right' },
          {
            href: 'https://github.com/wazo-communication/developers.wazo.io',
            className: 'header-github-link',
            position: 'right',
            title: 'GitHub Repository',
            'aria-label': 'GitHub Repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Wazo Communication Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'diff', 'json', 'javascript', 'typescript', 'python'],
      },
    }),
  clientModules: [
    require.resolve('./src/softphone-module.js'),
  ],
};

module.exports = config;
