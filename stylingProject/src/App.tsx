import { useState } from 'react'




function App() {

  const [currentState, setState] = useState(false)
  let buttonColor: string = "#FFFFFF";
  let backgroundColor: string = "#FFFFFF";


  function changeColor() {


    if (currentState) {
      buttonColor = "#359845";
      backgroundColor = "#E2FFE5";
      setState(false)


    } else {
      buttonColor = "#FFFFFF";
      backgroundColor = "#FFFFFF";
      setState(true)

    }

  }



  return (
    <div className="bg-[#d8d8d87f] h-screen w-screen m-0 font-(family-name:--v)">
      <h1>Task</h1>

      <div className="flex flex-row gap-x-0 font-family font-sans bg-white  w-100%  h-[8%] rounded-xl items-center m-20 p-5">

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
