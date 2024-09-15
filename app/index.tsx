import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  SectionList,
} from 'react-native';
import React, { useState } from 'react';
import { Expense, expenses } from '../data';
import { SearchBar } from 'react-native-elements';
import { Colors } from '@/constants/Colors';

const Page = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (searchText: string) => {
    setSearch(searchText);
  };

  const renderItem = ({ item }: { item: Expense }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {item.category} ${item.amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search"
        // @ts-ignore
        onChangeText={updateSearch}
        value={search}
        platform="default"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
      />

      <SectionList
        sections={expenses}
        // @ts-ignore
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    backgroundColor: Colors.dark.background,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    backgroundColor: Colors.dark.background,
    borderBottomColor: Colors.dark.background,
    borderTopColor: Colors.dark.background,
  },
  searchInput: {
    backgroundColor: '#333',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#676767',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Page;
