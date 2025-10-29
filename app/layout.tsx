import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeToggleFAB from "@/components/site/theme-toggle-fab"

export const metadata: Metadata = {
  title: "Orangepoint Software — Web & Mobile Development",
  description: "We build fast, reliable web and mobile applications using modern stacks.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Ensure the .dark class toggles on the html element via attribute="class" */}
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
          {/* Floating toggle in bottom-right on every page */}
          <ThemeToggleFAB />
        </ThemeProvider>
      </body>
    </html>
  )
}
