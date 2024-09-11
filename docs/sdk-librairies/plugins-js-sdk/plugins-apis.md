---
displayed_sidebar: jsPluginSdkSidebar
toc_max_heading_level: 5
---

# Plugins APIs


The part of the SDK is designed to help you build your own modular plugins, allowing you to extend the functionality of Wazo applications. This documentation will focus on the APIs provided by the SDK for plugins.

## Initilization

After installing the SDK, you must require the app/plugin it with the following lines.

```js
import { App } from '@wazo/euc-plugins-sdk';
const app = new App();
```


## Lifecycle

Plugins can be loaded and unloaded depending on some actions inside our product (ex: login/logout, tenant change, etc). Here's the lifecycle of a plugin with related listeners. That will help you build a robust system based on user actions.

### Initializing

It's **required** to call `app.initialize()` function to registerer and acknowledge your plugin inside our E-UC Application. Please note this method is asynchronous.

```js
await app.initialize();
```

### Getting the Context

When the application is initialized, you can retrieve the context surrounding your plugin. A context will give you access to the app information that your plugin will base its logic on it.

```ts
import { Context } from '@wazo/euc-plugins-sdk/types';

const context: Context = app.getContext();
```

Information that the context will give you access to:


```js
  {
    // Information about the EU-C application
    app: {
      // The locale code of the application on 2 characters, like `en` or `it`.
      locale: 'string',
      // Colors used by the EU-C apps. It uses the Material UI theme palette structure, so you can use it directly with `createTheme()` or just pick the color you want in your plugin.
      theme: {},
      // Contains a `clientType` value that can be `web` / `desktop` / `ios` or `android`
      host: 'web|desktop|ios|android',
      // Contains extra information about the app context, like the `contact` when you use the `contactTab` manifest context. Among extra parameters, you'll always receive `baseUrl` and `pluginId`
      extra: {
        // The base url of your `manifest.json` file
        baseUrl: 'string',
        // The `entityId` of the current plugin.
        pluginId: 'string,
        // ... and more
      }
    }

    // Information about the connected user
    user: {
      // UUID of the connect user
      uuid: 'string',
      // The token that can be used for API calls
      token: 'string',
      // A refresh token that should be used if the `token` expires
      refreshToken: 'string',
      // Expiration Date time of the token
      expiresAt: 'string',
      // Authentication session UUID
      sessionUuid: 'string',
      // UUID of the user's tenant
      tenantUuid: 'string',
      // For Web and desktop applications, it's representing the stack hostname where the user is connected
      host: 'string',
      // ... and more
    }
  }
```

