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

