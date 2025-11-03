import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
  Alert
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { mockApi } from '../services/api/mockApi';
import { Post, Category, User } from '../services/types/types';

const PostDetailScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { postId } = route.params as { postId: number };
  
  const [post, setPost] = React.useState<Post | null>(null);
  const [author, setAuthor] = React.useState<User | null>(null);
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    loadPost();
  }, [postId]);

  const loadPost = async () => {
    try {
      const response = await mockApi.getPost(postId);
      setPost(response.data);
      
      // Load author
      const authorResponse = await mockApi.getUser(response.data.author);
      setAuthor(authorResponse.data);
      
      // Load categories
      const categoryPromises = response.data.categories.map((catId: number) => 
        mockApi.getCategory(catId)
      );
      const categoryResponses = await Promise.all(categoryPromises);
      setCategories(categoryResponses.map(res => res.data));
    } catch (error) {
      Alert.alert('Error', 'Failed to load post');
    }
  };

  const handleShare = async () => {
    if (!post) return;
    
    try {
      await Share.share({
        message: `Check out this IT update: ${post.title.rendered}`,
        url: `https://company.com/news/${post.slug}`
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share post');
    }
  };

  const handleBookmark = () => {
    // Implement bookmark functionality
    Alert.alert('Bookmarked', 'Post added to your bookmarks');
  };

  if (!post) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Featured Image */}
      {post.acf?.featured_image && (
        <Image 
          source={{ uri: post.acf.featured_image }} 
          style={styles.featuredImage}
          resizeMode="cover"
        />
      )}

      {/* Content */}
      <View style={styles.content}>
        {/* Categories */}
        <View style={styles.categoryContainer}>
          {categories.map(category => (
            <TouchableOpacity 
              key={category.id}
              style={[styles.categoryTag, { backgroundColor: category.color }]}
              onPress={() => navigation.navigate('CategoryPosts', { categoryId: category.id })}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Title */}
        <Text style={styles.title}>{post.title.rendered}</Text>

        {/* Meta Information */}
        <View style={styles.metaContainer}>
          {author && (
            <View style={styles.authorContainer}>
              <Image 
                source={{ uri: author.avatar_urls['96'] }} 
                style={styles.avatar}
              />
              <View style={styles.authorInfo}>
                <Text style={styles.authorName}>{author.name}</Text>
                <Text style={styles.authorPosition}>{author.position}</Text>
              </View>
            </View>
          )}
          
          <View style={styles.metaRight}>
            <Text style={styles.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Text>
            <Text style={styles.readTime}>
              {post.acf?.read_time || '3 min read'}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
            <Text style={styles.actionText}>📤 Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleBookmark}>
            <Text style={styles.actionText}>🔖 Bookmark</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>👍 Like ({post.acf?.likes || 0})</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.postContent}>
          <Text style={styles.contentText}>
            {post.content.rendered.replace(/<[^>]*>/g, '')}
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{post.acf?.views || 0}</Text>
            <Text style={styles.statLabel}>Views</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{post.acf?.likes || 0}</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>
              {Math.ceil((post.content.rendered.length || 0) / 5 / 200)}
            </Text>
            <Text style={styles.statLabel}>Min Read</Text>
          </View>
        </View>

        {/* Related Posts Section */}
        <View style={styles.relatedSection}>
          <Text style={styles.relatedTitle}>Related Updates</Text>
          {/* You can implement related posts here */}
          <TouchableOpacity style={styles.relatedButton}>
            <Text style={styles.relatedButtonText}>
              View more {categories[0]?.name} updates →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  categoryTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    lineHeight: 32,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  authorPosition: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  metaRight: {
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  readTime: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  postContent: {
    marginBottom: 30,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 28,
    color: '#374151',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  relatedSection: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 20,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  relatedButton: {
    padding: 16,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    alignItems: 'center',
  },
  relatedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PostDetailScreen;