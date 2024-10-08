import PageHeader from '@site/src/components/PageHeader';
import UseCasesItems from '@site/src/components/UseCases/horizontal';
import Layout from '@theme/Layout';

export type UseCase = {
  title: string;
  imageSrc: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: JSX.Element;
};

export const WDA: UseCase = {
  title: 'Build a Web & Desktop Plugin',
  imageSrc: require('@site/static/img/use-cases/wda.png').default,
  Svg: require('@site/static/img/use-cases/wda.svg').default,
  link: './docs/plugins/ui/apps',
  description: (
    <>
      Add tabs, icons, and new pages to the Web and desktop app, significantly
      expand functionality based on your need. Lead to a more engaging
      experience based on your needs.
    </>
  ),
};

export const MOBILE: UseCase = {
  title: 'Build a Mobile Application Plugin',
  imageSrc: require('@site/static/img/use-cases/mobile.jpg').default,
  Svg: require('@site/static/img/use-cases/mobile.svg').default,
  link: './docs/plugins/ui/mobile',
  description: (
    <>
      Customize Wazo Mobile by adding unique sections and features, creating a
      personalized mobile communication solution for your end-users.
    </>
  ),
};

export const PORTAL: UseCase = {
  title: 'Build an Administration Plugin',
  imageSrc: require('@site/static/img/use-cases/portal.jpg').default,
  Svg: require('@site/static/img/use-cases/portal.svg').default,
  link: './docs/plugins/ui/portal',
  description: (
    <>
      Customize the Wazo Portal to add new pages, menu items, custom forms, and
      even new dashboards. This flexibility allows you to improve the platform
      to meet your unique business needs, enhancing your user experience.
    </>
  ),
};

export const SOFTPHONE: UseCase = {
  title: 'Integrates our Embeddable Softphone',
  imageSrc: require('@site/static/img/use-cases/softphone.png').default,
  Svg: require('@site/static/img/use-cases/softphone.svg').default,
  link: './docs/integrations/embedded-softphone',
  description: (
    <>
      Empower your application with an Embedded Softphone, offering unparalleled
      control and flexibility. This feature allows to use real-time
      communication, enabling communication features within your application
      environment.
    </>
  ),
};

export const STACK: UseCase = {
  title: 'Build a Stack Plugin',
  imageSrc: require('@site/static/img/use-cases/stack.jpg').default,
  Svg: require('@site/static/img/use-cases/stack.svg').default,
  link: './docs/plugins/pbx',
  description: (
    <>
      Extend your Wazo Stack with custom functionalities through Python plugins,
      utilizing extension points in various services to create comprehensive
      features base on you customers' needs.
    </>
  ),
};

export const PROVISIONING: UseCase = {
  title: 'Create a Provisioning Plugin',
  imageSrc: require('@site/static/img/use-cases/provisioning.jpg').default,
  Svg: require('@site/static/img/use-cases/provisioning.svg').default,
  link: './docs/plugins/provisioning',
  description: (
    <>
      Extend Wazo Provisioning by adding third-party plugins to support new
      devices, customize phone features, and enhance phone interface.
    </>
  ),
};

const ALL_USE_CASES: UseCase[] = [
  WDA,
  MOBILE,
  PORTAL,
  STACK,
  SOFTPHONE,
  PROVISIONING,
];

const UseCases = (): JSX.Element => (
  <Layout
    title="Use Cases"
    description="Empower your development with our SDK, extending Wazo Products or building custom softphones. Explore our use cases for inspiration."
  >
    <PageHeader
      title="Use Cases"
      description="Explore how Wazo Products can be extended or integrates for any kind of solutions."
    />
    <main>
      <UseCasesItems useCases={ALL_USE_CASES} />
    </main>
  </Layout>
);

export default UseCases;
