type Title = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type NavItem = {
    text: string
    href: string
};

export type TitleComponent = {
    text: string
    type: Title
};

export type DescriptionComponent = {
    text: string
};

export type NavComponent = {
    items: NavItem[]
};

export type ImageComponent = {
    src: string
    width?: string
    height?: string
    alt?: string
};

export type ButtonComponent = {
    text: string
    onClick: (event: MouseEvent) => void;
};

