'use client';

import { useEffect } from 'react';
import ApproachPage from '@/components/sections/approach';

export default function AboutPage() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1);

            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const yOffset = -100;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({
                        top: y,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }, []);

    return <ApproachPage />;
}