import { ogImageSchema } from '@/lib/og'
import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 

 
const sansitSwashedBold = fetch(
    new URL("../../../../assets/fonts/SansitaSwashed-VariableFont_wght.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer())

  const image = fetch(
    new URL("../../../../assets/logo_tayo.png", import.meta.url)
  ).then((res) => res.arrayBuffer())

  

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json()
  )
  const fontBold = await sansitSwashedBold
  const imageData = await image
 

  const url = new URL(params.slug)
  const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
  const heading =
    values.heading.length > 140
      ? `${values.heading.substring(0, 140)}...`
      : values.heading

  const { mode } = values
  const paint = mode === "dark" ? "#fff" : "#000"


  const fontSize = heading.length > 30 ? "70px" : "100px"


  return new ImageResponse(
    (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background: mode === "dark" ? "black" : "white",
          }}
        >
          <div
            tw="flex leading-[1.1] font-bold tracking-tighter items-center"
            style={{
              fontFamily: "Sansit_Sawshed",
              fontWeight: "bolder",
              marginLeft: "-3px",
              fontSize: "32px",
            }}
          >
            <img width="64" height="64" src={imageData} />
            <h1 tw="pl-4">Tayo Förening</h1>
          </div>

          <div tw="flex flex-col flex-1 ">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Sansit_Sawshed", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[80px] font-bold tracking-tighter"
              style={{
                fontFamily: "Sansit_Sawshed",
                fontWeight: "bolder",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl"
              style={{ fontFamily: "sansita swashed", fontWeight: "normal" }}
            >
              Tayoforening.se
            </div>
            <div
              tw="flex items-center text-xl"
              style={{ fontFamily: "sansita swashed", fontWeight: "normal" }}
            >
              {/* <img height="86" src={image2Data} /> */}
            </div>
          </div>
        </div>
      ),
    {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Sansit_Sawshed",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
  )
}