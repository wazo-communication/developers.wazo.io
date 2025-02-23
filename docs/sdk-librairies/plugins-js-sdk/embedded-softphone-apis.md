---
displayed_sidebar: jsPluginSdkSidebar
title: Embedded Softphone APIs | E-UC Plugins SDK
---

# Embedded Softphone APIs

This part of the SDK allows you to easily embed and customize a Wazo embedded Softphone in your application. If you have a CRM that requires a click-to-call feature, redirecting the user to the customer information when answering a call, ... this embedded softphone will fit your needs.

## SDK Methods

### `init`

To be able to integrate the embedded softphone in any web page, you can add :

```ts
import { softphone } from '@wazo/euc-plugins-sdk';

softphone.init({
  url?: string, //  Url of the softphone to be loaded in the iframe (optional, default to https://softphone.wazo.io).
  width?: number, // Width (in px) of the softphone (optional, default to 500).
  height?: number, // Height (in px) of the softphone (optional, default to 600).
  server: string, // Stack host where the softphone should connect user.
  port?: number, // Stack port where the softphone should connect user  (optional, default to 443).
  language?: string, // Softphone language (optional).
  wrapUpDuration?: number, // How long (in seconds) should the softphone display the card after the call (optional, default to 0).
  // When the user changes anything on the card, this timeout is canceled
  enableAgent?: boolean, // display the agent tab in the tab bar (defaults to true).
  tenantId?: string, // Tenant id used for LDAP connection (optional)
  debug?: boolean, // Set to `true` to display wording customization labels (default to false)
  disableAutoLogin?: boolean, // Disable the autologin mechanism inside the softphone (useful when used with `loginWithToken`)
  iframeCss?: IframeCss, // Customize the CSS of the iframe itself, default to `{ left: 0, bottom : 0 }`
});
```

### `loginWithToken`

Login the user directly, useful when you already have the user token (and refreshToken) and you don't want your user to login again.

```js
softphone.loginWithToken(token: string, refreshToken?: string);
```

### `makeCall`

Making a call, initiate a phone call to a specified number or extension.

```js
softphone.makeCall(number);
```
- `number`: Number to call through the embedded softphone

### `toggleDisplay`

Toggle visibility of the embedded softphone in the page.

```js
softphone.toggleDisplay();
```

### `show`

Visually show the embedded softphone in the page.

```js
softphone.show();
```
### `hide`

Visually hide the embedded softphone from the page.

```js
softphone.hide();
```

### `remove`

Removing the embedded softphone from the page.

```js
softphone.remove();
```

### `parseLinks`

Parsing links on the page to open them inside the embedded softphone.

Each link with a `href="tel:"` or  href="callto:"` will make a call through the embedded softphone.

```js
softphone.parseLinks();
```

### `removeParsedLinksEvent`

Unparse / Remove click event of parsed links. Each link with a `href="tel:"` or  href="callto:"` will **NOT** make a call through the embedded softphone.

```js
softphone.removeParsedLinksEvent();
```

### `customizeAppearance`

Customize appearance of the embedded softphone to integrate if seamlessly.

```js
softphone.customizeAppearance({
  colors: {
    // Theme, default values :
    primary: '#203890',
    button: '#292C87',
    black: '#000',
    white: '#fff',
    greenButton: '#7ed865',
    greenButtonHover: '#6ebf5a',
    redButton: '#FA5846',
    redButtonHover: '#FF604F',
    buttonText: '#fff',
    error: '#E80539',
    secondary: '#203890',
    grey: '#8A95A0',
    secondGrey: '#eee',
    headerColor: '#888',
    avatar: '#bdbdbd',
    divider: 'rgba(0, 0, 0, 0.12)',
    placeholder: 'rgba(22, 44, 66, 0.5)',
    hovered: '#6181F4',
  },
  metrics: {
    spacing: {
      tiny: 5,
      small: 10,
      medium: 15,
      large: 20,
      larger: 25,
      big: 30,
      huge: 40,
      gigantic: 50,
    },
    icons: {
      xsmall: 12,
      smaller: 15,
      small: 19,
      mediumSmall: 25,
      medium: 30,
      large: 40,
      huge: 42,
    },
    breakpoint: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    borderRadius: 5,
    card: {
      activity: {
        height: 57,
      },
      phonebookContact: {
        height: 58,
      },
      search: {
        height: 35,
      },
    },
    navigation: 60,
    sidebar: 315,
    search: 359,
    lineStatus: 16,
    dialer: {
      key: 30,
      description: 15,
    },
    infoBanner: 43,
    infoBannerSmall: 26,
  },
}, {
  // Translation
  // Set `debug: true` to know where to change translations, like below:
  en: {
    user: {
      login: 'My login button', // will be displayed as `user:login` in the button when settings `debug: true` in the init() method
    },
  },
}, {
  // Assets
  // logo: [url to your logo],
});
```

