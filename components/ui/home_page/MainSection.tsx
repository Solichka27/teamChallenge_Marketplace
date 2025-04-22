import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const { width } = Dimensions.get('window');

// Прикладові товари
const productData = {
  all: [
    { id: '1', title: 'Product 1', price: 10.0, rating: 4.5 },
    { id: '2', title: 'Product 2', price: 20.0, rating: 3.0 },
    { id: '3', title: 'Product 3', price: 5.0, rating: 4.0 },
    { id: '4', title: 'Product 4', price: 15.0, rating: 3.5 },
  ],
  easter: [
    { id: '1', title: 'Easter Egg', price: 35.0, rating: 3.5 },
    { id: '2', title: 'Ferrero Rocher', price: 5.0, rating: 4.5 },
  ],
  bestsellers: [],
  sales: [],
  history: [],
};

const renderProduct = ({ item }: any) => (
  <View style={styles.productCard}>
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    <Text style={styles.productRating}>⭐ {item.rating}</Text>
  </View>
);

// Таб-вміст для кожної вкладки
const makeTabScene = (items: any[]) => () => (
  <FlatList
    data={items}
    keyExtractor={(item) => item.id}
    renderItem={renderProduct}
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
    paddingVertical: 12,
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
