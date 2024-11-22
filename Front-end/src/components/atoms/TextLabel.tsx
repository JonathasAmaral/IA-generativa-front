import React from 'react';

interface TextLabelProps {
    text: string;
}

const TextLabel: React.FC<TextLabelProps> = ({ text }) => (
    <span className="textLabel">{text}</span>
);

export default TextLabel;
