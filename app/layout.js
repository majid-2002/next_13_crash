import "./globals.css";
import { Poppins } from "next/font/google";
import { Header } from "./components/Header";

const poppins = Poppins({
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
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
