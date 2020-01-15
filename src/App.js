import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      columnDefs: [{
        headerName: "Product_Id", field: "id", sortable: true, resizable: true, tooltipField: 'id'
      }, {
        headerName: "Product_Name", field: "name", sortable: true, resizable: true, tooltipField: 'name'
      }, {
        headerName: "Product_Category", field: "category", sortable: true, resizable: true, tooltipField: 'category'
      }, {
        headerName: "Product_Price", field: "price", sortable: true, resizable: true, tooltipField: 'price'
      }],
      rowData: [{
        id : "1", name: "Earphone", category: "Electronics", price:100
      }, {
        id : "2", name: "Compass", category: "Stationary", price:20
      }, {
        id : "3", name: "Torchlight", category: "Electronics", price:40
      },{
        id : "4", name: "Speaker", category: "Electronics", price:80
      },{
        id : "5", name: "Scissors", category: "Stationary", price:30
      }]
    }
  }

  onGridReady(params) {

  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height:'500px',
          width: '800px'
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          onGridReady={this.onGridReady}
        >
        </AgGridReact>
      </div>
    );
  }
}

export default App;
