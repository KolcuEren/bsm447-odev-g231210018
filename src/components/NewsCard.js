import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function NewsCard({ item, onPress }) {
  const points = item.points ?? 0;
  const comments = item.num_comments ?? 0;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <Text style={styles.rowTitle}>{item.title}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.rowMeta}>{points} puan</Text>
        <Text style={styles.rowMeta}>·</Text>
        <Text style={styles.rowMeta}>{comments} yorum</Text>
      </View>
    </Pressable>
  );
}

// STİLLER
const styles = StyleSheet.create({
  row: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  rowPressed: {
    backgroundColor: '#f1f5f9',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    lineHeight: 22,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  rowMeta: {
    fontSize: 13,
    color: '#64748b',
  },
});
