import axios from "axios";

export const login = async (email: string, password: string) => {
    const res = await axios.post( `${process.env.NEXT_PUBLIC_SERVER_API}/api/auth/login`,  { email, password });
    return res.data;
};

export const register = async (email: string, password: string) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/auth/register`,{ email,password, password_confirmation: password, });
    return res.data;
};

export const product = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/product`);
        return res.data.data;
    } catch (err: any) {
        console.error("Lỗi gọi API:", err);
        return null;
    }
};

export const nation = async () => {
   try {
         const res = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API}`);
         const countryNames = res.data.map((country: any) => country.name.common).sort();
         return countryNames;
       } catch (err) {
         console.error("Lỗi khi fetch quốc gia:", err);
       }
}

