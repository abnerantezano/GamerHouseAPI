import React, { useEffect } from 'react'
import Carrito_vacio from '../Imagenes/carrito_vacio.png'
//PRIME REACT
import { DataView } from 'primereact/dataview';
import CompraService from '../Servicios/CompraService';

function Carrito() {

    const [productos, setProductos] = ([]);

    useEffect(() => {
        CompraService.getItems()
        .then((CompraResponse) => {
            setProductos(CompraResponse);
        })
        .catch((error) => {
            console.error(error);
        })
    })

    const listTemplate = (producto, index) => (
        <div key={index} className="w-full bg-white border border-gray-200 rounded-lg shadow m-4">
          <img className="rounded-t-lg" src="https://www.questionpro.com/blog/wp-content/uploads/2022/10/Portada-calidad-del-producto.jpg" alt="Imagen del producto" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{producto.nombre}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.descripcion}</p>
          </div>
        </div>
      );

    return (
        <div>
            <div className='bg-indigo-300 mt-20'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-10'>
                    <div className='container mx-auto flex flex-wrap items-center'>
                        <div className='w-1/2 pr-16'>
                            <h1 className='text-[#2b2164] xl:text-6xl font-bold xl:mb-3'>Tu canasta</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-16'>
                    <div className='container mx-auto flex flex-wrap items-center pt-16'>
                        <div className='w-full'>
                            {productos && productos.length === 0 ? (
                                <div className='w-full px-24 flex flex-wrap items-center justify-center '> 
                                    <img className="w-1/2" src={Carrito_vacio} alt='imagen' />
                                    <div className='w-1/2 flex flex-col items-end justify-end'>
                                    <h1 className='text-2xl mb-4 text-end'>Tu carrito de compras está vacío en este momento. ¡Agrega algunos productos y comienza a llenarlo!</h1>
                                    <a href="/productos" className='text-white bg-[#2b2164] p-3 rounded-lg xl:text-base hover:bg-[#443679] focus:ring-4 focus:ring-[#2b2164]'>Ver productos</a>
                                    </div>
                                </div>
                                ) : (
                                <DataView value={productos} className="bg-transparent" pt={{ paginator: 'bg-red-500', content: 'bg-transparent text-sm', grid: 'bg-transparent' }} itemTemplate={listTemplate} paginator paginatorClassName="bg-transparent text-gray-500" rows={5} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito
