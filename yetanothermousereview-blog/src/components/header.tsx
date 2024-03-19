import Image from 'next/image'


export default function Header() {
    return (
        <div className = "flex flex-row justify-center items-center pb-2 pt-2 pr-12">
            <Image
                src="/logo.png"
                width = {75}
                height = {75}
                alt = "logo"
                >

            </Image>
            <h1 className = "text-center text-3xl">Yet Another Mouse Review</h1>
        </div>
    )
}
