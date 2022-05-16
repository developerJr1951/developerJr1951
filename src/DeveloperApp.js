import React from 'react'
import { NavbarScreen } from "./components/navbar/NavbarScreen";
import { AboutScreen } from "./components/about/AboutScreen";
import { StepsScreen } from './components/steps/StepsScreen';
import { ContactScreen } from './components/contact/ContactScreen';
export const DeveloperApp = () => {
    return (
        <>
            <NavbarScreen />
            <AboutScreen />
            <StepsScreen />
            <ContactScreen />
        </>
    )

}
