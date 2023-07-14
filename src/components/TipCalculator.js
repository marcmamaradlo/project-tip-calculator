import { useContext } from "react";
import { MyContext } from "../context";

const TipCalculator = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const buttonName = context.buttonName;
    const handleBurgerIcon = context.handleBurgerIcon;
    const handleTipPercent = context.handleTipPercent;
    const handleTipBillAmount = context.handleTipBillAmount;
    const handleTipResetButton = context.handleTipResetButton;
    const handleTipStartButton = context.handleTipStartButton;
    const handleTipInputOnClick = context.handleTipInputOnClick;

    return (
        <>
            <div className='content-container'>
                <div className='header-fixed'>
                    <div className='burger-icon '>
                        <i onClick={handleBurgerIcon} className="fa-solid fa-bars"></i>
                        <p>{buttonName.toUpperCase()}</p>
                    </div>
                </div>
                <form className='tipCalculator'>
                    <div>
                        <div className='tipCalculator-input-container'>
                            <label>Tip Percent (%)</label>
                            <input onChange={handleTipPercent} onClick={handleTipInputOnClick} value={state.tipPercent} name='tipPercent' placeholder='20' />
                        </div>
                        <div className='tipCalculator-input-container'>
                            <label>Total Bill Amount</label>
                            <input onChange={handleTipBillAmount} onClick={handleTipInputOnClick} value={state.tipBillAmount} name='tipBillAmount' placeholder='15500' />
                        </div>
                    </div>
                </form>
                <div className='tipCalculator-button-container'>
                    <button onClick={handleTipResetButton}><i className="fa-solid fa-arrow-rotate-left"></i> Reset</button>
                    <button onClick={handleTipStartButton}>Calculate</button>
                </div>
                <div className='tipCalculator-input-container'>
                    <label>Amount to tip</label>
                    <input type='text' value={state.tipAmount} placeholder='3100' readOnly />
                </div>
                <div className='tipCalculator-instructions'>
                    <h3>Instructions:</h3>
                    <p>Step 1: Enter the percentage of tip you have to give.</p>
                    <p>Step 2: Enter the amount of total bill</p>
                    <p>Step 3: Click "Calculate"</p>
                    <p>Step 4: Click "Reset" to restart the App</p>
                </div>
            </div>
        </>
    )
}

export default TipCalculator;