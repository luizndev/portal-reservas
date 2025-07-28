import * as Icons from 'lucide-react';

export function Icon({ name, className = '', size = 24 }) {
    const LucideIcon = Icons[name];

    if (!LucideIcon) {
        return <span>Ícone "{name}" não encontrado</span>;
    }

    return (
        <LucideIcon
            // className={className}
            size={size}
            stroke="currentColor"
        />
    );
}