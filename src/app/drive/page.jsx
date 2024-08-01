import {DrivePage} from '@/components/pages'


async function getDrive() {
  const resModels = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/car/testdrive`, { cache: 'no-store' })
  const modelsData = await resModels.json()

  return [modelsData]
}

export default async function Page () {
  const [modelsData] = await getDrive()

  return (
      <DrivePage models={modelsData}/>
  );
};