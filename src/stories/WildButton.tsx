import React from "react";

interface WildButtonProps {
    label: string;
}

export const WildButton = ({label, ...props}: WildButtonProps) => {
    return <button>{label}</button>
}