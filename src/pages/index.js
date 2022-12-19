import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeroImage({name}) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--image', styles[name])}>
      <div className="container"></div>
    </header>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>
          Simple Rails & AWS Lambda Integration using Rack
        </h1>
        <p className="hero__subtitle">Event-driven and deeply integrated within AWS, Lambda allows your Rails architecture to be completely reimagined atop fully managed infrastructure resources like Aurora, SQS, S3, CloudWatch, IAM, and much more. Using Lamby can help your engineering teams learn to "program the cloud".</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/quick-start">
            Rails on Lambda in 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageHeroImage name="heroImageWhimsical" />
      <HomepageHeroImage name="heroImageArch" />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
