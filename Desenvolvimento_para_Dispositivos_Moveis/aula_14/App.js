import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Erro ao obter contatos:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ContactDetails', { contact: item })}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ContactDetailsScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome: {contact.name}</Text>
      <Text>Username: {contact.username}</Text>
      <Text>Email: {contact.email}</Text>
      <Text>Telefone: {contact.phone}</Text>
      <Text>Website: {contact.website}</Text>
      <Text>Endereço: {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}`}</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
