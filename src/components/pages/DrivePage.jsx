"use client";

import { ButtonUI, ImgUI, InputUI, SelectUI, SuccessModal } from "@/components";
import apiService from "@/service/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AiOutlineLoading } from "react-icons/ai";
import InputMask from 'react-input-mask';
import { useMutation } from "react-query";
const optionsTime = [
  { name: "09:00-09:30" },
  { name: "09:30-10:00" },
  { name: "10:00-10:30" },
  { name: "10:30-11:00" },
  { name: "11:00-11:30" },
  { name: "11:30-12:00" },
  { name: "12:00-12:30" },
  { name: "12:30-13:00" },
  { name: "13:00-13:30" },
  { name: "13:30-14:00" },
  { name: "14:00-14:30" },
  { name: "14:30-15:00" },
  { name: "15:00-15:30" },
  { name: "15:30-16:00" },
  { name: "16:00-16:30" },
  { name: "16:30-17:00" },
  { name: "17:00-17:30" },
  { name: "17:30-18:00" },
  { name: "18:00-18:30" },
  { name: "18:30-19:00" },
  { name: "19:00-19:30" },
  { name: "19:30-20:00" },
];

const DrivePage = ({ models }) => {
  const navigate = useRouter()
  const { t } = useTranslation();
  const [selectModel, setSelectModel] = useState(false);
  const [successModal, setSuccessModal] = useState(false)
  useEffect(() => {
    setSelectModel(models[0]?.name);
  }, []);

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

  console.log(userPostSuccess)

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    const postData = {...data}
    userPost({url: '/testDrive', data: postData})
}

  return (
    <>
      <section className="relative h-screen bg-black">
        {models?.map(
          (image) =>
            selectModel === image?.name && (
              <>
                <div className="relative z-7 md:hidden w-full h-full">
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${image?.overviewBannerRes?.path}`}
                    fill
                    className="object-cover  "
                    alt={"test-drive"}
                  />
                </div>
                <div className="relative z-7 max-md:hidden h-full w-full">
                  <ImgUI
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${image?.overviewBannerWeb?.path}`}
                    fill
                    className="object-cover "
                    alt={"test-drive"}
                  />
                </div>
              </>
            )
        )}
        <div className="!w-full !h-full absolute top-0 left-0 right-0 bottom-0">
          <div className="container-fluid relative h-full ">
            <div className="relative z-10 w-full  h-screen pt-[7.5%]  grid grid-cols-1 md:grid-cols-5 xl:grid-cols-3 items-center">
              <div className="px-3 py-3 space-y-5 sm:py-5 sm:px-5 rounded-xl md:col-span-3 xl:col-span-1 h-fit bg-white md:cols-span-1">
                <h5 className="mb-2 text-xl font-bold md:text-2xl">
                  {t("drive.title")}
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}  className="space-y-2 sm:space-y-3">
                  <div className=" ">
                    <SelectUI
                      onChange={(e) => setSelectModel(e.target.value)}
                      register={{...register('model', {required: true})}}
                      placeholder={t("drive.chooseModel")}
                      nameLabel={"chooseModel"}
                      labelText={t("drive.chooseModel")}
                      errorText={t("drive.errorModel")}
                      optionValues={models}
                    />
                  </div>
                  <div>
                    <h5 className="mb-2 text-base font-bold md:text-xl">
                      {t("drive.chooseDealerTitle")}
                    </h5>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <SelectUI
                          register={{...register('region', {required: true})}}
                          errorText={t("drive.errorRegion")}
                          labelText={t("drive.chooseRegion")}
                          optionValues={[{ name: "Tashkent" }]}
                          nameLabel={"countries"}
                          placeholder={t("drive.chooseRegion")}
                          isError={errors.region}
                        />
                      </div>
                      <div>
                        <SelectUI
                          register={{...register('dealer', {required: true})}}
                          errorText={t("drive.errorDealer")}
                          labelText={t("drive.chooseDealer")}
                          optionValues={[{ name: "Gacmotor" }]}
                          nameLabel={"dealer"}
                          placeholder={t("drive.chooseDealer")}
                          isError={errors.dealer}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-2 text-base font-bold md:text-xl">
                      {t("drive.contractTitle")}
                    </h5>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <InputUI
                          register={...register('day', {required: true})}
                          errorText={t("drive.errorDate")}
                          nameLabel={"day"}
                          labelText={t("drive.chooseDate")}
                          type={"date"}
                          placeholder={t("drive.chooseDate")}
                          isError={errors.day}
                        />
                      </div>
                      <div>
                        <SelectUI
                          register={...register('hour', {required: true})}
                          errorText={t("drive.errorTime")}
                          labelText={t("drive.chooseTime")}
                          optionValues={optionsTime}
                          nameLabel={"hour"}
                          placeholder={t("drive.chooseTime")}
                          isError={errors.hour}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={""}>
                    <h5 className="mb-2 text-base font-bold md:text-xl">
                      {t("drive.dataTitle")}
                    </h5>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <InputUI
                          register={{...register('name', {required: true})}}
                          errorText={t("drive.errorName")}
                          nameLabel={"name"}
                          labelText={t("drive.chooseName")}
                          placeholder={t("drive.chooseName")}
                          isError={errors.name}
                        />
                      </div>
                      <div>
                      <label
                        htmlFor={'tel'}
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        {t("drive.chooseNumber")}
                      </label>
                      <InputMask
                        mask="+\9\98 (99) 999-99-99"
                        alwaysShowMask={false}
                        id={'tel'}
                        type={'text'}
                        className="bg-white border focus:bg-currentRed/5 duration-300 border-currentGray text-sm outline-none block w-full p-2.5"
                        placeholder="+998 99 999 99 99"
                        {...register("tel", {required: true})}
                      />
                      {
                        errors.tel && 
                        <span className={"text-currentRed text-xs"}>{t("drive.errorNumber")}</span>
                      }
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center ">
                    <ButtonUI
                      isBorderBtn={true}
                      text={userPostLoading ? <AiOutlineLoading className="animate-spin text-2xl"  /> : t("btn.send")}
                     
                      extraStyle={
                        "!px-7 !py-3 !text-sm !bg-borderBtn text-white"
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SuccessModal setModal={setSuccessModal} modal={successModal} />
    </>
  );
};
export default DrivePage;

