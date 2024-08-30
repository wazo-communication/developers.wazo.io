import Layout from '@theme/Layout';
import PageHeader from '@site/src/components/PageHeader';
import UseCasesItems from '@site/src/components/UseCases';

export const WDA = {
  title: 'Build a Web & Desktop Plugin',
  Svg: require('@site/static/img/use-cases/wda.svg').default,
  link: './docs/plugins/ui/apps',
  description: (
    <>
      Add tabs, icons, new pages and lot of new feature to your Web and Desktop app.
    </>
  ),
};

export const MOBILE = {
  title: 'Build a Mobile Application Plugin',
  Svg: require('@site/static/img/use-cases/mobile.svg').default,
  link: './docs/plugins/ui/mobile',
  description: (
    <>
      Customize Wazo Mobile by adding new sections and features for your end-users.
    </>
  ),
};

export const PORTAL = {
  title: 'Build an Administration Plugin',
  Svg: require('@site/static/img/use-cases/portal.svg').default,
  link: './docs/plugins/ui/portal',
  description: (
    <>
      Customize the Wazo Portal to add new pages, menu items, custom forms or even new dashboard.
    </>
  ),
}

export const SOFTPHONE = {
  title: 'Integrates our Embeddable Softphone',
  Svg: require('@site/static/img/use-cases/softphone.svg').default,
  link: './docs/integrations/embedded-softphone',
  description: (
    <>
      Enhance your application with an Embedded Softphone that you control with ease.
    </>
  ),
}


const ALL_USE_CASES = [ WDA, MOBILE, PORTAL, SOFTPHONE ];

const UseCases = (): JSX.Element => (
  <Layout
    title="Use Cases"
    description="Empower your development with our SDK, extending Wazo Products or building custom softphones. Explore our use cases for inspiration.">
    <PageHeader title="Use Cases" description="Explore how Wazo Products can be extended or integrates for any kind of solutions." />
    <main>
      <UseCasesItems useCases={ALL_USE_CASES} />
    </main>
  </Layout>
);

export default UseCases;
