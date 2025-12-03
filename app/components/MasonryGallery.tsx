"use client"

import Image from "next/image"

interface MasonryPhoto {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

const photos: MasonryPhoto[] = [
  {
    id: "1",
    src: "/sunset/IMG_0724.JPG",
    alt: "Sunset photography",
    width: 300,
    height: 400,
  },
  {
    id: "2",
    src: "/sunset/IMG_0725.JPG",
    alt: "Sunset photography",
    width: 400,
    height: 500,
  },
  {
    id: "3",
    src: "/sunset/IMG_0728.JPG",
    alt: "Sunset photography",
    width: 350,
    height: 450,
  },
  {
    id: "4",
    src: "/sunset/IMG_0729.JPG",
    alt: "Sunset photography",
    width: 340,
    height: 380,
  },
  {
    id: "5",
    src: "/sunset/IMG_0740.JPG",
    alt: "Sunset photography",
    width: 360,
    height: 520,
  },
  {
    id: "6",
    src: "/sunset/IMG_1703.JPG",
    alt: "Sunset photography",
    width: 380,
    height: 420,
  },
  {
    id: "7",
    src: "/sunset/IMG_1741.JPG",
    alt: "Sunset photography",
    width: 320,
    height: 390,
  },
  {
    id: "8",
    src: "/sunset/IMG_1854.JPG",
    alt: "Sunset photography",
    width: 340,
    height: 480,
  },
  {
    id: "9",
    src: "/sunset/IMG_2016.JPG",
    alt: "Sunset photography",
    width: 380,
    height: 460,
  },
  {
    id: "10",
    src: "/sunset/IMG_2061.JPG",
    alt: "Sunset photography",
    width: 300,
    height: 400,
  },
  {
    id: "11",
    src: "/sunset/IMG_2074.JPG",
    alt: "Sunset photography",
    width: 400,
    height: 500,
  },
  {
    id: "12",
    src: "/sunset/IMG_2118.JPG",
    alt: "Sunset photography",
    width: 350,
    height: 450,
  },
  {
    id: "13",
    src: "/sunset/IMG_2341.JPG",
    alt: "Sunset photography",
    width: 340,
    height: 380,
  },
  {
    id: "14",
    src: "/sunset/IMG_2345.JPG",
    alt: "Sunset photography",
    width: 360,
    height: 520,
  },
  {
    id: "15",
    src: "/sunset/IMG_2454.JPG",
    alt: "Sunset photography",
    width: 380,
    height: 420,
  },
  {
    id: "16",
    src: "/sunset/IMG_2606.JPG",
    alt: "Sunset photography",
    width: 320,
    height: 390,
  },
  {
    id: "17",
    src: "/sunset/IMG_2725.jpg",
    alt: "Sunset photography",
    width: 340,
    height: 480,
  },
  {
    id: "18",
    src: "/sunset/IMG_2989.jpg",
    alt: "Sunset photography",
    width: 380,
    height: 460,
  },
  {
    id: "19",
    src: "/sunset/IMG_3387.jpg",
    alt: "Sunset photography",
    width: 300,
    height: 400,
  },
  {
    id: "20",
    src: "/sunset/IMG_3936.jpg",
    alt: "Sunset photography",
    width: 400,
    height: 500,
  },
  {
    id: "21",
    src: "/sunset/IMG_4023.JPG",
    alt: "Sunset photography",
    width: 350,
    height: 450,
  },
  {
    id: "22",
    src: "/sunset/IMG_4075.JPG",
    alt: "Sunset photography",
    width: 340,
    height: 380,
  },
  {
    id: "23",
    src: "/sunset/IMG_4330.jpg",
    alt: "Sunset photography",
    width: 360,
    height: 520,
  },
  {
    id: "24",
    src: "/sunset/IMG_4336.jpg",
    alt: "Sunset photography",
    width: 380,
    height: 420,
  },
  {
    id: "25",
    src: "/sunset/IMG_5191.JPG",
    alt: "Sunset photography",
    width: 320,
    height: 390,
  },
  {
    id: "26",
    src: "/sunset/IMG_6077.jpg",
    alt: "Sunset photography",
    width: 340,
    height: 480,
  },
  {
    id: "27",
    src: "/sunset/IMG_6100.JPG",
    alt: "Sunset photography",
    width: 380,
    height: 460,
  },
  {
    id: "28",
    src: "/sunset/IMG_6142.jpg",
    alt: "Sunset photography",
    width: 300,
    height: 400,
  },
  {
    id: "29",
    src: "/sunset/IMG_6224.JPG",
    alt: "Sunset photography",
    width: 400,
    height: 500,
  },
  {
    id: "30",
    src: "/sunset/IMG_6702.jpg",
    alt: "Sunset photography",
    width: 350,
    height: 450,
  },
  {
    id: "31",
    src: "/sunset/IMG_6708.JPG",
    alt: "Sunset photography",
    width: 340,
    height: 380,
  },
  {
    id: "32",
    src: "/sunset/IMG_7600.JPG",
    alt: "Sunset photography",
    width: 360,
    height: 520,
  },
  {
    id: "33",
    src: "/sunset/IMG_8196.JPG",
    alt: "Sunset photography",
    width: 380,
    height: 420,
  },
  {
    id: "34",
    src: "/sunset/IMG_8319.jpg",
    alt: "Sunset photography",
    width: 320,
    height: 390,
  },
  {
    id: "35",
    src: "/sunset/IMG_9778.JPG",
    alt: "Sunset photography",
    width: 340,
    height: 480,
  },
  {
    id: "36",
    src: "/sunset/IMG_9995.JPG",
    alt: "Sunset photography",
    width: 380,
    height: 460,
  },
]

export function MasonryGallery() {
  return (
    <div className="w-full px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-6 overflow-hidden rounded-lg bg-muted hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={false}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

