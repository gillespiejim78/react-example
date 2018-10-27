import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const tableVals = [['Jim', 'Gillespie', '28']];
        return ( 
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                {tableVals.map(val => 
                    <tr>
                        <th>{val[0]}</th>
                        <th>{val[1]}</th>
                        <th>{val[2]}</th>
                    </tr>
                )}
            </table>
         );
    }
}
 
export default Table;