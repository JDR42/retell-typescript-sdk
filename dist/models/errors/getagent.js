"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgentResponseBody = exports.GetAgentResponseResponseBody = exports.GetAgentResponse422ResponseBody = exports.GetAgentResponse500ResponseBody = void 0;
var utils_1 = require("../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Internal Server Error
 */
var GetAgentResponse500ResponseBody = /** @class */ (function (_super) {
    __extends(GetAgentResponse500ResponseBody, _super);
    function GetAgentResponse500ResponseBody(err) {
        var _this = _super.call(this) || this;
        if (err) {
            Object.assign(_this, err);
            _this.message = JSON.stringify((0, class_transformer_1.classToPlain)(err, { exposeUnsetFields: false, excludeExtraneousValues: true }));
        }
        _this.name = "GetAgentResponse500ResponseBody";
        Object.setPrototypeOf(_this, GetAgentResponse500ResponseBody.prototype);
        return _this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Object)
    ], GetAgentResponse500ResponseBody.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error_message" }),
        __metadata("design:type", String)
    ], GetAgentResponse500ResponseBody.prototype, "errorMessage", void 0);
    return GetAgentResponse500ResponseBody;
}(Error));
exports.GetAgentResponse500ResponseBody = GetAgentResponse500ResponseBody;
/**
 * Unprocessable Content
 */
var GetAgentResponse422ResponseBody = /** @class */ (function (_super) {
    __extends(GetAgentResponse422ResponseBody, _super);
    function GetAgentResponse422ResponseBody(err) {
        var _this = _super.call(this) || this;
        if (err) {
            Object.assign(_this, err);
            _this.message = JSON.stringify((0, class_transformer_1.classToPlain)(err, { exposeUnsetFields: false, excludeExtraneousValues: true }));
        }
        _this.name = "GetAgentResponse422ResponseBody";
        Object.setPrototypeOf(_this, GetAgentResponse422ResponseBody.prototype);
        return _this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Object)
    ], GetAgentResponse422ResponseBody.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error_message" }),
        __metadata("design:type", String)
    ], GetAgentResponse422ResponseBody.prototype, "errorMessage", void 0);
    return GetAgentResponse422ResponseBody;
}(Error));
exports.GetAgentResponse422ResponseBody = GetAgentResponse422ResponseBody;
/**
 * Unauthorized
 */
var GetAgentResponseResponseBody = /** @class */ (function (_super) {
    __extends(GetAgentResponseResponseBody, _super);
    function GetAgentResponseResponseBody(err) {
        var _this = _super.call(this) || this;
        if (err) {
            Object.assign(_this, err);
            _this.message = JSON.stringify((0, class_transformer_1.classToPlain)(err, { exposeUnsetFields: false, excludeExtraneousValues: true }));
        }
        _this.name = "GetAgentResponseResponseBody";
        Object.setPrototypeOf(_this, GetAgentResponseResponseBody.prototype);
        return _this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Object)
    ], GetAgentResponseResponseBody.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error_message" }),
        __metadata("design:type", String)
    ], GetAgentResponseResponseBody.prototype, "errorMessage", void 0);
    return GetAgentResponseResponseBody;
}(Error));
exports.GetAgentResponseResponseBody = GetAgentResponseResponseBody;
/**
 * Bad Request
 */
var GetAgentResponseBody = /** @class */ (function (_super) {
    __extends(GetAgentResponseBody, _super);
    function GetAgentResponseBody(err) {
        var _this = _super.call(this) || this;
        if (err) {
            Object.assign(_this, err);
            _this.message = JSON.stringify((0, class_transformer_1.classToPlain)(err, { exposeUnsetFields: false, excludeExtraneousValues: true }));
        }
        _this.name = "GetAgentResponseBody";
        Object.setPrototypeOf(_this, GetAgentResponseBody.prototype);
        return _this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Object)
    ], GetAgentResponseBody.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error_message" }),
        __metadata("design:type", String)
    ], GetAgentResponseBody.prototype, "errorMessage", void 0);
    return GetAgentResponseBody;
}(Error));
exports.GetAgentResponseBody = GetAgentResponseBody;
