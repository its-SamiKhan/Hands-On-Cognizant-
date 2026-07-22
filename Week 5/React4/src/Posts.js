import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
        const posts = data.map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: posts });
      })
      .catch(err => {
        this.setState({ error: err });
        alert('Error: ' + err.message);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Error caught in componentDidCatch: ' + error.toString());
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>An error occurred while loading posts.</h2>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
