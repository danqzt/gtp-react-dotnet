import React, { Fragment, Component } from 'react';
import { Breadcrumbs, Button, Section, SkipTo } from 'nsw-ds-react';
import { TopSection } from '../components/TopSection';

export const Home = () => {
    return (
        <>
            <Section padding='half' container>
                <div className='nsw-grid'>
                    <div className='nsw-col nsw-col-md-6'>
                        <p class='nsw-intro'>Please click on 'Edit to find more detail of each employee</p>
                    </div>
                    <div className='nsw-col nsw-col-md-6'>
                        <Button>Add Employee</Button>
                    </div>
                </div>
                <hr/>          
            </Section>
            <Section padding='none' container>
                <div class="nsw-grid">
                    <div class="nsw-col nsw-col-md-6">
                       <div class='nsw-h4 text-padding'>John Smith</div>
                       <div class='body-text text-padding'>Contract - 2 years</div>
                       <div class='small-text'>john@gmail.com</div>
                    </div>
                    <div class="nsw-col nsw-col-md-6">
                        <Button style='white'>Edit</Button> | <Button style='white'>Remove</Button>
                    </div>
                </div>
                <hr/>
                <div class="nsw-grid">
                    <div class="nsw-col nsw-col-md-6">
                       <div class='nsw-h4 text-padding'>Luke Skywalker</div>
                       <div class='nsw-text text-padding'>Contract - 2 years</div>
                       <div class='small-text'>john@gmail.com</div>
                    </div>
                    <div class="nsw-col nsw-col-md-6">
                        <Button style='white'>Edit</Button> | <Button style='white'>Remove</Button>
                    </div>
                </div>
                <hr/> 
                <div class="nsw-grid">
                    <div class="nsw-col nsw-col-md-6">
                       <div class='nsw-h4 text-padding'>John Smith</div>
                       <div class='body-text text-padding'>Contract - 2 years</div>
                       <div class='small-text'>john@gmail.com</div>
                    </div>
                    <div class="nsw-col nsw-col-md-6">
                        <Button style='white'>Edit</Button> | <Button style='white'>Remove</Button>
                    </div>
                </div>
                <hr/>
                <div class="nsw-grid">
                    <div class="nsw-col nsw-col-md-6">
                       <div class='nsw-h4 text-padding'>Luke Skywalker</div>
                       <div class='nsw-text text-padding'>Contract - 2 years</div>
                       <div class='small-text'>john@gmail.com</div>
                    </div>
                    <div class="nsw-col nsw-col-md-6">
                        <Button style='white'>Edit</Button> | <Button style='white'>Remove</Button>
                    </div>
                </div>
                <hr/>  
            </Section>
 

        </>
    )

}