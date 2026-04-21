import { useEffect, useState } from "react"

const ImageCarousel = () => {
  const images = ["image-product-1","image-product-2","image-product-3","image-product-4"]
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(()=>{

    const intervalId = setInterval(()=>{     
      setCurrentIdx(prev => (prev + 1) % images.length)
    },5000)

    return () => clearInterval(intervalId)
  },[])

  return (
    <div className="imageCarousel">
        <img src={`/images/${images[currentIdx]}.jpg`} alt="Selected Image" />

        <div className="imageSelector">
        {   images.map((image, idx) => 
            <button 
                disabled={idx === currentIdx} 
                onClick={()=>setCurrentIdx(idx)} 
            >
                <img src={`/images/${image}-thumbnail.jpg`} />
            </button> 
        ) }
        </div>
    </div>
  )
}

export default ImageCarousel