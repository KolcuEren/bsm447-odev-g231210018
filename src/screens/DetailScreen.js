import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({ route }) {
  const item = route.params?.item;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item?.title || 'Haber bulunamadı'}</Text>
      <Text style={styles.meta}>
        Yazar: {item?.author || 'Bilinmiyor'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  meta: {
    fontSize: 14,
    color: '#475569',
  },
});
