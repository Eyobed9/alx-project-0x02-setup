import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
	return (
		<button
			className={`bg-blue-700 text-white cursor-pointer shadow-xl ${size} ${shape}`}
		>Button</button>
	);
};

export default Button;
