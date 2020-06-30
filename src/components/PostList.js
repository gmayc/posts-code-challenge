import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {
  GridListTileBar,
  IconButton,
  Fab,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    paddingTop: '5vh',
    width: '80vw',
    height: '80vh',
  },
  gridListTile: {
    height: '35vh',
  },
}));

export const PostList = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={2}>
        {props.posts.map((post) => (
          <GridListTile key={post.id} cols={1} rows={2}>
            <img src={post.image} alt={post.title} />
            <GridListTileBar title={post.category} titlePosition='top' />
            <GridListTileBar
              title={post.title}
              subtitle={
                <div>
                  <div>comments: {post.comments.length} </div>
                  <div>
                    published at:{' '}
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              }
              actionIcon={
                <Fab
                  style={{
                    backgroundColor: 'white',
                    color: '#ef6c00',
                    marginRight: '1vw',
                  }}
                  size='small'
                >
                  <EditIcon />
                </Fab>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
