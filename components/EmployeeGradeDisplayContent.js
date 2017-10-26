import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

 
import DatePicker from 'material-ui/DatePicker'; 



export default class EmployeeGradeDisplayContent extends React.Component{


 state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    adjustCheckboxes: false,
    height: '300px' ,
    coloumnNumber: 5
  };


	render(){
    
    const tableStyle =
    {
      background: "none",
       width:"1000px" ,
       margin:"5px",
       height:"5px"
    }; 
      
      const startDate = new Date(this.props.startDate); 
      const endDate = new Date(this.props.endDate);  
      
    return (
 
  
          <TableBody   
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
            coloumnNumber={this.state.coloumnNumber}
          >
             
              <TableRow   >

                <TableRowColumn>{this.props.ds}</TableRowColumn>
                <TableRowColumn>{this.props.currentGrade}</TableRowColumn>
                <TableRowColumn >   
                 <  DatePicker 
                    name="startDate"
                    disabled={false} 
                    value={startDate}
                  />  

                </TableRowColumn>

                <TableRowColumn  > 
                  <   DatePicker 
                      name="endDate"
                      disabled={false} 
                      value={endDate}
                  />

                </TableRowColumn>

                <TableRowColumn>  
                  Delete
                </TableRowColumn>


              </TableRow>
               
          </TableBody> 
     ) 
	}
  
}