"use client";
import { useParams } from 'next/navigation'
import CustomBreadcrumb from '@/app/components/CustomBreadcrumb/CustomBreadcrumb';
import ContactPage from '../components/ContactPage/ContactPage';

const Menupage = () => {
    const {slug} = useParams()
  return (
    <div>
    <CustomBreadcrumb />
    <ContactPage />
    </div>
  )
}

export default Menupage
