// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Footer from "../_components/footer/Footer";
// import LiveVisualEditing from "../components/LiveVisualEditing";
// import { draftMode } from "next/headers";
// import ClientOnly from "../components/ClientOnly";
// import Navbar from "../_components/navbar/Navbar";
// import { ReactQueryProvider } from "../providers/ReactQueryProvider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tayo förening | Kvaliten är bättre än kvantiten!",
//   description: `Tayo Förening är en ideell förening som är religiöst och politiskt helt obunden. Föreningen bildades 2013.
// Föreningens ändamål är följande:
// 1. Att arbeta för samhällsfrämjande ändamål.
// 2. Stödja och främja folkbildningsanda i Borlänge genom studiecirklar, läxhjälp och kurser.
// 3. Utveckla olika idéer om samhällsutveckling och problemlösning.
// 4. Informera ungdomar och vuxna om vikten av skolgång, jobb, kultur och självständighet.
// 5. Skapa integrationsplattform för olika målgrupper i samhället, särskilt ungdomar i Borlänge.
// 6. Uppmuntra olika folkgrupper i Borlänge att skapa bättre integration.
// 7. Stödja kvinnor och nyanlända för att förbättra anställningsbarheten genom att hjälpa med körkort och svenska språket.
// 8. Uppmuntra ungdomar att fortsätta sina utbildningar.
// 9. Skapa meningsfulla fritidsaktiviteter för ungdomar.

// För mer information, kontakta föreningen via mejladress: info@tayoforening.se, tayoforeningborlange@gmail.com eller 0769075107`,
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ReactQueryProvider>
//           <Navbar />
//           <ClientOnly>
//             {children}
//             {draftMode().isEnabled && <LiveVisualEditing />}
//           </ClientOnly>
//           <Footer />
//         </ReactQueryProvider>
//       </body>
//     </html>
//   );
// }
