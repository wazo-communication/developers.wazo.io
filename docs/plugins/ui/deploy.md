---
displayed_sidebar: pluginsSidebar
title: Deployment | UI Plugin
---

# Deployment Guide

Guide to help you deploy a Wazo plugin and make it ready to production.

## During Development

Developers can install a plugin from a `localhost` environment. Example the manifest URL could be `https://localhost:3000/manifest.json`. Just keep in mind to don't install it for a real client, because users will not be able to load a plugin from a `localhost` environment.

[CORS](#cors) need to be well configured to be able to install a local plugin. The process to install a local vs production plugin is the same, please refer to the [distributing section](#distributing).

### Mobile Development

When developing a plugin for the mobile application, developers needs to use secure tunnel to expose `localhost` environment to a public URL. At Wazo, we use [**ngrok**](https://ngrok.com/docs/getting-started/) during development phase. `ngrok` is a easy to use CLI and fits perfectly mobile developments needs. Here's a few steps

- [Create an account](https://ngrok.com/signup) on ngrok
- [Install and configure](https://ngrok.com/docs/getting-started/) ngrok CLI
- Be sure you local server is started: `http://localhost:3000`
- Proxy you local server why ngrok: `ngrok http http://localhost:3000`
- From Portal, install plugin with the **forwarding** URL provided by ngrok: `https://<forwarding-url>.ngrok-free.dev/manifest.json`

## Where to Deploy

Great news, you have the full control where it can be deployed. Plugins must be **hosted on your infrastructure** and Wazo do not take ownership on this part. It's only important to make the plugin accessible publicly from the web. Otherwise, administrator won't be able to the plugin.

### CORS Enabled \{#cors}

The `manifest.json` of your application should be served using a CORS-enabled HTTP server. This must be enabled on your infrastructure to allow Wazo Product to fetch the file's content and enable related features.

:::info
`manifest.json` files should be served using a CORS-enabled http server. If not well configured, it will be impossible to install the plugin.
:::

```
# nginx
server {
    listen 80;
    server_name your_domain;

    location / {
        add_header 'Access-Control-Allow-Origin' '*';  # Or *.wazo.io
        # Other directives...
    }
}

# Apache
<VirtualHost *:80>
    ServerName your_domain

    <Directory /var/www/html>
        Header set Access-Control-Allow-Origin "*" # Or *.wazo.io
    </Directory>

    # Other directives...
</VirtualHost>
```

### Server Provider

Like said previously, it's your choice where to deploy your plugin. But here's a suggestions of providers dependings on your plugins needs:

- **Plugins powered by a backend**: AWS, Digital Ocean, OVH, Google Cloud
- **Plugins without backend (static)**: Cloudflare Pages, Netlify, Vercel

## Distributing your plugin \{#distributing}

The procedure to install a Portal and Apps plugins is a little bit different. Here's steps-by-steps that will guide you from A to Z.

### Web & Desktop Plugin

- Connect to [E-UC Portal](https://portal.wazo.io)
- Go to [Plugins](https://portal.wazo.io/#/plugins) > [Apps](https://portal.wazo.io/#/plugins-apps)
- Select the location you want to install a plugin on
- Click the **Install** button
- Select Application Name choice **Web & Desktop**
- Insert the URL of your `manifest.json`
- Enjoy!

![Install App Plugin](/img/plugins/ui/install-app.jpg)

#### Enable plugins for specific users

- Connect to a stack or location
- Go to `Settings > Debugging Tools > Auth. Users`.
- Choose your user and then click on `Application Configuration`
- If no application is configured, create a new configuration for your application.
- In the *Plugins* section, insert the URL to your `manifest.json`
- Enjoy!


### Mobile Plugin

- Connect to [E-UC Portal](https://portal.wazo.io)
- Go to [Plugins](https://portal.wazo.io/#/plugins) > [Apps](https://portal.wazo.io/#/plugins-apps)
- Select the location you want to install a plugin on
- Click the **Install** button
- Select Application Name choice **Mobile**
- Insert the URL of your `manifest.json`
- Enjoy!

![Install Mobile Plugin](/img/plugins/ui/install-mobile.jpg)

### Portal Plugin

- You must be connected to [E-UC Portal](https://portal.wazo.io)
- Go to `Plugins` > Portal
- Click the **Install** button
  ![Install Portal Plugin](/img/plugins/ui/install-portal.jpg)
- Then enable the plugin Globally or for a specific
  ![Enable Portal Plugin](/img/plugins/ui/plugin-portal-enable.png)
- Enjoy!
