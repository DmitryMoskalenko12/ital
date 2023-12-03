import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import React from "next/router";
import Link from "next/link";

const Header: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [linkActive, setLinkActive] = useState<number | null>(1);
    const {t} = useTranslation('main');
    const links = [
        {content: t('our-project'), id: 1},
        {content: t('media'), id: 2},
        {content: t('about-us'), id: 3},
        {content: t('contacts'), id: 4},
    ]

    const onActive = () => {
      setActive(active => !active);
    }

    const onId = (id: number) => {
       setLinkActive(id)
    }

    return (
        <header className="pt-[15px] px-[20px] bg-[url(/images/bg-main.png)] bg-cover bg-center bg-no-repeat min-h-[800px]">
           <div className="container">
            <div className="flex justify-between items-center">
           
             <a className="block w-[85px] h-[85px]" href="#">
                <Image className=" w-[100%] h-[100%] object-contain" src={'/images/logo.png'} width={200} height={200} alt="logo"/>
             </a>
            
            <nav className={`nav-style flex ${active ? '-translate-x-[0]': '-translate-x-[100%]'} md:translate-x-[0] md:w-[initial] md:h-[auto] md:bg-transparent md:static md:transition-none md:gap-[20px]`}>
                <ul className="h-full gap-[10px] m-auto flex items-center justify-center flex-col md:flex-row md:gap-[20px]">
                    {
                        links.map(({id, content}) => {
                           return <li key={id}><Link onClick={() => onId(id)} className={`relative text-white text-[18px] ${id === linkActive ? 'link-active': null }`} href="#">{content}</Link></li>
                        })
                    }
                </ul>
            </nav>
            <div className=" cursor-pointer mb-5 md:hidden" onClick={onActive}>
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