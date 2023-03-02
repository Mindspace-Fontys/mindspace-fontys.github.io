import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<
    React.ComponentProps<"svg">
  >;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/bulb.svg")
      .default,
    description: (
      <>
        MindSpaces was designed from the ground up
        to be easily installed and used to give
        your organisation a fully featured
        reservation system within minutes.
      </>
    ),
  },
  {
    title: "Security First",
    Svg: require("@site/static/img/fingerprint.svg")
      .default,
    description: (
      <>
        MindSpaces is built with security in mind
        and is designed to be used in a variety of
        environments. It is built on top of
        industry standard technologies and is
        regularly updated to ensure that it is
        safe.
      </>
    ),
  },
  {
    title: "Powered by You",
    Svg: require("@site/static/img/group.svg")
      .default,
    description: (
      <>
        MindSpaces is MIT licensed and open source
        so you can contribute to the project and
        help make it better. You can also use it
        for free in your organisation.
      </>
    ),
  },
];

function Feature({
  title,
  Svg,
  description,
}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
        />
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
