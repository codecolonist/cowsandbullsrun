webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-cowsandbull></app-cowsandbull>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cowsandbull_cowsandbull_component__ = __webpack_require__("../../../../../src/app/cowsandbull/cowsandbull.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__cowsandbull_cowsandbull_component__["a" /* CowsandbullComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cowsandbull/cowsandbull.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item{\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cowsandbull/cowsandbull.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n  <img src=\"assets/cowsandbulls.jpeg\" class=\".img-fluid. max-width: 100%; height: auto;\" alt=\"Responsive image\" style=\"width:500px;height:250px;\">\n</div>\n<br>\n<h3 style=\"margin-left: 42%\">choose your Level</h3>\n<br>\n\n<div class=\"list-group\" >\n  <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"LockWord(3)\">LEVEL-1</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"LockWord(4)\">LEVEL-2</button>\n  <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"LockWord(5)\">LEVEL-3</button>\n</div>\n   \n  <br>\n  <br>\n  <div class=\"input-group input-group-lg\" style=\"margin-left: 35%\">\n\n  <input #box (keyup.enter)=\"onEnter(box.value)\" type=\"text\" class=\"form-control align-middle\" aria-describedby=\"inputGroup-sizing-sm\" size=\"35\" [attr.maxlength]=\"wordlen\">\n  </div>\n\n<div style=\"margin-left: 40%\">\n   \n\n    <br>\n    <br>\n  <table class=\"table table-bordered\" style=\"margin-left: -35%\">\n    <thead>\n      <th scope=\"col\" > Word </th>\n      <th scope=\"col\"> Bulls </th>\n      <th scope=\"col\"> Cows </th>\n    </thead>\n    <tbody >\n      <tr *ngFor=\"let try of tries\" >\n        <td>{{try.word}}</td>\n        <td>{{try.bulls}}</td>\n        <td>{{try.cows}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br>\n  \n\n<div class=\"alert alert-dark\" role=\"alert\">\n    <h3 style=\"margin-left: 39%\">{{congrats}}</h3>\n  </div>\n\n\n\n<div class=\"jumbotron text-left\">\n<p>\n  This fun word game is a great brain teaser that you can play alone in under 5 minutes. The objective of the game is to guess a Secret Word in a limited number of tries. Based on the level selected, it can be a three, four or five letter word. For each time you try to guess, the system will return 2 clues. These 2 clues are called the Cow and the Bull. \n<br>\n<br>\n<B>Bull</B> - indicates that you have guessed one of the letters in the secret word, but, it is <B>NOT IN</B> the correct position. \n<br>\n<br>\n<B>Cow</B>- indicates that you have guessed one of the letters in the secret word, and, it is <B>IN </B>the correct position. \n<br>\n<br>\nWith the help of the Cows and Bulls that you uncover with each try, you are better equipped to guess the Secret Word. \n<br>\n<br>\nThis game improves logical thinking & aptitude. \n<br>\n<br>\nkeep guessing and have fun !!!\n<br>\n<br>\n<B>LEVEL-1</B> is 3 letter word game ,<B>LEVEL-2</B>  is 4 letter word game,<B>LEVEL-3</B> is 5 letter word game\n</p>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cowsandbull/cowsandbull.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CowsandbullComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__triesinfo__ = __webpack_require__("../../../../../src/app/cowsandbull/triesinfo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CowsandbullComponent = /** @class */ (function () {
    function CowsandbullComponent() {
        this.tries = [];
    }
    CowsandbullComponent.prototype.ngOnInit = function () {
        this.title = "Welcome to Cows&Bulls";
        this.index = 0;
    };
    CowsandbullComponent.prototype.howManyRepeated = function (str) {
        try {
            return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length;
        }
        catch (e) {
            return 0;
        }
    };
    CowsandbullComponent.prototype.LockWord = function (num) {
        this.wordlen = num;
        if (num === 4) {
            var i4 = Math.floor(Math.random() * 10);
            var randomwords4 = ["able", "what", "bike", "play", "kite", "blue", "cast", "card", "coat", "dial", "disk"];
            this.lockword = randomwords4[i4];
        }
        else if (num === 3) {
            var j = Math.floor(Math.random() * 10);
            var randomwords3 = ["fly", "bye", "eat", "ate", "sum", "cry", "buy", "foe", "got", "put", "sit"];
            this.lockword = randomwords3[j];
        }
        else {
            var k = Math.floor(Math.random() * 10);
            var randomwords5 = ["child", "party", "their", "agent", "frank", "blast", "chunk", "water", "scale", "payer", "basic"];
            this.lockword = randomwords5[k];
        }
    };
    CowsandbullComponent.prototype.handleError = function () {
        alert("please start the game");
    };
    CowsandbullComponent.prototype.onEnter = function (word) {
        this.cows = 0;
        this.bulls = 0;
        word = word.toLowerCase();
        if (word === this.lockword) {
            //this.congrats="you won this game";
            word = "";
            alert("you won this game,please start the game again");
            location.reload();
        }
        else if (word.length !== this.wordlen) {
            if (word.length === 0) {
                alert("please start the game");
            }
            alert("please enter " + this.wordlen + " letter to continue gaming");
        }
        else {
            var dup = this.howManyRepeated(word);
            if (dup === 0) {
                this.len = word.length;
                var i;
                var cow_count = 0;
                var bull_count = 0;
                for (i = 0; i < this.len; i++) {
                    if (word[i] === this.lockword[i]) {
                        this.cows = ++cow_count;
                    }
                    else {
                        var j;
                        for (j = 0; j < this.len; j++) {
                            if (word[i] === this.lockword[j]) {
                                this.bulls = ++bull_count;
                            }
                        }
                    }
                }
                this.triesinfo = new __WEBPACK_IMPORTED_MODULE_1__triesinfo__["a" /* Triesinfo */](word, this.bulls, this.cows);
                console.log(this.triesinfo);
                this.tries.push(this.triesinfo);
                this.congrats = "please try again";
            }
            else {
                alert("please go thru the rules before playing game");
            }
        }
    };
    CowsandbullComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-cowsandbull',
            template: __webpack_require__("../../../../../src/app/cowsandbull/cowsandbull.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cowsandbull/cowsandbull.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CowsandbullComponent);
    return CowsandbullComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cowsandbull/triesinfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Triesinfo; });
var Triesinfo = /** @class */ (function () {
    function Triesinfo(word, bulls, cows) {
        this.word = word;
        this.bulls = bulls;
        this.cows = cows;
    }
    return Triesinfo;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map