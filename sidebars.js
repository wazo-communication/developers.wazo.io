// @ts-check
const generateLinkNewTab = (href, text) => {
  const externalSVG = `<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>`;
  return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="menu__link menuExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-DocSidebarItem-Link-styles-module" tabindex="0">${ text }&nbsp;${externalSVG}</a>`;
}

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
            { type: 'ref', id: 'plugins/ui/templates', label: 'Templates' },
            { type: 'ref', id: 'plugins/ui/development', label: 'Development Guide' },
            { type: 'ref', id: 'plugins/ui/deploy', label: 'Deployment Guide' },
          ]
        },

        {
          type: 'category',
          label: 'Build App Plugin',
          link: { type: 'doc', id: 'plugins/ui/apps/index' },
          items: [
            { type: 'ref', id: 'plugins/ui/apps/index', label: 'Documentation' },
            { type: 'ref', id: 'plugins/ui/apps/examples', label: 'Examples' },
            { type: 'html', value: generateLinkNewTab('/docs/sdk-librairies/plugins-js-sdk/plugins-apis#wda', 'SDK References')},

          ]
        },

        {
          type: 'category',
          label: 'Build Mobile Plugin',
          link: { type: 'doc', id: 'plugins/ui/mobile/index' },
          items: [
            { type: 'ref', id: 'plugins/ui/mobile/index', label: 'Documentation' },
            { type: 'ref', id: 'plugins/ui/mobile/examples', label: 'Examples' },
            { type: 'html', value: generateLinkNewTab('/docs/sdk-librairies/plugins-js-sdk/plugins-apis#mobile', 'SDK References')},
          ]
        },

        {
          type: 'category',
          label: 'Build Portal Plugin',
          link: { type: 'doc', id: 'plugins/ui/portal/index' },
          items: [
            { type: 'ref', id: 'plugins/ui/portal/index', label: 'Documentation' },
            { type: 'ref', id: 'plugins/ui/portal/examples', label: 'Examples' },
            { type: 'html', value: generateLinkNewTab('/docs/sdk-librairies/plugins-js-sdk/plugins-apis#portal', 'SDK References')},
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Stack Plugin',
      link: { type: 'doc', id: 'plugins/pbx/index' },
      items: [
        { type: 'ref', id: 'plugins/pbx/index', label: 'Documentation' },
        { type: 'ref', id: 'plugins/pbx/examples', label: 'Examples' },
      ]
    },

    {
      type: 'category',
      label: 'Provisioning Plugin',
      link: { type: 'doc', id: 'plugins/provisioning/index' },
      items: [
        { type: 'ref', id: 'plugins/provisioning/index', label: 'Documentation' },
        { type: 'ref', id: 'plugins/provisioning/examples', label: 'Examples' },
      ]
    },
  ],
};

module.exports = sidebars;
