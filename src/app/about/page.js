import {AboutPage} from '@/components/pages'


async function getAbout() {
  // resAboutBanner
  const resAboutBanner = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, { cache: 'no-store' })
  const dataAbout = await resAboutBanner.json()

  return [dataAbout]
}


export default async function Page () {
  const [dataAbout] = await getAbout()

  return (
       <AboutPage data={dataAbout}/>
  );
};