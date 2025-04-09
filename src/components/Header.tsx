import { FC } from 'react';

export const HeaderComponent: FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
  
}