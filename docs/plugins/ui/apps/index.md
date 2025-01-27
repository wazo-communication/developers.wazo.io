---
displayed_sidebar: pluginsSidebar
title: Documentation | Web & Desktop Plugin
---

import PageHeader from '@site/src/components/PageHeader';

<PageHeader title="Web & Desktop Plugin" insideContent />

# Documentation

Apps plugins allow many great ways to extend the interface. Here's a quick summary, scroll down for more information.

- Add new pages/sections
- Extend existing pages with new tabs
- Extend Settings pannel
- Run code logic inside a background script

## Tabs - Add menu item (dashboard)

![App configuration](/img/plugins/ui/app/wda-tab-example.png)

To create a new tab in the main screen, add a `staticTabs` in your manifest with a `generalTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "generalTab"
    ],
    "name": "My label",
    "contentUrl": "./content.html"
  }
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Add menu item (sidebar)

![App configuration (small)](/img/plugins/ui/app/wda-sidebar.png)

To create a new tab in the main screen, add a `staticTabs` in your manifest with a `sidebarTab` `context`.

```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "sidebarTab"
    ],
    "name": "My label",
    "contentUrl": "./content.html",
    "icon": "./assets/icon.svg"
  }
],
```

:::info
For optimal results, `icon` must be a **white** SVG. `<svg fill="#FFF" />`
:::

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Add menu item (contact)

![App configuration](/img/plugins/ui/app/wda-contact.png)

To create a new tab in the main screen, add a `staticTabs` in your manifest with a `contactTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "contactTab"
    ],
    "name": "My label",
    "contentUrl": "./content.html"
  }
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Add menu item (phonebook)

![App configuration](/img/plugins/ui/app/wda-phonebook.png)

To create a new tab in the main screen, add a `staticTabs` in your manifest with a `phonebookTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "phonebookTab"
    ],
    "name": "My label",
    "contentUrl": "./content.html"
  }
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Add menu item (settings)

![App configuration](/img/plugins/ui/app/wda-settings-menu.png)

To create a new tab in the settings menu, add a `staticTabs` in your manifest with a `settingsTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "settings-tab",
    "context": [
      "settingsTab"
    ],
    "position": 101,
    "name": "My settings",
    "contentUrl": "./tab.html",
    "icon": "./tab.svg"
  }
]
```

You can define the menu item's position using the `position` attributes. Your menu will be ordered depending on the `position` value you will define. When the user clicks on the tab, the `contentUrl` will be loaded.

Current positions used in the application are:

| Position | Name            |
|----------|-----------------|
| 100      | Media Settings  |
| 200      | Notifications   |
| 300      | Call Forwarding |
| 400      | Integrations    |
| 500      | Connection      |
| 600      | Language        |
| 700      | Country         |
| 800      | Shortcuts       |
| 900:     | Switchboard     |
| 1000     | Divider         |
| 1100     | Update App      |
| 1200     | About           |

## Tabs - Add custom setting panel (settings)

![App configuration](/img/plugins/ui/app/wda-settings-inner.png)

To create a new tab in the settings menu, add a `staticTabs` in your manifest with a `innerSettingsTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "settings-tab",
    "context": [
      "innerSettingsTab"
    ],
    "position": 101,
    "name": "My settings",
    "contentUrl": "./tab.html",
    "icon": "./tab.svg"
  }
]
```

Please refer to the documentation of `settingsTab` about the position attribute.

## Open menu item in Browser or New Tab

Sometimes we may want to open a link in a new tab or in the user's default browser. To change the behavior of the static tab, add `"isExternal": true` to the `staticTab` definition.

```json
"staticTabs": [
  {
    "entityId": "support-tab",
    "context": [
      "sidebarTab",
      "settingsTab"
    ],
    "name": "Support",
    "contentUrl": "https://support.wazo.io/",
    "icon": "./assets/icon.svg",
    "isExternal": true,
  }
],
```

:::info
  `isExternal` will work only with a staticTab of type: "sidebarTab" and "settingsTab"
:::

## Background Script

You can add custom code when the user is not using a custom tab. It can be useful to handle incoming calls, or other events.

```json
{
  // ...
  "backgroundScript": "./background.js"
}
```

Please refer to the [SDK](/docs/sdk-librairies/plugins-js-sdk/plugins-apis) documentation to know how to inject custom code in the application.**

The background script is always running, even when the user is logged out. Please make sure to remove all related background tasks when the `onLogout` listener event is fired.
