// const element = React.createElement('div', {title: 'Outer div'},
//     React.createElement('h1', null, 'Hello World!')
// );

class HelloWorld extends React.Component {
    render() {
        const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
        const helloContinents = Array.from(continents, c => `Hello ${c}!`);
        const message = helloContinents.join(' ');
        return (
            <div title="Outer div">
                <h1>{message}</h1>
            </div>
        );
    }
}


const element = <HelloWorld />;
ReactDOM.render(element, document.getElementById('content'));