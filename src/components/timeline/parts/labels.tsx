"use client";

import { data } from "@/data/data";
import { capitalizeFirstLetter, getAllLabels } from "@/utils";
import styles from "./labels.module.scss";
import { useStateProvider } from "@/providers/StateProvider";

const Labels = () => {
  const labels = getAllLabels(data);
  const { activeLabels, toggleLabels } = useStateProvider();

  return (
    <ul className={styles.labels}>
      {labels.map((l, index) => (
        <li key={index}>
          <button onClick={() => toggleLabels(l)}>
            {capitalizeFirstLetter(l)} -{" "}
            {activeLabels.find((label) => label === l) ? "active" : "inactive"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Labels;
