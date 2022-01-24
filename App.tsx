import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListArea from './src/ListArea';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './src/details';

const base_api =
  'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=76b3f641640a4884a8a0362b108098dd';

console.log(base_api);
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const HomeScreen = (props: any) => {
  const [isLoading, updateLoading] = useState<boolean>(false);
  const [news, updateNews] = useState([]);
  useEffect(() => {
    getDataFromApi();
  }, []);
  const getDataFromApi = async () => {
    try {
      console.log('calling the server');
      updateLoading(true);
      const res = await fetch(base_api);
      const data = await res.json();
      updateNews(data.articles);
      updateLoading(false);
    } catch (error) {
      console.log('I got some error while fetching data from server !!');
    }
  };
  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text>Loading ..</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.heading}>
        <Text>My News App</Text>
      </View>
      <ListArea data={news} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
