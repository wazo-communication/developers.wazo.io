import Link from '@docusaurus/Link';
import PageHeader from '@site/src/components/PageHeader';
import Layout from '@theme/Layout';

const UseCases = (): JSX.Element => (
  <Layout
    title="Wazo developers - Case Studies"
    description="Discover the versatility of our SDK as it enhances Wazo Products or allows for the creation of custom softphones. Delve into our case studies to gain insights and inspiration for your own projects."
  >
    <PageHeader
      title="Case Studies"
      description="Showcase of real world plugin that extended Wazo Products."
    />

    <main>
      <div className="container">
        <div className="row">
          {/* @todo: make it pretty */}
          <ul>
            <li>
              <Link to="/case-studies/sms">SMS</Link>
            </li>
            <li>
              <Link to="/case-studies/call-quality">Call Quality</Link>
            </li>
            <li>
              <Link to="/case-studies/call-parking">Call Parking</Link>
            </li>
            <li>
              <Link to="/case-studies/ringtones">Ringtones</Link>
            </li>
            <li>
              <Link to="/case-studies/fail2ban-supervisor">
                Fail2Ban supervisor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </Layout>
);

export default UseCases;
