import 'react-native-gesture-handler';

import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DrawerLayout = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%', '50%', '90%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('Bottom sheet index changed to:', index);
  }, []);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleSaveExpense = () => {
    bottomSheetRef.current?.close();
  };

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderBottomSheetContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('Learn');
    const [date, setDate] = useState(new Date());
    const [expense, setExpense] = useState('');
    const [description, setDescription] = useState('');

    const categories = ['Food', 'Fun', 'Learn', 'House'];

    // Date and Time change handler
    const onChangeDate = (event: any, selectedDate: Date | undefined) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    };

    const onChangeTime = (event: any, selectedTime: Date | undefined) => {
      const currentTime = selectedTime || date;
      setDate(currentTime);
    };

    return (
      <View style={styles.contentContainer}>
        {/* Heading */}
        <View style={styles.header}>
          <Text style={styles.title}>New Expense</Text>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Text style={styles.closeButton}>
              <Ionicons name="close-circle-outline" size={24} color={'#fff'} />
            </Text>
          </TouchableOpacity>
        </View>
        {/* Categories */}
        <View style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonSelected,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextSelected,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Date, time picker */}
        <View style={styles.datePicker}>
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            maximumDate={new Date()}
          />

          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            onChange={onChangeTime}
          />
        </View>

        {/* Expense input */}
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Expense</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter amount"
            placeholderTextColor="#676767"
            keyboardType="numeric"
            returnKeyType={'done'}
            value={expense}
            onChangeText={setExpense}
          />
        </View>

        {/* Description input */}
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter description"
            placeholderTextColor="#676767"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveExpense}>
          <Text>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={closeBottomSheet}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const AddExpenseButton = () => (
    // @ts-ignore
    <TouchableOpacity style={styles.addButton} onPress={openBottomSheet}>
      <Text style={styles.addButtonText}>
        <Ionicons name="add-circle-outline" size={24} color={'#fff'} />
      </Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveBackgroundColor: '#5363df',
          drawerActiveTintColor: '#fff',
          headerTintColor: '#fff',
          drawerLabelStyle: { marginLeft: -20 },
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: 'Expense Tracker',
            headerTitleAlign: 'center',
            drawerLabel: 'Expenses',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            headerRight: () => <AddExpenseButton />,
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            headerTitle: 'Categories',
            drawerLabel: 'Categories',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            headerTitle: 'Settings',
            drawerLabel: 'Settings',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ backgroundColor: '#434343' }}
        backgroundStyle={{ backgroundColor: Colors.dark.background }}
        backdropComponent={renderBackdrop}
      >
        {renderBottomSheetContent()}
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: '#5363df',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  cancelButton: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 'auto',
  },
  addButton: {
    color: '#fff',
    marginRight: 8,
  },
  addButtonText: {
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.dark.background,
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: Colors.dark.text,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  closeButton: {
    fontSize: 24,
    color: '#fff',
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  categoryButtonSelected: {
    backgroundColor: '#5363df',
  },
  categoryText: {
    color: '#fff',
  },
  categoryTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateTimePickers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  datePicker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
    marginTop: 20,
  },
  textInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 16,
    width: 94,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },
});

export default DrawerLayout;
