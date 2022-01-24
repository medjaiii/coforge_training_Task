import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const DetailScreen = (props: any) => {
  const data = props.route.params.data;
  return (
    <View style={{flex: 1}}>
      <View style={styles.heading}>
        <Text>News Details</Text>
      </View>
      <Image
        style={styles.imageArea}
        source={{
          uri: data.urlToImage,
        }}
      />
      <View style={styles.textArea}>
        <Text>{data.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageArea: {
    height: 200,
    width: '100%',
  },
  textArea:{
    margin: 20,
  },
  heading: {
    margin: 20,
    alignItems: 'center',
  },
});
export default memo(DetailScreen);
