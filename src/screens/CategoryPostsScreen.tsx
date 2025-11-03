import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import PostCard from '../components/PostCard';
import { mockApi } from '../services/api/mockApi';
import { Post, Category } from '../services/types/types';

const CategoryPostsScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId, categoryName } = route.params as { 
    categoryId: number; 
    categoryName: string 
  };
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategoryData();
  }, [categoryId]);

  const loadCategoryData = async () => {
    try {
      const [categoryResponse, postsResponse] = await Promise.all([
        mockApi.getCategory(categoryId),
        mockApi.getPosts({ categories: categoryId })
      ]);
      
      setCategory(categoryResponse.data);
      setPosts(postsResponse.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load category data');
    } finally {
      setLoading(false);
    }
  };

  const handlePostPress = (post: Post) => {
    navigation.navigate('PostDetail', { postId: post.id });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View style={[styles.header, { backgroundColor: category?.color + '20' }]}>
        <Text style={styles.categoryTitle}>{category?.name}</Text>
        <Text style={styles.categoryDescription}>{category?.description}</Text>
        <Text style={styles.postCount}>{posts.length} posts</Text>
      </View>

      {/* Posts List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostCard post={item} onPress={handlePostPress} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 12,
    lineHeight: 22,
  },
  postCount: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default CategoryPostsScreen;