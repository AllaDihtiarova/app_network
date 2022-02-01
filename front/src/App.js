import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from './components/Container/Container'
import Appbar from './components/AppBar/AppBar'
import HomePage from './components/Body/HomePage/HomePage'
import PostsListContainer from './containes/PostsListContainer/PostsListContainer'
import AddPost from './components/Body/AddPost/AddPost'
import UsersListContainer from './containes/UsersListContainer/UsersListContainer'
import UserContainer from './containes/UserContainer/UserContainer'
import NotFound from './components/NotFound/NotFound'
// import Form from './components/Form/Form'

import ErrorBoundary from './components/errorBoundary'

function App() {
  return (
    <BrowserRouter>
        <Container>
          <ErrorBoundary>
            <Appbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostsListContainer />}/>         
              <Route path="/addArticle" element={<AddPost />}/>         
              <Route path="/users" element={<UsersListContainer />}/>            
              <Route path="/users/:userId" element={<UserContainer/>}/> 
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/single" element={<Form/>}/> */}
            </Routes>
          </ErrorBoundary>
        </Container>
    </BrowserRouter>
  )
}

export default App
