import Image from 'next/image'
import Link from 'next/link'


export default function PreviewTile({id, category, title, date, body, image_path}: {id: string, category: string, title: string, body: string, image_path: string}) {
    return (
        <Link href={`/reviews/${category}/${id}`}>
            <div className = "flex flex-col text-wrap justify-start truncate w-full h-full p-6 border-2 bg-gradient-to-t from-gray-300 to-gray-200 border-gray-300 shadow-lg hover:to-gray-300 hover:border-gray-300 hover:shadow-xl">
                    <Image
                        className = "self-center"
                        src={image_path}
                        width = {80}
                        height = {60}
                        alt = "logo"
                        >

                    </Image>
                    <div className="bg-[url('/images/test_image.jpg')]"></div>
                    <h1 className = "text-center text-xl font-bold">{title}
                        <p className = "text-center text-sm">{date}</p>
                    </h1>
                    <p className = "text-center text-sm">{body}</p>                    
            </div>
        </Link>
    )
}
