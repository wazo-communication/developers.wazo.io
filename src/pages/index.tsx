import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UseCases from '@site/src/components/UseCases';
import PageHeader from '@site/src/components/PageHeader';
import { PORTAL, SOFTPHONE, STACK, WDA } from './use-cases';
import Link from '@docusaurus/Link';

import styles from './index.module.css'

const HEADER_BUTTONS = [
  {
    to: '/docs/plugins/introduction',
    text: 'Build a Plugin',
  },
  {
    to: '/docs/integrations/embedded-softphone',
    text: 'Integrates a Softphone',
  },
];

const HOME_USE_CASES = [WDA, PORTAL, STACK, SOFTPHONE];

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Extend anything around Wazo"
      description="Our SDK allows any developer to extend all Wazo Products' functionalities or to build a softphone powered by Wazo.">

      <PageHeader
        title="Build anything on top of Wazo"
        description={siteConfig.tagline}
        buttons={HEADER_BUTTONS}
      />

      <main>
        <div className='padding-vert--lg'>
          <div className="container">
            <h2>Use cases</h2>
            <p>Discover the most common use cases for our platform. Learn about its versatility and how it can meet your needs effectively.</p>
          </div>
          <UseCases useCases={HOME_USE_CASES} />
          <div className={`container padding-top--lg ${styles.useCases}`}>
            <div className="row row--align-center">
              <Link className="button button--lg button--primary" to="/use-cases">All Use Cases</Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
