import Header from "../header/Header";
import Footer from "../footer/footer";

type MyComponentsProps = {
    children: React.ReactNode
};

const Layout: React.FC<MyComponentsProps> = (props) => { 
  return (
    <>
    <Header/>
    <main>
        {props.children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout;