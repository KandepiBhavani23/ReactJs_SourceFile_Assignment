import React from "react";

const AboutUs = () => {
	return (
		<div className="px-[5%] py-[5%] font-sans">
			<h1 className="text-5xl font-bold">What We Do</h1>
			<p className="text-2xl py-3">
				We provide teams capable of increasing the velocity of your development
				and extending your technical capabilities.
			</p>
			<div className="flex m-5">
				<div className="bg-yellow-100 w-[350px] m-5 h-[250px]  rounded-md flex flex-col justify-center items-center ">
					<h1 className="text-2xl font-bold py-4">UI/Ux Designer</h1>
					<img
						src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg"
						alt=""
						className="rounded-full w-[150px] border-4 border-green-200"
					/>
				</div>
				<div className="bg-sky-100 w-[350px] h-[250px]  m-5 rounded-md flex flex-col justify-center items-center ">
					<h1 className="text-2xl font-bold py-4">React Developer</h1>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-hIu4BQ_u6ELe152wW-CYtSSpK9pAsWp_hlU_90byhlVOSHVbdMtNh0mTQ6kdp7hP5o&usqp=CAU"
						alt=""
						className="rounded-full w-[150px] border-4 border-yellow-200"
					/>
				</div>
				<div className="bg-green-100 w-[350px] h-[250px]  m-5 rounded-md flex flex-col justify-center items-center ">
					<h1 className="text-2xl font-bold py-4">Web Developer</h1>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUyfHcoHH-YdcSZQjDzbDoN88E4VxPIZ4lI7WrT5xnZ3Nvgwt-RGtNmk1iW9zAA3iib8&usqp=CAU"
						alt=""
						className="rounded-full w-[150px] border-4 border-yellow-200"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
