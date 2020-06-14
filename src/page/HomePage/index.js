import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {
    MDBInput,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBSideNavItem,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
    MDBView,
    MDBRow,
    MDBCol,
    MDBMask,
    MDBBtn, MDBNavbarBrand, MDBNavLink
} from "mdbreact";
import classes from './index.module.css'
import bg from './Lib/homepage.jpg'
class HomePageReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            collapsed: false
        };
    }

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };
    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };


    render() {


        return (
            <div>
                <Router>


                    <MDBNavbar className="blue lighten-1" expand="md" fixed="top" >

                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                        <MDBCollapse isOpen={this.state.collapsed} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <div
                                        onClick={this.handleToggleClickA}
                                        key="sideNavToggleA"
                                        style={{
                                            lineHeight: "10px",
                                            marginRight: "1em",
                                            verticalAlign: "middle"
                                        }}
                                    >
                                        <MDBIcon icon="bars" size="2x" className="mt-1" style={{color:'white'}}/>
                                    </div>
                                </MDBNavItem>

                            </MDBNavbarNav>
                            <MDBNavbarNav left>
                                <MDBNavItem
                                    className="d-none d-md-inline"
                                    onClick={() => {this.props.history.push('/home');}}
                                    // style={{
                                    //     cursor:'pointer',
                                    //     fontFamily:'Comic Sans MS',
                                    //     fontSize: '25px',
                                    //     fontStyle: 'normal',
                                    //     color:'white',
                                    //     fontWeight: '700',
                                    // }}
                                >
                                    <img className='img-fluid' style={{height:'44px'}} src='https://myedmaster.oss-us-east-1.aliyuncs.com/A-list Empire logo.png'/>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>

                <MDBView src={bg} >
                    <MDBMask
                        className="justify-content-center align-items-center"
                        overlay="white-light"

                    >
                        <div style={{height:'54px'}}>

                        </div>

                        <MDBContainer>
                            <section className="text-center my-5">
                                <h2 className={`${classes.orange} h1-responsive font-weight-bold my-3`}>
                                    Welcome to admin system
                                </h2>
                                <p
                                    className={`${classes.font} lead w-responsive mx-auto mb-5`}
                                    style={{
                                        color:'#0099CC',
                                        fontSize:'22px',
                                        fontWeight:'bold'
                                    }}
                                >
                                    It provide some features to modify our website
                                </p>
                                <MDBRow>
                                    <MDBCol md='4'> </MDBCol>
                                    <MDBCol
                                        md="4"
                                        className={classes.content}
                                    >
                                        <MDBIcon icon="code" size="3x" className="mt-2" style={{color:'#0099CC'}}/>

                                        <h4 className="font-weight-bold my-4" style={{fontFamily:'Comic Sans MS',color:'#0099CC'}}>Test</h4>
                                        <p
                                            className={classes.reading}

                                            onClick={() => {this.props.history.push('/content_demo');}}
                                        >
                                            <span className={classes.font1}>Edit the content part</span>
                                        </p>
                                        <p
                                            className={classes.reading}

                                            onClick={() => {this.props.history.push('/problem_list');}}
                                        >
                                            <span className={classes.font1}>Edit the complex number part</span>
                                        </p>
                                        {/*<p*/}
                                            {/*className={classes.reading}*/}

                                            {/*onClick={() => {this.props.history.push('/hapcover');}}*/}
                                        {/*>*/}
                                            {/*<span className={classes.font1}>Story 2: Horse and Porcupine</span>*/}
                                        {/*</p>*/}
                                        <p className={classes.font2}>
                                            Expect more in the future...
                                        </p>
                                    </MDBCol>
                                    {/*<MDBCol*/}
                                        {/*md="4"*/}
                                        {/*className={classes.content}*/}
                                    {/*>*/}
                                        {/*<MDBIcon icon="square-root-alt" size="3x" className="mt-2" style={{color:'#F1831D'}}/>*/}
                                        {/*<h4 className="font-weight-bold my-4" style={{fontFamily:'Comic Sans MS',color:'#F1831D'}}>Math</h4>*/}
                                        {/*<p*/}
                                            {/*className={classes.math}*/}

                                            {/*onClick={() => {this.props.history.push('/complex');}}*/}
                                        {/*>*/}
                                            {/*<span className={classes.font1}>Learn the complex numbers</span>*/}

                                        {/*</p>*/}
                                        {/*<p*/}
                                            {/*className={classes.math}*/}

                                            {/*onClick={() => {this.props.history.push('/foil');}}*/}
                                        {/*>*/}
                                            {/*<span className={classes.font1}>Multiplying Binomials Using FOIL</span>*/}

                                        {/*</p>*/}
                                        {/*<p*/}
                                            {/*className={classes.math}*/}

                                            {/*onClick={() => {this.props.history.push('/combining_like_term');}}*/}
                                        {/*>*/}
                                            {/*<span className={classes.font1}>Combining Like Terms</span>*/}

                                        {/*</p>*/}
                                        {/*<p*/}
                                            {/*className={classes.science}*/}

                                            {/*onClick={() => {this.props.history.push('/problem_list');}}*/}
                                        {/*>*/}
                                            {/*<span className={classes.font1}>test-add-math</span>*/}

                                        {/*</p>*/}
                                        {/*<p className={classes.font2}>*/}
                                            {/*Expect more in the future...*/}
                                        {/*</p>*/}
                                    {/*</MDBCol>*/}
                                    {/*<MDBCol md="4" className={classes.content}>*/}
                                        {/*<MDBIcon icon="atom" size="3x" className="mt-2" style={{color:'#2EAFB0'}} />*/}
                                        {/*<h4 className="font-weight-bold my-4" style={{fontFamily:'Comic Sans MS',color:'#2EAFB0'}}>Science</h4>*/}
                                        {/*/!*<p*!/*/}
                                            {/*/!*className={classes.science}*!/*/}

                                            {/*/!*onClick={() => {this.props.history.push('/problem_list');}}*!/*/}
                                        {/*/!*>*!/*/}
                                            {/*/!*<span className={classes.font1}>test-add-math</span>*!/*/}

                                        {/*/!*</p>*!/*/}
                                        {/*<p className={classes.font2}>*/}
                                            {/*Expect more in the future...*/}
                                        {/*</p>*/}
                                    {/*</MDBCol>*/}
                                </MDBRow>
                            </section>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>



        );
    }
}
export const HomePage = withRouter(HomePageReact)
