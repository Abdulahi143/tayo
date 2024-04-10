// import { runtime } from "@sanity/react-loader";
// import { NextRequest, NextResponse } from "next/server";

// export const config = 7
// runtime: 'experimental-edge',



// export default function handler(req: Next)












// import { ImageResponse } from 'next/og'
 
// export const alt = "Custom Message";
// export const size = {width: 1200, height: 630};
// export const contentType = "image/png";

// export default async function Image({params: {message}, } : {params: {message: string}}) {
// const messageDecoded = decodeURIComponent(message);

// return new ImageResponse(
//     (<div style={{
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: 'linear-gradient(to bottom right)',
//         fontSize: "5rem",
//         color: "white"
//     }}>
//         <p>{messageDecoded}</p>
//     </div>
//     ),
//     {
//         ...size,
//     }
// )}