import React from 'react';

const revenue = (props) => {

  return (
    <div className="Revenue">
          <table className="revenue-table">
            <thead>
              <tr>
                <th>Revenue</th>
                <th>One-Time</th>
                <th>Monthly</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.delete}
        </tbody>
      </table>
    </div>

  )
};

export default revenue;