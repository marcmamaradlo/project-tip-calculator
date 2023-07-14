import { useContext } from "react";
import { MyContext } from "../context";

const WhoPaysTHeBill = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const WPTBStart = context.WPTBStart
    const buttonName = context.buttonName;
    const handleBurgerIcon = context.handleBurgerIcon;
    const handleWPTBAddName = context.handleWPTBAddName;
    const handleWPTBSubmit = context.handleWPTBSubmit;
    const handleWPTBFieldSet = context.handleWPTBFieldSet;
    const handleWPTBResetButton = context.handleWPTBResetButton;
    const handleWPTBStart = context.handleWPTBStart;
    const handleInputOnClick = context.handleInputOnClick;
    const handleWPTBAgain = context.handleWPTBAgain;

    const handleButtonRerender = () => {
        return WPTBStart === true
            ? <button
                className='whoPaysTheBill-again'
                onClick={handleWPTBAgain}
                name='again'
            >
                Again <i className="fa-solid fa-arrow-rotate-right"></i>
            </button>
            : <button
                className='whoPaysTheBill-default'
                onClick={handleWPTBStart}
                name='start'
            >
                Start <i className="fa-solid fa-arrow-right-long"></i>
            </button>
    }

    return (
        <>
            <div className='content-container'>
                <div className='header-fixed'>
                    <div className='burger-icon '>
                        <i onClick={handleBurgerIcon} className="fa-solid fa-bars"></i>
                        <p>{buttonName.toUpperCase()}</p>
                    </div>
                </div>
                <form className='whoPaysTheBill' id='whoPaysTheBill' onSubmit={handleWPTBSubmit}>
                    <div>
                        <label>Enter Names of Participants</label>
                        <div className='whoPaysTheBill-main-input'>
                            <input
                                id=''
                                type='text'
                                placeholder=''
                                value={state.WPTBAddName}
                                onChange={handleWPTBAddName}
                                onClick={handleInputOnClick}
                            />
                            <button type='submit'><i className="fa-solid fa-user-plus"></i></button>
                        </div>
                        <label>Participants</label>
                        <fieldset>
                            {handleWPTBFieldSet()}
                            <p></p>
                        </fieldset>
                    </div>
                </form>
                <div className='whoPaysTheBill-button-container'>
                    <button
                        className='whoPaysTheBill-default'
                        onClick={handleWPTBResetButton}
                    >
                        <i className="fa-solid fa-arrow-rotate-left"></i> Reset
                    </button>
                    {handleButtonRerender()}
                </div>
                <div className='whoPaysTheBill-instructions'>
                    <h3>Instructions:</h3>
                    <p>Step 1: Enter the name of a participant</p>
                    <p>Step 2: Click "Add" to add their name</p>
                    <p>Step 3: Click "Start" and get a random participant</p>
                    <p>Step 4: Click "Restart" to restart to App</p>
                </div>
            </div>
        </>
    )
}

export default WhoPaysTHeBill;