import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/ui/home_page/header/Header';
import BannerCarousel from '@/components/ui/home_page/carousel/BannerCarousel';
import Categories from '@/components/ui/home_page/CategoriesIcon';
import ForYou from '@/components/ui/home_page/forYou/ForYou';
import MainSection from '@/components/ui/home_page/mainSection/MainSection';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView style={styles.titleContainer}>
          <Header />
          <BannerCarousel />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 100,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  scrollContent: {
    paddingBottom: 20,
    flexGrow: 1,
  },
});
