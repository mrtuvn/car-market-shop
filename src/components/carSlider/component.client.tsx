'use client'
import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//import { ReactComponent as ChevronCircle } from '@/assets/icons/chevron-circled.svg'
//import { ReactComponent as ChevronSmall } from '@/assets/icons/chevron-small.svg'
import Image from 'next/image'

type Car = {
  id: string
  modelName: string
  bodyType: string
  modelType: string
  imageUrl: string
}

const CarSlider = () => {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])

  const customSlider = useRef<Slider>(null)
  const settings = {
    slidesToShow: filterData.length < 4 ? filterData.length : 4,
    dots: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filterData.length < 4 ? filterData.length : 4,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
    ],
  }

  useEffect(() => {
    fetch('./api/cars.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setFilterData(data)
      })
      .catch((e) => console.log('Error:', e))
  }, [])

  const renderFilter = () => {
    const carType = [...new Set(data.map((car: Car) => car.bodyType))]
    return (
      <select className="carfilter" onChange={carSelected} aria-label="car filter">
        <option value="All Cars">Choose Any</option>
        {carType.map((item: string) => {
          return (
            <option value={item} key={item}>
              {item.toUpperCase()}
            </option>
          )
        })}
      </select>
    )
  }

  const carSelected = (e: any) => {
    const cars = [...data]
    const filteredCars: any = cars
      .map((i: Car) => (e.target.value === i.bodyType ? i : null))
      .filter((i: any) => i !== null)

    if (filteredCars.length) {
      setFilterData(filteredCars)
    } else {
      setFilterData(cars)
    }
  }

  return (
    <div>
      <span className="mb-4 block">Filter:{renderFilter()}</span>
      <Slider ref={customSlider} {...settings}>
        {filterData.map((i: Car) => (
          <div className="flex flex-col flex-wrap items-center gap-4 p-2" key={i.id}>
            <Image
              src={i.imageUrl}
              width={220}
              height={220}
              alt="car display"
              className="car-img aspect-square w-full object-cover"
            />
            <div className="car-detail" aria-hidden="true" tabIndex={-1}>
              <p>{i.bodyType.toUpperCase()}</p>
              <div className="model-name-type">
                <h2>{i.modelName}</h2>
                <p>{i.modelType}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="button-nav flex justify-end gap-4">
        <button
          className="border-gray-400 bg-slate-900 p-4 text-white"
          aria-label="previous"
          onClick={() => customSlider?.current?.slickPrev()}
        >
          {'<'}
        </button>
        <button
          className="border-gray-400 bg-slate-900 p-4 text-white"
          aria-label="previous"
          onClick={() => customSlider?.current?.slickNext()}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default CarSlider