### `injectCss`

Customizing the embedded softphone style. You can inspect the iframe with your dev tool console to figure out how to override styles.

```js
softphone.injectCss(`
  # Reduce dialer number font size
  .keypad-number, .keypad-number::placeholder {
    font-size: 20px;
  }
`);
```

### `setFormSchema` (Customize form)

To customize the form card, you can use [JSON schema](http://json-schema.org/) to customize the card form with `softphone.setFormSchema(schema, uiSchema)`,
the Embedded Softphone uses [React Json schema form](https://rjsf-team.github.io/react-jsonschema-form/docs/) internally to display card form :

```js
softphone.setFormSchema({
  type: 'object',
  required: ['title', 'phone'],
  properties: {
    title: { type: 'string', title: 'Title' },
    phone: { type: 'string', title: 'Phone' },
    note: { type: 'string', title: 'Note' },
  },
}, {
  note: { 'ui:widget': 'textarea' },
});
```

#### Auto complete
We can use an `autocomplete` widget to search on fields in the `uiSchema`:

```js
{
  note :{ 'ui:widget': 'textarea'},
  clientId :{ 'ui:field': 'autocomplete'},
};
```

In the `schema` field, we can customize if we want to display a `+` button :
```js
clientId: {
  type: 'object',
  title: 'Client id',
  // triggers the `onDisplayLinkedOption` event when changing the value
  triggerDisplay: true,
  // createForm is another JSON schema the description the add option form.
  createForm: {
    optionLabel: '%firstname% %lastname%',
    schema: {
      type: 'object',
      required: ['phone'],
      properties: {
        firstname: { type: 'string', title: 'Firstname' },
        lastname: { type: 'string', title: 'Lastname' },
        phone: { type: 'string', title: 'Phone' },
      }
    },
    uiSchema: {}
  },
}
```

### `onOptionsResults`

Sending search results to the embedded softphone. `onOptionsResults` is used to populate Autocomplete fields

```js
// `results` should have a `label` field, like: const result = [{ label: 'Alice', id: 1 }];
softphone.onOptionsResults(fieldId, results);
```

### `optionsFetched`

Prefill form dropdown choices.

```js
softphone.optionsFetched('myField', [
  { label: 'Foo', id: 'test' },
  { label: 'Bar', id: '123' },
]);
```

### `setCardValue`

Updating card value.

```js
softphone.setCardValue(field, value);
```

## Callbacks / Events

You can listen to embedded softphone callback, with :


### `onLinkEnabled`
```js
softphone.onLinkEnabled = (link: HTMLLinkElement) => {
  // link is `<a>` html tag in the page with a href="tel:xx" (or callto:xxx) being processed
  // You can make change here, like adding className, etc ...
};
```

### `onLinkEnabled`
```js
softphone.onCallIncoming = (call: Call) => {
  // Invoked when a call is incoming in the softphone
  // You can make action here like redirecting to the contact page (by using `call.number).
};
```


### `onCallLocallyAnswered`
```js
softphone.onCallLocallyAnswered = (call: Call) => {
  // Invoked when the user accepts the call locally
};
```


### `onCallEstablished`
```js
softphone.onCallEstablished = (call: Call) => {
  // Invoked when the call is up
};
```


### `onOutgoingCallMade`
```js
softphone.onOutgoingCallMade = (call: Call) => {
  // Invoked when the user makes a call
};
```


### `onCallRejected`
```js
softphone.onCallRejected = (call: Call) => {
  // Invoked when the user rejects an incoming call
};
```


### `onCallEnded`
```js
softphone.onCallEnded = (call: Call, card: Card, direction: string) => {
  // Invoked when the call is ended
};
```


### `onCardSaved`
```js
softphone.onCardSaved = (card: Card) => {
  // Invoked when the user save the card at the end of the call
};
```


### `onCardCanceled`
```js
softphone.onCardCanceled = () => {
  // Invoked when the user discards the card
};
```


### `onSearchOptions`
```js
softphone.onSearchOptions = (fieldId: string, query: string) => {
  // Invoked when the user is searching from an Autocomplete field in the card form
  // We need to call `onOptionsResults` here to send results to the softphone
};
```


### `onDisplayLinkedOption`
```js
softphone.onDisplayLinkedOption = (optionId: string) => {
  // Invoked when the user is selecting a value in a Autocomplete widget
  // useful to display this entity in your application
};
```


### `onWazoContactSearch`
```js
softphone.onWazoContactSearch = (query: string) => {
  // Invoked when the user is searching from contact page
};
```


### `onAgentLoggedIn`
```js
softphone.onAgentLoggedIn = () => {
  // Invoked when the agent logs in
};
```


### `onAgentLoggedOut`
```js
softphone.onAgentLoggedOut = () => {
  // Invoked when the agent logs out
};
```


### `onAgentPaused`
```js
softphone.onAgentPaused = () => {
  // Invoked when the agent is paused
};
```


### `onAgentResumed`
```js
softphone.onAgentResumed = () => {
  // Invoked when the agent is resumed
};
```


### `onLanguageChanged`
```js
softphone.onLanguageChanged = (language: string) => {
  // Invoked when the user changed the softphone language
};
```


### `onCallHeld`
```js
softphone.onCallHeld = () => {
  // Invoked when the current call is held
};
```


### `onCallResumed`
```js
softphone.onCallResumed = () => {
  // Invoked when the current call is resumed
};
```


### `onCallMuted`
```js
softphone.onCallMuted = () => {
  // Invoked when the current call is muted
};
```


### `onCallUnMuted`
```js
softphone.onCallUnMuted = () => {
  // Invoked when the current call is un muted
};
```


### `onDtmfSent`
```js
softphone.onDtmfSent = (tone: string) => {
  // Invoked when the user is sending a DTMF in the current call
};
```


### `onDirectTransfer`
```js
softphone.onDirectTransfer = (number: string) => {
  // Invoked when the user is transfers the current call directly
};
```


### `onCreateIndirectTransfer`
```js
softphone.onCreateIndirectTransfer = (number: string) => {
  // Invoked when the user initiates an indirect transfer for the current call
};
```


### `onCancelIndirectTransfer`
```js
softphone.onCancelIndirectTransfer = () => {
  // Invoked when the user cancels the current indirect transfer
};
```


### `onConfirmIndirectTransfer`
```js
softphone.onConfirmIndirectTransfer = () => {
  // Invoked when the user confirms the current indirect transfer
};
```


### `onIndirectCallMade`
```js
softphone.onIndirectCallMade = (call: Call) => {
  // Invoked when the current indirect transfer is made
};
```


### `onIndirectTransferDone`
```js
softphone.onIndirectTransferDone = (call: Call) => {
  // Invoked when the current indirect transfer is over
};
```


### `onStartRecording`
```js
softphone.onStartRecording = () => {
  // Invoked when the user records the current call
};
```


### `onStopRecording`
```js
softphone.onStopRecording = () => {
  // Invoked when the user stops recording the current call
};
```


### `onCallLogCreated`
```js
softphone.onCallLogCreated = (callLog: CallLog) => {
  // Invoked when the user receive a new call log.
};
```


### `onWebsocketMessage`
```js
softphone.onWebsocketMessage = (message: Object) => {
  // Invoked when the a Wazo websocket message is received in the softphone
};
```


### `onAuthenticated`
```js
softphone.onAuthenticated = (session: WDASession) => {
  // Invoked when the user is authenticated in the softphone
};
```


### `onLoggedOut`
```js
softphone.onLoggedOut = () => {
  // Invoked when the user is is logged out in the softphone
};
```


### `onIFrameLoaded`
```js
softphone.onIFrameLoaded = () => {
  // Invoked when the iframe is loaded
};
```

## Examples

### Displaying a browser notification for incoming calls

```js
import { softphone } from '@wazo/euc-plugins-sdk';

// Ask for notification permission if not yet granted
if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}

softphone.init({
  url: 'http://localhost:3000',
  server: 'my-stack.io',
});

softphone.onCallIncoming = call => {
  new Notification(`Call incoming from ${call.displayName}`);
};
```

### Make an API call from the WAZO SDK

Listing user call logs on login.

```js
import { softphone } from '@wazo/euc-plugins-sdk';
import Wazo from '@wazo/sdk';

const server = 'my-stack.com';

softphone.init({
  url: 'http://localhost:3000',
  server,
});

softphone.onCallIncoming = call => {
  new Notification(`Call incoming from ${call.displayName}`);
};

softphone.onAuthenticated = async session => {
  Wazo.Auth.setHost(server);
  Wazo.Auth.setApiToken(session.token);

  const callLogs = await Wazo.api.callLogd.listCallLogs();
};
```

## A Note About `autoplay`

When the softphone is loaded and the user hasn't made any interaction with the page, we can fall into the [Autoplay restriction](https://developer.chrome.com/blog/autoplay) of chrome.

Even if the softphone uses [iframe delegation](https://developer.chrome.com/blog/autoplay/#iframe-delegation), we need to have a user interaction before being able to play the ringtone sound for incoming call.
