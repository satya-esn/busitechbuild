function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-angular-material-elements-angular-material-elements-module~main-ui-ui-module~qwapps-qwa~6517ad6c"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/stepper.js":
  /*!******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/stepper.js ***!
    \******************************************************/

  /*! exports provided: StepperSelectionEvent, STEP_STATE, STEPPER_GLOBAL_OPTIONS, MAT_STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule, CdkStepHeader */

  /***/
  function node_modulesAngularCdkEsm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function () {
      return StepperSelectionEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEP_STATE", function () {
      return STEP_STATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function () {
      return STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function () {
      return MAT_STEPPER_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStep", function () {
      return CdkStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepper", function () {
      return CdkStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function () {
      return CdkStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function () {
      return CdkStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function () {
      return CdkStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function () {
      return CdkStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function () {
      return CdkStepHeader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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


    var CdkStepLabel =
    /**
     * @param {?} template
     */
    function CdkStepLabel(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkStepLabel);

      this.template = template;
    };

    CdkStepLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkStepLabel]'
      }]
    }];
    /** @nocollapse */

    CdkStepLabel.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkStepHeader = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       */
      function CdkStepHeader(_elementRef) {
        _classCallCheck(this, CdkStepHeader);

        this._elementRef = _elementRef;
      }
      /**
       * Focuses the step header.
       * @return {?}
       */


      _createClass(CdkStepHeader, [{
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
      }]);

      return CdkStepHeader;
    }();

    CdkStepHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkStepHeader]',
        host: {
          'role': 'tab'
        }
      }]
    }];
    /** @nocollapse */

    CdkStepHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each stepper component.
     * @type {?}
     */


    var nextId = 0;
    /**
     * Change event emitted on selection changes.
     */

    var StepperSelectionEvent = function StepperSelectionEvent() {
      _classCallCheck(this, StepperSelectionEvent);
    };
    /**
     * Enum to represent the different states of the steps.
     * @type {?}
     */


    var STEP_STATE = {
      NUMBER: 'number',
      EDIT: 'edit',
      DONE: 'done',
      ERROR: 'error'
    };
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @type {?}
     */

    var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
    /**
     * InjectionToken that can be used to specify the global stepper options.
     * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
     * \@breaking-change 8.0.0.
     * @type {?}
     */

    var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;

    var CdkStep = /*#__PURE__*/function () {
      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} _stepper
       * @param {?=} stepperOptions
       */
      function CdkStep(_stepper, stepperOptions) {
        _classCallCheck(this, CdkStep);

        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */

        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._customCompleted = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
      }
      /**
       * Whether the user can return to this step once it has been marked as completed.
       * @return {?}
       */


      _createClass(CdkStep, [{
        key: "_getDefaultCompleted",

        /**
         * @private
         * @return {?}
         */
        value: function _getDefaultCompleted() {
          return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        }
        /**
         * Whether step has an error.
         * @return {?}
         */

      }, {
        key: "_getDefaultError",

        /**
         * @private
         * @return {?}
         */
        value: function _getDefaultError() {
          return this.stepControl && this.stepControl.invalid && this.interacted;
        }
        /**
         * Selects this step component.
         * @return {?}
         */

      }, {
        key: "select",
        value: function select() {
          this._stepper.selected = this;
        }
        /**
         * Resets the step to its initial state. Note that this includes resetting form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.interacted = false;

          if (this._customCompleted != null) {
            this._customCompleted = false;
          }

          if (this._customError != null) {
            this._customError = false;
          }

          if (this.stepControl) {
            this.stepControl.reset();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Since basically all inputs of the MatStep get proxied through the view down to the
          // underlying MatStepHeader, we have to make sure that change detection runs correctly.
          this._stepper._stateChanged();
        }
      }, {
        key: "editable",
        get: function get() {
          return this._editable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the completion of step is optional.
         * @return {?}
         */

      }, {
        key: "optional",
        get: function get() {
          return this._optional;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether step is marked as completed.
         * @return {?}
         */

      }, {
        key: "completed",
        get: function get() {
          return this._customCompleted == null ? this._getDefaultCompleted() : this._customCompleted;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._customCompleted = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "hasError",
        get: function get() {
          return this._customError == null ? this._getDefaultError() : this._customError;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkStep;
    }();

    CdkStep.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'cdk-step',
        exportAs: 'cdkStep',
        template: '<ng-template><ng-content></ng-content></ng-template>',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    CdkStep.ctorParameters = function () {
      return [{
        type: CdkStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return CdkStepper;
          })]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [STEPPER_GLOBAL_OPTIONS]
        }]
      }];
    };

    CdkStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [CdkStepLabel, {
          static: false
        }]
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
          static: true
        }]
      }],
      stepControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-labelledby']
      }],
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      completed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hasError: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var CdkStepper = /*#__PURE__*/function () {
      /**
       * @param {?} _dir
       * @param {?} _changeDetectorRef
       * @param {?=} _elementRef
       * @param {?=} _document
       */
      function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
        _classCallCheck(this, CdkStepper);

        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
      }
      /**
       * The list of step components that the stepper is holding.
       * @return {?}
       */


      _createClass(CdkStepper, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this = this;

          // Note that while the step headers are content children by default, any components that
          // extend this one might have them as view chidren. We initialize the keyboard handling in
          // AfterViewInit so we're guaranteed for both view and content children to be defined.
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader).withWrap().withVerticalOrientation(this._orientation === 'vertical');
          (this._dir ?
          /** @type {?} */
          this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} direction
          * @return {?}
          */
          function (direction) {
            return _this._keyManager.withHorizontalOrientation(direction);
          });

          this._keyManager.updateActiveItemIndex(this._selectedIndex);

          this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (!_this.selected) {
              _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Selects and focuses the next step in list.
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
        }
        /**
         * Selects and focuses the previous step in list.
         * @return {?}
         */

      }, {
        key: "previous",
        value: function previous() {
          this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
        }
        /**
         * Resets the stepper to its initial state. Note that this includes clearing form data.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this._updateSelectedItemIndex(0);

          this.steps.forEach(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.reset();
          });

          this._stateChanged();
        }
        /**
         * Returns a unique id for each step label element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepLabelId",
        value: function _getStepLabelId(i) {
          return "cdk-step-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns unique id for each step content element.
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getStepContentId",
        value: function _getStepContentId(i) {
          return "cdk-step-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Marks the component to be change detected.
         * @return {?}
         */

      }, {
        key: "_stateChanged",
        value: function _stateChanged() {
          this._changeDetectorRef.markForCheck();
        }
        /**
         * Returns position state of the step with the given index.
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_getAnimationDirection",
        value: function _getAnimationDirection(index) {
          /** @type {?} */
          var position = index - this._selectedIndex;

          if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
          } else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
          }

          return 'current';
        }
        /**
         * Returns the type of icon to be displayed.
         * @param {?} index
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getIndicatorType",
        value: function _getIndicatorType(index) {
          var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STEP_STATE.NUMBER;

          /** @type {?} */
          var step = this.steps.toArray()[index];
          /** @type {?} */

          var isCurrentStep = this._isCurrentStep(index);

          return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @return {?}
         */

      }, {
        key: "_getDefaultIndicatorLogic",
        value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
          } else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
          }
        }
        /**
         * @private
         * @param {?} step
         * @param {?} isCurrentStep
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_getGuidelineLogic",
        value: function _getGuidelineLogic(step, isCurrentStep) {
          var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : STEP_STATE.NUMBER;

          if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
          } else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
          } else if (step.completed && isCurrentStep) {
            return state;
          } else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
          } else {
            return state;
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_isCurrentStep",
        value: function _isCurrentStep(index) {
          return this._selectedIndex === index;
        }
        /**
         * Returns the index of the currently-focused step header.
         * @return {?}
         */

      }, {
        key: "_getFocusIndex",
        value: function _getFocusIndex() {
          return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
        }
        /**
         * @private
         * @param {?} newIndex
         * @return {?}
         */

      }, {
        key: "_updateSelectedItemIndex",
        value: function _updateSelectedItemIndex(newIndex) {
          /** @type {?} */
          var stepsArray = this.steps.toArray();
          this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex]
          }); // If focus is inside the stepper, move it to the next header, otherwise it may become
          // lost when the active step content is hidden. We can't be more granular with the check
          // (e.g. checking whether focus is inside the active step), because we don't have a
          // reference to the elements that are rendering out the content.

          this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItemIndex(newIndex);
          this._selectedIndex = newIndex;

          this._stateChanged();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          /** @type {?} */
          var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
          /** @type {?} */

          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
          } else {
            manager.onKeydown(event);
          }
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_anyControlsInvalidOrPending",
        value: function _anyControlsInvalidOrPending(index) {
          /** @type {?} */
          var steps = this.steps.toArray();
          steps[this._selectedIndex].interacted = true;

          if (this._linear && index >= 0) {
            return steps.slice(0, index).some(
            /**
            * @param {?} step
            * @return {?}
            */
            function (step) {
              /** @type {?} */
              var control = step.stepControl;
              /** @type {?} */

              var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
              return isIncomplete && !step.optional;
            });
          }

          return false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutDirection",
        value: function _layoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Checks whether the stepper contains the focused element.
         * @private
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          if (!this._document || !this._elementRef) {
            return false;
          }
          /** @type {?} */


          var stepperElement = this._elementRef.nativeElement;
          /** @type {?} */

          var focusedElement = this._document.activeElement;
          return stepperElement === focusedElement || stepperElement.contains(focusedElement);
        }
      }, {
        key: "steps",
        get: function get() {
          return this._steps;
        }
        /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */

      }, {
        key: "linear",
        get: function get() {
          return this._linear;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * The index of the selected step.
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} index
         * @return {?}
         */
        ,
        set: function set(index) {
          /** @type {?} */
          var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(index);

          if (this.steps) {
            // Ensure that the index can't be out of bounds.
            if (newIndex < 0 || newIndex > this.steps.length - 1) {
              throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
            }

            if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
              this._updateSelectedItemIndex(index);
            }
          } else {
            this._selectedIndex = newIndex;
          }
        }
        /**
         * The step that is selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
          return this.steps ? this.steps.toArray()[this.selectedIndex] :
          /** @type {?} */
          undefined;
        }
        /**
         * @param {?} step
         * @return {?}
         */
        ,
        set: function set(step) {
          this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        }
      }]);

      return CdkStepper;
    }();

    CdkStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkStepper]',
        exportAs: 'cdkStepper'
      }]
    }];
    /** @nocollapse */

    CdkStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };

    CdkStepper.propDecorators = {
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CdkStep]
      }],
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [CdkStepHeader]
      }],
      linear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */

    var CdkStepperNext = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperNext(_stepper) {
        _classCallCheck(this, CdkStepperNext);

        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */

        this.type = 'submit';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritte.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperNext, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.next();
        }
      }]);

      return CdkStepperNext;
    }();

    CdkStepperNext.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[cdkStepperNext]',
        host: {
          '[type]': 'type'
        }
      }]
    }];
    /** @nocollapse */

    CdkStepperNext.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperNext.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };
    /**
     * Button that moves to the previous step in a stepper workflow.
     */

    var CdkStepperPrevious = /*#__PURE__*/function () {
      /**
       * @param {?} _stepper
       */
      function CdkStepperPrevious(_stepper) {
        _classCallCheck(this, CdkStepperPrevious);

        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */

        this.type = 'button';
      } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
      // In Ivy the `host` bindings will be merged when this class is extended, whereas in
      // ViewEngine they're overwritte.
      // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
      // tslint:disable-next-line:no-host-decorator-in-concrete

      /**
       * @return {?}
       */


      _createClass(CdkStepperPrevious, [{
        key: "_handleClick",
        value: function _handleClick() {
          this._stepper.previous();
        }
      }]);

      return CdkStepperPrevious;
    }();

    CdkStepperPrevious.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[cdkStepperPrevious]',
        host: {
          '[type]': 'type'
        }
      }]
    }];
    /** @nocollapse */

    CdkStepperPrevious.ctorParameters = function () {
      return [{
        type: CdkStepper
      }];
    };

    CdkStepperPrevious.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CdkStepperModule = function CdkStepperModule() {
      _classCallCheck(this, CdkStepperModule);
    };

    CdkStepperModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
        declarations: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
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
    //# sourceMappingURL=stepper.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/button-toggle.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/button-toggle.js ***!
    \*****************************************************************/

  /*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule */

  /***/
  function node_modulesAngularMaterialEsm2015ButtonToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () {
      return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
      return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function () {
      return MatButtonToggleGroupMultiple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () {
      return MatButtonToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () {
      return MatButtonToggleGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () {
      return MatButtonToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () {
      return MatButtonToggleModule;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
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
     * Injection token that can be used to configure the
     * default options for all button toggles within an app.
     * @type {?}
     */


    var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
    /**
     * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)].
     * \@docs-private
     * @type {?}
     */

    var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatButtonToggleGroup;
      }),
      multi: true
    };
    /**
     * @deprecated Use `MatButtonToggleGroup` instead.
     * \@breaking-change 8.0.0
     */

    var MatButtonToggleGroupMultiple = function MatButtonToggleGroupMultiple() {
      _classCallCheck(this, MatButtonToggleGroupMultiple);
    };
    /** @type {?} */


    var _uniqueIdCounter = 0;
    /**
     * Change event object emitted by MatButtonToggle.
     */

    var MatButtonToggleChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatButtonToggleChange(source, value) {
      _classCallCheck(this, MatButtonToggleChange);

      this.source = source;
      this.value = value;
    };
    /**
     * Exclusive selection button toggle group that behaves like a radio-button group.
     */


    var MatButtonToggleGroup = /*#__PURE__*/function () {
      /**
       * @param {?} _changeDetector
       * @param {?=} defaultOptions
       */
      function MatButtonToggleGroup(_changeDetector, defaultOptions) {
        _classCallCheck(this, MatButtonToggleGroup);

        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */

        this._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._name = "mat-button-toggle-group-".concat(_uniqueIdCounter++);
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * \@docs-private
         */

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the group's value changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
      }
      /**
       * `name` attribute for the underlying `input` element.
       * @return {?}
       */


      _createClass(MatButtonToggleGroup, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this$_selectionModel;

          (_this$_selectionModel = this._selectionModel).select.apply(_this$_selectionModel, _toConsumableArray(this._buttonToggles.filter(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.checked;
          })));
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value Value to be set to the model.
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          this._changeDetector.markForCheck();
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * Dispatch change event with current selection and group value.
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          /** @type {?} */
          var selected = this.selected;
          /** @type {?} */

          var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
          /** @type {?} */

          var event = new MatButtonToggleChange(
          /** @type {?} */
          source, this.value);

          this._controlValueAccessorChangeFn(event.value);

          this.change.emit(event);
        }
        /**
         * Syncs a button toggle's selected state with the model value.
         * @param {?} toggle Toggle to be synced.
         * @param {?} select Whether the toggle should be selected.
         * @param {?=} isUserInput Whether the change was a result of a user interaction.
         * @param {?=} deferEvents Whether to defer emitting the change events.
         * @return {?}
         */

      }, {
        key: "_syncButtonToggle",
        value: function _syncButtonToggle(toggle, select) {
          var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var deferEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          // Deselect the currently-selected toggle, if we're in single-selection
          // mode and the button being toggled isn't selected at the moment.
          if (!this.multiple && this.selected && !toggle.checked) {
            /** @type {?} */
            this.selected.checked = false;
          }

          if (select) {
            this._selectionModel.select(toggle);
          } else {
            this._selectionModel.deselect(toggle);
          } // We need to defer in some cases in order to avoid "changed after checked errors", however
          // the side-effect is that we may end up updating the model value out of sequence in others
          // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


          if (deferEvents) {} else {
            this._updateModelValue(isUserInput);
          }
        }
        /**
         * Checks whether a button toggle is selected.
         * @param {?} toggle
         * @return {?}
         */

      }, {
        key: "_isSelected",
        value: function _isSelected(toggle) {
          return this._selectionModel.isSelected(toggle);
        }
        /**
         * Determines whether a button toggle should be checked on init.
         * @param {?} toggle
         * @return {?}
         */

      }, {
        key: "_isPrechecked",
        value: function _isPrechecked(toggle) {
          if (typeof this._rawValue === 'undefined') {
            return false;
          }

          if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return toggle.value != null && value === toggle.value;
            });
          }

          return toggle.value === this._rawValue;
        }
        /**
         * Updates the selection state of the toggles in the group based on a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this2 = this;

          this._rawValue = value;

          if (!this._buttonToggles) {
            return;
          }

          if (this.multiple && value) {
            if (!Array.isArray(value)) {
              throw Error('Value must be an array in multiple-selection mode.');
            }

            this._clearSelection();

            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this2._selectValue(currentValue);
            });
          } else {
            this._clearSelection();

            this._selectValue(value);
          }
        }
        /**
         * Clears the selected toggles.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSelection",
        value: function _clearSelection() {
          this._selectionModel.clear();

          this._buttonToggles.forEach(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.checked = false;
          });
        }
        /**
         * Selects a value if there's a toggle that corresponds to it.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          /** @type {?} */
          var correspondingOption = this._buttonToggles.find(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.value != null && toggle.value === value;
          });

          if (correspondingOption) {
            correspondingOption.checked = true;

            this._selectionModel.select(correspondingOption);
          }
        }
        /**
         * Syncs up the group's value with the model and emits the change event.
         * @private
         * @param {?} isUserInput
         * @return {?}
         */

      }, {
        key: "_updateModelValue",
        value: function _updateModelValue(isUserInput) {
          // Only emit the change event for user input.
          if (isUserInput) {
            this._emitChangeEvent();
          } // Note: we emit this one no matter whether it was a user interaction, because
          // it is used by Angular to sync up the two-way data binding.


          this.valueChange.emit(this.value);
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this3 = this;

          this._name = value;

          if (this._buttonToggles) {
            this._buttonToggles.forEach(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              toggle.name = _this3._name;

              toggle._markForCheck();
            });
          }
        }
        /**
         * Whether the toggle group is vertical.
         * @return {?}
         */

      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Value of the toggle group.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          /** @type {?} */
          var selected = this._selectionModel ? this._selectionModel.selected : [];

          if (this.multiple) {
            return selected.map(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle.value;
            });
          }

          return selected[0] ? selected[0].value : undefined;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._setSelectionByValue(newValue);

          this.valueChange.emit(this.value);
        }
        /**
         * Selected button toggles in the group.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          /** @type {?} */
          var selected = this._selectionModel.selected;
          return this.multiple ? selected : selected[0] || null;
        }
        /**
         * Whether multiple button toggles can be selected.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether multiple button toggle group is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (this._buttonToggles) {
            this._buttonToggles.forEach(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle._markForCheck();
            });
          }
        }
      }]);

      return MatButtonToggleGroup;
    }();

    MatButtonToggleGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'mat-button-toggle-group',
        providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
          provide: MatButtonToggleGroupMultiple,
          useExisting: MatButtonToggleGroup
        }],
        host: {
          'role': 'group',
          'class': 'mat-button-toggle-group',
          '[attr.aria-disabled]': 'disabled',
          '[class.mat-button-toggle-vertical]': 'vertical',
          '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
        },
        exportAs: 'matButtonToggleGroup'
      }]
    }];
    /** @nocollapse */

    MatButtonToggleGroup.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatButtonToggleGroup.propDecorators = {
      _buttonToggles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatButtonToggle;
        })]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    }; // Boilerplate for applying mixins to the MatButtonToggle class.

    /**
     * \@docs-private
     */

    var MatButtonToggleBase = function MatButtonToggleBase() {
      _classCallCheck(this, MatButtonToggleBase);
    };
    /** @type {?} */


    var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
    /**
     * Single button inside of a toggle group.
     */


    var MatButtonToggle = /*#__PURE__*/function (_MatButtonToggleMixin) {
      _inherits(MatButtonToggle, _MatButtonToggleMixin);

      var _super = _createSuper(MatButtonToggle);

      /**
       * @param {?} toggleGroup
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       * @param {?} defaultTabIndex
       * @param {?=} defaultOptions
       */
      function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
      defaultTabIndex, defaultOptions) {
        var _this4;

        _classCallCheck(this, MatButtonToggle);

        _this4 = _super.call(this);
        _this4._changeDetectorRef = _changeDetectorRef;
        _this4._elementRef = _elementRef;
        _this4._focusMonitor = _focusMonitor;
        _this4._isSingleSelector = false;
        _this4._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */

        _this4.ariaLabelledby = null;
        _this4._disabled = false;
        /**
         * Event emitted when the group value changes.
         */

        _this4.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** @type {?} */

        var parsedTabIndex = Number(defaultTabIndex);
        _this4.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        _this4.buttonToggleGroup = toggleGroup;
        _this4.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        return _this4;
      }
      /**
       * Unique ID for the underlying `button` element.
       * @return {?}
       */


      _createClass(MatButtonToggle, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
          this._type = this._isSingleSelector ? 'radio' : 'checkbox';
          this.id = this.id || "mat-button-toggle-".concat(_uniqueIdCounter++);

          if (this._isSingleSelector) {
            this.name = this.buttonToggleGroup.name;
          }

          if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
            this.checked = true;
          }

          this._focusMonitor.monitor(this._elementRef, true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var group = this.buttonToggleGroup;

          this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
          // on the next tick in order to avoid "changed after checked" errors.


          if (group && group._isSelected(this)) {
            group._syncButtonToggle(this, false, false, true);
          }
        }
        /**
         * Focuses the button.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._buttonElement.nativeElement.focus();
        }
        /**
         * Checks the button toggle due to an interaction with the underlying native button.
         * @return {?}
         */

      }, {
        key: "_onButtonClick",
        value: function _onButtonClick() {
          /** @type {?} */
          var newChecked = this._isSingleSelector ? true : !this._checked;

          if (newChecked !== this._checked) {
            this._checked = newChecked;

            if (this.buttonToggleGroup) {
              this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

              this.buttonToggleGroup._onTouched();
            }
          } // Emit a change event when it's the single selector


          this.change.emit(new MatButtonToggleChange(this, this.value));
        }
        /**
         * Marks the button toggle as needing checking for change detection.
         * This method is exposed because the parent button toggle group will directly
         * update bound properties of the radio button.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          // When the group value changes, the button will not be notified.
          // Use `markForCheck` to explicit update button toggle's status.
          this._changeDetectorRef.markForCheck();
        }
      }, {
        key: "buttonId",
        get: function get() {
          return "".concat(this.id, "-button");
        }
        /**
         * The appearance style of the button.
         * @return {?}
         */

      }, {
        key: "appearance",
        get: function get() {
          return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._appearance = value;
        }
        /**
         * Whether the button is checked.
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (newValue !== this._checked) {
            this._checked = newValue;

            if (this.buttonToggleGroup) {
              this.buttonToggleGroup._syncButtonToggle(this, this._checked);
            }

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the button is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatButtonToggle;
    }(_MatButtonToggleMixinBase);

    MatButtonToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-button-toggle',
        template: "<button #button class=\"mat-button-toggle-button\" type=\"button\" [id]=\"buttonId\" [attr.tabindex]=\"disabled ? -1 : tabIndex\" [attr.aria-pressed]=\"checked\" [disabled]=\"disabled || null\" [attr.name]=\"name || null\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (click)=\"_onButtonClick()\"><div class=\"mat-button-toggle-label-content\"><ng-content></ng-content></div></button><div class=\"mat-button-toggle-focus-overlay\"></div><div class=\"mat-button-toggle-ripple\" matRipple [matRippleTrigger]=\"button\" [matRippleDisabled]=\"this.disableRipple || this.disabled\"></div>",
        styles: [".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'matButtonToggle',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disableRipple'],
        host: {
          '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
          '[class.mat-button-toggle-checked]': 'checked',
          '[class.mat-button-toggle-disabled]': 'disabled',
          '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
          'class': 'mat-button-toggle',
          // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
          // but can still receive focus from things like cdkFocusInitial.
          '[attr.tabindex]': '-1',
          '[attr.id]': 'id',
          '[attr.name]': 'null',
          '(focus)': 'focus()'
        }
      }]
    }];
    /** @nocollapse */

    MatButtonToggle.ctorParameters = function () {
      return [{
        type: MatButtonToggleGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatButtonToggle.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-labelledby']
      }],
      _buttonElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['button', {
          static: false
        }]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatButtonToggleModule = function MatButtonToggleModule() {
      _classCallCheck(this, MatButtonToggleModule);
    };

    MatButtonToggleModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
        exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
        declarations: [MatButtonToggleGroup, MatButtonToggle]
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
    //# sourceMappingURL=button-toggle.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/progress-spinner.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/progress-spinner.js ***!
    \********************************************************************/

  /*! exports provided: MatProgressSpinner, MatSpinner, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinnerModule */

  /***/
  function node_modulesAngularMaterialEsm2015ProgressSpinnerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
      return MatProgressSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
      return MatSpinner;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
      return MatProgressSpinnerModule;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
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
     * Base reference size of the spinner.
     * \@docs-private
     * @type {?}
     */


    var BASE_SIZE = 100;
    /**
     * Base reference stroke width of the spinner.
     * \@docs-private
     * @type {?}
     */

    var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

    /**
     * \@docs-private
     */

    var MatProgressSpinnerBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressSpinnerBase(_elementRef) {
      _classCallCheck(this, MatProgressSpinnerBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatProgressSpinnerBase, 'primary');
    /**
     * Injection token to be used to override the default options for `mat-progress-spinner`.
     * @type {?}
     */


    var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-progress-spinner-default-options', {
      providedIn: 'root',
      factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
      return {
        diameter: BASE_SIZE
      };
    } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
    // for example because the animation duration is 4 seconds, .1% accounts to 4ms
    // which are enough to see the flicker described in
    // https://github.com/angular/components/issues/8984

    /** @type {?} */


    var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
    /**
     * `<mat-progress-spinner>` component.
     */

    var MatProgressSpinner = /*#__PURE__*/function (_MatProgressSpinnerMi) {
      _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

      var _super2 = _createSuper(MatProgressSpinner);

      /**
       * @param {?} _elementRef
       * @param {?} platform
       * @param {?} _document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
        var _this5;

        _classCallCheck(this, MatProgressSpinner);

        _this5 = _super2.call(this, _elementRef);
        _this5._elementRef = _elementRef;
        _this5._document = _document;
        _this5._diameter = BASE_SIZE;
        _this5._value = 0;
        _this5._fallbackAnimation = false;
        /**
         * Mode of the progress circle
         */

        _this5.mode = 'determinate';
        /** @type {?} */

        var trackedDiameters = MatProgressSpinner._diameters; // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.

        if (!trackedDiameters.has(_document.head)) {
          trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }

        _this5._styleRoot = _getShadowRoot(_elementRef.nativeElement, _document) || _document.head;
        _this5._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        _this5._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

        if (defaults) {
          if (defaults.diameter) {
            _this5.diameter = defaults.diameter;
          }

          if (defaults.strokeWidth) {
            _this5.strokeWidth = defaults.strokeWidth;
          }
        } // On IE and Edge, we can't animate the `stroke-dashoffset`
        // reliably so we fall back to a non-spec animation.

        /** @type {?} */


        var animationClass = "mat-progress-spinner-indeterminate".concat(_this5._fallbackAnimation ? '-fallback' : '', "-animation");

        _elementRef.nativeElement.classList.add(animationClass);

        return _this5;
      }
      /**
       * The diameter of the progress spinner (will set width and height of svg).
       * @return {?}
       */


      _createClass(MatProgressSpinner, [{
        key: "_attachStyleNode",

        /**
         * Dynamically generates a style tag containing the correct animation for this diameter.
         * @private
         * @return {?}
         */
        value: function _attachStyleNode() {
          /** @type {?} */
          var styleTag = this._document.createElement('style');
          /** @type {?} */


          var styleRoot = this._styleRoot;
          /** @type {?} */

          var currentDiameter = this._diameter;
          /** @type {?} */

          var diameters = MatProgressSpinner._diameters;
          /** @type {?} */

          var diametersForElement = diameters.get(styleRoot);
          styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
          styleTag.textContent = this._getAnimationText();
          styleRoot.appendChild(styleTag);

          if (!diametersForElement) {
            diametersForElement = new Set();
            diameters.set(styleRoot, diametersForElement);
          }

          diametersForElement.add(currentDiameter);
        }
        /**
         * Generates animation styles adjusted for the spinner's diameter.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAnimationText",
        value: function _getAnimationText() {
          return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
          .replace(/START_VALUE/g, "".concat(0.95 * this._strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * this._strokeCircumference)).replace(/DIAMETER/g, "".concat(this.diameter));
        }
      }, {
        key: "diameter",
        get: function get() {
          return this._diameter;
        }
        /**
         * @param {?} size
         * @return {?}
         */
        ,
        set: function set(size) {
          this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);

          if (!this._fallbackAnimation) {
            /** @type {?} */
            var trackedDiameters = MatProgressSpinner._diameters;
            /** @type {?} */

            var diametersForElement = trackedDiameters.get(this._styleRoot);

            if (!diametersForElement || !diametersForElement.has(this._diameter)) {
              this._attachStyleNode();
            }
          }
        }
        /**
         * Stroke width of the progress spinner.
         * @return {?}
         */

      }, {
        key: "strokeWidth",
        get: function get() {
          return this._strokeWidth || this.diameter / 10;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * Value of the progress circle.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.mode === 'determinate' ? this._value : 0;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(newValue)));
        }
        /**
         * The radius of the spinner, adjusted for stroke width.
         * @return {?}
         */

      }, {
        key: "_circleRadius",
        get: function get() {
          return (this.diameter - BASE_STROKE_WIDTH) / 2;
        }
        /**
         * The view box of the spinner's svg element.
         * @return {?}
         */

      }, {
        key: "_viewBox",
        get: function get() {
          /** @type {?} */
          var viewBox = this._circleRadius * 2 + this.strokeWidth;
          return "0 0 ".concat(viewBox, " ").concat(viewBox);
        }
        /**
         * The stroke circumference of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeCircumference",
        get: function get() {
          return 2 * Math.PI * this._circleRadius;
        }
        /**
         * The dash offset of the svg circle.
         * @return {?}
         */

      }, {
        key: "_strokeDashOffset",
        get: function get() {
          if (this.mode === 'determinate') {
            return this._strokeCircumference * (100 - this._value) / 100;
          } // In fallback mode set the circle to 80% and rotate it with CSS.


          if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._strokeCircumference * 0.2;
          }

          return null;
        }
        /**
         * Stroke width of the circle in percent.
         * @return {?}
         */

      }, {
        key: "_circleStrokeWidth",
        get: function get() {
          return this.strokeWidth / this.diameter * 100;
        }
      }]);

      return MatProgressSpinner;
    }(_MatProgressSpinnerMixinBase);
    /**
     * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
     * We need to keep track of which elements the diameters were attached to, because for
     * elements in the Shadow DOM the style tags are attached to the shadow root, rather
     * than the document head.
     */


    MatProgressSpinner._diameters = new WeakMap();
    MatProgressSpinner.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-progress-spinner',
        exportAs: 'matProgressSpinner',
        host: {
          'role': 'progressbar',
          'class': 'mat-progress-spinner',
          '[class._mat-animation-noopable]': "_noopAnimations",
          '[style.width.px]': 'diameter',
          '[style.height.px]': 'diameter',
          '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
          '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
          '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
          '[attr.mode]': 'mode'
        },
        inputs: ['color'],
        template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
        styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatProgressSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatProgressSpinner.propDecorators = {
      diameter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      strokeWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * `<mat-spinner>` component.
     *
     * This is a component definition to be used as a convenience reference to create an
     * indeterminate `<mat-progress-spinner>` instance.
     */

    var MatSpinner = /*#__PURE__*/function (_MatProgressSpinner) {
      _inherits(MatSpinner, _MatProgressSpinner);

      var _super3 = _createSuper(MatSpinner);

      /**
       * @param {?} elementRef
       * @param {?} platform
       * @param {?} document
       * @param {?} animationMode
       * @param {?=} defaults
       */
      function MatSpinner(elementRef, platform, document, animationMode, defaults) {
        var _this6;

        _classCallCheck(this, MatSpinner);

        _this6 = _super3.call(this, elementRef, platform, document, animationMode, defaults);
        _this6.mode = 'indeterminate';
        return _this6;
      }

      return MatSpinner;
    }(MatProgressSpinner);

    MatSpinner.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-spinner',
        host: {
          'role': 'progressbar',
          'mode': 'indeterminate',
          'class': 'mat-spinner mat-progress-spinner',
          '[class._mat-animation-noopable]': "_noopAnimations",
          '[style.width.px]': 'diameter',
          '[style.height.px]': 'diameter'
        },
        inputs: ['color'],
        template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"_viewBox\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode === 'indeterminate'\"><circle *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle><circle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\" [attr.r]=\"_circleRadius\" [style.stroke-dashoffset.px]=\"_strokeDashOffset\" [style.stroke-dasharray.px]=\"_strokeCircumference\" [style.stroke-width.%]=\"_circleStrokeWidth\"></circle></svg>",
        styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatSpinner.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
        }]
      }];
    };
    /**
     * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
     * @param {?} element
     * @param {?} _document
     * @return {?}
     */


    function _getShadowRoot(element, _document) {
      // TODO(crisbeto): see whether we should move this into the CDK
      // feature detection utilities once #15616 gets merged in.
      if (typeof window !== 'undefined') {
        /** @type {?} */
        var head = _document.head; // Check whether the browser supports Shadow DOM.

        if (head && (
        /** @type {?} */
        head.createShadowRoot || head.attachShadow)) {
          /** @type {?} */
          var rootNode = element.getRootNode ? element.getRootNode() : null; // We need to take the `ShadowRoot` off of `window`, because the built-in types are
          // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.

          if (rootNode instanceof
          /** @type {?} */
          window.ShadowRoot) {
            return rootNode;
          }
        }
      }

      return null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
      _classCallCheck(this, MatProgressSpinnerModule);
    };

    MatProgressSpinnerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
        declarations: [MatProgressSpinner, MatSpinner]
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
    //# sourceMappingURL=progress-spinner.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/stepper.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/stepper.js ***!
    \***********************************************************/

  /*! exports provided: MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon */

  /***/
  function node_modulesAngularMaterialEsm2015StepperJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperModule", function () {
      return MatStepperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepLabel", function () {
      return MatStepLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStep", function () {
      return MatStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepper", function () {
      return MatStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function () {
      return MatHorizontalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function () {
      return MatVerticalStepper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperNext", function () {
      return MatStepperNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function () {
      return MatStepperPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepHeader", function () {
      return MatStepHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function () {
      return MAT_STEPPER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function () {
      return MatStepperIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function () {
      return MAT_STEPPER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function () {
      return matStepperAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function () {
      return MatStepperIcon;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
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


    var MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
      _inherits(MatStepLabel, _angular_cdk_stepper_);

      var _super4 = _createSuper(MatStepLabel);

      function MatStepLabel() {
        _classCallCheck(this, MatStepLabel);

        return _super4.apply(this, arguments);
      }

      return MatStepLabel;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepLabel"]);

    MatStepLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matStepLabel]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Stepper data that is required for internationalization.
     */

    var MatStepperIntl = function MatStepperIntl() {
      _classCallCheck(this, MatStepperIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      /**
       * Label that is rendered below optional steps.
       */

      this.optionalLabel = 'Optional';
    };

    MatStepperIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatStepperIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatStepperIntl_Factory() {
        return new MatStepperIntl();
      },
      token: MatStepperIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatStepperIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_STEPPER_INTL_PROVIDER = {
      provide: MatStepperIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatStepperIntl]],
      useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStepHeader = /*#__PURE__*/function (_angular_cdk_stepper_2) {
      _inherits(MatStepHeader, _angular_cdk_stepper_2);

      var _super5 = _createSuper(MatStepHeader);

      /**
       * @param {?} _intl
       * @param {?} _focusMonitor
       * @param {?} _elementRef
       * @param {?} changeDetectorRef
       */
      function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        var _this7;

        _classCallCheck(this, MatStepHeader);

        _this7 = _super5.call(this, _elementRef);
        _this7._intl = _intl;
        _this7._focusMonitor = _focusMonitor;

        _focusMonitor.monitor(_elementRef, true);

        _this7._intlSubscription = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return changeDetectorRef.markForCheck();
        });
        return _this7;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepHeader, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlSubscription.unsubscribe();

          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the step header.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._focusMonitor.focusVia(this._elementRef, 'program');
        }
        /**
         * Returns string label of given step if it is a text label.
         * @return {?}
         */

      }, {
        key: "_stringLabel",
        value: function _stringLabel() {
          return this.label instanceof MatStepLabel ? null : this.label;
        }
        /**
         * Returns MatStepLabel if the label of given step is a template label.
         * @return {?}
         */

      }, {
        key: "_templateLabel",
        value: function _templateLabel() {
          return this.label instanceof MatStepLabel ? this.label : null;
        }
        /**
         * Returns the host HTML element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * Template context variables that are exposed to the `matStepperIcon` instances.
         * @return {?}
         */

      }, {
        key: "_getIconContext",
        value: function _getIconContext() {
          return {
            index: this.index,
            active: this.active,
            optional: this.optional
          };
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "_getDefaultTextForState",
        value: function _getDefaultTextForState(state$$1) {
          if (state$$1 == 'number') {
            return "".concat(this.index + 1);
          }

          if (state$$1 == 'edit') {
            return 'create';
          }

          if (state$$1 == 'error') {
            return 'warning';
          }

          return state$$1;
        }
      }]);

      return MatStepHeader;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepHeader"]);

    MatStepHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-step-header',
        template: "<div class=\"mat-step-header-ripple\" matRipple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disableRipple\"></div><div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\"><div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides[state]\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><ng-container *ngSwitchDefault [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span><mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon></ng-container></div></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\" [class.mat-step-label-error]=\"state == 'error'\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div><div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div></div>",
        styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon .mat-icon,.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
        host: {
          'class': 'mat-step-header',
          'role': 'tab'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatStepHeader.ctorParameters = function () {
      return [{
        type: MatStepperIntl
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    MatStepHeader.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      errorMessage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      iconOverrides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      optional: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material steppers.
     * \@docs-private
     * @type {?}
     */

    var matStepperAnimations = {
      /**
       * Animation that transitions the step along the X axis in a horizontal stepper.
       */
      horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'none',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

      /**
       * Animation that transitions the step along the Y axis in a vertical stepper.
       */
      verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('stepTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Template to be used to override the icons inside the step header.
     */

    var MatStepperIcon =
    /**
     * @param {?} templateRef
     */
    function MatStepperIcon(templateRef) {
      _classCallCheck(this, MatStepperIcon);

      this.templateRef = templateRef;
    };

    MatStepperIcon.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[matStepperIcon]'
      }]
    }];
    /** @nocollapse */

    MatStepperIcon.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    MatStepperIcon.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matStepperIcon']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
      _inherits(MatStep, _angular_cdk_stepper_3);

      var _super6 = _createSuper(MatStep);

      /**
       * \@breaking-change 8.0.0 remove the `?` after `stepperOptions`
       * @param {?} stepper
       * @param {?} _errorStateMatcher
       * @param {?=} stepperOptions
       */
      function MatStep(stepper, _errorStateMatcher, stepperOptions) {
        var _this8;

        _classCallCheck(this, MatStep);

        _this8 = _super6.call(this, stepper, stepperOptions);
        _this8._errorStateMatcher = _errorStateMatcher;
        return _this8;
      }
      /**
       * Custom error state matcher that additionally checks for validity of interacted form.
       * @param {?} control
       * @param {?} form
       * @return {?}
       */


      _createClass(MatStep, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          /** @type {?} */
          var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
          // since user can trigger a form change by calling for another step without directly
          // interacting with the current form.

          /** @type {?} */


          var customErrorState = !!(control && control.invalid && this.interacted);
          return originalErrorState || customErrorState;
        }
      }]);

      return MatStep;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStep"]);

    MatStep.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-step',
        template: "<ng-template><ng-content></ng-content></ng-template>",
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"],
          useExisting: MatStep
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        exportAs: 'matStep',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatStep.ctorParameters = function () {
      return [{
        type: MatStepper,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatStepper;
          })]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["STEPPER_GLOBAL_OPTIONS"]]
        }]
      }];
    };

    MatStep.propDecorators = {
      stepLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatStepLabel, {
          static: false
        }]
      }]
    };

    var MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_4) {
      _inherits(MatStepper, _angular_cdk_stepper_4);

      var _super7 = _createSuper(MatStepper);

      function MatStepper() {
        var _this9;

        _classCallCheck(this, MatStepper);

        _this9 = _super7.apply(this, arguments);
        /**
         * Event emitted when the current step is done transitioning in.
         */

        _this9.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */

        _this9._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */

        _this9._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        return _this9;
      }
      /**
       * @return {?}
       */


      _createClass(MatStepper, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this10 = this;

          this._icons.forEach(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var name = _ref.name,
                templateRef = _ref.templateRef;
            return _this10._iconOverrides[name] = templateRef;
          }); // Mark the component for change detection whenever the content children query changes


          this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this10._stateChanged();
          });

          this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
          // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
          // See https://github.com/angular/angular/issues/24084
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(
          /**
          * @param {?} x
          * @param {?} y
          * @return {?}
          */
          function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (
            /** @type {?} */
            event.toState === 'current') {
              _this10.animationDone.emit();
            }
          });
        }
      }]);

      return MatStepper;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"]);

    MatStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matStepper]',
        providers: [{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatStepper
        }]
      }]
    }];
    MatStepper.propDecorators = {
      _stepHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
        args: [MatStepHeader]
      }],
      _steps: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatStep]
      }],
      _icons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatStepperIcon]
      }],
      animationDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var MatHorizontalStepper = /*#__PURE__*/function (_MatStepper) {
      _inherits(MatHorizontalStepper, _MatStepper);

      var _super8 = _createSuper(MatHorizontalStepper);

      function MatHorizontalStepper() {
        var _this11;

        _classCallCheck(this, MatHorizontalStepper);

        _this11 = _super8.apply(this, arguments);
        /**
         * Whether the label should display in bottom or end position.
         */

        _this11.labelPosition = 'end';
        return _this11;
      }

      return MatHorizontalStepper;
    }(MatStepper);

    MatHorizontalStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-horizontal-stepper',
        exportAs: 'matHorizontalStepper',
        template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of steps; let i = index\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
        styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
        inputs: ['selectedIndex'],
        host: {
          'class': 'mat-stepper-horizontal',
          '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
          '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
          'aria-orientation': 'horizontal',
          'role': 'tablist'
        },
        animations: [matStepperAnimations.horizontalStepTransition],
        providers: [{
          provide: MatStepper,
          useExisting: MatHorizontalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatHorizontalStepper
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    MatHorizontalStepper.propDecorators = {
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var MatVerticalStepper = /*#__PURE__*/function (_MatStepper2) {
      _inherits(MatVerticalStepper, _MatStepper2);

      var _super9 = _createSuper(MatVerticalStepper);

      /**
       * @param {?} dir
       * @param {?} changeDetectorRef
       * @param {?=} elementRef
       * @param {?=} _document
       */
      function MatVerticalStepper(dir, changeDetectorRef, // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
      elementRef, _document) {
        var _this12;

        _classCallCheck(this, MatVerticalStepper);

        _this12 = _super9.call(this, dir, changeDetectorRef, elementRef, _document);
        _this12._orientation = 'vertical';
        return _this12;
      }

      return MatVerticalStepper;
    }(MatStepper);

    MatVerticalStepper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-vertical-stepper',
        exportAs: 'matVerticalStepper',
        template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
        styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
        inputs: ['selectedIndex'],
        host: {
          'class': 'mat-stepper-vertical',
          'aria-orientation': 'vertical',
          'role': 'tablist'
        },
        animations: [matStepperAnimations.verticalStepTransition],
        providers: [{
          provide: MatStepper,
          useExisting: MatVerticalStepper
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepper"],
          useExisting: MatVerticalStepper
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatVerticalStepper.ctorParameters = function () {
      return [{
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Button that moves to the next step in a stepper workflow.
     */


    var MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_5) {
      _inherits(MatStepperNext, _angular_cdk_stepper_5);

      var _super10 = _createSuper(MatStepperNext);

      function MatStepperNext() {
        _classCallCheck(this, MatStepperNext);

        return _super10.apply(this, arguments);
      }

      return MatStepperNext;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperNext"]);

    MatStepperNext.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[matStepperNext]',
        host: {
          '[type]': 'type'
        },
        inputs: ['type']
      }]
    }];
    /**
     * Button that moves to the previous step in a stepper workflow.
     */

    var MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_6) {
      _inherits(MatStepperPrevious, _angular_cdk_stepper_6);

      var _super11 = _createSuper(MatStepperPrevious);

      function MatStepperPrevious() {
        _classCallCheck(this, MatStepperPrevious);

        return _super11.apply(this, arguments);
      }

      return MatStepperPrevious;
    }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperPrevious"]);

    MatStepperPrevious.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[matStepperPrevious]',
        host: {
          '[type]': 'type'
        },
        inputs: ['type']
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatStepperModule = function MatStepperModule() {
      _classCallCheck(this, MatStepperModule);
    };

    MatStepperModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__["CdkStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
        exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
        declarations: [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon],
        providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"]]
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
    //# sourceMappingURL=stepper.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~main-angular-material-elements-angular-material-elements-module~main-ui-ui-module~qwapps-qwa~6517ad6c-es5.js.map