import React, { useEffect } from "react";
import { Skills } from "../components/Skills";

export const SkillsPage = () => {
  useEffect(() => {
    document.title = "myupi | Skills";

    return () => {
      document.title = "myupi | Skills";
    };
  }, []);
  return (
    <>
      <Skills />
    </>
  );
};
