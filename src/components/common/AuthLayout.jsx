import logo from "../../assets/logo.png"
import authBG from "../../assets/auth-bg.png"

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-8">

      <div className="absolute inset-0 z-0">
        <img src={authBG} alt="Background" className="w-full h-full object-cover" />
      </div>

      <div className="bg-black/10 backdrop-blur-xl rounded-lg shadow-lg overflow-hidden z-10 w-full max-w-5xl mx-4 flex">
        <div className="w-0 md:w-1/2 bg-transparent flex flex-col items-center justify-center relative p-8">
          <img src={logo} alt="logo" className="mx-auto w-40 h-40"/>
          <div className="hidden md:block absolute right-0 top-10 bottom-10 w-px bg-red-500 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:-right-1 after:top-0 before:content-[''] before:absolute before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:-right-1 before:bottom-0"></div>
        </div>

        {/* content */}
        <div className="w-full md:w-1/2 p-8">{children}</div>
      </div>
    </div>
  )
}

export default AuthLayout

