import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/ui/home_page/header/Header';
import BannerCarousel from '@/components/ui/home_page/Carousel/BannerCarousel';
import Categories from '@/components/ui/home_page/CategoriesIcon';
import ForYou from '@/components/ui/home_page/forYou/ForYou';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';


export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
          <Header />
          <BannerCarousel />
          <Categories />
          <ForYou/>
      </ThemedView>
    </ScrollView>
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
