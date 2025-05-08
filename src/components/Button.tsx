import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'warning' | 'danger';
}

function Button({ children, onClick, color='danger' }: Props) {
    return (
        <button className={"btn btn-" + color } onClick={onClick}>{children}</button>
    )
}

export default Button
