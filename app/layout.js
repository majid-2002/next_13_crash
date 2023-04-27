import "./globals.css";
import { Header } from "./components/Header";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "RepoVerse",
  description: "A course collection site",
  keywords: "course, collection, repo, github, git, gitlab, bitbucket",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
