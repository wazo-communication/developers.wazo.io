import clsx from "clsx";
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type ButtonProps = {
  to: string;
  text: string;
  type?: string;
}

type Props = {
  title: string;
  description?: string;
  buttons?: ButtonProps[],
}

const HeaderButton = ({ to, text, type = 'secondary' }: ButtonProps) =>
  <Link className={`button button--lg ${styles[`${type}Button`]}`} to={to}>{text}</Link>

const PageHeader = ({ title, description, buttons = [] }: Props) => (
  <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <h1 className="hero__title">{ title }</h1>
      { description && <p className="hero__subtitle">{ description }</p> }
      { buttons.length > 0 &&
        <div className={styles.buttons}>
          {
            buttons.map(button => <HeaderButton key={button.to} {...button} />)
          }
        </div>
      }
    </div>
  </header>
);

export default PageHeader
