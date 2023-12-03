import Header from "../header/Header";

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

    </>
  )
}

export default Layout;