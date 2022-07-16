import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <Navbar bg="light"  expand="lg" style={{padding: '20px', borderBottom : '7px solid blue'}}>
        <Navbar.Brand style={{fontSize: "25px"}}>
            <NavLink to="/" style = {{fontSize : '30px', fontFamily : 'Franklin Gothic Medium'}}>MOHAK SPARK BANK</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link style={{fontSize: "21px"}}>
                    <NavLink to="customers" style = {{fontSize : '27px' , marginLeft : '750px', fontFamily : 'Franklin Gothic Medium'}}>
                        Our Customers
                    </NavLink>
                </Nav.Link>
                <Nav.Link style={{fontSize: "21px"}}>
                    <NavLink to="transactions" style = {{fontSize : '27px' , marginLeft : '2px', fontFamily : 'Franklin Gothic Medium'}}>
                        Transactions
                    </NavLink>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;



