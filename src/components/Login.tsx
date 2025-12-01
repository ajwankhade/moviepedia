import { useRef, useState, type MouseEvent } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { validateLoginForm } from "../utils/helpers";
import { auth } from "../utils/firebase";
import Header from "./Header"

const Login = () => {
	const [isSignIn, setIsSignIn] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const nameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const toggleSignIn = () => {
		setIsSignIn(prev => !prev);
	}

	const onFormSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const email = emailRef.current?.value ?? "";
		const password = passwordRef.current?.value ?? "";

		if (isSignIn) {
			// sign in
			setErrorMessage(null);

			signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log("user signed in ::", user)
				// ...
			})
			.catch(() => {
				setErrorMessage("Invalid username or password!");
			});
		} else {
			const name = nameRef.current?.value;
			const errorMessage = validateLoginForm({email, password});

			setErrorMessage(errorMessage);
			if (errorMessage) {
				return;
			} else {
				// sign up
				createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					// Update the user's profile with a display name
					return updateProfile(user, {
						displayName: name
					});
				})
				.then(() => {
					setErrorMessage(null);
				})
				.catch(() => {
					setErrorMessage("Error during user creation or profile update!");
				});
			}
		}
	}

	return (
		<div className="relative h-screen w-screen">
			<Header />
			<div className="absolute w-[400px] left-[50%] top-[15%] -translate-x-[50%] p-10 flex flex-col justify-center align-middle text-white rounded-lg gap-8">
				<div className="absolute left-0 bg-black opacity-85 w-full h-full -z-10 rounded-lg" />
				<h1 className="text-2xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
				<form className="flex flex-col gap-10 relative">
					{
						!isSignIn &&
						(
							<input ref={nameRef} className="border border-white rounded-md px-4 py-2" type="text" placeholder="Enter your full name"></input>
						)
					}
					<input ref={emailRef} className="border border-white rounded-md px-4 py-2" type="text" placeholder="Enter your email ID"></input>
					<input ref={passwordRef} className="border border-white rounded-md px-4 py-2" type="password" placeholder="Enter your password *****"></input>
					{
						errorMessage &&
						<p className="text-red-600 absolute bottom-12 font-bold">{errorMessage}</p>
					}
					<button className="bg-red-600 rounded-md px-4 py-2 cursor-pointer" onClick={onFormSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
				</form>
				{
					isSignIn ?
					(
						<p>
							Already a member? Click <a className="underline cursor-pointer" onClick={toggleSignIn}>here</a> to sign in
						</p>
					)
					:
					(
						<p>Don't have signed up yet? Click <a className="underline cursor-pointer" onClick={toggleSignIn}>here</a> to sign up</p>
					)
				}
			</div>
		</div>
	)
}

export default Login