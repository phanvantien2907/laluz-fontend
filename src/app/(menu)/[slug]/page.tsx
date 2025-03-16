"use client";
import { useParams } from 'next/navigation'
import CustomBreadcrumb from '@/app/components/CustomBreadcrumb/CustomBreadcrumb';
import ContactPage from '../components/ContactPage/ContactPage';
import AboutPage from '../components/AboutPage/AboutPage';

const Menupage = () => {
    const {slug} = useParams()
  return (
    <div>
    <CustomBreadcrumb />
    {/* <ContactPage /> */}
    <AboutPage />
    </div>
  )
}

export default Menupage
