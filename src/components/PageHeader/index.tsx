import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type ButtonProps = {
  to: string;
  text: string;
  type?: string;
};

type Props = {
  title: string;
  description?: string;
  buttons?: ButtonProps[];
  className?: string;
  insideContent?: boolean;
};

type TileProps = Pick<Props, 'title' | 'insideContent'>;

const HeaderButton = ({ to, text, type = 'secondary' }: ButtonProps) => (
  <Link className={`button button--lg ${styles[`${type}Button`]}`} to={to}>
    {text}
  </Link>
);

const Title = ({ title, insideContent }: TileProps) => {
  const TitleElement = insideContent ? 'span' : 'h1';

  return <TitleElement className="hero__title">{title}</TitleElement>;
};

const PageHeader = ({ title, description, buttons = [], className, insideContent = false }: Props) => (
  <header className={clsx('hero hero--primary', styles.heroBanner, className, { 'margin-bottom--lg': insideContent })}>
    <div className="container">
      <Title insideContent={insideContent} title={title} />
      {description && <p className="hero__subtitle">{description}</p>}
      {buttons.length > 0 && (
        <div className={styles.buttons}>
          {buttons.map((button) => (
            <HeaderButton key={button.to} {...button} />
          ))}
        </div>
      )}
    </div>
  </header>
);

export default PageHeader;
