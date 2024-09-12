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
    { type: 'ref', id: 'plugins/introduction', label: 'Introduction' },
    {
      type: 'category',
      collapsed: false,
      label: 'Philosophy',
      link: { type: 'doc', id: 'plugins/overview/index' },
      items: [
        { type: 'ref', id: 'plugins/overview/index', label: 'Our Main Goal' },
        { type: 'ref', id: 'plugins/overview/what-problem-it-solve' },
        { type: 'ref', id: 'plugins/overview/why-should-use' },
      ]
    },

    {
      type: 'category',
      label: 'UI Plugin',
      link: { type: 'doc', id: 'plugins/ui/get-started/index' },
      items: [
        {
          type: 'category',
          collapsed: false,
          label: 'Get started',
          link: { type: 'doc', id: 'plugins/ui/get-started/index' },
          items: [
            { type: 'ref', id: 'plugins/ui/get-started/index', label: 'Quickstart' },
            { type: 'ref', id: 'plugins/ui/get-started/configuration', label: 'Configuration' },
            { type: 'ref', id: 'plugins/ui/internationalization', label: 'Internationalization' },
            { type: 'ref', id: 'plugins/ui/deploy', label: 'Deployment' },
            { type: 'ref', id: 'plugins/ui/templates', label: 'Templates' },
          ]
        },

        {
          type: 'category',
          label: 'Build App Plugin',
          link: { type: 'doc', id: 'plugins/ui/apps/index' },
          items: [
            { type: 'ref', id: 'plugins/ui/apps/index', label: 'Documentation' },
            { type: 'ref', id: 'plugins/ui/apps/examples', label: 'Examples' },
          ]
        },

        {
          type: 'category',
          label: 'Build Mobile Plugin',
          link: { type: 'doc', id: 'plugins/ui/mobile/index' },
          items: [
            { type: 'ref', id: 'plugins/ui/mobile/index', label: 'Documentation' },
            { type: 'ref', id: 'plugins/ui/mobile/examples', label: 'Examples' },
          ]
        },

        {
          type: 'category',
          label: 'Build Portal Plugin',
          link: { type: 'doc', id: 'plugins/ui/portal/index' },
          items: [
            { type: 'ref', id: 'plugins/ui/portal/index', label: 'Documentation' },
            { type: 'ref', id: 'plugins/ui/portal/examples', label: 'Examples' },
          ]
        },
      ]
    },

    { type: 'ref', id: 'plugins/pbx/index', label: 'Stack Plugin' },
    { type: 'ref', id: 'plugins/provisioning/index', label: 'Provisioning Plugin' },
  ],
};

module.exports = sidebars;
