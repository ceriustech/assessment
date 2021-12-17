import React, { useState } from 'react';

const RegistrationFormn = () => {
	let formDataObject = {
		fullName: '',
		npiNumber: '',
		address: '',
		number: '',
		email: '',
	};

	const [formData, setFormData] = useState(formDataObject);

	const { fullName, npiNumber, address, number, email } = formData;

	const handleFormDataChange = (e) => {
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// All of the validation would be handled on the backend
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		// You can see the form data being saved in the formData object here
		console.log('%cFORM DATA', 'font-size: 2em; color: red');
		console.log(formData);
	};

	return (
		<>
			<div className="registration-form-container">
				<h1 className="lead text-primary">Register With Us</h1>
				<p className="lead">Register Your Account</p>
				<form className="form" onSubmit={(e) => handleFormSubmit(e)}>
					<div className="form-group">
						<div className="form-input">
							<label>Full Name</label>
							<input
								type="text"
								placeholder="Full Name..."
								name="fullName"
								value={fullName || ''}
								onChange={(e) => handleFormDataChange(e)}
								autoComplete="on"
							/>
						</div>
						<div className="form-input">
							<label>NPI Number</label>
							<input
								type="text"
								placeholder="NPI Number..."
								name="npiNumber"
								value={npiNumber}
								onChange={(e) => handleFormDataChange(e)}
								autoComplete="on"
							/>
						</div>
						<div className="form-input">
							<label>Business Address</label>
							<input
								type="text"
								placeholder="Business Address..."
								name="address"
								value={address}
								onChange={(e) => handleFormDataChange(e)}
								autoComplete="on"
							/>
						</div>
						<div className="form-input">
							<label>Number</label>
							<input
								type="text"
								placeholder="Number..."
								name="number"
								value={number}
								onChange={(e) => handleFormDataChange(e)}
								autoComplete="on"
							/>
						</div>
						<div className="form-input">
							<label>Email</label>
							<input
								type="email"
								placeholder="Email Address"
								name="email"
								value={email}
								onChange={(e) => handleFormDataChange(e)}
								autoComplete="on"
							/>
						</div>
					</div>
					<input type="submit" className="btn btn-primary" value="Submit" />
				</form>
			</div>
		</>
	);
};

export default RegistrationFormn;
