import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu(props) {
    const handleMenuClick = (menuItem) => {
        // Pass the selected menu item to the parent component
        props.onMenuClick(menuItem);
    };

    const [activeLink, setActiveLink] = React.useState("getAllMovies");
    const [searchText, setSearchQuery] = React.useState("");

    const handleSearch = (text) => {
        setSearchQuery(text);        
        props.onSearch(text);
    }

    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link
                            href="#"
                            onClick={() => {
                                handleMenuClick("getAllMovies");
                                setActiveLink("getAllMovies");
                            }}
                            active={activeLink === "getAllMovies"}
                        >
                            Movies in theatres
                        </Nav.Link>
                        <Nav.Link
                            href="#"
                            onClick={() => {
                                handleMenuClick("comingSoon");
                                setActiveLink("comingSoon");
                            }}
                            active={activeLink === "comingSoon"}
                        >
                            Coming soon
                        </Nav.Link>
                        <Nav.Link
                            href="#"
                            onClick={() => {
                                handleMenuClick("topRatedIndian");
                                setActiveLink("topRatedIndian");
                            }}
                            active={activeLink === "topRatedIndian"}
                        >
                            Top Rated Indian
                        </Nav.Link>
                        <Nav.Link
                            href="#"
                            onClick={() => {
                                handleMenuClick("topRatedMovies");
                                setActiveLink("topRatedMovies");
                            }}
                            active={activeLink === "topRatedMovies"}
                        >
                            Top Rated Movies
                        </Nav.Link>
                        <Nav.Link
                            href="#"
                            onClick={() => {
                                handleMenuClick("favourites");
                                setActiveLink("favourites");
                            }}
                            active={activeLink === "favourites"}
                        >
                            Favourites
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => handleSearch(e.target.value)}
                            value={searchText}
                        />
                        <Button variant="success" onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
