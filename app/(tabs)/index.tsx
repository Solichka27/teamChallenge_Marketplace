import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/ui/home_page/header/Header';
import BannerCarousel from '@/components/ui/home_page/Carousel/BannerCarousel';
import Categories from '@/components/ui/home_page/Categories';
import CartForView from '@/components/ui/home_page/CartForView';


export default function HomeScreen() {
  return (
    
      <ThemedView style={styles.titleContainer}>
          <Header />
          <BannerCarousel />
          <Categories />
      </ThemedView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

});
