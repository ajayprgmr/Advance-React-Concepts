import { useContext } from 'react'
import { NavbarContext } from './Navbar'

function UserContainer() {
  const { user, logout, login } = useContext(NavbarContext)

  const handleButtonClick = () => {
    if (user === null) {
      login()
    } else {
      logout()
    }
  }

  return (
    <div>
      <p>{user ? `Hello There ${user.name}` : 'Please Login'}</p>
      <button onClick={handleButtonClick}>{user ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default UserContainer
