import { useTranslation } from "next-i18next";
import Button from "@/ui/button";

const Main: React.FC = () => {
    const {t} = useTranslation('main');

    return <section className="relative top-[-100px] pt-[140px] md:pt-[250px] px-[20px] left-0 right-0 bottom-0 -z-1 bg-[url(/images/bg-main.png)] bg-cover bg-center bg-no-repeat min-h-[800px] lg:px-[116px]">
        <div className="container">
            <div className="grid grid-cols-1 justify-center mdx:grid-cols-[550px,260px] mdx:gap-[44px] lg:grid-cols-[700px,260px] lg:gap-[0] xl:gap-[44px] xl:grid-cols-[758px,387px]">
                <h1 className=" font-semibold text-[38px] text-center text-white mb-4 leading-[140%] mdx:text-left mdx:text-[45px] mdx:mb-0 lg:text-[50px] xl:text-[56px]">{t('turnkey')}</h1>

                <div className="mdx:w-[260px]">
                 <p className="text-[18px] text-white font-normal text-center mb-6">{t('sign')}</p>
                 <Button content={t('sign-up')} width={'w-[260px]'} height={'h-[60px]'}/>
                </div>
            </div>

            <div className="flex justify-between items-center w-[220px] m-auto mt-[150px] md:mt-[250px] mdx:mt-[330px]">
               <button className=" w-5 h-5 rounded-full border-white bg-white"></button>
               <button className=" w-5 h-5 rounded-full border-white border-[1px] bg-transparent"></button>
               <button className=" w-5 h-5 rounded-full border-white border-[1px] bg-transparent"></button>
               <button className=" w-5 h-5 rounded-full border-white border-[1px] bg-transparent"></button>
               <button className=" w-5 h-5 rounded-full border-white border-[1px] bg-transparent"></button>
               <button className=" w-5 h-5 rounded-full border-white border-[1px] bg-transparent"></button>
            </div>
        </div>
    </section>
}

export default Main;