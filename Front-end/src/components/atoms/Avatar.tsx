import React from 'react';

interface AvatarProps {
    src?: string;
    alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src}) => (
        <img src={src} className="avatar" />
);

export default Avatar;
