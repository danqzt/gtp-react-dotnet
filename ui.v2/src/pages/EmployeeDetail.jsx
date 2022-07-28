import { FormGroupText, Section } from "nsw-ds-react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { InputText } from "../components/InputText";
import { RadioGroup } from "../components/RadioGroup";
import { emailRegex, phoneRegex } from "../helpers/validation";


export const EmployeeDetail = () => {
    const { setTitle } = useOutletContext();
    const { watch, control, handleSubmit } = useForm({ mode: "onChange" });
    console.log(watch());

    useEffect(() => {
        setTitle('Employee detail')
    }, []);

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Section container padding='full'>
                <div className="nsw-layout">
                    <div className="nsw-layout__main">
                        <form className="nsw-form" onSubmit={handleSubmit(onSubmit)}>
                            <h2>Personal Details</h2>
                            <InputText name="firstName" label="First name*" placeholder="John" control={control}
                                rules={{ required: { value: true, message: "first name is required" } }} />
                            <InputText name="middleName" label="Middle name (if applicable)" control={control} />
                            <InputText name="lastName" label="Last name*" placeholder="Smith" control={control}
                                rules={{ required: { value: true, message: "first name is required" } }} />


                            <h2>Contact Details</h2>
                            <InputText name="email" label="Email Address*" placeholder="John@gmail.com" control={control} type="email"
                                rules={{
                                    required: { value: true, message: "Email is required" },
                                    pattern: { value: emailRegex, message: "Entered value does not match email format" }
                                }} />

                            <InputText name="mobile" label="Mobile Number*" placeholder="0416303757" control={control} type="tel" helper="Must be an australian number"
                                rules={{
                                    required: { value: true, message: "Mobile is required" },
                                    pattern: { value: phoneRegex, message: "Entered value does not match AU mobile format" }
                                }} />
                            <InputText name="address" label="Residential address" placeholder="123 Example St, Sydney, NSW 2000" control={control} helper="Start typing to search"
                                rules={{ required: { value: true, message: "Address is required" } }} />

                            <h2>Employee Status</h2>
                            <RadioGroup name="contractType" label="What is contract type" control={control}
                                rules={{ required: { value: true, message: "Contract type is required" } }}
                                options={[
                                    { text: 'Permanent', value: "permanent"},
                                    { text: 'Contract', value: "contract"}
                                ]} />
                        </form>
                    </div>
                    <div className="nsw-layout__sidebar"></div>
                </div>
            </Section>
        </>
    );

}