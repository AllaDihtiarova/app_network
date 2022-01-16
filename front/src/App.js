import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from './components/Container/Container'
import Appbar from './components/AppBar/AppBar'
import HomePage from './components/Body/HomePage/HomePage'
import Articles from './components/Body/Articles/Articles'
import AddArticle from './components/Body/AddArticle/AddArticle'
import Profile from './components/Body/Profile/Profile'
import NotFound from './components/NotFound/NotFound'
import CheckDate from './components/CheckDate/CheckDate'
import  UserContainer   from './propTypesTest/userContainer'
import user from './propTypesTest/data/user.json'

const {name, age, avatar, files, addrr, friends} = user

function App() {
  return (

    <BrowserRouter>
      <Container>
        {/* <Appbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<h2>Article</h2>} />
          </Route>
          <Route path="/addArticle" element={<AddArticle />}>
            <Route path=":img" element={<div>Image</div>} />
          </Route>
          <Route path="/profile" element={<Profile />}>
            <Route path=":title" element={<div>Profile</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />

          <Route path="/:date" element={<CheckDate />} />
        </Routes> */}
        <UserContainer name={name} age={age} avatar={avatar} files={files} addrr={addrr} friends={friends}/>
      </Container>
    </BrowserRouter>
  )
}

export default App
