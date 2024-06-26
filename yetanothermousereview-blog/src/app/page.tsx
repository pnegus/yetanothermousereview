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
      <div className = "grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
          {allPostsData.map(({ id, category, date, title, title_image, preview_blurb}) => (
            <div key={id}>
              
                <PreviewTile id = {id} category = {category} title={title} date={date} body={preview_blurb} image_path={title_image}/>
              
            </div>
          ))}
        </div>
    </div>
    
  );
}
