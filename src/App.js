
import React, { Component } from "react";
import datasource from './data';
import ItemTable from './components/ItemsTable';
import {Pagination} from 'carbon-components-react';
import  'carbon-components/css/carbon-components.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: datasource(),
      // totalItems: 0,
      currentPageSize: 10,
      firstRowIndex: 0,
    };

  }

  render() {
    var rows = this.state.items;
    var totalItems = rows.length;
    return (
        <>
            <div className={'bx--row'}>
                <div className={'bx--col-lg-12'}>
              <ItemTable rows={rows.slice(this.state.firstRowIndex,
                  this.state.firstRowIndex + this.state.currentPageSize)}>
              </ItemTable>
                </div>
            </div>
            <div className={'bx--row'}>
                <div className={'bx--col-lg-12'}>
                  <Pagination
                      totalItems={totalItems}
                      backwardText="Previous page"
                      forwardText="Next page"
                      pageSize={this.state.currentPageSize}
                      pageSizes={[5, 10, 25, 100]}
                      itemsPerPageText="Items per page"
                      onChange={({ page, pageSize }) => {
                        if (pageSize !== this.state.currentPageSize) {
                          this.setState({ currentPageSize: pageSize });
                        }
                        this.setState({ firstRowIndex: pageSize * (page - 1) });
                        this.forceUpdate();
                      }}
                  />
                </div>
            </div>
        </>
    );
  }
}

export default App;

// ReactDOM.render(<App />, document.querySelector(".container"));
