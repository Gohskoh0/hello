import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";
import Footer from "./components/footer";

const inter = Kanit({ 
  subsets: ["latin"],
  weight: "400"
});
  

export const metadata = {
  title: "Kreenox Engineering",
  description: "Repair and Installation of AC, CCTV cameras and Electrical Appliances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      <Footer/>
        </body>
    </html>
  );
}
