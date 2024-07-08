"use client"
import {Footer, Navbar, ToTop} from "@/components";
import '../localization/i18n'


const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main className={'bg-white '}>
                {children}
            </main>
            <ToTop/>
            <Footer/>
        </>
    );
};

export default Layout;