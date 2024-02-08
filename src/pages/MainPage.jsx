import React, { useEffect } from 'react'
import { Showcase } from '../components/Showcase'
import { Project } from '../components/Project';

export const MainPage = () => {
  useEffect(() => {
    document.title = "myupi";

    return () => {
      document.title = "myupi";
    };
  }, []);
  return (
    <>
      <Showcase />
      <Project />
    </>
  );
}
