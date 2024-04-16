import React from 'react'
import StackIcon from '../assets/icons/stack-icon.svg';
import hamburger from '../assets/icons/hamburger.svg';

const Nav = () => {
  return (
    <header className="pl-10 pr-10 py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <a href="/" className='flex items-center'>
                <img 
                    src={StackIcon}
                    alt="Logo"
                    width={40}
                    height={10}
                />
                <h1 className='ml-2 text-2xl font-bold text-orange-500'>StackPedia</h1>
            </a>
            <ul className='flex-1 flex justify-end items-center gap-12 max-lg:hidden mr-10'>
                <li className='font-monserrat leading-normal text-lg text-slate-gray cursor-pointer hover:underline'>
                    <a className='hover:text-coral-red'>Technologies</a>
                </li>
                <li className='font-monserrat leading-normal text-lg text-slate-gray cursor-pointer hover:underline '>
                    <a className='hover:text-coral-red'>Stacks</a>
                </li>
            </ul>
            <div className='hidden max-lg:block'>
                <img
                    src={hamburger}
                    alt="Hamburger dropdown"
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav