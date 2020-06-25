/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM PropTypes */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "no-alert": "off" */

import graphQLFetch from './graphQLFetch.js';

// eslint-disable-next-line react/prefer-stateless-function
class IssueFilter extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue filter.</div>
    );
  }
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
    };
    const { createIssue } = this.props;
    createIssue(issue);
    form.owner.value = '';
    form.title.value = '';
  }

  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" placeholder="Owner" />
        <input type="text" name="title" placeholder="Title" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

IssueAdd.propTypes = {
  createIssue: PropTypes.func.isRequired,
};

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      issueList {
        id title status owner
        created effort due
      }
    }`;
    // const response = await fetch('/graphql', {
    //     method: 'POST',
    //     headers: {'Content-type': 'application/json'},
    //     body: JSON.stringify({query})
    // });

    // const body = await response.text();
    // const result = JSON.parse(body, jsonDateReviver);
    // this.setState({issues: result.data.issueList});
    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  async createIssue(issue) {
    // issue.id = this.state.issues.length + 1;
    // issue.created = new Date();
    // const newIssueList = this.state.issues.slice();
    // newIssueList.push(issue);
    // this.setState({issues: newIssueList});
    const query = `mutation issueAdd($issue: IssueInputs!) {
      issueAdd(issue: $issue){
        id
      }
    }`;

    // const response = await fetch('/graphql', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify( { query, variables: { issue } } )
    // });

    // this.loadData();

    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { issues } = this.state;
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </React.Fragment>
    );
  }
}

function IssueRow({ issue }) {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ' '}</td>
      <td>{issue.title}</td>
    </tr>
  );
}

function IssueTable({ issues }) {
  const issueRows = issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </table>
  );
}


const element = <IssueList />;
ReactDOM.render(element, document.getElementById('content'));
