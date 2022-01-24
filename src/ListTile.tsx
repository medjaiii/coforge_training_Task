import React, {memo} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import NewsData from './dataInterfaces';
const ListTile = (props: NewsData) => {
  return (
    <View style={styles.listStyle}>
      <View style={styles.imageArea}>
        <Image style={styles.tileLogo} source={{uri: props.image}} />
      </View>
      <View style={styles.listTextArea}>
        <Text style={styles.listTextAuthor}>{props.author}</Text>
        <Text style={styles.listTextHeadline}>{props.headline}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tileLogo: {
    height: 80,
    width: 80,
  },
  listStyle: {
    margin: 10,
    flexDirection: 'row',
  },
  listTextArea: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 3,
  },
  listTextAuthor: {
    margin: 2,
    color: 'blue',
  },
  listTextHeadline: {
    color: 'black',
  },
  imageArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default memo(ListTile);
