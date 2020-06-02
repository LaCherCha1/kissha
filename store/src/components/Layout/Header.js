import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { observer } from "mobx-react"
import useStores from "../../hooks/useStores"

const Header = observer(() => {
  const { ShoppingCartStore } = useStores()
  return (
    <>
      <div className="text-center">
        <Link className="text-decoration-none" to="/">
          <Logo />
        </Link>
      </div>
      <Navbar
        sticky="top"
        className="d-flex justify-content-center mt-3"
        bg="white"
        expand="md"
      >
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse className="justify-content-center" id="navbar">
          <Nav>
            <Link
              activeClassName="active"
              className="mr-md-2 mr-lg-4 nav-link"
              to="/about"
              state={{ greeting: "Hello About!" }}
            >
              New Arrivals
            </Link>
            <Link
              activeClassName="active"
              className="mr-md-2 mr-lg-4 nav-link"
              to="/bestseller"
            >
              Best Seller
            </Link>
            <Link
              activeClassName="active"
              className="mr-md-2 mr-lg-4 nav-link"
              to="/makeup"
            >
              Makeup
            </Link>
            <Link
              activeClassName="active"
              className="mr-md-2 mr-lg-4 nav-link"
              to="/skincare"
            >
              Skin care
            </Link>
            <Link
              activeClassName="active"
              className="mr-md-2 mr-lg-4 nav-link"
              to="/sales"
            >
              Sales
            </Link>
            <Navbar.Text>
              <Link to="/cart">
                <FontAwesomeIcon
                  className="text-primary"
                  icon={["fas", "shopping-cart"]}
                />
                ({ShoppingCartStore.amountOfProducts})
              </Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
})

export default Header
