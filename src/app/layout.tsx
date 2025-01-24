import "../styles/globals.css"
import { Wrapper } from "./wrapper"

export const metadata = {
  title: "Yurii Paraska Frontend developer",
  description: "Frontend developer | Yurii Paraska Portfolio | React | Next.js",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
