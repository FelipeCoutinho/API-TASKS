"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var taskController_1 = require("./controllers/taskController");
var route = express_1.Router();
route.get('/tasks', taskController_1.getTasks);
route.get('/tasks/:id', taskController_1.getTask);
route.post('/cad', taskController_1.saveTask);
route.put('/update/:id', taskController_1.updateTask);
route.delete('/del/:id', taskController_1.destroi);
route.patch('/save/:id', taskController_1.finisheTask); // indicapara alterar só um registro no banco
exports.default = route;
//# sourceMappingURL=routes.js.map