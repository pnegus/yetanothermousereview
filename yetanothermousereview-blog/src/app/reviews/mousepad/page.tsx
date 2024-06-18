import Image from "next/image";

import PreviewTile from "@/components/previewtile";
import { getSortedPostsData } from '@/lib/posts'


type AllPostsData = {
  date: string
  title: string
  id: string
}[]
export default function MousepadReviewsPage() {
  const allPostsData: AllPostsData = getSortedPostsData("mousepad")

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
