import {HomePage} from '@/components/pages'


async function getHome() {
  const resHomeBanner = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bannerHome`, { cache: 'no-store' })
  const bannerData = await resHomeBanner.json()

  return [bannerData]
}


export default async function Page () {
  
  const [bannerData] = await getHome()

  return (
       <HomePage banner={bannerData}/>
  );
};