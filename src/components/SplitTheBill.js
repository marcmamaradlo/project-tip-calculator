import { useContext } from "react";
import { MyContext } from "../context";

const SplitTheBil = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const buttonName = context.buttonName;
    const handleBurgerIcon = context.handleBurgerIcon;
    const handleAddButton = context.handleAddButton;
    const handleMinusButton = context.handleMinusButton;
    const handleSTBBillAmount = context.handleSTBBillAmount;
    const handleSTBResetButton = context.handleSTBResetButton;
    const handleSTBSplitButton = context.handleSTBSplitButton;

    return (
        <>
            <div className='content-container'>
                <div className='header-fixed'>
                    <div className='burger-icon '>
                        <i onClick={handleBurgerIcon} className="fa-solid fa-bars"></i>
                        <p>{buttonName.toUpperCase()}</p>
                    </div>
                </div>
                <div className='splitTheBill'>
                    <div className='splitTheBill-firstDiv'>
                        <label>Number of Participants</label>
                        <div>
                            <i onClick={handleMinusButton} className="fa-solid fa-minus"></i>
                            <input placeholder='0' value={state.STBParticipants} readOnly />
                            <i onClick={handleAddButton} className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className='splitTheBill-secondDiv'>
                        <label>Total Amount to Split</label>
                        <input onChange={handleSTBBillAmount} value={state.STBBillAmount} placeholder='0' type='text' />
                    </div>
                    <div className='splitTheBill-thirdDiv'>
                        <label>EVERYONE HAS TO PAY:</label>
                        <input value={state.STBFinalAmount} placeholder='0' readOnly />
                    </div>
                    <div className='splitTheBill-FourthDiv'>
                        <button onClick={handleSTBResetButton}><i className="fa-solid fa-arrow-rotate-left"></i> Restart</button>
                        <button onClick={handleSTBSplitButton}>Split</button>
                    </div>
                    <div className='splitTheBill-instructions'>
                        <h3>Instructions</h3>
                        <p>Step 1: Enter the number of a participants</p>
                        <p>Step 2: Enter the total amount of the bill</p>
                        <p>Step 3: Click "Split" to split the amount</p>
                        <p>Step 4: Click "Reset" to restart the App</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SplitTheBil;