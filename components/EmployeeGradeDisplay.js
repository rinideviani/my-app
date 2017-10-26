import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';  
import EmployeeGradeDisplayContent from './EmployeeGradeDisplayContent'



export default class EmployeeGradeDisplay extends React.Component{


 state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    adjustCheckboxes: false,
    height: '300px' 
  };


	render(){
    const tableStyle ={
      background: "none" ,
      padding:"70px" ,
      height:"20px"
    };
       
 const tableHeaderStyle1={
  width:"30px" 
}
const tableHeaderStyle2={
  width:"50px" 
}
const tableHeaderStyle3={
  width:"250px" 
}
const tableHeaderStyle4={
  width:"245px" 
}
const tableHeaderStyle5={
  width:"70px" 
}
    const  employee  = this.props.employeeById;
     
    if ( !employee )
        {
            return (<div></div>) 
        } 
 
      
    return (
 
         
           <TableRow style={tableStyle} >
                <TableHeaderColumn style={tableHeaderStyle1} > DS </TableHeaderColumn >
                 
                <TableHeaderColumn style={tableHeaderStyle2} > Grade </TableHeaderColumn >
                <TableHeaderColumn style={tableHeaderStyle3} > Start Date </TableHeaderColumn >
                <TableHeaderColumn style={tableHeaderStyle4} > End Date </TableHeaderColumn >
                <TableHeaderColumn style={tableHeaderStyle5} > Action </TableHeaderColumn >
              </TableRow>
 
       


     )
 

	}
  
}