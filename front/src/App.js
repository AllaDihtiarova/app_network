import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NetworkContainer from './components/Container/Container';
import Appbar from './components/AppBar/AppBar';
import HomePage from './components/Body/HomePage/HomePage';
import PostsListContainer from './containes/PostsListContainer/PostsListContainer';
import UpdatePostContainer from './containes/UpdatePostContainer/AddPostContainer';
import UsersListContainer from './containes/UsersListContainer/UsersListContainer';
import UserContainer from './containes/UserContainer/UserContainer';
import NotFound from './components/NotFound/NotFound';
import UpdateLoginContainer from './containes/UpdateLoginContainer/UpdateLoginContainer';
import ErrorBoundary from './components/errorBoundary';
import AddNewPostContainer from './containes/AddNewPostContainer/AddNewPostContainer';
import authContext from './authContext';

function App() {
  return (
    <BrowserRouter>
      <NetworkContainer>
        <authContext.Provider value={{
          authenticated: false,
          firstName: 'Alla',
          lastName: 'Dihtiarova',
          birthday: Date(),
          createDate: Date(),
          gender: 'Femail',}}>
          <ErrorBoundary>
          <Appbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostsListContainer />}/>         
              <Route path="/posts/:postId" element={<UpdatePostContainer />}/>         
              <Route path="/users" element={<UsersListContainer />}/>            
              <Route path="/users/:userId" element={<UserContainer />} /> 
              <Route path="/post" element={<AddNewPostContainer/>}/>
              <Route path="*" element={<NotFound />} />
              <Route path="/login/:loginId" element={<UpdateLoginContainer />} />
            </Routes>
          </ErrorBoundary>
        </authContext.Provider>
      </NetworkContainer>
    </BrowserRouter>
  )
}

export default App
