import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import {useSelector} from 'react-redux';
import DrawerComponent from '../DrawerComponent/DrawerComponent';

function Nav() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
                {
                user.id && (
                    <>
                        <Link to="/user">
                            <h2 className="nav-title">MN Fitness</h2>
                        </Link>

                        <DrawerComponent/>
                    </>
                )
            }
        </div>
    );
}

export default Nav;
