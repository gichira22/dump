import * as api from "@api/wordpressApi";
import { Dispatch } from "redux";

import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./actionTypes";

// Action creators
interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: any[]; // This expects an array
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
}

export type PostsActionTypes =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;

// Async action creator - NOW FETCHES BOTH POSTS AND PAGES
export const fetchPosts =
  () => async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    try {
      // Fetch both posts AND pages simultaneously
      const [postsResponse, pagesResponse] = await Promise.all([
        api.get<any[]>("posts?_fields=author,id,excerpt,title,jetpack_featured_media_url"),
        api.get<any[]>("pages?_fields=id,title,content,excerpt,jetpack_featured_media_url")
      ]);

      // Ensure we have arrays (handle potential API response format)
      const posts = Array.isArray(postsResponse) ? postsResponse : [];
      const pages = Array.isArray(pagesResponse) ? pagesResponse : [];

      // Combine posts and pages into one array
      const postsWithType = posts.map((post: any) => ({ ...post, contentType: 'post' }));
      const pagesWithType = pages.map((page: any) => ({ ...page, contentType: 'page' }));
      
      const allContent = [...postsWithType, ...pagesWithType];
      
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: allContent });
    } catch (error: any) {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
    }
  };