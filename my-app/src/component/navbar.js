import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 


function Navbar(){
    return (
        <div className="button-stack">
            <Stack direction="horizontal" gap={0}>
                <div className="p-2">
                <Link to="/">
                    <Button variant="outline-light">Home</Button>
                    </Link>
                </div>
                <div className="p-2">
                <Link to="/cart">
                    <Button variant="outline-light">Cart</Button>
                    </Link>
                </div>
                <div className="p-2">
                <Link to="/order">
                    <Button variant="outline-light">Order</Button>
                    </Link>
                </div>
            </Stack>
            <div className="p-21 hide-on-med-and-up">
            <Link to="/login">
                        <Button variant="outline-light" className="login-button">Login/SignUp</Button>
                    </Link>
            </div>
        </div>
    );
}

export default Navbar;
