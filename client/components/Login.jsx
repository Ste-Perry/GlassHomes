import React, { useState } from "react"
import { connect } from "react-redux"

import { loginUser, loginError } from "../actions/auth"

function Login(props) {
	const { auth } = props

	const [formData, setFormData] = useState({
		username: "",
		password: "",
	})

	const handleChange = (e) => {
		setFormData(currentFormData => {
			return {
				...currentFormData,
				[e.target.name]: e.target.value,
			}
		})
	}


	const handleSubmit = (e) => {
		e.preventDefault()
		let { username, password } = formData
		const confirmSuccess = () => {
			props.history.push("/meeting")
		}
		props.dispatch(loginUser({ username, password }, confirmSuccess))
	}

	return (
		<>
			<section className="hero is-success is-fullheight has-background-light">
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="column is-4 is-offset-4">
							<h3 className="title has-text-black">Login</h3>
							<hr className="login-hr"></hr>
							<p className="subtitle has-text-black">Please login to proceed.</p>
							<div className="box">
								<figure className="avatar">
									<img src="https://placehold.it/128x128"></img>
								</figure>

								<form className="form box" onSubmit={handleSubmit}>
									<hr />
									{auth.errorMessage && (
										<span className="has-text-danger is-large">{auth.errorMessage}</span>
									)}

									<div className="field">
										<div className="control">
											<label className="label is-large has-text-centered">
												Username
        <input
													required
													className="input has-text-centered is-large is-fullwidth"
													placeholder="User Name"
													type="text"
													name="username"
													autoComplete="username"
													value={formData.username}
													onChange={handleChange}
												/>
											</label>
										</div>
									</div>

									<div className="field">
										<div className="control">
											<label className="label is-large has-text-centered">
												Password
        <input
													required
													className="input has-text-centered is-large is-fullwidth"
													placeholder="Password"
													type="password"
													name="password"
													autoComplete="current-password"
													value={formData.password}
													onChange={handleChange}
												/>
											</label>
										</div>
									</div>
									<input
										className="button is-large is-fullwidth is-success"
										value="Login"
										type="submit"
									/>
								</form>
							</div>

							<p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>

						</div>
					</div>
				</div>

			</section>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		auth,
	}
}

export default connect(mapStateToProps)(Login)