import { useRef } from "react"
import { CiImageOn, CiVideoOn } from "react-icons/ci"
import { FaRegFileAudio } from "react-icons/fa"
import { Link } from "react-router-dom"

const App = () => {
  const ref = useRef(null)
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-full">
      <div className="flex justify-between gap-10 w-full h-screen items-center">
        <div>
          <h1 className="text-6xl font-bold">KompresKu.co</h1>
          <p className="mt-2 text-xl">Solusi kompresi untuk gambar, audio dan video</p>
          <button className="mt-6 px-4 py-2 rounded-lg bg-green-500 text-white" onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
        </div>
        <img src="/Computer.svg" alt="" className="w-[600px]" />
      </div>
      <h1 className="text-center text-6xl font-bold mb-20">Pilih Opsi Kompresi</h1>
      <div className="flex  justify-between gap-5 w-full px-6 mb-36 h-full" ref={ref}>
        <Link to={'/image'} className="flex flex-col gap-4 justify-center items-center px-10 py-20 border-dashed border-2 border-black rounded-lg h-[430px] hover:border-blue-500 transition-all duration-150 cursor-pointer hover:bg-blue-100">
          <h1 className="text-3xl  transition-all duration-150">Image Processing</h1>
          <CiImageOn className="text-6xl" />
        </Link>
        <Link to={'/audio'} className="flex flex-col gap-4 justify-center items-center px-10 py-20 border-dashed border-2 border-black rounded-lg h-[430px] hover:border-blue-500 transition-all duration-150 cursor-pointer hover:bg-blue-100">
          <h1 className="text-3xl">Audio Processing</h1>
          <FaRegFileAudio className="text-4xl" />
        </Link>
        <Link to={'/video'} className="flex flex-col gap-4 justify-center items-center px-10 py-20 border-dashed border-2 border-black rounded-lg h-[430px] hover:border-blue-500 transition-all duration-150 cursor-pointer hover:bg-blue-100">
          <h1 className="text-3xl">Video Processing</h1>
          <CiVideoOn className="text-6xl" />
        </Link>
      </div>
    </div>
  )
}

export default App