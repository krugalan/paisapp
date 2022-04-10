import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { Shared, Base } from "styles";
import { ContactItem } from "./ContactItem";
import { Search } from "use_svg";
import { getContacts } from "call_api";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [contactsFiltered, setcontactsFiltered] = useState([]);

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

  useEffect(() => {
    let excecute = true;
    if (excecute) {
      if (searchValue.length > 0) {
        let Aux = filterItems(searchValue);
        setcontactsFiltered(Aux);
      } else {
        setcontactsFiltered([]);
        setSearchValue("");
      }
    }
    return () => (excecute = false);
  }, [searchValue]);

  const getAllContacts = async () => {
    await getContacts()
      .then((res) => {
        if (res.success) {
          setContacts(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const filterItems = (query) =>
    contacts.filter(
      (el) =>
        el.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        el.lastName.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
        el.phone.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

  return (
    <View style={{ display: "flex" }}>
      <View style={stl.card}>
        <Search
          height={Base.baseUnit * 6}
          width={Base.baseUnit * 6}
          scale={Base.baseUnit / 4}
          strokeWidth={2}
          strokeColor="#AAAAAA"
        />
        <TextInput
          style={{
            paddingVertical: 10,
            marginHorizontal: 10,
          }}
          onChangeText={(e) => setSearchValue(e)}
          placeholder="Ingresa un nombre o un número"
        />
      </View>

      {contacts.length > 0 && searchValue.length === 0 ? (
        <>
          <View style={Shared.safeAreaView}>
            <Text style={stl.titleGrey}>Recientes</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            {recentContacts.map((el, index) => (
              <ContactItem id={index} item={el} />
            ))}
          </View>

          <View style={Shared.safeAreaView}>
            <Text style={stl.titleGrey}>Todos</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            {allContacts.map((el, index) => (
              <ContactItem id={index} item={el} />
            ))}
          </View>
        </>
      ) : (
        <>
          <View style={Shared.safeAreaView}>
            <Text style={stl.titleGrey}>Contactos encontrados</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            {contactsFiltered.map((el, index) => (
              <ContactItem id={index} item={el} />
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const stl = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingHorizontal: Base.baseUnit * 3,
    width: Base.screenWidth * 0.95,
    height: Base.baseUnit * 15,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 2,
    alignSelf: "center",
    alignItems: "center",
  },
  titleGrey: {
    fontSize: Base.txtNormal,
    color: "#AAAAAA",
    marginBottom: Base.baseUnit * 5,
  },
});
