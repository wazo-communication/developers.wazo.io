import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UseCases from '@site/src/components/UseCases';
import PageHeader from '@site/src/components/PageHeader';
import { MOBILE, PORTAL, SOFTPHONE, WDA } from './use-cases';

const HEADER_BUTTONS = [
  {
    to: '/docs/plugins/introduction',
    text: 'Build a Plugin',
  },
  {
    to: '/docs/softphone/introduction',
    text: 'Integrates a Softphone',
  },
]

const HOME_USE_CASES = [WDA, MOBILE, PORTAL, SOFTPHONE];

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Wazo E-UC Plugins documentation"
      description="Our SDK allows any developer to extend all Wazo Products' functionalities or to build a softphone powered by Wazo.">

      <PageHeader
        title="Build anything on top of Wazo"
        description={siteConfig.tagline}
        buttons={HEADER_BUTTONS}
      />

      <main>
        <UseCases useCases={HOME_USE_CASES} />
      </main>
    </Layout>
  );
}

export default Home;
