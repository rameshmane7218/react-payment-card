import React from "react";
import { CardDesign } from "./CardDesign";
import { CardInput } from "./CardInput";
import style from "./PaymentCard.module.css";

const initValue = {
  date: "2022-08-14",
  logo:
    "https://www.pinclipart.com/picdir/middle/387-3872512_amazon-sellers-prepare-for-over-1-billion-of.png",
  heading: "Amazon Gift",
  subheading: "Pay",
  devices: "Desktop - Mobile",
  color: "orange"
};

export const PaymentCard = () => {
  const [data, setData] = React.useState(initValue);

  // let { date, logo, heading, subheading, devices, color } = data;

  return (
    <div className={style.container}>
      <CardInput data={data} setData={setData} details={data} />
      <CardDesign {...data} />
    </div>
  );
};
