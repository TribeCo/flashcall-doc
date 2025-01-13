import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "در کمترین زمان شروع کنید",
    Svg: require("@site/static/img/1.svg").default,
    description: <>با مطالعه مستندات فرز در کوتاه ترین زمان استفاده از سرویس های ما را یاد بگیرید.</>,
  },
  {
    title: "کد های آماده در اختیار شماست!",
    Svg: require("@site/static/img/2.svg").default,
    description: (
      <>به هر زبانی که کد می زنید، کد های آماده برای وصل کردن سرویس در اختیار شما قرار داده شده است</>
    ),
  },
  {
    title: "آموزش های ویدیویی در خدمت شماست!",
    Svg: require("@site/static/img/3.svg").default,
    description: (
      <>برای سهولت استفاده از داشبورد کاربری فرز، آموزش های کامل ویدئویی را در مستندات پیدا خواهید کرد</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
