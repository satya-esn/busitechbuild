function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~e-commerce-e-commerce-module~main-angular-material-elements-angular-material-elements-module~ba0b6e0b"], {
  /***/
  "./node_modules/@angular/material/esm2015/paginator.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/paginator.js ***!
    \*************************************************************/

  /*! exports provided: MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER */

  /***/
  function node_modulesAngularMaterialEsm2015PaginatorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
      return MatPaginatorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
      return PageEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
      return MatPaginator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
      return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
      return MatPaginatorIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
      return MAT_PAGINATOR_INTL_PROVIDER;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
     * include it in a custom provider
     */


    var MatPaginatorIntl = function MatPaginatorIntl() {
      _classCallCheck(this, MatPaginatorIntl);

      /**
       * Stream to emit from when labels are changed. Use this to notify components when the labels have
       * changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      /**
       * A label for the page size selector.
       */

      this.itemsPerPageLabel = 'Items per page:';
      /**
       * A label for the button that increments the current page.
       */

      this.nextPageLabel = 'Next page';
      /**
       * A label for the button that decrements the current page.
       */

      this.previousPageLabel = 'Previous page';
      /**
       * A label for the button that moves to the first page.
       */

      this.firstPageLabel = 'First page';
      /**
       * A label for the button that moves to the last page.
       */

      this.lastPageLabel = 'Last page';
      /**
       * A label for the range of items within the current page and the length of the whole list.
       */

      this.getRangeLabel =
      /**
      * @param {?} page
      * @param {?} pageSize
      * @param {?} length
      * @return {?}
      */
      function (page, pageSize, length) {
        if (length == 0 || pageSize == 0) {
          return "0 of ".concat(length);
        }

        length = Math.max(length, 0);
        /** @type {?} */

        var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

        /** @type {?} */

        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return "".concat(startIndex + 1, " - ").concat(endIndex, " of ").concat(length);
      };
    };

    MatPaginatorIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatPaginatorIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatPaginatorIntl_Factory() {
        return new MatPaginatorIntl();
      },
      token: MatPaginatorIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatPaginatorIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_PAGINATOR_INTL_PROVIDER = {
      // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
      provide: MatPaginatorIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatPaginatorIntl]],
      useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The default page size if there is no page size and there are no provided page size options.
     * @type {?}
     */

    var DEFAULT_PAGE_SIZE = 50;
    /**
     * Change event object that is emitted when the user selects a
     * different page size or navigates to another page.
     */

    var PageEvent = function PageEvent() {
      _classCallCheck(this, PageEvent);
    }; // Boilerplate for applying mixins to MatPaginator.

    /**
     * \@docs-private
     */


    var MatPaginatorBase = function MatPaginatorBase() {
      _classCallCheck(this, MatPaginatorBase);
    };
    /** @type {?} */


    var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinInitialized"])(MatPaginatorBase));
    /**
     * Component to provide navigation between paged information. Displays the size of the current
     * page, user-selectable options to change that size, what items are being shown, and
     * navigational button to go to the previous or next page.
     */


    var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
      _inherits(MatPaginator, _MatPaginatorBase2);

      var _super = _createSuper(MatPaginator);

      /**
       * @param {?} _intl
       * @param {?} _changeDetectorRef
       */
      function MatPaginator(_intl, _changeDetectorRef) {
        var _this;

        _classCallCheck(this, MatPaginator);

        _this = _super.call(this);
        _this._intl = _intl;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._pageIndex = 0;
        _this._length = 0;
        _this._pageSizeOptions = [];
        _this._hidePageSize = false;
        _this._showFirstLastButtons = false;
        /**
         * Event emitted when the paginator changes the page size or page index.
         */

        _this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._intlChanges = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this._changeDetectorRef.markForCheck();
        });
        return _this;
      }
      /**
       * The zero-based page index of the displayed list of items. Defaulted to 0.
       * @return {?}
       */


      _createClass(MatPaginator, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._initialized = true;

          this._updateDisplayedPageSizeOptions();

          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlChanges.unsubscribe();
        }
        /**
         * Advances to the next page if it exists.
         * @return {?}
         */

      }, {
        key: "nextPage",
        value: function nextPage() {
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex++;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move back to the previous page if it exists.
         * @return {?}
         */

      }, {
        key: "previousPage",
        value: function previousPage() {
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex--;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the first page if not already there.
         * @return {?}
         */

      }, {
        key: "firstPage",
        value: function firstPage() {
          // hasPreviousPage being false implies at the start
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = 0;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the last page if not already there.
         * @return {?}
         */

      }, {
        key: "lastPage",
        value: function lastPage() {
          // hasNextPage being false implies at the end
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = this.getNumberOfPages() - 1;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Whether there is a previous page.
         * @return {?}
         */

      }, {
        key: "hasPreviousPage",
        value: function hasPreviousPage() {
          return this.pageIndex >= 1 && this.pageSize != 0;
        }
        /**
         * Whether there is a next page.
         * @return {?}
         */

      }, {
        key: "hasNextPage",
        value: function hasNextPage() {
          /** @type {?} */
          var maxPageIndex = this.getNumberOfPages() - 1;
          return this.pageIndex < maxPageIndex && this.pageSize != 0;
        }
        /**
         * Calculate the number of pages
         * @return {?}
         */

      }, {
        key: "getNumberOfPages",
        value: function getNumberOfPages() {
          if (!this.pageSize) {
            return 0;
          }

          return Math.ceil(this.length / this.pageSize);
        }
        /**
         * Changes the page size so that the first item displayed on the page will still be
         * displayed using the new page size.
         *
         * For example, if the page size is 10 and on the second page (items indexed 10-19) then
         * switching so that the page size is 5 will set the third page as the current page so
         * that the 10th item will still be displayed.
         * @param {?} pageSize
         * @return {?}
         */

      }, {
        key: "_changePageSize",
        value: function _changePageSize(pageSize) {
          // Current page needs to be updated to reflect the new page size. Navigate to the page
          // containing the previous page's first item.

          /** @type {?} */
          var startIndex = this.pageIndex * this.pageSize;
          /** @type {?} */

          var previousPageIndex = this.pageIndex;
          this.pageIndex = Math.floor(startIndex / pageSize) || 0;
          this.pageSize = pageSize;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Checks whether the buttons for going forwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_nextButtonsDisabled",
        value: function _nextButtonsDisabled() {
          return this.disabled || !this.hasNextPage();
        }
        /**
         * Checks whether the buttons for going backwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_previousButtonsDisabled",
        value: function _previousButtonsDisabled() {
          return this.disabled || !this.hasPreviousPage();
        }
        /**
         * Updates the list of page size options to display to the user. Includes making sure that
         * the page size is an option and that the list is sorted.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateDisplayedPageSizeOptions",
        value: function _updateDisplayedPageSizeOptions() {
          if (!this._initialized) {
            return;
          } // If no page size is provided, use the first page size option or the default page size.


          if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
          }

          this._displayedPageSizeOptions = this.pageSizeOptions.slice();

          if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
          } // Sort the numbers using a number-specific sort function.


          this._displayedPageSizeOptions.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a - b;
          });

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits an event notifying that a change of the paginator's properties has been triggered.
         * @private
         * @param {?} previousPageIndex
         * @return {?}
         */

      }, {
        key: "_emitPageEvent",
        value: function _emitPageEvent(previousPageIndex) {
          this.page.emit({
            previousPageIndex: previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
          });
        }
      }, {
        key: "pageIndex",
        get: function get() {
          return this._pageIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The length of the total number of items that are being paginated. Defaulted to 0.
         * @return {?}
         */

      }, {
        key: "length",
        get: function get() {
          return this._length;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Number of items to display on a page. By default set to 50.
         * @return {?}
         */

      }, {
        key: "pageSize",
        get: function get() {
          return this._pageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * The set of provided page size options to display to the user.
         * @return {?}
         */

      }, {
        key: "pageSizeOptions",
        get: function get() {
          return this._pageSizeOptions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSizeOptions = (value || []).map(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(p);
          });

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * Whether to hide the page size selection UI from the user.
         * @return {?}
         */

      }, {
        key: "hidePageSize",
        get: function get() {
          return this._hidePageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether to show the first/last buttons UI to the user.
         * @return {?}
         */

      }, {
        key: "showFirstLastButtons",
        get: function get() {
          return this._showFirstLastButtons;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatPaginator;
    }(_MatPaginatorBase);

    MatPaginator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-paginator',
        exportAs: 'matPaginator',
        template: "<div class=\"mat-paginator-outer-container\"><div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" [color]=\"color\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [disabled]=\"disabled\" [aria-label]=\"_intl.itemsPerPageLabel\" (selectionChange)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/></svg></button></div></div></div>",
        styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}"],
        inputs: ['disabled'],
        host: {
          'class': 'mat-paginator'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatPaginator.ctorParameters = function () {
      return [{
        type: MatPaginatorIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    MatPaginator.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      length: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hidePageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showFirstLastButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      page: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatPaginatorModule = function MatPaginatorModule() {
      _classCallCheck(this, MatPaginatorModule);
    };

    MatPaginatorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]],
        exports: [MatPaginator],
        declarations: [MatPaginator],
        providers: [MAT_PAGINATOR_INTL_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=paginator.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/sort.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/sort.js ***!
    \********************************************************/

  /*! exports provided: MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015SortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
      return MatSortModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
      return MatSortHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
      return MatSortHeaderIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSort", function () {
      return MatSort;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
      return matSortAnimations;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @param {?} id
     * @return {?}
     */


    function getSortDuplicateSortableIdError(id) {
      return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderNotContainedWithinSortError() {
      return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderMissingIdError() {
      return Error("MatSortHeader must be provided with a unique id.");
    }
    /**
     * \@docs-private
     * @param {?} direction
     * @return {?}
     */


    function getSortInvalidDirectionError(direction) {
      return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatSort.

    /**
     * \@docs-private
     */


    var MatSortBase = function MatSortBase() {
      _classCallCheck(this, MatSortBase);
    };
    /** @type {?} */


    var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
    /**
     * Container for MatSortables to manage the sort state and provide default sort parameters.
     */


    var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
      _inherits(MatSort, _MatSortMixinBase2);

      var _super2 = _createSuper(MatSort);

      function MatSort() {
        var _this2;

        _classCallCheck(this, MatSort);

        _this2 = _super2.apply(this, arguments);
        /**
         * Collection of all registered sortables that this directive manages.
         */

        _this2.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes.
         */

        _this2._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */

        _this2.start = 'asc';
        _this2._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */

        _this2.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this2;
      }
      /**
       * The sort direction of the currently active MatSortable.
       * @return {?}
       */


      _createClass(MatSort, [{
        key: "register",

        /**
         * Register function to be used by the contained MatSortables. Adds the MatSortable to the
         * collection of MatSortables.
         * @param {?} sortable
         * @return {?}
         */
        value: function register(sortable) {
          if (!sortable.id) {
            throw getSortHeaderMissingIdError();
          }

          if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
          }

          this.sortables.set(sortable.id, sortable);
        }
        /**
         * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
         * collection of contained MatSortables.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(sortable) {
          this.sortables.delete(sortable.id);
        }
        /**
         * Sets the active sort id and determines the new sort direction.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(sortable) {
          if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
          } else {
            this.direction = this.getNextSortDirection(sortable);
          }

          this.sortChange.emit({
            active: this.active,
            direction: this.direction
          });
        }
        /**
         * Returns the next sort direction of the active sortable, checking for potential overrides.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "getNextSortDirection",
        value: function getNextSortDirection(sortable) {
          if (!sortable) {
            return '';
          } // Get the sort direction cycle with the potential sortable overrides.

          /** @type {?} */


          var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
          /** @type {?} */

          var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

          /** @type {?} */

          var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

          if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
          }

          return sortDirectionCycle[nextDirectionIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "direction",
        get: function get() {
          return this._direction;
        }
        /**
         * @param {?} direction
         * @return {?}
         */
        ,
        set: function set(direction) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
          }

          this._direction = direction;
        }
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         * @return {?}
         */

      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSort;
    }(_MatSortMixinBase);

    MatSort.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matSort]',
        exportAs: 'matSort',
        inputs: ['disabled: matSortDisabled']
      }]
    }];
    MatSort.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortActive']
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortStart']
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDirection']
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDisableClear']
      }],
      sortChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['matSortChange']
      }]
    };
    /**
     * Returns the sort direction cycle to use given the provided parameters of order and clear.
     * @param {?} start
     * @param {?} disableClear
     * @return {?}
     */

    function getSortDirectionCycle(start, disableClear) {
      /** @type {?} */
      var sortOrder = ['asc', 'desc'];

      if (start == 'desc') {
        sortOrder.reverse();
      }

      if (!disableClear) {
        sortOrder.push('');
      }

      return sortOrder;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
    /**
     * Animations used by MatSort.
     * \@docs-private
     * @type {?}
     */

    var matSortAnimations = {
      /**
       * Animation that moves the sort indicator.
       */
      indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0px)'
      })), // 10px is the height of the sort indicator, minus the width of the pointers
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(10px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the left pointer of the indicator based on the sorting direction.
       */
      leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the right pointer of the indicator based on the sorting direction.
       */
      rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that controls the arrow opacity.
       */
      arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: .54
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0
      })), // Transition between all states except for immediate transitions
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation for the translation of the arrow as a whole. States are separated into two
       * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
       * peek, and active. The other states define a specific animation (source-to-destination)
       * and are determined as a function of their prev user-perceived state and what the next state
       * should be.
       */
      arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Below
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      })]))), // Hidden Below => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Above
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }))]),

      /**
       * Necessary trigger that calls animate on children animations.
       */
      allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), {
        optional: true
      })])])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
     * include it in a custom provider.
     */

    var MatSortHeaderIntl = function MatSortHeaderIntl() {
      _classCallCheck(this, MatSortHeaderIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      /**
       * ARIA label for the sorting button.
       */

      this.sortButtonLabel =
      /**
      * @param {?} id
      * @return {?}
      */
      function (id) {
        return "Change sorting for ".concat(id);
      };
    };

    MatSortHeaderIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MatSortHeaderIntl_Factory() {
        return new MatSortHeaderIntl();
      },
      token: MatSortHeaderIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatSortHeaderIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SORT_HEADER_INTL_PROVIDER = {
      // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
      provide: MatSortHeaderIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatSortHeaderIntl]],
      useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to the sort header.

    /**
     * \@docs-private
     */

    var MatSortHeaderBase = function MatSortHeaderBase() {
      _classCallCheck(this, MatSortHeaderBase);
    };
    /** @type {?} */


    var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
    /**
     * Applies sorting behavior (click to change sort) and styles to an element, including an
     * arrow to display the current sort direction.
     *
     * Must be provided with an id and contained within a parent MatSort directive.
     *
     * If used on header cells in a CdkTable, it will automatically default its id from its containing
     * column definition.
     */


    var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
      _inherits(MatSortHeader, _MatSortHeaderMixinBa);

      var _super3 = _createSuper(MatSortHeader);

      /**
       * @param {?} _intl
       * @param {?} changeDetectorRef
       * @param {?} _sort
       * @param {?} _columnDef
       */
      function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef) {
        var _this3;

        _classCallCheck(this, MatSortHeader);

        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        _this3 = _super3.call(this);
        _this3._intl = _intl;
        _this3._sort = _sort;
        _this3._columnDef = _columnDef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */

        _this3._showIndicatorHint = false;
        /**
         * The direction the arrow should be facing according to the current state.
         */

        _this3._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */

        _this3._disableViewStateAnimation = false;
        /**
         * Sets the position of the arrow that displays when sorted.
         */

        _this3.arrowPosition = 'after';

        if (!_sort) {
          throw getSortHeaderNotContainedWithinSortError();
        }

        _this3._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this3._isSorted()) {
            _this3._updateArrowDirection();
          } // If this header was recently active and now no longer sorted, animate away the arrow.


          if (!_this3._isSorted() && _this3._viewState && _this3._viewState.toState === 'active') {
            _this3._disableViewStateAnimation = false;

            _this3._setAnimationTransitionState({
              fromState: 'active',
              toState: _this3._arrowDirection
            });
          }

          changeDetectorRef.markForCheck();
        });
        return _this3;
      }
      /**
       * Overrides the disable clear value of the containing MatSort for this MatSortable.
       * @return {?}
       */


      _createClass(MatSortHeader, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
          } // Initialize the direction of the arrow and set the view state to be immediately that state.


          this._updateArrowDirection();

          this._setAnimationTransitionState({
            toState: this._isSorted() ? 'active' : this._arrowDirection
          });

          this._sort.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._sort.deregister(this);

          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
         * user showing what the active sort will become. If set to false, the arrow will fade away.
         * @param {?} visible
         * @return {?}
         */

      }, {
        key: "_setIndicatorHintVisible",
        value: function _setIndicatorHintVisible(visible) {
          // No-op if the sort header is disabled - should not make the hint visible.
          if (this._isDisabled() && visible) {
            return;
          }

          this._showIndicatorHint = visible;

          if (!this._isSorted()) {
            this._updateArrowDirection();

            if (this._showIndicatorHint) {
              this._setAnimationTransitionState({
                fromState: this._arrowDirection,
                toState: 'hint'
              });
            } else {
              this._setAnimationTransitionState({
                fromState: 'hint',
                toState: this._arrowDirection
              });
            }
          }
        }
        /**
         * Sets the animation transition view state for the arrow's position and opacity. If the
         * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
         * no animation appears.
         * @param {?} viewState
         * @return {?}
         */

      }, {
        key: "_setAnimationTransitionState",
        value: function _setAnimationTransitionState(viewState) {
          this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
          // remove the fromState so that it jumps right to the toState.

          if (this._disableViewStateAnimation) {
            this._viewState = {
              toState: viewState.toState
            };
          }
        }
        /**
         * Triggers the sort on this sort header and removes the indicator hint.
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (this._isDisabled()) {
            return;
          }

          this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


          if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
          } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
          // the direction it is facing.

          /** @type {?} */


          var viewState = this._isSorted() ? {
            fromState: this._arrowDirection,
            toState: 'active'
          } : {
            fromState: 'active',
            toState: this._arrowDirection
          };

          this._setAnimationTransitionState(viewState);

          this._showIndicatorHint = false;
        }
        /**
         * Whether this MatSortHeader is currently sorted in either ascending or descending order.
         * @return {?}
         */

      }, {
        key: "_isSorted",
        value: function _isSorted() {
          return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /**
         * Returns the animation state for the arrow direction (indicator and pointers).
         * @return {?}
         */

      }, {
        key: "_getArrowDirectionState",
        value: function _getArrowDirectionState() {
          return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
        }
        /**
         * Returns the arrow position state (opacity, translation).
         * @return {?}
         */

      }, {
        key: "_getArrowViewState",
        value: function _getArrowViewState() {
          /** @type {?} */
          var fromState = this._viewState.fromState;
          return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
        }
        /**
         * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
         * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
         * active sorted direction. The reason this is updated through a function is because the direction
         * should only be changed at specific times - when deactivated but the hint is displayed and when
         * the sort is active and the direction changes. Otherwise the arrow's direction should linger
         * in cases such as the sort becoming deactivated but we want to animate the arrow away while
         * preserving its direction, even though the next sort direction is actually different and should
         * only be changed once the arrow displays again (hint or activation).
         * @return {?}
         */

      }, {
        key: "_updateArrowDirection",
        value: function _updateArrowDirection() {
          this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled() {
          return this._sort.disabled || this.disabled;
        }
        /**
         * Gets the aria-sort attribute that should be applied to this sort header. If this header
         * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
         * says that the aria-sort property should only be present on one header at a time, so removing
         * ensures this is true.
         * @return {?}
         */

      }, {
        key: "_getAriaSortAttribute",
        value: function _getAriaSortAttribute() {
          if (!this._isSorted()) {
            return null;
          }

          return this._sort.direction == 'asc' ? 'ascending' : 'descending';
        }
        /**
         * Whether the arrow inside the sort header should be rendered.
         * @return {?}
         */

      }, {
        key: "_renderArrow",
        value: function _renderArrow() {
          return !this._isDisabled() || this._isSorted();
        }
      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSortHeader;
    }(_MatSortHeaderMixinBase);

    MatSortHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: '[mat-sort-header]',
        exportAs: 'matSortHeader',
        template: "<div class=\"mat-sort-header-container\" [class.mat-sort-header-sorted]=\"_isSorted()\" [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"><button class=\"mat-sort-header-button\" type=\"button\" [attr.disabled]=\"_isDisabled() || null\" [attr.aria-label]=\"_intl.sortButtonLabel(id)\" (focus)=\"_setIndicatorHintVisible(true)\" (blur)=\"_setIndicatorHintVisible(false)\"><ng-content></ng-content></button><div class=\"mat-sort-header-arrow\" *ngIf=\"_renderArrow()\" [@arrowOpacity]=\"_getArrowViewState()\" [@arrowPosition]=\"_getArrowViewState()\" [@allowChildren]=\"_getArrowDirectionState()\" (@arrowPosition.start)=\"_disableViewStateAnimation = true\" (@arrowPosition.done)=\"_disableViewStateAnimation = false\"><div class=\"mat-sort-header-stem\"></div><div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\"><div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-middle\"></div></div></div></div>",
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}@media (-ms-high-contrast:active){.mat-sort-header-stem{width:0;border-left:solid 2px}}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media (-ms-high-contrast:active){.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
        host: {
          '(click)': '_handleClick()',
          '(mouseenter)': '_setIndicatorHintVisible(true)',
          '(longpress)': '_setIndicatorHintVisible(true)',
          '(mouseleave)': '_setIndicatorHintVisible(false)',
          '[attr.aria-sort]': '_getAriaSortAttribute()',
          '[class.mat-sort-header-disabled]': '_isDisabled()'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disabled'],
        animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      }]
    }];
    /** @nocollapse */

    MatSortHeader.ctorParameters = function () {
      return [{
        type: MatSortHeaderIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: MatSort,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['MAT_SORT_HEADER_COLUMN_DEF']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSortHeader.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-sort-header']
      }],
      arrowPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSortModule = function MatSortModule() {
      _classCallCheck(this, MatSortModule);
    };

    MatSortModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [MatSort, MatSortHeader],
        declarations: [MatSort, MatSortHeader],
        providers: [MAT_SORT_HEADER_INTL_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=sort.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~e-commerce-e-commerce-module~main-angular-material-elements-angular-material-elements-module~ba0b6e0b-es5.js.map