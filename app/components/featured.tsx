import Image from "next/image"
import { ArrowRightIcon } from "@phosphor-icons/react"

const Featured = ({darkmode, setdarkmode}: any) => {
  return (
    <div className="bg-white dark:bg-slate-900 w-full py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group relative overflow-hidden bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-4 items-start z-10">
                <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  Best Seller
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Amartem</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Soft Gel Capsules</p>
                </div>
                <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">₦ 2,500</h1>
                
                <button className="mt-2 flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-semibold transition-all hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900">
                    Shop Now
                    <ArrowRightIcon weight="bold" />
                </button>
              </div>
              
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl transform translate-y-4"></div>
                <Image 
                  src="/amartem.png" 
                  alt="Amartem Soft Gel" 
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-4 items-start z-10">
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  New Arrival
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Amartem</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Soft Gel Capsules</p>
                </div>
                <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">₦ 2,500</h1>
                
                <button className="mt-2 flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-semibold transition-all hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-900">
                    Shop Now
                    <ArrowRightIcon weight="bold" />
                </button>
              </div>
              
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl transform translate-y-4"></div>
                <Image 
                  src="/amartem.png" 
                  alt="Amartem Soft Gel" 
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
