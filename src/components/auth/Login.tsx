import Link from 'next/link';
import { Language, Lock, Wallet } from '@/components/icons/Icons'

export default function Login() {
  return(
    <form className="bg-[rgba(255,255,255,1)] px-10 py-6 flex flex-col items-stretch justify-between gap-4 text-[rgba(18,18,23,1)]">
      <h3 className="text-xl">Login</h3>

      <div className='flex flex-col justify-center items-center gap-1 py-4'>
        <h4>Please make sure you are visiting</h4>
        <Link href="" className="flex items-center gap-1 text-[rgba(34,197,94,1)]"> 
          <span>
            <Lock/>
          </span>
            https://graydigital.com 
        </Link>
      </div>

      <div className='flex flex-col gap-4 items-stretch'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" placeholder="Enter your email address" className='p-2.5 border border-[rgba(0,0,0,0.08)] rounded-md placeholder:text-[rgba(159,161,186,1)]' required/>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter password" className='p-2.5 border border-[rgba(0,0,0,0.08)] rounded-md placeholder:text-[rgba(159,161,186,1)]' required/>
        </div>

        <div className='flex justify-end'>
         <span className='text-[rgba(88,101,241,1)] cursor-pointer '>
           Forgot password?
          </span>
          </div>
      </div>

      <div className='flex flex-col items-stretch gap-4'>
        <button className='h-12 bg-[rgba(88,101,241,1)] text-white rounded-full'>Continue login</button>

        <div className='w-full flex justify-between items-center gap-4'>
          <div className='w-full h-px bg-[rgba(0,0,0,0.08)]'></div>
          <span className='text-xs font-light text-[rgba(100,103,138,1)]'>OR</span>
           <div className='w-full h-px bg-[rgba(0,0,0,0.08)]'></div>
        </div>

        <button className='flex justify-center items-center gap-1 h-12 bg-[rgba(50,51,70,1)] text-white rounded-full'>
          <span>
            <Wallet/>
          </span>
          Continue with wallet
        </button>

        <div className='flex justify-center items-center'>
          <p>Don&apos;t have an account? <span className='text-[rgba(88,101,241,1)] cursor-pointer'> Create an account</span></p>
        </div>
      </div>
      
      <p className='flex justify-center items-center gap-1 cursor-pointer'><span><Language/></span> Change language</p>
    </form>
  )
}