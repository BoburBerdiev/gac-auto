import { ModelsIDPage} from '@/components/pages'
import { useParams } from 'next/navigation';

async function getModel(params) {
  const resModel = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/car/${params}`, { cache: 'no-store' })
  const modelData = await resModel.json()
  
  return [modelData]
}

export default async function Page ({params}) {
  const [modeData] = await getModel(params.modelsID)
  return (
    <ModelsIDPage data={modeData}/>
  );
};