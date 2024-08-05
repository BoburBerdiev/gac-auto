import {HomePage} from '@/components/pages'


async function getHome() {
  const resHomeBanner = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bannerHome`, { cache: 'no-store' })
  const bannerData = await resHomeBanner.json()

  const resModels = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/car`, { cache: 'no-store' })
  const modelsData = await resModels.json()

  const resNewsList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, { cache: 'no-store' })
  const newsData = await resNewsList.json()

  return [bannerData, modelsData, newsData]
}


export default async function Page () {
  
  const [bannerData, modelsData, newsData] = await getHome()

  return (
       <HomePage banner={bannerData} ourModels={modelsData} news={newsData}/>
  );
};