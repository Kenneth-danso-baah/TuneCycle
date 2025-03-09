import React from 'react'
import { askQuestion } from '@/lib/data'
import FrequentAskQuestionCard from '@/components/common/cards/frequent-ask-card'

function FrequentAskQuestion() {
  return (
    <div className='mb-32 leftRightSpacing'>
        <div className='flex justify-center mb-10'>
            <h1 className='text-4xl font-monoBold'>Frequently Asked Questions(FAQs)</h1>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          {askQuestion.map((item,index)=>(
            <FrequentAskQuestionCard key={index} question={item.question} answer={item.answers} />

          ))}
        </div>
    </div>
  )
}

export default FrequentAskQuestion