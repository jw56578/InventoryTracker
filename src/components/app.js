import React, {Component,PropTypes} from 'react';
import {vibrate} from '../services/vibrate';
import {confirm} from '../services/dialogs';
import {get,save} from '../services/store';

class App extends Component
{
    constructor(props, context) {
        super(props, context);
        this.startScannig = this.startScannig.bind(this);

    }
    startScannig(){
        cordova.plugins.barcodeScanner.scan(
            (result) =>{
               console.log(result);
               this.startScannig();
            }, 
            function (error) {
               console.log(error);
            }
        );

    }
    render(){
        var buttonStyle = {width:'100%',height:'4em'};
    
        return (
            <div style={{height:'100%'}}>
                <div style={{position:'relative',height:'100%',minHeight:'100%',margin: '0 auto -4em'}}>
                 
                    <button onClick={this.startScannig} style={buttonStyle}>Start Scanning</button>
                   
                </div>
                <div style={{height: '4em'}}>
                    
                </div>
            </div>
            
        )
    }
}
export default App;