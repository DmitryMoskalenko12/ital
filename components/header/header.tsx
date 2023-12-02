import Image from "next/image";
const Header = () => {
    return (
        <header className="pt-[15px] px-[87px] bg-[url(/images/bg-main.png)] bg-cover bg-center bg-no-repeat min-h-[800px]">
           <div className="container">
            <div className="w-[85px] h-[85px] ">
             <Image src={'/images/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="16" viewBox="0 0 60 16" fill="none">
                    <rect width="60" height="2" fill="#D8B152"/>
                    <rect y="14" width="60" height="2" fill="#D8B152"/>
                    <rect x="16" y="7" width="44" height="2" fill="#D8B152"/>
                </svg>
            </div>
           </div>
        </header>
    )
}

export default Header;