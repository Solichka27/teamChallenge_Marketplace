import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import CartForView from '@/components/ui/home_page/forYou/CartForView'; // Ваш компонент для товарів

const { width } = Dimensions.get('window');

export default function MainSection() {
  const [selectedTab, setSelectedTab] = useState('all');

  const products = {
    all: [
      { id: '1', title: 'Product 1', price: 20, image: require('@/assets/images/productInCatalog/image2.png'), rating: 4.5 },
      { id: '2', title: 'Product 2', price: 30, image: require('@/assets/images/productInCatalog/image2.png'), rating: 4.2 },
      { id: '3', title: 'Product 2', price: 30, image: require('@/assets/images/productInCatalog/image2.png'), rating: 4.2 },
      { id: '4', title: 'Product 2', price: 30, image: require('@/assets/images/productInCatalog/image2.png'), rating: 4.2 },
      { id: '5', title: 'Product 2', price: 30, image: require('@/assets/images/productInCatalog/image2.png'), rating: 4.2 },// Додайте більше товарів для категорії 'all'
    ],
    easter: [
      { id: '6', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      { id: '7', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      { id: '8', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      // Додайте більше товарів для категорії 'easter'
    ],
    bestsellers: [
      { id: '9', title: 'Best Product 1', price: 50, image: require('@/assets/images/productInCatalog/image2.png'), rating: 4.8 },
      { id: '10', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      { id: '11', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      // Додайте більше товарів для категорії 'bestsellers'
    ],
    sales: [
      { id: '12', title: 'Sale Product', price: 10, image: require('@/assets/images/productInCatalog/image2.png'), rating: 4.0 },
      { id: '13', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      { id: '14', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      // Додайте більше товарів для категорії 'sales'
    ],
    history: [
      { id: '15', title: 'Historical Product 1', price: 45, image: require('@/assets/images/productInCatalog/image2.png'), rating: 3.9 },
      { id: '16', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      { id: '17', title: 'Easter Egg', price: 15, image: require('@/assets/images/productInCatalog/image2.png'), rating: 5 },
      // Додайте більше товарів для категорії 'history'
    ],
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    console.log('Selected Tab:', tab);
  };

  const selectedProducts = products[selectedTab];

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleTabPress('all')}
        >
          <ThemedText
            type="title"
            style={[styles.tabText, selectedTab === 'all' && styles.activeText]}
          >
            All
          </ThemedText>
          {selectedTab === 'all' && <View style={styles.activeEllipse} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleTabPress('easter')}
        >
          <ThemedText
            type="title"
            style={[styles.tabText, selectedTab === 'easter' && styles.activeText]}
          >
            Easter Gifts
          </ThemedText>
          {selectedTab === 'easter' && <View style={styles.activeEllipse} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleTabPress('bestsellers')}
        >
          <ThemedText
            type="title"
            style={[styles.tabText, selectedTab === 'bestsellers' && styles.activeText]}
          >
            Bestsellers
          </ThemedText>
          {selectedTab === 'bestsellers' && <View style={styles.activeEllipse} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleTabPress('sales')}
        >
          <ThemedText
            type="title"
            style={[styles.tabText, selectedTab === 'sales' && styles.activeText]}
          >
            Sales
          </ThemedText>
          {selectedTab === 'sales' && <View style={styles.activeEllipse} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => handleTabPress('history')}
        >
          <ThemedText
            type="title"
            style={[styles.tabText, selectedTab === 'history' && styles.activeText]}
          >
            History
          </ThemedText>
          {selectedTab === 'history' && <View style={styles.activeEllipse} />}
        </TouchableOpacity>
      </View>

      <FlatList
        data={selectedProducts}
        renderItem={({ item }) => (
          <CartForView item={item} onPress={() => console.log(item.title)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.containers}
        columnWrapperStyle={styles.column}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  containers: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  column: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  tabItem: {
    marginRight: 12,
    paddingVertical: 5,
    alignItems: 'flex-start',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  activeText: {
    color: '#754CD8',
  },
  activeEllipse: {
    width: 12,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#754CD8',
    marginTop: 3,
    alignSelf: 'flex-start',
  },
  productsList: {
    marginTop: 20,
    paddingLeft: 16,
  },
});




// Прикладові товари
/*const productData = {
  all: [
    {
      id: '1',
      image: require('@/assets/images/productInCatalog/image.png'),
      title: 'Nike Gym Club Training Bag: Black/College Grey/',
      price: 53.00,
      rating: 4.5,
    },
    {
      id: '2',
      image: require('@/assets/images/productInCatalog/image2.png'),
      title: 'Nike Gym Club Training Bag: Gray Edition',
      price: 53.00,
      rating: 4.5,
    },
    {
      id: '3',
      image: require('@/assets/images/productInCatalog/image2.png'),
      title: 'Nike Gym Club Training Bag: Gray Edition',
      price: 53.00,
      rating: 4.5,
    },
    {
      id: '4',
      image: require('@/assets/images/productInCatalog/image2.png'),
      title: 'Nike Gym Club Training Bag: Gray Edition',
      price: 53.00,
      rating: 4.5,
    },
  ],
  easter: [
    {
        id: '1',
        image: require('@/assets/images/productInCatalog/image.png'),
        title: 'Nike Gym Club Training Bag: Black/College Grey/',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '2',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '3',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '4',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
  ],
  bestsellers: [
    {
        id: '1',
        image: require('@/assets/images/productInCatalog/image.png'),
        title: 'Nike Gym Club Training Bag: Black/College Grey/',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '2',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '3',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '4',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
  ],
  sales: [
    {
        id: '1',
        image: require('@/assets/images/productInCatalog/image.png'),
        title: 'Nike Gym Club Training Bag: Black/College Grey/',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '2',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '3',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '4',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
  ],
  history: [
    {
        id: '1',
        image: require('@/assets/images/productInCatalog/image.png'),
        title: 'Nike Gym Club Training Bag: Black/College Grey/',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '2',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '3',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
      {
        id: '4',
        image: require('@/assets/images/productInCatalog/image2.png'),
        title: 'Nike Gym Club Training Bag: Gray Edition',
        price: 53.00,
        rating: 4.5,
      },
  ],
};

// Таб-вміст для кожної вкладки
const makeTabScene = (items: any[]) => () => (
  <FlatList
    data={items}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <CartForView productData={item} />
    )}
    numColumns={2}
    columnWrapperStyle={styles.row}
    contentContainerStyle={{ paddingBottom: 100 }}
  />
);

const TabComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'all', title: 'All' },
    { key: 'easter', title: 'Easter Gifts' },
    { key: 'bestsellers', title: 'Bestsellers' },
    { key: 'sales', title: 'Sales' },
    { key: 'history', title: 'History' },
  ]);

  const renderScene = SceneMap({
    all: makeTabScene(productData.all),
    easter: makeTabScene(productData.easter),
    bestsellers: makeTabScene(productData.bestsellers),
    sales: makeTabScene(productData.sales),
    history: makeTabScene(productData.history),
  });

  const renderTabBar = () => (
    <View style={styles.tabBar}>
      {routes.map((route, i) => {
        const isActive = i === index;
        return (
          <TouchableOpacity key={route.key} onPress={() => setIndex(i)} style={styles.tabItem}>
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{route.title}</Text>
            {isActive && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {renderTabBar()}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        renderTabBar={() => null} // Ховаємо стандартний таб-бар
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    color: '#000',
  },
  tabTextActive: {
    color: '#8a2be2', // фіолетовий
    fontWeight: '600',
  },
  activeIndicator: {
    width: 12,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#8a2be2',
    marginTop: 6,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  productCard: {
    backgroundColor: '#fff',
    width: (width - 40) / 2,
    marginVertical: 8,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productTitle: {
    fontSize: 13,
    marginBottom: 6,
  },
  productPrice: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productRating: {
    fontSize: 12,
    color: '#555',
  },
});

export default TabComponent;
*/
