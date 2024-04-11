import { ogImageSchema } from '@/lib/og';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export const metadata = {
  metadataBase: new URL('https://main--tayo-website-v2.netlify.app'),
};
 
const interBold = fetch(
  new URL("../../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const image = fetch(
  new URL("../../../../assets/logo-64x64.png", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://main--tayo-website-v2.netlify.app/blog/${params.slug}`).then((res) =>
    res.json()
  );

  const fontBold = await interBold;

  const url = new URL(params.slug);
  const values = ogImageSchema.parse(Object.fromEntries(url.searchParams));
  const heading =
    values.heading.length > 140
      ? `${values.heading.substring(0, 140)}...`
      : values.heading;

  const { mode } = values;
  const paint = mode === "dark" ? "#fff" : "#000";

  const fontSize = heading.length > 30 ? "70px" : "100px";

  const imageData = await image;
  const blob = new Blob([imageData]);
  const imageUrl = URL.createObjectURL(blob);
 
  return new ImageResponse(
    (<div
      tw="flex relative flex-col p-12 w-full h-full items-start"
      style={{
        color: paint,
        background: mode === "dark" ? "black" : "white",
      }}
    >
      <div
        tw="flex leading-[1.1] font-bold tracking-tighter items-center"
        style={{
          fontFamily: "Inter",
          fontWeight: "bolder",
          marginLeft: "-3px",
          fontSize: "32px",
        }}
      >
        <img width="64" height="64" src={imageUrl} />
        <h1 tw="pl-4">James Shopland</h1>
      </div>

      <div tw="flex flex-col flex-1 ">
        <div
          tw="flex text-xl uppercase font-bold tracking-tight"
          style={{ fontFamily: "Inter", fontWeight: "normal" }}
        >
          {values.type}
        </div>
        <div
          tw="flex leading-[1.1] text-[80px] font-bold tracking-tighter"
          style={{
            fontFamily: "Inter",
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
          style={{ fontFamily: "Inter", fontWeight: "normal" }}
        >
          jamesshopland.com
        </div>
        <div
          tw="flex items-center text-xl"
          style={{ fontFamily: "Inter", fontWeight: "normal" }}
        >
          <img height="86" src={imageUrl} />
        </div>
      </div>
    </div>

     
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
