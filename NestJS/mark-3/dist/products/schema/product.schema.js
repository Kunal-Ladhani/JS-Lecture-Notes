"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_enum_1 = require("../enums/category.enum");
const mongoose = __importStar(require("mongoose"));
const schema = mongoose.Schema;
const types = schema.Types;
const ProdSchema = new schema({
    id: {
        type: types.ObjectId,
        required: true
    },
    title: {
        type: types.String,
        required: true
    },
    description: {
        type: types.String
    },
    price: {
        type: types.Number
    },
    category: {
        type: category_enum_1.Category
    },
    completedAt: {
        type: types.Date
    },
    createdAt: {
        type: types.Date
    },
    deletedAt: {
        type: types.Date
    }
});
module.exports = mongoose.model('Product', ProdSchema);
//# sourceMappingURL=product.schema.js.map