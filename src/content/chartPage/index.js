import React from "react";
import {withRouter} from 'react-router-dom';
import classes from './index.module.css';
import {Redirect, Route, Switch, Link} from 'react-router-dom';
import { Doughnut } from "react-chartjs-2";
import {Nav} from "../../page/Nav";
import { MDBBtn,MDBSwitch } from 'mdbreact';
import {nodeurl} from "../../tool/fetch-help";
import {Asked} from "../table_component/asked";
import {Unasked} from "../table_component/unasked";
import {Overall} from "../table_component/overall";
import {Covergae} from "../table_component/coverage";

class ContentDemoReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overall_right:0,
            overall_wrong:0,
            student_right:0,
            student_wrong:0,
            all_stu_ask:0,
            switch1: true,
            asked:'',
            unasked_right:'',
            unasked_wrong:'',
            covered:'',
            uncovered:''
        }
    }
    componentDidMount() {
        const overall={
            method:'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        fetch(`${nodeurl}/overall_system/1`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    overall_right:res,
                });
            });
        fetch(`${nodeurl}/overall_system/0`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    overall_wrong:res,
                });
            });
        fetch(`${nodeurl}/student_ask_question`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    all_stu_ask:res,
                });
            });
        fetch(`${nodeurl}/student_right`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    student_right:res,
                });
            });
        fetch(`${nodeurl}/student_wrong`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    student_wrong:res,
                });
            });
        fetch(`${nodeurl}/asked`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    asked:res,
                });
            });
        fetch(`${nodeurl}/system_covered/1`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    covered:res,
                });
            });
        fetch(`${nodeurl}/system_covered/0`,overall)
            .then(response=>response.json())
            .then(res=>{
                this.setState({
                    uncovered:res,
                });
            });

        // this.unasked_wrong=handleUnasked(this.state.asked,this.state.all_stu_ask, 0);
        // this.unasked_right=handleUnasked(this.state.asked,this.state.all_stu_ask, 1);
        // console.log(this.unasked_wrong)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            [switchNumber]: !this.state[switchNumber]
        });
    };
    test=(arr)=>{
        for(let i in arr){
            console.log(arr[i].question_id)
        }
    };
    handleUnasked=(asked,all,tag)=>{
        let allId=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
        let tmp=[];
        let unasked_right=[];
        let unasked_wrong=[];
        for (let i in asked){
            tmp.push(asked[i].question_id)
        }
        let askedArr=Array.from(new Set(tmp));
        for(let j in askedArr){
            for(let i in allId){
                if(askedArr[j] === allId[i]){
                    allId.splice(i,1)
                }
            }
        }
        for (let k in all){
            let index = allId.indexOf(all[k].question_id);
            if(index>-1){
                if(all[k].isRight === 0){
                    unasked_wrong.push(all[k])
                    // unasked_wrong.push(JSON.parse(all[k]))
                }
                else{
                    unasked_right.push(all[k])
                    // unasked_right.push(JSON.parse(all[k]))
                }
            }
        }

        if(tag===1){
            return unasked_right
        }
        else{
            return unasked_wrong
        }
    };


    render() {
        const all = this.state.overall_right.length+this.state.overall_wrong.length;
        const stuaskC = this.state.all_stu_ask.length;
        const stu_right=this.state.student_right.length;
        const stu_wrong=this.state.student_wrong.length;
        const all_asked=this.state.student_right.length+this.state.student_wrong.length;
        const overall= {
            labels: ["Wrong", "Right"],
            datasets: [
                {
                    data: [this.state.overall_right.length, this.state.overall_wrong.length],
                    backgroundColor: ["#F7464A", "#42a5f5"],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#42a5f5",
                    ]
                }
            ]
        };
        const asked= {
            labels: ["Right", "Wrong"],
            datasets: [
                {
                    data: [stu_right, stu_wrong],
                    backgroundColor: [ "#42a5f5","#F7464A"],
                    hoverBackgroundColor: [
                        "#42a5f5",
                        "#FF5A5E",
                    ]
                }
            ]
        };

        // this.test(this.state.all_stu_ask);
        const allstuask = this.state.all_stu_ask;
        const ask = this.state.asked;
        let unasked_wrong=this.handleUnasked(ask,allstuask, 0);
        let unasked_right=this.handleUnasked(ask,allstuask, 1);
        let all_unasked = unasked_wrong.length+unasked_right.length
        // console.log(all_unasked);
        //console.log(unasked_right.length);
        const unasked= {
            labels: ["Right", "Wrong"],
            datasets: [
                {
                    data: [unasked_right.length, unasked_wrong.length],
                    backgroundColor: [ "#42a5f5","#F7464A"],
                    hoverBackgroundColor: [
                        "#42a5f5",
                        "#FF5A5E",
                    ]
                }
            ]
        };
        const coverage= {
            labels: ["Covered", "Uncovered"],
            datasets: [
                {
                    data: [this.state.covered.length, this.state.uncovered.length],
                    backgroundColor: [ "#42a5f5","#F7464A"],
                    hoverBackgroundColor: [
                        "#42a5f5",
                        "#FF5A5E",
                    ]
                }
            ]
        };

        return (

            <div>
                <Nav/>
                <div className='cell-wall'>
                    <div className='cell-membrane'>
                        <div className='d-flex justify-content-between'>
                            <div className='text-center'>
                                <Doughnut data={overall} options={{ responsive: true }} />
                                <p className={classes.title}>Overall</p>
                                <p>Right:{Number(this.state.overall_right.length/all*100).toFixed(2)}%</p>
                                <p>Wrong:{Number(this.state.overall_wrong.length/all*100).toFixed(2)}%</p>
                                <button onClick={() => {this.props.history.push(`${this.props.match.url}/overall`);}}>Show more</button>
                            </div>
                            <div className='text-center'>
                                {this.state.switch1?(
                                    <Doughnut data={asked} options={{ responsive: true }} />
                                ):(<Doughnut data={unasked} options={{ responsive: true }} />)}

                                <div className='custom-control custom-switch '>
                                    <input
                                        type='checkbox'
                                        className='custom-control-input blue lighten-1'
                                        id='customSwitches'
                                        checked={this.state.switch1}
                                        onChange={this.handleSwitchChange(1)}
                                        readOnly
                                    />
                                    <label className='custom-control-label' htmlFor='customSwitches'>
                                        Toggle Unasked/Asked
                                    </label>
                                </div>
                                {this.state.switch1?(
                                    <div>
                                        <p className={classes.title}>Asked Question</p>
                                        <p>Right:{Number(stu_right/all_asked*100).toFixed(2)}%</p>
                                        <p>Wrong:{Number(stu_wrong/all_asked*100).toFixed(2)}%</p>
                                        <button onClick={() => {this.props.history.push(`${this.props.match.url}/asked`);}}>Show more</button>
                                    </div>
                                ):(<div>

                                    <p className={classes.title}>Unasked Question</p>
                                    <p>Right:{Number(unasked_right.length/all_unasked*100).toFixed(2)}%</p>
                                    <p>Wrong:{Number(unasked_wrong.length/all_unasked*100).toFixed(2)}%</p>
                                    <button onClick={() => {this.props.history.push(`${this.props.match.url}/unasked`);}}>Show more</button>
                                </div>)}

                            </div>
                            <div className='text-center'>
                                <Doughnut data={coverage} options={{ responsive: true }} />
                                <p className={classes.title}>Question Coverage</p>
                                <p>Covered:{Number(this.state.covered.length/(this.state.covered.length+this.state.uncovered.length)*100).toFixed(2)}%</p>
                                <p>Uncovered:{Number(this.state.uncovered.length/(this.state.covered.length+this.state.uncovered.length)*100).toFixed(2)}%</p>
                                <button onClick={() => {this.props.history.push(`${this.props.match.url}/coverage`);}}>Show more</button>
                            </div>

                        </div>
                        <Switch>
                            <Route
                                path={`${this.props.match.url}/asked`}
                                component={routeProps => <Asked {...routeProps} />}
                            />
                            <Route
                                path={`${this.props.match.url}/unasked`}
                                component={routeProps => <Unasked {...routeProps} />}
                            />
                            <Route
                                path={`${this.props.match.url}/overall`}
                                component={routeProps => <Overall {...routeProps} />}
                            />
                            <Route
                                path={`${this.props.match.url}/coverage`}
                                component={routeProps => <Covergae {...routeProps} />}
                            />
                            <Redirect to={`${this.props.match.url}/overall`} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
export const ContentDemo = withRouter(ContentDemoReact);
