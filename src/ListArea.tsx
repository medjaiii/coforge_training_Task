import React, {memo} from 'react';
import {FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import ListTile from './ListTile';
const ListArea = (props: any) => {
  return (
    <SafeAreaView>
      <FlatList
        data={props.data}
        renderItem={value => {
          return (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {
                props.navigation.navigate('DetailsScreen', {data: value.item});
              }}>
              <ListTile
                author={value.item.author}
                image={value.item.urlToImage}
                headline={value.item.title}
                desc={value.item.description}
              />
            </TouchableHighlight>
          );
        }}
        keyExtractor={(value, index) => `${value.index} ${index}`}
      />
    </SafeAreaView>
  );
};
export default memo(ListArea);
