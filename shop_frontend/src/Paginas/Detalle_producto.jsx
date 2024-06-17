import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductosService from '../Servicios/ProductosService';
//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import CompraService from '../Servicios/CompraService';

function Detalle_producto() {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        ProductosService.getProducto(id)
        .then((ProductoResponse) => {
            setProducto(ProductoResponse);
        })
        .catch((error) => {
            console.error(error);
        })
    })

    //FUNCIÓN DE AGREGAR AL CARRITO

    const AgregarCarrito = (producto) => {
        const itemsAgregar = [{
            
        }]

        CompraService.postItems(itemsAgregar)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className='bg-white mt-20'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-16 md:py-32 lg:py-64'>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                        <div className='w-5/6'>
                            <img src={producto.imagen} alt={producto.nombre}/>
                        </div>
                        <div className='w-5/6'>
                            <h1 className='font-bold text-4xl mb-4'>{producto.nombre}</h1>
                            <hr className='mb-4 w-1/6 border-1'/>
                            <p className='text-2xl mb-4'> S/ {parseFloat(producto.precio).toFixed(2)}</p>
                            <p className='font-bold text-md'>Descripción</p>
                            <p className='text-md p-2'>{producto.descripcion}</p>
                            <p className='font-bold text-sm mb-4 text-[#757575]'>Stock: {producto.stock}</p>
                            <button type="button" onClick={() => AgregarCarrito(producto)} className='mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#302568] hover:bg-[#5e4aa5] focus:ring-4 focus:ring-[#302568] focus:outline-none'>Agregar al carrito<span className='ml-2'><FontAwesomeIcon icon={faCartPlus} /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle_producto
