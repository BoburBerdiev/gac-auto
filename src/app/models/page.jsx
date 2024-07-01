import {CardCar, SectionHeaderBanner} from "@/components";

const tabsList = [
    {name:'ALL MODELS' , id:1},
    {name:'SEDAN' , id:2},
    {name:'SUV' , id:3},
    {name:'MPV' , id:4},
    {name:'NE' , id:5}

]

export default function Models() {
    return (
        <div className={'flex flex-col gap-5 md:gap-10'}>
            <section className={'w-full aspect-video'}>
                <SectionHeaderBanner/>
            </section>
            <div className="container flex flex-col gap-5 md:gap-10">
                <section>

                    <div
                        className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
                        <ul className="flex min-w-[200px] overflow-x-scroll md:overflow-x-auto  justify-between -mb-px">
                            {
                                tabsList?.map(tab => (
                                    <li key={tab?.id} className="me-2">
                                        <button
                                            className="inline-block text-nowrap uppercase relative md:text-lg leading-[30px] lg:leading-[66px] lg:text-2xl p-1 md:p-4 before:content-[''] before:absolute before:bottom-0 before:duration-300 before:bg-currentRed before:left-0 before:w-0 before:h-1 hover:before:w-full">
                                            {tab?.name}
                                        </button>
                                    </li>
                                ))
                            }



                        </ul>
            </div>


        </section>
    <section>
    <div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-y-8 lg:gap-x-20'}>
<CardCar/>
<CardCar/>
<CardCar/>
<CardCar/>
<CardCar/>
<CardCar/>
<CardCar/>
                </div>
            </section>
            </div>

        </div>
    );
}
