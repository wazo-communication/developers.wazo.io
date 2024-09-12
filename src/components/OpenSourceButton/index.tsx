import OpenSourceLogo from '@site/static/img/logo-open-source-square.svg';
import styles from './styles.module.css';

type Props = {
  href: string;
  text?: string;
};

export default function ButtonTrySource({ href, text = 'Visit' }: Props) {
  if (!href) {
    return null;
  }

  return (
    <div className={styles.openSourceButton}>
      <a
        className="button button--primary button--lg"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <OpenSourceLogo /> {text}
      </a>
      <p>
        <em>Pstt... it's on our open source website</em>
      </p>
    </div>
  );
}
