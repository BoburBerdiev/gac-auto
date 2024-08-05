import { NewsIDPage} from '@/components/pages'

async function getNew(params) {
  const resNew = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${params}`, { cache: 'no-store' })
  const newData = await resNew.json()
  
  return [newData]
}

export default async function Page ({params}) {
  const [newData] = await getNew(params.newsID)
  return (
    <NewsIDPage data={newData}/>
  );
};