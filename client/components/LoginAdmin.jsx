import React, { useState } from 'react'
import { connect } from 'react-redux'

import { loginUser, loginError } from '../actions/auth'

function Login(props) {
	const { auth } = props
	

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const handleChange = (e) => {
		setFormData((currentFormData) => {
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
			props.history.push('/home')
		}
		props.dispatch(loginUser({ username, password }, confirmSuccess))
}

	return (
		<>


			<section className="hero is-info is-medium is-bold" id="hero-admin">

				<div className="hero-body"></div>
			</section>

			<section className="articles">
				<div className="column is-8 is-offset-2">
					<div className="container has-text-centered">
						<div className="card article">
							<div className="card-content">
								<div className="column is-6 is-offset-3">
									<h3 className="title has-text-black">Admin Login</h3>
									<hr className="login-hr"></hr>
									<p className="subtitle has-text-black">Please login to proceed.</p>
									<form className="form box" onSubmit={handleSubmit}>
										<hr />
										{auth.errorMessage && (
											<span className="has-text-danger is-large">{auth.errorMessage}</span>
										)}

										<div className="field">
											<div className="control">
												<label className="label is-8 is-offset-2 is-large has-text-centered">
													Username
													<input
														required
														className="input has-text-centered is-large is-fullwidth"
														placeholder="Username"
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
							</div>
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
