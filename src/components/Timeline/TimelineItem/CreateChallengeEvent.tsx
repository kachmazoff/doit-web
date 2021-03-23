import React from "react";
import { Block } from "@/components/Block";
import { BottomActions } from "./components";
import styles from "./timelineItem.module.css";

export const CreateChallengeEvent = () => {
  return (
    <Block className={styles.commonWrapper}>
      <div>
        <span className={styles.userlink}>@kachmazoff</span> создал челлендж
        <span className={styles.timeInfo}> &#8226; 11:23 23.03.21</span>
      </div>
      <div className={styles.challengeTitle}>Сдохни или умри</div>
      <div className={styles.challengeDescription}>
        Смотреть 10 часов без остановки видео "Сдохни или умри" с канала "Внутри
        Лапенко"
      </div>

      <BottomActions />
    </Block>
  );
};
