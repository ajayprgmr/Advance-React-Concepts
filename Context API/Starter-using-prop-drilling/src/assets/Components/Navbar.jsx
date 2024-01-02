import { createContext, useState } from 'react'
import Navlinks from '../Components/Navlinks.jsx'

export const NavbarContext = createContext()

function Navbar() {
  const [user, setUser] = useState({ name: 'bob' })

  const logout = () => {
    setUser(null)
  }

  const login = () => {
    setUser({ name: 'bob'.toUpperCase() })
  }

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <h5>CONTEXT API</h5>
      <Navlinks />
    </NavbarContext.Provider>
  )
}

export default Navbar
