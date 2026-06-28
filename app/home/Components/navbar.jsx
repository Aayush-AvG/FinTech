import React from 'react'

const Navbar = () => {
     const links = [
                "Features",
                "Terms and Conditions",
                "About Us",
                "Contact"
              ]

const elements = [];

links.forEach((link) => {
  elements.push(<a key={link} className="hover:underline transition-all hover:scale-110 cursor-pointer duration-800"  onClick={() => console.log("clicked")}>{link}</a>)
})
  return (
    <div className="backdrop-blur-3xl h-22 w-full nav z-100 text-white items-center justify-between flex fixed overflow-hidden px-10">

              <div className="logo">
                <img src="/logo.webp" alt="Logo" className="h-20 w-20 object-cover" />
              </div>

<div className="w-full flex items-center justify-center gap-10 text-lg">
  {elements}
</div>

  <div className="user rounded-full bg-black h-15 w-15 flex items-center justify-center">
    <img src="/user.gif" alt="Profile" className="rounded-full h-14 w-14 object-cover" />
  </div>


      </div>
  )
}

export default Navbar