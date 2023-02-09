import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./getintoch.css";
import Footer from "./Footer";
const GetInTouch = () => {
	return (
		<>
			<div className="formClass">
				<form className="formInside">
					<div class="form-outline mb-4">
						<label class="form-label" for="form4Example1">
							Name
						</label>
						<input type="text" id="form4Example1" class="form-control" />
					</div>

					<div class="form-outline mb-4">
						<label class="form-label" for="form4Example2">
							Email address
						</label>
						<input type="email" id="form4Example2" class="form-control" />
					</div>

					<div class="form-outline mb-4">
						<label class="form-label" for="form4Example3">
							Message
						</label>
						<textarea
							class="form-control"
							id="form4Example3"
							rows="4"
						></textarea>
					</div>
					<button type="submit" class="btn btn-primary btn-block mb-4">
						Send
					</button>
				</form>
			</div>

			{/* <Footer /> */}
		</>
	);
};

export default GetInTouch;
