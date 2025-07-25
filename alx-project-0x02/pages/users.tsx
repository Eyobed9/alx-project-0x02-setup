import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
	return (
		<>
			{" "}
			<Header />
			<div className="flex flex-col h-screen">
				<main className="p-4 mt-5">
					<div className="flex justify-center">
						<h1 className="text-2xl shadow-2xl text-center">
							Users
						</h1>
					</div>
					<div className="grid grid-cols-3 gap-8">
						{posts.map(
							(
								{
									id,
									name,
									username,
									email,
									address,
									phone,
									website,
									company,
								}: UserProps,
								key: number
							) => (
								<UserCard
									name={name}
									username={username}
									email={email}
									address={address}
									phone={phone}
									website={website}
									company={company}
									id={id}
									key={key}
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
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const posts = await response.json();

	return {
		props: {
			posts,
		},
	};
}

export default Users;
