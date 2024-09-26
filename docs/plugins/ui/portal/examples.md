---
displayed_sidebar: pluginsSidebar
title: Examples | Portal Plugin
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import ButtonsTrySource from '@site/src/components/ButtonsTrySource';

# Portal Plugin - Examples

## Adding a Tab in the PBX Dashboard Page

```mdx-code-block
<BrowserWindow url="https://portal.wazo.io">
```
![New PBX Dashboard Tab](/img/plugins/ui/portal/portal-custom-dashboard-tab.jpg)
```mdx-code-block
</BrowserWindow>
```

```js
await app.initialize();
const context = app.getContext();

document.getElementById('name').innerHTML = context.app.extra.record.auth.username;
```

<ButtonsTrySource
    product="portal"
    manifest="https://developers.wazo.io/examples/portal/pbx-dashboard-tab/manifest.json"
    source="https://github.com/wazo-communication/developers.wazo.io/tree/main/static/examples/portal/pbx-dashboard-tab"
/>


## Adding a New Tab in the PBX User Edition Form

```mdx-code-block
<BrowserWindow url="https://portal.wazo.io">
```
![New PBX users tab](/img/plugins/ui/portal/portal-custom-pbx-user-tab.jpg)
```mdx-code-block
</BrowserWindow>
```

You may want to create your own page/form in a PBX form.
See [This section](/docs/plugins/ui/portal#adding-tabs-in-a-form) for more information.

```js
await app.initialize();
const context = app.getContext();

// You'll find information about the PBX user in `context.app.extra.record`;
document.getElementById('name').innerHTML = context.app.extra.record.auth.username;
```

<ButtonsTrySource
    product="portal"
    manifest="https://developers.wazo.io/examples/portal/pbx-user-form-tab/manifest.json"
    source="https://github.com/wazo-communication/developers.wazo.io/tree/main/static/examples/portal/pbx-user-form-tab"
/>

