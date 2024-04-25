import Image from 'next/image'


export default function PreviewTile({title, date, body, image_path}: {title: string, body: string, image_path: string}) {
    return (
        <div className = "flex flex-col text-center justify-center items-center p-6 border-2 bg-gradient-to-t from-gray-300 to-gray-200 border-gray-300 shadow-lg">
            <Image
                src={image_path}
                width = {75}
                height = {75}
                alt = "logo"
                >

            </Image>
            <h1 className = "text-center text-3xl">{title}</h1>
            <p className = "text-center text-lg">{date}</p>
            <p className = "text-center text-lg">{body}</p>
        </div>
    )
}
