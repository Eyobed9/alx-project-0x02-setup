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

// Button props
export interface ButtonProps {
    size: string;
    shape: string;
}