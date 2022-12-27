import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} sm:w-[140px] w-[120px] sm:h-[140px] h-[120px] rounded-full bg-blue-gradient p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2">
            Get{" "}
          </p>

          <img
            src={arrowUp}
            alt=""
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">
          Started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
