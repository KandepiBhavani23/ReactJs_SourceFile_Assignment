import React, { useState } from "react";

const states = [
	"Select State",
	"Karnataka",
	"Andhra Pradesh",
	"Telangana",
	"Mumbai",
	"Tamil Nadu",
];

function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		gender: "",
		dob: "",
		state: "",
		pincode: "",
		address: "",
	});

	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};
		if (!formData.firstName) newErrors.firstName = "First Name is required";
		if (!formData.lastName) newErrors.lastName = "Last Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		else if (!/^\S+@\S+\.\S+$/.test(formData.email))
			newErrors.email = "Invalid email format";
		if (!formData.phoneNumber)
			newErrors.phoneNumber = "Phone Number is required";
		else if (!/^\d{10}$/.test(formData.phoneNumber))
			newErrors.phoneNumber = "Phone Number should be 10 digits";
		if (!formData.pincode) newErrors.pincode = "Pin Code is required";
		else if (!/^\d{6}$/.test(formData.pincode))
			newErrors.pincode = "Pin Code should be 6 digits";
		if (!formData.dob) newErrors.dob = "Date of Birth is required";
		else if (new Date(formData.dob) >= new Date())
			newErrors.dob = "Date of Birth should be a past date";
		if (!formData.address) newErrors.address = "Address is required";
		else if (formData.address.length > 150)
			newErrors.address = "Address should be less than 150 characters";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Form data:", formData);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<h2 className="text-3xl font-bold text-center py-5">Contact Us</h2>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col justify-center">
					<div className="py-6">
						<label htmlFor="firstName">First Name : </label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							placeholder="First Name "
							className="border-2 border-gray-300 w-[600px] py-2 px-2 text-xl rounded-md"
						/>
						<br />
						{errors.firstName && (
							<span className="text-red-500">{errors.firstName}</span>
						)}
					</div>
					<div className="py-6">
						<label htmlFor="lastName">Last Name : </label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							placeholder="Last Name"
							className="border-2 border-gray-300 w-[600px] py-2 px-2 text-xl rounded-md"
						/>
						<br />
						{errors.lastName && (
							<span className="text-red-500">{errors.lastName}</span>
						)}
					</div>
					<div className="py-6">
						<label htmlFor="email">Email : </label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Email"
							className="border-2 border-gray-300 w-[600px] py-2 px-2 text-xl rounded-md"
						/>
						<br />
						{errors.email && (
							<span className="text-red-500">{errors.email}</span>
						)}
					</div>
					<div className="py-6">
						<label htmlFor="phoneNumber">Phone Number : </label>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							value={formData.phoneNumber}
							onChange={handleChange}
							placeholder="Phone Number"
							className="border-2 border-gray-300 w-[600px] py-2 px-2 text-xl rounded-md"
						/>
						<br />
						{errors.phoneNumber && (
							<span className="text-red-500">{errors.phoneNumber}</span>
						)}
					</div>
					<div className="py-6">
						<label>Gender : </label>
						<label className="px-3">
							<input
								type="radio"
								name="gender"
								value="male"
								checked={formData.gender === "male"}
								onChange={handleChange}
								className="px-4"
							/>
							Male
						</label>
						<label className="px-3">
							<input
								type="radio"
								name="gender"
								value="female"
								checked={formData.gender === "female"}
								onChange={handleChange}
							/>
							Female
						</label>
					</div>
					<div className="py-6">
						<label htmlFor="dob">Date of Birth : </label>
						<input
							type="date"
							id="dob"
							name="dob"
							className="border-2 border-gray-300 w-[200px] py-2 px-2 text-xl rounded-md"
							value={formData.dob}
							onChange={handleChange}
						/>
						<br />
						{errors.dob && <span className="text-red-500">{errors.dob}</span>}
					</div>
					<div className="py-6">
						<label htmlFor="state">State : </label>
						<select
							id="state"
							name="state"
							className="border-2 border-gray-300 w-[200px] py-2 px-2 text-xl outline-none rounded-md"
							value={formData.state}
							onChange={handleChange}>
							{states.map((state, index) => (
								<option key={index} value={state}>
									{state}
								</option>
							))}
						</select>
					</div>
					<div className="py-6">
						<label htmlFor="pincode">Pincode : </label>
						<input
							type="text"
							id="pincode"
							name="pincode"
							value={formData.pincode}
							onChange={handleChange}
							className="border-2 border-gray-300 w-[200px] py-2 px-2 text-xl rounded-md"
							placeholder="pincode"
						/>
						<br />
						{errors.pincode && (
							<span className="text-red-500">{errors.pincode}</span>
						)}
					</div>
					<div className="py-6">
						<label htmlFor="address">Address:</label>
						<textarea
							id="address"
							name="address"
							value={formData.address}
							onChange={handleChange}
							className="border-2 border-gray-300 w-[400px] py-2 px-2 text-xl rounded-md"
							placeholder="Address"
						/>
						<br />
						{errors.address && (
							<span className="text-red-500">{errors.address}</span>
						)}
					</div>
					<button
						className="bg-sky-600 w-[200px] h-[40px] rounded-md"
						type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
