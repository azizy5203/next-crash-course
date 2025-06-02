import AppBar from "../AppBar"
import AppFooter from "../AppFooter"
import React from "react"

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className="h-screen flex flex-col gap-4 overflow-auto">
      <AppBar />
      <main className="container px-4 md:px-8 lg:px-0 mx-auto flex-grow">
        {children}
      </main>
      <AppFooter />
    </div>
  )
}

export default Layout