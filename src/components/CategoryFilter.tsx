import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Category } from '../services/types/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onCategorySelect: (categoryId: number | null) => void;
  onCategoryPress: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  onCategoryPress
}) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === null && styles.categoryButtonSelected
          ]}
          onPress={() => onCategorySelect(null)}
        >
          <Text style={[
            styles.categoryText,
            selectedCategory === null && styles.categoryTextSelected
          ]}>
            All
          </Text>
        </TouchableOpacity>

        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              { backgroundColor: category.color + '20' },
              selectedCategory === category.id && [
                styles.categoryButtonSelected,
                { backgroundColor: category.color }
              ]
            ]}
            onPress={() => onCategorySelect(category.id)}
            onLongPress={() => onCategoryPress(category)}
          >
            <Text style={[
              styles.categoryText,
              { color: category.color },
              selectedCategory === category.id && styles.categoryTextSelected
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  scrollContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryButtonSelected: {
    borderWidth: 0,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoryTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default CategoryFilter;