---
displayed_sidebar: jsPluginSdkSidebar
---

import '../../../src/softphone-example.js';
import PageHeader from '@site/src/components/PageHeader';

<PageHeader title="E-UC Plugins SDK" insideContent />


# Installation

Welcome to the **Wazo E-UC Plugins SDK** documentation!

Our powerful toolkit is designed to help you create and integrate around Wazo products, from an embedded softphone to modular plugins. Whether you're a seasoned developer or just starting out, the Wazo E-UC Plugins SDK is designed to fit any JavaScript project.

In this section, we'll guide you through the process of installing the Wazo E-UC Plugins SDK in few minutes. By the end of this guide, you'll have the base foundation for creating your own custom plugins or embed a softphone into any project.

## Prerequisites

Before starting, we suggest being familiar with the following subjects to ease your experience.

- HMTL & CSS
- JSON
- JavaScript language

:::info
**New to web technologies?** We suggest this guide: [Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web).
:::

## Using a Package Manager

You can install our SDK with your favorite package manager in the following ways:

```bash
# NPM
npm install @wazo/euc-plugins-sdk

# YARN
yarn add @wazo/euc-plugins-sdk
```

Then import the SDK in any file of your project.

```js
import { App } from '@wazo/euc-plugins-sdk';
import { softphone } from '@wazo/euc-plugins-sdk';

const app = new App();
```

## Using a Content Delivery Networks (CDN)

Alternatively, you can load the Wazo SDK from a CDN. Use one of the following Content Delivery Networks:

### UNPKG

```js
import { App } from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';
import softphone from 'https://unpkg.com/@wazo/euc-plugins-sdk@latest/lib/esm/softphone.js';

const app = new App();
```

### jsDelivr

```js
import { App } from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';
import softphone from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/softphone.js';

const app = new App();
```

## What's Next?

🎉 Good job, you officially installed our SDK. The next step is to decide if you want to [build a plugin](/docs/plugins/ui/get-started/) to extend our
products or [integrate the embedded softphone](/docs/integrations/embedded-softphone) in your system.

Enjoy!

