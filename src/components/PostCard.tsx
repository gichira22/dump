// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Alert
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Post } from '../services/types/types';
// import { mockCategories } from 'data/mockData/mockCategories';

// interface PostCardProps {
//   post: Post;
//   onPress?: (post: Post) => void;
// }

// const PostCard: React.FC<PostCardProps> = ({ post, onPress }) => {
//   const navigation = useNavigation();

//   const handlePress = () => {
//     if (onPress) {
//       onPress(post);
//     } else {
//       navigation.navigate('PostDetail', { postId: post.id });
//     }
//   };

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const getReadTime = () => {
//     return post.acf?.read_time || '3 min read';
//   };

//   return (
//     <TouchableOpacity style={styles.container} onPress={handlePress}>
//       {/* Featured Image */}
//       {post.acf?.featured_image && (
//         <Image 
//           source={{ uri: post.acf.featured_image }} 
//           style={styles.featuredImage}
//           resizeMode="cover"
//         />
//       )}
      
//       {/* Breaking News Badge */}
//       {post.acf?.is_breaking && (
//         <View style={styles.breakingBadge}>
//           <Text style={styles.breakingText}>🚨 BREAKING</Text>
//         </View>
//       )}

//       {/* Content */}
//       <View style={styles.content}>
//         {/* Category Tags */}
//         <View style={styles.categoryContainer}>
//           {post.categories.slice(0, 2).map(catId => {
//             const category = mockCategories.find(c => c.id === catId);
//             return category ? (
//               <View 
//                 key={category.id} 
//                 style={[styles.categoryTag, { backgroundColor: category.color }]}
//               >
//                 <Text style={styles.categoryText}>{category.name}</Text>
//               </View>
//             ) : null;
//           })}
//         </View>

//         {/* Title */}
//         <Text style={styles.title} numberOfLines={2}>
//           {post.title.rendered}
//         </Text>

//         {/* Excerpt */}
//         <Text style={styles.excerpt} numberOfLines={3}>
//           {post.excerpt.rendered.replace(/<[^>]*>/g, '')}
//         </Text>

//         {/* Meta Information */}
//         <View style={styles.metaContainer}>
//           <View style={styles.metaLeft}>
//             <Text style={styles.date}>
//               {formatDate(post.date)}
//             </Text>
//             <Text style={styles.readTime}>
//               • {getReadTime()}
//             </Text>
//           </View>
          
//           <View style={styles.metaRight}>
//             {post.acf?.views && (
//               <Text style={styles.metaStat}>
//                 👁️ {post.acf.views}
//               </Text>
//             )}
//             {post.acf?.likes && (
//               <Text style={styles.metaStat}>
//                 👍 {post.acf.likes}
//               </Text>
//             )}
//           </View>
//         </View>

//         {/* Featured Badge */}
//         {post.acf?.is_featured && (
//           <View style={styles.featuredBadge}>
//             <Text style={styles.featuredText}>⭐ FEATURED</Text>
//           </View>
//         )}
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3.84,
//     elevation: 5,
//     overflow: 'hidden',
//   },
//   featuredImage: {
//     width: '100%',
//     height: 200,
//   },
//   breakingBadge: {
//     position: 'absolute',
//     top: 12,
//     left: 12,
//     backgroundColor: '#EF4444',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//     zIndex: 1,
//   },
//   breakingText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   content: {
//     padding: 16,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//     flexWrap: 'wrap',
//   },
//   categoryTag: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//     marginRight: 6,
//     marginBottom: 4,
//   },
//   categoryText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: '600',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1F2937',
//     marginBottom: 8,
//     lineHeight: 24,
//   },
//   excerpt: {
//     fontSize: 14,
//     color: '#6B7280',
//     lineHeight: 20,
//     marginBottom: 12,
//   },
//   metaContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   metaLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   date: {
//     fontSize: 12,
//     color: '#9CA3AF',
//   },
//   readTime: {
//     fontSize: 12,
//     color: '#9CA3AF',
//     marginLeft: 4,
//   },
//   metaRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   metaStat: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginLeft: 8,
//   },
//   featuredBadge: {
//     position: 'absolute',
//     top: -8,
//     right: 16,
//     backgroundColor: '#F59E0B',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   featuredText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
// });

// export default PostCard;
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../services/types/types';
import { mockCategories } from '../data/mockData/mockCategories';
import { PostCardNavigationProp } from '../services/types/navigation';

interface PostCardProps {
  post: Post;
  onPress?: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onPress }) => {
  const navigation = useNavigation<PostCardNavigationProp>();

  const handlePress = () => {
    if (onPress) {
      onPress(post);
    } else {
      navigation.navigate('PostDetail', { postId: post.id });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadTime = () => {
    return post.acf?.read_time || '3 min read';
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {/* Featured Image */}
      {post.acf?.featured_image && (
        <Image 
          source={{ uri: post.acf.featured_image }} 
          style={styles.featuredImage}
          resizeMode="cover"
        />
      )}
      
      {/* Breaking News Badge */}
      {post.acf?.is_breaking && (
        <View style={styles.breakingBadge}>
          <Text style={styles.breakingText}>🚨 BREAKING</Text>
        </View>
      )}

      {/* Content */}
      <View style={styles.content}>
        {/* Category Tags */}
        <View style={styles.categoryContainer}>
          {post.categories.slice(0, 2).map(catId => {
            const category = mockCategories.find(c => c.id === catId);
            return category ? (
              <View 
                key={category.id} 
                style={[styles.categoryTag, { backgroundColor: category.color }]}
              >
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            ) : null;
          })}
        </View>

        {/* Title */}
        <Text style={styles.title} numberOfLines={2}>
          {post.title.rendered}
        </Text>

        {/* Excerpt */}
        <Text style={styles.excerpt} numberOfLines={3}>
          {post.excerpt.rendered.replace(/<[^>]*>/g, '')}
        </Text>

        {/* Meta Information */}
        <View style={styles.metaContainer}>
          <View style={styles.metaLeft}>
            <Text style={styles.date}>
              {formatDate(post.date)}
            </Text>
            <Text style={styles.readTime}>
              • {getReadTime()}
            </Text>
          </View>
          
          <View style={styles.metaRight}>
            {post.acf?.views && (
              <Text style={styles.metaStat}>
                👁️ {post.acf.views}
              </Text>
            )}
            {post.acf?.likes && (
              <Text style={styles.metaStat}>
                👍 {post.acf.likes}
              </Text>
            )}
          </View>
        </View>

        {/* Featured Badge */}
        {post.acf?.is_featured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>⭐ FEATURED</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  breakingBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 1,
  },
  breakingText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  categoryTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 4,
  },
  categoryText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  excerpt: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  readTime: {
    fontSize: 12,
    color: '#9CA3AF',
    marginLeft: 4,
  },
  metaRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaStat: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 8,
  },
  featuredBadge: {
    position: 'absolute',
    top: -8,
    right: 16,
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  featuredText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default PostCard;