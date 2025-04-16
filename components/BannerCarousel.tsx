import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const banners = [
  require('@/assets/images/bannerCarousel/baner1.png'),
  require('@/assets/images/bannerCarousel/baner1.png'),
  require('@/assets/images/bannerCarousel/baner1.png'),
];

const { width } = Dimensions.get('window');

export default function BannerCarousel() {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={banners}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bannerWrapper}>
            <Image source={item} style={styles.image} />
            <View style={styles.dotsContainer}>
              {banners.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  bannerWrapper: {
    width,
    height: 180,
    position: 'relative',
  },
  image: {
    width: 343,
    height: 156,
    resizeMode: 'cover',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 12,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});