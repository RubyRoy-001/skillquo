import Image from "next/image"

export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src="/logo.svg" alt="loading" width={120} height={120} className="animate-pulse duration-700"></Image>
        </div>
    )
}