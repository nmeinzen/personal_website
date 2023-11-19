import React from 'react';
import { routes } from '../routes';



export const MobileMenu = (isOpen) => {
    return(
        <>
        {isOpen && (
            <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
              <ul className="grid gap-2">
                {routes.map((route) => {
                  return (
                    <li
                      key={route.title}
                      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                    >
                      <a
                        className={
                          "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                        }
                        href={route.href}
                      >
                        <span className="flex gap-1 text-lg">{route.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
            </>
    );
  
}