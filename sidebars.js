/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pluginsOverviewSidebar: [
    { type: 'ref', id: 'plugins/overview/index', label: 'Overview' },
    { type: 'ref', id: 'plugins/overview/what-is-modular-plugin' },
    { type: 'ref', id: 'plugins/overview/what-problem-it-solve' },
    { type: 'ref', id: 'plugins/overview/why-should-use' },
  ],

  jsPluginSdkSidebar: [
    {
      type: 'ref',
      id: 'sdk-librairies/plugins-js-sdk/index',
      label: 'Installation',
    },
    {
      type: 'category',
      collapsible: false,
      label: 'SDK APIs',
      items: [
        {
          type: 'ref',
          id: 'sdk-librairies/plugins-js-sdk/plugins-apis',
          label: 'Plugins',
        },
        {
          type: 'ref',
          id: 'sdk-librairies/plugins-js-sdk/embedded-softphone-apis',
          label: 'Embedded Softphone',
        },
      ]
    },
    {
      type: 'category',
      label: '📚 Guides',
      collapsible: false,
      items: [
        {
          type: 'ref',
          id: 'plugins/ui/get-started/index',
          label: 'Get Started (Modular Plugins)'
        },
        {
          type: 'ref',
          id: 'integrations/embedded-softphone/index',
          label: 'Get Started (Embedded Softphone)'
        },
      ]
    }
  ],

  softphoneSidebar: [
    {
      type: 'ref',
      id: 'integrations/embedded-softphone/index',
      label: 'Introduction'
    },
    {
      type: 'ref',
      id: 'sdk-librairies/plugins-js-sdk/embedded-softphone-apis',
      label: 'SDK APIs',
    },
  ],

  pluginsSidebar: [
  //   {
  //     type: 'ref',
  //     id: 'plugins/introduction',
  //     label: 'Introduction',
  //   },
  //   {
  //     type: 'category',
  //     collapsible: false,
  //     label: 'Configuration',
  //     items: [
  //       {
  //         type: 'ref',
  //         id: 'plugins/configuration',
  //         label: 'Base Configuration',
  //       },
  //       {
  //         type: 'ref',
  //         id: 'plugins/web-desktop-application',
  //         label: 'E-UC Apps - Web & Desktop',
  //       },
  //       {
  //         type: 'ref',
  //         id: 'plugins/mobile',
  //         label: 'E-UC Apps - Mobile',
  //       },
  //       {
  //         type: 'ref',
  //         id: 'plugins/portal',
  //         label: 'E-UC Portal',
  //       },
  //       {
  //         type: 'ref',
  //         id: 'plugins/translation',
  //         label: 'Translation',
  //       },
  //     ]
  //   },
  //   {
  //     type: 'ref',
  //     id: 'plugins/sdk',
  //     label: 'SDK API',
  //   },
  //   {
  //     type: 'ref',
  //     id: 'plugins/deploy',
  //     label: 'Deployment',
  //   },
  //   {
  //     type: 'category',
  //     collapsible: false,
  //     label: 'Examples',
  //     items: [
  //       {
  //         type: 'ref',
  //         id: 'plugins/templates',
  //         label: 'Templates',
  //       },
  //       {
  //         type: 'ref',
  //         id: 'plugins/wda-examples',
  //         label: 'E-UC Apps - Web & Desktop',
  //       },
  //       {
  //         type: 'ref',
  //         id: 'plugins/portal-examples',
  //         label: 'E-UC Portal',
  //       },
  //     ],
  //   },
  ],
};

module.exports = sidebars;
