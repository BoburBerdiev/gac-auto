
"use client"
import { ButtonUI, CardCar, SectionHeaderBanner } from "@/components";
import { langSelect } from "@/helper";
import apiService from "@/service/axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "react-query";



const ModelsPage = ({banner, filterBtns}) => {
  const [tabActive , setTabActive] = useState('all')
  const {t, i18n} = useTranslation()
  const [query , setQuery] = useState()
  const [scrollQuery , setScrollQuery] = useState(1)
  const [productInfinity, setProductInfinity] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const {
    data: modelsData,
    refetch: modelsRefetch,
    isSuccess: modelsIsSucces,
  } = useQuery( "filter", () => apiService.getData(tabActive === 'all' ? `/car?pageSize=8&pageNumber=${scrollQuery}` : `/car?category=${query}&pageSize=8&pageNumber=${scrollQuery}`),{ enabled: false, }
  );

  useEffect(() => {
    modelsRefetch()
  }, [query, tabActive])

  useEffect(() => {
    if (query !== null && scrollQuery === 1) {
        modelsRefetch()
    }
}, [query, scrollQuery]);
  
  const handleTab = (tabQuery , idx) => {
    setProductInfinity([])
    setQuery(tabQuery)
    setTabActive(idx)
    setScrollQuery(1)
  }

  const handleAllTab = () => {
    setTabActive('all')
    setScrollQuery(1)
  }
  useEffect(() => {
    if (modelsIsSucces) {
        if (scrollQuery === 1) {
            setProductInfinity([...modelsData])

            if (modelsData?.length > 0) {
                setHasMore(true)
            }
        } else {
            setProductInfinity([...productInfinity, ...modelsData])
        }
        if (!modelsData?.length > 0) {
            setHasMore(false)
        } else {
            setScrollQuery(prop => prop + 1)
            setHasMore(true)
        }
    }
}, [modelsData])


  return (
    <div className={"flex flex-col gap-5 md:gap-10"}>
      <section className={"w-full aspect-[16/14] lg:aspect-[16/6]"}>
        <SectionHeaderBanner list={banner} />
      </section>
      <div className="container flex flex-col gap-5 md:gap-10 pb-[30px] xl:pb-[75px] 2xl:pb-[85px] 3xl:pb-[110px]">
        <section>
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
            <ul className="flex min-w-[200px] overflow-x-scroll md:overflow-x-auto  justify-between -mb-px">
             <li  className="me-2">
                  <button
                    onClick={() => handleAllTab()}
                    className={`inline-block text-nowrap hover:text-currentRed uppercase relative md:text-lg leading-[30px] lg:leading-[66px] lg:text-2xl p-1 md:p-4 before:content-[''] before:absolute before:bottom-0 before:duration-300 before:bg-currentRed before:left-0 before:w-0 before:h-1 hover:before:w-full ${
                      tabActive === 'all' ? "text-currentRed before:w-full" : ""
                    }`}
                  >
                   {t('models.all')}
                  </button>
                  </li>

              {filterBtns?.map((tab, idx) => (
                <li key={tab?._id} className="me-2">
                  <button
                    onClick={() => handleTab(tab?._id , idx)}
                    className={`inline-block text-nowrap hover:text-currentRed uppercase relative md:text-lg leading-[30px] lg:leading-[66px] lg:text-2xl p-1 md:p-4 before:content-[''] before:absolute before:bottom-0 before:duration-300 before:bg-currentRed before:left-0 before:w-0 before:h-1 hover:before:w-full 
                    ${
                      tabActive === idx ? "text-currentRed before:w-full" : ""
                    } `}
                  >
                    {langSelect(i18n.language, tab?.nameRu , tab?.nameUz)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <InfiniteScroll 
            hasMore={hasMore}
            next={modelsRefetch}
            className={'w-full'}
            dataLength={productInfinity?.count || []}
            loader={<div className={'flex w-full justify-center items-center mt-5 mb-3'}><ButtonUI
                                    text={<AiOutlineLoading3Quarters
                                        className={'animate-spin '}/>}> </ButtonUI></div>}
          >
          <div
            className={"grid grid-cols-1 w-full md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-4 md:gap-8 lg:gap-10"}>
                { 
                    productInfinity?.map(car => (
                      <CardCar model={car} key={car?._id}/>
                    ))
                }
          </div>
          </InfiniteScroll>
          
        </section>
      </div>
    </div>
  );
}


export default ModelsPage