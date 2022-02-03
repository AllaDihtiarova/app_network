import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NetworkContainer from './components/Container/Container'
import Appbar from './components/AppBar/AppBar'
import HomePage from './components/Body/HomePage/HomePage'
import PostsListContainer from './containes/PostsListContainer/PostsListContainer'
import AddPostContainer from './containes/AddPostContainer/AddPostContainer'
import UsersListContainer from './containes/UsersListContainer/UsersListContainer'
import UserContainer from './containes/UserContainer/UserContainer'
import NotFound from './components/NotFound/NotFound'
import UserFormContainer from './containes/Form/Form'

import ErrorBoundary from './components/errorBoundary'

function App() {
  return (
    <BrowserRouter>
        <NetworkContainer>
          <ErrorBoundary>
          <Appbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostsListContainer />}/>         
              <Route path="/posts/:postId" element={<AddPostContainer />}/>         
              <Route path="/users" element={<UsersListContainer />}/>            
              <Route path="/users/:userId" element={<UserContainer/>}/> 
              <Route path="*" element={<NotFound />} />
              <Route path="/login/:loginId" element={<UserFormContainer/>}/>
            </Routes>
          </ErrorBoundary>
        </NetworkContainer>
    </BrowserRouter>
  )
}

export default App
