# BoNiu-Book
Work through Pro MERN Stack 2nd Ed

## Chapter 4
### Summary
In this chapter, I learned how to use state and make changes to it on user interactions or other events. In this chapter, I think the most important thing is to understand how different components communicate with each other.

Parents communicate to children via `props`; when state changes, the props automatically change. Children communicate to parents via `callbacks`.

For example, In the author's codes, while initializing, the `<IssueTable issues={this.state.issues}/>` in the IssueList set props to its child IssueTable, this is called communication via `props`.

Whild user click the add button to add a new issue, the IssueAdd class's `handleSubmit(e)` get called and inside this function called `this.props.createIssue(issue)` where createIssue came from its parent `IssueList`. This is called communication via `callbacks`.

![Ch4 Image](https://github.ccs.neu.edu/NEU-CS5610-SU20/BoNiu-Book/blob/master/readme_images/chapter4.png)

## Chapter 3

### Summary

In this chapter, I learned how to reorganize custom elements such as list, table, row into classes, so that I can dynamically create or delete it. In this chapter, the programming logic changed. If I want to add some rows to a table. What I do is that I pass all the row data to the object of the table class. table class will then create object of the row class until there is nothing to be added. The most fancy part is that to make the code more readable and understandable, the React created so convenient features in the JSX to mix Javascript code with html code. By React syntax, it looks like that we are creating our own html tag. For example, the table I created in this chapter is wrapped in the `<IssueTable />`. And inside IssueTable object can be another user-defined html element, which are some `<IssueRow />` in this chapter. When React is passing data from parent user-defined html tag to its child html, the html attribute part is used. Therefore, when I created a new IssueRow using `<IssueRow key={issue.id} rowStyle={rowStyle} issue={issue}/>`, all of them can be accessed in the child class's render() method like `const issue = this.props.issue;`. The other method that can pass data to child user-defined html tag is through filling the inner part between the opening tag and closing tag, ex. `<IssueRow rowStyle={rowStyle} issue_id={1}>data passing to child</IssueRow>`. The child html can access the data by call `<td>{this.props.children}</td>` in its render methods.

![Ch3 Image](https://github.ccs.neu.edu/NEU-CS5610-SU20/BoNiu-Book/blob/master/readme_images/chapter3.png)
## Chapter 2

### Terminology and My Understanding
In this chapter, I implement a Hello World server. Here are what I learned from the chapter and my thought up until chapter 2.

`DOM`: Document Object Model. In the front end, javascript use DOM to dynamically change the HTML element. Then `React` comes to work as an additional better module to replace the standalone javascriptDOM.

*javascriptDOM*:
```html
<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>
```

*ReactDOM*:
```html
<script>
    const element = React.createElement('div', {title: 'Outer div'},
        React.createElement('h1', null, 'Hello World!')
    );
    ReactDOM.render(element, document.getElementById('content'));
</script>
```

`JSX`: Javascript XML. React.createElement has nested structure to create its sub-element. It will be messy when the hierarchy becomes large. React uses a markup language called JSX to address this.

*JSX*:
```html
<script>
    const element = (
    <div title="Outer div">
        <h1>Hello World!</h1>
    </div>
    );
    ReactDOM.render(element, document.getElementById('content'));
</script>
```

`nvm`: Node Version Manager. Tool makes installation and switching
between multiple versions of Node.js easy.

`npm`: default package manager for Node.js.

`Express`: The HTTP server in the Node.js environment.

`Babel`: Tool to transform JSX into JavaScript and transform newer JS into old ones for old browser support.

### Short Summary on How the Development Environment Get Configured

first we install nvm, then we install Node.js by nvm `$ nvm install 10`. Installing Node.js via nvm will also install npm. To install npm globally use `$ npm install –g npm@6`. `$ npm init` to init the npm, which will create folders to store all the third packages and dependencies. Install express by `$ npm install express@4`. By running `$ node server.js` starts the server where server.js contains code for the express server.

To better configure the development process and project easy to run, we configured the following:
1. JSX Transform in server side

    separate out JSX from JavaScript into .jsx files. Ex. 
   
   `<script type="text/babel" src="/App.jsx"></script>`
   
    Install `Babel` by `$ npm install --save-dev @babel/core@7 @babel/cli@7`. Since Babel is installed somewhere in the npm folder, we can easily find and use it using a convenient command called `npx` which resolves the correct *local* path of any executable. Comparison: `$ node_modules/.bin/babel --version` VS `$ npx babel --version`.

    Execute `$ npm install --save-dev @babel/preset-react@7` and `$ npm install --save-dev @babel/preset-env@7`. Create *.babelrc* files in the source folder that we want to perform the transformation.  

    Execute `$ npm install nodemon@1` to implement the functionality of restarting server whenever there are changes.

2. Change package.json: 

    `"start": "nodemon -w server server/server.js",`

    `"compile": "babel src --out-dir public",`

    `"watch": "babel src --out-dir public --watch --verbose"`

![Ch2 Image](https://github.ccs.neu.edu/NEU-CS5610-SU20/BoNiu-Book/blob/master/readme_images/chapter2.png)
