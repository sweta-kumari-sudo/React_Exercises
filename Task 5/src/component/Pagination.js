import React, { Component } from 'react';
import {
    EuiButtonEmpty,
    EuiContextMenuItem,
    EuiContextMenuPanel,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPopover,
    EuiPagination
  } from '@elastic/eui';

  class Pagination extends Component {
      constructor(props) {
          super(props)

          this.state = {
              activePage: 0,
              isPopover: false,
              page_count: 10,
              pageSize: 20
          }
        }

          onButtonClick = () => {
              this.setState({
                  isPopover: true
              })
          }

          closePopover = (value) => {
              this.setState({
                  isPopover: false,
                  pageSize: value
              })
              this.props.changePageSize(value)
          }



          render() {
            const button = (
                <EuiButtonEmpty
                  size="s"
                  color="text"
                  iconType="arrowDown"
                  iconSide="right"
                  onClick={this.onButtonClick}>
                  Rows per page: {this.state.pageSize}
                </EuiButtonEmpty>
              );
            
              const items = [
                <EuiContextMenuItem
                key="20 rows"
                icon="empty"
                onClick={() => {
                  this.closePopover(20);
                  
                }}>
                20 rows
                </EuiContextMenuItem>,
                <EuiContextMenuItem
                  key="10 rows"
                  icon="empty"
                  onClick={() => {
                    this.closePopover(10);
                    
                  }}>
                  10 rows
                </EuiContextMenuItem>,
                <EuiContextMenuItem
                  key="4 rows"
                  icon="empty"
                  onClick={() => {
                    this.closePopover(4);
                    
                  }}>
                  4 rows
                </EuiContextMenuItem>,
                <EuiContextMenuItem
                  key="5 rows"
                  icon="check"
                  onClick={() => {
                    this.closePopover(5);
                   
                  }}>
                  5 rows
                </EuiContextMenuItem>,
                <EuiContextMenuItem
                  key="2 rows"
                  icon="empty"
                  onClick={() => {
                    this.closePopover(2);
                   
                  }}>
                  2 rows
                </EuiContextMenuItem>,
              ];
            

              return (
                <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiPopover
                    button={button}
                    isOpen={this.state.isPopover}
                    closePopover={this.closePopover}
                    panelPaddingSize="none">
                    <EuiContextMenuPanel items={items} />
                  </EuiPopover>
                </EuiFlexItem>

                <EuiFlexItem grow={false}>
                <EuiPagination
          pageCount={this.state.PAGE_COUNT}
          activePage={this.state.activePage}
          onPageClick={this.state.goToPage}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  )
    }
}


            
  export default Pagination