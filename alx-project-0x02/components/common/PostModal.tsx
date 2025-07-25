import { PostProps, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
	const [post, setPost] = useState<PostProps>({
		title: "",
		content: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setPost((prevPost) => ({ ...prevPost, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(post);
		onClose();
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold mb-4 text-black">
					Add New Post
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="title"
							className="block text-gray-700 font-medium mb-2"
						>
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={post.title}
							onChange={handleChange}
							className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="content"
							className="block text-black font-medium mb-2"
						>
							Content
						</label>
						<textarea
							id="content"
							name="content"
							value={post.content}
							onChange={handleChange}
							rows={4}
							className="w-full px-4 py-2 border border-gray-400 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter post content"
						/>
					</div>
					<div className="flex justify-between items-center">
						<button
							type="button"
							onClick={onClose}
							className="bg-red-700 px-4 py-2 rounded-full text-white cursor-pointer shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-red-500"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-6 py-2 bg-blue-700 rounded-full text-white cursor-pointer shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-blue-500"
						>
							Add Post
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PostModal;
