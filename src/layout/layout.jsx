"use client"
import {Footer, Navbar, ToTop} from "@/components";
import '../localization/i18n'
import {Client, HydrationProvider} from "react-hydration-provider";

const Layout = ({children}) => {
    return (
        <>
            <HydrationProvider>
                <Navbar />
                <main className={'bg-white '}>
                    {children}
                </main>
                <ToTop/>
                <Footer/>
            </HydrationProvider>
        </>
    );
};

export default Layout;