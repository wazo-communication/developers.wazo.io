---
displayed_sidebar: pluginsSidebar
title: Examples | Stack Plugin
---

import ButtonsTrySource from '@site/src/components/ButtonsTrySource';

# Stack Plugin - Examples


## Say Hello Word

This example will create a plugin that adds an extension `***42` that says `Hello World` when
called.

### `wazo/plugin.yml`

```yaml
namespace: demo
name: helloworld
description: Adds the extension "***42" to you dialplan to greet users
version: 0.0.1
plugin_format_version: 0
```

### `wazo/rules`

```shell
#!/bin/sh

case "$1" in
    build)
        ;;
    package)
        mkdir -p ${pkgdir}/etc/asterisk/extensions_extra.d
        cp helloworld.conf ${pkgdir}/etc/asterisk/extensions_extra.d/
        ;;
    install)
        asterisk -x 'dialplan reload'
        ;;
    uninstall)
        ;;
    *)
        echo "$0 called with unknown argument '$1'" >&2
        exit 1
        ;;
esac
```

### `helloworld.conf`

```ini
[xivo-extrafeatures]
exten = ***42,1,Playback(hello-world)
same = n,Return()
```

<ButtonsTrySource source="https://github.com/wazo-communication/wazo-plugin-demo-dialplan" />
