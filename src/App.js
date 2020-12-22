import React from 'react'
import './App.css';
import PostDetail from './components/PostDetail';
import PostList from './components/PostList'
function App() {
  console.log('App Component')
  return (
    <div className="App">
      <PostList />
      <PostDetail />
    </div>
  );
}

export default App;
