import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

const HomePage: React.FC<{ posts: CardProps[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [allPosts, setAllPosts] = useState<CardProps[]>(posts);

    const handleAddPost = (newPost: CardProps) => {
        setAllPosts([...allPosts, newPost]);
        setModalOpen(false);
    };
    return (
        <>
            <div className="flex justify-center gap-15 mt-20 mx-20">
                <h1 className="text-2xl shadow-2xl text-center ">HomePage</h1>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-700 px-4 py-2 rounded-full text-white cursor-pointer shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-blue-500"
                >
                    Add Card
                </button>
            </div>
            <main className="grid lg:grid-cols-2 grid-cols-1 gap-7 m-10 justify-center items-center">
                {allPosts?.map(({ title, content }: CardProps, key: number) => (
                    <Card title={title} content={content} key={key} />
                ))}
            </main>

            {isModalOpen && (
                <PostModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            )}
        </>
    );
};

export default HomePage;

export async function getStaticProps() {
    const posts: CardProps[] = [
        { title: "Toyota", content: "A beautiful car for travels" },
        { title: "V8", content: "A beautiful car for luxury" },
    ];

    return {
        props: {
            posts,
        },
    };
}
