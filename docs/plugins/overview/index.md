---
displayed_sidebar: pluginsSidebar
---

import PageHeader from '@site/src/components/PageHeader';

<PageHeader title="Philosophy" insideContent />

# Our Main Goal

Our goal is to offer an easy way to integrate Modular Plug-Ins inside our products. A solution to allow any developers to add any components that enhance the Wazo feature set. By doing so, business using Wazo can deliver more comprehensive solutions to their customers without requiring them to use multiple products to meet their communication needs.

## Context

At Wazo, we aim to concentrate our efforts on our core strengths while integrating additional features through third-party development. This approach provides our partners with more options, allowing them to offer a more complete platform to their end-users. We recognize that effective collaboration and communication are essential for organizations to stay connected with their customers and maintain internal team cohesion. Therefore, our objective is to streamline this process by empowering them with greater autonomy, we aim to reduce their dependence on our development queue for new features, enabling them to achieve greater success in their business.

By allowing any companies to tailor any business models and add value for their end customers, we provide them with the means to differentiate themselves and enhance their products and services. Wazo offers numerous extension points, all of which can be combined to create comprehensive features for your preferred PBX system.

For Wazo, this strategy also highlights the importance of focusing our efforts on specific use cases. If we don't, we risk being in a constant cycle of adding tweaks and functionalities to satisfy every unique needs, which is unsustainable for building a cohesive platform.

Any Modular Plug-Ins are hosted and managed by the author(s), separately from Wazo. Wazo will likely need to offer some level of observability, allowing businesses to quickly diagnose whether an issue lies within their code or with Wazo’s APIs.


## What is a Modular Plugin?

A modular plugin is a software component that can be independently developed, added to, or removed from a system without impacting its core functionality. These plugins are designed to be modular, meaning they can function as standalone units while still interacting seamlessly with the main application or platform.

Key characteristics of modular plugins include:

1. **Flexibility**: They allow users to customize and extend the functionality of the main system according to specific needs without altering the core software.
2. **Interoperability**: Modular plugins can interact with the core system and other plugins, enhancing the system’s overall capabilities.
3. **Ease of Integration**: They are typically designed for smooth integration into the existing architecture of a software platform.
4. **Isolation**: Since they operate independently, issues or bugs in one plugin do not necessarily affect the rest of the system.

In the context of Wazo, modular plugins enable partners to add new features or components to the Wazo platform, allowing them to offer more customized solutions to their customers. These plugins are hosted and managed by the partners, giving them the autonomy to innovate and differentiate their offerings.

The beauty of modular plugins lies in their ability to facilitate customization, potentially opening new markets and attracting new customer types without requiring extensive changes to our core codebase. Beyond this, plugins provide a way to extend the product's capabilities in general.

For example:

- Extending phone desk provisioning within the core of Wazo.
- Developing APIs for microservices.
- Adding new APIs to the core platform.
- Using the Modular Plugin framework to quickly develop Proofs of Concept (POCs) without affecting production environments.

Modular plugins empower partners to incorporate new features and third-party libraries into our applications, interacting with and extending our products in every possible way.

These plugins must be hosted on the partner's infrastructure, giving them full control over the technologies they use and the timing of plugin updates.
