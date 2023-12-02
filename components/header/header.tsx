import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import React, { useRouter } from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const {locale, locales, push} = useRouter();
    const {t} = useTranslation('main');

    const onActive = () => {
      setActive(active => !active);
    }

    return (
        <header className="pt-[15px] px-[40px] bg-[url(/images/bg-main.png)] bg-cover bg-center bg-no-repeat min-h-[800px]">
           <div className="container">
            <div className="flex justify-between items-center">
            <div className="w-[85px] h-[85px]">
             <Image className=" w-[100%] h-[100%] object-contain" src={'/images/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            
            <nav className={`nav-style ${active ? '-translate-x-[0]': '-translate-x-[100%]'}`}>
                <ul className="h-full gap-[10px] flex items-center justify-center flex-col">
                    <li><a className=" relative text-white text-[18px] font-normal hover:after:bg-hakki after:absolute after:w-full after:h-[1px] after:mb-[-2px] after:bottom-0 after:left-0" href="#">{t('our-project')}</a></li>
                    <li><a className=" text-white text-[18px] font-normal" href="#">{t('media')}</a></li>
                    <li><a className=" text-white text-[18px] font-normal" href="#">{t('about-us')}</a></li>
                    <li><a className=" text-white text-[18px] font-normal" href="#">{t('contacts')}</a></li>
                    <li className=" ">
                        {
                            locales?.map(l => {
                                return <Link key={l} className=" text-white text-[18px] font-normal" data-lang={l} href={'/'} locale={l}>{l === 'en' ? t('En') : t('Uk')} </Link>
                            })
                        }
                    </li>
                </ul>
            </nav>
            <div className=" cursor-pointer mb-5" onClick={onActive}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="16" viewBox="0 0 60 16" fill="none">
                    <rect width="60" height="2" fill="#D8B152"/>
                    <rect y="14" width="60" height="2" fill="#D8B152"/>
                    <rect x="16" y="7" width="44" height="2" fill="#D8B152"/>
              </svg>
            </div>
            </div>
           </div>
        </header>
    )
}

export default Header;