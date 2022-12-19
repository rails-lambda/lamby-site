import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Event-Based with Rack',
    description: (
      <>
        No webserver needed! Lamby is as a Rack adapter that converts any AWS Lambda integration into Rack objects that are sent directly to your app. Lamby supports Function URLs, API Gateway (HTTP or REST), and Application Load Balancer (ALB) integrations. Background jobs and other events are supported.
      </>
    ),
  },
  {
    title: 'Container-First Principles',
    description: (
      <>
        Any containerized Rails application can run on AWS Lambda. Compute can rapidly scale to meet any demand and back down to zero for cost savings. Images have access to 10 GB size limits, 10 GB of memory, & as many as 6 vCPUs. Lamby even promotes the use of the same containers for development.
      </>
    ),
  },
  {
    title: 'Easy IaC to CI/CD',
    description: (
      <>
        Infrastructure as Code (IaC) will now be front and center in your Rails project folder by using the AWS Serverless Application Model (SAM). Easily create serverless Resources like S3 Buckets, EventBridge Rules, IAM Roles and more. Leverage SAM's CLI to create/update AWS Resources and your container images.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
