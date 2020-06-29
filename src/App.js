import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://my-json-server.typicode.com/gmayc/posts-code-challenge/posts',
      );
      console.log(res);
      const test = await axios.get('http://localhost:3001');
      console.log('fetchPosts -> test', test);
    };
    fetchPosts();
    return () => {};
  });
  return <div className='App'></div>;
};

export default App;
