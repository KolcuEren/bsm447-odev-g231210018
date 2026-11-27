import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="bookmark-outline" size={48} color="#94A3B8" />
      <Text style={styles.title}>Henüz kaydedilen haber yok</Text>
      <Text style={styles.subtitle}>
        Detay ekranından kaydettiğiniz Python haberleri burada görünecek.
      </Text>
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
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginTop: 12,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },
});
