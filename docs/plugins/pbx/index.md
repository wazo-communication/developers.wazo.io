---
displayed_sidebar: pluginsSidebar
title: Stack Plugin
---

import OpenSourceButton from '@site/src/components/OpenSourceButton';
import PageHeader from '@site/src/components/PageHeader';

<PageHeader title="Stack Plugin" insideContent />

# What is a Stack plugin?

Wazo Stack allow third parties to extend the platform by adding various functionalities from python plugin. Most of our services include extension points that can be leveraged to create comprehensive features within a plugin.

Here’s a non-exhaustive list of what can be achieved with plugins:

- Integrate third-party software to introduce new feature sets.
- Add configuration files to Wazo services in `/etc/*/conf.d/`.
- Add configuration and dialplan files to Asterisk.
- Reload services to finalize the installation process.
- Extend Wazo services by utilizing available extension points, including:
    - wazo-auth
    - wazo-calld
    - wazo-dird
    - wazo-confd
    - wazo-confgend
    - wazo-agentd

<OpenSourceButton href="https://wazo-platform.org/uc-doc/contributors/plugins" text="Read Documentation" />

