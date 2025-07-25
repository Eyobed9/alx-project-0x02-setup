import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

import { PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
	return (
		<>
			<Header />
			<div className="flex flex-col h-screen">
				<main className="p-4 mt-5">
					<div className="flex justify-center">
						<h1 className="text-2xl shadow-2xl text-center ">
							Post Contents
						</h1>
					</div>
					<div className="grid grid-cols-3 gap-8">
						{posts?.map(
							(
								{ title, body, userId, id }: PostProps,
								key: number
							) => (
								<PostCard
									title={title}
									body={body}
									userId={userId}
									id={id}
									key={key}
									content={""}
								/>
							)
						)}
					</div>
				</main>
			</div>
		</>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await response.json();

	return {
		props: {
			posts,
		},
	};
}

export default Posts;
