import { useState, useEffect } from 'react';
import { get } from '@api/wordpressApi';

export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
}

export const usePages = () => {
  const [pages, setPages] = useState<WordPressPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await get<WordPressPage[]>('pages?_fields=id,title,content,excerpt,jetpack_featured_media_url');
      setPages(data);
    } catch (err) {
      setError('Failed to fetch pages');
      console.error('Error fetching pages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const refetchPages = () => {
    fetchPages();
  };

  return { pages, loading, error, refetchPages };
};