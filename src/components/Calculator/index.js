import React, {Component} from 'react';
import Display from '../Display';
import ControlPanel from '../ControlPanel';
import Digits from '../Digits';
import Operators from '../Operatoras';
import History from '../History';
import './Calculator.css';

class Calculator extends Component {
    render() {
        return (
            <main className="react-calculator">
                <Display />
                <ControlPanel />
                <Digits />
                <Operators />
                <History />
            </main>
        )
    }
}

export default Calculator;