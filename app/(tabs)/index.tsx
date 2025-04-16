import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/ui/home_page/header/Header';
import SearchBar from '@/components/ui/home_page/header/SearchBar';
import BannerCarousel from '@/components/BannerCarousel';
import ProductScroll from '@/components/ProductScroll';

export default function HomeScreen() {
  return (
    
      <ThemedView style={styles.titleContainer}>
          <Header />
          <BannerCarousel />
      </ThemedView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',

  },

});
