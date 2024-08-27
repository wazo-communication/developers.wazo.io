import clsx from 'clsx';
import styles from './styles.module.css';

type UseCase = {
  title: string;
  link: string,
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

export function Feature({ title, Svg, description, link }: UseCase ) {
  return (
    <a className={`${clsx('col col--6')} ${styles.feature}`} href={link}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

type Props = {
  useCases: UseCase[];
};

export default ({ useCases }: Props) => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {useCases.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
}
