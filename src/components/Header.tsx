import { IMG_URL } from "../utils/constants"

const Header = () => {
  return (
    <div className="w-full h-14 flex justify-between py-1.5 px-10 relative">
        <div className={`fixed w-screen h-screen left-0 top-0 bg-[url('${IMG_URL}')] bg-cover bg-center bg-no-repeat h-screen`}>
        </div>
        <img src="./MLogo.png" className="w-2xs rounded-2xl z-1" alt="MoviePedia site logo"/>
        <div className="z-1">
            <button className="bg-red-600 px-4 py-1.5 text-white rounded-md cursor-pointer">Sign In</button>
        </div>
    </div>
  )
}

export default Header