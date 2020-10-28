"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var TaskItem_1 = require("./TaskItem");
var TaskList = function (_a) {
    var tasks = _a.tasks, setTasks = _a.setTasks;
    var handleDone = function (task) {
        setTasks(function (prev) { return prev.map(function (t) {
            return t.id === task.id
                ? __assign(__assign({}, task), { done: !task.done }) : t;
        }); });
    };
    var handleDelete = function (task) {
        setTasks(function (prev) { return prev.filter(function (t) {
            return t.id !== task.id;
        }); });
    };
    return (<div className="inner">
        {tasks.length <= 0 ? '登録されたTODOはありません。' :
        <ul className="task-list">
            {tasks.map(function (task) { return (<TaskItem_1["default"] key={task.id} task={task} handleDelete={handleDelete} handleDone={handleDone}/>); })}   
            </ul>}
        </div>);
};
exports["default"] = TaskList;
