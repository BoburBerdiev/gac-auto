"use client"
import {Footer, Navbar, ToTop} from "@/components";
import '../localization/i18n'
import { QueryClient, QueryClientProvider } from "react-query";
import {Client, HydrationProvider} from "react-hydration-provider";

import 'swiper/css';
import 'swiper/css/pagination';


const Layout = ({children}) => {
    const queryClient = new QueryClient();
    return (
        <>
            <HydrationProvider>
                <QueryClientProvider client={queryClient}>
                <Client>
                    <Navbar />
                    <main className={'bg-white overflow-x-hidden'}>
                        {children}
                    </main>
                    <ToTop/>
                    <Footer/>
                </Client>
                </QueryClientProvider>
            </HydrationProvider>
        </>
    );
};

export default Layout;