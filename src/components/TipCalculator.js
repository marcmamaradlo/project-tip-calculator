import { useContext } from "react";
import { MyContext } from "../context";

const TipCalculator = () => {

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
                Tip Calculator
            </div>
        </>
    )
}

export default TipCalculator;