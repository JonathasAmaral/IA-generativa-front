import React from 'react';
import UserCard from '../organisms/UserCard';

const Header: React.FC = () => {
    return (
        <header className="header">
            <UserCard user={{ name: "Alexandra Nogueira", avatar: "path/to/avatar.jpg" }} />
            <span className="header-text">Explore Your Course Modules</span>
        </header>
    );
};

export default Header;