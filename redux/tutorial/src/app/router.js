import { createBrowserRouter } from 'react-router-dom';
import { Counter } from '../features/counter/Counter';
import { PostsList } from '../features/posts/PostsList'
import { AddPostForm } from '../features/posts/AddPostForm';
import { SinglePostPage } from '../features/posts/SinglePostPage';
import { EditPostForm } from '../features/posts/EditPostForm';
import Home from '../components/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/posts',
    element: <>
      <PostsList />
      <AddPostForm />
    </>
  },
  {
    path: '/posts/:postId',
    element: <SinglePostPage />
  },
  {
    path: '/editPost/:postId',
    element: <EditPostForm />
  },
]);