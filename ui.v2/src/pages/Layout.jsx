import { TopSection } from "../components/TopSection"
import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";
import { Footer, FooterLower, FooterSectionGroup, FooterUpper } from "nsw-ds-react";
import { useState } from "react";

export const Layout = () => {

    const [title, setTitle] = useState('Employee List');
    return (
        <>
            <TopSection title={title} />
            <Outlet context={ { setTitle }}/>
            <Footer>
                <FooterUpper>
                    <FooterSectionGroup heading={{
                        url: '#',
                        text: 'Footer Section Link 1',
                    }}
                        sectionLinks={[
                            {
                                url: '#',
                                text: 'Section Link',
                            },]}>

                    </FooterSectionGroup>
                </FooterUpper>
                <FooterLower>
                    <div className="nsw-container">
                        <p>
                            We pay respect to the Traditional Custodians and First Peoples of NSW,
                            and acknowledge their continued connection to their country and culture.
                        </p></div>
                </FooterLower>
            </Footer>
        </>

    )
};

