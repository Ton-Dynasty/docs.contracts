import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate description='feature title - easy to use'>Easy to Use</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate description='feature - easy to use'>
        TonDynasty contracts was designed from the ground up to be easily installed and
        used to deploy your own contracts efficiently and securely.
      </Translate>
    ),
  },
  {
    title: <Translate description='feature title - focus on your business'>Focus on Your Business</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate description='feature - focus on your business'>
        TonDynasty contracts lets you focus on your business logics, and we&apos;ll do the chores.
      </Translate>
    ),
  },
  {
    title: <Translate description='feature title - scalability'>Scalability</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate description='feature - scalability'>
        You can override the default implementation of the contracts to fit your needs. 
        You can also use the contracts as a library to build your own contracts.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
