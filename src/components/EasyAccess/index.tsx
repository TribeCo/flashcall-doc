import React from "react";
import styles from "./styles.module.css";

type Item = {
  title: string;
  icon: React.ElementType;
  url: string;
};

const FeatureList: Item[] = [
  {
    title: "از اینجا شروع کنید!",
    icon: require("@site/static/icons/0.svg").default,
    url: "intro",
  },
  {
    title: "ایجاد کلید دسترسی",
    icon: require("@site/static/icons/1.svg").default,
    url: "tastandapikey",
  },
  {
    title: "راهنمای تست سرویس",
    icon: require("@site/static/icons/2.svg").default,
    url: "servicetest",
  },
  {
    title: "نحوه شارژ سرویس",
    icon: require("@site/static/icons/3.svg").default,
    url: "chargeservicewallet",
  },
  {
    title: "مشاهده و دانلود گزارش",
    icon: require("@site/static/icons/4.svg").default,
    url: "logs",
  },
  {
    title: "راهنمای درخواست برقراری تماس",
    icon: require("@site/static/icons/5.svg").default,
    url: "callapi",
  },
];

const index = () => {
  return (
    <div className={styles.easy_access}>
      <div className={styles.container}>
        {FeatureList.map((props, idx) => (
          <div
            key={idx}
            className={styles.card}
            onClick={() => window.open(`/docs/${props.url}`)}>
            <props.icon className={styles.icon} />
            <div className={styles.card_content}>
              <p>{props.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
