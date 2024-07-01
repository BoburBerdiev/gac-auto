import {CardServiceCar, HomeHeaderBanner} from "@/components";
import CardIndexPage from "@/components/card-index-page";


const slider = [
    {

    }
]
export default function Home() {
  return (
      <>
          <section className={'w-full h-screen aspect-square'}>
              <HomeHeaderBanner PaginationMod={true} isHeader={true} card={false} PaginationInner={true}/>


          </section>
          <section>
              <div className="grid grid-cols-1 md:grid-cols-3">
                  <CardIndexPage header_title={'Models'} title={'Sedan'} card={false} image={'/index-page/models-3.jpg'}
                                 height={'aspect-square '} container={'container'}/>
                  <CardIndexPage header_title={'Models'} title={'SUV'} image={'/index-page/models-1.jpg'} card={false}
                                 height={'aspect-square '} container={'container'}/>
                  <CardIndexPage header_title={'Models'} title={'MPV'} image={'/index-page/models-2.jpg'} card={false}
                                 height={'aspect-square '} container={'container'}/>
              </div>
          </section>
          <section className={'aspect-video'}>
              <CardIndexPage darkPercentage={'50'} header_title={'News'} button={'Read More'}
                             image={'/index-page/news-1.jpg'} card={false}
                             height={'aspect-square md:aspect-video'} container={'container'}/>

          </section>
          <section className={'aspect-video'}>
              <CardIndexPage header_title={'Innovation'} image={'/index-page/home-innovations.jpg'}
                             subTitle={'Intelligent System'}
                             text={'The EMPOW is not merely the first sports model in the GPMA architecture; it will also ride on ADiGO’s smart driving interconnected ecosystem, as well as GAC’s All New “Mega Wave Power”.'}
                              card={false}

                             height={'aspect-square md:aspect-video'} container={'container'}/>

          </section>
          <section className={'bg-[#f5f5f5]  md:py-10 py-4'}>
              <div
                  className="container-fluid md:after:h-0 md:before:h-0 relative after:absolute after:top-0 after:h-[100%] after:w-[1px] after:left-[50%] after:translate-x-[50%] after:bg-[#e1e1e1] before:absolute before:left-[1%] before:top-[50%] before:bg-[#e1e1e1] before:h-[1px] before:translate-y-[50%] before:w-[98%] grid grid-cols-2 md:grid-cols-4  overflow-hidden">
                  <CardServiceCar isIndexPage={true}/>
                  <CardServiceCar isIndexPage={true}/>
                  <CardServiceCar isIndexPage={true}/>
                  <CardServiceCar isIndexPage={true}/>
              </div>
          </section>
      </>
  );
}
