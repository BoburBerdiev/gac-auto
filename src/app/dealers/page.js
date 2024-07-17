import { BannerSmall, ButtonUI, InputUI, SectionTitleCar, SelectUI } from "@/components";
const optionValues = [
  {
    title: "Ташкент", 
    id: 0,
  },
  {
    title: "Андижан", 
    id: 1,
  },
  {
    title: "Бухара", 
    id: 2,
  },
  {
    title: "Фергана", 
    id: 3,
  },
  {
    title: "Жиззах", 
    id: 4,
  },
  {
    title: "Хоразм", 
    id: 5,
  },
  {
    title: "Наманган", 
    id: 6,
  },
  {
    title: "Навоий", 
    id: 7,
  },
  {
    title: "Қашқадарё", 
    id: 8,
  },
  {
    title: "Қорақалпоғистон", 
    id: 9,
  },
  {
    title: "Самарқанд", 
    id: 10,
  },
  {
    title: "Сирдарё", 
    id: 11,
  },
  {
    title: "Сурхондарё", 
    id: 12,
  },
 
]
export default function Page() {

  return (
    <div className=" ">
     <section>
        <BannerSmall
          imgMob={"/Brandhistory-banner.jpg"}
          imgDes={"/Brandhistory-banner.jpg"}
        />
      </section>
      <div className="container-fluid  py-10  lg:pt-[55px] ">
        <SectionTitleCar title={'Стать дилером'} aboutPage={true}/>
      </div>
      <section className="py-5 md:pb-10 md:pt-10 lg:pb-20 text-currentTextBlack">
          <div className="container-fluid space-y-3">
            <h5 className="text-base font-bold md:text-xl">Общая информация</h5>
            <form>
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div>
                  <InputUI errorText={'Требуется название'} type={'text'} labelText={'Название предприятия *'} nameLabel={'companyName'} placeholder={'Название предприятия'} isError={true}/>                
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div>
                  <SelectUI nameLabel={"countries"} labelText={"  Регион / Область *"} placeholder={'Выберите регион'} errorText={" Требуется регион"} optionValues={optionValues}/>
                </div>
                <div>
                  <InputUI nameLabel={'address'} labelText={" Адрес *"} type={'text'} placeholder={'Адрес'} errorText={"Требуется адрес"}/>
                </div>
                <div>
                  <InputUI nameLabel={'countUser'} labelText={"  Численность населения *"} type={'number'} placeholder={'Численность населения'} errorText={"   Требуется численность населения"}/>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-currentRed/30 my-16 rounded"></div>
              <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
                <div>
                  <h5 className="text-base font-bold md:text-xl">
                    Прочая информация
                  </h5>
                  <InputUI errorText={'Требуется банковские реквизиты'} type={'text'} labelText={'  Банковские реквизиты *'} nameLabel={'message'} placeholder={'Банковские реквизиты *'} isTextArea={true} textAreaRows={8}/>
                </div>
                <div className="space-y-3">
                  <h5 className="text-base font-bold md:text-xl">
                    Наличие шоурума
                  </h5>
                  <div className="flex justify-between space-x-5 ">
                    <div className="w-full">
                       <InputUI nameLabel={'showroomTotalAreat'} labelText={"Общая площадь *"} type={'number'} placeholder={'кв м'} errorText={"  Требуется общая площадь"}/>
                    </div>
                    <div className={"w-full"}>
                     <InputUI nameLabel={'showroomUsableArea'} labelText={"  Полезная площадь *"} type={'number'} placeholder={'кв м'} errorText={" Требуется полезная площадь"}/>
                    </div>
                  </div>
                  <h5 className="text-base font-bold md:text-xl">
                    Наличие СТО
                  </h5>
                  <div className="flex justify-between space-x-5">
                    <div className="w-full">
                      <InputUI nameLabel={'serviceTotalArea'} labelText={"  Общая площадь *"} type={'number'} placeholder={'кв м'} errorText={"  Требуется общая площадь"}/>
                    </div>
                    <div className="w-full">
                      <InputUI nameLabel={'serviceUsableArea'} labelText={"  Полезная площадь *"} type={'number'} placeholder={'кв м'} errorText={"  Требуется полезная площадь"}/>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-currentRed/30 my-16 rounded  md:col-span-2 "></div>
                <div className="col-span-1 space-y-5 md:col-span-2">
                  <h5 className="text-base font-bold md:text-xl">
                    Наличие опыта
                  </h5>
                  <div>
                    <InputUI nameLabel={'carExperience'} labelText={"  Наличие опыта в сфере торговли автомобилями *"} type={'date'} placeholder={'Выбрать год'} errorText={"Требуется опыт периода"}/>
                  </div>
                  <div>
                    <InputUI nameLabel={'infoAboutSoldCard'} labelText={"Информация о фактически реализованных автомобилях *"} type={'text'} placeholder={'шт'} errorText={"Информация о фактическом количестве проданных автомобилей"}/>
                  </div>
                  <div>
                    <InputUI nameLabel={'salesMonth'} labelText={" Прогноз продаж в месяц *"} type={'text'} placeholder={'шт'} errorText={" Требуется продаж в месяц"}/>
                  </div>
                </div>
              </div>
              <div className="grid justify-between grid-cols-1 gap-2 md:grid-cols-5">
                <div className="flex col-span-1 gap-2 md:col-span-3 ">
                  <div>
                   <InputUI nameLabel={'contactPerson'} labelText={" Контактное лицо *"} type={'text'} placeholder={'Иван'} errorText={"Требуется контактное лицо"}/>
                  </div>
                  <div>
                    <InputUI nameLabel={'contactPhone'} labelText={"  Контактный номер"} type={'text'} placeholder={'+998 99 999 99 99'} errorText={"Требуется контактный номер"}/>
                  </div>
                </div>
                <div className="flex items-end justify-end  w-full h-full col-span-1 md:col-span-2">
                  <ButtonUI isBorderBtn={true} text={'Отправить запрос'} type={'submit'} extraStyle={'!px-7 !py-3 !text-sm !bg-borderBtn text-white'}/>
                </div>
              </div>
            </form>
          </div>
          
        </section>

    </div>
  )
}
