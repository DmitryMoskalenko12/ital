import { useTranslation } from "next-i18next";
import { useAppSelector } from "@/store/store";
import { useAppDispatch } from "@/store/store";
import { useEffect } from 'react';
import { fetchJoin } from "./joinSlice";
import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/button";

const Join = () => {
    const dataImages = useAppSelector(state => state.join.joinImages);
    const status = useAppSelector(state => state.join.status);
    const dispatch = useAppDispatch();

    const {t} = useTranslation('main');
    
    useEffect(() => {
     dispatch(fetchJoin())
    }, [])

    const loading = status === 'loading' ? <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-[20px]">Loading...</div> : null;
    const error = status === 'error' ? <div className=" absolute top-[50%] left-[-50%] translate-x-[-50%] translate-y-[-50%] text-black text-[20px]">Error</div> : null;
    const content = status === 'idle' ? dataImages.map(({src, id}) => {
        return <Link className=" block" key={id} href={"#"}>
                 <Image className="w-[100%] h-[100%]" src={src} width={260} height={262} alt="content"/>
              </Link>
    }) : null;

    return (
        <section className=" px-[20px]">
            <div className="container">
                <h2 className=" text-blackMain text-[30px] mb-[20px] md:text-[40px] font-semibold text-center">{t('join-us')}</h2>
                <div className=" relative grid grid-cols-1 grid-rows-[262px] gap-[10px] justify-center md:grid-cols-2 md:grid-rows-[repeat(3,auto)] mdx:grid-cols-4 mdx:grid-rows-[repeat(2,auto)] lg:gap-[40px]">
                  {loading}
                  {error}
                  {content}
                </div>
                <Button clazz={'mt-[30px] md:text-[14px] lg:text-[18px]'} width={'w-[170px] md:w-[180px] mdx:w-[230px] lg:w-[260px]'} height={'h-[50px] mdx:h-[60px] lg:h-[60px]'} content={t('join')}/>
            </div>
        </section>
    )
}

export default Join;