:::info
`user` values depends on the application your building for. See [`WDASession`](https://github.com/wazo-communication/euc-plugins-js-sdk/blob/master/src/types.ts#L88) and the [`PortalSession`](https://github.com/wazo-communication/euc-plugins-js-sdk/blob/master/src/types.ts#L79) types for more information.
:::

### Running

It's at this moment the magic happens, add your own logic inside our products. Depending on which product you're developing, there are many listeners or action creators that you can use with the SDK.

### Unloading

When a plugin is unloaded because of a user action (ex: logout), this listener `app.onPluginUnLoaded()` will be called. Other listeners will be disabled when unloaded. To prevent side effects, it's important to remove any watcher added in the initializing phase.

When the user logs in again, the `backgroundScript` will be reloaded, please make sure to release everything in `onPluginUnLoaded`.

:::info
If you're using a **background script**, it's important to close any WebSocket or listeners at this cycle of the plugin.
:::


## Global Events

### `onNewSession`

Event when the user session is refreshed. The token of the authenticated user has an expiration date; when the token expires, a session is created with a new token.

```js
app.onNewSession = (session:  WDASession | PortalSession) => {}
```

### `onLogout`

Event when the user logs out from the application

```js
app.onLogout = () => {};
```

### Unloaded Events

When a custom tab or iframe is closed or unloaded, it's important to handle any necessary cleanup or actions. To accommodate this, we have two unloaded events:

- `onUnLoaded`: use this event when your plugin app code
- `onAppUnLoaded`: use this event for your `backgroundScript` file

#### `onUnLoaded` (page)

It's a sugar of `window.onunload`, useful when you want to store information before page/tab exit. **Important:** You can't do an action here like API call because the app (iframe) can be closed before the action will be finished.


```js
app.onUnLoaded = () => {};
```

#### `onAppUnLoaded` (Background Script)

Should be used in a `backgroundScript` to know when a custom tab is unloaded. As `app.onUnLoaded` is only triggered for tabs (iframes), and this event doesn't allow sophisticated actions (like sending messages to a background script, API calls, ...) we should use `onAppUnLoaded` to perform an action when a tab is unloaded.

```js
app.onAppUnLoaded = (tabId) => {};
```


## **E-UC Apps (Web and Desktop)** {#wda}

### Methods

#### `openLeftPanel`

Open the left panel of Wazo Web & Desktop

```js
app.openLeftPanel();
```

#### `closeLeftPanel`

Close the left panel of Wazo Web & Desktop

```js
app.closeLeftPanel();
```

Example to keep left pannel closed the app shows a page of your plugin:

```js
await app.initialize();
// Closing the web/desktop left panel when the page is loaded
app.closeLeftPanel();

app.onUnLoaded = () => {
  // Re-opening the panel when the page is unloaded
  app.openLeftPanel();
};
```

#### `startCall`

Starting a call audio or video call

```js
app.startCall({ targets , requestedModalities = ['audio'] });
```

Example:

```js
app.startCall({ targets: ['8008'], requestedModalities: ['video'] });
```

#### `openLink`

Opening a link in the application, it will move the right page of Wazo app.

```js
app.openLink(url: string);
```

Example:

```js
// Opening the internal phonebook
app.openLink('/phonebook/internal');
```

#### `createMeeting`

Creates an external meeting, that will allow guest to join with by an URL

```js
app.createMeeting(name: string, requireAuthorization = false, persistent = false);
```

Example of creating a meeting and listening to the event :

```js
app.createMeeting('My meeting from my custom app', true, true);

// Wait for the meeting to be available
app.onMeetingCreated = newMeeting => {};
```

#### `openMeetingLobby`

Open an meeting lobby

```js
app.openMeetingLobby(extension: string);
```

Example:

```js
// Open the lobby when a meeting is created
app.onMeetingCreated = newMeeting => {
  app.openMeetingLobby(newMeeting.exten);
};
```

#### `ignoreCall`

Ignoring an incoming call.

```js
app.onCallIncoming = call => {
  app.ignoreCall(call);
};
```

#### `playNewMessageSound`

Play the sound when we receive a text message.

```js
app.playNewMessageSound();
```

#### `playIncomingCallSound`

Play the incoming call sound (🔁 loop)

```js
app.playIncomingCallSound();
```

#### `playProgressSound`

Play the ringback sound when we make a call (🔁 loop)

```js
app.playProgressSound();
```

#### `playDoubleCallSound`

Play the sound when another call is incoming

```js
app.playDoubleCallSound();
```

#### `playHangupSound`

Play the hangup sound

```js
app.playHangupSound();
```

#### `stopCurrentSound`

Stop the current sound. Sounds marked "🔁 loop" can be stopped only using this method.

```js
app.stopCurrentSound();
```

#### `configureSounds`

Configuring sounds to use your own sound files in the application, with:

```js
app.configureSounds({
  progress: 'http://example/com/progress.mpg', // Played when making an outgoing call (ringback)
  ring: 'http://example/com/ring.wav', // Played for the first incoming call
  message: 'http://example/com/message.ogg', // Played when the user receives a chat message
  hangup: 'http://example/com/hangup.ogg',// Played when the call is hung up
  inboundCall: 'http://example/com/inbound.vaw', // Played when we are in call and another call is incoming. Also played in Switchboard.
})
```

:::info
You can omit a value, the default sound will be used.
:::

#### `resetSounds`

This method will reset all application sounds to origianl ones.

```js
app.resetSounds();
```

#### `displayNotification`

Show an app notification, will display browser or desktop notification depending on the environment where the app is running.

```js
app.displayNotification(title: string, text: string);
```

#### `changeNavBarColor`

Change the navigation bar color with a valid CSS color.

```js
app.changeNavBarColor(color: string);
```

Example:

```js
app.changeNavBarColor('#8e6a3a');
app.changeNavBarColor('white');
```

#### `resetNavBarColor`

Reset to the default navigation bar color to defaut color

```js
app.resetNavBarColor();
```

#### `displayModal`

Will display a modal in the application, the method must called from the `backgroundScript` file.

```js
app.displayModal({ url, title, text, htmlText, height, width, hideCloseButton });
```

- If `url` is present, the modal will display an iframe with the content of the url.
- If `htmlText` is present, the modal will display this text in a html contact, otherwise the `text` attribute will be used.
- `height` and `width` accept valid CSS values, like `500px` or `80%`.
- `hideCloseButton` (default to false) determines if the close button should be displayed, or if the user should handle closing of the modal in the html content (through `app.removeModal()` method).

:::note
On mobile, links with a `target="_blank"` attribute will be opened in the user's default browser.
:::

Example:

Displaying client data when receiving a call

```js
app.onCallIncoming = async call => {
  console.log('background onCallIncoming', call);
  const clientData = await fetchClientData(call.number); // Where `fetchClientData` is a method that return client information from an extension

  app.displayModal({
    title: `Incoming call for ${call.displayName}`,
    text: `Last call was: ${clientData.lastCall} for : ${clientData.lastCallSubject}`,
    height: '50%',
    width: '70%',
  });
};
```

#### `displayBanner`

We can display a mobile banner from the `backgroundScript` file.

```js
app.displayBanner({ url, height, width, hideCloseButton });
```

- If `url` is present, the modal will display an iframe with the content of the url.
- `height` accepts valid CSS values, like `500px` or `80%`.
- `width` accepts valid CSS values, like `500px` or `80%`, used on Web/Desktop App (min: `300px`).
- `hideCloseButton` (default to false) determines if the close button should be displayed, or if the user should handle closing of the modal in the html content (through `app.removeModal()` method).

We can then call `app.removeBanner()` in the `backgroundScript` or the loaded content.

:::note
On mobile, links with a `target="_blank"` attribute will be opened in the user's default browser.
:::

:::note
On Web/Desktop App, the banner will be integrated with other banners like incoming calls. Other banners will be displayed below.
:::

#### `hasLocalVideoStream`

Check if a call has a local video stream.

```js
app.hasLocalVideoStream(call: Call);
```

Example:

```js
app.onCallAnswered = (call) => {
  const hasLocalVideo = app.hasLocalVideoStream(call);
}
```

#### `getLocalCurrentVideoStream`

Retrieving the local video stream of a call.

```js
app.getLocalCurrentVideoStream(call: Call);
```

Example:

```js
app.onCallAnswered = (call) => {
  const stream = app.getLocalCurrentVideoStream(call);
}
```

#### `hasRemoteVideoStream`

Checking if a call has a remote video stream.

```js
app.hasRemoteVideoStream(call: Call);
```

Example:

```js
app.onCallAnswered = (call) => {
  const hasRemoteVideo = app.hasRemoteVideoStream(call);
}
```

#### `getRemoteCurrentVideoStream`

Retrieving the remote video stream of a call.

```js
app.getRemoteCurrentVideoStream(call: Call);
```

Example:

```js
app.onCallAnswered = (call) => {
  const stream = app.getRemoteCurrentVideoStream(call);
}
```

#### `sendMessageToBackground`

Sending a message from the iframe to background script. Receive message from event `onBackgroundMessage`

```js
// my-plugins.js (Sending message to background)
app.sendMessageToBackground({ value: 'ping' });

// background.js (Receiving a message from the iframe)
app.onBackgroundMessage = msg => {
  console.log('onBackgroundMessage', msg);

```

#### `sendMessageToIframe`

In the background script

```js
// background.js (Sending a message to the plugin's iframe)
app.sendMessageToIframe({ value: 'pong' });

// my-plugin.js (Receiving a message from the background script)
app.onIframeMessage = (msg) => {
  console.log('onIframeMessage', msg);
}
```

#### `updateBadge`

Display a notification next to the navigation bar icon button. It uses MUI's [Badge](https://mui.com/material-ui/react-badge/) component to display a notification, generally an integer.

When used in `backgroundScript` file, it requires `entityId` as set in a tab in the `staticTabs` section of `manifest.json`, and that tab must include "sidebarTab" in its context (`entityId` should automatically be set when called from the iframe).

```js
app.updateBadge({ badgeContent: number, color?: string = 'error', variant?: string, max?: number, overlap?: string, anchorOrigin?: Object, showZero?: boolean });
```

:::info
On Wazo Mobile, only the field `badgeContent: number` is used to display the badge.
:::

### Events

#### `onCallIncoming`

Listener when a call for the current user is incoming. Useful to react on a call event from `backgroundScript` file.

```js
app.onCallIncoming = (call: Call) =>  {};
```

#### `onCallMade`

Listener when a call is made by the user (eg: outgoing call). Useful to react on a call event from `backgroundScript` file.

```js
app.onCallMade = (call: Call) =>  {};
```

#### `onCallAnswered`

Listener when an incoming call is answered by the current user. Useful to react on a call event from `backgroundScript` file.

```js
app.onCallAnswered = (call: Call) =>  {};
```

#### `onCallAccepted`

Listener when a call is answered (by one or the other side). Useful to react on a call event from `backgroundScript` file.

```js
app.onCallAccepted = (call: Call) =>  {};
```

#### `onCallHungUp`

Listener when a call is hung up. Useful to react on a call event from `backgroundScript` file.

```js
app.onCallHungUp = (call: Call) =>  {};
```

#### `onWebsocketMessage`

Listener to Wazo Websocket message(s). Useful to react on a call event from `backgroundScript` file.

```js
app.onWebsocketMessage = (message: MessageEvent) =>  {};
```

#### `onMeetingCreated`

Listener of meeting creation.

```js
app.onMeetingCreated = (meeting: Meeting) =>  { };
```

#### `onRouteChanged`

Listener of navigation changes in the app.

```js
app.onRouteChanged = (location: Object, action: string) =>  { };
```

#### `onUserJoinRoom`

Listener when a user enters a room.

```js
app.onUserJoinRoom = (room) => {};
```

#### `onUserLeaveRoom`

Listener when a user leavers a room.

```js
app.onUserLeaveRoom = (room) => {};
```

#### `onParticipantJoinRoom`

Listener when a participant enters a room.

```js
app.onParticipantJoinRoom = (room, participant) => {};
```

#### `onParticipantLeaveRoom`

Listener when a participant leaves a room.

```js
app.onParticipantLeaveRoom = (room, participant) => {};
```

## **E-UC Portal** {#portal}

### Methods

#### `changeToolbarDisplay`

Changes the status/visibility of the toolbar.

```js
app.changeToolbarDisplay(displayed: boolean);
```

### Events

#### `onConnectedToStack`

Listener when the user is successfuly connected to a stack.

```js
app.onConnectedToStack = (stackSession: Object) => {};
```

#### `onSwitchTenant`

Listener when the user is switching to a stack tenant.

```js
app.onSwitchTenant = (uuid: string, name: string) => {};
```

## **E-UC Mobile** \{#mobile}

### Methods

#### `setMobileHeader`

Will change the header inside the app.

```js
app.setMobileHeader({ title?: string | null, callback?: Function | null });
```

- `title`: Changes the label displayed in the header. Set this value to `null` to set it back to the default value.
- `callback`: Handles the back button click. If a callback is registered, the app will forgo its normal behavior and run it. Setting the value to `null` reinstates the original behavior.

#### `setMobileShowBottomNav`

Define whether you want to show or hide the bottom navigation.

```js
app.setMobileShowBottomNav(show: boolean);
```
