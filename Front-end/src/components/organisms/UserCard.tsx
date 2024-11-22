import React from 'react';
import CardHeader from '../molecules/CardHeader';

interface UserCardProps {
    user: {
        name: string;
        avatar: string;
    };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <div className="userCard">
        <CardHeader src={user.avatar} name={user.name} />
    </div>
);

export default UserCard;
