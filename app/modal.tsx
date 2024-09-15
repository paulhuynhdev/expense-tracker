import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ListRenderItem,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useCartStore from '@/store/cartStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Product } from '@/store/interfaces';

export default function ModalScreen() {
  const { reduceProduct, addProduct, products, clearCart, total } =
    useCartStore();

  const renderItem: ListRenderItem<Product & { quantity: number }> = ({
    item,
  }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{ uri: item.image }} />
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text>${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => reduceProduct(item)}>
          <Ionicons name="remove" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity onPress={() => addProduct(item)}>
          <Ionicons name="add" size={20} color={'#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            <Text style={{ fontWeight: 'bold', margin: 10 }}>
              Total: ${total()}
            </Text>
          }
        />

        <Button title="Clear Cart" onPress={clearCart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItemContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  itemContainer: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
