import React, { Component } from 'react';
import WhoPaysTheBill from '../components/WhoPaysTheBill';
import TipCalculator from '../components/TipCalculator';
import SplitTheBil from '../components/SplitTheBill';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        navButtons: ['Who Pays The Bill', 'Tip Calculator', 'Split The Bill'],
        buttonName: 'Who Pays The Bill',
        burgerActive: false,
        //Who Pays The Bill//
        WPTBAddName: '',
        WPTBArray: [],
        WPTBArrayHistory: [],
        WPTBStart: false,
        WPTBReset: false,
        //Who Pays The Bill//
    }

    // Split The Bill --Start-- //
    // Split The Bill --End-- //

    // Tip Calculator --Start-- //
    // Tip Calculator --End-- //

    // Who Pays The Bill --Start-- //

    handleWPTBAgain = () => {
        const WPTBArrayHistory = this.state.WPTBArrayHistory;
        const random = Math.floor(Math.random() * WPTBArrayHistory.length);
        const newName = WPTBArrayHistory[random].toUpperCase();

        this.setState({
            WPTBStart: true,
            WPTBArray: ['Congratulations!!!', newName],
            WPTBAddName: '',
        });
    }
    handleWPTBStart = () => {
        if (this.state.WPTBArray.length === 0) {
            this.setState({
                WPTBStart: false,
                WPTBArray: ['no participantans']
            })
        }
        else {
            const WPTBArray = this.state.WPTBArray;
            const random = Math.floor(Math.random() * WPTBArray.length);
            const newName = WPTBArray[random].toUpperCase();

            this.setState({
                WPTBStart: true,
                WPTBArrayHistory: WPTBArray,
                WPTBArray: ['Congratulations!!!', newName],
                WPTBAddName: '',
            });
        }
    }

    handleWPTBResetButton = () => {
        this.setState({
            WPTBAddName: '',
            WPTBArray: [],
            WPTBStart: false,
            WPTBReset: false,
            errorMessege: '',
        });
    }

    handleWPTBFieldSet = () => {
        return this.state.WPTBArray.map((item, index) => (
            <p key={index}>{item}</p>
        ))
    }

    handleWPTBSubmit = (e) => {
        e.preventDefault();

        if (this.state.WPTBAddName.length === 1) {
            console.log('Invalid name!');
        }
        if (this.state.WPTBAddName === '') {
            console.log('Please, Enter a name.');
        }
        else {
            this.state.WPTBArray.push(this.state.WPTBAddName);
            this.setState({
                WPTBAddName: '',
                errorMessege: '',
            });
        }
    }

    handleWPTBAddName = (e) => {
        this.setState({ WPTBAddName: e.target.value, })
    }

    handleInputOnClick = (e) => {
        if (this.state.WPTBStart === true) {
            this.setState({ WPTBArray: [] })
        }
        if (this.state.WPTBAddName === '') {
            console.log('Please, Enter a name.')
        }
        else {
            this.setState({
                errorMessege: '',
            });
        }
    }
    // Who Pays The Bill --End-- //

    // Navigation --Start-- //
    showNavButtons = () => {
        const navButtons = this.state.navButtons;
        const buttonName = this.state.buttonName;
        const active = 'navbar-button-active';
        const notActive = 'navbar-button-notActive';

        return navButtons.map((item, index) => (
            <button
                className={buttonName === item ? active : notActive}
                onClick={this.handleNavButtons}
                name={item}
                key={index}
            >
                {item}
            </button>
        ));
    }

    handleNavButtons = (e) => {
        this.setState({
            buttonName: e.target.name,
            burgerActive: false,
        });
    }

    handleBurgerIcon = () => {
        this.setState({ burgerActive: !this.state.burgerActive });
    }

    handleShowNavbar = () => {
        const burgerActive = this.state.burgerActive;
        return burgerActive ? 'navbar' : 'display-none';
    }

    handleShowComponents = () => {
        const buttonName = this.state.buttonName;

        if (buttonName === "Who Pays The Bill") {
            return <WhoPaysTheBill />
        }
        if (buttonName === "Tip Calculator") {
            return <TipCalculator />
        }
        if (buttonName === "Split The Bill") {
            return <SplitTheBil />
        }
        else {
            return null;
        }
    }
    // Navigation --End-- //

    render() {

        console.table(this.state);

        const { value, buttonIndex, buttonName, WPTBStart, } = this.state
        const { state,
            handleNavButtons, handleBurgerIcon, handleShowNavbar,
            handleShowComponents, showNavButtons, handleWPTBAddName,
            handleWPTBSubmit, handleWPTBFieldSet, handleWPTBResetButton,
            handleWPTBStart, handleInputOnClick, handleWPTBAgain
        } = this;

        return (
            <MyContext.Provider
                value={{
                    state, value, buttonIndex, buttonName, WPTBStart,
                    handleNavButtons, handleBurgerIcon, handleShowNavbar,
                    handleShowComponents, showNavButtons, handleWPTBAddName,
                    handleWPTBSubmit, handleWPTBFieldSet, handleWPTBResetButton,
                    handleWPTBStart, handleInputOnClick, handleWPTBAgain
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };