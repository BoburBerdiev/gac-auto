import {ModelsPage} from '@/components/pages'


async function getModels() {
  const resModelsBanner = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bannerCategory`, { cache: 'no-store' })
  const bannerData = await resModelsBanner.json()

  const resModelsCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, { cache: 'no-store' })
  const categorysData = await resModelsCategory.json()

  return [bannerData , categorysData]
}


export default async function Page () {
  
  const [bannerData, categorysData] = await getModels()

  return (
      <ModelsPage banner={bannerData} filterBtns={categorysData}/>
  );
};