// import { IMG_URL } from "../utils/constants"

const Header = () => {
  return (
    <div className="w-full h-14 flex justify-between py-1.5 px-10 relative">
        <div className={`fixed w-screen h-screen left-0 top-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg')] bg-cover bg-center bg-no-repeat`}>
        </div>
        <img src="./MLogo.png" className="w-2xs rounded-2xl z-1" alt="MoviePedia site logo"/>
        <div className="z-1">
            <button className="bg-red-600 px-4 py-1.5 text-white rounded-md cursor-pointer">Sign In</button>
        </div>
    </div>
  )
}

export default Header