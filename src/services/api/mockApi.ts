import { 
  mockPosts, 
  mockCategories, 
  mockUsers, 
  mockComments 
} from '../../data/mockData';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  getPosts: async (params?: any) => {
    await delay(600);
    let posts = [...mockPosts];
    
    // Filter by category
    if (params?.categories) {
      posts = posts.filter(post => 
        post.categories.includes(parseInt(params.categories))
      );
    }
    
    // Search
    if (params?.search) {
      const searchTerm = params.search.toLowerCase();
      posts = posts.filter(post => 
        post.title.rendered.toLowerCase().includes(searchTerm) ||
        post.excerpt.rendered.toLowerCase().includes(searchTerm)
      );
    }
    
    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Pagination
    const page = params?.page || 1;
    const perPage = params?.per_page || 15;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    
    return {
      data: posts.slice(start, end),
      headers: {
        'x-wp-total': posts.length,
        'x-wp-totalpages': Math.ceil(posts.length / perPage)
      }
    };
  },

  getPost: async (id: number) => {
    await delay(400);
    const post = mockPosts.find(p => p.id === id);
    if (!post) throw new Error('Post not found');
    return { data: post };
  },

  getCategories: async () => {
    await delay(300);
    return { data: mockCategories };
  },

  getCategory: async (id: number) => {
    await delay(300);
    const category = mockCategories.find(c => c.id === id);
    if (!category) throw new Error('Category not found');
    return { data: category };
  },

  getUser: async (id: number) => {
    await delay(300);
    const user = mockUsers.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return { data: user };
  },

  getComments: async (postId: number) => {
    await delay(300);
    const comments = mockComments.filter(c => c.post === postId);
    return { data: comments };
  },

  // New method to get featured posts
  getFeaturedPosts: async () => {
    await delay(400);
    const featuredPosts = mockPosts.filter(post => post.acf?.is_featured);
    return { data: featuredPosts };
  },

  // New method to get breaking news
  getBreakingNews: async () => {
    await delay(400);
    const breakingNews = mockPosts.filter(post => post.acf?.is_breaking);
    return { data: breakingNews };
  }
};