import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

function CustomDrawerContent(props: any) {
  const router = useRouter();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Reset Navigation"
        onPress={() => router.replace('/')}
      />
    </DrawerContentScrollView>
  );
}

const DrawerLayout = ({ children }) => {
  return <Drawer drawerContent={CustomDrawerContent} />;
};

export default DrawerLayout;
