import React from 'react';
import { Link,hashHistory} from 'react-router';
import { connect } from 'react-redux'
import axios from 'axios';
import * as ApiUrls from '../../config/imt-config.js'
import Panel from '../panels/Panel.jsx'
import VirtualizedSelect from 'react-virtualized-select'
import UploadInput from '../widgets/UploadInput.jsx'
import {valuesToSelectDataArray,copyAttachmentsReplacingElement} from '../../utils/Commons.jsx';
import InputText from "../widgets/InputText.jsx";
import DatePicker from 'react-datepicker';
import Button from '../widgets/Button.jsx'


export class NewEmployee extends React.Component {


    constructor(props) {
        super(props);
        this.state={
            selectedCostType:''
        }
    }


    render() {

        const clearFixStyle = {
            clear: 'both'
        };
        const attachStyle = {
            width: 400,
            height: 30
        }

        const divSelectStyle = {
            width: 830
        }

        const mainStyle = {display: "block"}
        // style={mainStyle}

        const txtStyle = {
            height: 30
        }

        const buttonsStyle={
            marginRight:40
        }

        const invoiceDivStyle={
            marginLeft:10
        }

        return (
			<div>
				New Employee Page
			</div>);
    }

}

function mapStateToProps (state,ownProps) {
	return {};
}

export default connect(mapStateToProps)(NewEmployee)
