import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

import { PostList } from './PostList';

export const Home = (props) => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [postsCallFlag, setPostsCallFlag] = useState(false);
  const getPosts = async () => {
    const { data } = await Axios.get('http://localhost:3001/api/posts');
    if (data.status === 200) {
      setPosts(data.posts);
    }
  };

  useEffect(() => {
    if (!props.loggedIn) {
      history.push('/login');
    } else {
      if (!posts.length && !postsCallFlag) {
        getPosts();
        setPostsCallFlag(true);
      }
    }
  }, [history, posts.length, postsCallFlag, props.loggedIn]);
  return (
    <div>
      <NavBar />
      <Fab
        size='large'
        style={{
          position: 'fixed',
          top: ' 10vh',
          right: ' 4vw',
          zIndex: 999,
        }}
        color='secondary'
        onClick={getPosts}
      >
        <AddIcon />
      </Fab>
      <PostList posts={posts} />
    </div>
  );
};
