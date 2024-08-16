"use client"
import {Footer, Navbar, ToTop} from "@/components";
import '../localization/i18n'
import { QueryClient, QueryClientProvider } from "react-query";
import {Client, HydrationProvider} from "react-hydration-provider";

import 'swiper/css';

const Layout = ({children}) => {
    const queryClient = new QueryClient();
    return (
        <>
            <HydrationProvider>
                <QueryClientProvider client={queryClient}>
                <Client>
                    <Navbar />
                    <main className={'bg-white '}>
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