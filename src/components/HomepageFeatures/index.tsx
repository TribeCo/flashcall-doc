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
    title: "به راحتی استفاده کنید!",
    Svg: require("@site/static/img/1.svg").default,
    description: (
      <>
        ما سیستمی توسعه دادیم که به راحتی بتوانید با کمترین زمان ممکن و با دیدن آموزش های کوتاه از آن استفاده
        کنید.
      </>
    ),
  },
  {
    title: "کد های آماده در اختیار شماست!",
    Svg: require("@site/static/img/2.svg").default,
    description: (
      <>
        برای راحتی استفاده کنندگان از این سرویس کدهای آماده ای را در اختیار شما قرار داده ایم که می توانید در
        پروژه ها آماده ما در گیت هاب از آن ها استفاده کنید.
      </>
    ),
  },
  {
    title: "آموزش های ویدیو در خدمت شماست!",
    Svg: require("@site/static/img/3.svg").default,
    description: (
      <>
        برای راحتی بیشتر شما کاربران عزیز آموزش های ویدیویی را در اختیار شما قرار داده ایم که می توانید از آن
        ها استفاده کنید.
      </>
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
