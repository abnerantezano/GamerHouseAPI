import React, { useState, useEffect } from 'react';
//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carrusel = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    //CAMBIA EL ITEM DEL CARRUSEL EN 5 SEGUNDOS
    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    //INTERFACE DEL CARRUSEL 

    const renderSlide = () => {
        const slide = slides[currentSlide];
        switch (slide.tipo) {
        case 'item1':
            return (
            <div className='banner1 flex flex-col items-center justify-center py-10'>
                <p className='text-white text-center text-2xl fira-sans-condensed-semibold mt-12'>{slide.titulo}</p>
                <h1 className='text-white text-center text-6xl rubik mt-4'>{slide.desc1}</h1>
                <h1 className='text-white text-center text-6xl rubik mt-4'>{slide.desc2}</h1>
                <img className="float w-4/12 m-auto " src={slide.imagenUrl} alt='Producto' />
                <a href="/registro" className='mx-auto text-white mb-10 bg-degradado p-3 rounded-lg xl:text-base hover:bg-[#443679] focus:ring-4 focus:ring-[#2b2164]'>Ver producto</a>
            </div>
            );
        case 'item2':
            return (
            <div className='banner2 flex flex-wrap items-center justify-between py-10'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-16'>
                <div className='w-8/12'>
                    <p className='text-white text-2xl fira-sans-condensed-semibold mt-12'>{slide.titulo}</p>
                    <h1 className='text-white text-6xl rubik mt-4'>{slide.desc1}</h1>
                    <h1 className='text-white text-6xl rubik mt-4 mb-6'>{slide.desc2}</h1>
                    <a href="/registro" className=' text-white mb-10 bg-degradado p-3 rounded-lg xl:text-base hover:bg-[#443679] focus:ring-4 focus:ring-[#2b2164]'>Ver producto</a>
                </div>
                <div className='w-4/12'>
                    <img className="float" src={slide.imagenUrl} alt='Producto' />
                </div>
                </div>
            </div>
            );
        case 'item3':
            return (
            <div className='banner3 flex flex-wrap items-center justify-between py-10'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-16'>
                <div className='w-6/12'>
                    <img className="float" src={slide.imagenUrl} alt='Producto' />
                </div>
                <div className='w-4/12'>
                    <p className='text-white text-2xl fira-sans-condensed-semibold mt-12'>{slide.titulo}</p>
                    <h1 className='text-white text-6xl rubik mt-4'>{slide.desc1}</h1>
                    <h1 className='text-white text-6xl rubik mt-4 mb-6'>{slide.desc2}</h1>
                    <a href="/registro" className=' text-white mb-10 bg-degradado p-3 rounded-lg xl:text-base hover:bg-[#443679] focus:ring-4 focus:ring-[#2b2164]'>Ver producto</a>
                </div>
                </div>
            </div>
            );
        default:
            return null;
        }
    };

    return (
        <div className="carrusel-container relative">
            {renderSlide()}
            <button className="prev absolute z-10 text-white left-2 top-1/2 transform -translate-y-1/2" onClick={prevSlide}>
                <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" />
            </button>
            <button className="next absolute z-10 text-white right-2 top-1/2 transform -translate-y-1/2" onClick={nextSlide}>
                <FontAwesomeIcon icon={faCircleChevronRight} size="2x" />
            </button>
        </div>
    );
};

export default Carrusel;
