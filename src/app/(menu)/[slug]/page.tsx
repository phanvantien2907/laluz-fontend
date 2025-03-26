"use client";
import { useParams } from 'next/navigation'
import CustomBreadcrumb from '@/app/components/CustomBreadcrumb/CustomBreadcrumb';
import ContactPage from '../components/ContactPage/ContactPage';
import AboutPage from '../components/AboutPage/AboutPage';
import axios from "axios";
import { useState, useEffect } from 'react';

interface menuItem {
  id: string;
  name: string;
  url: string;
}

const Menupage = () => {
    const [menuData, setMenuData] = useState<menuItem[]>([]);
    const {slug} = useParams()

    useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/menu`)
        .then((res) => setMenuData(res.data.data))
        .catch((err) => console.error("Lỗi gọi API:", err));
    }, []);

    // hàm render menu dựa trên slug 
    const renderMenu = () => {
     switch(slug) {
      case "lien-he":
      return <ContactPage />;
      case "about-laluz":
        return <AboutPage />;
        default:
        return <p>Không tìm thấy trang</p>;
    }
    };

  return (
    <div>
    <CustomBreadcrumb />
    {renderMenu()}
    </div>
  )
}

export default Menupage
