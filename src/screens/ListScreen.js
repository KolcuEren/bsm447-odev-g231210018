import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListScreen({ navigation }) {
  const handlePreviewDetail = () => {
    navigation.navigate('Detay', {
      item: {
        objectID: 'preview',
        title: 'Python Teknoloji Haberleri (API entegrasyonu hazırlanıyor)',
        author: 'hn',
        points: 0,
        num_comments: 0,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PyNews · Python Haberleri</Text>
      <Text style={styles.subtitle}>
        K28-c varyantı için temel navigasyon ve ekran yapısı hazırlandı.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePreviewDetail}>
        <Text style={styles.buttonText}>Detay Ekranını Test Et</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
