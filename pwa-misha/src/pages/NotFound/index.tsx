import React from "react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mx-5">
        <h1 className="font-['playwrite'] text-4xl">Error</h1>
        <h1 className="font-['playfair'] text-9xl pb-9 -mt-5">404</h1>
        <h2 className="font-['playfair'] font-bold italic text-2xl pt-9">Oops!</h2>
        <p className="font-['playfair'] text-lg pt-1 pb-10 px-3">discovering something that doesn't exist</p>

        <a href="/" className="pt-10 text-2xl">
          <button>Home</button>
        </a>
    </div>
  )
}