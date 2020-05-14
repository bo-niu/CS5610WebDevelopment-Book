// const element = React.createElement('div', {title: 'Outer div'},
//     React.createElement('h1', null, 'Hello World!')
// );
const element = (
    <div title="Outer div">
        <h1>Hello World!</h1>
    </div>
);
ReactDOM.render(element, document.getElementById('content'));