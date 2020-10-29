"use strict";

var react_1 = require("react");
var TaskItem = function (_a) {
    var task = _a.task, handleDone = _a.handleDone, handleDelete = _a.handleDelete;
    return (<li className={task.done ? 'done' : ""}>
                <label>
                    <input type="checkbox" className="checkbox-input" onClick={function () { return handleDone(task); }} defaultChecked={task.done}/>
                    <span className="checkbox-label">{task.title}</span>
                </label>
                <button onClick={function () { return handleDelete(task); }} className="btn is-delete">削除</button>
            </li>);
};
