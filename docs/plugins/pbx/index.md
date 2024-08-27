---
displayed_sidebar: pluginsSidebar
---

import OpenSourceButton from '@site/src/components/OpenSourceButton';

# What can be done with a Stack plugin?

Wazo Modular Plugins enable third parties to extend the Wazo platform by adding various functionalities. Most of our services include extension points that can be leveraged to create comprehensive features within a plugin.

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

