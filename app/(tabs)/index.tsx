import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/ui/home_page/header/Header';
import BannerCarousel from '@/components/ui/home_page/Carousel/BannerCarousel';

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
