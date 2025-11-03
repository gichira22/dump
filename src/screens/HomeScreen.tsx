import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PostCard from '../components/PostCard';
import CategoryFilter from '../components/CategoryFilter';
import { mockApi } from '../services/api/mockApi';
import { Post, Category } from '../services/types/types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    loadPosts();
  }, [selectedCategory, searchQuery]);

  const loadInitialData = async () => {
    try {
      const [categoriesResponse] = await Promise.all([
        mockApi.getCategories(),
      ]);
      setCategories(categoriesResponse.data);
      await loadPosts();
    } catch (error) {
      Alert.alert('Error', 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const loadPosts = async () => {
    try {
      const params: any = {};
      if (selectedCategory) {
        params.categories = selectedCategory;
      }
      if (searchQuery) {
        params.search = searchQuery;
      }
      
      const response = await mockApi.getPosts(params);
      setPosts(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load posts');
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPosts();
    setRefreshing(false);
  };

  const handlePostPress = (post: Post) => {
    navigation.navigate('PostDetail', { postId: post.id });
  };

  const handleCategoryPress = (category: Category) => {
    navigation.navigate('CategoryPosts', { 
      categoryId: category.id,
      categoryName: category.name 
    });
  };

  const featuredPosts = posts.filter(post => post.acf?.is_featured);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading IT News...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search IT news, updates, guides..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onCategoryPress={handleCategoryPress}
      />

      {/* Breaking News Banner */}
      {posts.some(post => post.acf?.is_breaking) && (
        <TouchableOpacity style={styles.breakingBanner}>
          <Text style={styles.breakingBannerText}>
            🚨 Breaking News - Tap to view latest updates
          </Text>
        </TouchableOpacity>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Updates</Text>
          <FlatList
            data={featuredPosts}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.featuredCard}>
                <PostCard post={item} onPress={handlePostPress} />
              </View>
            )}
          />
        </View>
      )}

      {/* All Posts */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {selectedCategory 
              ? categories.find(c => c.id === selectedCategory)?.name 
              : 'Latest IT News'
            }
          </Text>
          <Text style={styles.postCount}>
            {posts.length} {posts.length === 1 ? 'post' : 'posts'}
          </Text>
        </View>
        
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard post={item} onPress={handlePostPress} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchInput: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  breakingBanner: {
    backgroundColor: '#EF4444',
    padding: 12,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  breakingBannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  section: {
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  postCount: {
    fontSize: 14,
    color: '#6B7280',
  },
  featuredCard: {
    width: 300,
    marginHorizontal: 8,
  },
});

export default HomeScreen;