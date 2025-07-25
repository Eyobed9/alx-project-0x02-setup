import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header>
			<nav>
				<ul className="flex gap-15 justify-center items-center text-xl mt-5">
					<li>
						<Link href="/home" className="text-white hover:text-blue-500">
							Home
						</Link>
					</li>
					<li>
						<Link href="/posts" className="text-white hover:text-blue-500">
							Posts
						</Link>
					</li>
					<li>
						<Link href="/users" className="text-white hover:text-blue-500">
							Users
						</Link>
					</li>
					<li>
						<Link href="/about" className="text-white hover:text-blue-500">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
