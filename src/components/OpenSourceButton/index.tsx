import styles from './styles.module.css'
import OpenSourceLogo from '@site/static/img/logo-open-source-square.svg'

type Props = {
  href: string;
  text?: string;
}

export default function ButtonTrySource({ href, text = 'Visit' }: Props) {
  if(!href) {
    return null;
  }

  return (
    <div className={styles.openSourceButton}>
      <a className="button button--primary button--lg" href={href} target="_blank"><OpenSourceLogo /> { text }</a>
      <p><em>Pstt... it's on our open source website</em></p>
    </div>
  );
}
