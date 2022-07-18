import React from 'react'

export default function Imagegallery() {
    const img1 = "https://picsum.photos/200/300"
    const img2 = "https://picsum.photos/200"
    const img3 = "https://picsum.photos/300/200";
    const link = "https://oj.masaischool.com/problem"

  return (
    <div>
       < img src={img1} alt=" " />
       < img src={img2} alt=" " />
       < img src={img3} alt=" " />
        <a href={link} target="_masai">
        < img src={img2} alt=" " />
        </a>
       

    </div>
  )
}
