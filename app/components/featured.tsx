import Image from "next/image"

const Featured = ({darkmode, setdarkmode}: any) => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full h-max pb-3 justify-center items-center">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
        <div className={`flex h-[250px] sm:w-max gap-8 sm:gap-2 m-5 px-5 justify-between  ${ (darkmode) ? 'bg-gray-800' : 'bg-white' } shadow-2xl items-center rounded-xl`}>
        <div className="flex  flex-col h-full  gap-3 justify-center items-start">
            <h1 className="text-lg font-bold text-green-600">₦ 2500</h1>
            <h3 className="font-extrabold text-2xl text-green-500">Amartem</h3>
            <p className="text-sm sm:text-lg">Soft Gel Capsules</p>
            <button onClick={() => {alert(darkmode)}} className="bg-green-500 p-3 sm:p-4 rounded-2xl shadow-lg hover:bg-transparent hover:tracking-wider hover:border hover:border-green-500 transition-all duration-300 ease-in-out">
                Shop Now
            </button>
        </div>
        <Image src="/amartem.png" alt="Amartem Soft Gel" width={150} height={150} layout="resposive" sizes="(max-width: 600px) 100vw, 50vw" />
      </div>
      <div className={`flex h-[250px] sm:w-max gap-8 sm:gap-2 m-5 px-5 justify-between  ${ (darkmode) ? 'bg-gray-800' : 'bg-white' } shadow-2xl items-center rounded-xl`}>
        <div className="flex  flex-col h-full  gap-3 justify-center items-start">
            <h1 className="text-lg font-bold text-green-600">₦ 2500</h1>
            <h3 className="font-extrabold text-2xl text-green-500">Amartem</h3>
            <p className="text-sm sm:text-lg">Soft Gel Capsules</p>
            <button className="bg-green-500 p-3 sm:p-4 rounded-2xl shadow-lg hover:bg-transparent hover:tracking-wider hover:border hover:border-green-500 transition-all duration-300 ease-in-out">
                Shop Now
            </button>
        </div>
        <Image src="/amartem.png" alt="Amartem Soft Gel" width={150} height={150} layout="resposive" sizes="(max-width: 600px) 100vw, 50vw" />
      </div>
      </div>
    </div>
  )
}

export default Featured
