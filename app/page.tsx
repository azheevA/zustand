"use client"
import useAppStore from "@/store/useAppStore";
import Link from "next/link";

export default function Home() {
  const cucumber = useAppStore(state => state.cucumber)
  const tomato = useAppStore(state => state.tomatos)
  return (
    <>
      <div className="bg-linear-to-tr from-[#4c53b9] via-[#fab] to-[#cfa] w-full h-full px-20 py-10">
          <div className="flex flex-col gap-20">
            <button className="w-1/4 bg-[#36789e]  h-50 rounded-2xl flex justify-center items-center">
              <Link href="/cucumbers">Огурцы</Link>
            </button>
            <button className="w-1/4 bg-[#36789e] h-50 rounded-2xl flex justify-center items-center">
              <Link href="/tomatos">Помидоры</Link>
            </button>
          </div>
          <div className="w-full mt-15 flex justify-center">
            <button className="bg-[#36789e] px-10 h-10 rounded-2xl flex justify-center items-center text-2xl" onClick={()=>alert(useAppStore.getState().cucumber + useAppStore.getState().tomatos)}>
                Сумма овощей
            </button>
          </div>
          <div className="px-20  w-full flex flex-row justify-center gap-20 mt-14">
            <div className="w-40 h-40 flex flex-col items-center text-3xl">
              <h2 className="text-4xl">Огурцы:</h2>
              <p>{cucumber}</p>
            </div>
             <div className="w-40 h-40  flex flex-col items-center text-3xl">
               <h2 className="text-4xl">Помидоры:</h2>
               <p>{tomato}</p>
            </div>
          </div>
      </div>
    </>
  );
}
