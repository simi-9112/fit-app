import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <div className='flex items-center gap-2 justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:tex-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx auto '>{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const {goal, setGoal,muscles, setMuscles,poison, setPoison,updateWorkout}=props

  const [showModal, setShowModal] = useState()




  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
        setMuscles(muscles.filter(val => val !== muscleGroup))
        return
    }

   

    if (muscles.length > 2) {
        return
    }

    if (poison !== 'individual') {
        setMuscles([muscleGroup])
        setShowModal(false)
        return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setShowModal(false)
    }

}

  return (
    <>
      <SectionWrapper header={"generate your workout"}
        title={['It\'s', 'Huge', 'o\'clock']}
      >
        <Header index={'01'} title={"Pick Your Poison"} description={"Select the workout plan u want to follow"} />
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 my-10'>
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return (
              <button onClick={() => {
                setMuscles([])
                setPoison(type)
              }} className={'bg-slate-950 border border-blue-400 duration-200 rounded-lg  hover:border-blue-600 py-3 ' + (type === poison ? 'border-blue-600' : 'border-blue-400')} key={typeIndex}>
                <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
              </button>
            )
          })}
        </div>
        <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
        <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col my-7'>
          <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
            <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
            <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
          </button>
          {showModal && (
            <div className='flex flex-col px-3 pb-3'>
              {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button onClick={() => {
                    updateMuscles(muscleGroup)
                  }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                  </button>
                )
              })}
            </div>
          )}
          </div>
          <Header index={'03'} title={"Become Juggernaut"} description={"Select your ultimate objective."} />
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-10'>
            {Object.keys(SCHEMES).map((scheme, typeScheme) => {
              return (
                <button onClick={() => {
                  setGoal(scheme)
                }} className={'bg-slate-950 border border-blue-400 duration-200 py-3 rounded-lg hover:border-blue-600 ' + (scheme === goal ? 'border-blue-600' : 'border-blue-400')} key={typeScheme}>
                  <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
                </button>
              )
            })}
          
          </div>
          <div className='flex flex-col mx-auto my-4'>
          <Button func ={updateWorkout} text={"Formulate"}></Button>
          </div>

          
      </SectionWrapper>
      
    </>
  )
}
