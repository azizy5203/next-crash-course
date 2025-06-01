import AppBar from "../AppBar"
import React from "react"

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className="h-screen flex flex-col gap-4">
    <AppBar />
    <div className="flex-1 px-4">
    {children}
    </div>
  </div>
  )
}

export default Layout