import Link from 'next/link'

function Custom404() {
    return (
    <div className="flex flex-col items-center justify-center gap-4 h-full">
        <h1 className="text-4xl font-bold text-pink-500">404 - Page Not Found</h1>
        <Link href="/" className="text-pink-500 underline">Go back to home</Link>
    </div>
    )
}

export default Custom404