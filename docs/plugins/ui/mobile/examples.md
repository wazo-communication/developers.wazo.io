---
displayed_sidebar: pluginsSidebar
title: Examples | Mobile Plugin
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import ButtonsTrySource from '@site/src/components/ButtonsTrySource';

# Mobile Plugin - Examples

## Adding a New Tab

```mdx-code-block
<BrowserWindow url="https://mobile.wazo.io">
```
![Mobile New Tab Example](/img/plugins/ui/mobile/example-general-mobile.jpg)
```mdx-code-block
</BrowserWindow>
```

```json
// manifest.json
{
  // ...
  "staticTabs": [
    {
      "entityId": "new-tab",
      "mobileIcon": "chatbox-ellipses-outline",
      "context": [ "mobileTab" ],
      "name": "My Plugin",
      "contentUrl": "./index.html"
    }
  ]
}

```

<ButtonsTrySource
    product="app"
    source="https://github.com/wazo-communication/developers.wazo.io/tree/main/static/examples/mobile/general"
/>
