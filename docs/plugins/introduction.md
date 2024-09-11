---
displayed_sidebar: pluginsSidebar
---

import Link from '@docusaurus/Link';

# Modular Plugins

Modular plugins give the capacity to any developers to add new features or extended existing ones from our applications. Plugins interact and extend our products in every possible way. Will enhance experience of an administrator to apps & phones user or even an API's user.

![Introduction modular plugin](/img/plugins/introduction.jpg)

<nav className="pagination-nav" aria-label="Docs pages">
  <Link className="pagination-nav__link" to="/docs/plugins/ui/portal/">
    <div className="pagination-nav__sublabel">Portal Plugin</div>
    <div className="pagination-nav__label">Documentation</div>
  </Link>

  <Link className="pagination-nav__link" to="/docs/plugins/pbx/">
    <div className="pagination-nav__sublabel">Stack Plugin</div>
    <div className="pagination-nav__label">What is a Stack plugin?</div>
  </Link>

  <Link className="pagination-nav__link" to="/docs/plugins/ui/apps">
    <div className="pagination-nav__sublabel">App Plugin</div>
    <div className="pagination-nav__label">Documentation</div>
  </Link>

  <Link className="pagination-nav__link" to="/docs/plugins/ui/mobile">
    <div className="pagination-nav__sublabel">Mobile Plugin</div>
    <div className="pagination-nav__label">Documentation</div>
  </Link>

  <Link className="pagination-nav__link" to="/docs/plugins/provisioning">
    <div className="pagination-nav__sublabel">Provisioning Plugin</div>
    <div className="pagination-nav__label">What is a Provisioning plugin?</div>
  </Link>
</nav>

## Types of Plugin

Wazo offers many ways to extend our wide ecosystem from various plugin types. We share with you some ideas for each type of our products, but your imagination is our only limitation here.

### Apps

Extend our Web, Desktop and Mobile application with plugins, add new pages, settings and more.

#### Example of ideas

- **SMS**: With plugins, you can add in an SMS provider to our app. Add a new tab from the plugin manifest and connect it to your favorite SMS provider. Starting from there, you can add new sophisticated functionalities of your choice.
- **CRM**: Match all incoming calls to any CRM, even any internal CRM with an API Available.
- **Internal Tools**: Add a wide range of tools to help your organization. From a simple list of documents to an integrated calculation tool that helps your sales team during a call.

### Portal

Customize the Wazo Portal to add new pages, menu items, custom forms, and even new dashboards.

#### Example of ideas

- **Realtime dashboard**: Add a new tab inside your stack's dashboard to show realtime metrics. This dashboard could be built to show specific KPIs or any other data from an external API.
- **Extend any form**: Plugins allow you to add any tabs in any form. You could map information related to any users, devices, or conferences from an external or internal system.
- **Support Center Dashboard**: Add your own support center page to help your customers troubleshoot problems or contact the support team.

### Stack

Extend your Wazo Stack with custom functionalities through Python plugins, utilizing extension points in various micro-services.

#### Example of ideas

- **CRM**: A plugin can be developed to integrate the PBX server with a Customer Relationship Management (CRM) system. This integration can allow for call logging, call recording, and call analytics to be directly linked with customer data.
- **AI-Powered Routing**: A plugin can be developed to leverage AI and machine learning algorithms to route calls based on various factors such as caller sentiment, call history, and availability of agents.
- **Real-time Analytics**: A plugin can be developed to provide a real-time analytics dashboard that displays key performance indicators (KPIs) such as call volume, average call duration, and customer satisfaction scores.


### Provisioning

Extend Wazo Provisioning by adding third-party plugins to support new devices, customize phone features, and enhance phone interface.

#### Example of ideas

- **New Hardware**: Adding support for new hardware devices or software platforms that Wazo do not yet support
- **Custom Feature**: Developing custom phone features
- **User Interface**: Enhancing the user interface one some devices
