import Card from "@/components/common/Card";
import React from "react";

const HomePage: React.FC = () => {
	return (
		<>
			<h1 className="text-2xl shadow-2xl text-center mt-20">HomePage</h1>
			<main className="flex gap-4 mt-5 justify-center items-center">
				<Card title="Toyota" content="A beautiful car for travels" />
				<Card title="V8" content="A beautiful car for luxury" />
			</main>
		</>
	);
};

export default HomePage;
