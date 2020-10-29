"use strict";

var react_1 = require("react");
var TaskInput_1 = require("./components/TaskInput");
var TaskList_1 = require("./components/TaskList");
var initialState = [
    {
        id: 2,
        title: '次のタスク',
        done: false
    },
    {
        id: 1,
        title: '最初のタスク',
        done: true
    }
];
var App = function () {
    var _a = react_1.useState(initialState), tasks = _a[0], setTasks = _a[1];    
    return (<div>
            <TaskInput_1 setTasks={setTasks} tasks={tasks}/>;
            <TaskList_1 setTasks={setTasks} tasks={tasks}/>;
        </div>);
};

export default App
