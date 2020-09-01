function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-angular-material-elements-angular-material-elements-module~qwapps-qwapps-module"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/tree.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/tree.js ***!
    \***************************************************/

  /*! exports provided: BaseTreeControl, FlatTreeControl, NestedTreeControl, CdkNestedTreeNode, CdkTreeNodeOutletContext, CdkTreeNodeDef, CdkTreeNodePadding, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodeOutlet, CdkTree, CdkTreeNode, getTreeNoValidDataSourceError, getTreeMultipleDefaultNodeDefsError, getTreeMissingMatchingNodeDefError, getTreeControlMissingError, getTreeControlFunctionsMissingError, CdkTreeModule, CdkTreeNodeToggle */

  /***/
  function node_modulesAngularCdkEsm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseTreeControl", function () {
      return BaseTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlatTreeControl", function () {
      return FlatTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NestedTreeControl", function () {
      return NestedTreeControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkNestedTreeNode", function () {
      return CdkNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutletContext", function () {
      return CdkTreeNodeOutletContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeDef", function () {
      return CdkTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodePadding", function () {
      return CdkTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TREE_NODE_OUTLET_NODE", function () {
      return CDK_TREE_NODE_OUTLET_NODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeOutlet", function () {
      return CdkTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTree", function () {
      return CdkTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNode", function () {
      return CdkTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeNoValidDataSourceError", function () {
      return getTreeNoValidDataSourceError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMultipleDefaultNodeDefsError", function () {
      return getTreeMultipleDefaultNodeDefsError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeMissingMatchingNodeDefError", function () {
      return getTreeMissingMatchingNodeDefError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlMissingError", function () {
      return getTreeControlMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTreeControlFunctionsMissingError", function () {
      return getTreeControlFunctionsMissingError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeModule", function () {
      return CdkTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTreeNodeToggle", function () {
      return CdkTreeNodeToggle;
    });
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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
     * Base tree control. It has basic toggle/expand/collapse operations on a single data node.
     * @abstract
     * @template T
     */


    var BaseTreeControl = /*#__PURE__*/function () {
      function BaseTreeControl() {
        _classCallCheck(this, BaseTreeControl);

        /**
         * A selection model with multi-selection to track expansion status.
         */
        this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true);
      }
      /**
       * Toggles one single data node's expanded/collapsed state.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(BaseTreeControl, [{
        key: "toggle",
        value: function toggle(dataNode) {
          this.expansionModel.toggle(dataNode);
        }
        /**
         * Expands one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expand",
        value: function expand(dataNode) {
          this.expansionModel.select(dataNode);
        }
        /**
         * Collapses one single data node.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapse",
        value: function collapse(dataNode) {
          this.expansionModel.deselect(dataNode);
        }
        /**
         * Whether a given data node is expanded or not. Returns true if the data node is expanded.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "isExpanded",
        value: function isExpanded(dataNode) {
          return this.expansionModel.isSelected(dataNode);
        }
        /**
         * Toggles a subtree rooted at `node` recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "toggleDescendants",
        value: function toggleDescendants(dataNode) {
          this.expansionModel.isSelected(dataNode) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
        }
        /**
         * Collapse all dataNodes in the tree.
         * @return {?}
         */

      }, {
        key: "collapseAll",
        value: function collapseAll() {
          this.expansionModel.clear();
        }
        /**
         * Expands a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "expandDescendants",
        value: function expandDescendants(dataNode) {
          var _this$expansionModel;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel = this.expansionModel).select.apply(_this$expansionModel, toBeProcessed);
        }
        /**
         * Collapses a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "collapseDescendants",
        value: function collapseDescendants(dataNode) {
          var _this$expansionModel2;

          /** @type {?} */
          var toBeProcessed = [dataNode];
          toBeProcessed.push.apply(toBeProcessed, _toConsumableArray(this.getDescendants(dataNode)));

          (_this$expansionModel2 = this.expansionModel).deselect.apply(_this$expansionModel2, toBeProcessed);
        }
      }]);

      return BaseTreeControl;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Flat tree control. Able to expand/collapse a subtree recursively for flattened tree.
     * @template T
     */


    var FlatTreeControl = /*#__PURE__*/function (_BaseTreeControl) {
      _inherits(FlatTreeControl, _BaseTreeControl);

      var _super = _createSuper(FlatTreeControl);

      /**
       * Construct with flat tree data node functions getLevel and isExpandable.
       * @param {?} getLevel
       * @param {?} isExpandable
       */
      function FlatTreeControl(getLevel, isExpandable) {
        var _this;

        _classCallCheck(this, FlatTreeControl);

        _this = _super.call(this);
        _this.getLevel = getLevel;
        _this.isExpandable = isExpandable;
        return _this;
      }
      /**
       * Gets a list of the data node's subtree of descendent data nodes.
       *
       * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
       * with correct levels.
       * @param {?} dataNode
       * @return {?}
       */


      _createClass(FlatTreeControl, [{
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var startIndex = this.dataNodes.indexOf(dataNode);
          /** @type {?} */

          var results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
          // The level of descendants of a tree node must be greater than the level of the given
          // tree node.
          // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
          // If we reach a node whose level is greater than the level of the tree node, we hit a
          // sibling of an ancestor.

          for (var i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
          }

          return results;
        }
        /**
         * Expands all data nodes in the tree.
         *
         * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
         * data nodes of the tree.
         * @return {?}
         */

      }, {
        key: "expandAll",
        value: function expandAll() {
          var _this$expansionModel3;

          (_this$expansionModel3 = this.expansionModel).select.apply(_this$expansionModel3, _toConsumableArray(this.dataNodes));
        }
      }]);

      return FlatTreeControl;
    }(BaseTreeControl);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type.
     * @template T
     */


    var NestedTreeControl = /*#__PURE__*/function (_BaseTreeControl2) {
      _inherits(NestedTreeControl, _BaseTreeControl2);

      var _super2 = _createSuper(NestedTreeControl);

      /**
       * Construct with nested tree function getChildren.
       * @param {?} getChildren
       */
      function NestedTreeControl(getChildren) {
        var _this2;

        _classCallCheck(this, NestedTreeControl);

        _this2 = _super2.call(this);
        _this2.getChildren = getChildren;
        return _this2;
      }
      /**
       * Expands all dataNodes in the tree.
       *
       * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
       * data nodes of the tree.
       * @return {?}
       */


      _createClass(NestedTreeControl, [{
        key: "expandAll",
        value: function expandAll() {
          var _this3 = this,
              _this$expansionModel4;

          this.expansionModel.clear();
          /** @type {?} */

          var allNodes = this.dataNodes.reduce(
          /**
          * @param {?} accumulator
          * @param {?} dataNode
          * @return {?}
          */
          function (accumulator, dataNode) {
            return [].concat(_toConsumableArray(accumulator), _toConsumableArray(_this3.getDescendants(dataNode)), [dataNode]);
          }, []);

          (_this$expansionModel4 = this.expansionModel).select.apply(_this$expansionModel4, _toConsumableArray(allNodes));
        }
        /**
         * Gets a list of descendant dataNodes of a subtree rooted at given data node recursively.
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "getDescendants",
        value: function getDescendants(dataNode) {
          /** @type {?} */
          var descendants = [];

          this._getDescendants(descendants, dataNode); // Remove the node itself


          return descendants.splice(1);
        }
        /**
         * A helper function to get descendants recursively.
         * @protected
         * @param {?} descendants
         * @param {?} dataNode
         * @return {?}
         */

      }, {
        key: "_getDescendants",
        value: function _getDescendants(descendants, dataNode) {
          var _this4 = this;

          descendants.push(dataNode);
          /** @type {?} */

          var childrenNodes = this.getChildren(dataNode);

          if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach(
            /**
            * @param {?} child
            * @return {?}
            */
            function (child) {
              return _this4._getDescendants(descendants, child);
            });
          } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            // TypeScript as of version 3.5 doesn't seem to treat `Boolean` like a function that
            // returns a `boolean` specifically in the context of `filter`, so we manually clarify that.
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
            /** @type {?} */
            Boolean)).subscribe(
            /**
            * @param {?} children
            * @return {?}
            */
            function (children) {
              var _iterator = _createForOfIteratorHelper(children),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var child = _step.value;

                  _this4._getDescendants(descendants, child);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }
      }]);

      return NestedTreeControl;
    }(BaseTreeControl);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a `CdkTreeNode` to its outlet.
     * Used primarily to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var CDK_TREE_NODE_OUTLET_NODE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TREE_NODE_OUTLET_NODE');
    /**
     * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */

    var CdkTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function CdkTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, CdkTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    CdkTreeNodeOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeOutlet]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TREE_NODE_OUTLET_NODE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Context provided to the tree node component.
     * @template T
     */


    var CdkTreeNodeOutletContext =
    /**
     * @param {?} data
     */
    function CdkTreeNodeOutletContext(data) {
      _classCallCheck(this, CdkTreeNodeOutletContext);

      this.$implicit = data;
    };
    /**
     * Data node definition for the CdkTree.
     * Captures the node's template and a when predicate that describes when this node should be used.
     * @template T
     */


    var CdkTreeNodeDef =
    /**
     * \@docs-private
     * @param {?} template
     */
    function CdkTreeNodeDef(template) {
      _classCallCheck(this, CdkTreeNodeDef);

      this.template = template;
    };

    CdkTreeNodeDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeDef]',
        inputs: ['when: cdkTreeNodeDefWhen']
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an error to be thrown when there is no usable data.
     * \@docs-private
     * @return {?}
     */


    function getTreeNoValidDataSourceError() {
      return Error("A valid data source must be provided.");
    }
    /**
     * Returns an error to be thrown when there are multiple nodes that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTreeMultipleDefaultNodeDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching node defs for a particular set of data.
     * \@docs-private
     * @return {?}
     */


    function getTreeMissingMatchingNodeDefError() {
      return Error("Could not find a matching node definition for the provided node data.");
    }
    /**
     * Returns an error to be thrown when there are tree control.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlMissingError() {
      return Error("Could not find a tree control for the tree.");
    }
    /**
     * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
     * \@docs-private
     * @return {?}
     */


    function getTreeControlFunctionsMissingError() {
      return Error("Could not find functions for nested/flat tree in tree control.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * CDK tree component that connects with a data source to retrieve data of type `T` and renders
     * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
     * @template T
     */


    var CdkTree = /*#__PURE__*/function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       */
      function CdkTree(_differs, _changeDetectorRef) {
        _classCallCheck(this, CdkTree);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Level of nodes
         */

        this._levels = new Map(); // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
        //     Remove the MAX_VALUE in viewChange

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });
      }
      /**
       * Provides a stream containing the latest data array to render. Influenced by the tree's
       * stream of view window (what dataNodes are currently on screen).
       * Data source can be an observable of data array, or a data array to render.
       * @return {?}
       */


      _createClass(CdkTree, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._dataDiffer = this._differs.find([]).create(this.trackBy);

          if (!this.treeControl) {
            throw getTreeControlMissingError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._nodeOutlet.viewContainer.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          /** @type {?} */
          var defaultNodeDefs = this._nodeDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (defaultNodeDefs.length > 1) {
            throw getTreeMultipleDefaultNodeDefsError();
          }

          this._defaultNodeDef = defaultNodeDefs[0];

          if (this.dataSource && this._nodeDefs && !this._dataSubscription) {
            this._observeRenderChanges();
          }
        } // TODO(tinayuangao): Work on keyboard traversal and actions, make sure it's working for RTL
        //     and nested trees.

        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the node outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          if (this._dataSource && typeof
          /** @type {?} */
          this._dataSource.disconnect === 'function') {
            /** @type {?} */
            this.dataSource.disconnect(this);
          }

          if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();

            this._dataSubscription = null;
          } // Remove the all dataNodes if there is now no data source


          if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;

          if (this._nodeDefs) {
            this._observeRenderChanges();
          }
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this5 = this;

          /** @type {?} */
          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["isDataSource"])(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
          } else if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            dataStream = this._dataSource;
          } else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._dataSource);
          }

          if (dataStream) {
            this._dataSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return _this5.renderNodeChanges(data);
            });
          } else {
            throw getTreeNoValidDataSourceError();
          }
        }
        /**
         * Check for changes made in the data and render each change (node added/removed/moved).
         * @param {?} data
         * @param {?=} dataDiffer
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "renderNodeChanges",
        value: function renderNodeChanges(data) {
          var _this6 = this;

          var dataDiffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._dataDiffer;
          var viewContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._nodeOutlet.viewContainer;
          var parentData = arguments.length > 3 ? arguments[3] : undefined;

          /** @type {?} */
          var changes = dataDiffer.diff(data);

          if (!changes) {
            return;
          }

          changes.forEachOperation(
          /**
          * @param {?} item
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
              _this6.insertNode(data[
              /** @type {?} */
              currentIndex],
              /** @type {?} */
              currentIndex, viewContainer, parentData);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              adjustedPreviousIndex);

              _this6._levels.delete(item.item);
            } else {
              /** @type {?} */
              var view = viewContainer.get(
              /** @type {?} */
              adjustedPreviousIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          });

          this._changeDetectorRef.detectChanges();
        }
        /**
         * Finds the matching node definition that should be used for this node data. If there is only
         * one node definition, it is returned. Otherwise, find the node definition that has a when
         * predicate that returns true with the data. If none return true, return the default node
         * definition.
         * @param {?} data
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getNodeDef",
        value: function _getNodeDef(data, i) {
          if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
          }
          /** @type {?} */


          var nodeDef = this._nodeDefs.find(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.when && def.when(i, data);
          }) || this._defaultNodeDef;

          if (!nodeDef) {
            throw getTreeMissingMatchingNodeDefError();
          }

          return nodeDef;
        }
        /**
         * Create the embedded view for the data node template and place it in the correct index location
         * within the data node view container.
         * @param {?} nodeData
         * @param {?} index
         * @param {?=} viewContainer
         * @param {?=} parentData
         * @return {?}
         */

      }, {
        key: "insertNode",
        value: function insertNode(nodeData, index, viewContainer, parentData) {
          /** @type {?} */
          var node = this._getNodeDef(nodeData, index); // Node context that will be provided to created embedded view

          /** @type {?} */


          var context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
          // Otherwise, use the level of parent node.

          if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
          } else if (typeof parentData !== 'undefined' && this._levels.has(parentData)) {
            context.level =
            /** @type {?} */
            this._levels.get(parentData) + 1;
          } else {
            context.level = 0;
          }

          this._levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet

          /** @type {?} */


          var container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
          container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
          // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
          //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

          if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
          }
        }
      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
      }]);

      return CdkTree;
    }();

    CdkTree.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'cdk-tree',
        exportAs: 'cdkTree',
        template: "<ng-container cdkTreeNodeOutlet></ng-container>",
        host: {
          'class': 'cdk-tree',
          'role': 'tree'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
        // The view for `CdkTree` consists entirely of templates declared in other views. As they are
        // declared elsewhere, they are checked when their declaration points are checked.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
      }]
    }];
    /** @nocollapse */

    CdkTree.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }];
    };

    CdkTree.propDecorators = {
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      treeControl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkTreeNodeOutlet, {
          static: true
        }]
      }],
      _nodeDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeDef]
      }]
    };
    /**
     * Tree node for CdkTree. It contains the data in the tree node.
     * @template T
     */

    var CdkTreeNode = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _tree
       */
      function CdkTreeNode(_elementRef, _tree) {
        _classCallCheck(this, CdkTreeNode);

        this._elementRef = _elementRef;
        this._tree = _tree;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits when the node's data has changed.
         */

        this._dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * The role of the node should be 'group' if it's an internal node,
         * and 'treeitem' if it's a leaf node.
         */

        this.role = 'treeitem';
        CdkTreeNode.mostRecentTreeNode =
        /** @type {?} */
        this;
      }
      /**
       * The tree node's data.
       * @return {?}
       */


      _createClass(CdkTreeNode, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          // If this is the last tree node being destroyed,
          // clear out the reference to avoid leaking memory.
          if (CdkTreeNode.mostRecentTreeNode === this) {
            CdkTreeNode.mostRecentTreeNode = null;
          }

          this._dataChanges.complete();

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Focuses the menu item. Implements for FocusableOption.
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this._elementRef.nativeElement.focus();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_setRoleFromData",
        value: function _setRoleFromData() {
          var _this7 = this;

          if (this._tree.treeControl.isExpandable) {
            this.role = this._tree.treeControl.isExpandable(this._data) ? 'group' : 'treeitem';
          } else {
            if (!this._tree.treeControl.getChildren) {
              throw getTreeControlFunctionsMissingError();
            }
            /** @type {?} */


            var childrenNodes = this._tree.treeControl.getChildren(this._data);

            if (Array.isArray(childrenNodes)) {
              this._setRoleFromChildren(
              /** @type {?} */
              childrenNodes);
            } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
              childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
              /**
              * @param {?} children
              * @return {?}
              */
              function (children) {
                return _this7._setRoleFromChildren(children);
              });
            }
          }
        }
        /**
         * @protected
         * @param {?} children
         * @return {?}
         */

      }, {
        key: "_setRoleFromChildren",
        value: function _setRoleFromChildren(children) {
          this.role = children && children.length ? 'group' : 'treeitem';
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._data) {
            this._data = value;

            this._setRoleFromData();

            this._dataChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isExpanded",
        get: function get() {
          return this._tree.treeControl.isExpanded(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "level",
        get: function get() {
          return this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._data) : 0;
        }
      }]);

      return CdkTreeNode;
    }();
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */


    CdkTreeNode.mostRecentTreeNode = null;
    CdkTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'cdk-tree-node',
        exportAs: 'cdkTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.aria-level]': 'role === "treeitem" ? level : null',
          '[attr.role]': 'role',
          'class': 'cdk-tree-node'
        }
      }]
    }];
    /** @nocollapse */

    CdkTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }];
    };

    CdkTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Nested node is a child of `<cdk-tree>`. It works with nested tree.
     * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
     * be added in the `cdkTreeNodeOutlet` in tree node template.
     * For example:
     *   ```html
     *   <cdk-nested-tree-node>
     *     {{node.name}}
     *     <ng-template cdkTreeNodeOutlet></ng-template>
     *   </cdk-nested-tree-node>
     *   ```
     * The children of node will be automatically added to `cdkTreeNodeOutlet`, the result dom will be
     * like this:
     *   ```html
     *   <cdk-nested-tree-node>
     *     {{node.name}}
     *      <cdk-nested-tree-node>{{child1.name}}</cdk-nested-tree-node>
     *      <cdk-nested-tree-node>{{child2.name}}</cdk-nested-tree-node>
     *   </cdk-nested-tree-node>
     *   ```
     * @template T
     */

    var CdkNestedTreeNode = /*#__PURE__*/function (_CdkTreeNode) {
      _inherits(CdkNestedTreeNode, _CdkTreeNode);

      var _super3 = _createSuper(CdkNestedTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       */
      function CdkNestedTreeNode(_elementRef, _tree, _differs) {
        var _this8;

        _classCallCheck(this, CdkNestedTreeNode);

        _this8 = _super3.call(this, _elementRef, _tree);
        _this8._elementRef = _elementRef;
        _this8._tree = _tree;
        _this8._differs = _differs;
        return _this8;
      }
      /**
       * @return {?}
       */


      _createClass(CdkNestedTreeNode, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this9 = this;

          this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);

          if (!this._tree.treeControl.getChildren) {
            throw getTreeControlFunctionsMissingError();
          }
          /** @type {?} */


          var childrenNodes = this._tree.treeControl.getChildren(this.data);

          if (Array.isArray(childrenNodes)) {
            this.updateChildrenNodes(
            /** @type {?} */
            childrenNodes);
          } else if (childrenNodes instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]) {
            childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return _this9.updateChildrenNodes(result);
            });
          }

          this.nodeOutlet.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this9.updateChildrenNodes();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._clear();

          _get(_getPrototypeOf(CdkNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Add children dataNodes to the NodeOutlet
         * @protected
         * @param {?=} children
         * @return {?}
         */

      }, {
        key: "updateChildrenNodes",
        value: function updateChildrenNodes(children) {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (children) {
            this._children = children;
          }

          if (outlet && this._children) {
            /** @type {?} */
            var viewContainer = outlet.viewContainer;

            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
          } else {
            // Reset the data differ if there's no children nodes displayed
            this._dataDiffer.diff([]);
          }
        }
        /**
         * Clear the children dataNodes.
         * @protected
         * @return {?}
         */

      }, {
        key: "_clear",
        value: function _clear() {
          /** @type {?} */
          var outlet = this._getNodeOutlet();

          if (outlet) {
            outlet.viewContainer.clear();

            this._dataDiffer.diff([]);
          }
        }
        /**
         * Gets the outlet for the current node.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNodeOutlet",
        value: function _getNodeOutlet() {
          var _this10 = this;

          /** @type {?} */
          var outlets = this.nodeOutlet;

          if (outlets) {
            // Note that since we use `descendants: true` on the query, we have to ensure
            // that we don't pick up the outlet of a child node by accident.
            return outlets.find(
            /**
            * @param {?} outlet
            * @return {?}
            */
            function (outlet) {
              return !outlet._node || outlet._node === _this10;
            });
          }
        }
      }]);

      return CdkNestedTreeNode;
    }(CdkTreeNode);

    CdkNestedTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'cdk-nested-tree-node',
        exportAs: 'cdkNestedTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.role]': 'role',
          'class': 'cdk-tree-node cdk-nested-tree-node'
        },
        providers: [{
          provide: CdkTreeNode,
          useExisting: CdkNestedTreeNode
        }, {
          provide: CDK_TREE_NODE_OUTLET_NODE,
          useExisting: CdkNestedTreeNode
        }]
      }]
    }];
    /** @nocollapse */

    CdkNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }];
    };

    CdkNestedTreeNode.propDecorators = {
      nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkTreeNodeOutlet, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * Indent for the children tree dataNodes.
     * This directive will add left-padding to the node to show hierarchy.
     * @template T
     */

    var CdkTreeNodePadding = /*#__PURE__*/function () {
      /**
       * @param {?} _treeNode
       * @param {?} _tree
       * @param {?} _renderer
       * @param {?} _element
       * @param {?} _dir
       */
      function CdkTreeNodePadding(_treeNode, _tree, _renderer, _element, _dir) {
        var _this11 = this;

        _classCallCheck(this, CdkTreeNodePadding);

        this._treeNode = _treeNode;
        this._tree = _tree;
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * CSS units used for the indentation value.
         */

        this.indentUnits = 'px';
        this._indent = 40;

        this._setPadding();

        if (_dir) {
          _dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this11._setPadding(true);
          });
        } // In Ivy the indentation binding might be set before the tree node's data has been added,
        // which means that we'll miss the first render. We have to subscribe to changes in the
        // data to ensure that everything is up to date.


        _treeNode._dataChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this11._setPadding();
        });
      }
      /**
       * The level of depth of the tree node. The padding will be `level * indent` pixels.
       * @return {?}
       */


      _createClass(CdkTreeNodePadding, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * The padding indent value for the tree node. Returns a string with px numbers if not null.
         * @return {?}
         */

      }, {
        key: "_paddingIndent",
        value: function _paddingIndent() {
          /** @type {?} */
          var nodeLevel = this._treeNode.data && this._tree.treeControl.getLevel ? this._tree.treeControl.getLevel(this._treeNode.data) : null;
          /** @type {?} */

          var level = this._level || nodeLevel;
          return level ? "".concat(level * this._indent).concat(this.indentUnits) : null;
        }
        /**
         * @param {?=} forceChange
         * @return {?}
         */

      }, {
        key: "_setPadding",
        value: function _setPadding() {
          var forceChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          /** @type {?} */
          var padding = this._paddingIndent();

          if (padding !== this._currentPadding || forceChange) {
            /** @type {?} */
            var element = this._element.nativeElement;
            /** @type {?} */

            var paddingProp = this._dir && this._dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
            /** @type {?} */

            var resetProp = paddingProp === 'paddingLeft' ? 'paddingRight' : 'paddingLeft';

            this._renderer.setStyle(element, paddingProp, padding);

            this._renderer.setStyle(element, resetProp, null);

            this._currentPadding = padding;
          }
        }
      }, {
        key: "level",
        get: function get() {
          return this._level;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._level = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

          this._setPadding();
        }
        /**
         * The indent for each level. Can be a number or a CSS string.
         * Default number 40px from material design menu sub-menu spec.
         * @return {?}
         */

      }, {
        key: "indent",
        get: function get() {
          return this._indent;
        }
        /**
         * @param {?} indent
         * @return {?}
         */
        ,
        set: function set(indent) {
          /** @type {?} */
          var value = indent;
          /** @type {?} */

          var units = 'px';

          if (typeof indent === 'string') {
            /** @type {?} */
            var parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
          }

          this.indentUnits = units;
          this._indent = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

          this._setPadding();
        }
      }]);

      return CdkTreeNodePadding;
    }();

    CdkTreeNodePadding.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodePadding]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodePadding.ctorParameters = function () {
      return [{
        type: CdkTreeNode
      }, {
        type: CdkTree
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodePaddingIndent']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Node toggle to expand/collapse the node.
     * @template T
     */

    var CdkTreeNodeToggle = /*#__PURE__*/function () {
      /**
       * @param {?} _tree
       * @param {?} _treeNode
       */
      function CdkTreeNodeToggle(_tree, _treeNode) {
        _classCallCheck(this, CdkTreeNodeToggle);

        this._tree = _tree;
        this._treeNode = _treeNode;
        this._recursive = false;
      }
      /**
       * Whether expand/collapse the node recursively.
       * @return {?}
       */


      _createClass(CdkTreeNodeToggle, [{
        key: "_toggle",
        // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @param {?} event
         * @return {?}
         */
        value: function _toggle(event) {
          this.recursive ? this._tree.treeControl.toggleDescendants(this._treeNode.data) : this._tree.treeControl.toggle(this._treeNode.data);
          event.stopPropagation();
        }
      }, {
        key: "recursive",
        get: function get() {
          return this._recursive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._recursive = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return CdkTreeNodeToggle;
    }();

    CdkTreeNodeToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdkTreeNodeToggle]'
      }]
    }];
    /** @nocollapse */

    CdkTreeNodeToggle.ctorParameters = function () {
      return [{
        type: CdkTree
      }, {
        type: CdkTreeNode
      }];
    };

    CdkTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkTreeNodeToggleRecursive']
      }],
      _toggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

    var CdkTreeModule = function CdkTreeModule() {
      _classCallCheck(this, CdkTreeModule);
    };

    CdkTreeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
        exports: EXPORTED_DECLARATIONS,
        declarations: EXPORTED_DECLARATIONS,
        providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"], CdkTreeNodeDef]
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
    //# sourceMappingURL=tree.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/autocomplete.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/autocomplete.js ***!
    \****************************************************************/

  /*! exports provided: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteModule, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY, getMatAutocompleteMissingPanelError, AUTOCOMPLETE_OPTION_HEIGHT, AUTOCOMPLETE_PANEL_HEIGHT, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocompleteTrigger, MatAutocompleteOrigin */

  /***/
  function node_modulesAngularMaterialEsm2015AutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteSelectedEvent", function () {
      return MatAutocompleteSelectedEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS", function () {
      return MAT_AUTOCOMPLETE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocomplete", function () {
      return MatAutocomplete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function () {
      return MatAutocompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatAutocompleteMissingPanelError", function () {
      return getMatAutocompleteMissingPanelError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_OPTION_HEIGHT", function () {
      return AUTOCOMPLETE_OPTION_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTOCOMPLETE_PANEL_HEIGHT", function () {
      return AUTOCOMPLETE_PANEL_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_VALUE_ACCESSOR", function () {
      return MAT_AUTOCOMPLETE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteTrigger", function () {
      return MatAutocompleteTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAutocompleteOrigin", function () {
      return MatAutocompleteOrigin;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
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
     * Autocomplete IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _uniqueAutocompleteIdCounter = 0;
    /**
     * Event object that is emitted when an autocomplete option is selected.
     */

    var MatAutocompleteSelectedEvent =
    /**
     * @param {?} source
     * @param {?} option
     */
    function MatAutocompleteSelectedEvent(source, option) {
      _classCallCheck(this, MatAutocompleteSelectedEvent);

      this.source = source;
      this.option = option;
    }; // Boilerplate for applying mixins to MatAutocomplete.

    /**
     * \@docs-private
     */


    var MatAutocompleteBase = function MatAutocompleteBase() {
      _classCallCheck(this, MatAutocompleteBase);
    };
    /** @type {?} */


    var _MatAutocompleteMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatAutocompleteBase);
    /**
     * Injection token to be used to override the default options for `mat-autocomplete`.
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-default-options', {
      providedIn: 'root',
      factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
      return {
        autoActiveFirstOption: false
      };
    }

    var MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteMixin) {
      _inherits(MatAutocomplete, _MatAutocompleteMixin);

      var _super4 = _createSuper(MatAutocomplete);

      /**
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} defaults
       */
      function MatAutocomplete(_changeDetectorRef, _elementRef, defaults) {
        var _this12;

        _classCallCheck(this, MatAutocomplete);

        _this12 = _super4.call(this);
        _this12._changeDetectorRef = _changeDetectorRef;
        _this12._elementRef = _elementRef;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */

        _this12.showPanel = false;
        _this12._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */

        _this12.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */

        _this12.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */

        _this12.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */

        _this12.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this12._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */

        _this12.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++);
        _this12._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
        return _this12;
      }
      /**
       * Whether the autocomplete panel is open.
       * @return {?}
       */


      _createClass(MatAutocomplete, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendantKeyManager"](this.options).withWrap(); // Set the initial visibility state.

          this._setVisibility();
        }
        /**
         * Sets the panel scrollTop. This allows us to manually scroll to display options
         * above or below the fold, as they are not actually being focused when active.
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_setScrollTop",
        value: function _setScrollTop(scrollTop) {
          if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
          }
        }
        /**
         * Returns the panel's scrollTop.
         * @return {?}
         */

      }, {
        key: "_getScrollTop",
        value: function _getScrollTop() {
          return this.panel ? this.panel.nativeElement.scrollTop : 0;
        }
        /**
         * Panel should hide itself when the option list is empty.
         * @return {?}
         */

      }, {
        key: "_setVisibility",
        value: function _setVisibility() {
          this.showPanel = !!this.options.length;

          this._setVisibilityClasses(this._classList);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits the `select` event.
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_emitSelectEvent",
        value: function _emitSelectEvent(option) {
          /** @type {?} */
          var event = new MatAutocompleteSelectedEvent(this, option);
          this.optionSelected.emit(event);
        }
        /**
         * Sets the autocomplete visibility classes on a classlist based on the panel is visible.
         * @private
         * @param {?} classList
         * @return {?}
         */

      }, {
        key: "_setVisibilityClasses",
        value: function _setVisibilityClasses(classList) {
          classList['mat-autocomplete-visible'] = this.showPanel;
          classList['mat-autocomplete-hidden'] = !this.showPanel;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._isOpen && this.showPanel;
        }
        /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */

      }, {
        key: "autoActiveFirstOption",
        get: function get() {
          return this._autoActiveFirstOption;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autoActiveFirstOption = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "classList",
        set: function set(value) {
          if (value && value.length) {
            this._classList = value.split(' ').reduce(
            /**
            * @param {?} classList
            * @param {?} className
            * @return {?}
            */
            function (classList, className) {
              classList[className.trim()] = true;
              return classList;
            },
            /** @type {?} */
            {});
          } else {
            this._classList = {};
          }

          this._setVisibilityClasses(this._classList);

          this._elementRef.nativeElement.className = '';
        }
      }]);

      return MatAutocomplete;
    }(_MatAutocompleteMixinBase);

    MatAutocomplete.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'mat-autocomplete',
        template: "<ng-template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel><ng-content></ng-content></div></ng-template>",
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        exportAs: 'matAutocomplete',
        inputs: ['disableRipple'],
        host: {
          'class': 'mat-autocomplete'
        },
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatAutocomplete
        }]
      }]
    }];
    /** @nocollapse */

    MatAutocomplete.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatAutocomplete.propDecorators = {
      template: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
          static: true
        }]
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['panel', {
          static: false
        }]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"]]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      autoActiveFirstOption: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      panelWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      optionSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      classList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['class']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive applied to an element to make it usable
     * as a connection point for an autocomplete panel.
     */

    var MatAutocompleteOrigin =
    /**
     * @param {?} elementRef
     */
    function MatAutocompleteOrigin(elementRef) {
      _classCallCheck(this, MatAutocompleteOrigin);

      this.elementRef = elementRef;
    };

    MatAutocompleteOrigin.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[matAutocompleteOrigin]',
        exportAs: 'matAutocompleteOrigin'
      }]
    }];
    /** @nocollapse */

    MatAutocompleteOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The height of each autocomplete option.
     * @type {?}
     */


    var AUTOCOMPLETE_OPTION_HEIGHT = 48;
    /**
     * The total height of the autocomplete panel.
     * @type {?}
     */

    var AUTOCOMPLETE_PANEL_HEIGHT = 256;
    /**
     * Injection token that determines the scroll handling while the autocomplete panel is open.
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-autocomplete-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Provider that allows the autocomplete to register as a ControlValueAccessor.
     * \@docs-private
     * @type {?}
     */

    var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatAutocompleteTrigger;
      }),
      multi: true
    };
    /**
     * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
     * \@docs-private
     * @return {?}
     */

    function getMatAutocompleteMissingPanelError() {
      return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
    }

    var MatAutocompleteTrigger = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _overlay
       * @param {?} _viewContainerRef
       * @param {?} _zone
       * @param {?} _changeDetectorRef
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _formField
       * @param {?} _document
       * @param {?=} _viewportRuler
       */
      function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler) {
        var _this13 = this;

        _classCallCheck(this, MatAutocompleteTrigger);

        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._viewportRuler = _viewportRuler;
        this._componentDestroyed = false;
        this._autocompleteDisabled = false;
        /**
         * Whether or not the label state is being overridden.
         */

        this._manuallyFloatingLabel = false;
        /**
         * Subscription to viewport size changes.
         */

        this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"].EMPTY;
        /**
         * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
         * closed autocomplete from being reopened if the user switches to another browser tab and then
         * comes back.
         */

        this._canOpenOnNextFocus = true;
        /**
         * Stream of keyboard events that can close the panel.
         */

        this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */

        this._windowBlurHandler =
        /**
        * @return {?}
        */
        function () {
          // If the user blurred the window while the autocomplete is focused, it means that it'll be
          // refocused when they come back. In this case we want to skip the first focus event, if the
          // pane was closed, in order to avoid reopening it unintentionally.
          _this13._canOpenOnNextFocus = _this13._document.activeElement !== _this13._element.nativeElement || _this13.panelOpen;
        };
        /**
         * `View -> model callback called when value changes`
         */


        this._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when autocomplete has been touched`
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Position of the autocomplete panel relative to the trigger element. A position of `auto`
         * will render the panel underneath the trigger if there is enough space for it to fit in
         * the viewport, otherwise the panel will be shown above it. If the position is set to
         * `above` or `below`, the panel will always be shown above or below the trigger. no matter
         * whether it fits completely in the viewport.
         */


        this.position = 'auto';
        /**
         * `autocomplete` attribute to be set on the input element.
         * \@docs-private
         */

        this.autocompleteAttribute = 'off';
        this._overlayAttached = false;
        /**
         * Stream of autocomplete option selections.
         */

        this.optionSelections =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["defer"])(
        /**
        * @return {?}
        */
        function () {
          if (_this13.autocomplete && _this13.autocomplete.options) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"]).apply(void 0, _toConsumableArray(_this13.autocomplete.options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.onSelectionChange;
            })));
          } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
          // Return a stream that we'll replace with the real one once everything is in place.


          return _this13._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this13.optionSelections;
          }));
        });

        if (typeof window !== 'undefined') {
          _zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            window.addEventListener('blur', _this13._windowBlurHandler);
          });
        }

        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Whether the autocomplete is disabled. When disabled, the element will
       * act as a regular input and the user won't be able to open the panel.
       * @return {?}
       */


      _createClass(MatAutocompleteTrigger, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes['position'] && this._positionStrategy) {
            this._setStrategyPositions(this._positionStrategy);

            if (this.panelOpen) {
              /** @type {?} */
              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (typeof window !== 'undefined') {
            window.removeEventListener('blur', this._windowBlurHandler);
          }

          this._viewportSubscription.unsubscribe();

          this._componentDestroyed = true;

          this._destroyPanel();

          this._closeKeyEventStream.complete();
        }
        /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */

      }, {
        key: "openPanel",

        /**
         * Opens the autocomplete suggestion panel.
         * @return {?}
         */
        value: function openPanel() {
          this._attachOverlay();

          this._floatLabel();
        }
        /**
         * Closes the autocomplete suggestion panel.
         * @return {?}
         */

      }, {
        key: "closePanel",
        value: function closePanel() {
          this._resetLabel();

          if (!this._overlayAttached) {
            return;
          }

          if (this.panelOpen) {
            // Only emit if the panel was visible.
            this.autocomplete.closed.emit();
          }

          this.autocomplete._isOpen = this._overlayAttached = false;

          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();

            this._closingActionsSubscription.unsubscribe();
          } // Note that in some cases this can end up being called after the component is destroyed.
          // Add a check to ensure that we don't try to run change detection on a destroyed view.


          if (!this._componentDestroyed) {
            // We need to trigger change detection manually, because
            // `fromEvent` doesn't seem to do it at the proper time.
            // This ensures that the label is reset when the
            // user clicks outside.
            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
         * within the viewport.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._overlayAttached) {
            /** @type {?} */
            this._overlayRef.updatePosition();
          }
        }
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */

      }, {
        key: "_getOutsideClickStream",

        /**
         * Stream of clicks outside of the autocomplete panel.
         * @private
         * @return {?}
         */
        value: function _getOutsideClickStream() {
          var _this14 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'click'),
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["fromEvent"])(this._document, 'touchend')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var clickTarget =
            /** @type {?} */
            event.target;
            /** @type {?} */

            var formField = _this14._formField ? _this14._formField._elementRef.nativeElement : null;
            return _this14._overlayAttached && clickTarget !== _this14._element.nativeElement && (!formField || !formField.contains(clickTarget)) && !!_this14._overlayRef && !_this14._overlayRef.overlayElement.contains(clickTarget);
          }));
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this15 = this;

          Promise.resolve(null).then(
          /**
          * @return {?}
          */
          function () {
            return _this15._setTriggerValue(value);
          });
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
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
          this._element.nativeElement.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
          // in line with other browsers. By default, pressing escape on IE will cause it to revert
          // the input value to the one that it had on focus, however it won't dispatch any events
          // which means that the model value will be out of sync with the view.

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]) {
            event.preventDefault();
          }

          if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] && this.panelOpen) {
            this.activeOption._selectViaInteraction();

            this._resetActiveItem();

            event.preventDefault();
          } else if (this.autocomplete) {
            /** @type {?} */
            var prevActiveItem = this.autocomplete._keyManager.activeItem;
            /** @type {?} */

            var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"];

            if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["TAB"]) {
              this.autocomplete._keyManager.onKeydown(event);
            } else if (isArrowKey && this._canOpen()) {
              this.openPanel();
            }

            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
              this._scrollToOption();
            }
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          event.target;
          /** @type {?} */

          var value = target.value; // Based on `NumberValueAccessor` from forms.

          if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
          } // If the input has a placeholder, IE will fire the `input` event on page load,
          // focus and blur, in addition to when the user actually changed the value. To
          // filter out all of the extra events, we save the value on focus and between
          // `input` events, and we check whether it changed.
          // See: https://connect.microsoft.com/IE/feedback/details/885747/


          if (this._previousValue !== value) {
            this._previousValue = value;

            this._onChange(value);

            if (this._canOpen() && this._document.activeElement === event.target) {
              this.openPanel();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          if (!this._canOpenOnNextFocus) {
            this._canOpenOnNextFocus = true;
          } else if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;

            this._attachOverlay();

            this._floatLabel(true);
          }
        }
        /**
         * In "auto" mode, the label will animate down as soon as focus is lost.
         * This causes the value to jump when selecting an option with the mouse.
         * This method manually floats the label until the panel can be closed.
         * @private
         * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
         * @return {?}
         */

      }, {
        key: "_floatLabel",
        value: function _floatLabel() {
          var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
              this._formField._animateAndLockLabel();
            } else {
              this._formField.floatLabel = 'always';
            }

            this._manuallyFloatingLabel = true;
          }
        }
        /**
         * If the label has been manually elevated, return it to its normal state.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetLabel",
        value: function _resetLabel() {
          if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
          }
        }
        /**
         * Given that we are not actually focusing active options, we must manually adjust scroll
         * to reveal options below the fold. First, we find the offset of the option from the top
         * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
         * the panel height + the option height, so the active option will be just visible at the
         * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
         * will become the offset. If that offset is visible within the panel already, the scrollTop is
         * not adjusted.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToOption",
        value: function _scrollToOption() {
          /** @type {?} */
          var index = this.autocomplete._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.autocomplete.options, this.autocomplete.optionGroups);
          /** @type {?} */

          var newScrollPosition = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);

          this.autocomplete._setScrollTop(newScrollPosition);
        }
        /**
         * This method listens to a stream of panel closing actions and resets the
         * stream every time the option list changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToClosingActions",
        value: function _subscribeToClosingActions() {
          var _this16 = this;

          /** @type {?} */
          var firstStable = this._zone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1));
          /** @type {?} */


          var optionChanges = this.autocomplete.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this16._positionStrategy.reapplyLastPosition();
          }), // Defer emitting to the stream until the next tick, because changing
          // bindings in here will cause "changed after checked" errors.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0)); // When the zone is stable initially, and when the option list changes...

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
          // that were created, and flatten it so our stream only emits closing events...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var wasOpen = _this16.panelOpen;

            _this16._resetActiveItem();

            _this16.autocomplete._setVisibility();

            if (_this16.panelOpen) {
              /** @type {?} */
              _this16._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
              // event, because we may not have emitted it when the panel was attached. This
              // can happen if the users opens the panel and there are no options, but the
              // options come in slightly later or as a result of the value changing.


              if (wasOpen !== _this16.panelOpen) {
                _this16.autocomplete.opened.emit();
              }
            }

            return _this16.panelClosingActions;
          }), // when the first closing event occurs...
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)) // set the value, close the panel, and complete.
          .subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this16._setValueAndClose(event);
          });
        }
        /**
         * Destroys the autocomplete suggestion panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPanel",
        value: function _destroyPanel() {
          if (this._overlayRef) {
            this.closePanel();

            this._overlayRef.dispose();

            this._overlayRef = null;
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setTriggerValue",
        value: function _setTriggerValue(value) {
          /** @type {?} */
          var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
          // The display value can also be the number zero and shouldn't fall back to an empty string.

          /** @type {?} */

          var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
          // through change detection.

          if (this._formField) {
            this._formField._control.value = inputValue;
          } else {
            this._element.nativeElement.value = inputValue;
          }

          this._previousValue = inputValue;
        }
        /**
         * This method closes the panel, and if a value is specified, also sets the associated
         * control to that value. It will also mark the control as dirty if this interaction
         * stemmed from the user.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_setValueAndClose",
        value: function _setValueAndClose(event) {
          if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);

            this._setTriggerValue(event.source.value);

            this._onChange(event.source.value);

            this._element.nativeElement.focus();

            this.autocomplete._emitSelectEvent(event.source);
          }

          this.closePanel();
        }
        /**
         * Clear any previous selected option and emit a selection change event for this option
         * @private
         * @param {?} skip
         * @return {?}
         */

      }, {
        key: "_clearPreviousSelectedOption",
        value: function _clearPreviousSelectedOption(skip) {
          this.autocomplete.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            if (option != skip && option.selected) {
              option.deselect();
            }
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this17 = this;

          if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
          }
          /** @type {?} */


          var overlayRef = this._overlayRef;

          if (!overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.autocomplete.template, this._viewContainerRef);
            overlayRef = this._overlay.create(this._getOverlayConfig());
            this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
            // the overlay event targeting provided by the CDK overlay.

            overlayRef.keydownEvents().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
              // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] && event.altKey) {
                _this17._resetActiveItem();

                _this17._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                // reach the input itself and cause the overlay to be reopened.


                event.stopPropagation();
                event.preventDefault();
              }
            });

            if (this._viewportRuler) {
              this._viewportSubscription = this._viewportRuler.change().subscribe(
              /**
              * @return {?}
              */
              function () {
                if (_this17.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this17._getPanelWidth()
                  });
                }
              });
            }
          } else {
            // Update the trigger, panel width and direction, in case anything has changed.
            this._positionStrategy.setOrigin(this._getConnectedElement());

            overlayRef.updateSize({
              width: this._getPanelWidth()
            });
          }

          if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
          }
          /** @type {?} */


          var wasOpen = this.panelOpen;

          this.autocomplete._setVisibility();

          this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
          // autocomplete won't be shown if there are no options.

          if (this.panelOpen && wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig() {
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getPanelWidth(),
            direction: this._dir
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

          this._setStrategyPositions(strategy);

          this._positionStrategy = strategy;
          return strategy;
        }
        /**
         * Sets the positions on a position strategy based on the directive's input state.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_setStrategyPositions",
        value: function _setStrategyPositions(positionStrategy) {
          /** @type {?} */
          var belowPosition = {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          };
          /** @type {?} */

          var abovePosition = {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
            // The overlay edge connected to the trigger should have squared corners, while
            // the opposite end has rounded corners. We apply a CSS class to swap the
            // border-radius based on the overlay position.
            panelClass: 'mat-autocomplete-panel-above'
          };
          /** @type {?} */

          var positions;

          if (this.position === 'above') {
            positions = [abovePosition];
          } else if (this.position === 'below') {
            positions = [belowPosition];
          } else {
            positions = [belowPosition, abovePosition];
          }

          positionStrategy.withPositions(positions);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getConnectedElement",
        value: function _getConnectedElement() {
          if (this.connectedTo) {
            return this.connectedTo.elementRef;
          }

          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getPanelWidth",
        value: function _getPanelWidth() {
          return this.autocomplete.panelWidth || this._getHostWidth();
        }
        /**
         * Returns the width of the input element, so the panel width can match it.
         * @private
         * @return {?}
         */

      }, {
        key: "_getHostWidth",
        value: function _getHostWidth() {
          return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
        }
        /**
         * Resets the active item to -1 so arrow events will activate the
         * correct options, or to 0 if the consumer opted into it.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetActiveItem",
        value: function _resetActiveItem() {
          this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
        }
        /**
         * Determines whether the panel can be opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_canOpen",
        value: function _canOpen() {
          /** @type {?} */
          var element = this._element.nativeElement;
          return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
        }
      }, {
        key: "autocompleteDisabled",
        get: function get() {
          return this._autocompleteDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._autocompleteDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._overlayAttached && this.autocomplete.showPanel;
        }
      }, {
        key: "panelClosingActions",
        get: function get() {
          var _this18 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this18._overlayAttached;
          })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this18._overlayAttached;
          })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["of"])()).pipe( // Normalize the output so we return a consistent type.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionSelectionChange"] ? event : null;
          }));
        }
        /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */

      }, {
        key: "activeOption",
        get: function get() {
          if (this.autocomplete && this.autocomplete._keyManager) {
            return this.autocomplete._keyManager.activeItem;
          }

          return null;
        }
      }]);

      return MatAutocompleteTrigger;
    }();

    MatAutocompleteTrigger.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: "input[matAutocomplete], textarea[matAutocomplete]",
        host: {
          '[attr.autocomplete]': 'autocompleteAttribute',
          '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
          '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
          '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
          '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
          '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
          '[attr.aria-haspopup]': '!autocompleteDisabled',
          // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
          // a little earlier. This avoids issues where IE delays the focusing of the input.
          '(focusin)': '_handleFocus()',
          '(blur)': '_onTouched()',
          '(input)': '_handleInput($event)',
          '(keydown)': '_handleKeydown($event)'
        },
        exportAs: 'matAutocompleteTrigger',
        providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    MatAutocompleteTrigger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ViewportRuler"]
      }];
    };

    MatAutocompleteTrigger.propDecorators = {
      autocomplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocomplete']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompletePosition']
      }],
      connectedTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteConnectedTo']
      }],
      autocompleteAttribute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['autocomplete']
      }],
      autocompleteDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matAutocompleteDisabled']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatAutocompleteModule = function MatAutocompleteModule() {
      _classCallCheck(this, MatAutocompleteModule);
    };

    MatAutocompleteModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
        exports: [MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
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
    //# sourceMappingURL=autocomplete.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/badge.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/badge.js ***!
    \*********************************************************/

  /*! exports provided: MatBadgeModule, MatBadge */

  /***/
  function node_modulesAngularMaterialEsm2015BadgeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function () {
      return MatBadgeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBadge", function () {
      return MatBadge;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

    /** @type {?} */


    var nextId = 0; // Boilerplate for applying mixins to MatBadge.

    /**
     * \@docs-private
     */

    var MatBadgeBase = function MatBadgeBase() {
      _classCallCheck(this, MatBadgeBase);
    };
    /** @type {?} */


    var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(MatBadgeBase);
    /**
     * Directive to display a text badge.
     */


    var MatBadge = /*#__PURE__*/function (_MatBadgeMixinBase2) {
      _inherits(MatBadge, _MatBadgeMixinBase2);

      var _super5 = _createSuper(MatBadge);

      /**
       * @param {?} _ngZone
       * @param {?} _elementRef
       * @param {?} _ariaDescriber
       * @param {?} _renderer
       * @param {?=} _animationMode
       */
      function MatBadge(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
        var _this19;

        _classCallCheck(this, MatBadge);

        _this19 = _super5.call(this);
        _this19._ngZone = _ngZone;
        _this19._elementRef = _elementRef;
        _this19._ariaDescriber = _ariaDescriber;
        _this19._renderer = _renderer;
        _this19._animationMode = _animationMode;
        /**
         * Whether the badge has any content.
         */

        _this19._hasContent = false;
        _this19._color = 'primary';
        _this19._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */

        _this19.position = 'above after';
        /**
         * Size of the badge. Can be 'small', 'medium', or 'large'.
         */

        _this19.size = 'medium';
        /**
         * Unique id for the badge
         */

        _this19._id = nextId++;

        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
          /** @type {?} */
          var nativeElement = _elementRef.nativeElement;

          if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
            throw Error('matBadge must be attached to an element node.');
          }
        }

        return _this19;
      }
      /**
       * The color of the badge. Can be `primary`, `accent`, or `warn`.
       * @return {?}
       */


      _createClass(MatBadge, [{
        key: "isAbove",

        /**
         * Whether the badge is above the host or not
         * @return {?}
         */
        value: function isAbove() {
          return this.position.indexOf('below') === -1;
        }
        /**
         * Whether the badge is after the host or not
         * @return {?}
         */

      }, {
        key: "isAfter",
        value: function isAfter() {
          return this.position.indexOf('before') === -1;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var contentChange = changes['content'];

          if (contentChange) {
            /** @type {?} */
            var value = contentChange.currentValue;
            this._hasContent = value != null && "".concat(value).trim().length > 0;

            this._updateTextContent();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var badgeElement = this._badgeElement;

          if (badgeElement) {
            if (this.description) {
              this._ariaDescriber.removeDescription(badgeElement, this.description);
            } // When creating a badge through the Renderer, Angular will keep it in an index.
            // We have to destroy it ourselves, otherwise it'll be retained in memory.


            if (this._renderer.destroyNode) {
              this._renderer.destroyNode(badgeElement);
            }
          }
        }
        /**
         * Gets the element into which the badge's content is being rendered.
         * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
         * @return {?}
         */

      }, {
        key: "getBadgeElement",
        value: function getBadgeElement() {
          return this._badgeElement;
        }
        /**
         * Injects a span element into the DOM with the content.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTextContent",
        value: function _updateTextContent() {
          if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
          } else {
            this._badgeElement.textContent = this.content;
          }

          return this._badgeElement;
        }
        /**
         * Creates the badge element
         * @private
         * @return {?}
         */

      }, {
        key: "_createBadgeElement",
        value: function _createBadgeElement() {
          /** @type {?} */
          var badgeElement = this._renderer.createElement('span');
          /** @type {?} */


          var activeClass = 'mat-badge-active';
          /** @type {?} */

          var contentClass = 'mat-badge-content'; // Clear any existing badges which may have persisted from a server-side render.

          this._clearExistingBadges(contentClass);

          badgeElement.setAttribute('id', "mat-badge-content-".concat(this._id));
          badgeElement.classList.add(contentClass);
          badgeElement.textContent = this.content;

          if (this._animationMode === 'NoopAnimations') {
            badgeElement.classList.add('_mat-animation-noopable');
          }

          if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
          }

          this._elementRef.nativeElement.appendChild(badgeElement); // animate in after insertion


          if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                badgeElement.classList.add(activeClass);
              });
            });
          } else {
            badgeElement.classList.add(activeClass);
          }

          return badgeElement;
        }
        /**
         * Sets the aria-label property on the element
         * @private
         * @param {?} newDescription
         * @param {?} oldDescription
         * @return {?}
         */

      }, {
        key: "_updateHostAriaDescription",
        value: function _updateHostAriaDescription(newDescription, oldDescription) {
          // ensure content available before setting label

          /** @type {?} */
          var content = this._updateTextContent();

          if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
          }

          if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
          }
        }
        /**
         * Adds css theme class given the color to the component host
         * @private
         * @param {?} colorPalette
         * @return {?}
         */

      }, {
        key: "_setColor",
        value: function _setColor(colorPalette) {
          if (colorPalette !== this._color) {
            if (this._color) {
              this._elementRef.nativeElement.classList.remove("mat-badge-".concat(this._color));
            }

            if (colorPalette) {
              this._elementRef.nativeElement.classList.add("mat-badge-".concat(colorPalette));
            }
          }
        }
        /**
         * Clears any existing badges that might be left over from server-side rendering.
         * @private
         * @param {?} cssClass
         * @return {?}
         */

      }, {
        key: "_clearExistingBadges",
        value: function _clearExistingBadges(cssClass) {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var childCount = element.children.length; // Use a reverse while, because we'll be removing elements from the list as we're iterating.

          while (childCount--) {
            /** @type {?} */
            var currentChild = element.children[childCount];

            if (currentChild.classList.contains(cssClass)) {
              element.removeChild(currentChild);
            }
          }
        }
      }, {
        key: "color",
        get: function get() {
          return this._color;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._setColor(value);

          this._color = value;
        }
        /**
         * Whether the badge should overlap its contents or not
         * @return {?}
         */

      }, {
        key: "overlap",
        get: function get() {
          return this._overlap;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        }
        /**
         * Message used to describe the decorated element via aria-describedby
         * @return {?}
         */

      }, {
        key: "description",
        get: function get() {
          return this._description;
        }
        /**
         * @param {?} newDescription
         * @return {?}
         */
        ,
        set: function set(newDescription) {
          if (newDescription !== this._description) {
            /** @type {?} */
            var badgeElement = this._badgeElement;

            this._updateHostAriaDescription(newDescription, this._description);

            this._description = newDescription;

            if (badgeElement) {
              newDescription ? badgeElement.setAttribute('aria-label', newDescription) : badgeElement.removeAttribute('aria-label');
            }
          }
        }
        /**
         * Whether the badge is hidden.
         * @return {?}
         */

      }, {
        key: "hidden",
        get: function get() {
          return this._hidden;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(val);
        }
      }]);

      return MatBadge;
    }(_MatBadgeMixinBase);

    MatBadge.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[matBadge]',
        inputs: ['disabled: matBadgeDisabled'],
        host: {
          'class': 'mat-badge',
          '[class.mat-badge-overlap]': 'overlap',
          '[class.mat-badge-above]': 'isAbove()',
          '[class.mat-badge-below]': '!isAbove()',
          '[class.mat-badge-before]': '!isAfter()',
          '[class.mat-badge-after]': 'isAfter()',
          '[class.mat-badge-small]': 'size === "small"',
          '[class.mat-badge-medium]': 'size === "medium"',
          '[class.mat-badge-large]': 'size === "large"',
          '[class.mat-badge-hidden]': 'hidden || !_hasContent',
          '[class.mat-badge-disabled]': 'disabled'
        }
      }]
    }];
    /** @nocollapse */

    MatBadge.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["AriaDescriber"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatBadge.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeColor']
      }],
      overlap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeOverlap']
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgePosition']
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadge']
      }],
      description: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeDescription']
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeSize']
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['matBadgeHidden']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatBadgeModule = function MatBadgeModule() {
      _classCallCheck(this, MatBadgeModule);
    };

    MatBadgeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        exports: [MatBadge],
        declarations: [MatBadge]
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
    //# sourceMappingURL=badge.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/bottom-sheet.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/bottom-sheet.js ***!
    \****************************************************************/

  /*! exports provided: MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig, MatBottomSheetContainer, matBottomSheetAnimations, MatBottomSheetRef */

  /***/
  function node_modulesAngularMaterialEsm2015BottomSheetJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function () {
      return MatBottomSheetModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function () {
      return MAT_BOTTOM_SHEET_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function () {
      return MatBottomSheet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function () {
      return MAT_BOTTOM_SHEET_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function () {
      return MatBottomSheetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function () {
      return MatBottomSheetContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function () {
      return matBottomSheetAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function () {
      return MatBottomSheetRef;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
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
     * Injection token that can be used to access the data that was passed in to a bottom sheet.
     * @type {?}
     */


    var MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatBottomSheetData');
    /**
     * Configuration used when opening a bottom sheet.
     * @template D
     */

    var MatBottomSheetConfig = function MatBottomSheetConfig() {
      _classCallCheck(this, MatBottomSheetConfig);

      /**
       * Data being injected into the child component.
       */
      this.data = null;
      /**
       * Whether the bottom sheet has a backdrop.
       */

      this.hasBackdrop = true;
      /**
       * Whether the user can use escape or clicking outside to close the bottom sheet.
       */

      this.disableClose = false;
      /**
       * Aria label to assign to the bottom sheet element.
       */

      this.ariaLabel = null;
      /**
       * Whether the bottom sheet should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.closeOnNavigation = true; // Note that this is disabled by default, because while the a11y recommendations are to focus
      // the first focusable element, doing so prevents screen readers from reading out the
      // rest of the bottom sheet content.

      /**
       * Whether the bottom sheet should focus the first focusable element on open.
       */

      this.autoFocus = false;
      /**
       * Whether the bottom sheet should restore focus to the
       * previously-focused element, after it's closed.
       */

      this.restoreFocus = true;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material bottom sheet.
     * @type {?}
     */


    var matBottomSheetAnimations = {
      /**
       * Animation that shows and hides a bottom sheet.
       */
      bottomSheetState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(100%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].COMPLEX, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].ACCELERATION_CURVE))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].EXITING, " ").concat(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].DECELERATION_CURVE)))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar

    /**
     * Internal component that wraps user-provided bottom sheet content.
     * \@docs-private
     */

    var MatBottomSheetContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
      _inherits(MatBottomSheetContainer, _angular_cdk_portal__);

      var _super6 = _createSuper(MatBottomSheetContainer);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _focusTrapFactory
       * @param {?} breakpointObserver
       * @param {?} document
       * @param {?} bottomSheetConfig
       */
      function MatBottomSheetContainer(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document, bottomSheetConfig) {
        var _this20;

        _classCallCheck(this, MatBottomSheetContainer);

        _this20 = _super6.call(this);
        _this20._elementRef = _elementRef;
        _this20._changeDetectorRef = _changeDetectorRef;
        _this20._focusTrapFactory = _focusTrapFactory;
        _this20.bottomSheetConfig = bottomSheetConfig;
        /**
         * The state of the bottom sheet animations.
         */

        _this20._animationState = 'void';
        /**
         * Emits whenever the state of the animation changes.
         */

        _this20._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Element that was focused before the bottom sheet was opened.
         */

        _this20._elementFocusedBeforeOpened = null;
        _this20._document = document;
        _this20._breakpointSubscription = breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge]).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this20._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium));

          _this20._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large));

          _this20._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge));
        });
        return _this20;
      }
      /**
       * Attach a component portal as content to this bottom sheet container.
       * @template T
       * @param {?} portal
       * @return {?}
       */


      _createClass(MatBottomSheetContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          this._validatePortalAttached();

          this._setPanelClass();

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a template portal as content to this bottom sheet container.
         * @template C
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          this._validatePortalAttached();

          this._setPanelClass();

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Begin animation of bottom sheet entrance into view.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter() {
          if (!this._destroyed) {
            this._animationState = 'visible';

            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Begin animation of the bottom sheet exiting from view.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit() {
          if (!this._destroyed) {
            this._animationState = 'hidden';

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._breakpointSubscription.unsubscribe();

          this._destroyed = true;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          if (event.toState === 'hidden') {
            this._restoreFocus();
          } else if (event.toState === 'visible') {
            this._trapFocus();
          }

          this._animationStateChanged.emit(event);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._animationStateChanged.emit(event);
        }
        /**
         * @private
         * @param {?} cssClass
         * @param {?} add
         * @return {?}
         */

      }, {
        key: "_toggleClass",
        value: function _toggleClass(cssClass, add) {
          /** @type {?} */
          var classList = this._elementRef.nativeElement.classList;
          add ? classList.add(cssClass) : classList.remove(cssClass);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePortalAttached",
        value: function _validatePortalAttached() {
          if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach bottom sheet content after content is already attached');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setPanelClass",
        value: function _setPanelClass() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var panelClass = this.bottomSheetConfig.panelClass;

          if (Array.isArray(panelClass)) {
            // Note that we can't use a spread here, because IE doesn't support multiple arguments.
            panelClass.forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              return element.classList.add(cssClass);
            });
          } else if (panelClass) {
            element.classList.add(panelClass);
          }
        }
        /**
         * Moves the focus inside the focus trap.
         * @private
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus() {
          if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          }

          if (this.bottomSheetConfig.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
          }
        }
        /**
         * Restores focus to the element that was focused before the bottom sheet was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          /** @type {?} */
          var toFocus = this._elementFocusedBeforeOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

          if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
          }

          if (this._focusTrap) {
            this._focusTrap.destroy();
          }
        }
        /**
         * Saves a reference to the element that was focused before the bottom sheet was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_savePreviouslyFocusedElement",
        value: function _savePreviouslyFocusedElement() {
          var _this21 = this;

          this._elementFocusedBeforeOpened =
          /** @type {?} */
          this._document.activeElement; // The `focus` method isn't available during server-side rendering.

          if (this._elementRef.nativeElement.focus) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this21._elementRef.nativeElement.focus();
            });
          }
        }
      }]);

      return MatBottomSheetContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["BasePortalOutlet"]);

    MatBottomSheetContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-bottom-sheet-container',
        template: "<ng-template cdkPortalOutlet></ng-template>",
        styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}@media (-ms-high-contrast:active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium,.mat-bottom-sheet-container-xlarge{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        animations: [matBottomSheetAnimations.bottomSheetState],
        host: {
          'class': 'mat-bottom-sheet-container',
          'tabindex': '-1',
          'role': 'dialog',
          'aria-modal': 'true',
          '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
          '[@state]': '_animationState',
          '(@state.start)': '_onAnimationStart($event)',
          '(@state.done)': '_onAnimationDone($event)'
        }
      }]
    }];
    /** @nocollapse */

    MatBottomSheetContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusTrapFactory"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: MatBottomSheetConfig
      }];
    };

    MatBottomSheetContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], {
          static: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatBottomSheetModule = function MatBottomSheetModule() {
      _classCallCheck(this, MatBottomSheetModule);
    };

    MatBottomSheetModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"]],
        exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
        declarations: [MatBottomSheetContainer],
        entryComponents: [MatBottomSheetContainer]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to a bottom sheet dispatched from the bottom sheet service.
     * @template T, R
     */

    var MatBottomSheetRef = /*#__PURE__*/function () {
      /**
       * @param {?} containerInstance
       * @param {?} _overlayRef
       * @param {?=} _location
       */
      function MatBottomSheetRef(containerInstance, _overlayRef, // @breaking-change 8.0.0 `_location` parameter to be removed.
      _location) {
        var _this22 = this;

        _classCallCheck(this, MatBottomSheetRef);

        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the bottom sheet has been dismissed.
         */

        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Subject for notifying the user that the bottom sheet has opened and appeared.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.containerInstance = containerInstance;
        this.disableClose = containerInstance.bottomSheetConfig.disableClose; // Emit when opening animation completes

        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'visible';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this22._afterOpened.next();

          _this22._afterOpened.complete();
        }); // Dispose overlay when closing animation is complete


        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'hidden';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          clearTimeout(_this22._closeFallbackTimeout);

          _overlayRef.dispose();
        });

        _overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this22._afterDismissed.next(_this22._result);

          _this22._afterDismissed.complete();
        });

        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_overlayRef.backdropClick(), _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"];
        }))).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (!_this22.disableClose && (event.type !== 'keydown' || !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(
          /** @type {?} */
          event))) {
            event.preventDefault();

            _this22.dismiss();
          }
        });
      }
      /**
       * Dismisses the bottom sheet.
       * @param {?=} result Data to be passed back to the bottom sheet opener.
       * @return {?}
       */


      _createClass(MatBottomSheetRef, [{
        key: "dismiss",
        value: function dismiss(result) {
          var _this23 = this;

          if (!this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the bottom sheet.
            this.containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return event.phaseName === 'start';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // The logic that disposes of the overlay depends on the exit animation completing, however
              // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
              // timeout which will clean everything up if the animation hasn't fired within the specified
              // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
              // vast majority of cases the timeout will have been cleared before it has fired.
              _this23._closeFallbackTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this23._overlayRef.dispose();
              }, event.totalTime + 100);

              _this23._overlayRef.detachBackdrop();
            });

            this._result = result;
            this.containerInstance.exit();
          }
        }
        /**
         * Gets an observable that is notified when the bottom sheet is finished closing.
         * @return {?}
         */

      }, {
        key: "afterDismissed",
        value: function afterDismissed() {
          return this._afterDismissed.asObservable();
        }
        /**
         * Gets an observable that is notified when the bottom sheet has opened and appeared.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this._afterOpened.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay's backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._overlayRef.backdropClick();
        }
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
      }]);

      return MatBottomSheetRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify default bottom sheet options.
     * @type {?}
     */


    var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-bottom-sheet-default-options');
    /**
     * Service to trigger Material Design bottom sheets.
     */

    var MatBottomSheet = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _injector
       * @param {?} _parentBottomSheet
       * @param {?=} _location
       * @param {?=} _defaultOptions
       */
      function MatBottomSheet(_overlay, _injector, _parentBottomSheet, _location, _defaultOptions) {
        _classCallCheck(this, MatBottomSheet);

        this._overlay = _overlay;
        this._injector = _injector;
        this._parentBottomSheet = _parentBottomSheet;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._bottomSheetRefAtThisLevel = null;
      }
      /**
       * Reference to the currently opened bottom sheet.
       * @return {?}
       */


      _createClass(MatBottomSheet, [{
        key: "open",

        /**
         * @template T, D, R
         * @param {?} componentOrTemplateRef
         * @param {?=} config
         * @return {?}
         */
        value: function open(componentOrTemplateRef, config) {
          var _this24 = this;

          /** @type {?} */
          var _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);
          /** @type {?} */


          var overlayRef = this._createOverlay(_config);
          /** @type {?} */


          var container = this._attachContainer(overlayRef, _config);
          /** @type {?} */


          var ref = new MatBottomSheetRef(container, overlayRef, this._location);

          if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](componentOrTemplateRef,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: _config.data,
              bottomSheetRef: ref
            }));
          } else {
            /** @type {?} */
            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](componentOrTemplateRef, undefined, this._createInjector(_config, ref));
            /** @type {?} */

            var contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
          } // When the bottom sheet is dismissed, clear the reference to it.


          ref.afterDismissed().subscribe(
          /**
          * @return {?}
          */
          function () {
            // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
            if (_this24._openedBottomSheetRef == ref) {
              _this24._openedBottomSheetRef = null;
            }
          });

          if (this._openedBottomSheetRef) {
            // If a bottom sheet is already in view, dismiss it and enter the
            // new bottom sheet after exit animation is complete.
            this._openedBottomSheetRef.afterDismissed().subscribe(
            /**
            * @return {?}
            */
            function () {
              return ref.containerInstance.enter();
            });

            this._openedBottomSheetRef.dismiss();
          } else {
            // If no bottom sheet is in view, enter the new bottom sheet.
            ref.containerInstance.enter();
          }

          this._openedBottomSheetRef = ref;
          return ref;
        }
        /**
         * Dismisses the currently-visible bottom sheet.
         * @return {?}
         */

      }, {
        key: "dismiss",
        value: function dismiss() {
          if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._bottomSheetRefAtThisLevel) {
            this._bottomSheetRefAtThisLevel.dismiss();
          }
        }
        /**
         * Attaches the bottom sheet container component to the overlay.
         * @private
         * @param {?} overlayRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_attachContainer",
        value: function _attachContainer(overlayRef, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatBottomSheetConfig, config]]));
          /** @type {?} */

          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](MatBottomSheetContainer, config.viewContainerRef, injector);
          /** @type {?} */

          var containerRef = overlayRef.attach(containerPortal);
          return containerRef.instance;
        }
        /**
         * Creates a new overlay and places it in the correct location.
         * @private
         * @param {?} config The user-specified bottom sheet config.
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayConfig"]({
            direction: config.direction,
            hasBackdrop: config.hasBackdrop,
            disposeOnNavigation: config.closeOnNavigation,
            maxWidth: '100%',
            scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0')
          });

          if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
          }

          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an injector to be used inside of a bottom sheet component.
         * @private
         * @template T
         * @param {?} config Config that was used to create the bottom sheet.
         * @param {?} bottomSheetRef Reference to the bottom sheet.
         * @return {?}
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, bottomSheetRef) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injectionTokens = new WeakMap([[MatBottomSheetRef, bottomSheetRef], [MAT_BOTTOM_SHEET_DATA, config.data]]);

          if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], {
              value: config.direction,
              change: Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])()
            });
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, injectionTokens);
        }
      }, {
        key: "_openedBottomSheetRef",
        get: function get() {
          /** @type {?} */
          var parent = this._parentBottomSheet;
          return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._parentBottomSheet) {
            this._parentBottomSheet._openedBottomSheetRef = value;
          } else {
            this._bottomSheetRefAtThisLevel = value;
          }
        }
      }]);

      return MatBottomSheet;
    }();

    MatBottomSheet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: MatBottomSheetModule
      }]
    }];
    /** @nocollapse */

    MatBottomSheet.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: MatBottomSheet,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: MatBottomSheetConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    MatBottomSheet.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatBottomSheet_Factory() {
        return new MatBottomSheet(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatBottomSheet, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8));
      },
      token: MatBottomSheet,
      providedIn: MatBottomSheetModule
    });
    /**
     * Applies default options to the bottom sheet config.
     * @param {?} defaults Object containing the default values to which to fall back.
     * @param {?=} config The configuration to which the defaults will be applied.
     * @return {?} The new configuration object with defaults applied.
     */

    function _applyConfigDefaults(defaults, config) {
      return Object.assign({}, defaults, config);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=bottom-sheet.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/esm2015/grid-list.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/grid-list.js ***!
    \*************************************************************/

  /*! exports provided: MatGridListModule, MatGridList, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, ɵa4 */

  /***/
  function node_modulesAngularMaterialEsm2015GridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa4", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
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
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatGridTile = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?=} _gridList
       */
      function MatGridTile(_element, _gridList) {
        _classCallCheck(this, MatGridTile);

        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
      }
      /**
       * Amount of rows that the grid tile takes up.
       * @return {?}
       */


      _createClass(MatGridTile, [{
        key: "_setStyle",

        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        value: function _setStyle(property, value) {
          /** @type {?} */
          this._element.nativeElement.style[property] = value;
        }
      }, {
        key: "rowspan",
        get: function get() {
          return this._rowspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */

      }, {
        key: "colspan",
        get: function get() {
          return this._colspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
      }]);

      return MatGridTile;
    }();

    MatGridTile.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-tile',
        exportAs: 'matGridTile',
        host: {
          'class': 'mat-grid-tile'
        },
        template: "<figure class=\"mat-figure\"><ng-content></ng-content></figure>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatGridTile.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_GRID_LIST]
        }]
      }];
    };

    MatGridTile.propDecorators = {
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var MatGridTileText = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       */
      function MatGridTileText(_element) {
        _classCallCheck(this, MatGridTileText);

        this._element = _element;
      }
      /**
       * @return {?}
       */


      _createClass(MatGridTileText, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
      }]);

      return MatGridTileText;
    }();

    MatGridTileText.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-tile-header, mat-grid-tile-footer',
        template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content><div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content>",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatGridTileText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatGridTileText.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"]]
      }]
    };
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
      _classCallCheck(this, MatGridAvatarCssMatStyler);
    };

    MatGridAvatarCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-grid-avatar], [matGridAvatar]',
        host: {
          'class': 'mat-grid-avatar'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
      _classCallCheck(this, MatGridTileHeaderCssMatStyler);
    };

    MatGridTileHeaderCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-grid-tile-header',
        host: {
          'class': 'mat-grid-tile-header'
        }
      }]
    }];
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */

    var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
      _classCallCheck(this, MatGridTileFooterCssMatStyler);
    };

    MatGridTileFooterCssMatStyler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-grid-tile-footer',
        host: {
          'class': 'mat-grid-tile-footer'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * \@docs-private
     */

    var TileCoordinator = /*#__PURE__*/function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */

        this.rowIndex = 0;
      }
      /**
       * Gets the total number of rows occupied by tiles
       * @return {?}
       */


      _createClass(TileCoordinator, [{
        key: "update",

        /**
         * Updates the tile positions.
         * @param {?} numColumns Amount of columns in the grid.
         * @param {?} tiles
         * @return {?}
         */
        value: function update(numColumns, tiles) {
          var _this25 = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return _this25._trackTile(tile);
          });
        }
        /**
         * Calculates the row and col position of a tile.
         * @private
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.

          /** @type {?} */
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /**
         * Finds the next available space large enough to fit the tile.
         * @private
         * @param {?} tileCols
         * @return {?}
         */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.

          /** @type {?} */


          var gapStartIndex = -1;
          /** @type {?} */

          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /**
         * Move "down" to the next row.
         * @private
         * @return {?}
         */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         * @private
         * @param {?} gapStartIndex
         * @return {?}
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /**
         * Update the tile tracker to account for the given tile in the given space.
         * @private
         * @param {?} start
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */

      }, {
        key: "rowspan",
        get: function get() {
          /** @type {?} */
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
      }]);

      return TileCoordinator;
    }();
    /**
     * Simple data structure for tile position (row, col).
     * \@docs-private
     */


    var TilePosition =
    /**
     * @param {?} row
     * @param {?} col
     */
    function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     * @type {?}
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * \@docs-private
     * @abstract
     */

    var TileStyler = /*#__PURE__*/function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param {?} gutterSize Size of the grid's gutter.
       * @param {?} tracker Instance of the TileCoordinator.
       * @param {?} cols Amount of columns in the grid.
       * @param {?} direction Layout direction of the grid.
       * @return {?}
       */


      _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} offset Number of tiles that have already been rendered in the row/column.
         * @return {?} Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} span The tile's rowspan or colspan.
         * @return {?} Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param {?} tile Tile to which to apply the styling.
         * @param {?} rowIndex Index of the tile's row.
         * @param {?} colIndex Index of the tile's column.
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.

          /** @type {?} */
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          /** @type {?} */

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /**
         * Sets the horizontal placement of the tile in the list.
         * @param {?} tile
         * @param {?} colIndex
         * @param {?} percentWidth
         * @param {?} gutterWidth
         * @return {?}
         */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.

          /** @type {?} */
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          /** @type {?} */

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         * @return {?}
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param {?} tileHeight Height of the tile.
         * @return {?}
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);

      return TileStyler;
    }();
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * \@docs-private
     */


    var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
      _inherits(FixedTileStyler, _TileStyler);

      var _super7 = _createSuper(FixedTileStyler);

      /**
       * @param {?} fixedRowHeight
       */
      function FixedTileStyler(fixedRowHeight) {
        var _this26;

        _classCallCheck(this, FixedTileStyler);

        _this26 = _super7.call(this);
        _this26.fixedRowHeight = fixedRowHeight;
        return _this26;
      }
      /**
       * @param {?} gutterSize
       * @param {?} tracker
       * @param {?} cols
       * @param {?} direction
       * @return {?}
       */


      _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */

      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FixedTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * \@docs-private
     */


    var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
      _inherits(RatioTileStyler, _TileStyler2);

      var _super8 = _createSuper(RatioTileStyler);

      /**
       * @param {?} value
       */
      function RatioTileStyler(value) {
        var _this27;

        _classCallCheck(this, RatioTileStyler);

        _this27 = _super8.call(this);

        _this27._parseRatio(value);

        return _this27;
      }
      /**
       * @param {?} tile
       * @param {?} rowIndex
       * @param {?} percentWidth
       * @param {?} gutterWidth
       * @return {?}
       */


      _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          /** @type {?} */
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          /** @type {?} */
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);

      return RatioTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * \@docs-private
     */


    var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
      _inherits(FitTileStyler, _TileStyler3);

      var _super9 = _createSuper(FitTileStyler);

      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _super9.apply(this, arguments);
      }

      _createClass(FitTileStyler, [{
        key: "setRowStyles",

        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */
        value: function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.

          /** @type {?} */
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          /** @type {?} */

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          /** @type {?} */

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FitTileStyler;
    }(TileStyler);
    /**
     * Wraps a CSS string in a calc function
     * @param {?} exp
     * @return {?}
     */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /**
     * Appends pixels to a CSS string if no units are given.
     * @param {?} value
     * @return {?}
     */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.

    /** @type {?} */


    var MAT_FIT_MODE = 'fit';

    var MatGridList = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _dir
       */
      function MatGridList(_element, _dir) {
        _classCallCheck(this, MatGridList);

        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */

        this._gutter = '1px';
      }
      /**
       * Amount of columns in the grid list.
       * @return {?}
       */


      _createClass(MatGridList, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkCols();

          this._checkRowHeight();
        }
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._layoutTiles();
        }
        /**
         * Throw a friendly error if cols property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCols",
        value: function _checkCols() {
          if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
          }
        }
        /**
         * Default to equal width:height if rowHeight property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkRowHeight",
        value: function _checkRowHeight() {
          if (!this._rowHeight) {
            this._setTileStyler('1:1');
          }
        }
        /**
         * Creates correct Tile Styler subtype based on rowHeight passed in by user
         * @private
         * @param {?} rowHeight
         * @return {?}
         */

      }, {
        key: "_setTileStyler",
        value: function _setTileStyler(rowHeight) {
          if (this._tileStyler) {
            this._tileStyler.reset(this);
          }

          if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
          } else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
          } else {
            this._tileStyler = new FixedTileStyler(rowHeight);
          }
        }
        /**
         * Computes and applies the size and position for all children grid tiles.
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutTiles",
        value: function _layoutTiles() {
          var _this28 = this;

          if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
          }
          /** @type {?} */


          var tracker = this._tileCoordinator;
          /** @type {?} */

          var tiles = this._tiles.filter(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return !tile._gridList || tile._gridList === _this28;
          });
          /** @type {?} */


          var direction = this._dir ? this._dir.value : 'ltr';

          this._tileCoordinator.update(this.cols, tiles);

          this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

          tiles.forEach(
          /**
          * @param {?} tile
          * @param {?} index
          * @return {?}
          */
          function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];

            _this28._tileStyler.setStyle(tile, pos.row, pos.col);
          });

          this._setListStyle(this._tileStyler.getComputedHeight());
        }
        /**
         * Sets style on the main grid-list element, given the style name and value.
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "_setListStyle",
        value: function _setListStyle(style) {
          if (style) {
            /** @type {?} */
            this._element.nativeElement.style[style[0]] = style[1];
          }
        }
      }, {
        key: "cols",
        get: function get() {
          return this._cols;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        }
        /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */

      }, {
        key: "gutterSize",
        get: function get() {
          return this._gutter;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._gutter = "".concat(value == null ? '' : value);
        }
        /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */

      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = "".concat(value == null ? '' : value);

          if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;

            this._setTileStyler(this._rowHeight);
          }
        }
      }]);

      return MatGridList;
    }();

    MatGridList.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-grid-list',
        exportAs: 'matGridList',
        template: "<div><ng-content></ng-content></div>",
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],
        host: {
          'class': 'mat-grid-list'
        },
        providers: [{
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatGridList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatGridList.propDecorators = {
      _tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatGridTile, {
          descendants: true
        }]
      }],
      cols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatGridListModule = function MatGridListModule() {
      _classCallCheck(this, MatGridListModule);
    };

    MatGridListModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
        exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
        declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
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
    //# sourceMappingURL=grid-list.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/slider.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/slider.js ***!
    \**********************************************************/

  /*! exports provided: MatSliderModule, MAT_SLIDER_VALUE_ACCESSOR, MatSliderChange, MatSlider */

  /***/
  function node_modulesAngularMaterialEsm2015SliderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
      return MatSliderModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
      return MAT_SLIDER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
      return MatSliderChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
      return MatSlider;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
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
     * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
     * the default separation we chose.
     * @type {?}
     */


    var MIN_AUTO_TICK_SEPARATION = 30;
    /**
     * The thumb gap size for a disabled slider.
     * @type {?}
     */

    var DISABLED_THUMB_GAP = 7;
    /**
     * The thumb gap size for a non-active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
    /**
     * The thumb gap size for an active slider at its minimum value.
     * @type {?}
     */

    var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
    /**
     * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)] and [formControl].
     * \@docs-private
     * @type {?}
     */

    var MAT_SLIDER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatSlider;
      }),
      multi: true
    };
    /**
     * A simple change event emitted by the MatSlider component.
     */

    var MatSliderChange = function MatSliderChange() {
      _classCallCheck(this, MatSliderChange);
    }; // Boilerplate for applying mixins to MatSlider.

    /**
     * \@docs-private
     */


    var MatSliderBase =
    /**
     * @param {?} _elementRef
     */
    function MatSliderBase(_elementRef) {
      _classCallCheck(this, MatSliderBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatSliderBase), 'accent'));
    /**
     * Allows users to select from a range of values by moving the slider thumb. It is similar in
     * behavior to the native `<input type="range">` element.
     */


    var MatSlider = /*#__PURE__*/function (_MatSliderMixinBase2) {
      _inherits(MatSlider, _MatSliderMixinBase2);

      var _super10 = _createSuper(MatSlider);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?} _dir
       * @param {?} tabIndex
       * @param {?=} _animationMode
       */
      function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _animationMode) {
        var _this29;

        _classCallCheck(this, MatSlider);

        _this29 = _super10.call(this, elementRef);
        _this29._focusMonitor = _focusMonitor;
        _this29._changeDetectorRef = _changeDetectorRef;
        _this29._dir = _dir;
        _this29._animationMode = _animationMode;
        _this29._invert = false;
        _this29._max = 100;
        _this29._min = 0;
        _this29._step = 1;
        _this29._thumbLabel = false;
        _this29._tickInterval = 0;
        _this29._value = null;
        _this29._vertical = false;
        /**
         * Event emitted when the slider value has changed.
         */

        _this29.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the slider thumb moves.
         */

        _this29.input = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this29.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */

        _this29.onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this29._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */

        _this29._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */

        _this29._isActive = false;
        /**
         * The size of a tick interval as a percentage of the size of the track.
         */

        _this29._tickIntervalPercent = 0;
        /**
         * The dimensions of the slider.
         */

        _this29._sliderDimensions = null;

        _this29._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Subscription to the Directionality change EventEmitter.
         */


        _this29._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        _this29.tabIndex = parseInt(tabIndex) || 0;
        return _this29;
      }
      /**
       * Whether the slider is inverted.
       * @return {?}
       */


      _createClass(MatSlider, [{
        key: "focus",

        /**
         * set focus to the host element
         * @return {?}
         */
        value: function focus() {
          this._focusHostElement();
        }
        /**
         * blur the host element
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this._blurHostElement();
        }
        /**
         * The percentage of the slider that coincides with the value.
         * @return {?}
         */

      }, {
        key: "_shouldInvertMouseCoords",

        /**
         * Whether mouse events should be converted to a slider position by calculating their distance
         * from the right or bottom edge of the slider as opposed to the top or left.
         * @private
         * @return {?}
         */
        value: function _shouldInvertMouseCoords() {
          return this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
        }
        /**
         * The language direction for this slider element.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDirection",
        value: function _getDirection() {
          return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this._focusMonitor.monitor(this._elementRef, true).subscribe(
          /**
          * @param {?} origin
          * @return {?}
          */
          function (origin) {
            _this30._isActive = !!origin && origin !== 'keyboard';

            _this30._changeDetectorRef.detectChanges();
          });

          if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this30._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);

          this._dirChangeSubscription.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onMouseenter",
        value: function _onMouseenter() {
          if (this.disabled) {
            return;
          } // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.


          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onMousedown",
        value: function _onMousedown(event) {
          // Don't do anything if the slider is disabled or the
          // user is using anything other than the main mouse button.
          if (this.disabled || event.button !== 0) {
            return;
          }
          /** @type {?} */


          var oldValue = this.value;
          this._isSliding = false;

          this._focusHostElement();

          this._updateValueFromPosition({
            x: event.clientX,
            y: event.clientY
          }); // Emit a change and input event if the value changed.


          if (oldValue != this.value) {
            this._emitInputEvent();

            this._emitChangeEvent();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onSlide",
        value: function _onSlide(event) {
          if (this.disabled) {
            return;
          } // The slide start event sometimes fails to fire on iOS, so if we're not already in the sliding
          // state, call the slide start handler manually.


          if (!this._isSliding) {
            this._onSlideStart(null);
          } // Prevent the slide from selecting anything else.


          event.preventDefault();
          /** @type {?} */

          var oldValue = this.value;

          this._updateValueFromPosition({
            x: event.center.x,
            y: event.center.y
          }); // Native range elements always emit `input` events when the value changed while sliding.


          if (oldValue != this.value) {
            this._emitInputEvent();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onSlideStart",
        value: function _onSlideStart(event) {
          if (this.disabled || this._isSliding) {
            return;
          } // Simulate mouseenter in case this is a mobile device.


          this._onMouseenter();

          this._isSliding = true;

          this._focusHostElement();

          this._valueOnSlideStart = this.value;

          if (event) {
            this._updateValueFromPosition({
              x: event.center.x,
              y: event.center.y
            });

            event.preventDefault();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onSlideEnd",
        value: function _onSlideEnd() {
          this._isSliding = false;

          if (this._valueOnSlideStart != this.value && !this.disabled) {
            this._emitChangeEvent();
          }

          this._valueOnSlideStart = null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          // We save the dimensions of the slider here so we can use them to update the spacing of the
          // ticks and determine where on the slider click and slide events happen.
          this._sliderDimensions = this._getSliderDimensions();

          this._updateTickIntervalPercent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.onTouched();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event)) {
            return;
          }
          /** @type {?} */


          var oldValue = this.value;

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
              this._increment(10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
              this._increment(-10);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
              this.value = this.max;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
              this.value = this.min;
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
              // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
              // inverted slider the thumb moves in that direction. However for a blind user, nothing
              // about the slider indicates that it is inverted. They will expect left to be decrement,
              // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
              // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
              // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
              // sighted users, therefore we do not swap the meaning.
              this._increment(this._getDirection() == 'rtl' ? 1 : -1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
              this._increment(1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
              // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
              this._increment(this._getDirection() == 'rtl' ? -1 : 1);

              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
              this._increment(-1);

              break;

            default:
              // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
              // it.
              return;
          }

          if (oldValue != this.value) {
            this._emitInputEvent();

            this._emitChangeEvent();
          }

          this._isSliding = true;
          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onKeyup",
        value: function _onKeyup() {
          this._isSliding = false;
        }
        /**
         * Increments the slider by the given number of steps (negative number decrements).
         * @private
         * @param {?} numSteps
         * @return {?}
         */

      }, {
        key: "_increment",
        value: function _increment(numSteps) {
          this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
        }
        /**
         * Calculate the new value from the new physical location. The value will always be snapped.
         * @private
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_updateValueFromPosition",
        value: function _updateValueFromPosition(pos) {
          if (!this._sliderDimensions) {
            return;
          }
          /** @type {?} */


          var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
          /** @type {?} */

          var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
          /** @type {?} */

          var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

          /** @type {?} */

          var percent = this._clamp((posComponent - offset) / size);

          if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
          } // Since the steps may not divide cleanly into the max value, if the user
          // slid to 0 or 100 percent, we jump to the min/max value. This approach
          // is slightly more intuitive than using `Math.ceil` below, because it
          // follows the user's pointer closer.


          if (percent === 0) {
            this.value = this.min;
          } else if (percent === 1) {
            this.value = this.max;
          } else {
            /** @type {?} */
            var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.

            /** @type {?} */


            var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

            this.value = this._clamp(closestValue, this.min, this.max);
          }
        }
        /**
         * Emits a change event if the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          this._controlValueAccessorChangeFn(this.value);

          this.valueChange.emit(this.value);
          this.change.emit(this._createChangeEvent());
        }
        /**
         * Emits an input event when the current value is different from the last emitted value.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitInputEvent",
        value: function _emitInputEvent() {
          this.input.emit(this._createChangeEvent());
        }
        /**
         * Updates the amount of space between ticks as a percentage of the width of the slider.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTickIntervalPercent",
        value: function _updateTickIntervalPercent() {
          if (!this.tickInterval || !this._sliderDimensions) {
            return;
          }

          if (this.tickInterval == 'auto') {
            /** @type {?} */
            var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            /** @type {?} */

            var pixelsPerStep = trackSize * this.step / (this.max - this.min);
            /** @type {?} */

            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            /** @type {?} */

            var pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
          } else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
          }
        }
        /**
         * Creates a slider change object from the specified value.
         * @private
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

          /** @type {?} */
          var event = new MatSliderChange();
          event.source = this;
          event.value = value;
          return event;
        }
        /**
         * Calculates the percentage of the slider that a value is.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_calculatePercentage",
        value: function _calculatePercentage(value) {
          return ((value || 0) - this.min) / (this.max - this.min);
        }
        /**
         * Calculates the value a percentage of the slider corresponds to.
         * @private
         * @param {?} percentage
         * @return {?}
         */

      }, {
        key: "_calculateValue",
        value: function _calculateValue(percentage) {
          return this.min + percentage * (this.max - this.min);
        }
        /**
         * Return a number between two numbers.
         * @private
         * @param {?} value
         * @param {?=} min
         * @param {?=} max
         * @return {?}
         */

      }, {
        key: "_clamp",
        value: function _clamp(value) {
          var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return Math.max(min, Math.min(value, max));
        }
        /**
         * Get the bounding client rect of the slider track element.
         * The track is used rather than the native element to ignore the extra space that the thumb can
         * take up.
         * @private
         * @return {?}
         */

      }, {
        key: "_getSliderDimensions",
        value: function _getSliderDimensions() {
          return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
        }
        /**
         * Focuses the native element.
         * Currently only used to allow a blur event to fire but will be used with keyboard input later.
         * @private
         * @return {?}
         */

      }, {
        key: "_focusHostElement",
        value: function _focusHostElement() {
          this._elementRef.nativeElement.focus();
        }
        /**
         * Blurs the native element.
         * @private
         * @return {?}
         */

      }, {
        key: "_blurHostElement",
        value: function _blurHostElement() {
          this._elementRef.nativeElement.blur();
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
        /**
         * Registers a callback to be triggered when the value has changed.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        }
        /**
         * Registers a callback to be triggered when the component is touched.
         * Implemented as part of ControlValueAccessor.
         * @param {?} fn Callback to be registered.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets whether the component should be disabled.
         * Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "invert",
        get: function get() {
          return this._invert;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * The maximum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v, this._max);
          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The minimum value that the slider can have.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

          if (this._value === null) {
            this.value = this._min;
          }

          this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The values at which the thumb will snap.
         * @return {?}
         */

      }, {
        key: "step",
        get: function get() {
          return this._step;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v, this._step);

          if (this._step % 1 !== 0) {
            this._roundToDecimal =
            /** @type {?} */
            this._step.toString().split('.').pop().length;
          } // Since this could modify the label, we need to notify the change detection.


          this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether or not to show the thumb label.
         * @return {?}
         */

      }, {
        key: "thumbLabel",
        get: function get() {
          return this._thumbLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */

      }, {
        key: "tickInterval",
        get: function get() {
          return this._tickInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value === 'auto') {
            this._tickInterval = 'auto';
          } else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value,
            /** @type {?} */
            this._tickInterval);
          } else {
            this._tickInterval = 0;
          }
        }
        /**
         * Value of the slider.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          // If the value needs to be read and it is still uninitialized, initialize it to the min.
          if (this._value === null) {
            this.value = this._min;
          }

          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          if (v !== this._value) {
            /** @type {?} */
            var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
            // Truncate it to ensure that it matches the label and to make it easier to work with.

            if (this._roundToDecimal) {
              value = parseFloat(value.toFixed(this._roundToDecimal));
            }

            this._value = value;
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the slider is vertical.
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
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * The value to be used for display purposes.
         * @return {?}
         */

      }, {
        key: "displayValue",
        get: function get() {
          if (this.displayWith) {
            return this.displayWith(this.value);
          } // Note that this could be improved further by rounding something like 0.999 to 1 or
          // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
          // every change detection cycle.


          if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundToDecimal);
          }

          return this.value || 0;
        }
      }, {
        key: "percent",
        get: function get() {
          return this._clamp(this._percent);
        }
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         * @return {?}
         */

      }, {
        key: "_invertAxis",
        get: function get() {
          // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
          // top. However from a y-axis standpoint this is inverted.
          return this.vertical ? !this.invert : this.invert;
        }
        /**
         * Whether the slider is at its minimum value.
         * @return {?}
         */

      }, {
        key: "_isMinValue",
        get: function get() {
          return this.percent === 0;
        }
        /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         * @return {?}
         */

      }, {
        key: "_thumbGap",
        get: function get() {
          if (this.disabled) {
            return DISABLED_THUMB_GAP;
          }

          if (this._isMinValue && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
          }

          return 0;
        }
        /**
         * CSS styles for the track background element.
         * @return {?}
         */

      }, {
        key: "_trackBackgroundStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '-' : '';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")")
          };
        }
        /**
         * CSS styles for the track fill element.
         * @return {?}
         */

      }, {
        key: "_trackFillStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X';
          /** @type {?} */

          var scale = this.vertical ? "1, ".concat(this.percent, ", 1") : "".concat(this.percent, ", 1, 1");
          /** @type {?} */

          var sign = this._shouldInvertMouseCoords() ? '' : '-';
          return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: "translate".concat(axis, "(").concat(sign).concat(this._thumbGap, "px) scale3d(").concat(scale, ")")
          };
        }
        /**
         * CSS styles for the ticks container element.
         * @return {?}
         */

      }, {
        key: "_ticksContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
          /** @type {?} */

          var offset = this._tickIntervalPercent / 2 * 100;
          return {
            'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
          };
        }
        /**
         * CSS styles for the ticks element.
         * @return {?}
         */

      }, {
        key: "_ticksStyles",
        get: function get() {
          /** @type {?} */
          var tickSize = this._tickIntervalPercent * 100;
          /** @type {?} */

          var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
          /** @type {?} */

          var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
          // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
          // ticks 180 degrees so we're really cutting off the end edge abd not the start.

          /** @type {?} */

          var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
          /** @type {?} */

          var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
          /** @type {?} */

          var styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
          };

          if (this._isMinValue && this._thumbGap) {
            /** @type {?} */
            var side = this.vertical ? this._invertAxis ? 'Bottom' : 'Top' : this._invertAxis ? 'Right' : 'Left';
            styles["padding".concat(side)] = "".concat(this._thumbGap, "px");
          }

          return styles;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_thumbContainerStyles",
        get: function get() {
          /** @type {?} */
          var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
          // instead of the right edge to avoid causing a horizontal scrollbar to appear.

          /** @type {?} */

          var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
          /** @type {?} */

          var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
          return {
            'transform': "translate".concat(axis, "(-").concat(offset, "%)")
          };
        }
      }]);

      return MatSlider;
    }(_MatSliderMixinBase);

    MatSlider.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-slider',
        exportAs: 'matSlider',
        providers: [MAT_SLIDER_VALUE_ACCESSOR],
        host: {
          '(focus)': '_onFocus()',
          '(blur)': '_onBlur()',
          '(mousedown)': '_onMousedown($event)',
          '(keydown)': '_onKeydown($event)',
          '(keyup)': '_onKeyup()',
          '(mouseenter)': '_onMouseenter()',
          '(slide)': '_onSlide($event)',
          '(slideend)': '_onSlideEnd()',
          '(slidestart)': '_onSlideStart($event)',
          'class': 'mat-slider',
          'role': 'slider',
          '[tabIndex]': 'tabIndex',
          '[attr.aria-disabled]': 'disabled',
          '[attr.aria-valuemax]': 'max',
          '[attr.aria-valuemin]': 'min',
          '[attr.aria-valuenow]': 'value',
          '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
          '[class.mat-slider-disabled]': 'disabled',
          '[class.mat-slider-has-ticks]': 'tickInterval',
          '[class.mat-slider-horizontal]': '!vertical',
          '[class.mat-slider-axis-inverted]': '_invertAxis',
          '[class.mat-slider-sliding]': '_isSliding',
          '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
          '[class.mat-slider-vertical]': 'vertical',
          '[class.mat-slider-min-value]': '_isMinValue',
          '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
          '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
        },
        template: "<div class=\"mat-slider-wrapper\" #sliderWrapper><div class=\"mat-slider-track-wrapper\"><div class=\"mat-slider-track-background\" [ngStyle]=\"_trackBackgroundStyles\"></div><div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div></div><div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\"><div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div></div><div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\"><div class=\"mat-slider-focus-ring\"></div><div class=\"mat-slider-thumb\"></div><div class=\"mat-slider-thumb-label\"><span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span></div></div></div>",
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label{cursor:-webkit-grab;cursor:grab}.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label:active,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}@media (-ms-high-contrast:active){.mat-slider-thumb-label{outline:solid 1px}}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}@media (-ms-high-contrast:active){.mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}@media (-ms-high-contrast:active){.mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-track-fill{transition:none}"],
        inputs: ['disabled', 'color', 'tabIndex'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatSlider.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatSlider.propDecorators = {
      invert: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      step: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      thumbLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      tickInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      displayWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      input: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _sliderWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['sliderWrapper', {
          static: false
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSliderModule = function MatSliderModule() {
      _classCallCheck(this, MatSliderModule);
    };

    MatSliderModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
        exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
        declarations: [MatSlider],
        providers: [{
          provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"],
          useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["GestureConfig"]
        }]
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
    //# sourceMappingURL=slider.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/tree.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/tree.js ***!
    \********************************************************/

  /*! exports provided: MatTreeNode, MatTreeNodeDef, MatNestedTreeNode, MatTreeNodePadding, MatTree, MatTreeModule, MatTreeNodeToggle, MatTreeNodeOutlet, MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource */

  /***/
  function node_modulesAngularMaterialEsm2015TreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNode", function () {
      return MatTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeDef", function () {
      return MatTreeNodeDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNestedTreeNode", function () {
      return MatNestedTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodePadding", function () {
      return MatTreeNodePadding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTree", function () {
      return MatTree;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeModule", function () {
      return MatTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeToggle", function () {
      return MatTreeNodeToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNodeOutlet", function () {
      return MatTreeNodeOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlattener", function () {
      return MatTreeFlattener;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeFlatDataSource", function () {
      return MatTreeFlatDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTreeNestedDataSource", function () {
      return MatTreeNestedDataSource;
    });
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

    /**
     * Outlet for nested CdkNode. Put `[matTreeNodeOutlet]` on a tag to place children dataNodes
     * inside the outlet.
     */


    var MatTreeNodeOutlet =
    /**
     * @param {?} viewContainer
     * @param {?=} _node
     */
    function MatTreeNodeOutlet(viewContainer, _node) {
      _classCallCheck(this, MatTreeNodeOutlet);

      this.viewContainer = viewContainer;
      this._node = _node;
    };

    MatTreeNodeOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodeOutlet]'
      }]
    }];
    /** @nocollapse */

    MatTreeNodeOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"]]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _MatTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"]));
    /** @type {?} */


    var _MatNestedTreeNodeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"]));
    /**
     * Wrapper for the CdkTree node with Material design styles.
     * @template T
     */


    var MatTreeNode = /*#__PURE__*/function (_MatTreeNodeMixinBase2) {
      _inherits(MatTreeNode, _MatTreeNodeMixinBase2);

      var _super11 = _createSuper(MatTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} tabIndex
       */
      function MatTreeNode(_elementRef, _tree, tabIndex) {
        var _this31;

        _classCallCheck(this, MatTreeNode);

        _this31 = _super11.call(this, _elementRef, _tree);
        _this31._elementRef = _elementRef;
        _this31._tree = _tree;
        _this31.role = 'treeitem';
        _this31.tabIndex = Number(tabIndex) || 0;
        return _this31;
      }

      return MatTreeNode;
    }(_MatTreeNodeMixinBase);

    MatTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'mat-tree-node',
        exportAs: 'matTreeNode',
        inputs: ['disabled', 'tabIndex'],
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.aria-level]': 'role === "treeitem" ? level : null',
          '[attr.role]': 'role',
          'class': 'mat-tree-node'
        },
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
          useExisting: MatTreeNode
        }]
      }]
    }];
    /** @nocollapse */

    MatTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatTreeNode.propDecorators = {
      role: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * Wrapper for the CdkTree node definition with Material design styles.
     * @template T
     */

    var MatTreeNodeDef = /*#__PURE__*/function (_angular_cdk_tree__WE) {
      _inherits(MatTreeNodeDef, _angular_cdk_tree__WE);

      var _super12 = _createSuper(MatTreeNodeDef);

      function MatTreeNodeDef() {
        _classCallCheck(this, MatTreeNodeDef);

        return _super12.apply(this, arguments);
      }

      return MatTreeNodeDef;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"]);

    MatTreeNodeDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodeDef]',
        inputs: ['when: matTreeNodeDefWhen'],
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeDef"],
          useExisting: MatTreeNodeDef
        }]
      }]
    }];
    MatTreeNodeDef.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNode']
      }]
    };
    /**
     * Wrapper for the CdkTree nested node with Material design styles.
     * @template T
     */

    var MatNestedTreeNode = /*#__PURE__*/function (_MatNestedTreeNodeMix) {
      _inherits(MatNestedTreeNode, _MatNestedTreeNodeMix);

      var _super13 = _createSuper(MatNestedTreeNode);

      /**
       * @param {?} _elementRef
       * @param {?} _tree
       * @param {?} _differs
       * @param {?} tabIndex
       */
      function MatNestedTreeNode(_elementRef, _tree, _differs, tabIndex) {
        var _this32;

        _classCallCheck(this, MatNestedTreeNode);

        _this32 = _super13.call(this, _elementRef, _tree, _differs);
        _this32._elementRef = _elementRef;
        _this32._tree = _tree;
        _this32._differs = _differs;
        _this32.tabIndex = Number(tabIndex) || 0;
        return _this32;
      } // This is a workaround for https://github.com/angular/angular/issues/23091
      // In aot mode, the lifecycle hooks from parent class are not called.
      // TODO(tinayuangao): Remove when the angular issue #23091 is fixed

      /**
       * @return {?}
       */


      _createClass(MatNestedTreeNode, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngAfterContentInit", this).call(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatNestedTreeNode.prototype), "ngOnDestroy", this).call(this);
        }
      }]);

      return MatNestedTreeNode;
    }(_MatNestedTreeNodeMixinBase);

    MatNestedTreeNode.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'mat-nested-tree-node',
        exportAs: 'matNestedTreeNode',
        host: {
          '[attr.aria-expanded]': 'isExpanded',
          '[attr.role]': 'role',
          'class': 'mat-nested-tree-node'
        },
        inputs: ['disabled', 'tabIndex'],
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkNestedTreeNode"],
          useExisting: MatNestedTreeNode
        }, {
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNode"],
          useExisting: MatNestedTreeNode
        }, {
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CDK_TREE_NODE_OUTLET_NODE"],
          useExisting: MatNestedTreeNode
        }]
      }]
    }];
    /** @nocollapse */

    MatNestedTreeNode.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatNestedTreeNode.propDecorators = {
      node: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matNestedTreeNode']
      }],
      nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [MatTreeNodeOutlet, {
          // We need to use `descendants: true`, because Ivy will no longer match
          // indirect descendants if it's left as false.
          descendants: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree padding with Material design styles.
     * @template T
     */

    var MatTreeNodePadding = /*#__PURE__*/function (_angular_cdk_tree__WE2) {
      _inherits(MatTreeNodePadding, _angular_cdk_tree__WE2);

      var _super14 = _createSuper(MatTreeNodePadding);

      function MatTreeNodePadding() {
        _classCallCheck(this, MatTreeNodePadding);

        return _super14.apply(this, arguments);
      }

      return MatTreeNodePadding;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"]);

    MatTreeNodePadding.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodePadding]',
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodePadding"],
          useExisting: MatTreeNodePadding
        }]
      }]
    }];
    MatTreeNodePadding.propDecorators = {
      level: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePadding']
      }],
      indent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodePaddingIndent']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with Material design styles.
     * @template T
     */

    var MatTree = /*#__PURE__*/function (_angular_cdk_tree__WE3) {
      _inherits(MatTree, _angular_cdk_tree__WE3);

      var _super15 = _createSuper(MatTree);

      function MatTree() {
        _classCallCheck(this, MatTree);

        return _super15.apply(this, arguments);
      }

      return MatTree;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"]);

    MatTree.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-tree',
        exportAs: 'matTree',
        template: "<ng-container matTreeNodeOutlet></ng-container>",
        host: {
          'class': 'mat-tree',
          'role': 'tree'
        },
        styles: [".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-ndoe{border-bottom-width:0}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // See note on CdkTree for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTree"],
          useExisting: MatTree
        }]
      }]
    }];
    MatTree.propDecorators = {
      _nodeOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [MatTreeNodeOutlet, {
          static: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTree's toggle with Material design styles.
     * @template T
     */

    var MatTreeNodeToggle = /*#__PURE__*/function (_angular_cdk_tree__WE4) {
      _inherits(MatTreeNodeToggle, _angular_cdk_tree__WE4);

      var _super16 = _createSuper(MatTreeNodeToggle);

      function MatTreeNodeToggle() {
        var _this33;

        _classCallCheck(this, MatTreeNodeToggle);

        _this33 = _super16.apply(this, arguments);
        _this33.recursive = false;
        return _this33;
      }

      return MatTreeNodeToggle;
    }(_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"]);

    MatTreeNodeToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matTreeNodeToggle]',
        providers: [{
          provide: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeNodeToggle"],
          useExisting: MatTreeNodeToggle
        }]
      }]
    }];
    MatTreeNodeToggle.propDecorators = {
      recursive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matTreeNodeToggleRecursive']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];

    var MatTreeModule = function MatTreeModule() {
      _classCallCheck(this, MatTreeModule);
    };

    MatTreeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["CdkTreeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
        exports: MAT_TREE_DIRECTIVES,
        declarations: MAT_TREE_DIRECTIVES
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Tree flattener to convert a normal type of node to node with children & level information.
     * Transform nested nodes of type `T` to flattened nodes of type `F`.
     *
     * For example, the input data of type `T` is nested, and contains its children data:
     *   SomeNode: {
     *     key: 'Fruits',
     *     children: [
     *       NodeOne: {
     *         key: 'Apple',
     *       },
     *       NodeTwo: {
     *        key: 'Pear',
     *      }
     *    ]
     *  }
     *  After flattener flatten the tree, the structure will become
     *  SomeNode: {
     *    key: 'Fruits',
     *    expandable: true,
     *    level: 1
     *  },
     *  NodeOne: {
     *    key: 'Apple',
     *    expandable: false,
     *    level: 2
     *  },
     *  NodeTwo: {
     *   key: 'Pear',
     *   expandable: false,
     *   level: 2
     * }
     * and the output flattened type is `F` with additional information.
     * @template T, F
     */

    var MatTreeFlattener = /*#__PURE__*/function () {
      /**
       * @param {?} transformFunction
       * @param {?} getLevel
       * @param {?} isExpandable
       * @param {?} getChildren
       */
      function MatTreeFlattener(transformFunction, getLevel, isExpandable, getChildren) {
        _classCallCheck(this, MatTreeFlattener);

        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
      }
      /**
       * @param {?} node
       * @param {?} level
       * @param {?} resultNodes
       * @param {?} parentMap
       * @return {?}
       */


      _createClass(MatTreeFlattener, [{
        key: "_flattenNode",
        value: function _flattenNode(node, level, resultNodes, parentMap) {
          var _this34 = this;

          /** @type {?} */
          var flatNode = this.transformFunction(node, level);
          resultNodes.push(flatNode);

          if (this.isExpandable(flatNode)) {
            /** @type {?} */
            var childrenNodes = this.getChildren(node);

            if (childrenNodes) {
              if (Array.isArray(childrenNodes)) {
                this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
              } else {
                childrenNodes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
                /**
                * @param {?} children
                * @return {?}
                */
                function (children) {
                  _this34._flattenChildren(children, level, resultNodes, parentMap);
                });
              }
            }
          }

          return resultNodes;
        }
        /**
         * @param {?} children
         * @param {?} level
         * @param {?} resultNodes
         * @param {?} parentMap
         * @return {?}
         */

      }, {
        key: "_flattenChildren",
        value: function _flattenChildren(children, level, resultNodes, parentMap) {
          var _this35 = this;

          children.forEach(
          /**
          * @param {?} child
          * @param {?} index
          * @return {?}
          */
          function (child, index) {
            /** @type {?} */
            var childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);

            _this35._flattenNode(child, level + 1, resultNodes, childParentMap);
          });
        }
        /**
         * Flatten a list of node type T to flattened version of node F.
         * Please note that type T may be nested, and the length of `structuredData` may be different
         * from that of returned list `F[]`.
         * @param {?} structuredData
         * @return {?}
         */

      }, {
        key: "flattenNodes",
        value: function flattenNodes(structuredData) {
          var _this36 = this;

          /** @type {?} */
          var resultNodes = [];
          structuredData.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return _this36._flattenNode(node, 0, resultNodes, []);
          });
          return resultNodes;
        }
        /**
         * Expand flattened node with current expansion status.
         * The returned list may have different length.
         * @param {?} nodes
         * @param {?} treeControl
         * @return {?}
         */

      }, {
        key: "expandFlattenedNodes",
        value: function expandFlattenedNodes(nodes, treeControl) {
          var _this37 = this;

          /** @type {?} */
          var results = [];
          /** @type {?} */

          var currentExpand = [];
          currentExpand[0] = true;
          nodes.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            /** @type {?} */
            var expand = true;

            for (var i = 0; i <= _this37.getLevel(node); i++) {
              expand = expand && currentExpand[i];
            }

            if (expand) {
              results.push(node);
            }

            if (_this37.isExpandable(node)) {
              currentExpand[_this37.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
          });
          return results;
        }
      }]);

      return MatTreeFlattener;
    }();
    /**
     * Data source for flat tree.
     * The data source need to handle expansion/collapsion of the tree node and change the data feed
     * to `MatTree`.
     * The nested tree nodes of type `T` are flattened through `MatTreeFlattener`, and converted
     * to type `F` for `MatTree` to consume.
     * @template T, F
     */


    var MatTreeFlatDataSource = /*#__PURE__*/function (_angular_cdk_collecti) {
      _inherits(MatTreeFlatDataSource, _angular_cdk_collecti);

      var _super17 = _createSuper(MatTreeFlatDataSource);

      /**
       * @param {?} _treeControl
       * @param {?} _treeFlattener
       * @param {?=} initialData
       */
      function MatTreeFlatDataSource(_treeControl, _treeFlattener) {
        var _this38;

        var initialData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        _classCallCheck(this, MatTreeFlatDataSource);

        _this38 = _super17.call(this);
        _this38._treeControl = _treeControl;
        _this38._treeFlattener = _treeFlattener;
        _this38._flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this38._expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this38._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        return _this38;
      }
      /**
       * @return {?}
       */


      _createClass(MatTreeFlatDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this39 = this;

          /** @type {?} */
          var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.onChange, this._flattenedData];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @return {?}
          */
          function () {
            _this39._expandedData.next(_this39._treeFlattener.expandFlattenedNodes(_this39._flattenedData.value, _this39._treeControl));

            return _this39._expandedData.value;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);

          this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));

          this._treeControl.dataNodes = this._flattenedData.value;
        }
      }]);

      return MatTreeFlatDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Data source for nested tree.
     *
     * The data source for nested tree doesn't have to consider node flattener, or the way to expand
     * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
     * @template T
     */


    var MatTreeNestedDataSource = /*#__PURE__*/function (_angular_cdk_collecti2) {
      _inherits(MatTreeNestedDataSource, _angular_cdk_collecti2);

      var _super18 = _createSuper(MatTreeNestedDataSource);

      function MatTreeNestedDataSource() {
        var _this40;

        _classCallCheck(this, MatTreeNestedDataSource);

        _this40 = _super18.apply(this, arguments);
        _this40._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        return _this40;
      }
      /**
       * Data for the nested tree
       * @return {?}
       */


      _createClass(MatTreeNestedDataSource, [{
        key: "connect",

        /**
         * @param {?} collectionViewer
         * @return {?}
         */
        value: function connect(collectionViewer) {
          var _this41 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"]).apply(void 0, [collectionViewer.viewChange, this._data]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this41.data;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {// no op
        }
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._data.next(value);
        }
      }]);

      return MatTreeNestedDataSource;
    }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=tree.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~main-angular-material-elements-angular-material-elements-module~qwapps-qwapps-module-es5.js.map