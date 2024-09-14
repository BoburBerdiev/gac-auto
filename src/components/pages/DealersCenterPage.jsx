
import dynamic from 'next/dynamic';

const ClientMap = dynamic(() => import('@/components/map'), {
  ssr: false
});

const DealersCenterPage = ({listMap}) => {
  return (
    
    <div className={'bg-black store'}>
      <div className={'w-screen relative bg-[#f5f5f5] overflow-hidden'}>
        <ClientMap list={listMap} />
      </div>
    </div>
  );
}
export default DealersCenterPage