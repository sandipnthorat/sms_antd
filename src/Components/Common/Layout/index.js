import React from 'react';
import Nav from "../../Common/Nav"
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>{children}</main>
            <footer style={{ padding: '10px' }}>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;