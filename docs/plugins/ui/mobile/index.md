---
displayed_sidebar: pluginsSidebar
title: Documentation | Mobile Plugin
---

import PageHeader from '@site/src/components/PageHeader';

<PageHeader title="Mobile Plugin" insideContent />

# Documentation

Mobile plugins allow many great ways to extend the interface. Here's a quick summary, scroll down for more information.

- Add tabs on the main page of the application
- Run code logic inside a background script

## Add a new menu tab

```mdx-code-block
<div className="row">
  <div className="col col--6">
```
    ![Mobile Home Plugin (small)](/img/plugins/ui/mobile/mobile-home-plugin-tab.jpg)
```mdx-code-block
  </div>
  <div className="col col--6">
```
    ![Mobile Plugin Loaded (small)](/img/plugins/ui/mobile/mobile-plugin-loaded.jpg)
```mdx-code-block
  </div>
</div>
```

To create a new tab in the main screen, add a `staticTabs` in your manifest with a `mobileTab` context :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "mobileIcon": "chatbox-ellipses-outline",
    "context": [
      "mobileTab"
    ],
    "name": "My label",
    "contentUrl": "https://my-websit/content.html"
  }
],
```

The `mobileIcon` should be one of the [Ionic icons](https://ionic.io/ionicons) values (Android only).

When the user clicks on the tab, the `contentUrl` will be loaded.

Please refer to the [SDK](/docs/sdk-librairies/plugins-js-sdk/plugins-apis) documentation to know how to inject custom code in the application.

### Open Tab in The Browser

Sometimes we may want to open a link in the user's browser. To change the behavior of the static tab, add `"isExternal": true` to the `staticTab` definition.

```json
"staticTabs": [
  {
    "entityId": "support-tab",
    "context": [
      "mobileTab"
    ],
    "name": "Support",
    "contentUrl": "https://support.wazo.io/",
    "icon": "./assets/icon.svg",
    "isExternal": true,
  }
],
```

## Push Notifications

Push notifications enhance user engagement, keeping users informed and connected to the Wazo app. Plugins and push are well integrated into our mobile application.

### Redirect to plugin tab

In many case, you may when to send a push notification that will opens the application directly on your plugin screen.

You can send a push through Wazo API like :

```sh
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Wazo-Tenant: xxx' --header 'X-Auth-Token: xxx' -d '{ \
   "title": "Title of my push", \
   "body": "Body of my push", \
   "extra": { \
     "plugin": { \
        "id": "my-plugin-id", \
        "entityId": "entity-id-of-plugin-to-open", \
        "action": "open", \
        "payload": { \
          "some-data": "to send to you app" \
        } \
      } \
   }, \
   "notification_type": "somePush", \
   "user_uuid": "xxxx" \
 }' 'https://my-stack.io/api/webhookd/1.0/mobile/notifications'
```

When the user's Wazo Mobile application is not open, they will receive a notification.

By tapping on this notification, the Wazo Mobile application will open, and the user will be redirected to your plugin's tab.

### Retreive extra information from payload

When sending a push notification, you have the option to include additional data in the `extra.plugin` field.

This data can be accessed in your plugin with:

```js
await app.initialize();
const context = app.getContext();

const payloadFromMyPush = context.app.extra.payload;
```

## Background Script

You can add custom code when the user is not using a custom tab. It can be useful to handle incoming calls, or other events.

```json
{
  // ...
  "backgroundScript": "./background.js"
}
```

Please refer to the [SDK](/docs/sdk-librairies/plugins-js-sdk/plugins-apis) documentation to know how to inject custom code in the application.**

The background script is always running, even when the user logs out. Please make sure to remove all related background tasks when the `onLogout` listener event is fired.
