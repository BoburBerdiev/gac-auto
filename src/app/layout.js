import { Montserrat} from "next/font/google";
import "./globals.css";
// import 'swiper/css';
import Layout from "@/layout/layout";
import Head from "next/head";
const montserrat = Montserrat({
    subsets:["cyrillic" ,"latin"] ,
    weight: ['400', '500', '600', '700'],
    variable: "--font-montserrat",
    display:'swap'
})

export const metadata = {
  title: "Gacauto",
  description: "Dealler of GacMotor in Tashkent ",
  icons: {
    icon: '/logo-gac.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={`overflow-x-hidden !font-montserrat ${montserrat.variable}`} >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
