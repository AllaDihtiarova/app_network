import { NavLink, Outlet } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => (
  <>
    <nav>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? '#2196f3' : '',
          }
        }}
        to="/"
        className={styles.link}
      >
        Home page
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? '#2196f3' : '',
          }
        }}
        to="/articles"
        className={styles.link}
      >
        Posts
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? '#2196f3' : '',
          }
        }}
        to="/addArticle"
        className={styles.link}
      >
        Add post
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? '#2196f3' : '',
          }
        }}
        to="/profile"
        className={styles.link}
      >
        Profile
      </NavLink>
    </nav>
    <Outlet />
    <Outlet />
  </>
)

export default Navigation
