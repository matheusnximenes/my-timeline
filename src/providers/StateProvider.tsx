"use client";

import { data } from "@/data/data";
import { TimelineEvent } from "@/types/timelineEvents";
import { getAllLabels } from "@/utils";
import { createContext, ReactNode, useContext, useState } from "react";

const defaultContext = {};
const StateContext = createContext(defaultContext);

interface IStateProvider {
  children: ReactNode;
}

export const StateProvider = ({ children }: IStateProvider) => {
  const [theme, setTheme] = useState("light");
  const [activeLabels, setLabels] = useState<string[]>(getAllLabels(data));
  const [activeEvents, setActiveEvents] = useState<TimelineEvent[]>([]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLabels = (label: string) => {
    setLabels((prevLabels) =>
      prevLabels.includes(label)
        ? prevLabels.filter((l) => l !== label)
        : [...prevLabels, label]
    );
  };

  return (
    <StateContext.Provider
      value={{
        theme,
        toggleTheme,
        activeLabels,
        toggleLabels,
        activeEvents,
        setActiveEvents,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => {
  return useContext(StateContext);
};
