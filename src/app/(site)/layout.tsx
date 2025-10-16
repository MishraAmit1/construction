// src/app/(site)/layout.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="bg-white min-h-[calc(100vh_-_var(--header-height)_-_var(--footer-height))]">
                {children}
            </main>
            <Footer />
        </>
    );
}