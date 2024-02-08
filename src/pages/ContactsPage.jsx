import React, { useEffect } from 'react'
import { Contacts } from '../components/Contacts'

export const ContactsPage = () => {
  useEffect(() => {
    document.title = "myupi | Contacts";

    return () => {
      document.title = "myupi | Contacts";
    };
  }, []);
  return (
    <>
      <Contacts />
    </>
  )
}
