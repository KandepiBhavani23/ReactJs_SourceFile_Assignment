import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		getPostDetails();
	}, []);

	const getPostDetails = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const jsonData = await response.json();
		console.log(jsonData);
		setPosts(jsonData);
	};
	return (
		<div>
			<h1 className="text-2xl font-bold py-3 text-center">
				Number of Posts - {posts.length}
			</h1>
			<div className="grid grid-cols-3 gap-4 py-10 mx-10">
				{posts?.map((posts) => (
					<Link to={"/posts/" + posts.id} key={posts.id}>
						<div className="shadow-md py-5  border-2 border-pink-500 rounded-md w-[350px] p-5 ">
							<h1 className="font-bold py-3">Number - {posts.id}</h1>
							<p>{posts.title}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Posts;
