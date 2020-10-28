"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var TaskInput = function (_a) {
    var setTasks = _a.setTasks, tasks = _a.tasks;
    var _b = react_1.useState(''), inputTitle = _b[0], setInputTitle = _b[1];
    var _c = react_1.useState(tasks.length + 1), count = _c[0], setCount = _c[1];
    var handleInputChange = function (e) {
        setInputTitle(e.Target.value);
    };
    var handleSubmit = function () {
        setCount(count + 1);
        var newTask = {
            id: count,
            title: inputTitle,
            done: false
        };
        setTasks(__spreadArrays([newTask], tasks));
        setInputTitle('');
    };
    return (<div>
            <div className="inputForm">
                <div className="inner">
                    <input type="text" className="input" value={inputTitle} onChange={handleInputChange}/>
                    <button onClick={handleSubmit} className="btn is-primary">追加</button>
                </div>
            </div>
        </div>);
};
exports["default"] = TaskInput;
