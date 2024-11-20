---
displayed_sidebar: pluginsSidebar
title: Development | UI Plugin
---

# Development Guide

Welcome to the Development Guide for Wazo plugins. This guide is designed to help you navigate the process of developing a Wazo plugin, from initial setup to deployment.

If you're new to Wazo, you might want to familiarize yourself with its architecture and concepts before diving into plugin development. For a comprehensive understanding of Wazo, check out the [our API documentation](https://api.wazo.io/).


## During development

Developers can install a plugin from a `localhost` environment. Example the manifest URL could be `https://localhost:3000/manifest.json`. Just keep in mind to don't install it for a real client, because users will not be able to load a plugin from a `localhost` environment.

[CORS](#cors) need to be well configured to be able to install a local plugin. The process to install a local vs production plugin is the same, please refer to the [distributing section](#distributing).

### Mobile Development

When developing a plugin for the mobile application, developers needs to use secure tunnel to expose `localhost` environment to a public URL. At Wazo, we use [**ngrok**](https://ngrok.com/docs/getting-started/) during development phase. `ngrok` is a easy to use CLI and fits perfectly mobile developments needs. Here's a few steps

- [Create an account](https://ngrok.com/signup) on ngrok
- [Install and configure](https://ngrok.com/docs/getting-started/) ngrok CLI
- Be sure you local server is started: `http://localhost:3000`
- Proxy you local server why ngrok: `ngrok http http://localhost:3000`
- From Portal, install plugin with the **forwarding** URL provided by ngrok: `https://<forwarding-url>.ngrok-free.dev/manifest.json`
