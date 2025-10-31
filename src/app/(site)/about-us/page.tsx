import { About } from '@/components/sections/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | A&T Infracon Pvt. Ltd.',
  description: '35 years of excellence in civil engineering. Leading infrastructure development across India\'s most challenging regions with expertise in road construction, border infrastructure, and renewable energy projects.',
};

export default function AboutPage() {
  return <About />;
}