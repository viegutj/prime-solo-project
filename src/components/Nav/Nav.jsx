import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import {useSelector} from 'react-redux';
import DrawerComponent from '../DrawerComponent/DrawerComponent';

function Nav() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
            <div> {/* If a user is logged in, show these links */}
                {
                user.id && (
                    <>
                        <Link to="/home">
                            <h2 className="nav-title">Prime Solo Project</h2>
                        </Link>

                        <DrawerComponent/>
                    </>
                )
            } </div>
        </div>
    );
}

export default Nav;
