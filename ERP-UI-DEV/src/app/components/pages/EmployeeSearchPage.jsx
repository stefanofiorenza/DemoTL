import React from 'react';
import { Link,hashHistory} from 'react-router';
import { connect } from 'react-redux'
import axios from 'axios';
import * as ApiUrls from '../../config/imt-config.js'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Panel from '../panels/Panel.jsx'
import {MOCK_INVOICES_ALL} from '../../state/mocks/IMT-Invoices.js'


export class EmployeeSearchPage extends React.Component  {


	constructor(props) {
		super(props);
        this.formatInvoiceDetailButtonCell=this.formatInvoiceDetailButtonCell.bind(this);
        this.formatList=this.formatList.bind(this);
        this.invoiceDetails=this.invoiceDetails.bind(this);
	}

    invoiceDetails(){


	}

    formatInvoiceDetailButtonCell(cell, row){

        const btnStyle={
            marginLeft:10,
        }
        let clickHandler=this.invoiceDetails;
        var emptyContent = React.createElement('i',{id:cell,onClick:clickHandler});
        var invoiceDetailsBtn = React.createElement('a',{id:cell,className:"btn-action glyphicons eye_open btn-success", onClick:clickHandler, style:btnStyle}, emptyContent);
        var invoiceDownloadBtn = React.createElement('a',{id:cell,className:"btn-action glyphicons download btn-success", onClick:clickHandler,style:btnStyle}, emptyContent);
		var elemsArr=[invoiceDetailsBtn,invoiceDownloadBtn];
        var cellContent=React.createElement('span',{},elemsArr);
        return cellContent;
    }

    formatList(cell, row){

        var selectElements='<select style=\"width: 90%; height:28px\">';
        var selectElementsAsStr="";
        for (let i=0;i<cell.length; i++){
            //console.log("Add group: "+cell[i]+" Index: "+i);
            selectElementsAsStr+='<option value=\"'+cell[i]+'\" >'+cell[i]+'</option>';
        }
        return 	selectElements+selectElementsAsStr+"</select>";

    }


	render() {

        const tableDiv={
            display:"block",
            marginLeft:70,
            width:1200,
            height:'85%'
        };

		return (
			<div>
				EmployeeSearch Page
			</div>);
	}
}


function mapStateToProps (state,ownProps) {
	/*
	return {
		categoriesLoaded: StateSelectors.categories_isLoaded(state),
		authenticated: StateSelectors.auth_authenticated(state),
		role:StateSelectors.auth_role(state)
	};*/
	return {};
}

export default connect(mapStateToProps)(EmployeeSearchPage)
