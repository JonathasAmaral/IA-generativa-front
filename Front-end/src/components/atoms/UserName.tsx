import React from 'react';

interface UserNameProps {
    name: string;
}

const UserName: React.FC<UserNameProps> = ({ name }) => (
    <span className="userName">{name}</span>
);

export default UserName;
