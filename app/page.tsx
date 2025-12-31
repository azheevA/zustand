"use client"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-linear-to-tr from-[#4c53b9] via-[#fab] to-[#cfa] w-full m-30 px-20 py-10">
          <div className="flex flex-col gap-20">
            <button className="w-1/4 bg-[#36789e]  h-50 rounded-2xl flex justify-center items-center">
              <Link href="/cucumbers">Огурцы</Link>
            </button>
            <button className="w-1/4 bg-[#36789e] h-50 rounded-2xl flex justify-center items-center">
              <Link href="/tomatos">Помидоры</Link>
            </button>
          </div>
      </div>
    </>
  );
}
