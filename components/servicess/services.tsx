import { useTranslation } from "next-i18next";
import { useAppSelector } from "@/store/store";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import Button from "@/ui/button";
import { useEffect } from 'react';
import { fetchServices } from "./servicesSlice";

const Services: React.FC = () => {
    const data = useAppSelector(state => state.services.services);
    const dispatch = useAppDispatch();
    const {t} = useTranslation('main');
    
    useEffect(() => {
     dispatch(fetchServices())
    },[])

    return (
        <section className="pt-[15px] px-[20px] relative top-[-100px]">
            <div className="container">
                <h2 className=" text-center text-[45px] font-semibold font-blackMain">{t('services')}</h2>
                <div className="grid grid-cols-1">
                {
                    data.map(({content, src, buttonContent, id}) => {
                        return <div key={id} className=" relative">
                        <Image src={src} width={285} height={285} alt="Our services"/>
                        <div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                          <h3 className="text-[28px] text-white font-semibold text-center">{t(content)}</h3>
                          <Button clazz={'mt-[30px]'} width={'w-[260px]'} height={'h-[60px]'} content={t(buttonContent)}/>
                        </div>
                      </div>
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Services;