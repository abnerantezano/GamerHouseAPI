import React, { useState } from 'react'
//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Productos() {

    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);

    return (
        <div>
            <div className='banner1'>
                <h1>Carrusel</h1>
            </div>
            <div className='bg-white'>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-16">
                    <div className="flex flex-wrap justify-start w-full">
                        <div className="col-span-12 md:col-span-3 w-3/12">
                            <div className="box rounded-xl border border-gray-300 bg-white p-6">
                                <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                                    <p className="font-medium text-base leading-7 text-black ">Filtro de productos</p>
                                    <p
                                        className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                                        RESET</p>
                                    
                                </div>
                                <h6 className="font-medium text-base leading-7 text-black mb-5">Precio</h6>
                                <div className="flex items-center mb-5 gap-1">
                                    <div className="relative w-full">
                                        <input id="FROM" className='h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white'/>
                                    </div>
                                    <p className="px-1 font-normal text-sm leading-6 text-gray-600">a</p>
                                    <div className="relative w-full">
                                        <input id="FROM" className='h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white'/>
                                    </div>
                                </div>
                                <p className="font-medium text-sm leading-6 text-black mb-3">Categorías</p>
                                <div className="box flex flex-col gap-2">
                                    {categorias.map((categoria)=> {
                                        <div key={categoria.id} className="flex items-center">
                                            <input id="checkbox-default-1" type="checkbox" value={categoria.id} className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                            <label for="checkbox-default-1" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">{categoria.nombre}</label>
                                        </div>
                                    })}
                                    <div className="flex items-center">
                                        <input id="checkbox-default-1" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                        <label for="checkbox-default-1" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">20% or more</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="checkbox-default-2" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                        <label for="checkbox-default-2" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">30% or more</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="checkbox-default-3" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                        <label for="checkbox-default-3" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">50% or more</label>
                                    </div>
                                </div>     
                            </div>
                        </div>
                        <div className='w-9/12 px-4 grid grid-cols-3 gap-4'>
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Agregar al carrito<span><FontAwesomeIcon icon={faCartPlus} /></span></button>
                                </div>
                            </div>

                            {productos.map((producto)=> {                
                                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Productos
