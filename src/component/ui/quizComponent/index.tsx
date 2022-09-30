import React, { useState } from "react";

const index = ({ choices, HandlClickNext, Clickedchoice }: any) => {
  return (
    <>
      {choices.map((res: any, i: any) => {
        return (
          <ul key={i}>
            <li className=" h-[60px] w-[400px] flex items-center  text-blue-400 rounded-lg border-b overflow-hidden    duration-500 transition-all bg-stone-100  hover:bg-cyan-500 hover:shadow-lg hover:text-stone-50 m-2 font-mono cursor-pointer text-lg shadow-xl ">
              <div className="flex items-center gap-2 pl-3 w-full h-full ">
                <input
                  onClick={Clickedchoice}
                  id={`list-radio-license-${i}`}
                  type="radio"
                  value={res}
                  name="list-radio"
                  className="w-4 h-4 cursor-pointer bg-gray-100 border-gray-300
                      "
                />
                <label
                  htmlFor={`list-radio-license-${i}`}
                  className="py-3 ml-2 w-full  font-semibold  cursor-pointer "
                >
                  {res}
                </label>
              </div>
            </li>
          </ul>
        );
      })}
      <div className="flex justify-end ">
        <button
          onClick={HandlClickNext}
          className="p-2 rounded-lg px-10 text-stone-50 font-semibold duration-500 hover:bg-cyan-500 bg-cyan-600"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default index;