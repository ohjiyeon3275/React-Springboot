import React, { Component } from 'react';


class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dart bg-dark">
                        <div><a href="http://localhost:3000/goods"> G o o d s </a></div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;