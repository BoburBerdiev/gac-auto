"use client";
import { useEffect, useState, useCallback } from "react";
import { CgSearch } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "react-query";
import {AnimatePresence, motion} from "framer-motion";
import apiService from "@/service/axios";
import { IoMdClose } from "react-icons/io";
import { ButtonUI, CardCar, ImgUI } from ".";

const SearchPanel = ({ search, setSearch }) => {
  const queryClient = useQueryClient();
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();
  const [searchProduct, setSearchProduct] = useState("");

  const {
    data: searchProductFiltered,
    refetch: searchProductFilteredRefetch,
    isSuccess: searchProductIsSuccess,
  } = useQuery(
    "search",
    () => apiService.getData(`/car?search=${searchProduct}`),
    {
      enabled: false,
    }
  );

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleInputChange = debounce((e) => {
    const value = e.target.value;
    if (value.length > 2) {
      setSearchProduct(value);
      setIsOpenSearch(true);
    } else {
      setSearchProduct("");
      setIsOpenSearch(false);
    }
  }, 500);

  useEffect(() => {
    if (searchProduct.length > 2) {
      searchProductFilteredRefetch();
    }
  }, [searchProduct, searchProductFilteredRefetch]);

  const closeSearchPanel = useCallback(() => {
    setIsOpenSearch(false);
  }, []);

  const routerPushClear = () => {
    reset({ search: "" });
    setSearchProduct("");
    setIsOpenSearch(false);
    queryClient.removeQueries("search");
    setSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-panel")) {
        closeSearchPanel();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [closeSearchPanel]);

  const closeSearch = () => {
    setSearch(false);
    document.body.classList.remove("overflow-hidden");
  };
  useEffect(() => {
    if (search) {
      document.body.classList.add("overflow-hidden");
    }else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [search])
  return (
    <>
      <AnimatePresence>
        {search && (
            <motion.div
                key={"search"}
                initial={{ opacity: 0, scale: 0.8, translateY: 30 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`w-screen h-screen fixed top-0 py-20 left-0 bg-black/70 z-[999] mr-1 `}
                onClick={() => closeSearch()}
            >
              <div className="container-fluid">
                <div
                    className={"max-w-[960px] mx-auto 3xl:max-w-[1270px] space-y-5"}
                    onClick={(e) => e.stopPropagation()}
                >
                  <div className={"flex justify-between items-center text-white "}>
                    <h2 className={"text-lg xl:text-2xl"}>
                      {t("search.sectionTitle")}
                    </h2>
                    <IoMdClose
                        onClick={() => closeSearch()}
                        className={"text-3xl 2xl:text-4xl cursor-pointer"}
                    />
                  </div>
                  <form
                      onSubmit={handleSubmit(() => {})}
                      className={
                        "border-2 w-full border-[#c83837] grid grid-cols-4 md:grid-cols-5"
                      }
                  >
                    <input
                        {...register("search")}
                        type="text"
                        className={
                          "w-full pl-4 bg-white font-montserrat col-span-3 text-sm md:text-base md:col-span-4 outline-none py-2 2xl:py-3"
                        }
                        placeholder={t("search.input")}
                        onChange={handleInputChange}
                        onFocus={() => setIsOpenSearch(true)}
                    />
                    <ButtonUI
                        type={"submit"}
                        isBorderBtn={true}
                        text={t("search.buttonText")}
                        extraStyle={
                          "bg-borderBtn text-white max-md:py-2 text-sm md:text-base !px-1"
                        }
                    />
                  </form>
                  {isOpenSearch && searchProductIsSuccess && (
                      <div>
                        {searchProductFiltered?.length > 0 ? (
                            <div
                                className={
                                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full h-[70vh]  overflow-y-scroll"
                                }
                            >
                              {searchProductFiltered?.map((card) => (
                                  <div
                                      key={card?._id}
                                      onClick={routerPushClear}
                                      className="h-fit"
                                  >
                                    <CardCar model={card} />
                                  </div>
                              ))}
                            </div>
                        ) : (
                            <motion.div
                                key={"searchModels"}
                                initial={{ opacity: 0, scale: 0.2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.2 }}
                                className="flex flex-col items-center "
                            >
                              <div className=" aspect-square relative w-[240px] mt-10">
                                <ImgUI src={"/no-content.png"} alt={"not found "} />
                              </div>
                              <h2 className="text-white font-bold md:text-lg text-center lg:text-xl xl:text-2xl  max-w-[700px]">
                                {t('search.notFound')}
                              </h2>
                            </motion.div>
                        )}
                      </div>
                  )}
                </div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default SearchPanel;
