function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-third-party-components-third-party-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsThirdPartyDatatableNgxDatatableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"ngx-datatable\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\r\n         fxLayoutAlign.gt-xs=\"space-between center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Datatables</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">ngx-datatable</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\"\r\n           href=\"https://github.com/swimlane/ngx-datatable\"\r\n           target=\"_blank\">\r\n            <mat-icon class=\"mr-8\">link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p class=\"mb-32\">\r\n            <b>ngx-datatable</b> is a Angular component for presenting large and complex data.\r\n            It has all the features you would expect from any other table but in a light package with no external\r\n            dependencies. The table was designed to be extremely flexible and light; it doesn't make any assumptions\r\n            about your data or how you: filter, sort or page it.\r\n        </p>\r\n\r\n        <ngx-datatable\r\n            class=\"material\"\r\n            [rows]=\"rows\"\r\n            [loadingIndicator]=\"loadingIndicator\"\r\n            [columnMode]=\"'force'\"\r\n            [headerHeight]=\"48\"\r\n            [footerHeight]=\"56\"\r\n            [rowHeight]=\"'auto'\"\r\n            [scrollbarH]=\"true\"\r\n            [reorderable]=\"reorderable\"\r\n            [selectionType]=\"'checkbox'\"\r\n            [limit]=\"10\">\r\n\r\n            <ngx-datatable-column [width]=\"48\"\r\n                                  [canAutoResize]=\"false\"\r\n                                  [sortable]=\"false\">\r\n                <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\"\r\n                             let-selectFn=\"selectFn\">\r\n                    <mat-checkbox [checked]=\"allRowsSelected\" (change)=\"selectFn(!allRowsSelected)\"></mat-checkbox>\r\n                </ng-template>\r\n\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-isSelected=\"isSelected\"\r\n                             let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\r\n                    <mat-checkbox [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\"></mat-checkbox>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Name\" prop=\"name\"></ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Last Name\" prop=\"lastName\"></ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Company\" prop=\"company\"></ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components-third-party/google-maps/google-maps.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components-third-party/google-maps/google-maps.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsThirdPartyGoogleMapsGoogleMapsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"countdown\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\r\n         fxLayoutAlign.gt-xs=\"space-between center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">3rd Party Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Google Maps</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\"\r\n           href=\"https://angular-maps.com\"\r\n           target=\"_blank\">\r\n            <mat-icon class=\"mr-8\">link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n        <p>\r\n            <code>agm-map</code> is a angular component library for Google Maps.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Sample</div>\r\n        <p fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n            </agm-map>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Inputs</div>\r\n        <p class=\"py-8\">\r\n            Checkout the component api docs for detail:\r\n            <a href=\"https://angular-maps.com/api-docs/agm-core/components/AgmMap.html\" target=\"_blank\">AgmMap Api</a>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/main/documentation/components-third-party/components-third-party.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/documentation/components-third-party/components-third-party.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: ComponentsThirdPartyModule */

  /***/
  function srcAppMainDocumentationComponentsThirdPartyComponentsThirdPartyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsThirdPartyModule", function () {
      return ComponentsThirdPartyModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/release/index.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var app_main_documentation_components_third_party_google_maps_google_maps_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/documentation/components-third-party/google-maps/google-maps.module */
    "./src/app/main/documentation/components-third-party/google-maps/google-maps.module.ts");
    /* harmony import */


    var app_main_documentation_components_third_party_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/documentation/components-third-party/datatable/ngx-datatable.component */
    "./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.ts");

    var routes = [{
      path: 'datatables/ngx-datatable',
      component: app_main_documentation_components_third_party_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_9__["DocsComponentsThirdPartyNgxDatatableComponent"]
    }];

    var ComponentsThirdPartyModule = function ComponentsThirdPartyModule() {
      _classCallCheck(this, ComponentsThirdPartyModule);
    };

    ComponentsThirdPartyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_documentation_components_third_party_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_9__["DocsComponentsThirdPartyNgxDatatableComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"], app_main_documentation_components_third_party_google_maps_google_maps_module__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"]]
    })], ComponentsThirdPartyModule);
    /***/
  },

  /***/
  "./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsThirdPartyDatatableNgxDatatableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMtdGhpcmQtcGFydHkvZGF0YXRhYmxlL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcZG9jdW1lbnRhdGlvblxcY29tcG9uZW50cy10aGlyZC1wYXJ0eVxcZGF0YXRhYmxlXFxuZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy10aGlyZC1wYXJ0eS9kYXRhdGFibGUvbmd4LWRhdGF0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy10aGlyZC1wYXJ0eS9kYXRhdGFibGUvbmd4LWRhdGF0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: DocsComponentsThirdPartyNgxDatatableComponent */

  /***/
  function srcAppMainDocumentationComponentsThirdPartyDatatableNgxDatatableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsThirdPartyNgxDatatableComponent", function () {
      return DocsComponentsThirdPartyNgxDatatableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DocsComponentsThirdPartyNgxDatatableComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function DocsComponentsThirdPartyNgxDatatableComponent(_httpClient) {
        _classCallCheck(this, DocsComponentsThirdPartyNgxDatatableComponent);

        this._httpClient = _httpClient; // Set the defaults

        this.loadingIndicator = true;
        this.reorderable = true; // Set the private defaults

        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(DocsComponentsThirdPartyNgxDatatableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._httpClient.get('api/contacts-contacts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll)).subscribe(function (contacts) {
            _this.rows = contacts;
            _this.loadingIndicator = false;
          });
        }
        /**
         * On destroy
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Unsubscribe from all subscriptions
          this._unsubscribeAll.next();

          this._unsubscribeAll.complete();
        }
      }]);

      return DocsComponentsThirdPartyNgxDatatableComponent;
    }();

    DocsComponentsThirdPartyNgxDatatableComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DocsComponentsThirdPartyNgxDatatableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-third-party-ngx-datatable',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ngx-datatable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ngx-datatable.component.scss */
      "./src/app/main/documentation/components-third-party/datatable/ngx-datatable.component.scss")).default]
    })], DocsComponentsThirdPartyNgxDatatableComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components-third-party/google-maps/google-maps.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/main/documentation/components-third-party/google-maps/google-maps.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsThirdPartyGoogleMapsGoogleMapsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 960px;\n}\n:host agm-map {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMtdGhpcmQtcGFydHkvZ29vZ2xlLW1hcHMvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL3NyY1xcYXBwXFxtYWluXFxkb2N1bWVudGF0aW9uXFxjb21wb25lbnRzLXRoaXJkLXBhcnR5XFxnb29nbGUtbWFwc1xcZ29vZ2xlLW1hcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzLXRoaXJkLXBhcnR5L2dvb2dsZS1tYXBzL2dvb2dsZS1tYXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0JBQUE7QUNEUjtBRElJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzLXRoaXJkLXBhcnR5L2dvb2dsZS1tYXBzL2dvb2dsZS1tYXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYWdtLW1hcCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCAuY29udGVudCB7XG4gIG1heC13aWR0aDogOTYwcHg7XG59XG46aG9zdCBhZ20tbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components-third-party/google-maps/google-maps.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/main/documentation/components-third-party/google-maps/google-maps.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: DocsComponentsThirdPartyGoogleMapsComponent */

  /***/
  function srcAppMainDocumentationComponentsThirdPartyGoogleMapsGoogleMapsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsThirdPartyGoogleMapsComponent", function () {
      return DocsComponentsThirdPartyGoogleMapsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsThirdPartyGoogleMapsComponent =
    /**
     * Constructor
     */
    function DocsComponentsThirdPartyGoogleMapsComponent() {
      _classCallCheck(this, DocsComponentsThirdPartyGoogleMapsComponent);

      // Set the defaults
      this.lat = -34.397;
      this.lng = 150.644;
    };

    DocsComponentsThirdPartyGoogleMapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-third-party-google-maps',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-maps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components-third-party/google-maps/google-maps.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-maps.component.scss */
      "./src/app/main/documentation/components-third-party/google-maps/google-maps.component.scss")).default]
    })], DocsComponentsThirdPartyGoogleMapsComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components-third-party/google-maps/google-maps.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/main/documentation/components-third-party/google-maps/google-maps.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: GoogleMapsModule */

  /***/
  function srcAppMainDocumentationComponentsThirdPartyGoogleMapsGoogleMapsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapsModule", function () {
      return GoogleMapsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/index.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fuse/components/index */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var _google_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./google-maps.component */
    "./src/app/main/documentation/components-third-party/google-maps/google-maps.component.ts");

    var routes = [{
      path: 'google-maps',
      component: _google_maps_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponentsThirdPartyGoogleMapsComponent"]
    }];

    var GoogleMapsModule = function GoogleMapsModule() {
      _classCallCheck(this, GoogleMapsModule);
    };

    GoogleMapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_google_maps_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponentsThirdPartyGoogleMapsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
      }), _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__["FuseSharedModule"], _fuse_components_index__WEBPACK_IMPORTED_MODULE_7__["FuseHighlightModule"]]
    })], GoogleMapsModule);
    /***/
  }
}]);
//# sourceMappingURL=components-third-party-components-third-party-module-es5.js.map