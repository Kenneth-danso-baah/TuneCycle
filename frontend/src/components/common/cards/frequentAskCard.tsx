

function FrequentAskQuestionCard({question,answer}:{question:string;answer:string}) {
    return (
      <div className='bg-[#1F2231] py-3 space-y-20 p-3 text-[20px] font-bold'>
          <div className='space-y-3'>
              <h1>Question:</h1>
              <p>{question}</p>
          </div>
          
          <div className='space-y-3'>
              <h1>Answer</h1>
              <p>{answer}</p>
          </div>
  
      </div>
    )
  }
  
  export default FrequentAskQuestionCard