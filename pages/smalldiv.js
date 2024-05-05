import React from 'react'

function smalldiv() {
  return (
    <div>
    <div className="grid sm:grid-cols-3 border border-white w-full h-screen text-center  bg-slate-400">
     <div className="bg-[red] flex justify-center items-center ">first</div>
     <div className="bg-[lightblue] flex justify-center items-center ">second</div>
     <div className="bg-[lightgreen] flex justify-center items-center ">third</div>

    </div>
</div>
  )
}

export default smalldiv