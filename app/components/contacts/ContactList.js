import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { Shared, Base } from "styles";
import { ContactItem } from "./ContactItem";

import { getContacts } from "call_api";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    let excecute = true;
    if (excecute) {
      getAllContacts();
    }
    return () => (excecute = false);
  }, []);

  useEffect(() => {
    let excecute = true;
    if (excecute) {
      let auxFrecuent = contacts.sort((a, b) => 1).slice(0, 2);
      let auxAll = contacts.sort((a, b) => 1).slice(2, contacts.length);
      setRecentContacts(auxFrecuent);
      setAllContacts(auxAll);
    }
    return () => (excecute = false);
  }, [contacts]);

  const getAllContacts = async () => {
    await getContacts()
      .then((res) => {
        if (res.success) {
          setContacts(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ display: "flex", marginVertical: 20 }}>
      {contacts.length > 0 && (
        <>
          <View style={Shared.safeAreaView}>
            <Text style={[{ fontSize: Base.txtNormal, color: "#AAAAAA" }]}>
              Recientes
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            {recentContacts.map((el, index) => (
              <ContactItem id={index} item={el} />
            ))}
          </View>

          <View style={Shared.safeAreaView}>
            <Text style={[{ fontSize: Base.txtNormal, color: "#AAAAAA" }]}>
              Todos
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            {allContacts.map((el, index) => (
              <ContactItem id={index} item={el} />
            ))}
          </View>
        </>
      )}
    </View>
  );
};
