"use client"
import {Footer, Navbar, ToTop} from "@/components";
import '../localization/i18n'
import { QueryClient, QueryClientProvider } from "react-query";
import {Client, HydrationProvider} from "react-hydration-provider";
import {Provider} from "react-redux";
import store, { persistor } from "@/store";

import 'swiper/css';
import 'swiper/css/pagination';
import { PersistGate } from "redux-persist/integration/react";
import { usePathname } from "next/navigation";


const Layout = ({children}) => {
    const queryClient = new QueryClient();
    const pathname = usePathname();
    return (
        <>
            <HydrationProvider>
                <QueryClientProvider client={queryClient}>
                    <Client>
                        <Provider store={store}>
                            <PersistGate loading={null} persistor={persistor}>
                                <Navbar />
                                <main className={'bg-white overflow-x-hidden'}>
                                    {children}
                                </main>
                                {
                                    pathname == '/car-sale' ?
                                    '' :
                                    <ToTop/>
                                }
                                <Footer/>
                            </PersistGate>
                        </Provider>
                    </Client>
                </QueryClientProvider>
            </HydrationProvider>
        </>
    );
};

export default Layout;