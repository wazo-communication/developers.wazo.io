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
      collapsible: false,
      label: 'Overview',
      items: [
        { type: 'ref', id: 'plugins/overview/index' },
        { type: 'ref', id: 'plugins/overview/what-is-modular-plugin' },
        { type: 'ref', id: 'plugins/overview/what-problem-it-solve' },
        { type: 'ref', id: 'plugins/overview/why-should-use' },
      ]
    },

    {
      type: 'category',
      collapsible: false,
      label: 'UI Plugin',
      items: [
        {
          type: 'category',
          collapsible: false,
          label: 'Quick Start',
          items: [
            { type: 'ref', id: 'plugins/ui/get-started/index', label: 'Get Started' },
            { type: 'ref', id: 'plugins/ui/get-started/prerequisites-configuration', label: 'Minimal Configuration' },
          ]
        },

        {
          type: 'category',
          collapsible: false,
          label: 'Build App Plugin',
          items: [
            { type: 'ref', id: 'plugins/ui/apps/index', label: 'How to build' },
            { type: 'ref', id: 'plugins/ui/apps/examples', label: 'Examples' },
          ]
        },

        {
          type: 'category',
          collapsible: false,
          label: 'Build Mobile Plugin',
          items: [
            { type: 'ref', id: 'plugins/ui/mobile/index', label: 'How to build' },
          ]
        },

        {
          type: 'category',
          collapsible: false,
          label: 'Build Portal Plugin',
          items: [
            { type: 'ref', id: 'plugins/ui/portal/index', label: 'How to build' },
            { type: 'ref', id: 'plugins/ui/portal/examples', label: 'Examples' },
          ]
        },


        { type: 'ref', id: 'plugins/ui/internationalization' },
      ]
    },

    { type: 'ref', id: 'plugins/pbx/index', label: 'Stack Plugin' },
    { type: 'ref', id: 'plugins/provisioning/index', label: 'Provisioning Plugin' },
  ],
};

module.exports = sidebars;
