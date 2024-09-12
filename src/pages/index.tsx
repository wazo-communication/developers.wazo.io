import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import PageHeader from '@site/src/components/PageHeader';
import UseCases from '@site/src/components/UseCases';
import ChevronRight from '@site/static/img/icons/chevron_right.svg';
import Layout from '@theme/Layout';
import { PORTAL, SOFTPHONE, STACK, WDA } from './use-cases';

import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

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
      description="Our SDK allows any developer to extend all Wazo Products' functionalities or to build a softphone powered by Wazo."
    >
      <PageHeader
        className={styles.herobanner}
        title="Build anything on top of Wazo"
        description={siteConfig.tagline}
        buttons={HEADER_BUTTONS}
      />

      <main>
        <div className="padding-vert--xl">
          <div className="container text--center">
            <p className="pre-title">Use cases</p>
            <h2>Discover a wide range of possiblities with Wazo</h2>
            <p>
              From one-to-one interactions to unlimited scalability in a single
              SDK. No need to set up, babysit, and burn dollars with multiple
              SDKs.
            </p>
          </div>

          <UseCases useCases={HOME_USE_CASES} />
          <div className={`container ${styles.useCases}`}>
            <div className="row row--align-center">
              <Link
                className="button button--lg button--primary"
                to="/use-cases"
              >
                All Use Cases
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.why}>
          <div className="container">
            <p className="pre-title">Why Wazo</p>
            <div className="text--center">
              <h2>Deliver Unique UCaaS Experiences</h2>
              <p className="padding-horiz--xl">
                Deliver communication experiences that set you apart from the
                competition. Our flexible APIs and integrations let you create
                the solutions your customers need to succeed in the new world of
                work.
              </p>
            </div>

            <div className="row row--align-center">
              <div className="col col--2">
                <p>
                  <img
                    src={useBaseUrl('/img/icons/wazo/white/icon-ucaas-api.svg')}
                    alt="UCaaS simple API"
                  />
                  <span>Simple APIs & Integrations</span>
                </p>
              </div>

              <div className="col col--2">
                <p>
                  <img
                    src={useBaseUrl(
                      '/img/icons/wazo/white/icon-ucaas-fast.svg',
                    )}
                    alt="fast unified communication"
                  />
                  <span>Gain faster speed-to-market.</span>
                </p>
              </div>

              <div className="col col--2">
                <p>
                  <img
                    src={useBaseUrl(
                      '/img/icons/wazo/white/icon-ucaas-goodbye.svg',
                    )}
                    alt="easy integration unified communication"
                  />
                  <span>Stand out with APIs and integrations.</span>
                </p>
              </div>

              <div className="col col--2">
                <p>
                  <img
                    src={useBaseUrl(
                      '/img/icons/wazo/white/icon-ucaas-owncustomers.svg',
                    )}
                    alt="custom development PBX"
                  />
                  <span>Own your platform and your customers</span>
                </p>
              </div>

              <div className="col col--2">
                <p>
                  <img
                    src={useBaseUrl(
                      '/img/icons/wazo/white/icon-ucaas-simpleapi.svg',
                    )}
                    alt="API extendable UC platform"
                  />
                  <span>Say goodbye to black-box solutions.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.startNow}>
          <div className="container padding-vert--xl">
            <h2>
              Stand Out. <span>Own Your Customer.</span> Develop Today.
            </h2>
            <p>
              Ready to deliver customized, unique UCaaS experiences? Start your
              Wazo journey
            </p>

            <div>
              {HEADER_BUTTONS.map(({ to, text }) => (
                <Link
                  key={to}
                  className="button button--secondary button--outline button--md margin-horiz--sm"
                  to={to}
                >
                  {text} <ChevronRight />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
