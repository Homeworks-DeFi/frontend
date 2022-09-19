import React from 'react';
import './dashboard.css'

function Dashboard (){
    return (
        <div>
            <div className='loandetailshead-text1'>Loan Details</div>
            <div>
            <span>Status</span>
            <div>Approved</div>
            </div>
            <div><span>$200,000</span>
                <div>Loan Amount</div></div>
        </div>
    )
}

export default Dashboard;