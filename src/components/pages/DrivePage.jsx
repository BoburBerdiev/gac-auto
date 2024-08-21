"use client";

import {ButtonUI, ImgUI, InputUI, SelectUI, SuccessModal} from "@/components";
import apiService from "@/service/axios";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {AiOutlineLoading} from "react-icons/ai";
import InputMask from 'react-input-mask';
import {useMutation} from "react-query";

const optionsTime = [
    { _id: "1", name: "09:00-09:30" },
    { _id: "2", name: "09:30-10:00" },
    { _id: "3", name: "10:00-10:30" },
    { _id: "4", name: "10:30-11:00" },
    { _id: "5", name: "11:00-11:30" },
    { _id: "6", name: "11:30-12:00" },
    { _id: "7", name: "12:00-12:30" },
    { _id: "8", name: "12:30-13:00" },
    { _id: "9", name: "13:00-13:30" },
    { _id: "10", name: "13:30-14:00" },
    { _id: "11", name: "14:00-14:30" },
    { _id: "12", name: "14:30-15:00" },
    { _id: "13", name: "15:00-15:30" },
    { _id: "14", name: "15:30-16:00" },
    { _id: "15", name: "16:00-16:30" },
    { _id: "16", name: "16:30-17:00" },
    { _id: "17", name: "17:00-17:30" },
    { _id: "18", name: "17:30-18:00" },
    { _id: "19", name: "18:00-18:30" },
    { _id: "20", name: "18:30-19:00" },
    { _id: "21", name: "19:00-19:30" },
    { _id: "22", name: "19:30-20:00" },
];

const DrivePage = ({models}) => {
    const navigate = useRouter()
    const {t} = useTranslation();
    const [selectModel, setSelectModel] = useState({});
    const [successModal, setSuccessModal] = useState(false)
    useEffect(() => {
        setSelectModel(models[0]);
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: {errors},
    } = useForm();
    const {
        mutate: userPost,
        data: userPostData,
        isLoading: userPostLoading,
        isSuccess: userPostSuccess,
    } = useMutation(({url, data}) => apiService.postData(url, data));


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


    const handleChangeModel = (car) => {
        const findSelectCar=models.find((model)=>model?.name===car)
        setSelectModel(findSelectCar)
    }

    const onSubmit = (data) => {
        const postData = {...data}
        userPost({url: '/testDrive', data: postData})
    }

    return (
        <>
            <section className={`relative h-screen bg-black`}>
                <div className="relative z-7 md:hidden w-full h-full">
                    <ImgUI
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${selectModel?.overviewBannerRes?.path}`}
                        fill
                        className="object-cover  "
                        alt={"test-drive"}
                    />
                </div>
                <div className="relative z-7 max-md:hidden h-full w-full">
                    <ImgUI
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${selectModel?.overviewBannerWeb?.path}`}
                        fill
                        className="object-cover "
                        alt={"test-drive"}
                    />
                </div>
                <div className="!w-full !h-full absolute top-0 left-0 right-0 bottom-0">
                    <div className="container-fluid relative h-full ">
                        <div
                            className="relative z-10 w-full  h-screen pt-[7.5%]  grid grid-cols-1 md:grid-cols-5 xl:grid-cols-3 items-center">
                            <div
                                className="px-3 py-3 space-y-5 sm:py-5 sm:px-5 md:col-span-3 xl:col-span-1 h-fit bg-white/60 backdrop-blur-lg	 md:cols-span-1">
                                <h5 className="mb-2 text-xl font-medium md:text-2xl">
                                    {t("drive.title")}
                                </h5>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 sm:space-y-3">
                                    <div className=" ">
                                        <SelectUI
                                            register={{...register('model', {required: true})}}
                                            placeholder={t("drive.chooseModel")}
                                            nameLabel={"chooseModel"}
                                            labelText={t("drive.chooseModel")}
                                            errorText={t("drive.errorModel")}
                                            optionValues={models}
                                            handleChangeModel={handleChangeModel}
                                            isChange={true}
                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-2 text-base font-medium md:text-xl">
                                            {t("drive.chooseDealerTitle")}
                                        </h5>
                                        <div className="grid grid-cols-2 gap-5">
                                            <div>
                                                <SelectUI
                                                    register={{...register('region', {required: true})}}
                                                    errorText={t("drive.errorRegion")}
                                                    labelText={t("drive.chooseRegion")}
                                                    optionValues={[{name: "Tashkent",_id:1}]}
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
                                                    optionValues={[{name: "Gacmotor",_id:2}]}
                                                    nameLabel={"dealer"}
                                                    placeholder={t("drive.chooseDealer")}
                                                    isError={errors.dealer}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="mb-2 text-base font-medium md:text-xl">
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
                                        <h5 className="mb-2 text-base font-medium md:text-xl">
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
                                                    <span
                                                        className={"text-currentRed text-xs"}>{t("drive.errorNumber")}</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center !pt-3 ">
                                        <ButtonUI
                                            isBorderBtn={true}
                                            text={userPostLoading ?
                                                <AiOutlineLoading className="animate-spin text-2xl"/> : t("btn.send")}

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
            <SuccessModal setModal={setSuccessModal} modal={successModal}/>
        </>
    );
};
export default DrivePage;

