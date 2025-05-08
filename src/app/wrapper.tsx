"use client";

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"
import { useLenis } from "@/hooks/use-lenis";

interface Props {
    children: React.ReactNode
};

export const Wrapper = ({ children }: Props) => {
    useLenis();

    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    );
};