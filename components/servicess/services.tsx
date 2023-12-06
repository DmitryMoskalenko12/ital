import { useTranslation } from "next-i18next";
import { useAppSelector } from "@/store/store";
import { useAppDispatch } from "@/store/store";
import Image from "next/image";
import Button from "@/ui/button";
import { useEffect } from 'react';
import { fetchServices } from "./servicesSlice";

const Services: React.FC = () => {
    const data = useAppSelector(state => state.services.services);
    const status = useAppSelector(state => state.services.status);
    const dispatch = useAppDispatch();
    const {t} = useTranslation('main');
    
    useEffect(() => {
     dispatch(fetchServices())
    }, [])

    const loading = status === 'loading' ? <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-[20px]">Loading...</div> : null;
    const error = status === 'error' ? <div className=" absolute top-[50%] left-[-50%] translate-x-[-50%] translate-y-[-50%] text-black text-[20px]">Error</div> : null;
    const content = status === 'idle' ?  data.map(({content, src, buttonContent, id}) => {
        return <div key={id} className=" relative w-[100%] h-[100%]">
                    <Image className="w-[100%] h-[100%] object-cover" src={src} width={285} height={285} alt="Our services"/>
                    <div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <h3 className="text-[28px] text-white font-semibold text-center md:text-[16px]">{t(content)}</h3>
                    <Button clazz={'mt-[30px] md:text-[14px]'} width={'w-[260px] md:w-[170px]'} height={'h-[60px] md:h-[60px]'} content={t(buttonContent)}/>
                    </div>
               </div>
    }) : null;

    return (
        <section className="pt-[15px] px-[20px] relative top-[-100px]">
            <div className="container">
                <h2 className=" text-center text-[45px] font-semibold font-blackMain">{t('services')}</h2>
                <div className=" relative grid grid-cols-1 gap-[10px] md:grid-cols-3 justify-center md:mt-[20px]">
                    {loading}
                    {error}
                    {content}
                </div>
            </div>
        </section>
    )
}

export default Services;