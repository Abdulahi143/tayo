// import { ogImageSchema } from '@/lib/og'
// import { ImageResponse } from 'next/og'

// // Route segment config
// export const runtime = 'edge'

// // Image metadata
// export const alt = 'About Acme'
// export const size = {
//   width: 1200,
//   height: 630,
// }

// const image = fetch(
//   new URL("../../../../assets/logo_tayo.png", import.meta.url)
// ).then((res) => res.arrayBuffer())

// // Image generation
// export default async function Image({ params }: { params: { slug: string } }) {
//   // Font
//   const interSemiBold = fetch(
//     new URL('../../../../assets/fonts/Inter-SemiBold.ttf', import.meta.url)
//   ).then((res) => res.arrayBuffer())

//   const url = new URL(params.slug)
//   const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
//   const heading =
//     values.heading.length > 140
//       ? `${values.heading.substring(0, 140)}...`
//       : values.heading

//   const { mode } = values
//   const paint = mode === "dark" ? "#fff" : "#000"
//   const imageData = await image
//   const fontSize = heading.length > 30 ? "70px" : "100px"
//   const fontBold = await interSemiBold

//   // Convert ArrayBuffer to base64 data URL
//   const imageBase64 = bufferToBase64(imageData)

//   return new ImageResponse(
//     (
//       // ImageResponse JSX element
//       <div
//         tw="flex relative flex-col p-12 w-full h-full items-start"
//         style={{
//           color: "white", // Setting text color to white
//           background: mode === "dark" ? "black" : "white",
//         }}
//       >
//         <div
//           tw="flex leading-[1.1] font-bold tracking-tighter items-center"
//           style={{
//             fontFamily: "Inter",
//             fontWeight: "bolder",
//             marginLeft: "-3px",
//             fontSize: "32px",
//           }}
//         >
//           <img width="64" height="64" src={`data:image/png;base64,${imageBase64}`} /> {/* Use data URL */}
//           <h1 tw="pl-4">Tayo Förening</h1>
//         </div>

//         <div tw="flex flex-col flex-1 ">
//           <div
//             tw="flex text-xl uppercase font-bold tracking-tight"
//             style={{ fontFamily: "Inter", fontWeight: "normal" }}
//           >
//             {values.type}
//           </div>
//           <div
//             tw="flex leading-[1.1] text-[80px] font-bold tracking-tighter"
//             style={{
//               fontFamily: "Inter",
//               fontWeight: "bolder",
//               marginLeft: "-3px",
//               fontSize,
//             }}
//           >
//             {heading}
//           </div>
//         </div>
//         <div tw="flex items-center w-full justify-between">
//           <div
//             tw="flex text-xl"
//             style={{ fontFamily: "Inter", fontWeight: "normal" }}
//           >
//             Tayoforening.se
//           </div>
//           <div
//             tw="flex items-center text-xl"
//             style={{ fontFamily: "Inter", fontWeight: "normal" }}
//           >
//             <img height="86" src={`data:image/png;base64,${imageBase64}`} /> {/* Use data URL */}
//           </div>
//         </div>
//       </div>
//     ),
//     // ImageResponse options
//     {
//       width: 1200,
//       height: 630,
//       fonts: [
//         {
//           name: "Sansit_Sawshed",
//           data: fontBold,
//           weight: 700,
//           style: "normal",
//         },
//       ],
//     }
//   )
// }

// // Function to convert ArrayBuffer to base64
// function bufferToBase64(buffer: ArrayBuffer): string {
//   const bytes = new Uint8Array(buffer)
//   let binary = ''
//   for (let i = 0; i < bytes.byteLength; i++) {
//     binary += String.fromCharCode(bytes[i])
//   }
//   return btoa(binary)
// }
