import { Image, StyleSheet, Platform, SafeAreaView , ScrollView} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/ui/home_page/header/Header';
import BannerCarousel from '@/components/ui/home_page/Carousel/BannerCarousel';
import Categories from '@/components/ui/home_page/CategoriesIcon';
import ForYou from '@/components/ui/home_page/forYou/ForYou';



export default function HomeScreen() {
  return (
<SafeAreaView style={{ flex: 1 }}>
<ScrollView contentContainerStyle={styles.scrollContent}>
  <ThemedView style={styles.titleContainer}>
    <Header />
    <BannerCarousel />
    <Categories />
    <ForYou />
  </ThemedView>
</ScrollView>
</SafeAreaView>
  );

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },

});
