import { Breadcrumbs, Button, Header, MainNav, Masthead, Section, SkipTo } from 'nsw-ds-react';

export const TopSection = ({ title }) => {
    return (
        <>
            <SkipTo
                content="#content"
                nav="#nav"
            />
            <Masthead />
            <Header
                headerUrl="#"
                onSubmit={function noRefCheck() { }}
                siteTitle={ title }
            />
            <MainNav megaMenu navItems={[
                {
                    desription: 'Main',
                    id: '914d7e2',
                    text: 'Home',
                    url: '/'

                },
                {
                    desription: 'Detail page',
                    id: '914e2',
                    text: 'Detail',
                    url: '/employees/null',

                },

            ]} />
            <div className='nsw-container' >
                <Breadcrumbs linkComponent='a' items={[
                    {
                        link: '/',
                        text: 'Home',
                    },
                    {
                        link: '/Form',
                        text: 'Employee List',
                        className: 'current'
                    }
                ]} />
            </div>
        </>

    );
}