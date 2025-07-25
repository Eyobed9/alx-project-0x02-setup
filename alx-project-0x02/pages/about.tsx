import Button from "@/components/common/Button";
import React from "react";

const about: React.FC = () => {
	return (
		<>
			<h1 className="text-2xl shadow-2xl text-center mt-20">
				About Page
			</h1>
			<div className="flex flex-col gap-4 justify-center items-center mt-10">
				<Button size="px-3 py-1 text-sm" shape="rounded-sm" />
				<Button size="px-5 py-2 text-base" shape="rounded-md" />
				<Button size="px-6 py-3 text-lg" shape="rounded-full" />
			</div>
		</>
	);
};

export default about;
