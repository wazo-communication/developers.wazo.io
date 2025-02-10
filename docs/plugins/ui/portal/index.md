---
displayed_sidebar: pluginsSidebar
title: Documentation | Portal Plugin
---

import PageHeader from '@site/src/components/PageHeader';

<PageHeader title="Portal Plugin" insideContent />

# Documentation

Portal plugins allow many great ways to extend the interface. Here's a quick summary, scroll down for more information.

- Add new sections and links in the stack menu
- Add new sections in Global Settings
- Extend forms with new tabs
- Extend existing menus with new links
- Extend dashboards
- Run code logic inside a background script

## Tabs - Add a panel on stack's dashboard

![App configuration (small](/img/plugins/ui/portal/portal-pbx-home-tab.png)

To create a new tab in the PBX main screen, add a `staticTabs` in your manifest with a `generalPbxTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "generalPbxTab"
    ],
    "name": "My label",
    "contentUrl": "./content.html"
  }
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Add a link to an existing menu

![App configuration (small](/img/plugins/ui/portal/portal-existing-menu.png)

To create a new page the PBX menu, add a `staticTabs` in your manifest with a `pbxMenu` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "pbxMenu"
    ],
    "name": "My label",
    "parent": "common.layout.pbxMenu.userManagement",
    "contentUrl": "./content.html"
  }
],
```

The `parent` key can be one of `common.layout.pbxMenu.*` where `*` is : `globalSettings`, `userManagement`, `callManagement`, `services`, `callCenter`,`reporting`, `soundsAndGreetings`, `settings`.

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Add a new menu

![App configuration (small)](/img/plugins/ui/portal/portal-pbx-own-menu.png)

To create a new menu in the PBX section, add a `staticTabs` in your manifest with a `pbxMenu` `context` :
```json
"staticTabs": [
  {
    "entityId": "custom-child",
    "context": [
      "pbxMenu"
    ],
    "name": "New child",
    "parent": "New menu",
    "parentIcon": "AccountBalance",
    "contentUrl": "http://example.com/stats-stack.html"
  },
  {
    "entityId": "custom-child2",
    "context": [
      "pbxMenu"
    ],
    "name": "New child 2",
    "parent": "New menu",
    "parentIcon": "AccountBalance",
    "contentUrl": "http://example.com/stats-stack.html"
  },
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Add link to Global Settings

![App configuration (small](/img/plugins/ui/portal/portal-pbx-global-settings.png)

To create a new menu in the PBX section, add a `staticTabs` in your manifest with a `globalSettings` `context` :
```json
"staticTabs": [
  {
    "entityId": "global-settings",
    "context": [
      "globalSettings"
    ],
    "name": "Custom global",
    "icon": "BrightnessHigh",
    "contentUrl": "http://localhost:3002/portal/global.html"
  }
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Tabs - Extend an existing form

![App configuration](/img/plugins/ui/portal/portal-pbx-form.png)

To create a new tab in the PBX main screen, add a `staticTabs` in your manifest with a `pbx.*` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "pbx.users"
    ],
    "name": "My label",
    "contentUrl": "./content.html"
  }
],
```

The `context` key can be one of `pbx.*` where `*` is : `users`, `lines`, `devices`, `ring-groups`, `voicemails`, ...


When the user clicks on the tab, the `contentUrl` will be loaded.

## Menu Item - Open in a new browser tab

Sometimes we may want to open a link in a new tab. To change the behavior of the static tab, add `"isExternal": true` to the `staticTab` definition.

```json
"staticTabs": [
  {
    "entityId": "support-tab",
    "context": [
      "pbxMenu",
      "globalSettings"
    ],
    "name": "Support",
    "contentUrl": "https://support.wazo.io/",
    "icon": "./assets/icon.svg",
    "isExternal": true,
  }
],
```

:::info
  `isExternal` will work only with a staticTab of type: "pbxMenu" and "globalSettings"
:::


## Menu Item - Supported Icons

To defined `icon` and `parentIcon` image, we support two types of values:
1. Path to a black `.svg` icon (recommended)
2. Using a supported Material UI icon

    <details>
    <summary>List of supported icons</summary>

    - `Accessibility`
    - `AccountBalance`
    - `AccountBox`
    - `AccountCircle`
    - `Add`
    - `AddCircleOutline`
    - `AddIcCallOutlined`
    - `AndroidSharp`
    - `Apps`
    - `AppSettingsAlt`
    - `ArrowBack`
    - `ArrowDownward`
    - `ArrowDropDown`
    - `ArrowForward`
    - `ArrowForwardIos`
    - `ArrowUpward`
    - `Block`
    - `Bolt`
    - `BrightnessHigh`
    - `BugReport`
    - `Build`
    - `Business`
    - `BusinessOutlined`
    - `CakeOutlined`
    - `CalendarMonth`
    - `Call`
    - `CallEnd`
    - `CallMerge`
    - `Cancel`
    - `CancelOutlined`
    - `Check`
    - `CheckCircle`
    - `CheckCircleOutline`
    - `CheckCircleOutlined`
    - `ChevronLeft`
    - `ChevronRight`
    - `Clear`
    - `Close`
    - `Cloud`
    - `CloudDownload`
    - `Dashboard`
    - `DateRange`
    - `DateRangeOutlined`
    - `Delete`
    - `DeleteOutline`
    - `Description`
    - `DesktopMac`
    - `DesktopWindowsOutlined`
    - `DeviceHub`
    - `DialerSip`
    - `Dialpad`
    - `DirectionsCar`
    - `Done`
    - `DoneAll`
    - `DoneOutlined`
    - `DragHandle`
    - `Edit`
    - `Email`
    - `EmailOutlined`
    - `Equalizer`
    - `Error`
    - `ErrorOutline`
    - `EventSeat`
    - `ExitToApp`
    - `ExpandLess`
    - `ExpandMore`
    - `Extension`
    - `FileCopyOutlined`
    - `FilterList`
    - `FilterTiltShift`
    - `Flag`
    - `FlashOn`
    - `FolderShared`
    - `FormatListBulleted`
    - `GetApp`
    - `Group`
    - `GroupOutlined`
    - `HeadsetMic`
    - `Help`
    - `HelpOutline`
    - `History`
    - `Info`
    - `InfoOutlined`
    - `InsertChart`
    - `InsertDriveFile`
    - `Key`
    - `KeyboardArrowLeft`
    - `KeyboardArrowRight`
    - `KeyboardReturn`
    - `Laptop`
    - `Launch`
    - `LibraryBooks`
    - `LibraryMusic`
    - `List`
    - `LocationOn`
    - `LocationOnOutlined`
    - `Lock`
    - `LockOutlined`
    - `Menu`
    - `MonitorHeart`
    - `MoreHoriz`
    - `MoreVert`
    - `MusicNote`
    - `NavigateNext`
    - `NoteOutlined`
    - `NotificationsNone`
    - `OpenInNew`
    - `People`
    - `PermDataSetting`
    - `Person`
    - `PersonOutlined`
    - `Phone`
    - `PhoneForwarded`
    - `PhoneOutlined`
    - `PieChart`
    - `PlayArrow`
    - `PlaylistAdd`
    - `Public`
    - `Publish`
    - `QueryBuilder`
    - `Receipt`
    - `ReceiptOutlined`
    - `RecordVoiceOver`
    - `Redo`
    - `Refresh`
    - `Remove`
    - `Restore`
    - `RingVolume`
    - `RoomService`
    - `Schedule`
    - `ScheduleOutlined`
    - `Search`
    - `Send`
    - `Settings`
    - `SettingsApplications`
    - `SettingsBackupRestore`
    - `SettingsPhone`
    - `Shuffle`
    - `SignalCellular4Bar`
    - `Smartphone`
    - `SmartphoneOutlined`
    - `Sms`
    - `Speaker`
    - `Star`
    - `Stop`
    - `Storage`
    - `StoreMallDirectory`
    - `SupervisorAccount`
    - `SwapCalls`
    - `Sync`
    - `Timeline`
    - `Toc`
    - `Today`
    - `Transform`
    - `TrendingFlat`
    - `Troubleshoot`
    - `TtyOutlined`
    - `Tune`
    - `Update`
    - `VerifiedUser`
    - `ViewList`
    - `Visibility`
    - `VisibilityOff`
    - `Voicemail`
    - `VolumeDown`
    - `VolumeMute`
    - `VolumeUp`
    - `VpnKey`
    - `VpnLock`
    - `Warning`
    - `Web`
    - `WebAsset`

    </details>

## Security - Administrator role

Sometimes, you may want to prevent an administrator from modifying sensitive information on a plugin page. From `context`, you can retrieve the current user's account type and then handle the right logic.

```js
await app.initialize();
const context = app.getContext();

const accountType = context.extra.administrator.organization.resource;
switch (accountType) {
  case: 'resellers':
    return true;

  case: 'customers':
  case: 'locations':
  default:
    return false;
}
```


## Background Script

You can add custom code when the user is not using a custom tab. It can be useful to handle custom events.

```json
{
  // ...
  "backgroundScript": "./background.js"
}
```

Please refer to the [SDK](/docs/sdk-librairies/plugins-js-sdk/plugins-apis) documentation to know how to inject custom code in the application.

The background script is always running, even when the user is logged out. Please make sure to remove all related background tasks when the `onLogout` listener event is fired.
