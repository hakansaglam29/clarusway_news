import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text } from 'react-native';

const DATA = [];

const getItem = (data,index) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
  }
}

const getItemCount = () => {
  return 50;
}

const Item = ({ title })=> {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const renderItem = (data) => {
    return (
        <Item title={data.item.title} />
    )}

const VirtualizedListExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default VirtualizedListExample;
