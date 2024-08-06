"use client"
import { BannerSmall, ButtonUI, InputUI, SectionTitleCar, SelectUI, SuccessModal } from "@/components";
import apiService from "@/service/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading } from "react-icons/ai";
import { useMutation } from "react-query";
const optionValues = [
  {
    name: "Ташкент", 
    id: 0,
  },
  {
    name: "Андижан", 
    id: 1,
  },
  {
    name: "Бухара", 
    id: 2,
  },
  {
    name: "Фергана", 
    id: 3,
  },
  {
    name: "Жиззах", 
    id: 4,
  },
  {
    name: "Хоразм", 
    id: 5,
  },
  {
    name: "Наманган", 
    id: 6,
  },
  {
    name: "Навоий", 
    id: 7,
  },
  {
    name: "Қашқадарё", 
    id: 8,
  },
  {
    name: "Қорақалпоғистон", 
    id: 9,
  },
  {
    name: "Самарқанд", 
    id: 10,
  },
  {
    name: "Сирдарё", 
    id: 11,
  },
  {
    name: "Сурхондарё", 
    id: 12,
  },
 
]
const DealersPage =() => {
  const navigate = useRouter()
  const { t } = useTranslation();
  const [successModal, setSuccessModal] = useState(false)
 
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const {
    mutate: userPost,
    data: userPostData,
    isLoading: userPostLoading,
    isSuccess: userPostSuccess,
  } = useMutation(({ url, data }) => apiService.postData(url, data));

  
  useEffect(() => {
    if (userPostSuccess) {
      reset();
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        navigate.push("/");
      }, 2000);
    }
  }, [userPostSuccess]);


  const onSubmit = (data) => {
    console.log(data);
    const postData = {...data}
    userPost({url: '/dealers', data: postData})
}

  return (
    <div className=" ">
     <section>
        <BannerSmall
          imgMob={"/Brandhistory-banner.jpg"}
          imgDes={"/Brandhistory-banner.jpg"}
        />
      </section>
      <div className="container-fluid  py-10  lg:pt-[55px] ">
        <SectionTitleCar title={t('dealers.title')} aboutPage={true}/>
      </div>
      <section className="py-5 md:pb-10 md:pt-10 lg:pb-20 text-currentTextBlack">
          <div className="container-fluid space-y-3">
            <h5 className="text-base font-bold md:text-xl">{t('dealers.allInfoTitle')}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div>
                  <InputUI  register={{...register('nameEnterprises', {required: true})}} errorText={t('dealers.errorCompany')} type={'text'} labelText={t('dealers.labelCompany')} nameLabel={'companyName'} placeholder={t('dealers.labelCompany')} isError={errors.nameEnterprises}/>                
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 mb-5">
                <div>
                  <SelectUI register={{...register('region', {required: true})}} nameLabel={"countries"} labelText={t('dealers.labelRegion')} placeholder={t('dealers.labelRegion')} errorText={t('dealers.errorRegion')} optionValues={optionValues} isError={errors.region}/>
                </div>
                <div>
                  <InputUI register={{...register('address', {required: true})}} isError={errors.address} nameLabel={'address'} labelText={t('dealers.labelAddress')} type={'text'} placeholder={t('dealers.labelAddress')} errorText={t('dealers.errorAddress')}/>
                </div>
                <div>
                  <InputUI register={{...register('countUser', {required: true})}} isError={errors.countUser} nameLabel={'countUser'} labelText={t('dealers.labelCount')} type={'number'} placeholder={t('dealers.labelCount')} errorText={t('dealers.errorCount')}/>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-currentRed/30 my-16 rounded"></div>
              <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
                <div>
                  <h5 className="text-base font-bold md:text-xl">
                    {t('dealers.otherInfoTitle')}
                  </h5>
                  <InputUI register={{...register('otherInformation', {required: true})}} isError={errors.otherInformation} errorText={t('dealers.errorBank')} type={'text'} labelText={t('dealers.labelBank')} nameLabel={'message'} placeholder={t('dealers.labelBank')} isTextArea={true} textAreaRows={8}/>
                </div>
                <div className="space-y-3">
                  <h5 className="text-base font-bold md:text-xl">
                  {t('dealers.showroomInfoTitle')}
                  </h5>
                  <div className="flex justify-between space-x-5 ">
                    <div className="w-full">
                       <InputUI  register={{...register('showroomTotalArea', {required: true})}} isError={errors.showroomTotalArea}  nameLabel={'showroomTotalArea'} labelText={t('dealers.totalArea')} type={'number'} placeholder={t('dealers.totalAreaPlaseholder')} errorText={t('dealers.errorTotalArea')}/>
                    </div>
                    <div className={"w-full"}>
                     <InputUI register={{...register('showroomUsableArea', {required: true})}} isError={errors.showroomUsableArea} nameLabel={'showroomUsableArea'} labelText={t('dealers.usableArea')} type={'number'} placeholder={t('dealers.totalAreaPlaseholder')} errorText={t('dealers.errorUsableArea')}/>
                    </div>
                  </div>
                  <h5 className="text-base font-bold md:text-xl">
                  {t('dealers.serviceInfoTitle')}
                  </h5>
                  <div className="flex justify-between space-x-5">
                    <div className="w-full">
                      <InputUI  register={{...register('serviceTotalArea', {required: true})}} isError={errors.serviceTotalArea} nameLabel={'serviceTotalArea'} labelText={t('dealers.serviceTotalArea')} type={'number'} placeholder={t('dealers.totalAreaPlaseholder')} errorText={t('dealers.errorServiceTotalArea')}/>
                    </div>
                    <div className="w-full">
                      <InputUI  register={{...register('serviceUsableArea', {required: true})}} isError={errors.serviceUsableArea} nameLabel={'serviceUsableArea'} labelText={t('dealers.serviceUsableArea')} type={'number'} placeholder={t('dealers.totalAreaPlaseholder')} errorText={t('dealers.errorServiceUsableArea')}/>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-currentRed/30 my-16 rounded  md:col-span-2 "></div>
                <div className="col-span-1 space-y-5 md:col-span-2">
                  <h5 className="text-base font-bold md:text-xl">
                  {t('dealers.experienceInfoTitle')}
                  </h5>
                  <div>
                    <InputUI register={{...register('carExperience', {required: true})}} isError={errors.carExperience} nameLabel={'carExperience'} labelText={t('dealers.carExperience')} type={'date'} errorText={t('dealers.errorCarExperience')}/>
                  </div>
                  <div>
                    <InputUI register={{...register('infoAboutSoldCard', {required: true})}} isError={errors.infoAboutSoldCard} nameLabel={'infoAboutSoldCard'} labelText={t('dealers.soldCars')} type={'text'} placeholder={t('dealers.soldCarsPlaceholder')} errorText={t('dealers.errorSoldCars')}/>
                  </div>
                  <div>
                    <InputUI register={{...register('salesMonth', {required: true})}} isError={errors.salesMonth}  nameLabel={'salesMonth'} labelText={t('dealers.salesMonth')} type={'text'} placeholder={t('dealers.soldCarsPlaceholder')} errorText={t('dealers.errorSalesMonth')}/>
                  </div>
                </div>
              </div>
              <div className="grid justify-between grid-cols-1 gap-2 md:grid-cols-5">
                <div className="flex col-span-1 gap-2 md:col-span-3 ">
                  <div>
                   <InputUI register={{...register('contactPerson', {required: true})}} isError={errors.contactPerson} nameLabel={'contactPerson'} labelText={t('dealers.contactName')} type={'text'} placeholder={t('dealers.contactNamePlaceholder')} errorText={t('dealers.errorContactName')}/>
                  </div>
                  <div>
                    <InputUI register={{...register('contactPhone', {required: true})}} isError={errors.contactPhone} nameLabel={'contactPhone'} labelText={t('dealers.contactNumber')} type={'text'} placeholder={'+998 99 999 99 99'} errorText={t('dealers.errorContactNumber')}/>
                  </div>
                </div>
                <div className="  w-full h-full col-span-2 mt-3">
                  <ButtonUI isBorderBtn={true} text={userPostLoading ? <AiOutlineLoading className="animate-spin text-2xl"  /> : t("btn.send")} type={'submit'} extraStyle={'!px-7 !py-2.5 w-full !text-sm !bg-borderBtn text-white'}/>
                </div>
              </div>
            </form>
          </div>
          
        </section>
        <SuccessModal setModal={setSuccessModal} modal={successModal} />
    </div>
  )
}
export default DealersPage