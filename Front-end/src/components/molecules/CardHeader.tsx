import React from 'react';
import Avatar from '../atoms/Avatar';
import UserName from '../atoms/UserName';

interface CardHeaderProps {
    src: string;
    name: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ src, name }) => (
    <div className="cardHeader">
        <Avatar src={src} />  
        <UserName name={name} />  
    </div>
);

export default CardHeader;
