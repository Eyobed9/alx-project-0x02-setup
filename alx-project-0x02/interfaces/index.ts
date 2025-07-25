// Card interface
export type CardProps = {
    title: string;
    content: string;
};

export interface PostProps {
    title: string;
    content: string;
};
// Post modal interface
export interface PostModalProps {
   onClose: () => void;
   onSubmit: (post:CardProps) => void;
};

type shape = "rounded-sm" | "rounded-md" | "rounded-full";
type small = "px-3 py-1 text-sm";
type medium = "px-5 py-2 text-base";
type large = "px-6 py-3 text-lg";

// Button props

// export interface ButtonProps
export type ButtonProps = {
    size: small | medium | large;
    shape: shape;
}

// Post interface
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// User interface
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Address interface for user props
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

// Geo interface for Address
interface Geo {
    lat: string;
    lng: string;
}

// Company interface for UserProps
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Post data interface
export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}
