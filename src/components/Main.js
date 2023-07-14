import { useContext } from "react";
import { MyContext } from "../context";

const Main = () => {

    const context = useContext(MyContext);
    const handleBurgerIcon = context.handleBurgerIcon;
    const handleShowNavbar = context.handleShowNavbar;
    const handleShowComponents = context.handleShowComponents;
    const showNavButtons = context.showNavButtons;

    return (
        <>
            <div className={handleShowNavbar()}>
                <div className='div-fixed'>
                    <i onClick={handleBurgerIcon} className="fa-regular fa-rectangle-xmark"></i>
                </div>
                <div>
                    {showNavButtons()}
                </div>
            </div>
            <div className='container'>
                {handleShowComponents()}
            </div>
        </>
    )
}

export default Main;