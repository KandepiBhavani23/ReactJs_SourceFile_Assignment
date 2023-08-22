import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostsComments from "./PostsComments";

const PostsDetails = () => {
	const { id } = useParams();
	const [postDetails, setPostDetails] = useState([]);
	useEffect(() => {
		getDetailedPosts();
	}, []);

	const getDetailedPosts = async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const jsonData = await response.json();
		console.log(jsonData);
		setPostDetails(jsonData);
	};

	return (
		<>
			<div className="px-20 py-10 ">
				<div className="shadow-md p-5 border-orange-500 border-2 rounded-md">
					<h1 className="font-semibold py-3">Post Id: {postDetails?.id}</h1>
					<p className="font-semibold py-3">Post Title: {postDetails.title}</p>
					<p className="font-semibold py-3">
						Post Description: {postDetails.body}
					</p>
				</div>
			</div>
			<div>
				<PostsComments />
			</div>
		</>
	);
};

export default PostsDetails;
