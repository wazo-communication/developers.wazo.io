import styles from './styles.module.css';
import type { UseCase } from '@site/src/pages/use-cases';
import Link from '@docusaurus/Link';

export function UseCaseItem({ title, description, link, imageSrc }: UseCase ) {
  return (
    <div className="row padding-vert--lg">
      <div className={`padding--lg ${styles.horizontalContent}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        { link && <Link to={link} className="button button--primary">More information</Link> }
      </div>

      <div className={styles.horizontalImage}>
        <img role="img" src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

type Props = {
  useCases: UseCase[];
};

export default ({ useCases }: Props) => {
  return (
    <section className={styles.useCases}>
      <div className="container">
        {useCases.map((props, idx) => (
          <UseCaseItem key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
