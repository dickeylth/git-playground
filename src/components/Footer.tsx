// footer
import { FC } from 'react';

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            Code @ {year}
          </p>
        </div>
      </div>
    </footer>
  )
}