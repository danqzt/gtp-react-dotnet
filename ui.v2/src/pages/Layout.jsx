import { TopSection } from "../components/TopSection"
import PropTypes from 'prop-types';
import { Outlet, useLocation } from "react-router-dom";
import { Footer, FooterLower, FooterSectionGroup, FooterUpper} from "nsw-ds-react";

export const Layout = () => {
    const loc = useLocation();
    let title = '';
    if(loc.pathname === '/')
       title = 'Employee list';
    else if(loc.pathname.indexOf('/employees') > -1)
       title = 'Employee detail';

    return (
        <>
            <TopSection title={title}/>
              <Outlet/>
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

