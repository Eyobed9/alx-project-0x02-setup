import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
	return (
		<div className="border border-blue-300 rounded-3xl p-8 cursor-pointer shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
			<h1 className="text-2xl shadow-2xl text-center pb-4">{title}</h1>
			<p className="text-md text-center">{content}</p>
		</div>
	);
};

export default Card;
