# BoNiu-Book

Hi, this is the Issue Tracker project on the book [Pro MERN Stack Full Stack Web App Development with Mongo, Express, React, and Node 2nd Edition](https://www.apress.com/gp/book/9781484243909) by Vasan Subramanian. The contents below shows my progress and summary on the project.

Work through Pro MERN Stack 2nd Ed

## Chapter 7

### Summary

In this chapter, we made a big architectural change by separating the UI and the API servers. The implications of CORS is discussed in this chapter and we coded an optioon for dealing with it using a proxy. The architecture is shown on the image below. Also, I learned how to make the application configurable for different deployment environments like staging and production. Finally, in order to make the development work more convenient, we integrate the ESLint to take care of our coding standards and validation. After working on fixing the ESLint warnings and errors for so long, I find the tool so powerful.

![Ch7 Architecture Image](https://github.ccs.neu.edu/NEU-CS5610-SU20/BoNiu-Book/blob/master/readme_images/chapter7-architecture.png)

![Ch7 Image](https://github.ccs.neu.edu/NEU-CS5610-SU20/BoNiu-Book/blob/master/readme_images/chapter7.png)

## Chapter 6

### Summary

In this chapter, I learned the usage of MongoDB. MongoDB has collections corresponding to the tables in SQL based database. MongoDB uses mongo shell to perform CRUD operation which is very much like javascript corresponding to the sql language in relational database. Besides the mongo shell, the MongoDB Nodejs Driver provides another interface to operate on MongoDB. Therefore, the logic of integrating MongoDB into our project is to firstly install mongodb nodejs driver, then write a seperate JS code file to initialize the mongodb. Everytime we want to initialize the mongodb, we run this js code. Finally in the project, we move the previous in-memory data to the database.

I need to spend more time to get familiar with all commonly used operations of MongoDB by practice.

### Useful Resources

MongoDB Cheat Sheet:

[Click Me!](https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6)

![Ch6 Image](https://github.ccs.neu.edu/NEU-CS5610-SU20/BoNiu-Book/blob/master/readme_images/chapter6.png)
## Chapter 5
### Summary

In this chapter, I integrated `GraphQL` into the project. GraphQL is a more powerful, advanced and easy to use tool compared with `REST`, because GraphQL creatively makes use of the feature of graph to avoid the redundant data that user does not want if using REST. In this project, GraphQL acts as a `middleware` in the server side, where middleware is a router who diverges requests from the client side. GraphQL has it own syntax for CRUD operations, just like another type of SQL language. Besides, to use that in Node.js and front-end javascript, one has to get familiar with its javascript API. 

And also, since GraphQL works for the communication between the server side and the client side, the async feature of the javascript came to use in this chapter. After finishing this chapter, I practiced the async, await keyword in javascript.

Overall, this chapter is heavier than the previous chapter and I think I need some more time to get fully understand all the contents in this chapter.

![Ch5 Image](https://github.ccs.neu.edu/NEU-CS5610-SU20/BoNiu-Book/blob/master/readme_images/chapter5.png)

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
