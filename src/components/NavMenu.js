import React from 'react';
import { Link } from 'react-router-dom';

function NavMenu() {
    return (
        <header>
            <div>Reuters</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Reuters</Link>
                    </li>
                    <li>
                        <Link to='/markets'>Merkets</Link>
                    </li>
                    <li>
                        <Link to='/india'>India</Link>
                    </li>
                    <li>
                        <Link to='/world'>World</Link>
                    </li>
                    <li>
                        <Link to='/tech'>Tech</Link>
                    </li>
                    <li>
                        <Link to='/commentary'>Commentary</Link>
                    </li>
                    <li>
                        <Link to='/breaking-news'>BreakingNews</Link>
                    </li>
                    <li>
                        <Link to='/money'>Money</Link>
                    </li>
                    <li>
                        <Link to='/sports'>Sports</Link>
                    </li>
                    <li>
                        <Link to='/pictures'>Pictures</Link>
                    </li>
                    <li>
                        <Link to='/video'>Video</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}

export default NavMenu;