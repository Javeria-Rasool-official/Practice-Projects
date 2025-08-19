import React from 'react'
import { useState,useEffect } from "react";


const Cal = () => {
    const [bill, setBill] = useState('')
    const [tip, setTip] = useState('')
    const [people, setPeople] = useState('')
    //just checking
    useEffect(() => {
        console.log('bill is',bill)
    }, [bill])
    useEffect(() => {
        console.log('tip is',tip)
    }, [tip])
   
     const handleReset = () => {
    setBill('');
    setTip('');
    setPeople('');
  };
    
    //numbers
    const billNum=parseFloat(bill)||0;
    const tipNum=parseFloat(tip)||0;
    const peopleNum=parseFloat(people)||0;
    //formulas
    const tipFraction=tipNum/100;
    const tipAmount = tipFraction * billNum;
    const total = billNum + tipAmount;
    const perPerson= peopleNum>0? total/ peopleNum :0
      const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className='bg-white rounded-lg flex p-5 h-2/3 w-1/2 gap-4'>
      <div className="left flex flex-col gap-6 text-grey-500 w-1/2 ">
        {/* total bill */}
        <p >Bill </p>
        <div className="relative">
  {/* Left item (icon/label) */}
  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 pointer-events-none">
    <img src={"public/icon-dollar.svg"} alt="" />
  </span>
        <input className='hover:border-green-400 text-right h-10 font-bold text-green-900 bg-grey-50 border-2 rounded-md w-full' type="number" value={bill} onChange={(e)=>setBill(e.target.value)}/>
        </div>
        {/* tip percentage */}
         {/* Select Tip % */}
        <p className="mb-2 font-medium">Select Tip %</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {tipOptions.map((p) => {
            const active = String(p) === String(tip);
            return (
              <button
                key={p}
                type="button"
                aria-pressed={active}
                onClick={() => setTip(String(p))}
                className={
                  "h-10 rounded-md font-semibold transition " +
                  (active
                    ? "bg-green-400 text-green-900"
                    : "bg-teal-900 text-white hover:bg-teal-800")
                }
              >
                {p}%
              </button>
            );
          })}
          {/* Custom tip input uses same `tip` state */}
          <input
            type="number"
            inputMode="numeric"
            placeholder="Custom"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            className="h-10 rounded-md border-2 bg-gray-50 text-right px-3
                       focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
         {/* number of people */}
         <p>Number of People</p>
          <div className="relative">
  {/* Left item (icon/label) */}
  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 pointer-events-none">
    <img src={"public/icon-person.svg"} alt="" />
  </span>
        <input className='hover:border-green-400 required text-right h-10 font-bold text-green-900 bg-grey-50 border-2 rounded-md w-full' type="number" value={people} onChange={(e)=>setPeople(e.target.value)}/>
        </div>
      </div>
      {/* displaying */}
      <div className="right flex flex-col justify-between w-1/2 rounded-xl p-6 bg-green-900 text-white">
  {/* Tip amount */}
  <div className="flex justify-between items-center">
    <div>
      <p className="font-medium">Tip Amount</p>
      <p className="text-sm text-teal-300">/ person</p>
    </div>
    <p className="text-3xl font-extrabold text-teal-400">${tipAmount.toFixed(2)}</p>
  </div>

  {/* Total */}
  <div className="flex justify-between items-center mt-6">
    <div>
      <p className="font-medium">Total</p>
      <p className="text-sm text-teal-300">/ person</p>
    </div>
    <p className="text-3xl font-extrabold text-teal-400">${perPerson.toFixed(2)}</p>
  </div>

  {/* Reset button */}
  <button
    onClick={handleReset}
    className="mt-auto w-full bg-green-400 hover:bg-green-400 text-green-900 font-bold py-2 rounded-md transition"
  >
    RESET
  </button>
</div>

    </div>
  )
}

export default Cal
