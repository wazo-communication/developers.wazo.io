import Link from '@docusaurus/Link';
import type { UseCase } from '@site/src/pages/use-cases';
import ChevronRight from '@site/static/img/icons/chevron_right.svg';
import styles from './styles.module.css';

export function UseCaseItem({ title, Svg, description, link }: UseCase) {
  return (
    <Link
      className={`col col--6 margin-bottom--lg ${styles.useCase}`}
      href={link}
    >
      <div className="padding--lg">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.useCaseBottom}>
          <span className="button button--primary button--outline padding-horiz--sm">
            More Information
            <ChevronRight />
          </span>

          <Svg className={styles.useCaseSvg} role="img" />
        </div>
      </div>
    </Link>
  );
}

type Props = {
  useCases: UseCase[];
};

export default ({ useCases }: Props) => {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <div className="row">
          {useCases.map((props) => (
            <UseCaseItem key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
