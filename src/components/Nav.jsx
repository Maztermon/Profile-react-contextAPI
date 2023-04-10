import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, NavCon, Logo, Container, Menu } from '../styles/styles'

function Nav() {
  return (
    <NavBar>
        <Container>
            <NavCon>
                <div>
                    <Logo to="/">Diamond</Logo>
                </div>
                <Menu>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </Menu>
            </NavCon>
        </Container>
    </NavBar>
  )
}

export default Nav