import { HassleFreeIcon, MoneyBackGuaranteeIcon, MonthlySubscriptionIcon } from '@/icons'
import React from 'react'

function Feature({
  Icon,
  children
}: {
  Icon: React.ElementType,
  children: React.ReactNode
}) {
  return (
    <div className='flex self-start gap-5'>
      <Icon className="w-8 h-8 lg:w-12 lg:h-12" />
      <p className='text-lg text-left font-bold'>
        {children}
      </p>
    </div>
  )
}

export default function Features() {
  return (
    <div className='max-w-5xl w-auto pt-15 pb-8 m-auto px-16'>
      <div className='grid grid-flow-row gap-6 lg:grid-flow-col items-center m-auto'>
        <Feature Icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature Icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature Icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </div>
    </div>
  )
}