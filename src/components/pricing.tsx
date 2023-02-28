import { CheckIcon } from '@/icons'
import React from 'react'

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='flex self-start gap-5'
    >
      <CheckIcon className='w-5.5 shrink-0' />
      <p className="text-left">{children}</p>
    </div>
  )
}

export default function Pricing() {
  return (
    <section className='-mt-40 mx-6'>
      <div className="max-w-994 m-auto rounded-xl overflow-hidden shadow-xl text-center">
        <div className="grid md:grid-flow-col lg:grid-flow-col sm:grid-flow-row">
          <div className='bg-gray-100 p-10 lg:p-15 grid grid-rows-4'>
            <h1 className='text-2xl font-extrabold'>
              Premium PRO
            </h1>
            <h3 className='font-extrabold text-5xl min-[992px]:text-6xl'>
              $329
            </h3>
            <p className='text-gray-900 text-lg font-medium'>
              billed just once
            </p>
            <button className='place-self-center bg-purple.600 text-white lg:w-80 max-md:w-80 md:w-40 max-sm:w-full h-full text-lg rounded-lg font-bold'>
              Get Started
            </button>
          </div>
          <div className='p-8 lg:p-15 text-lg bg-white grid grid-rows-1 gap-4'>
            <p className='text-left'>
              Access these features when you get this pricing package for your
              business.
            </p>
            <div className='grid grid-rows-4 gap-5 pt-1.5'>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
