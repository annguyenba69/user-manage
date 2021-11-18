import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-3">Project quản lý thành viên bằng React JS</h1>
                <p className="lead">Với dữ liệu Json</p>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;