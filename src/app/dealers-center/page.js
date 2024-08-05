import {DealersCenterPage} from '@/components/pages'


async function getMap() {
  const resMap = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/map`, { cache: 'no-store' })
  const mapData = await resMap.json()

  return [mapData]
}

export default async function Page () {
  const [mapData] = await getMap()
  return (
      <DealersCenterPage listMap={mapData}/>
  );
};