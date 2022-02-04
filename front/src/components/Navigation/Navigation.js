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
        to="/posts"
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
        to="/users"
        className={styles.link}
      >
        Users
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? '#2196f3' : '',
          }
        }}
        to="/post"
        className={styles.link}
      >
        Add new post
      </NavLink>
    </nav>
    <Outlet />
    <Outlet />
  </>
)

export default Navigation
