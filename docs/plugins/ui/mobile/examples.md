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


## Send and receive messages between background script and tabs

```mdx-code-block
<BrowserWindow url="https://mobile.wazo.io">
```
![Mobile Background Message Example](/img/plugins/ui/mobile/use-case-mobile-background.jpg)
```mdx-code-block
</BrowserWindow>
```

```js
// tab.js
app.onIframeMessage = (msg) => {
  // Do extra logic here
}

(async () => {
  await app.initialize();
  app.sendMessageToBackground({ value: 'ping', myData: 'abcd' });
})();


// background.js
app.onIframeMessage = (msg) => {
  // Do extra logic here

  // Send back a message to tab
  app.sendMessageToIframe({ value: 'pong', customerId: 1234 });
}

(async () => {
  await app.initialize();
  app.sendMessageToBackground({ value: 'ping', myData: 'abcd' });
})();
```

<ButtonsTrySource
    product="app"
    manifest="https://developers.wazo.io/examples/mobile/iframe-bg-messaging/manifest.json"
    source="https://github.com/wazo-communication/developers.wazo.io/tree/main/static/examples/mobile/iframe-bg-messaging"
/>
