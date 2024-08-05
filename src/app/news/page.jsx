import {NewsPage} from '@/components/pages'


async function getNews() {
  const resNewsList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, { cache: 'no-store' })
  const listData = await resNewsList.json()

  return [listData ]
}


export default async function Page () {
  
  const [listData] = await getNews()

  return (
      <NewsPage list={listData}/>
  );
};