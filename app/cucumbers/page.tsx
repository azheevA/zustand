"use client"
import useAppStore from '@/store/useAppStore'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const cucumbers = useAppStore(state => state.cucumber)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const incrementCucumber = useAppStore(state => state.incrementCucumber)
    return (
    <>  
        <div className='w-full h-50 '>
            <button className='bg-[#36789e] m-10 p-2 rounded-lg'>
            <Link href="/">Назад к главной</Link>
        </button>
        </div>
        <div className='w-full h-50 flex justify-center items-center'>
            <h1 className='text-5xl font-bold uppercase'>Огурцыыыы!</h1>
        </div>
        <p className='mx-auto text-2xl'>Огурцы: {cucumbers}</p>
        <div className='w-full h-150 flex flex-col justify-center items-center gap-10'>
            <input placeholder='__________' ref={inputRef} type="number" className='border-2 border-white rounded-lg p-2'/>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg' 
            onClick={() => {
                const value = inputRef.current?.value
                if (value) {
                    useAppStore.getState().setCucumber(Number(value))
                }
            }}>Добавить огурцы</button>
            <button>
                <span className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => {
                    incrementCucumber()
                }}>Увеличить огурцы на 1</span>
            </button>
        </div>
    </>
  )
}
