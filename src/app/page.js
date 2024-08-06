import {HomePage} from '@/components/pages'


async function getHome() {
  const resHomeBanner = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bannerHome`, { cache: 'no-store' })
  const bannerData = await resHomeBanner.json()

  const resModels = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/car`, { cache: 'no-store' })
  const modelsData = await resModels.json()

  const resNewsList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, { cache: 'no-store' })
  const newsData = await resNewsList.json()
  
  const resAbout = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, { cache: 'no-store' })
  const aboutData = await resAbout.json()

  return [bannerData, modelsData, newsData ,aboutData]
}


export default async function Page () {
  
  const [bannerData, modelsData, newsData , aboutData] = await getHome()

  return (
       <HomePage banner={bannerData} ourModels={modelsData} news={newsData} about={aboutData}/>
  );
};