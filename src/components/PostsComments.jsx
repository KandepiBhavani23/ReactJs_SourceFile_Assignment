import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostsComments = () => {
	const { id } = useParams();
	const [postComments, setPostComments] = useState();

	useEffect(() => {
		getPostsComments();
	}, []);

	const getPostsComments = async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);
		const jsonData = await response.json();
		console.log(jsonData);
		setPostComments(jsonData);
	};
	return (
		<div>
			<h1 className="text-2xl font-bold px-4 text-center my-6">Comments</h1>
			<div className="flex flex-wrap px-10 py-10">
				{postComments?.map((comment) => (
					<div
						className="w-[350px] shadow-md px-10 py-10 border-2 m-5 border-orange-500"
						key={comment.id}>
						<h1 className="py-2">
							<span className="font-bold">Id : </span>
							{comment.id}
						</h1>
						<p className="py-2">
							<span className="font-bold">Name : </span>
							{comment.name}
						</p>
						<p className="py-2">
							<span className="font-bold">Email : </span>
							{comment.email}
						</p>
						<p className="py-2">
							<span className="font-bold">Body : </span>
							{comment.body}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostsComments;
