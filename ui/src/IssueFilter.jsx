/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';
import { withRouter } from 'react-router-dom';
import URLSearchParams from 'url-search-params';

class IssueFilter extends React.Component {
  constructor() {
    super();
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  onChangeStatus(e) {
    const status = e.target.value;
    const { history } = this.props;
    history.push({
      pathname: '/issues',
      search: status ? `?status=${status}` : '',
    });
    // console.log("enter issueFilter onChangeStatus");
    // console.log("this.props: \n", this.props);
    // console.log("will history being stacking?: \n", history);
  }

  render() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    return (
      <div>
        status:
        {' '}
        <select value={params.get('status') || ''} onChange={this.onChangeStatus}>
          <option value="">(All)</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
    );
  }
}

export default withRouter(IssueFilter);

// export default class IssueFilter extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <a href="/#/issues">All Issues</a> */}
//         <Link to="/issues">All Issues</Link>
//         {' | '}
//         {/* <a href="/#/issues?status=New">New Issues</a> */}
//         <Link to={{ pathname: '/issues', search: '?status=New' }}>New Issues</Link>
//         {' | '}
//         {/* <a href="/#/issues?status=Assigned">Assigned Issues</a> */}
//         <Link to={{ pathname: '/issues', search: '?status=Assigned' }}>Assigned Issues</Link>
//       </div>
//     );
//   }
// }
