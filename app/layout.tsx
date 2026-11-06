// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// // import ThemeToggleFAB from "@/components/site/theme-toggle-fab"
// import { Navbar } from "@/components/site/navbar"
// import { Footer } from "@/components/site/footer"

// export const metadata: Metadata = {
//   title: "Orangepoint Software — Web & Mobile Development",
//   description: "We build fast, reliable web and mobile applications using modern stacks.",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <Navbar />
//       {/* Ensure the .dark class toggles on the html element via attribute="class" */}
//       <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           <Suspense fallback={null}>{children}</Suspense>
//           <Analytics />
//           {/* Floating toggle in bottom-right on every page */}
//           {/* <ThemeToggleFAB /> */}
//         </ThemeProvider>
//       </body>
//       <Footer />
//     </html>
//   )
// }


import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// import ThemeToggleFAB from "@/components/site/theme-toggle-fab"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export const metadata: Metadata = {
  title: "OrangeDev Software — Web & Mobile Development",
  description: "We build fast, reliable web and mobile applications using modern stacks.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
  attribute="class"
  defaultTheme="light"
  forcedTheme="light"
  enableSystem={false}
  disableTransitionOnChange
>
          {/* Navbar اب body / ThemeProvider کے اندر ہے */}
          <Navbar />
          
          <Suspense fallback={null}>
            <main>{children}</main>
          </Suspense>
          
          <Analytics />
          {/* Floating toggle in bottom-right on every page */}
          {/* <ThemeToggleFAB /> */}

          {/* Footer بھی اب body / ThemeProvider کے اندر ہے */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}