import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NewsCard from '../components/NewsCard';
import { API_URL } from '../constants/api';

export default function ListScreen({ navigation }) {
  // 1. DURUM (STATE)
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. VERİYİ ÇEK
  const loadNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Sunucu hatası: ${response.status}`);
      }
      const json = await response.json();
      setNews((json.hits || []).filter((item) => item.title));
    } catch (e) {
      console.log(e);
      setError('Haberler yüklenemedi. İnterneti kontrol edin.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  // 3. EKRAN
  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size="large" color="#2563eb" style={styles.loader} />
      )}

      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
          <Pressable style={styles.retry} onPress={loadNews}>
            <Text style={styles.retryText}>Tekrar dene</Text>
          </Pressable>
        </View>
      )}

      {!loading && !error && (
        <FlatList
          data={news}
          keyExtractor={(item) => String(item.objectID)}
          renderItem={({ item }) => (
            <NewsCard
              item={item}
              onPress={() => navigation.navigate('Detay', { item })}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <Text style={styles.empty}>Gösterilecek haber bulunamadı.</Text>
          }
        />
      )}
    </View>
  );
}

// 4. STİLLER
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  loader: {
    marginTop: 40,
  },
  errorBox: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#fef2f2',
  },
  errorText: {
    color: '#b91c1c',
    textAlign: 'center',
  },
  retry: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#b91c1c',
  },
  retryText: {
    color: '#fff',
    fontWeight: '700',
  },
  separator: {
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  empty: {
    padding: 32,
    textAlign: 'center',
    color: '#94a3b8',
  },
});
