import React, { useEffect, useState } from 'react'

import SearchBar from '../../components/SearchBar';
import PostList from '../../components/PostList';

import Loader from '../../components/Loader';
import { getPostsAsync } from '../../services/posts';


const Posts = ({
  history,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [originalPosts, setOriginalPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  /**
   * This effect will run only when the UI is loaded for the first time.
   */
  useEffect(() => {
    setIsLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user?.id) {
      history.push('/login');
    }

    // If user is authenticated, fetch the posts data
    fetchPosts();
    setIsLoading(false);
  }, [history]);

  const fetchPosts = async () => {
    const { error, data: fetchedPosts } = await getPostsAsync();
    
    if (error) {
      console.log(error);
      return;
    }

    setOriginalPosts(fetchedPosts);
    setPosts(fetchedPosts);
  };

  /**
   * this effect is in charge of searching inside the posts list and 
   * will be triggered when the search term is changed by the user.
   */
   useEffect(() => {
    if (searchTerm.length < 3) {
      setPosts(originalPosts);
      return;
    }
    const results = posts.filter(post => 
      post?.text?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post?.author?.username.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (posts.length > 0 && results.length > 0) {
      setPosts(results);
    } else {
      setPosts(originalPosts);
    }
  }, [searchTerm, posts, originalPosts]);

  return (
    <>
        <SearchBar 
          onSearch={({ target }) => setSearchTerm(target.value)}
        />
        {isLoading 
        ? <Loader /> 
        : <PostList 
            posts={posts}
          />}
      </>
  )
}

export default Posts;
