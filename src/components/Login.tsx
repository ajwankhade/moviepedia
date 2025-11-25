import Header from "./Header"

const Login = () => {
	return (
		<div className="relative h-screen w-screen">
			<Header />
			<div className="absolute w-[400px] left-[50%] top-[20%] -translate-x-[50%] p-10 flex flex-col justify-center align-middle text-white rounded-lg gap-8">
				<div className="absolute left-0 bg-black opacity-85 w-full h-full -z-10 rounded-lg" />
				<h1 className="text-2xl">Sign In</h1>
				<input className="border border-white rounded-md px-4 py-2" type="text" placeholder="Enter your email ID"></input>
				<input className="border border-white rounded-md px-4 py-2" type="password" placeholder="Enter your password *****"></input>
				<button className="bg-red-600 rounded-md px-4 py-2 cursor-pointer" >Sign In</button>
				<p>Don't have signed up yet? Click <a className="underline cursor-pointer">here</a> to sign up</p>
			</div>
		</div>
	)
}

export default Login