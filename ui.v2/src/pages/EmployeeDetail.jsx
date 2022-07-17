import { Footer, FooterLower, FooterSectionGroup, FooterUpper, FormGroupText, Section } from "nsw-ds-react";
import { TopSection } from "../components/TopSection";

export const EmployeeDetail = () => {
    return (
        <>
            <Section container padding='full'>
                <div className="nsw-layout">
                    <div className="nsw-layout__main">
                        <div className="nsw-form">
                            <h2>Personal Details</h2>
                            <FormGroupText label='First name' htmlId="firstName" as="input" placeholder="John" />
                            <FormGroupText label='Middle name (if applicable)' htmlId="middleName" as="input" />
                            <FormGroupText label='Last name' htmlId="lastName" as="input" placeholder="Smith" />
                            <h2>Contact Details</h2>
                            <FormGroupText label='Email address' htmlId="email" as="input" placeholder="John@gmail.com" />
                            <FormGroupText label='Mobile Number' helper="Must be an australian number" htmlId="mobile" as="input" />
                        </div>
                    </div>
                    <div class="nsw-layout__sidebar"></div>
                </div>
            </Section>
        </>
    );

}