import Image from "next/image";

import { remark } from 'remark';
import html from 'remark-html';
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

import PreviewTile from "@/components/previewtile";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]


export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <div>
      <ul>
          {allPostsData.map(({ id, date, title, title_image, preview_blurb}) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
              
                <PreviewTile title={title} date={date} body={preview_blurb} image_path={title_image}/>
              
              </Link>              {/* <br /> */}
            </li>
          ))}
        </ul>
    </div>
    
  );
}
