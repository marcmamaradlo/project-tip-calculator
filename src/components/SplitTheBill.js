import { useContext } from "react";
import { MyContext } from "../context";

const SplitTheBil = () => {

    const context = useContext(MyContext);
    const buttonName = context.buttonName;
    const handleBurgerIcon = context.handleBurgerIcon;

    return (
        <>
            <div className='header-fixed'>
                <div className='div-fixed'>
                    <i onClick={handleBurgerIcon} className="fa-solid fa-bars"></i>
                </div>
                <p>{buttonName.toUpperCase()}</p>
            </div>
            <div className='content-container'>
                Split The Bill
            </div>
        </>
    )
}

export default SplitTheBil;