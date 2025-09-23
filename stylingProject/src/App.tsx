import { useState } from 'react'




function App() {

  const [[buttonColor, backgroundColor], setState] = useState(["#FFFFFF", "#FFFFFF"])



  function changeColor() {


    if (buttonColor === "#FFFFFF") {

      setState(["#359845", "#E2FFE5"])



    } else {

      setState(["#FFFFFF", "#FFFFFF"])


    }

  }



  return (
    <div className="flex flex-col gap-0 bg-[#d8d8d87f] h-screen w-screen m-0 font-(family-name:--v) ">
      <h1 className="mt-10 mb-10 ml-20 text-7xl">Task</h1>

      <div style={{ backgroundColor: backgroundColor }} className="flex flex-row gap-x-0 font-family font-san  w-100%  h-[8%] rounded-xl items-center mr-20 ml-20 m-t-5 m-b-5  p-5">

        <div className=" h-full w-1/8 flex flex-row items-center justify-center ">

          <div style={{ backgroundColor: buttonColor }} onClick={changeColor} className="box-border border h-[40%] aspect-square border-gray-400  rounded-xl "></div>

        </div>

        <div className="flex flex-col gap-y-4 ">

          <div className="text-4xl">Sweep the Kitchen</div>

          <div className="text-xl">Get under the cabinets, do a good job</div>


        </div>


      </div>

    </div >

  )
}

export default App
