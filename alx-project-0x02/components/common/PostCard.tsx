import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
	return (
		<div className="max-w-xl mx-auto my-6 p-6 border border-blue-300 rounded-3xl cursor-pointer shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
			<div className="mb-4">
				<h2 className="text-2xl font-semibold text-gray-200">
					{title}
				</h2>
			</div>
			<p className="text-white">{body}</p>
			<div className="mt-4 flex items-center justify-between text-sm text-white">
				<span>User ID: {userId}</span>
				<span>Post ID: {id}</span>
			</div>
		</div>
	);
};

export default PostCard;
