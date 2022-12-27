import React from "react";
import { stats } from "../constants";
import styles from "../styles";

const Stats = () => {
  return (
    <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 my-6`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex md:flex-row flex-col justify-start items-center font-poppins mx-3"
        >
          <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient md:text-left text-center uppercase md:ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
