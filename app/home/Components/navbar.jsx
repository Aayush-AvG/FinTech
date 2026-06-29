"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const pathName = usePathname();


  useEffect(()=>{
    let lastScrollY = window.scrollY;
    
    const controlNav = () =>{
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY && currentScrollY >100){
        setIsVisible(false);
      }else{
        setIsVisible(true)
      }
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", controlNav)
    return() => window.removeEventListener("scroll", controlNav)


  }, [])


     const links = [
                {href: "/", label:"Features"},
                { href: "#contact", label:"About Us"},
                {href: "/terms", label:"Terms and Conditions"},
                {href: "/contact", label:"Contact"}
              ]

const elements = [];

links.forEach((link) => {
  elements.push(<a key={link.href} href={link.href} className="hover:underline transition-all hover:scale-110 cursor-pointer duration-800"  onClick={() => console.log("clicked")}>{link.label}</a>)
})
  return (
    <nav className={`backdrop-blur-3xl h-22 w-full nav z-100 text-white items-center justify-between flex fixed overflow-hidden px-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${isVisible ? "translate-y-0": "-translate-y-full"}`}>

              
              {/* LOGO */}
               <div className="md:flex w-full PC hidden">
                 <div className="logo">
                <img src="/logo.webp" alt="Logo" className="h-20 w-20 object-cover" />
              </div>


                  {/* Sections */}
<div className={`w-full flex items-center justify-center gap-10 text-lg ${pathName === links.href ? "text-blue-400" : ""}`}>
  {elements}
</div>

  <div className="user rounded-full bg-black h-15 w-15 flex items-center justify-center">
    <img src="/user.gif" alt="Profile" className="rounded-full h-14 w-14 object-cover" />
  </div>
               </div>



      <div className="md:hidden flex items-center">
        <button onClick={()=> setIsMobileMenu(!isMobileMenu)}>
          { !isMobileMenu ? (
            <BiMenu className='text-3xl'/>
          ):(
            <BiX className='text-3xl'/>
          )

          }
        </button>

      </div>


<div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenu ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
{links.map((link) =>(
  <Link key={link.href} href={link.href} onClick={()=> isMobileMenu(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${pathName === link.href ? "text-blue-400 bg-blue-50" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>
{link.label}
  </Link>
))}
  </div>
</div>


      </nav>
  )
}

export default Navbar