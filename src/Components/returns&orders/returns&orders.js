import React from 'react';

const YourOrder =() =>{
    return(
        <div id="yourOrders" role="main" style={{width:"931px"}}>
            <div id="yourOrdersContent">
                <div class="a-section a-spacing-medium a-spacing-top-small">
                   
                </div>
                <div id="yourOrdersBannersContainer">
                        
                </div>
                <div className="a-row">
                    <div className="a-column a-span6">
                        <h1 className="a-spacing-medium">
                            Your Orders
                        </h1>
                    </div>
                    <div className="a-column a-span6 a-span-last">
                        <div className="a-row a-spacing-medium search-bar">
                            <form id="searchForm" className="form-container">
                                <div className="a-row field-container">
                                    <div className="a-search">
                                        <i class="a-icon a-icon-search"></i>
                                        <input type="search" id="searchOrdersInput"
                                        placeholder="Search all orders" name="search"
                                        className="a-input-text field"
                                        />
                                    </div>
                                    
                                </div>
                                <div className="a-row button-container">
                                    <span class="a-button a-button-search search-order-input">
                                        <span className="a-button-inner">
                                            <input type="submit" className="a-button-input"/>
                                            <span className="a-button-text"
                                            >
                                                Search Orders</span>
                                        </span>
                                    </span>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default YourOrder;