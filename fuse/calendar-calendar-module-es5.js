function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"], {
  /***/
  "./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMattlewis92DomAutoscrollerDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    var domSet = __webpack_require__(
    /*! dom-set */
    "./node_modules/dom-set/dist/bundle.js");

    var domPlane = __webpack_require__(
    /*! dom-plane */
    "./node_modules/dom-plane/dist/bundle.js");

    var mousemoveDispatcher = _interopDefault(__webpack_require__(
    /*! dom-mousemove-dispatcher */
    "./node_modules/dom-mousemove-dispatcher/dist/bundle.js"));

    var prefix = ['webkit', 'moz', 'ms', 'o'];

    var requestFrame = function () {
      if (typeof window === "undefined") {
        return function () {};
      }

      for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) {
        var lastTime = 0;

        window.requestAnimationFrame = function (callback) {
          var now = new Date().getTime();
          var ttc = Math.max(0, 16 - now - lastTime);
          var timer = window.setTimeout(function () {
            return callback(now + ttc);
          }, ttc);
          lastTime = now + ttc;
          return timer;
        };
      }

      return window.requestAnimationFrame.bind(window);
    }();

    var cancelFrame = function () {
      if (typeof window === "undefined") {
        return function () {};
      }

      for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
        window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
      }

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (timer) {
          window.clearTimeout(timer);
        };
      }

      return window.cancelAnimationFrame.bind(window);
    }();

    function AutoScroller(elements, options) {
      if (options === void 0) options = {};
      var self = this;
      var maxSpeed = 4,
          scrolling = false;
      this.margin = options.margin || -1; //this.scrolling = false;

      this.scrollWhenOutside = options.scrollWhenOutside || false;
      var point = {},
          pointCB = domPlane.createPointCB(point),
          dispatcher = mousemoveDispatcher(),
          down = false;
      window.addEventListener('mousemove', pointCB, false);
      window.addEventListener('touchmove', pointCB, false);

      if (!isNaN(options.maxSpeed)) {
        maxSpeed = options.maxSpeed;
      }

      this.autoScroll = typeFunc.boolean(options.autoScroll);
      this.syncMove = typeFunc.boolean(options.syncMove, false);

      this.destroy = function (forceCleanAnimation) {
        window.removeEventListener('mousemove', pointCB, false);
        window.removeEventListener('touchmove', pointCB, false);
        window.removeEventListener('mousedown', onDown, false);
        window.removeEventListener('touchstart', onDown, false);
        window.removeEventListener('mouseup', onUp, false);
        window.removeEventListener('touchend', onUp, false);
        window.removeEventListener('pointerup', onUp, false);
        window.removeEventListener('mouseleave', onMouseOut, false);
        window.removeEventListener('mousemove', onMove, false);
        window.removeEventListener('touchmove', onMove, false);
        window.removeEventListener('scroll', setScroll, true);
        elements = [];

        if (forceCleanAnimation) {
          cleanAnimation();
        }
      };

      this.add = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        domSet.addElements.apply(void 0, [elements].concat(element));
        return this;
      };

      this.remove = function () {
        var element = [],
            len = arguments.length;

        while (len--) {
          element[len] = arguments[len];
        }

        return domSet.removeElements.apply(void 0, [elements].concat(element));
      };

      var hasWindow = null,
          windowAnimationFrame;

      if (Object.prototype.toString.call(elements) !== '[object Array]') {
        elements = [elements];
      }

      (function (temp) {
        elements = [];
        temp.forEach(function (element) {
          if (element === window) {
            hasWindow = window;
          } else {
            self.add(element);
          }
        });
      })(elements);

      Object.defineProperties(this, {
        down: {
          get: function get() {
            return down;
          }
        },
        maxSpeed: {
          get: function get() {
            return maxSpeed;
          }
        },
        point: {
          get: function get() {
            return point;
          }
        },
        scrolling: {
          get: function get() {
            return scrolling;
          }
        }
      });
      var n = 0,
          current = null,
          animationFrame;
      window.addEventListener('mousedown', onDown, false);
      window.addEventListener('touchstart', onDown, false);
      window.addEventListener('mouseup', onUp, false);
      window.addEventListener('touchend', onUp, false);
      /*
      IE does not trigger mouseup event when scrolling.
      It is a known issue that Microsoft won't fix.
      https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
      IE supports pointer events instead
      */

      window.addEventListener('pointerup', onUp, false);
      window.addEventListener('mousemove', onMove, false);
      window.addEventListener('touchmove', onMove, false);
      window.addEventListener('mouseleave', onMouseOut, false);
      window.addEventListener('scroll', setScroll, true);

      function setScroll(e) {
        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === e.target) {
            scrolling = true;
            break;
          }
        }

        if (scrolling) {
          requestFrame(function () {
            return scrolling = false;
          });
        }
      }

      function onDown() {
        down = true;
      }

      function onUp() {
        down = false;
        cleanAnimation();
      }

      function cleanAnimation() {
        cancelFrame(animationFrame);
        cancelFrame(windowAnimationFrame);
      }

      function onMouseOut() {
        down = false;
      }

      function getTarget(target) {
        if (!target) {
          return null;
        }

        if (current === target) {
          return target;
        }

        if (domSet.hasElement(elements, target)) {
          return target;
        }

        while (target = target.parentNode) {
          if (domSet.hasElement(elements, target)) {
            return target;
          }
        }

        return null;
      }

      function getElementUnderPoint() {
        var underPoint = null;

        for (var i = 0; i < elements.length; i++) {
          if (inside(point, elements[i])) {
            underPoint = elements[i];
          }
        }

        return underPoint;
      }

      function onMove(event) {
        if (!self.autoScroll()) {
          return;
        }

        if (event['dispatched']) {
          return;
        }

        var target = event.target,
            body = document.body;

        if (current && !inside(point, current)) {
          if (!self.scrollWhenOutside) {
            current = null;
          }
        }

        if (target && target.parentNode === body) {
          //The special condition to improve speed.
          target = getElementUnderPoint();
        } else {
          target = getTarget(target);

          if (!target) {
            target = getElementUnderPoint();
          }
        }

        if (target && target !== current) {
          current = target;
        }

        if (hasWindow) {
          cancelFrame(windowAnimationFrame);
          windowAnimationFrame = requestFrame(scrollWindow);
        }

        if (!current) {
          return;
        }

        cancelFrame(animationFrame);
        animationFrame = requestFrame(scrollTick);
      }

      function scrollWindow() {
        autoScroll(hasWindow);
        cancelFrame(windowAnimationFrame);
        windowAnimationFrame = requestFrame(scrollWindow);
      }

      function scrollTick() {
        if (!current) {
          return;
        }

        autoScroll(current);
        cancelFrame(animationFrame);
        animationFrame = requestFrame(scrollTick);
      }

      function autoScroll(el) {
        var rect = domPlane.getClientRect(el),
            scrollx,
            scrolly;

        if (point.x < rect.left + self.margin) {
          scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin - 1) * self.maxSpeed);
        } else if (point.x > rect.right - self.margin) {
          scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin + 1) * self.maxSpeed);
        } else {
          scrollx = 0;
        }

        if (point.y < rect.top + self.margin) {
          scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin - 1) * self.maxSpeed);
        } else if (point.y > rect.bottom - self.margin) {
          scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin + 1) * self.maxSpeed);
        } else {
          scrolly = 0;
        }

        if (self.syncMove()) {
          /*
          Notes about mousemove event dispatch.
          screen(X/Y) should need to be updated.
          Some other properties might need to be set.
          Keep the syncMove option default false until all inconsistencies are taken care of.
          */
          dispatcher.dispatch(el, {
            pageX: point.pageX + scrollx,
            pageY: point.pageY + scrolly,
            clientX: point.x + scrollx,
            clientY: point.y + scrolly
          });
        }

        setTimeout(function () {
          if (scrolly) {
            scrollY(el, scrolly);
          }

          if (scrollx) {
            scrollX(el, scrollx);
          }
        });
      }

      function scrollY(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
        } else {
          el.scrollTop += amount;
        }
      }

      function scrollX(el, amount) {
        if (el === window) {
          window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
        } else {
          el.scrollLeft += amount;
        }
      }
    }

    function AutoScrollerFactory(element, options) {
      return new AutoScroller(element, options);
    }

    function inside(point, el, rect) {
      if (!rect) {
        return domPlane.pointInside(point, el);
      } else {
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
      }
    }
    /*
    git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
    git push -u origin master
    */


    module.exports = AutoScrollerFactory; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/angular-calendar/date-adapters/date-fns/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/angular-calendar/date-adapters/date-fns/index.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCalendarDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var tslib_1 = __webpack_require__(
    /*! tslib */
    "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");

    var date_fns_1 = __webpack_require__(
    /*! calendar-utils/date-adapters/date-fns */
    "./node_modules/calendar-utils/date-adapters/date-fns/index.js");

    var addWeeks = __webpack_require__(
    /*! date-fns/add_weeks/index */
    "./node_modules/date-fns/add_weeks/index.js");

    var addMonths = __webpack_require__(
    /*! date-fns/add_months/index */
    "./node_modules/date-fns/add_months/index.js");

    var subDays = __webpack_require__(
    /*! date-fns/sub_days/index */
    "./node_modules/date-fns/sub_days/index.js");

    var subWeeks = __webpack_require__(
    /*! date-fns/sub_weeks/index */
    "./node_modules/date-fns/sub_weeks/index.js");

    var subMonths = __webpack_require__(
    /*! date-fns/sub_months/index */
    "./node_modules/date-fns/sub_months/index.js");

    var getISOWeek = __webpack_require__(
    /*! date-fns/get_iso_week/index */
    "./node_modules/date-fns/get_iso_week/index.js");

    var setDate = __webpack_require__(
    /*! date-fns/set_date/index */
    "./node_modules/date-fns/set_date/index.js");

    var setMonth = __webpack_require__(
    /*! date-fns/set_month/index */
    "./node_modules/date-fns/set_month/index.js");

    var setYear = __webpack_require__(
    /*! date-fns/set_year/index */
    "./node_modules/date-fns/set_year/index.js");

    var getDate = __webpack_require__(
    /*! date-fns/get_date/index */
    "./node_modules/date-fns/get_date/index.js");

    var getYear = __webpack_require__(
    /*! date-fns/get_year/index */
    "./node_modules/date-fns/get_year/index.js");

    function adapterFactory() {
      return tslib_1.__assign({}, date_fns_1.adapterFactory(), {
        addWeeks: addWeeks,
        addMonths: addMonths,
        subDays: subDays,
        subWeeks: subWeeks,
        subMonths: subMonths,
        getISOWeek: getISOWeek,
        setDate: setDate,
        setMonth: setMonth,
        setYear: setYear,
        getDate: getDate,
        getYear: getYear
      });
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/angular-calendar/fesm2015/angular-calendar.js":
  /*!********************************************************************!*\
    !*** ./node_modules/angular-calendar/fesm2015/angular-calendar.js ***!
    \********************************************************************/

  /*! exports provided: DAYS_OF_WEEK, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr */

  /***/
  function node_modulesAngularCalendarFesm2015AngularCalendarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
      return CalendarAngularDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
      return CalendarCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
      return CalendarDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
      return CalendarDayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
      return CalendarDayViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
      return CalendarEventTimesChangedEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
      return CalendarEventTitleFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
      return CalendarMomentDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
      return CalendarMonthModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
      return CalendarMonthViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
      return CalendarNativeDateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
      return CalendarUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
      return CalendarView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
      return CalendarWeekModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
      return CalendarWeekViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
      return MOMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
      return collapseAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
      return getWeekViewPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CalendarOpenDayEventsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CalendarEventActionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CalendarEventTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return CalendarTooltipWindowComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return CalendarTooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return CalendarPreviousViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return CalendarNextViewDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return CalendarTodayDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return CalendarDatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return CalendarEventTitlePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return ClickDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return CalendarMonthCellComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return CalendarMonthViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return CalendarWeekViewHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return CalendarWeekViewEventComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return CalendarWeekViewHourSegmentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return CalendarDayViewHourSegmentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return CalendarDayViewEventComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! positioning */
    "./node_modules/positioning/dist/positioning.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! calendar-utils */
    "./node_modules/calendar-utils/calendar-utils.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return calendar_utils__WEBPACK_IMPORTED_MODULE_5__["DAYS_OF_WEEK"];
    });
    /* harmony import */


    var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-draggable-droppable */
    "./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-resizable-element */
    "./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! tslib */
    "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
      _classCallCheck(this, CalendarEventActionsComponent);

      this.trackByActionId =
      /**
      * @param {?} index
      * @param {?} action
      * @return {?}
      */
      function (index, action) {
        return action.id ? action.id : action;
      };
    };

    CalendarEventActionsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-event-actions',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event })\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarEventActionsComponent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
      _classCallCheck(this, CalendarEventTitleComponent);
    };

    CalendarEventTitleComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-event-title',
        template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarEventTitleComponent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      view: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
      _classCallCheck(this, CalendarTooltipWindowComponent);
    };

    CalendarTooltipWindowComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-tooltip-window',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarTooltipWindowComponent.propDecorators = {
      contents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var CalendarTooltipDirective = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} injector
       * @param {?} renderer
       * @param {?} componentFactoryResolver
       * @param {?} viewContainerRef
       * @param {?} document
       */
      function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
      ) {
        _classCallCheck(this, CalendarTooltipDirective);

        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document; // tslint:disable-line no-input-rename

        this.placement = 'auto'; // tslint:disable-line no-input-rename
        // tslint:disable-line no-input-rename

        this.delay = null; // tslint:disable-line no-input-rename

        this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CalendarTooltipDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hide();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onMouseOver",
        value: function onMouseOver() {
          var _this2 = this;

          /** @type {?} */
          var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(this.delay);
          delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.cancelTooltipDelay$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this2.show();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "onMouseOut",
        value: function onMouseOut() {
          this.hide();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this3 = this;

          if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;

            if (this.appendToBody) {
              this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }

            requestAnimationFrame(
            /**
            * @return {?}
            */
            function () {
              _this3.positionTooltip();
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
          }

          this.cancelTooltipDelay$.next();
        }
        /**
         * @private
         * @param {?=} previousPosition
         * @return {?}
         */

      }, {
        key: "positionTooltip",
        value: function positionTooltip(previousPosition) {
          if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

            if (previousPosition !== this.tooltipRef.instance.placement) {
              this.positionTooltip(this.tooltipRef.instance.placement);
            }
          }
        }
      }]);

      return CalendarTooltipDirective;
    }();

    CalendarTooltipDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarTooltip]'
      }]
    }];
    /** @nocollapse */

    CalendarTooltipDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    CalendarTooltipDirective.propDecorators = {
      contents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['mwlCalendarTooltip']
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipPlacement']
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipTemplate']
      }],
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipEvent']
      }],
      appendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipAppendToBody']
      }],
      delay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['tooltipDelay']
      }],
      onMouseOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseenter']
      }],
      onMouseOut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseleave']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */

    var DateAdapter = function DateAdapter() {
      _classCallCheck(this, DateAdapter);
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {string} */


    var CalendarView = {
      Month: 'month',
      Week: 'week',
      Day: 'day'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var validateEvents =
    /**
    * @param {?} events
    * @return {?}
    */
    function validateEvents(events) {
      /** @type {?} */
      var warn =
      /**
      * @param {...?} args
      * @return {?}
      */
      function warn() {
        var _console;

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
      };

      return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["validateEvents"])(events, warn);
    };
    /**
     * @param {?} outer
     * @param {?} inner
     * @return {?}
     */


    function isInside(outer, inner) {
      return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
    }
    /**
     * @param {?} amount
     * @param {?} precision
     * @return {?}
     */


    function roundToNearest(amount, precision) {
      return Math.round(amount / precision) * precision;
    }
    /** @type {?} */


    var trackByEventId =
    /**
    * @param {?} index
    * @param {?} event
    * @return {?}
    */
    function trackByEventId(index, event) {
      return event.id ? event.id : event;
    };
    /** @type {?} */


    var trackByWeekDayHeaderDate =
    /**
    * @param {?} index
    * @param {?} day
    * @return {?}
    */
    function trackByWeekDayHeaderDate(index, day) {
      return day.date.toISOString();
    };
    /** @type {?} */


    var trackByHourSegment =
    /**
    * @param {?} index
    * @param {?} segment
    * @return {?}
    */
    function trackByHourSegment(index, segment) {
      return segment.date.toISOString();
    };
    /** @type {?} */


    var trackByHour =
    /**
    * @param {?} index
    * @param {?} hour
    * @return {?}
    */
    function trackByHour(index, hour) {
      return hour.segments[0].date.toISOString();
    };
    /** @type {?} */


    var trackByDayOrWeekEvent =
    /**
    * @param {?} index
    * @param {?} weekEvent
    * @return {?}
    */
    function trackByDayOrWeekEvent(index, weekEvent) {
      return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
    };
    /** @type {?} */


    var MINUTES_IN_HOUR = 60;
    /**
     * @param {?} movedY
     * @param {?} hourSegments
     * @param {?} hourSegmentHeight
     * @param {?} eventSnapSize
     * @return {?}
     */

    function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
      /** @type {?} */
      var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
      /** @type {?} */

      var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
      return draggedInPixelsSnapSize * pixelAmountInMinutes;
    }
    /**
     * @param {?} hourSegments
     * @param {?} hourSegmentHeight
     * @return {?}
     */


    function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
      return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight) * hourSegmentHeight;
    }
    /**
     * @param {?} dateAdapter
     * @param {?} event
     * @param {?} minimumMinutes
     * @return {?}
     */


    function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
      if (event.end) {
        return event.end;
      } else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
      }
    }
    /**
     * @param {?} dateAdapter
     * @param {?} date
     * @param {?} days
     * @param {?} excluded
     * @return {?}
     */


    function addDaysWithExclusions(dateAdapter, date, days, excluded) {
      /** @type {?} */
      var daysCounter = 0;
      /** @type {?} */

      var daysToAdd = 0;
      /** @type {?} */

      var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
      /** @type {?} */

      var result = date;

      while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        /** @type {?} */

        var day = dateAdapter.getDay(result);

        if (excluded.indexOf(day) === -1) {
          daysToAdd++;
        }

        daysCounter++;
      }

      return result;
    }
    /**
     * @param {?} newStart
     * @param {?} newEnd
     * @param {?} period
     * @return {?}
     */


    function isDraggedWithinPeriod(newStart, newEnd, period) {
      /** @type {?} */
      var end = newEnd || newStart;
      return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
    }
    /**
     * @param {?} dropEvent
     * @param {?} date
     * @param {?} allDay
     * @param {?} calendarId
     * @return {?}
     */


    function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
      return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
    }
    /**
     * @param {?} dateAdapter
     * @param {?} viewDate
     * @param {?} weekStartsOn
     * @param {?=} excluded
     * @param {?=} daysInWeek
     * @return {?}
     */


    function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
      var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;

      /** @type {?} */
      var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      });

      if (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1) {
        viewStart = dateAdapter.subDays(addDaysWithExclusions(dateAdapter, viewStart, 1, excluded), 1);
      }

      if (daysInWeek) {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return {
          viewStart: viewStart,
          viewEnd: viewEnd
        };
      } else {
        /** @type {?} */
        var _viewEnd = dateAdapter.endOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        });

        if (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1) {
          _viewEnd = dateAdapter.addDays(addDaysWithExclusions(dateAdapter, _viewEnd, -1, excluded), 1);
        }

        return {
          viewStart: viewStart,
          viewEnd: _viewEnd
        };
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinThreshold(_ref) {
      var x = _ref.x,
          y = _ref.y;

      /** @type {?} */
      var DRAG_THRESHOLD = 1;
      return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Change the view date to the previous view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarPreviousView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Previous
     * </button>
     * ```
     */


    var CalendarPreviousViewDirective = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarPreviousViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarPreviousViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarPreviousViewDirective, [{
        key: "onClick",
        value: function onClick() {
          /** @type {?} */
          var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarPreviousViewDirective;
    }();

    CalendarPreviousViewDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarPreviousView]'
      }]
    }];
    /** @nocollapse */

    CalendarPreviousViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarPreviousViewDirective.propDecorators = {
      view: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysInWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Change the view date to the next view. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarNextView
     *  [(viewDate)]="viewDate"
     *  [view]="view">
     *  Next
     * </button>
     * ```
     */

    var CalendarNextViewDirective = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarNextViewDirective(dateAdapter) {
        _classCallCheck(this, CalendarNextViewDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */

        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarNextViewDirective, [{
        key: "onClick",
        value: function onClick() {
          /** @type {?} */
          var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
          }[this.view];

          if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
          } else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
          } else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
          }
        }
      }]);

      return CalendarNextViewDirective;
    }();

    CalendarNextViewDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarNextView]'
      }]
    }];
    /** @nocollapse */

    CalendarNextViewDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarNextViewDirective.propDecorators = {
      view: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysInWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Change the view date to the current day. For example:
     *
     * ```typescript
     * <button
     *  mwlCalendarToday
     *  [(viewDate)]="viewDate">
     *  Today
     * </button>
     * ```
     */

    var CalendarTodayDirective = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarTodayDirective(dateAdapter) {
        _classCallCheck(this, CalendarTodayDirective);

        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */

        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarTodayDirective, [{
        key: "onClick",
        value: function onClick() {
          this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
        }
      }]);

      return CalendarTodayDirective;
    }();

    CalendarTodayDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlCalendarToday]'
      }]
    }];
    /** @nocollapse */

    CalendarTodayDirective.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };

    CalendarTodayDirective.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      viewDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
     */

    var CalendarAngularDateFormatter = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarAngularDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarAngularDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarAngularDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref2) {
          var date = _ref2.date,
              locale = _ref2.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The month view cell day number
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref3) {
          var date = _ref3.date,
              locale = _ref3.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'd', locale);
        }
        /**
         * The month view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref4) {
          var date = _ref4.date,
              locale = _ref4.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'LLLL y', locale);
        }
        /**
         * The week view header week day labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref5) {
          var date = _ref5.date,
              locale = _ref5.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE', locale);
        }
        /**
         * The week view sub header day and month labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref6) {
          var date = _ref6.date,
              locale = _ref6.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'MMM d', locale);
        }
        /**
         * The week view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref7) {
          var date = _ref7.date,
              locale = _ref7.locale,
              weekStartsOn = _ref7.weekStartsOn,
              excludeDays = _ref7.excludeDays,
              daysInWeek = _ref7.daysInWeek;

          var _getWeekViewPeriod = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod.viewStart,
              viewEnd = _getWeekViewPeriod.viewEnd;
          /** @type {?} */


          var format =
          /**
          * @param {?} dateToFormat
          * @param {?} showYear
          * @return {?}
          */
          function format(dateToFormat, showYear) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref8) {
          var date = _ref8.date,
              locale = _ref8.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The time formatting down the left hand side of the day view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref9) {
          var date = _ref9.date,
              locale = _ref9.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'h a', locale);
        }
        /**
         * The day view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref10) {
          var date = _ref10.date,
              locale = _ref10.locale;
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
        }
      }]);

      return CalendarAngularDateFormatter;
    }();

    CalendarAngularDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarAngularDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
     *
     * If you wish, you may override any of the defaults via angulars DI. For example:
     *
     * ```typescript
     * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
     * import { formatDate } from '\@angular/common';
     *
     * class CustomDateFormatter extends CalendarDateFormatter {
     *
     *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
     *     return formatDate(date, 'EEE', locale); // use short week days
     *   }
     *
     * }
     *
     * // in your component that uses the calendar
     * providers: [{
     *   provide: CalendarDateFormatter,
     *   useClass: CustomDateFormatter
     * }]
     * ```
     */


    var CalendarDateFormatter = /*#__PURE__*/function (_CalendarAngularDateF) {
      _inherits(CalendarDateFormatter, _CalendarAngularDateF);

      var _super = _createSuper(CalendarDateFormatter);

      function CalendarDateFormatter() {
        _classCallCheck(this, CalendarDateFormatter);

        return _super.apply(this, arguments);
      }

      return CalendarDateFormatter;
    }(CalendarAngularDateFormatter);

    CalendarDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This pipe is primarily for rendering the current view title. Example usage:
     * ```typescript
     * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
     * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
     * ```
     */

    var CalendarDatePipe = /*#__PURE__*/function () {
      /**
       * @param {?} dateFormatter
       * @param {?} locale
       */
      function CalendarDatePipe(dateFormatter, locale) {
        _classCallCheck(this, CalendarDatePipe);

        this.dateFormatter = dateFormatter;
        this.locale = locale;
      }
      /**
       * @param {?} date
       * @param {?} method
       * @param {?=} locale
       * @param {?=} weekStartsOn
       * @param {?=} excludeDays
       * @param {?=} daysInWeek
       * @return {?}
       */


      _createClass(CalendarDatePipe, [{
        key: "transform",
        value: function transform(date, method) {
          var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
          var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

          if (typeof this.dateFormatter[method] === 'undefined') {
            /** @type {?} */
            var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(
            /**
            * @param {?} iMethod
            * @return {?}
            */
            function (iMethod) {
              return iMethod !== 'constructor';
            });
            throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
          }

          return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
          });
        }
      }]);

      return CalendarDatePipe;
    }();

    CalendarDatePipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'calendarDate'
      }]
    }];
    /** @nocollapse */

    CalendarDatePipe.ctorParameters = function () {
      return [{
        type: CalendarDateFormatter
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
     *
     * ```typescript
     * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
     *
     * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
     *
     *   month(event: CalendarEvent): string {
     *     return `Custom prefix: ${event.title}`;
     *   }
     *
     * }
     *
     * // in your component
     * providers: [{
     *  provide: CalendarEventTitleFormatter,
     *  useClass: CustomEventTitleFormatter
     * }]
     * ```
     */


    var CalendarEventTitleFormatter = /*#__PURE__*/function () {
      function CalendarEventTitleFormatter() {
        _classCallCheck(this, CalendarEventTitleFormatter);
      }

      _createClass(CalendarEventTitleFormatter, [{
        key: "month",

        /**
         * The month view event title.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */
        value: function month(event, title) {
          return event.title;
        }
        /**
         * The month view event tooltip. Return a falsey value from this to disable the tooltip.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "monthTooltip",
        value: function monthTooltip(event, title) {
          return event.title;
        }
        /**
         * The week view event title.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "week",
        value: function week(event, title) {
          return event.title;
        }
        /**
         * The week view event tooltip. Return a falsey value from this to disable the tooltip.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "weekTooltip",
        value: function weekTooltip(event, title) {
          return event.title;
        }
        /**
         * The day view event title.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "day",
        value: function day(event, title) {
          return event.title;
        }
        /**
         * The day view event tooltip. Return a falsey value from this to disable the tooltip.
         * @param {?} event
         * @param {?} title
         * @return {?}
         */

      }, {
        key: "dayTooltip",
        value: function dayTooltip(event, title) {
          return event.title;
        }
      }]);

      return CalendarEventTitleFormatter;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarEventTitlePipe = /*#__PURE__*/function () {
      /**
       * @param {?} calendarEventTitle
       */
      function CalendarEventTitlePipe(calendarEventTitle) {
        _classCallCheck(this, CalendarEventTitlePipe);

        this.calendarEventTitle = calendarEventTitle;
      }
      /**
       * @param {?} title
       * @param {?} titleType
       * @param {?} event
       * @return {?}
       */


      _createClass(CalendarEventTitlePipe, [{
        key: "transform",
        value: function transform(title, titleType, event) {
          return this.calendarEventTitle[titleType](event, title);
        }
      }]);

      return CalendarEventTitlePipe;
    }();

    CalendarEventTitlePipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'calendarEventTitle'
      }]
    }];
    /** @nocollapse */

    CalendarEventTitlePipe.ctorParameters = function () {
      return [{
        type: CalendarEventTitleFormatter
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var isSupported = typeof window !== 'undefined' && typeof window['requestIdleCallback'] !== 'undefined';
    /**
     * @return {?}
     */

    function requestIdleCallbackObservable() {
      return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](
      /**
      * @param {?} observer
      * @return {?}
      */
      function (observer) {
        /* istanbul ignore else  */
        if (isSupported) {
          /** @type {?} */
          var id = window['requestIdleCallback'](
          /**
          * @return {?}
          */
          function () {
            observer.next();
            observer.complete();
          });
          return (
            /**
            * @return {?}
            */
            function () {
              window['cancelIdleCallback'](id);
            }
          );
        } else {
          /** @type {?} */
          var timeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            observer.next();
            observer.complete();
          }, 1);
          return (
            /**
            * @return {?}
            */
            function () {
              clearTimeout(timeoutId);
            }
          );
        }
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var clickElements = new Set();
    /** @type {?} */

    var eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined' ? 'tap' : 'click';

    var ClickDirective = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elm
       * @param {?} document
       * @param {?} zone
       */
      function ClickDirective(renderer, elm, document, zone) {
        _classCallCheck(this, ClickDirective);

        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.zone = zone;
        this.clickListenerDisabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(ClickDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (!this.clickListenerDisabled) {
            this.renderer.setAttribute(this.elm.nativeElement, 'data-calendar-clickable', 'true');
            clickElements.add(this.elm.nativeElement); // issue #942 - lazily initialise all click handlers after initial render as hammerjs is slow

            requestIdleCallbackObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(this.listen()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // prevent child click events from firing on parent elements that also have click events

              /** @type {?} */
              var nearestClickableParent =
              /** @type {?} */
              event.target;

              while (!clickElements.has(nearestClickableParent) && nearestClickableParent !== _this4.document.body) {
                nearestClickableParent = nearestClickableParent.parentElement;
              }
              /** @type {?} */


              var isThisClickableElement = _this4.elm.nativeElement === nearestClickableParent;

              if (isThisClickableElement) {
                _this4.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this4.click.next(event);
                });
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          clickElements.delete(this.elm.nativeElement);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "listen",
        value: function listen() {
          var _this5 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            return _this5.renderer.listen(_this5.elm.nativeElement, eventName,
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              observer.next(event);
            });
          });
        }
      }]);

      return ClickDirective;
    }();

    ClickDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mwlClick]'
      }]
    }];
    /** @nocollapse */

    ClickDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    ClickDirective.propDecorators = {
      clickListenerDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      click: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['mwlClick']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarUtils = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarUtils(dateAdapter) {
        _classCallCheck(this, CalendarUtils);

        this.dateAdapter = dateAdapter;
      }
      /**
       * @param {?} args
       * @return {?}
       */


      _createClass(CalendarUtils, [{
        key: "getMonthView",
        value: function getMonthView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getMonthView"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getWeekViewHeader",
        value: function getWeekViewHeader(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getWeekViewHeader"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getWeekView",
        value: function getWeekView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getWeekView"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getDayView",
        value: function getDayView(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getDayView"])(this.dateAdapter, args);
        }
        /**
         * @param {?} args
         * @return {?}
         */

      }, {
        key: "getDayViewHourGrid",
        value: function getDayViewHourGrid(args) {
          return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_5__["getDayViewHourGrid"])(this.dateAdapter, args);
        }
      }]);

      return CalendarUtils;
    }();

    CalendarUtils.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarUtils.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Moment');
    /**
     * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
     *
     * ```typescript
     * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
     * import moment from 'moment';
     *
     * // in your component
     * provide: [{
     *   provide: MOMENT, useValue: moment
     * }, {
     *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
     * }]
     *
     * ```
     */

    var CalendarMomentDateFormatter = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} moment
       * @param {?} dateAdapter
       */
      function CalendarMomentDateFormatter(moment, dateAdapter) {
        _classCallCheck(this, CalendarMomentDateFormatter);

        this.moment = moment;
        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarMomentDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref11) {
          var date = _ref11.date,
              locale = _ref11.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The month view cell day number
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref12) {
          var date = _ref12.date,
              locale = _ref12.locale;
          return this.moment(date).locale(locale).format('D');
        }
        /**
         * The month view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref13) {
          var date = _ref13.date,
              locale = _ref13.locale;
          return this.moment(date).locale(locale).format('MMMM YYYY');
        }
        /**
         * The week view header week day labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref14) {
          var date = _ref14.date,
              locale = _ref14.locale;
          return this.moment(date).locale(locale).format('dddd');
        }
        /**
         * The week view sub header day and month labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref15) {
          var date = _ref15.date,
              locale = _ref15.locale;
          return this.moment(date).locale(locale).format('MMM D');
        }
        /**
         * The week view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref16) {
          var _this6 = this;

          var date = _ref16.date,
              locale = _ref16.locale,
              weekStartsOn = _ref16.weekStartsOn,
              excludeDays = _ref16.excludeDays,
              daysInWeek = _ref16.daysInWeek;

          var _getWeekViewPeriod2 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod2.viewStart,
              viewEnd = _getWeekViewPeriod2.viewEnd;
          /** @type {?} */


          var format =
          /**
          * @param {?} dateToFormat
          * @param {?} showYear
          * @return {?}
          */
          function format(dateToFormat, showYear) {
            return _this6.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref17) {
          var date = _ref17.date,
              locale = _ref17.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The time formatting down the left hand side of the day view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref18) {
          var date = _ref18.date,
              locale = _ref18.locale;
          return this.moment(date).locale(locale).format('ha');
        }
        /**
         * The day view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref19) {
          var date = _ref19.date,
              locale = _ref19.locale;
          return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
        }
      }]);

      return CalendarMomentDateFormatter;
    }();

    CalendarMomentDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarMomentDateFormatter.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MOMENT]
        }]
      }, {
        type: DateAdapter
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
     *
     * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
     */


    var CalendarNativeDateFormatter = /*#__PURE__*/function () {
      /**
       * @param {?} dateAdapter
       */
      function CalendarNativeDateFormatter(dateAdapter) {
        _classCallCheck(this, CalendarNativeDateFormatter);

        this.dateAdapter = dateAdapter;
      }
      /**
       * The month view header week day labels
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarNativeDateFormatter, [{
        key: "monthViewColumnHeader",
        value: function monthViewColumnHeader(_ref20) {
          var date = _ref20.date,
              locale = _ref20.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The month view cell day number
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewDayNumber",
        value: function monthViewDayNumber(_ref21) {
          var date = _ref21.date,
              locale = _ref21.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric'
          }).format(date);
        }
        /**
         * The month view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "monthViewTitle",
        value: function monthViewTitle(_ref22) {
          var date = _ref22.date,
              locale = _ref22.locale;
          return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
          }).format(date);
        }
        /**
         * The week view header week day labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnHeader",
        value: function weekViewColumnHeader(_ref23) {
          var date = _ref23.date,
              locale = _ref23.locale;
          return new Intl.DateTimeFormat(locale, {
            weekday: 'long'
          }).format(date);
        }
        /**
         * The week view sub header day and month labels
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewColumnSubHeader",
        value: function weekViewColumnSubHeader(_ref24) {
          var date = _ref24.date,
              locale = _ref24.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
          }).format(date);
        }
        /**
         * The week view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewTitle",
        value: function weekViewTitle(_ref25) {
          var date = _ref25.date,
              locale = _ref25.locale,
              weekStartsOn = _ref25.weekStartsOn,
              excludeDays = _ref25.excludeDays,
              daysInWeek = _ref25.daysInWeek;

          var _getWeekViewPeriod3 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
              viewStart = _getWeekViewPeriod3.viewStart,
              viewEnd = _getWeekViewPeriod3.viewEnd;
          /** @type {?} */


          var format =
          /**
          * @param {?} dateToFormat
          * @param {?} showYear
          * @return {?}
          */
          function format(dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short',
              year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
          };

          return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
        }
        /**
         * The time formatting down the left hand side of the week view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "weekViewHour",
        value: function weekViewHour(_ref26) {
          var date = _ref26.date,
              locale = _ref26.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The time formatting down the left hand side of the day view
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewHour",
        value: function dayViewHour(_ref27) {
          var date = _ref27.date,
              locale = _ref27.locale;
          return new Intl.DateTimeFormat(locale, {
            hour: 'numeric'
          }).format(date);
        }
        /**
         * The day view title
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "dayViewTitle",
        value: function dayViewTitle(_ref28) {
          var date = _ref28.date,
              locale = _ref28.locale;
          return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
          }).format(date);
        }
      }]);

      return CalendarNativeDateFormatter;
    }();

    CalendarNativeDateFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarNativeDateFormatter.ctorParameters = function () {
      return [{
        type: DateAdapter
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {string} */


    var CalendarEventTimesChangedEventType = {
      Drag: 'drag',
      Drop: 'drop',
      Resize: 'resize'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
     *
     * ```typescript
     * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
     *
     * \@NgModule({
     *   imports: [
     *     CalendarCommonModule.forRoot(),
     *     CalendarMonthModule
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */

    var CalendarCommonModule = /*#__PURE__*/function () {
      function CalendarCommonModule() {
        _classCallCheck(this, CalendarCommonModule);
      }

      _createClass(CalendarCommonModule, null, [{
        key: "forRoot",

        /**
         * @param {?} dateAdapter
         * @param {?=} config
         * @return {?}
         */
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarCommonModule,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils]
          };
        }
      }]);

      return CalendarCommonModule;
    }();

    CalendarCommonModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, ClickDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, ClickDirective],
        entryComponents: [CalendarTooltipWindowComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shows all events on a given month. Example usage:
     *
     * ```typescript
     * <mwl-calendar-month-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-month-view>
     * ```
     */

    var CalendarMonthViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} cdr
       * @param {?} utils
       * @param {?} locale
       * @param {?} dateAdapter
       */
      function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this7 = this;

        _classCallCheck(this, CalendarMonthViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */

        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */

        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.trackByRowOffset =
        /**
        * @param {?} index
        * @param {?} offset
        * @return {?}
        */
        function (index, offset) {
          return _this7.view.days.slice(offset, _this7.view.totalDaysVisibleInWeek).map(
          /**
          * @param {?} day
          * @return {?}
          */
          function (day) {
            return day.date.toISOString();
          }).join('-');
        };
        /**
         * @hidden
         */


        this.trackByDate =
        /**
        * @param {?} index
        * @param {?} day
        * @return {?}
        */
        function (index, day) {
          return day.date.toISOString();
        };

        this.locale = locale;
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarMonthViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this8.refreshAll();

              _this8.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
          /** @type {?} */

          var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }

          if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
            this.checkActiveDayIsOpen();
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         * @param {?} event
         * @param {?} isHighlighted
         * @return {?}
         */

      }, {
        key: "toggleDayHighlight",
        value: function toggleDayHighlight(event, isHighlighted) {
          this.view.days.forEach(
          /**
          * @param {?} day
          * @return {?}
          */
          function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
              day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
            } else {
              delete day.backgroundColor;
            }
          });
        }
        /**
         * @hidden
         * @param {?} droppedOn
         * @param {?} event
         * @param {?=} draggedFrom
         * @return {?}
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(droppedOn, event, draggedFrom) {
          if (droppedOn !== draggedFrom) {
            /** @type {?} */
            var year = this.dateAdapter.getYear(droppedOn.date);
            /** @type {?} */

            var month = this.dateAdapter.getMonth(droppedOn.date);
            /** @type {?} */

            var date = this.dateAdapter.getDate(droppedOn.date);
            /** @type {?} */

            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            /** @type {?} */

            var newEnd;

            if (event.end) {
              /** @type {?} */
              var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
              newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }

            this.eventTimesChanged.emit({
              event: event,
              newStart: newStart,
              newEnd: newEnd,
              day: droppedOn,
              type: CalendarEventTimesChangedEventType.Drop
            });
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "checkActiveDayIsOpen",
        value: function checkActiveDayIsOpen() {
          var _this9 = this;

          if (this.activeDayIsOpen === true) {
            /** @type {?} */
            var activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find(
            /**
            * @param {?} day
            * @return {?}
            */
            function (day) {
              return _this9.dateAdapter.isSameDay(day.date, activeDay);
            });
            /** @type {?} */

            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
          } else {
            this.openRowIndex = null;
            this.openDay = null;
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
          this.checkActiveDayIsOpen();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
              header: this.columnHeaders,
              body: this.view.days,
              period: this.view.period
            });
          }
        }
      }]);

      return CalendarMonthViewComponent;
    }();

    CalendarMonthViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-month-view',
        template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n        >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"eventClicked.emit({ event: $event.event })\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    CalendarMonthViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarMonthViewComponent.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activeDayIsOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activeDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      refresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekStartsOn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cellTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openDayEventsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekendDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      beforeViewRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      dayClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      columnHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventTimesChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
      _classCallCheck(this, CalendarMonthViewHeaderComponent);

      this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarMonthViewHeaderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-month-view-header',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"columnHeaderClicked.emit(day.day)\"\n          [ngClass]=\"day.cssClass\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarMonthViewHeaderComponent.propDecorators = {
      days: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      columnHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
      _classCallCheck(this, CalendarMonthCellComponent);

      this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarMonthCellComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-month-cell',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n          day.badgeTotal\n        }}</span>\n        <span class=\"cal-day-number\">{{\n          day.date | calendarDate: 'monthViewDayNumber':locale\n        }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
        host: {
          class: 'cal-cell cal-day-cell',
          '[class.cal-past]': 'day.isPast',
          '[class.cal-today]': 'day.isToday',
          '[class.cal-future]': 'day.isFuture',
          '[class.cal-weekend]': 'day.isWeekend',
          '[class.cal-in-month]': 'day.inMonth',
          '[class.cal-out-month]': '!day.inMonth',
          '[class.cal-has-events]': 'day.events.length > 0',
          '[class.cal-open]': 'day === openDay',
          '[class.cal-event-highlight]': '!!day.backgroundColor'
        }
      }]
    }];
    CalendarMonthCellComponent.propDecorators = {
      day: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      highlightDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      unhighlightDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('collapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
      height: 0,
      overflow: 'hidden',
      'padding-top': 0,
      'padding-bottom': 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
      height: '*',
      overflow: 'hidden',
      'padding-top': '*',
      'padding-bottom': '*'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('150ms ease-in'))]);

    var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
      _classCallCheck(this, CalendarOpenDayEventsComponent);

      this.isOpen = false;
      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByEventId = trackByEventId;
      this.validateDrag = isWithinThreshold;
    };

    CalendarOpenDayEventsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-open-day-events',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"eventClicked.emit({ event: event })\"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
        animations: [collapseAnimation]
      }]
    }];
    CalendarOpenDayEventsComponent.propDecorators = {
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarMonthModule = function CalendarMonthModule() {
      _classCallCheck(this, CalendarMonthModule);
    };

    CalendarMonthModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
        exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarDragHelper = /*#__PURE__*/function () {
      /**
       * @param {?} dragContainerElement
       * @param {?} draggableElement
       */
      function CalendarDragHelper(dragContainerElement, draggableElement) {
        _classCallCheck(this, CalendarDragHelper);

        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarDragHelper, [{
        key: "validateDrag",
        value: function validateDrag(_ref29) {
          var x = _ref29.x,
              y = _ref29.y,
              snapDraggedEvents = _ref29.snapDraggedEvents,
              dragAlreadyMoved = _ref29.dragAlreadyMoved,
              transform = _ref29.transform;

          if (snapDraggedEvents) {
            /** @type {?} */
            var newRect = Object.assign({}, this.startPosition, {
              left: this.startPosition.left + transform.x,
              right: this.startPosition.right + transform.x,
              top: this.startPosition.top + transform.y,
              bottom: this.startPosition.bottom + transform.y
            });
            return (isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved) && isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
          } else {
            return isWithinThreshold({
              x: x,
              y: y
            }) || dragAlreadyMoved;
          }
        }
      }]);

      return CalendarDragHelper;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CalendarResizeHelper = /*#__PURE__*/function () {
      /**
       * @param {?} resizeContainerElement
       * @param {?=} minWidth
       */
      function CalendarResizeHelper(resizeContainerElement, minWidth) {
        _classCallCheck(this, CalendarResizeHelper);

        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(CalendarResizeHelper, [{
        key: "validateResize",
        value: function validateResize(_ref30) {
          var rectangle = _ref30.rectangle;

          if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
          }

          return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
        }
      }]);

      return CalendarResizeHelper;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shows all events on a given week. Example usage:
     *
     * ```typescript
     * <mwl-calendar-week-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-week-view>
     * ```
     */


    var CalendarWeekViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} cdr
       * @param {?} utils
       * @param {?} locale
       * @param {?} dateAdapter
       */
      function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        _classCallCheck(this, CalendarWeekViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */

        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */

        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */

        this.timeEventResizes = new Map();
        /**
         * @hidden
         */

        this.eventDragEnter = 0;
        /**
         * @hidden
         */

        this.dragActive = false;
        /**
         * @hidden
         */

        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */

        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */

        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */

        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */

        this.trackByHour = trackByHour;
        /**
         * @hidden
         */

        this.trackByDayOrWeekEvent = trackByDayOrWeekEvent;
        /**
         * @hidden
         */

        this.trackByHourColumn =
        /**
        * @param {?} index
        * @param {?} column
        * @return {?}
        */
        function (index, column) {
          return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        /**
         * @hidden
         */


        this.trackById =
        /**
        * @param {?} index
        * @param {?} row
        * @return {?}
        */
        function (index, row) {
          return row.id;
        };

        this.locale = locale;
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarWeekViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this10.refreshAll();

              _this10.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
          /** @type {?} */

          var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

          if (refreshHeader) {
            this.refreshHeader();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshBody) {
            this.refreshBody();
          }

          if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @protected
         * @param {?} eventsContainer
         * @param {?=} minWidth
         * @return {?}
         */

      }, {
        key: "resizeStarted",
        value: function resizeStarted(eventsContainer, minWidth) {
          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          /** @type {?} */

          var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

          this.validateResize =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref31) {
            var rectangle = _ref31.rectangle;
            return resizeHelper.validateResize({
              rectangle: rectangle
            });
          };

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         * @param {?} eventsContainer
         * @param {?} timeEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "timeEventResizeStarted",
        value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          this.resizeStarted(eventsContainer);
        }
        /**
         * @hidden
         * @param {?} timeEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "timeEventResizing",
        value: function timeEventResizing(timeEvent, resizeEvent) {
          var _this11 = this;

          this.timeEventResizes.set(timeEvent.event, resizeEvent);
          /** @type {?} */

          var adjustedEvents = new Map();
          /** @type {?} */

          var tempEvents = _toConsumableArray(this.events);

          this.timeEventResizes.forEach(
          /**
          * @param {?} lastResizeEvent
          * @param {?} event
          * @return {?}
          */
          function (lastResizeEvent, event) {
            /** @type {?} */
            var newEventDates = _this11.getTimeEventResizedDates(event, lastResizeEvent);
            /** @type {?} */


            var adjustedEvent = Object.assign({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            /** @type {?} */

            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
          });
          this.restoreOriginalEvents(tempEvents, adjustedEvents);
        }
        /**
         * @hidden
         * @param {?} timeEvent
         * @return {?}
         */

      }, {
        key: "timeEventResizeEnded",
        value: function timeEventResizeEnded(timeEvent) {
          this.view = this.getWeekView(this.events);
          /** @type {?} */

          var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

          if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            /** @type {?} */

            var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
              newStart: newEventDates.start,
              newEnd: newEventDates.end,
              event: timeEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
          }
        }
        /**
         * @hidden
         * @param {?} allDayEventsContainer
         * @param {?} allDayEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "allDayEventResizeStarted",
        value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
          this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
          });
          this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
        }
        /**
         * @hidden
         * @param {?} allDayEvent
         * @param {?} resizeEvent
         * @param {?} dayWidth
         * @return {?}
         */

      }, {
        key: "allDayEventResizing",
        value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
          /** @type {?} */
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

            allDayEvent.span = currentResize.originalSpan + _diff;
          }
        }
        /**
         * @hidden
         * @param {?} allDayEvent
         * @return {?}
         */

      }, {
        key: "allDayEventResizeEnded",
        value: function allDayEventResizeEnded(allDayEvent) {
          /** @type {?} */
          var currentResize = this.allDayEventResizes.get(allDayEvent);

          if (currentResize) {
            /** @type {?} */
            var allDayEventResizingBeforeStart = currentResize.edge === 'left';
            /** @type {?} */

            var daysDiff;

            if (allDayEventResizingBeforeStart) {
              daysDiff = allDayEvent.offset - currentResize.originalOffset;
            } else {
              daysDiff = allDayEvent.span - currentResize.originalSpan;
            }

            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            /** @type {?} */

            var newStart = allDayEvent.event.start;
            /** @type {?} */

            var newEnd = allDayEvent.event.end || allDayEvent.event.start;

            if (allDayEventResizingBeforeStart) {
              newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            } else {
              newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }

            this.eventTimesChanged.emit({
              newStart: newStart,
              newEnd: newEnd,
              event: allDayEvent.event,
              type: CalendarEventTimesChangedEventType.Resize
            });
            this.allDayEventResizes.delete(allDayEvent);
          }
        }
        /**
         * @hidden
         * @param {?} eventRowContainer
         * @return {?}
         */

      }, {
        key: "getDayColumnWidth",
        value: function getDayColumnWidth(eventRowContainer) {
          return Math.floor(eventRowContainer.offsetWidth / this.days.length);
        }
        /**
         * @hidden
         * @param {?} dropEvent
         * @param {?} date
         * @param {?} allDay
         * @return {?}
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(dropEvent, date, allDay) {
          if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
              type: CalendarEventTimesChangedEventType.Drop,
              event: dropEvent.dropData.event,
              newStart: date,
              allDay: allDay
            });
          }
        }
        /**
         * @hidden
         * @param {?} eventsContainer
         * @param {?} event
         * @param {?=} dayEvent
         * @return {?}
         */

      }, {
        key: "dragStarted",
        value: function dragStarted(eventsContainer, event, dayEvent) {
          var _this12 = this;

          this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
          /** @type {?} */

          var dragHelper = new CalendarDragHelper(eventsContainer, event);

          this.validateDrag =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref32) {
            var x = _ref32.x,
                y = _ref32.y,
                transform = _ref32.transform;
            return _this12.allDayEventResizes.size === 0 && _this12.timeEventResizes.size === 0 && dragHelper.validateDrag({
              x: x,
              y: y,
              snapDraggedEvents: _this12.snapDraggedEvents,
              dragAlreadyMoved: _this12.dragAlreadyMoved,
              transform: transform
            });
          };

          this.dragActive = true;
          this.dragAlreadyMoved = false;
          this.eventDragEnter = 0;

          if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(
            /**
            * @param {?} column
            * @return {?}
            */
            function (column) {
              /** @type {?} */
              var linkedEvent = column.events.find(
              /**
              * @param {?} columnEvent
              * @return {?}
              */
              function (columnEvent) {
                return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
              }); // hide any linked events while dragging

              if (linkedEvent) {
                linkedEvent.width = 0;
                linkedEvent.height = 0;
              }
            });
          }

          this.cdr.markForCheck();
        }
        /**
         * @hidden
         * @param {?} dayEvent
         * @param {?} dragEvent
         * @return {?}
         */

      }, {
        key: "dragMove",
        value: function dragMove(dayEvent, dragEvent) {
          if (this.snapDraggedEvents) {
            /** @type {?} */
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            /** @type {?} */

            var originalEvent = dayEvent.event;
            /** @type {?} */

            var adjustedEvent = Object.assign({}, originalEvent, newEventTimes);
            /** @type {?} */

            var tempEvents = this.events.map(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              if (event === originalEvent) {
                return adjustedEvent;
              }

              return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]));
          }

          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "allDayEventDragMove",
        value: function allDayEventDragMove() {
          this.dragAlreadyMoved = true;
        }
        /**
         * @hidden
         * @param {?} weekEvent
         * @param {?} dragEndEvent
         * @param {?} dayWidth
         * @param {?=} useY
         * @return {?}
         */

      }, {
        key: "dragEnded",
        value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
          var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.view = this.getWeekView(this.events);
          this.dragActive = false;

          var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
              start = _this$getDragMovedEve.start,
              end = _this$getDragMovedEve.end;

          if (this.eventDragEnter > 0 && isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
              newStart: start,
              newEnd: end,
              event: weekEvent.event,
              type: CalendarEventTimesChangedEventType.Drag,
              allDay: !useY
            });
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshHeader",
        value: function refreshHeader() {
          this.days = this.utils.getWeekViewHeader(Object.assign({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshBody",
        value: function refreshBody() {
          this.view = this.getWeekView(this.events);
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHeader();
          this.refreshBody();
          this.emitBeforeViewRender();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({
              header: this.days
            }, this.view));
          }
        }
        /**
         * @protected
         * @param {?} events
         * @return {?}
         */

      }, {
        key: "getWeekView",
        value: function getWeekView(events) {
          return this.utils.getWeekView(Object.assign({
            events: events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            },
            segmentHeight: this.hourSegmentHeight,
            weekendDays: this.weekendDays
          }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        }
        /**
         * @protected
         * @param {?} weekEvent
         * @param {?} dragEndEvent
         * @param {?} dayWidth
         * @param {?} useY
         * @return {?}
         */

      }, {
        key: "getDragMovedEventTimes",
        value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
          /** @type {?} */
          var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
          /** @type {?} */

          var minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
          /** @type {?} */

          var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
          /** @type {?} */

          var end;

          if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
          }

          return {
            start: start,
            end: end
          };
        }
        /**
         * @protected
         * @param {?} tempEvents
         * @param {?} adjustedEvents
         * @return {?}
         */

      }, {
        key: "restoreOriginalEvents",
        value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
          /** @type {?} */
          var previousView = this.view;
          this.view = this.getWeekView(tempEvents);
          /** @type {?} */

          var adjustedEventsArray = tempEvents.filter(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return adjustedEvents.has(event);
          });
          this.view.hourColumns.forEach(
          /**
          * @param {?} column
          * @param {?} columnIndex
          * @return {?}
          */
          function (column, columnIndex) {
            previousView.hourColumns[columnIndex].hours.forEach(
            /**
            * @param {?} hour
            * @param {?} hourIndex
            * @return {?}
            */
            function (hour, hourIndex) {
              hour.segments.forEach(
              /**
              * @param {?} segment
              * @param {?} segmentIndex
              * @return {?}
              */
              function (segment, segmentIndex) {
                column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
              });
            });
            adjustedEventsArray.forEach(
            /**
            * @param {?} adjustedEvent
            * @return {?}
            */
            function (adjustedEvent) {
              /** @type {?} */
              var originalEvent = adjustedEvents.get(adjustedEvent);
              /** @type {?} */

              var existingColumnEvent = column.events.find(
              /**
              * @param {?} columnEvent
              * @return {?}
              */
              function (columnEvent) {
                return columnEvent.event === adjustedEvent;
              });

              if (existingColumnEvent) {
                // restore the original event so trackBy kicks in and the dom isn't changed
                existingColumnEvent.event = originalEvent;
              } else {
                // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                column.events.push({
                  event: originalEvent,
                  left: 0,
                  top: 0,
                  height: 0,
                  width: 0,
                  startsBeforeDay: false,
                  endsAfterDay: false
                });
              }
            });
          });
          adjustedEvents.clear();
        }
        /**
         * @protected
         * @param {?} calendarEvent
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "getTimeEventResizedDates",
        value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
          /** @type {?} */
          var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
          /** @type {?} */

          var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
          };
          var eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__rest"])(calendarEvent, ["end"]);
          /** @type {?} */

          var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
          };

          if (typeof resizeEvent.edges.left !== 'undefined') {
            /** @type {?} */
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            /** @type {?} */

            var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

            if (newStart < smallestResizes.start) {
              newEventDates.start = newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.right !== 'undefined') {
            /** @type {?} */
            var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            /** @type {?} */


            var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

            if (newEnd > smallestResizes.end) {
              newEventDates.end = newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          if (typeof resizeEvent.edges.top !== 'undefined') {
            /** @type {?} */
            var minutesMoved = getMinutesMoved(
            /** @type {?} */
            resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */

            var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

            if (_newStart < smallestResizes.start) {
              newEventDates.start = _newStart;
            } else {
              newEventDates.start = smallestResizes.start;
            }
          } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            /** @type {?} */
            var _minutesMoved = getMinutesMoved(
            /** @type {?} */
            resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */


            var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

            if (_newEnd > smallestResizes.end) {
              newEventDates.end = _newEnd;
            } else {
              newEventDates.end = smallestResizes.end;
            }
          }

          return newEventDates;
        }
      }]);

      return CalendarWeekViewComponent;
    }();

    CalendarWeekViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view',
        template: "\n    <div class=\"cal-week-view\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByDayOrWeekEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: allDayEvent.event })\"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\"\n      >\n        <div class=\"cal-time-label-column\" *ngIf=\"view.hourColumns.length > 0\">\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <div\n              *ngFor=\"\n                let timeEvent of column.events;\n                trackBy: trackByDayOrWeekEvent\n              \"\n              #event\n              class=\"cal-event-container\"\n              [class.cal-draggable]=\"\n                timeEvent.event.draggable && timeEventResizes.size === 0\n              \"\n              [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n              [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n              [ngClass]=\"timeEvent.event.cssClass\"\n              [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n              [style.top.px]=\"timeEvent.top\"\n              [style.height.px]=\"timeEvent.height\"\n              [style.left.%]=\"timeEvent.left\"\n              [style.width.%]=\"timeEvent.width\"\n              mwlResizable\n              [resizeSnapGrid]=\"{\n                left: dayColumnWidth,\n                right: dayColumnWidth,\n                top: eventSnapSize || hourSegmentHeight,\n                bottom: eventSnapSize || hourSegmentHeight\n              }\"\n              [validateResize]=\"validateResize\"\n              [allowNegativeResizes]=\"true\"\n              (resizeStart)=\"\n                timeEventResizeStarted(dayColumns, timeEvent, $event)\n              \"\n              (resizing)=\"timeEventResizing(timeEvent, $event)\"\n              (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n              mwlDraggable\n              dragActiveClass=\"cal-drag-active\"\n              [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n              [dragAxis]=\"{\n                x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                y: timeEvent.event.draggable && timeEventResizes.size === 0\n              }\"\n              [dragSnapGrid]=\"\n                snapDraggedEvents\n                  ? { x: dayColumnWidth, y: eventSnapSize || hourSegmentHeight }\n                  : {}\n              \"\n              [ghostDragEnabled]=\"!snapDraggedEvents\"\n              [validateDrag]=\"validateDrag\"\n              (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n              (dragging)=\"dragMove(timeEvent, $event)\"\n              (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n            >\n              <div\n                class=\"cal-resize-handle cal-resize-handle-before-start\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.beforeStart &&\n                  !timeEvent.startsBeforeDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  left: true,\n                  top: true\n                }\"\n              ></div>\n              <mwl-calendar-week-view-event\n                [weekEvent]=\"timeEvent\"\n                [tooltipPlacement]=\"tooltipPlacement\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                [tooltipDelay]=\"tooltipDelay\"\n                [customTemplate]=\"eventTemplate\"\n                [eventTitleTemplate]=\"eventTitleTemplate\"\n                [eventActionsTemplate]=\"eventActionsTemplate\"\n                (eventClicked)=\"eventClicked.emit({ event: timeEvent.event })\"\n              >\n              </mwl-calendar-week-view-event>\n              <div\n                class=\"cal-resize-handle cal-resize-handle-after-end\"\n                *ngIf=\"\n                  timeEvent.event?.resizable?.afterEnd &&\n                  !timeEvent.endsAfterDay\n                \"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  right: true,\n                  bottom: true\n                }\"\n              ></div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    CalendarWeekViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarWeekViewComponent.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      excludeDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      refresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekStartsOn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      precision: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      weekendDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      snapDraggedEvents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegments: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventSnapSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      allDayEventsLabelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysInWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventTimesChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      beforeViewRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      hourSegmentClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
      _classCallCheck(this, CalendarWeekViewHeaderComponent);

      this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    };

    CalendarWeekViewHeaderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view-header',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarWeekViewHeaderComponent.propDecorators = {
      days: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayHeaderClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventDropped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
      _classCallCheck(this, CalendarWeekViewEventComponent);

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    CalendarWeekViewEventComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view-event',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle: 'weekTooltip':weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarWeekViewEventComponent.propDecorators = {
      weekEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
      _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
    };

    CalendarWeekViewHourSegmentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-week-view-hour-segment',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{ segment.date | calendarDate: 'weekViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarWeekViewHourSegmentComponent.propDecorators = {
      segment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      segmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isTimeLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarWeekModule = function CalendarWeekModule() {
      _classCallCheck(this, CalendarWeekModule);
    };

    CalendarWeekModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent],
        exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */

    var CalendarDayViewComponent = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} cdr
       * @param {?} utils
       * @param {?} locale
       * @param {?} dateAdapter
       */
      function CalendarDayViewComponent(cdr, utils, locale, dateAdapter) {
        _classCallCheck(this, CalendarDayViewComponent);

        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */

        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */

        this.eventWidth = 150;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */

        this.hours = [];
        /**
         * @hidden
         */

        this.width = 0;
        /**
         * @hidden
         */

        this.currentResizes = new Map();
        /**
         * @hidden
         */

        this.eventDragEnter = 0;
        /**
         * @hidden
         */

        this.calendarId = Symbol('angular calendar day view id');
        /**
         * @hidden
         */

        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */

        this.trackByEventId = trackByEventId;
        /**
         * @hidden
         */

        this.trackByHour = trackByHour;
        /**
         * @hidden
         */

        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */

        this.trackByDayEvent = trackByDayOrWeekEvent;
        this.locale = locale;
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(CalendarDayViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(
            /**
            * @return {?}
            */
            function () {
              _this13.refreshAll();

              _this13.cdr.markForCheck();
            });
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
          }
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var refreshHourGrid = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments;
          /** @type {?} */

          var refreshView = changes.viewDate || changes.events || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.eventWidth || changes.hourSegments;

          if (refreshHourGrid) {
            this.refreshHourGrid();
          }

          if (changes.events) {
            validateEvents(this.events);
          }

          if (refreshView) {
            this.refreshView();
          }

          if (refreshHourGrid || refreshView) {
            this.emitBeforeViewRender();
          }
        }
        /**
         * @param {?} dropEvent
         * @param {?} date
         * @param {?} allDay
         * @return {?}
         */

      }, {
        key: "eventDropped",
        value: function eventDropped(dropEvent, date, allDay) {
          if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
              type: CalendarEventTimesChangedEventType.Drop,
              event: dropEvent.dropData.event,
              newStart: date,
              allDay: allDay
            });
          }
        }
        /**
         * @param {?} event
         * @param {?} resizeEvent
         * @param {?} dayEventsContainer
         * @return {?}
         */

      }, {
        key: "resizeStarted",
        value: function resizeStarted(event, resizeEvent, dayEventsContainer) {
          this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
          });
          /** @type {?} */

          var resizeHelper = new CalendarResizeHelper(dayEventsContainer);

          this.validateResize =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref33) {
            var rectangle = _ref33.rectangle;
            return resizeHelper.validateResize({
              rectangle: rectangle
            });
          };

          this.cdr.markForCheck();
        }
        /**
         * @param {?} event
         * @param {?} resizeEvent
         * @return {?}
         */

      }, {
        key: "resizing",
        value: function resizing(event, resizeEvent) {
          /** @type {?} */
          var currentResize = this.currentResizes.get(event);

          if (typeof resizeEvent.edges.top !== 'undefined') {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
          } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
          }
        }
        /**
         * @param {?} dayEvent
         * @return {?}
         */

      }, {
        key: "resizeEnded",
        value: function resizeEnded(dayEvent) {
          /** @type {?} */
          var currentResize = this.currentResizes.get(dayEvent);
          /** @type {?} */

          var resizingBeforeStart = currentResize.edge === 'top';
          /** @type {?} */

          var pixelsMoved;

          if (resizingBeforeStart) {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
          } else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
          }

          dayEvent.top = currentResize.originalTop;
          dayEvent.height = currentResize.originalHeight;
          /** @type {?} */

          var minutesMoved = getMinutesMoved(pixelsMoved, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
          /** @type {?} */

          var newStart = dayEvent.event.start;
          /** @type {?} */

          var newEnd = getDefaultEventEnd(this.dateAdapter, dayEvent.event, getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight));

          if (resizingBeforeStart) {
            newStart = this.dateAdapter.addMinutes(newStart, minutesMoved);
          } else {
            newEnd = this.dateAdapter.addMinutes(newEnd, minutesMoved);
          }

          this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: dayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
          });
          this.currentResizes.delete(dayEvent);
        }
        /**
         * @param {?} event
         * @param {?} dayEventsContainer
         * @param {?} dayEvent
         * @return {?}
         */

      }, {
        key: "dragStarted",
        value: function dragStarted(event, dayEventsContainer, dayEvent) {
          var _this14 = this;

          /** @type {?} */
          var dragHelper = new CalendarDragHelper(dayEventsContainer, event);

          this.validateDrag =
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref34) {
            var x = _ref34.x,
                y = _ref34.y,
                transform = _ref34.transform;
            return _this14.currentResizes.size === 0 && dragHelper.validateDrag({
              x: x,
              y: y,
              snapDraggedEvents: _this14.snapDraggedEvents,
              dragAlreadyMoved: _this14.dragAlreadyMoved,
              transform: transform
            });
          };

          this.eventDragEnter = 0;
          this.dragAlreadyMoved = false;
          this.currentDrag = {
            dayEvent: dayEvent,
            originalTop: dayEvent.top,
            originalLeft: dayEvent.left
          };
          this.cdr.markForCheck();
        }
        /**
         * @hidden
         * @param {?} coords
         * @return {?}
         */

      }, {
        key: "dragMove",
        value: function dragMove(coords) {
          this.dragAlreadyMoved = true;

          if (this.snapDraggedEvents) {
            this.currentDrag.dayEvent.top = this.currentDrag.originalTop + coords.y;
            this.currentDrag.dayEvent.left = this.currentDrag.originalLeft + coords.x;
          }
        }
        /**
         * @param {?} dayEvent
         * @param {?} dragEndEvent
         * @return {?}
         */

      }, {
        key: "dragEnded",
        value: function dragEnded(dayEvent, dragEndEvent) {
          this.currentDrag.dayEvent.top = this.currentDrag.originalTop;
          this.currentDrag.dayEvent.left = this.currentDrag.originalLeft;
          this.currentDrag = null;

          if (this.eventDragEnter > 0) {
            /** @type {?} */
            var minutesMoved = getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            /** @type {?} */

            var newStart = this.dateAdapter.addMinutes(dayEvent.event.start, minutesMoved);

            if (dragEndEvent.y < 0 && newStart < this.view.period.start) {
              minutesMoved += this.dateAdapter.differenceInMinutes(this.view.period.start, newStart);
              newStart = this.view.period.start;
            }
            /** @type {?} */


            var newEnd;

            if (dayEvent.event.end) {
              newEnd = this.dateAdapter.addMinutes(dayEvent.event.end, minutesMoved);
            }

            if (isDraggedWithinPeriod(newStart, newEnd, this.view.period)) {
              this.eventTimesChanged.emit({
                newStart: newStart,
                newEnd: newEnd,
                event: dayEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: false
              });
            }
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshHourGrid",
        value: function refreshHourGrid() {
          this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            }
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshView",
        value: function refreshView() {
          this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
              hour: this.dayStartHour,
              minute: this.dayStartMinute
            },
            dayEnd: {
              hour: this.dayEndHour,
              minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
          });
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "refreshAll",
        value: function refreshAll() {
          this.refreshHourGrid();
          this.refreshView();
          this.emitBeforeViewRender();
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "emitBeforeViewRender",
        value: function emitBeforeViewRender() {
          if (this.hours && this.view) {
            this.beforeViewRender.emit({
              body: {
                hourGrid: this.hours,
                allDayEvents: this.view.allDayEvents
              },
              period: this.view.period
            });
          }
        }
      }]);

      return CalendarDayViewComponent;
    }();

    CalendarDayViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-day-view',
        template: "\n    <div class=\"cal-day-view\">\n      <div\n        class=\"cal-all-day-events\"\n        mwlDroppable\n        dragOverClass=\"cal-drag-over\"\n        dragActiveClass=\"cal-drag-active\"\n        (drop)=\"eventDropped($event, view.period.start, true)\"\n      >\n        <mwl-calendar-day-view-event\n          *ngFor=\"let event of view.allDayEvents; trackBy: trackByEventId\"\n          [ngClass]=\"event.cssClass\"\n          [dayEvent]=\"{ event: event }\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          [customTemplate]=\"eventTemplate\"\n          [eventTitleTemplate]=\"eventTitleTemplate\"\n          [eventActionsTemplate]=\"eventActionsTemplate\"\n          (eventClicked)=\"eventClicked.emit({ event: event })\"\n          [class.cal-draggable]=\"!snapDraggedEvents && event.draggable\"\n          mwlDraggable\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, calendarId: calendarId }\"\n          [dragAxis]=\"{\n            x: !snapDraggedEvents && event.draggable,\n            y: !snapDraggedEvents && event.draggable\n          }\"\n        >\n        </mwl-calendar-day-view-event>\n      </div>\n      <div\n        class=\"cal-hour-rows\"\n        #dayEventsContainer\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\"\n      >\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy: trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeSnapGrid]=\"{\n              top: eventSnapSize || hourSegmentHeight,\n              bottom: eventSnapSize || hourSegmentHeight\n            }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayEventsContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: dayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x:\n                !snapDraggedEvents &&\n                dayEvent.event.draggable &&\n                currentResizes.size === 0,\n              y: dayEvent.event.draggable && currentResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"\n              snapDraggedEvents ? { y: eventSnapSize || hourSegmentHeight } : {}\n            \"\n            [validateDrag]=\"validateDrag\"\n            [ghostDragEnabled]=\"!snapDraggedEvents\"\n            (dragStart)=\"dragStarted(event, dayEventsContainer, dayEvent)\"\n            (dragging)=\"dragMove($event)\"\n            (dragEnd)=\"dragEnded(dayEvent, $event)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.beforeStart &&\n                !dayEvent.startsBeforeDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ top: true }\"\n            ></div>\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({ event: dayEvent.event })\"\n            >\n            </mwl-calendar-day-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                dayEvent.event?.resizable?.afterEnd && !dayEvent.endsAfterDay\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ bottom: true }\"\n            ></div>\n          </div>\n        </div>\n        <div\n          class=\"cal-hour\"\n          *ngFor=\"let hour of hours; trackBy: trackByHour\"\n          [style.minWidth.px]=\"view?.width + 70\"\n        >\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({ date: segment.date })\"\n            [clickListenerDisabled]=\"hourSegmentClicked.observers.length === 0\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            dragActiveClass=\"cal-drag-active\"\n            (drop)=\"eventDropped($event, segment.date, false)\"\n          >\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    CalendarDayViewComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: CalendarUtils
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }, {
        type: DateAdapter
      }];
    };

    CalendarDayViewComponent.propDecorators = {
      viewDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegments: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayStartMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndHour: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayEndMinute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      refresh: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventSnapSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourSegmentTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      snapDraggedEvents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      hourSegmentClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      eventTimesChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      beforeViewRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarDayViewHourSegmentComponent = function CalendarDayViewHourSegmentComponent() {
      _classCallCheck(this, CalendarDayViewHourSegmentComponent);
    };

    CalendarDayViewHourSegmentComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-day-view-hour-segment',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n    >\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate: 'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarDayViewHourSegmentComponent.propDecorators = {
      segment: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      segmentHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarDayViewEventComponent = function CalendarDayViewEventComponent() {
      _classCallCheck(this, CalendarDayViewEventComponent);

      this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    CalendarDayViewEventComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mwl-calendar-day-view-event',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: dayEvent.event.color?.secondary,\n          borderColor: dayEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          dayEvent.event.title | calendarEventTitle: 'dayTooltip':dayEvent.event\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit()\"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay\n      }\"\n    >\n    </ng-template>\n  "
      }]
    }];
    CalendarDayViewEventComponent.propDecorators = {
      dayEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipPlacement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipAppendToBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventActionsTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      eventClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CalendarDayModule = function CalendarDayModule() {
      _classCallCheck(this, CalendarDayModule);
    };

    CalendarDayModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarDayViewComponent, CalendarDayViewHourSegmentComponent, CalendarDayViewEventComponent],
        exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_6__["DragAndDropModule"], CalendarDayViewComponent, CalendarDayViewHourSegmentComponent, CalendarDayViewEventComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The main module of this library. Example usage:
     *
     * ```typescript
     * import { CalenderModule } from 'angular-calendar';
     *
     * \@NgModule({
     *   imports: [
     *     CalenderModule.forRoot()
     *   ]
     * })
     * class MyModule {}
     * ```
     *
     */

    var CalendarModule = /*#__PURE__*/function () {
      function CalendarModule() {
        _classCallCheck(this, CalendarModule);
      }

      _createClass(CalendarModule, null, [{
        key: "forRoot",

        /**
         * @param {?} dateAdapter
         * @param {?=} config
         * @return {?}
         */
        value: function forRoot(dateAdapter) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return {
            ngModule: CalendarModule,
            providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils]
          };
        }
      }]);

      return CalendarModule;
    }();

    CalendarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
        exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
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
    //# sourceMappingURL=angular-calendar.js.map

    /***/
  },

  /***/
  "./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/angular-calendar/node_modules/tslib/tslib.es6.js ***!
    \***********************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesAngularCalendarNode_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js ***!
    \******************************************************************************************/

  /*! exports provided: DragAndDropModule, ɵc, ɵd, ɵb, ɵa */

  /***/
  function node_modulesAngularDraggableDroppableFesm2015AngularDraggableDroppableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function () {
      return DragAndDropModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DraggableHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return DraggableScrollContainerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DraggableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DroppableDirective;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @mattlewis92/dom-autoscroller */
    "./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.js");
    /* harmony import */


    var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableHelper = function DraggableHelper() {
      _classCallCheck(this, DraggableHelper);

      this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    };

    DraggableHelper.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    DraggableHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({
      factory: function DraggableHelper_Factory() {
        return new DraggableHelper();
      },
      token: DraggableHelper,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
     * ```html
     * <div style="overflow: scroll" mwlDraggableScrollContainer>
     * <div mwlDraggable>Drag me!</div>
     * </div>
     * ```
     */

    var DraggableScrollContainerDirective =
    /**
     * @hidden
     * @param {?} elementRef
     */
    function DraggableScrollContainerDirective(elementRef) {
      _classCallCheck(this, DraggableScrollContainerDirective);

      this.elementRef = elementRef;
      /**
       * Trigger the DragStart after a long touch in scrollable container when true
       * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
       */

      this.activeLongPressDrag = false;
      /**
       * Configuration of a long touch
       * Duration in ms of a long touch before activating DragStart
       * Delta of the
       * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
       */

      this.longPressConfig = {
        duration: 300,
        delta: 30
      };
    };

    DraggableScrollContainerDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlDraggableScrollContainer]'
      }]
    }];
    /** @nocollapse */

    DraggableScrollContainerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };

    DraggableScrollContainerDirective.propDecorators = {
      activeLongPressDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      longPressConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} classToAdd
     * @return {?}
     */

    function addClass(renderer, element, classToAdd) {
      if (classToAdd) {
        classToAdd.split(' ').forEach(
        /**
        * @param {?} className
        * @return {?}
        */
        function (className) {
          return renderer.addClass(element.nativeElement, className);
        });
      }
    }
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} classToRemove
     * @return {?}
     */


    function removeClass(renderer, element, classToRemove) {
      if (classToRemove) {
        classToRemove.split(' ').forEach(
        /**
        * @param {?} className
        * @return {?}
        */
        function (className) {
          return renderer.removeClass(element.nativeElement, className);
        });
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DraggableDirective = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} element
       * @param {?} renderer
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} vcr
       * @param {?} scrollContainer
       * @param {?} document
       */
      function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        _classCallCheck(this, DraggableDirective);

        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */

        this.dragAxis = {
          x: true,
          y: true
        };
        /**
         * Snap all drags to an x / y grid
         */

        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */

        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */

        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */

        this.dragCursor = '';
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */

        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the ghost element has been created
         */

        this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */

        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */

        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */

        this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.timeLongPress = {
          timerBegin: 0,
          timerEnd: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(DraggableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.checkEventListeners();
          /** @type {?} */

          var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this15.canDrag();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
          /**
          * @param {?} pointerDownEvent
          * @return {?}
          */
          function (pointerDownEvent) {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !_this15.scrollContainer) {
              pointerDownEvent.event.stopPropagation();
            } // hack to prevent text getting selected in safari while dragging

            /** @type {?} */


            var globalDragStyle = _this15.renderer.createElement('style');

            _this15.renderer.setAttribute(globalDragStyle, 'type', 'text/css');

            _this15.renderer.appendChild(globalDragStyle, _this15.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));

            _this15.document.head.appendChild(globalDragStyle);
            /** @type {?} */


            var startScrollPosition = _this15.getScrollPosition();
            /** @type {?} */


            var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              /** @type {?} */
              var scrollContainer = _this15.scrollContainer ? _this15.scrollContainer.elementRef.nativeElement : 'window';
              return _this15.renderer.listen(scrollContainer, 'scroll',
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return observer.next(e);
              });
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(startScrollPosition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @return {?}
            */
            function () {
              return _this15.getScrollPosition();
            }));
            /** @type {?} */

            var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            /** @type {?} */

            var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();

            _this15.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this15.dragPointerDown.next({
                x: 0,
                y: 0
              });
            });
            /** @type {?} */


            var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this15.pointerUp$, _this15.pointerDown$, cancelDrag$, _this15.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([_this15.pointerMove$, scrollContainerScroll$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref35) {
              var _ref36 = _slicedToArray(_ref35, 2),
                  pointerMoveEvent = _ref36[0],
                  scroll = _ref36[1];

              return {
                currentDrag$: currentDrag$,
                transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                clientX: pointerMoveEvent.clientX,
                clientY: pointerMoveEvent.clientY,
                scrollLeft: scroll.left,
                scrollTop: scroll.top
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (_this15.dragSnapGrid.x) {
                moveData.transformX = Math.round(moveData.transformX / _this15.dragSnapGrid.x) * _this15.dragSnapGrid.x;
              }

              if (_this15.dragSnapGrid.y) {
                moveData.transformY = Math.round(moveData.transformY / _this15.dragSnapGrid.y) * _this15.dragSnapGrid.y;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              if (!_this15.dragAxis.x) {
                moveData.transformX = 0;
              }

              if (!_this15.dragAxis.y) {
                moveData.transformY = 0;
              }

              return moveData;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} moveData
            * @return {?}
            */
            function (moveData) {
              /** @type {?} */
              var scrollX = moveData.scrollLeft - startScrollPosition.left;
              /** @type {?} */

              var scrollY = moveData.scrollTop - startScrollPosition.top;
              return Object.assign({}, moveData, {
                x: moveData.transformX + scrollX,
                y: moveData.transformY + scrollY
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref37) {
              var x = _ref37.x,
                  y = _ref37.y,
                  transformX = _ref37.transformX,
                  transformY = _ref37.transformY;
              return !_this15.validateDrag || _this15.validateDrag({
                x: x,
                y: y,
                transform: {
                  x: transformX,
                  y: transformY
                }
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(dragComplete$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragStarted$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            /** @type {?} */

            var dragEnded$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            dragStarted$.subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref38) {
              var clientX = _ref38.clientX,
                  clientY = _ref38.clientY,
                  x = _ref38.x,
                  y = _ref38.y;

              _this15.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this15.dragStart.next({
                  cancelDrag$: cancelDrag$
                });
              });

              _this15.scroller = _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default()([_this15.scrollContainer ? _this15.scrollContainer.elementRef.nativeElement : _this15.document.defaultView], {
                margin: 20,

                /**
                 * @return {?}
                 */
                autoScroll: function autoScroll() {
                  return true;
                }
              });
              addClass(_this15.renderer, _this15.element, _this15.dragActiveClass);

              if (_this15.ghostDragEnabled) {
                /** @type {?} */
                var rect = _this15.element.nativeElement.getBoundingClientRect();
                /** @type {?} */


                var clone =
                /** @type {?} */
                _this15.element.nativeElement.cloneNode(true);

                if (!_this15.showOriginalElementWhileDragging) {
                  _this15.renderer.setStyle(_this15.element.nativeElement, 'visibility', 'hidden');
                }

                if (_this15.ghostElementAppendTo) {
                  _this15.ghostElementAppendTo.appendChild(clone);
                } else {
                  /** @type {?} */
                  _this15.element.nativeElement.parentNode.insertBefore(clone, _this15.element.nativeElement.nextSibling);
                }

                _this15.ghostElement = clone;
                _this15.document.body.style.cursor = _this15.dragCursor;

                _this15.setElementStyles(clone, {
                  position: 'fixed',
                  top: "".concat(rect.top, "px"),
                  left: "".concat(rect.left, "px"),
                  width: "".concat(rect.width, "px"),
                  height: "".concat(rect.height, "px"),
                  cursor: _this15.dragCursor,
                  margin: '0',
                  willChange: 'transform',
                  pointerEvents: 'none'
                });

                if (_this15.ghostElementTemplate) {
                  /** @type {?} */
                  var viewRef = _this15.vcr.createEmbeddedView(_this15.ghostElementTemplate);

                  clone.innerHTML = '';
                  viewRef.rootNodes.filter(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    return node instanceof Node;
                  }).forEach(
                  /**
                  * @param {?} node
                  * @return {?}
                  */
                  function (node) {
                    clone.appendChild(node);
                  });
                  dragEnded$.subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this15.vcr.remove(_this15.vcr.indexOf(viewRef));
                  });
                }

                _this15.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this15.ghostElementCreated.emit({
                    clientX: clientX - x,
                    clientY: clientY - y,
                    element: clone
                  });
                });

                dragEnded$.subscribe(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  clone.parentElement.removeChild(clone);
                  _this15.ghostElement = null;

                  _this15.renderer.setStyle(_this15.element.nativeElement, 'visibility', '');
                });
              }

              _this15.draggableHelper.currentDrag.next(currentDrag$);
            });
            dragEnded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
            /**
            * @param {?} dragEndData
            * @return {?}
            */
            function (dragEndData) {
              /** @type {?} */
              var dragEndData$ = cancelDrag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["count"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} calledCount
              * @return {?}
              */
              function (calledCount) {
                return Object.assign({}, dragEndData, {
                  dragCancelled: calledCount > 0
                });
              }));
              cancelDrag$.complete();
              return dragEndData$;
            })).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref39) {
              var x = _ref39.x,
                  y = _ref39.y,
                  dragCancelled = _ref39.dragCancelled;

              _this15.scroller.destroy();

              _this15.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this15.dragEnd.next({
                  x: x,
                  y: y,
                  dragCancelled: dragCancelled
                });
              });

              removeClass(_this15.renderer, _this15.element, _this15.dragActiveClass);
              currentDrag$.complete();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this15.document.head.removeChild(globalDragStyle);
            });
            return pointerMove;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return [, value];
          })), pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref40) {
            var _ref41 = _slicedToArray(_ref40, 2),
                previous = _ref41[0],
                next = _ref41[1];

            if (!previous) {
              return true;
            }

            return previous.x !== next.x || previous.y !== next.y;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref42) {
            var _ref43 = _slicedToArray(_ref42, 2),
                previous = _ref43[0],
                next = _ref43[1];

            return next;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"])).subscribe(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref44) {
            var x = _ref44.x,
                y = _ref44.y,
                currentDrag$ = _ref44.currentDrag$,
                clientX = _ref44.clientX,
                clientY = _ref44.clientY,
                transformX = _ref44.transformX,
                transformY = _ref44.transformY;

            _this15.zone.run(
            /**
            * @return {?}
            */
            function () {
              _this15.dragging.next({
                x: x,
                y: y
              });
            });

            if (_this15.ghostElement) {
              /** @type {?} */
              var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

              _this15.setElementStyles(_this15.ghostElement, {
                transform: transform,
                '-webkit-transform': transform,
                '-ms-transform': transform,
                '-moz-transform': transform,
                '-o-transform': transform
              });
            }

            currentDrag$.next({
              clientX: clientX,
              clientY: clientY,
              dropData: _this15.dropData
            });
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.dragAxis) {
            this.checkEventListeners();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
          this.pointerDown$.complete();
          this.pointerMove$.complete();
          this.pointerUp$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "checkEventListeners",
        value: function checkEventListeners() {
          var _this16 = this;

          /** @type {?} */
          var canDrag = this.canDrag();
          /** @type {?} */

          var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

          if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this16.eventListenerSubscriptions.mousedown = _this16.renderer.listen(_this16.element.nativeElement, 'mousedown',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onMouseDown(event);
              });
              _this16.eventListenerSubscriptions.mouseup = _this16.renderer.listen('document', 'mouseup',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onMouseUp(event);
              });
              _this16.eventListenerSubscriptions.touchstart = _this16.renderer.listen(_this16.element.nativeElement, 'touchstart',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onTouchStart(event);
              });
              _this16.eventListenerSubscriptions.touchend = _this16.renderer.listen('document', 'touchend',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onTouchEnd(event);
              });
              _this16.eventListenerSubscriptions.touchcancel = _this16.renderer.listen('document', 'touchcancel',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                _this16.onTouchEnd(event);
              });
              _this16.eventListenerSubscriptions.mouseenter = _this16.renderer.listen(_this16.element.nativeElement, 'mouseenter',
              /**
              * @return {?}
              */
              function () {
                _this16.onMouseEnter();
              });
              _this16.eventListenerSubscriptions.mouseleave = _this16.renderer.listen(_this16.element.nativeElement, 'mouseleave',
              /**
              * @return {?}
              */
              function () {
                _this16.onMouseLeave();
              });
            });
          } else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseDown",
        value: function onMouseDown(event) {
          var _this17 = this;

          if (event.button === 0) {
            if (!this.eventListenerSubscriptions.mousemove) {
              this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
              /**
              * @param {?} mouseMoveEvent
              * @return {?}
              */
              function (mouseMoveEvent) {
                _this17.pointerMove$.next({
                  event: mouseMoveEvent,
                  clientX: mouseMoveEvent.clientX,
                  clientY: mouseMoveEvent.clientY
                });
              });
            }

            this.pointerDown$.next({
              event: event,
              clientX: event.clientX,
              clientY: event.clientY
            });
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onMouseUp",
        value: function onMouseUp(event) {
          if (event.button === 0) {
            if (this.eventListenerSubscriptions.mousemove) {
              this.eventListenerSubscriptions.mousemove();
              delete this.eventListenerSubscriptions.mousemove;
            }

            this.pointerUp$.next({
              event: event,
              clientX: event.clientX,
              clientY: event.clientY
            });
          }
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          var _this18 = this;

          /** @type {?} */
          var startScrollPosition;
          /** @type {?} */

          var isDragActivated;
          /** @type {?} */

          var hasContainerScrollbar;

          if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
          }

          if (!this.eventListenerSubscriptions.touchmove) {
            /** @type {?} */
            var contextMenuListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.document, 'contextmenu').subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              e.preventDefault();
            });
            /** @type {?} */

            var touchMoveListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.document, 'touchmove', {
              passive: false
            }).subscribe(
            /**
            * @param {?} touchMoveEvent
            * @return {?}
            */
            function (touchMoveEvent) {
              if ((_this18.scrollContainer && _this18.scrollContainer.activeLongPressDrag || _this18.touchStartLongPress) && !isDragActivated && hasContainerScrollbar) {
                isDragActivated = _this18.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
              }

              if ((!_this18.scrollContainer || !_this18.scrollContainer.activeLongPressDrag) && !_this18.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
                touchMoveEvent.preventDefault();

                _this18.pointerMove$.next({
                  event: touchMoveEvent,
                  clientX: touchMoveEvent.targetTouches[0].clientX,
                  clientY: touchMoveEvent.targetTouches[0].clientY
                });
              }
            });

            this.eventListenerSubscriptions.touchmove =
            /**
            * @return {?}
            */
            function () {
              contextMenuListener.unsubscribe();
              touchMoveListener.unsubscribe();
            };
          }

          this.pointerDown$.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
          });
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTouchEnd",
        value: function onTouchEnd(event) {
          if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;

            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
              this.enableScroll();
            }
          }

          this.pointerUp$.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.setCursor(this.dragCursor);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.setCursor('');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "canDrag",
        value: function canDrag() {
          return this.dragAxis.x || this.dragAxis.y;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setCursor",
        value: function setCursor(value) {
          if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this19 = this;

          Object.keys(this.eventListenerSubscriptions).forEach(
          /**
          * @param {?} type
          * @return {?}
          */
          function (type) {
            /** @type {?} */
            _this19.eventListenerSubscriptions[type]();

            delete
            /** @type {?} */
            _this19.eventListenerSubscriptions[type];
          });
        }
        /**
         * @private
         * @param {?} element
         * @param {?} styles
         * @return {?}
         */

      }, {
        key: "setElementStyles",
        value: function setElementStyles(element, styles) {
          var _this20 = this;

          Object.keys(styles).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this20.renderer.setStyle(element, key, styles[key]);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollElement",
        value: function getScrollElement() {
          if (this.scrollContainer) {
            return this.scrollContainer.elementRef.nativeElement;
          } else {
            return this.document.body;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getScrollPosition",
        value: function getScrollPosition() {
          if (this.scrollContainer) {
            return {
              top: this.scrollContainer.elementRef.nativeElement.scrollTop,
              left: this.scrollContainer.elementRef.nativeElement.scrollLeft
            };
          } else {
            return {
              top: window.pageYOffset || this.document.documentElement.scrollTop,
              left: window.pageXOffset || this.document.documentElement.scrollLeft
            };
          }
        }
        /**
         * @private
         * @param {?} event
         * @param {?} touchMoveEvent
         * @param {?} startScrollPosition
         * @return {?}
         */

      }, {
        key: "shouldBeginDrag",
        value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
          /** @type {?} */
          var moveScrollPosition = this.getScrollPosition();
          /** @type {?} */

          var deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
          };
          /** @type {?} */

          var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
          /** @type {?} */

          var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
          /** @type {?} */

          var deltaTotal = deltaX + deltaY;
          /** @type {?} */

          var longPressConfig = this.touchStartLongPress ? this.touchStartLongPress :
          /* istanbul ignore next */
          {
            delta: this.scrollContainer.longPressConfig.delta,
            delay: this.scrollContainer.longPressConfig.duration
          };

          if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
          }

          this.timeLongPress.timerEnd = Date.now();
          /** @type {?} */

          var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

          if (duration >= longPressConfig.delay) {
            this.disableScroll();
            return true;
          }

          return false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "enableScroll",
        value: function enableScroll() {
          if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
          }

          this.renderer.setStyle(this.document.body, 'overflow', '');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "disableScroll",
        value: function disableScroll() {
          /* istanbul ignore next */
          if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
          }

          this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "hasScrollbar",
        value: function hasScrollbar() {
          /** @type {?} */
          var scrollContainer = this.getScrollElement();
          /** @type {?} */

          var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
          /** @type {?} */

          var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
          return containerHasHorizontalScroll || containerHasVerticalScroll;
        }
      }]);

      return DraggableDirective;
    }();

    DraggableDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlDraggable]'
      }]
    }];
    /** @nocollapse */

    DraggableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    DraggableDirective.propDecorators = {
      dropData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragAxis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostDragEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      showOriginalElementWhileDragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      validateDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragCursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementAppendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      touchStartLongPress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragPointerDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      ghostElementCreated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragging: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} clientX
     * @param {?} clientY
     * @param {?} rect
     * @return {?}
     */

    function isCoordinateWithinRectangle(clientX, clientY, rect) {
      return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    }

    var DroppableDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} draggableHelper
       * @param {?} zone
       * @param {?} renderer
       * @param {?} scrollContainer
       */
      function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
        _classCallCheck(this, DroppableDirective);

        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.renderer = renderer;
        this.scrollContainer = scrollContainer;
        /**
         * Called when a draggable element starts overlapping the element
         */

        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */

        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */

        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */

        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-line no-output-named-after-standard-event
      }
      /**
       * @return {?}
       */


      _createClass(DroppableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
          /**
          * @param {?} drag$
          * @return {?}
          */
          function (drag$) {
            addClass(_this21.renderer, _this21.element, _this21.dragActiveClass);
            /** @type {?} */

            var droppableElement = {
              updateCache: true
            };
            /** @type {?} */

            var deregisterScrollListener = _this21.renderer.listen(_this21.scrollContainer ? _this21.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
            /**
            * @return {?}
            */
            function () {
              droppableElement.updateCache = true;
            });
            /** @type {?} */


            var currentDragDropData;
            /** @type {?} */

            var overlaps$ = drag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref45) {
              var clientX = _ref45.clientX,
                  clientY = _ref45.clientY,
                  dropData = _ref45.dropData;
              currentDragDropData = dropData;

              if (droppableElement.updateCache) {
                droppableElement.rect = _this21.element.nativeElement.getBoundingClientRect();

                if (_this21.scrollContainer) {
                  droppableElement.scrollContainerRect = _this21.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                }

                droppableElement.updateCache = false;
              }
              /** @type {?} */


              var isWithinElement = isCoordinateWithinRectangle(clientX, clientY,
              /** @type {?} */
              droppableElement.rect);

              if (droppableElement.scrollContainerRect) {
                return isWithinElement && isCoordinateWithinRectangle(clientX, clientY,
                /** @type {?} */
                droppableElement.scrollContainerRect);
              } else {
                return isWithinElement;
              }
            }));
            /** @type {?} */

            var overlapsChanged$ = overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            /** @type {?} */

            var dragOverActive;
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = true;
              addClass(_this21.renderer, _this21.element, _this21.dragOverClass);

              _this21.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this21.dragEnter.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} overlapsNow
            * @return {?}
            */
            function (overlapsNow) {
              return overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this21.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this21.dragOver.next({
                  dropData: currentDragDropData
                });
              });
            });
            overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref46) {
              var _ref47 = _slicedToArray(_ref46, 2),
                  didOverlap = _ref47[0],
                  overlapsNow = _ref47[1];

              return didOverlap && !overlapsNow;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              dragOverActive = false;
              removeClass(_this21.renderer, _this21.element, _this21.dragOverClass);

              _this21.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this21.dragLeave.next({
                  dropData: currentDragDropData
                });
              });
            });
            drag$.subscribe({
              complete:
              /**
              * @return {?}
              */
              function complete() {
                deregisterScrollListener();
                removeClass(_this21.renderer, _this21.element, _this21.dragActiveClass);

                if (dragOverActive) {
                  removeClass(_this21.renderer, _this21.element, _this21.dragOverClass);

                  _this21.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this21.drop.next({
                      dropData: currentDragDropData
                    });
                  });
                }
              }
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
          }
        }
      }]);

      return DroppableDirective;
    }();

    DroppableDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlDroppable]'
      }]
    }];
    /** @nocollapse */

    DroppableDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: DraggableHelper
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: DraggableScrollContainerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    DroppableDirective.propDecorators = {
      dragOverClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dragEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      dragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      drop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DragAndDropModule = function DragAndDropModule() {
      _classCallCheck(this, DragAndDropModule);
    };

    DragAndDropModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
        exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
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
    //# sourceMappingURL=angular-draggable-droppable.js.map

    /***/
  },

  /***/
  "./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js ***!
    \**************************************************************************************/

  /*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */

  /***/
  function node_modulesAngularResizableElementFesm2015AngularResizableElementJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableDirective", function () {
      return ResizableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function () {
      return ResizeHandleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizableModule", function () {
      return ResizableModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
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
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value1
     * @param {?} value2
     * @param {?=} precision
     * @return {?}
     */


    function isNumberCloseTo(value1, value2) {
      var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

      /** @type {?} */
      var diff = Math.abs(value1 - value2);
      return diff < precision;
    }
    /**
     * @param {?} startingRect
     * @param {?} edges
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */


    function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
      /** @type {?} */
      var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
      };

      if (edges.top) {
        newBoundingRect.top += clientY;
      }

      if (edges.bottom) {
        newBoundingRect.bottom += clientY;
      }

      if (edges.left) {
        newBoundingRect.left += clientX;
      }

      if (edges.right) {
        newBoundingRect.right += clientX;
      }

      newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
      newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
      return newBoundingRect;
    }
    /**
     * @param {?} element
     * @param {?} ghostElementPositioning
     * @return {?}
     */


    function getElementRect(element, ghostElementPositioning) {
      /** @type {?} */
      var translateX = 0;
      /** @type {?} */

      var translateY = 0;
      /** @type {?} */

      var style = element.nativeElement.style;
      /** @type {?} */

      var transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
      /** @type {?} */

      var transform = transformProperties.map(function (property) {
        return style[property];
      }).find(function (value) {
        return !!value;
      });

      if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate3?d?\(([0-9]*)px, ([0-9]*)px.*/, '$1');
        translateY = transform.replace(/.*translate3?d?\(([0-9]*)px, ([0-9]*)px.*/, '$2');
      }

      if (ghostElementPositioning === 'absolute') {
        return {
          height: element.nativeElement.offsetHeight,
          width: element.nativeElement.offsetWidth,
          top: element.nativeElement.offsetTop - translateY,
          bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
          left: element.nativeElement.offsetLeft - translateX,
          right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
        };
      } else {
        /** @type {?} */
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
          height: boundingRect.height,
          width: boundingRect.width,
          top: boundingRect.top - translateY,
          bottom: boundingRect.bottom - translateY,
          left: boundingRect.left - translateX,
          right: boundingRect.right - translateX,
          scrollTop: element.nativeElement.scrollTop,
          scrollLeft: element.nativeElement.scrollLeft
        };
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingY(_ref48) {
      var clientY = _ref48.clientY,
          rect = _ref48.rect;
      return clientY >= rect.top && clientY <= rect.bottom;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function isWithinBoundingX(_ref49) {
      var clientX = _ref49.clientX,
          rect = _ref49.rect;
      return clientX >= rect.left && clientX <= rect.right;
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getResizeEdges(_ref50) {
      var clientX = _ref50.clientX,
          clientY = _ref50.clientY,
          elm = _ref50.elm,
          allowedEdges = _ref50.allowedEdges,
          cursorPrecision = _ref50.cursorPrecision;

      /** @type {?} */
      var elmPosition = elm.nativeElement.getBoundingClientRect();
      /** @type {?} */

      var edges = {};

      if (allowedEdges.left && isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.left = true;
      }

      if (allowedEdges.right && isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) && isWithinBoundingY({
        clientY: clientY,
        rect: elmPosition
      })) {
        edges.right = true;
      }

      if (allowedEdges.top && isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.top = true;
      }

      if (allowedEdges.bottom && isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) && isWithinBoundingX({
        clientX: clientX,
        rect: elmPosition
      })) {
        edges.bottom = true;
      }

      return edges;
    }
    /** @type {?} */


    var DEFAULT_RESIZE_CURSORS = Object.freeze({
      topLeft: 'nw-resize',
      topRight: 'ne-resize',
      bottomLeft: 'sw-resize',
      bottomRight: 'se-resize',
      leftOrRight: 'col-resize',
      topOrBottom: 'row-resize'
    });
    /**
     * @param {?} edges
     * @param {?} cursors
     * @return {?}
     */

    function getResizeCursor(edges, cursors) {
      if (edges.left && edges.top) {
        return cursors.topLeft;
      } else if (edges.right && edges.top) {
        return cursors.topRight;
      } else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
      } else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
      } else if (edges.left || edges.right) {
        return cursors.leftOrRight;
      } else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
      } else {
        return '';
      }
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function getEdgesDiff(_ref51) {
      var edges = _ref51.edges,
          initialRectangle = _ref51.initialRectangle,
          newRectangle = _ref51.newRectangle;

      /** @type {?} */
      var edgesDiff = {};
      Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
      });
      return edgesDiff;
    }
    /** @type {?} */


    var RESIZE_ACTIVE_CLASS = 'resize-active';
    /** @type {?} */

    var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
    /** @type {?} */

    var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
    /** @type {?} */

    var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
    /** @type {?} */

    var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
    /** @type {?} */

    var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
    /** @type {?} */

    var MOUSE_MOVE_THROTTLE_MS = 50;
    /**
     * Place this on an element to make it resizable. For example:
     *
     * ```html
     * <div
     *   mwlResizable
     *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
     *   [enableGhostResize]="true">
     * </div>
     * ```
     */

    var ResizableDirective = /*#__PURE__*/function () {
      /**
       * @hidden
       * @param {?} platformId
       * @param {?} renderer
       * @param {?} elm
       * @param {?} zone
       */
      function ResizableDirective(platformId, renderer, elm, zone) {
        _classCallCheck(this, ResizableDirective);

        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */

        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */

        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */

        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */

        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */

        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */

        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */

        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */

        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */

        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */

        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */

        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */

        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */

        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
      }
      /**
       * @hidden
       * @return {?}
       */


      _createClass(ResizableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          /** @type {?} */
          var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
          /** @type {?} */

          var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref52) {
            var event = _ref52.event;

            if (currentResize) {
              event.preventDefault();
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          /** @type {?} */

          var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
          /** @type {?} */

          var currentResize;
          /** @type {?} */

          var removeGhostElement = function removeGhostElement() {
            if (currentResize && currentResize.clonedNode) {
              _this22.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'visibility', 'inherit');
            }
          };
          /** @type {?} */


          var getResizeCursors = function getResizeCursors() {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this22.resizeCursors);
          };

          this.resizeEdges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this22.resizeEdges && Object.keys(_this22.resizeEdges).some(function (edge) {
              return !!_this22.resizeEdges[edge];
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (legacyResizeEdgesEnabled) {
            return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(this.mouseMoveThrottleMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (_ref53) {
            var clientX = _ref53.clientX,
                clientY = _ref53.clientY;

            /** @type {?} */
            var resizeEdges = getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this22.elm,
              allowedEdges: _this22.resizeEdges,
              cursorPrecision: _this22.resizeCursorPrecision
            });
            /** @type {?} */

            var resizeCursors = getResizeCursors();

            if (!currentResize) {
              /** @type {?} */
              var cursor = getResizeCursor(resizeEdges, resizeCursors);

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'cursor', cursor);
            }

            _this22.setElementClass(_this22.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

            _this22.setElementClass(_this22.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

            _this22.setElementClass(_this22.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

            _this22.setElementClass(_this22.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
          });
          /** @type {?} */

          var mousedrag = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
              return {
                clientX: moveCoords.clientX - startCoords.clientX,
                clientY: moveCoords.clientY - startCoords.clientY
              };
            }
            /** @type {?} */


            var getSnapGrid = function getSnapGrid() {
              /** @type {?} */
              var snapGrid = {
                x: 1,
                y: 1
              };

              if (currentResize) {
                if (_this22.resizeSnapGrid.left && currentResize.edges.left) {
                  snapGrid.x = +_this22.resizeSnapGrid.left;
                } else if (_this22.resizeSnapGrid.right && currentResize.edges.right) {
                  snapGrid.x = +_this22.resizeSnapGrid.right;
                }

                if (_this22.resizeSnapGrid.top && currentResize.edges.top) {
                  snapGrid.y = +_this22.resizeSnapGrid.top;
                } else if (_this22.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                  snapGrid.y = +_this22.resizeSnapGrid.bottom;
                }
              }

              return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */


            function getGrid(coords, snapGrid) {
              return {
                x: Math.ceil(coords.clientX / snapGrid.x),
                y: Math.ceil(coords.clientY / snapGrid.y)
              };
            }

            return (
              /** @type {?} */
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (coords) {
                return [, coords];
              })), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref54) {
                var _ref55 = _slicedToArray(_ref54, 2),
                    previousCoords = _ref55[0],
                    newCoords = _ref55[1];

                return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref56) {
                var _ref57 = _slicedToArray(_ref56, 2),
                    previousCoords = _ref57[0],
                    newCoords = _ref57[1];

                if (!previousCoords) {
                  return true;
                }
                /** @type {?} */


                var snapGrid = getSnapGrid();
                /** @type {?} */

                var previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */

                var newGrid = getGrid(newCoords, snapGrid);
                return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref58) {
                var _ref59 = _slicedToArray(_ref58, 2),
                    newCoords = _ref59[1];

                /** @type {?} */
                var snapGrid = getSnapGrid();
                return {
                  clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                  clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mouseup$, mousedown$)))
            );
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () {
            return !!currentResize;
          }));
          mousedrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref60) {
            var clientX = _ref60.clientX,
                clientY = _ref60.clientY;
            return getNewBoundingRectangle(
            /** @type {?} */
            currentResize.startingRect,
            /** @type {?} */
            currentResize.edges, clientX, clientY);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this22.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
            return _this22.validateResize ? _this22.validateResize({
              rectangle: newBoundingRect,
              edges: getEdgesDiff({
                edges:
                /** @type {?} */
                currentResize.edges,
                initialRectangle:
                /** @type {?} */
                currentResize.startingRect,
                newRectangle: newBoundingRect
              })
            }) : true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
              _this22.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
            }

            _this22.zone.run(function () {
              _this22.resizing.emit({
                edges: getEdgesDiff({
                  edges:
                  /** @type {?} */
                  currentResize.edges,
                  initialRectangle:
                  /** @type {?} */
                  currentResize.startingRect,
                  newRectangle: newBoundingRect
                }),
                rectangle: newBoundingRect
              });
            });

            /** @type {?} */
            currentResize.currentRect = newBoundingRect;
          });
          mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref61) {
            var clientX = _ref61.clientX,
                clientY = _ref61.clientY,
                edges = _ref61.edges;
            return edges || getResizeEdges({
              clientX: clientX,
              clientY: clientY,
              elm: _this22.elm,
              allowedEdges: _this22.resizeEdges,
              cursorPrecision: _this22.resizeCursorPrecision
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (edges) {
            return Object.keys(edges).length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (edges) {
            if (currentResize) {
              removeGhostElement();
            }
            /** @type {?} */


            var startingRect = getElementRect(_this22.elm, _this22.ghostElementPositioning);
            currentResize = {
              edges: edges,
              startingRect: startingRect,
              currentRect: startingRect
            };
            /** @type {?} */

            var resizeCursors = getResizeCursors();
            /** @type {?} */

            var cursor = getResizeCursor(currentResize.edges, resizeCursors);

            _this22.renderer.setStyle(document.body, 'cursor', cursor);

            _this22.setElementClass(_this22.elm, RESIZE_ACTIVE_CLASS, true);

            if (_this22.enableGhostResize) {
              currentResize.clonedNode = _this22.elm.nativeElement.cloneNode(true);

              _this22.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'visibility', 'hidden');

              _this22.renderer.setStyle(currentResize.clonedNode, 'position', _this22.ghostElementPositioning);

              _this22.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

              _this22.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

              _this22.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

              /** @type {?} */
              currentResize.clonedNode.scrollTop =
              /** @type {?} */
              currentResize.startingRect.scrollTop;

              /** @type {?} */
              currentResize.clonedNode.scrollLeft =
              /** @type {?} */
              currentResize.startingRect.scrollLeft;
            }

            _this22.zone.run(function () {
              _this22.resizeStart.emit({
                edges: getEdgesDiff({
                  edges: edges,
                  initialRectangle: startingRect,
                  newRectangle: startingRect
                }),
                rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
              });
            });
          });
          mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function () {
            if (currentResize) {
              _this22.renderer.removeClass(_this22.elm.nativeElement, RESIZE_ACTIVE_CLASS);

              _this22.renderer.setStyle(document.body, 'cursor', '');

              _this22.renderer.setStyle(_this22.elm.nativeElement, 'cursor', '');

              _this22.zone.run(function () {
                _this22.resizeEnd.emit({
                  edges: getEdgesDiff({
                    edges:
                    /** @type {?} */
                    currentResize.edges,
                    initialRectangle:
                    /** @type {?} */
                    currentResize.startingRect,
                    newRectangle:
                    /** @type {?} */
                    currentResize.currentRect
                  }),
                  rectangle:
                  /** @type {?} */
                  currentResize.currentRect
                });
              });

              removeGhostElement();
              currentResize = null;
            }
          });
        }
        /**
         * @hidden
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
          }
        }
        /**
         * @hidden
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // browser check for angular universal, because it doesn't know what document is
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
          }

          this.mousedown.complete();
          this.mouseup.complete();
          this.mousemove.complete();
          this.resizeEdges$.complete();
          this.destroy$.next();
        }
        /**
         * @private
         * @param {?} elm
         * @param {?} name
         * @param {?} add
         * @return {?}
         */

      }, {
        key: "setElementClass",
        value: function setElementClass(elm, name, add) {
          if (add) {
            this.renderer.addClass(elm.nativeElement, name);
          } else {
            this.renderer.removeClass(elm.nativeElement, name);
          }
        }
      }]);

      return ResizableDirective;
    }();

    ResizableDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlResizable]'
      }]
    }];
    /** @nocollapse */

    ResizableDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }];
    };

    ResizableDirective.propDecorators = {
      validateResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      enableGhostResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeSnapGrid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursors: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeCursorPrecision: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      ghostElementPositioning: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      allowNegativeResizes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      mouseMoveThrottleMS: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      resizeStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      resizeEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };

    var PointerEventListeners = /*#__PURE__*/function () {
      _createClass(PointerEventListeners, null, [{
        key: "getInstance",
        // tslint:disable-line

        /**
         * @param {?} renderer
         * @param {?} zone
         * @return {?}
         */
        value: function getInstance(renderer, zone) {
          if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
          }

          return PointerEventListeners.instance;
        }
        /**
         * @param {?} renderer
         * @param {?} zone
         */

      }]);

      function PointerEventListeners(renderer, zone) {
        _classCallCheck(this, PointerEventListeners);

        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseDown;
          /** @type {?} */

          var unsubscribeTouchStart;
          zone.runOutsideAngular(function () {
            unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
              observer.next({
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseDown();
            unsubscribeTouchStart();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseMove;
          /** @type {?} */

          var unsubscribeTouchMove;
          zone.runOutsideAngular(function () {
            unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
              observer.next({
                clientX: event.targetTouches[0].clientX,
                clientY: event.targetTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseMove();
            unsubscribeTouchMove();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
          /** @type {?} */
          var unsubscribeMouseUp;
          /** @type {?} */

          var unsubscribeTouchEnd;
          /** @type {?} */

          var unsubscribeTouchCancel;
          zone.runOutsideAngular(function () {
            unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
              observer.next({
                clientX: event.clientX,
                clientY: event.clientY,
                event: event
              });
            });
            unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
            unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
              observer.next({
                clientX: event.changedTouches[0].clientX,
                clientY: event.changedTouches[0].clientY,
                event: event
              });
            });
          });
          return function () {
            unsubscribeMouseUp();
            unsubscribeTouchEnd();
            unsubscribeTouchCancel();
          };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
      }

      return PointerEventListeners;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
     *
     * For example
     *
     * ```html
     * <div mwlResizable>
     *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
     * </div>
     * ```
     */


    var ResizeHandleDirective = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} zone
       * @param {?} resizable
       */
      function ResizeHandleDirective(renderer, element, zone, resizable) {
        _classCallCheck(this, ResizeHandleDirective);

        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */

        this.resizeEdges = {};
        this.eventListeners = {};
      }
      /**
       * @return {?}
       */


      _createClass(ResizeHandleDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeEventListeners();
        }
        /**
         * @hidden
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousedown",
        value: function onMousedown(event, clientX, clientY) {
          var _this23 = this;

          event.preventDefault();
          this.zone.runOutsideAngular(function () {
            if (!_this23.eventListeners.touchmove) {
              _this23.eventListeners.touchmove = _this23.renderer.listen(_this23.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                _this23.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
              });
            }

            if (!_this23.eventListeners.mousemove) {
              _this23.eventListeners.mousemove = _this23.renderer.listen(_this23.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                _this23.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
              });
            }

            _this23.resizable.mousedown.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this23.resizeEdges
            });
          });
        }
        /**
         * @hidden
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMouseup",
        value: function onMouseup(clientX, clientY) {
          var _this24 = this;

          this.zone.runOutsideAngular(function () {
            _this24.unsubscribeEventListeners();

            _this24.resizable.mouseup.next({
              clientX: clientX,
              clientY: clientY,
              edges: _this24.resizeEdges
            });
          });
        }
        /**
         * @private
         * @param {?} event
         * @param {?} clientX
         * @param {?} clientY
         * @return {?}
         */

      }, {
        key: "onMousemove",
        value: function onMousemove(event, clientX, clientY) {
          this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "unsubscribeEventListeners",
        value: function unsubscribeEventListeners() {
          var _this25 = this;

          Object.keys(this.eventListeners).forEach(function (type) {
            /** @type {?} */
            _this25.eventListeners[type]();

            delete _this25.eventListeners[type];
          });
        }
      }]);

      return ResizeHandleDirective;
    }();

    ResizeHandleDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[mwlResizeHandle]'
      }]
    }];
    /** @nocollapse */

    ResizeHandleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: ResizableDirective
      }];
    };

    ResizeHandleDirective.propDecorators = {
      resizeEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      onMousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
      }],
      onMouseup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
        args: ['mouseup', ['$event.clientX', '$event.clientY']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ResizableModule = function ResizableModule() {
      _classCallCheck(this, ResizableModule);
    };

    ResizableModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        declarations: [ResizableDirective, ResizeHandleDirective],
        exports: [ResizableDirective, ResizeHandleDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-resizable-element.js.map

    /***/
  },

  /***/
  "./node_modules/array-from/index.js":
  /*!******************************************!*\
    !*** ./node_modules/array-from/index.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromIndexJs(module, exports, __webpack_require__) {
    module.exports = typeof Array.from === 'function' ? Array.from : __webpack_require__(
    /*! ./polyfill */
    "./node_modules/array-from/polyfill.js");
    /***/
  },

  /***/
  "./node_modules/array-from/polyfill.js":
  /*!*********************************************!*\
    !*** ./node_modules/array-from/polyfill.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesArrayFromPolyfillJs(module, exports) {
    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    // Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
    module.exports = function () {
      var isCallable = function isCallable(fn) {
        return typeof fn === 'function';
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      var iteratorProp = function iteratorProp(value) {
        if (value != null) {
          if (['string', 'number', 'boolean', 'symbol'].indexOf(typeof value) > -1) {
            return Symbol.iterator;
          } else if (typeof Symbol !== 'undefined' && 'iterator' in Symbol && Symbol.iterator in value) {
            return Symbol.iterator;
          } // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
          else if ('@@iterator' in value) {
              return '@@iterator';
            }
        }
      };

      var getMethod = function getMethod(O, P) {
        // Assert: IsPropertyKey(P) is true.
        if (O != null && P != null) {
          // Let func be GetV(O, P).
          var func = O[P]; // ReturnIfAbrupt(func).
          // If func is either undefined or null, return undefined.

          if (func == null) {
            return void 0;
          } // If IsCallable(func) is false, throw a TypeError exception.


          if (!isCallable(func)) {
            throw new TypeError(func + ' is not a function');
          }

          return func;
        }
      };

      var iteratorStep = function iteratorStep(iterator) {
        // Let result be IteratorNext(iterator).
        // ReturnIfAbrupt(result).
        var result = iterator.next(); // Let done be IteratorComplete(result).
        // ReturnIfAbrupt(done).

        var done = Boolean(result.done); // If done is true, return false.

        if (done) {
          return false;
        } // Return result.


        return result;
      }; // The length property of the from method is 1.


      return function from(items
      /*, mapFn, thisArg */
      ) {
        'use strict'; // 1. Let C be the this value.

        var C = this; // 2. If mapfn is undefined, let mapping be false.

        var mapFn = arguments.length > 1 ? arguments[1] : void 0;
        var T;

        if (typeof mapFn !== 'undefined') {
          // 3. else
          //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          } //   b. If thisArg was supplied, let T be thisArg; else let T
          //      be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          } //   c. Let mapping be true (implied by mapFn)

        }

        var A, k; // 4. Let usingIterator be GetMethod(items, @@iterator).
        // 5. ReturnIfAbrupt(usingIterator).

        var usingIterator = getMethod(items, iteratorProp(items)); // 6. If usingIterator is not undefined, then

        if (usingIterator !== void 0) {
          // a. If IsConstructor(C) is true, then
          //   i. Let A be the result of calling the [[Construct]]
          //      internal method of C with an empty argument list.
          // b. Else,
          //   i. Let A be the result of the abstract operation ArrayCreate
          //      with argument 0.
          // c. ReturnIfAbrupt(A).
          A = isCallable(C) ? Object(new C()) : []; // d. Let iterator be GetIterator(items, usingIterator).

          var iterator = usingIterator.call(items); // e. ReturnIfAbrupt(iterator).

          if (iterator == null) {
            throw new TypeError('Array.from requires an array-like or iterable object');
          } // f. Let k be 0.


          k = 0; // g. Repeat

          var next, nextValue;

          while (true) {
            // i. Let Pk be ToString(k).
            // ii. Let next be IteratorStep(iterator).
            // iii. ReturnIfAbrupt(next).
            next = iteratorStep(iterator); // iv. If next is false, then

            if (!next) {
              // 1. Let setStatus be Set(A, "length", k, true).
              // 2. ReturnIfAbrupt(setStatus).
              A.length = k; // 3. Return A.

              return A;
            } // v. Let nextValue be IteratorValue(next).
            // vi. ReturnIfAbrupt(nextValue)


            nextValue = next.value; // vii. If mapping is true, then
            //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
            //   2. If mappedValue is an abrupt completion, return
            //      IteratorClose(iterator, mappedValue).
            //   3. Let mappedValue be mappedValue.[[value]].
            // viii. Else, let mappedValue be nextValue.
            // ix.  Let defineStatus be the result of
            //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
            // x. [TODO] If defineStatus is an abrupt completion, return
            //    IteratorClose(iterator, defineStatus).

            if (mapFn) {
              A[k] = mapFn.call(T, nextValue, k);
            } else {
              A[k] = nextValue;
            } // xi. Increase k by 1.


            k++;
          } // 7. Assert: items is not an Iterable so assume it is
          //    an array-like object.

        } else {
          // 8. Let arrayLike be ToObject(items).
          var arrayLike = Object(items); // 9. ReturnIfAbrupt(items).

          if (items == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          } // 10. Let len be ToLength(Get(arrayLike, "length")).
          // 11. ReturnIfAbrupt(len).


          var len = toLength(arrayLike.length); // 12. If IsConstructor(C) is true, then
          //     a. Let A be Construct(C, «len»).
          // 13. Else
          //     a. Let A be ArrayCreate(len).
          // 14. ReturnIfAbrupt(A).

          A = isCallable(C) ? Object(new C(len)) : new Array(len); // 15. Let k be 0.

          k = 0; // 16. Repeat, while k < len… (also steps a - h)

          var kValue;

          while (k < len) {
            kValue = arrayLike[k];

            if (mapFn) {
              A[k] = mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }

            k++;
          } // 17. Let setStatus be Set(A, "length", len, true).
          // 18. ReturnIfAbrupt(setStatus).


          A.length = len; // 19. Return A.
        }

        return A;
      };
    }();
    /***/

  },

  /***/
  "./node_modules/calendar-utils/calendar-utils.js":
  /*!*******************************************************!*\
    !*** ./node_modules/calendar-utils/calendar-utils.js ***!
    \*******************************************************/

  /*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getWeekViewEventOffset, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, getDayView, getDayViewHourGrid, EventValidationErrorMessage, validateEvents */

  /***/
  function node_modulesCalendarUtilsCalendarUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
      return DAYS_OF_WEEK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function () {
      return SECONDS_IN_DAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewEventOffset", function () {
      return getWeekViewEventOffset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function () {
      return getEventsInPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function () {
      return getWeekViewHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function () {
      return getDifferenceInDaysWithExclusions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeekView", function () {
      return getWeekView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMonthView", function () {
      return getMonthView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDayView", function () {
      return getDayView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDayViewHourGrid", function () {
      return getDayViewHourGrid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function () {
      return EventValidationErrorMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateEvents", function () {
      return validateEvents;
    });

    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var DAYS_OF_WEEK;

    (function (DAYS_OF_WEEK) {
      DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
      DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
    })(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));

    var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
    var DAYS_IN_WEEK = 7;
    var HOURS_IN_DAY = 24;
    var MINUTES_IN_HOUR = 60;
    var SECONDS_IN_DAY = 60 * 60 * 24;

    function getExcludedSeconds(dateAdapter, _a) {
      var startDate = _a.startDate,
          seconds = _a.seconds,
          excluded = _a.excluded,
          _b = _a.precision,
          precision = _b === void 0 ? 'days' : _b;

      if (excluded.length < 1) {
        return 0;
      }

      var addSeconds = dateAdapter.addSeconds,
          getDay = dateAdapter.getDay,
          addDays = dateAdapter.addDays;
      var endDate = addSeconds(startDate, seconds - 1);
      var dayStart = getDay(startDate);
      var dayEnd = getDay(endDate);
      var result = 0; // Calculated in seconds

      var current = startDate;

      var _loop_1 = function _loop_1() {
        var day = getDay(current);

        if (excluded.some(function (excludedDay) {
          return excludedDay === day;
        })) {
          result += calculateExcludedSeconds(dateAdapter, {
            dayStart: dayStart,
            dayEnd: dayEnd,
            day: day,
            precision: precision,
            startDate: startDate,
            endDate: endDate
          });
        }

        current = addDays(current, 1);
      };

      while (current < endDate) {
        _loop_1();
      }

      return result;
    }

    function calculateExcludedSeconds(dateAdapter, _a) {
      var precision = _a.precision,
          day = _a.day,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          startDate = _a.startDate,
          endDate = _a.endDate;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          endOfDay = dateAdapter.endOfDay,
          startOfDay = dateAdapter.startOfDay;

      if (precision === 'minutes') {
        if (day === dayStart) {
          return differenceInSeconds(endOfDay(startDate), startDate) + 1;
        } else if (day === dayEnd) {
          return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
        }
      }

      return SECONDS_IN_DAY;
    }

    function getWeekViewEventSpan(dateAdapter, _a) {
      var event = _a.event,
          offset = _a.offset,
          startOfWeekDate = _a.startOfWeekDate,
          excluded = _a.excluded,
          _b = _a.precision,
          precision = _b === void 0 ? 'days' : _b,
          totalDaysInView = _a.totalDaysInView;
      var max = dateAdapter.max,
          differenceInSeconds = dateAdapter.differenceInSeconds,
          addDays = dateAdapter.addDays,
          endOfDay = dateAdapter.endOfDay,
          differenceInDays = dateAdapter.differenceInDays;
      var span = SECONDS_IN_DAY;
      var begin = max(event.start, startOfWeekDate);

      if (event.end) {
        switch (precision) {
          case 'minutes':
            span = differenceInSeconds(event.end, begin);
            break;

          default:
            span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
            break;
        }
      }

      var offsetSeconds = offset * SECONDS_IN_DAY;
      var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
      // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

      var secondsInView = totalDaysInView * SECONDS_IN_DAY;

      if (totalLength > secondsInView) {
        span = secondsInView - offsetSeconds;
      }

      span -= getExcludedSeconds(dateAdapter, {
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
      });
      return span / SECONDS_IN_DAY;
    }

    function getWeekViewEventOffset(dateAdapter, _a) {
      var event = _a.event,
          startOfWeekDate = _a.startOfWeek,
          _b = _a.excluded,
          excluded = _b === void 0 ? [] : _b,
          _c = _a.precision,
          precision = _c === void 0 ? 'days' : _c;
      var differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          differenceInSeconds = dateAdapter.differenceInSeconds;

      if (event.start < startOfWeekDate) {
        return 0;
      }

      var offset = 0;

      switch (precision) {
        case 'days':
          offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
          break;

        case 'minutes':
          offset = differenceInSeconds(event.start, startOfWeekDate);
          break;
      }

      offset -= getExcludedSeconds(dateAdapter, {
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
      });
      return Math.abs(offset / SECONDS_IN_DAY);
    }

    function isEventIsPeriod(dateAdapter, _a) {
      var event = _a.event,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      var isSameSecond = dateAdapter.isSameSecond;
      var eventStart = event.start;
      var eventEnd = event.end || event.start;

      if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
      }

      if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
      }

      if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
      }

      if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
        return true;
      }

      if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
        return true;
      }

      return false;
    }

    function getEventsInPeriod(dateAdapter, _a) {
      var events = _a.events,
          periodStart = _a.periodStart,
          periodEnd = _a.periodEnd;
      return events.filter(function (event) {
        return isEventIsPeriod(dateAdapter, {
          event: event,
          periodStart: periodStart,
          periodEnd: periodEnd
        });
      });
    }

    function getWeekDay(dateAdapter, _a) {
      var date = _a.date,
          _b = _a.weekendDays,
          weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
      var startOfDay = dateAdapter.startOfDay,
          isSameDay = dateAdapter.isSameDay,
          getDay = dateAdapter.getDay;
      var today = startOfDay(new Date());
      var day = getDay(date);
      return {
        date: date,
        day: day,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(day) > -1
      };
    }

    function getWeekViewHeader(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _b = _a.excluded,
          excluded = _b === void 0 ? [] : _b,
          weekendDays = _a.weekendDays,
          _c = _a.viewStart,
          viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _c,
          _d = _a.viewEnd,
          viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
      var addDays = dateAdapter.addDays,
          getDay = dateAdapter.getDay;
      var days = [];
      var date = viewStart;

      while (date < viewEnd) {
        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          days.push(getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          }));
        }

        date = addDays(date, 1);
      }

      return days;
    }

    function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
      var date1 = _a.date1,
          date2 = _a.date2,
          excluded = _a.excluded;
      var date = date1;
      var diff = 0;

      while (date < date2) {
        if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
          diff++;
        }

        date = dateAdapter.addDays(date, 1);
      }

      return diff;
    }

    function getAllDayWeekEvents(dateAdapter, _a) {
      var events = _a.events,
          excluded = _a.excluded,
          precision = _a.precision,
          absolutePositionedEvents = _a.absolutePositionedEvents,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd,
          eventsInPeriod = _a.eventsInPeriod;
      var differenceInSeconds = dateAdapter.differenceInSeconds,
          differenceInDays = dateAdapter.differenceInDays;
      var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
        date1: viewStart,
        date2: viewEnd,
        excluded: excluded
      });
      var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
      var eventsMapped = eventsInPeriod.filter(function (event) {
        return event.allDay;
      }).map(function (event) {
        var offset = getWeekViewEventOffset(dateAdapter, {
          event: event,
          startOfWeek: viewStart,
          excluded: excluded,
          precision: precision
        });
        var span = getWeekViewEventSpan(dateAdapter, {
          event: event,
          offset: offset,
          startOfWeekDate: viewStart,
          excluded: excluded,
          precision: precision,
          totalDaysInView: totalDaysInView
        });
        return {
          event: event,
          offset: offset,
          span: span
        };
      }).filter(function (e) {
        return e.offset < maxRange;
      }).filter(function (e) {
        return e.span > 0;
      }).map(function (entry) {
        return {
          event: entry.event,
          offset: entry.offset,
          span: entry.span,
          startsBeforeWeek: entry.event.start < viewStart,
          endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
        };
      }).sort(function (itemA, itemB) {
        var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

        if (startSecondsDiff === 0) {
          return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }

        return startSecondsDiff;
      });
      var allDayEventRows = [];
      var allocatedEvents = [];
      eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
          allocatedEvents.push(event);
          var rowSpan_1 = event.span + event.offset;
          var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
            if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
              var nextEventOffset = nextEvent.offset - rowSpan_1;

              if (!absolutePositionedEvents) {
                nextEvent.offset = nextEventOffset;
              }

              rowSpan_1 += nextEvent.span + nextEventOffset;
              allocatedEvents.push(nextEvent);
              return true;
            }
          });
          var weekEvents = [event].concat(otherRowEvents);
          var id = weekEvents.filter(function (weekEvent) {
            return weekEvent.event.id;
          }).map(function (weekEvent) {
            return weekEvent.event.id;
          }).join('-');
          allDayEventRows.push(__assign({
            row: weekEvents
          }, id ? {
            id: id
          } : {}));
        }
      });
      return allDayEventRows;
    }

    function getWeekViewHourGrid(dateAdapter, _a) {
      var events = _a.events,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekStartsOn = _a.weekStartsOn,
          excluded = _a.excluded,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          viewStart = _a.viewStart,
          viewEnd = _a.viewEnd;
      var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
        viewDate: viewDate,
        hourSegments: hourSegments,
        dayStart: dayStart,
        dayEnd: dayEnd
      });
      var weekDays = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      var setHours = dateAdapter.setHours,
          setMinutes = dateAdapter.setMinutes,
          getHours = dateAdapter.getHours,
          getMinutes = dateAdapter.getMinutes;
      return weekDays.map(function (day) {
        var dayView = getDayView(dateAdapter, {
          events: events,
          viewDate: day.date,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          segmentHeight: segmentHeight,
          eventWidth: 1
        });
        var hours = dayViewHourGrid.map(function (hour) {
          var segments = hour.segments.map(function (segment) {
            var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
            return __assign({}, segment, {
              date: date
            });
          });
          return __assign({}, hour, {
            segments: segments
          });
        });

        function getColumnCount(allEvents, prevOverlappingEvents) {
          var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
            return iEvent.left + 1;
          }));
          var nextOverlappingEvents = allEvents.filter(function (iEvent) {
            return iEvent.left >= columnCount;
          }).filter(function (iEvent) {
            return getOverLappingDayViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
          });

          if (nextOverlappingEvents.length > 0) {
            return getColumnCount(allEvents, nextOverlappingEvents);
          } else {
            return columnCount;
          }
        }

        var mappedEvents = dayView.events.map(function (event) {
          var columnCount = getColumnCount(dayView.events, getOverLappingDayViewEvents(dayView.events, event.top, event.top + event.height));
          var width = 100 / columnCount;
          return __assign({}, event, {
            left: event.left * width,
            width: width
          });
        });
        return {
          hours: hours,
          date: day.date,
          events: mappedEvents.map(function (event) {
            var overLappingEvents = getOverLappingDayViewEvents(mappedEvents.filter(function (otherEvent) {
              return otherEvent.left > event.left;
            }), event.top, event.top + event.height);

            if (overLappingEvents.length > 0) {
              return __assign({}, event, {
                width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
                  return otherEvent.left;
                })) - event.left
              });
            }

            return event;
          })
        };
      });
    }

    function getWeekView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.precision,
          precision = _d === void 0 ? 'days' : _d,
          _e = _a.absolutePositionedEvents,
          absolutePositionedEvents = _e === void 0 ? false : _e,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          weekendDays = _a.weekendDays,
          segmentHeight = _a.segmentHeight,
          _f = _a.viewStart,
          viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _f,
          _g = _a.viewEnd,
          viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
        weekStartsOn: weekStartsOn
      }) : _g;

      if (!events) {
        events = [];
      }

      var startOfDay = dateAdapter.startOfDay,
          endOfDay = dateAdapter.endOfDay;
      viewStart = startOfDay(viewStart);
      viewEnd = endOfDay(viewEnd);
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: viewStart,
        periodEnd: viewEnd
      });
      var header = getWeekViewHeader(dateAdapter, {
        viewDate: viewDate,
        weekStartsOn: weekStartsOn,
        excluded: excluded,
        weekendDays: weekendDays,
        viewStart: viewStart,
        viewEnd: viewEnd
      });
      return {
        allDayEventRows: getAllDayWeekEvents(dateAdapter, {
          events: events,
          excluded: excluded,
          precision: precision,
          absolutePositionedEvents: absolutePositionedEvents,
          viewStart: viewStart,
          viewEnd: viewEnd,
          eventsInPeriod: eventsInPeriod
        }),
        period: {
          events: eventsInPeriod,
          start: header[0].date,
          end: endOfDay(header[header.length - 1].date)
        },
        hourColumns: getWeekViewHourGrid(dateAdapter, {
          events: events,
          viewDate: viewDate,
          hourSegments: hourSegments,
          dayStart: dayStart,
          dayEnd: dayEnd,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          segmentHeight: segmentHeight,
          viewStart: viewStart,
          viewEnd: viewEnd
        })
      };
    }

    function getMonthView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          weekStartsOn = _a.weekStartsOn,
          _c = _a.excluded,
          excluded = _c === void 0 ? [] : _c,
          _d = _a.viewStart,
          viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
          _e = _a.viewEnd,
          viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
          weekendDays = _a.weekendDays;

      if (!events) {
        events = [];
      }

      var startOfWeek = dateAdapter.startOfWeek,
          endOfWeek = dateAdapter.endOfWeek,
          differenceInDays = dateAdapter.differenceInDays,
          startOfDay = dateAdapter.startOfDay,
          addHours = dateAdapter.addHours,
          endOfDay = dateAdapter.endOfDay,
          isSameMonth = dateAdapter.isSameMonth,
          getDay = dateAdapter.getDay,
          getMonth = dateAdapter.getMonth;
      var start = startOfWeek(viewStart, {
        weekStartsOn: weekStartsOn
      });
      var end = endOfWeek(viewEnd, {
        weekStartsOn: weekStartsOn
      });
      var eventsInMonth = getEventsInPeriod(dateAdapter, {
        events: events,
        periodStart: start,
        periodEnd: end
      });
      var initialViewDays = [];
      var previousDate;

      var _loop_2 = function _loop_2(i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;

        if (previousDate) {
          date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

          if (previousDate.getTime() === date.getTime()) {
            // DST change, so need to add 25 hours

            /* istanbul ignore next */
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
          }

          previousDate = date;
        } else {
          date = previousDate = start;
        }

        if (!excluded.some(function (e) {
          return getDay(date) === e;
        })) {
          var day = getWeekDay(dateAdapter, {
            date: date,
            weekendDays: weekendDays
          });
          var eventsInPeriod = getEventsInPeriod(dateAdapter, {
            events: eventsInMonth,
            periodStart: startOfDay(date),
            periodEnd: endOfDay(date)
          });
          day.inMonth = isSameMonth(date, viewDate);
          day.events = eventsInPeriod;
          day.badgeTotal = eventsInPeriod.length;
          initialViewDays.push(day);
        }
      };

      for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
        _loop_2(i);
      }

      var days = [];
      var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

      if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
          var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
          var isRowInMonth = row.some(function (day) {
            return getMonth(day.date) === getMonth(viewDate);
          });

          if (isRowInMonth) {
            days = days.concat(row);
          }
        }
      } else {
        days = initialViewDays;
      }

      var rows = Math.floor(days.length / totalDaysVisibleInWeek);
      var rowOffsets = [];

      for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
      }

      return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
          start: days[0].date,
          end: endOfDay(days[days.length - 1].date),
          events: eventsInMonth
        }
      };
    }

    function getOverLappingDayViewEvents(events, top, bottom) {
      return events.filter(function (previousEvent) {
        var previousEventTop = previousEvent.top;
        var previousEventBottom = previousEvent.top + previousEvent.height;

        if (top < previousEventBottom && previousEventBottom < bottom) {
          return true;
        } else if (top < previousEventTop && previousEventTop < bottom) {
          return true;
        } else if (previousEventTop <= top && bottom <= previousEventBottom) {
          return true;
        }

        return false;
      });
    }

    function getDayView(dateAdapter, _a) {
      var _b = _a.events,
          events = _b === void 0 ? [] : _b,
          viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd,
          eventWidth = _a.eventWidth,
          segmentHeight = _a.segmentHeight;

      if (!events) {
        events = [];
      }

      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          differenceInMinutes = dateAdapter.differenceInMinutes;
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var previousDayEvents = [];
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return !event.allDay;
        }),
        periodStart: startOfView,
        periodEnd: endOfView
      });
      var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
      }).map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = hourSegments * segmentHeight / MINUTES_IN_HOUR;
        var top = 0;

        if (eventStart > startOfView) {
          // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
          var eventOffset = eventStart.getTimezoneOffset();
          var startOffset = startOfView.getTimezoneOffset();
          var diff = startOffset - eventOffset;
          top += differenceInMinutes(eventStart, startOfView) + diff;
        }

        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = differenceInMinutes(endDate, startDate);

        if (!event.end) {
          height = segmentHeight;
        } else {
          height *= hourHeightModifier;
        }

        var bottom = top + height;
        var overlappingPreviousEvents = getOverLappingDayViewEvents(previousDayEvents, top, bottom);
        var left = 0;

        while (overlappingPreviousEvents.some(function (previousEvent) {
          return previousEvent.left === left;
        })) {
          left += eventWidth;
        }

        var dayEvent = {
          event: event,
          height: height,
          width: eventWidth,
          top: top,
          left: left,
          startsBeforeDay: startsBeforeDay,
          endsAfterDay: endsAfterDay
        };
        previousDayEvents.push(dayEvent);
        return dayEvent;
      });
      var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
        return event.left + event.width;
      }));
      var allDayEvents = getEventsInPeriod(dateAdapter, {
        events: events.filter(function (event) {
          return event.allDay;
        }),
        periodStart: startOfDay(startOfView),
        periodEnd: endOfDay(endOfView)
      });
      return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
          events: eventsInPeriod,
          start: startOfView,
          end: endOfView
        }
      };
    }

    function sanitiseHours(hours) {
      return Math.max(Math.min(23, hours), 0);
    }

    function sanitiseMinutes(minutes) {
      return Math.max(Math.min(59, minutes), 0);
    }

    function getDayViewHourGrid(dateAdapter, _a) {
      var viewDate = _a.viewDate,
          hourSegments = _a.hourSegments,
          dayStart = _a.dayStart,
          dayEnd = _a.dayEnd;
      var setMinutes = dateAdapter.setMinutes,
          setHours = dateAdapter.setHours,
          startOfDay = dateAdapter.startOfDay,
          startOfMinute = dateAdapter.startOfMinute,
          endOfDay = dateAdapter.endOfDay,
          addMinutes = dateAdapter.addMinutes,
          addHours = dateAdapter.addHours,
          addDays = dateAdapter.addDays;
      var hours = [];
      var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
      var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
      var segmentDuration = MINUTES_IN_HOUR / hourSegments;
      var startOfViewDay = startOfDay(viewDate);
      var endOfViewDay = endOfDay(viewDate);

      var dateAdjustment = function dateAdjustment(d) {
        return d;
      }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


      if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
        startOfViewDay = addDays(startOfViewDay, 1);
        startOfView = addDays(startOfView, 1);
        endOfView = addDays(endOfView, 1);

        dateAdjustment = function dateAdjustment(d) {
          return addDays(d, -1);
        };
      }

      for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];

        for (var j = 0; j < hourSegments; j++) {
          var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);

          if (date >= startOfView && date < endOfView) {
            segments.push({
              date: dateAdjustment(date),
              displayDate: date,
              isStart: j === 0
            });
          }
        }

        if (segments.length > 0) {
          hours.push({
            segments: segments
          });
        }
      }

      return hours;
    }

    var EventValidationErrorMessage;

    (function (EventValidationErrorMessage) {
      EventValidationErrorMessage["NotArray"] = "Events must be an array";
      EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
      EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
      EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
      EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
    })(EventValidationErrorMessage || (EventValidationErrorMessage = {}));

    function validateEvents(events, log) {
      var isValid = true;

      function isError(msg, event) {
        log(msg, event);
        isValid = false;
      }

      if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
      }

      events.forEach(function (event) {
        if (!event.start) {
          isError(EventValidationErrorMessage.StartPropertyMissing, event);
        } else if (!(event.start instanceof Date)) {
          isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }

        if (event.end) {
          if (!(event.end instanceof Date)) {
            isError(EventValidationErrorMessage.EndPropertyNotDate, event);
          }

          if (event.start > event.end) {
            isError(EventValidationErrorMessage.EndsBeforeStart, event);
          }
        }
      });
      return isValid;
    } //# sourceMappingURL=calendar-utils.js.map

    /***/

  },

  /***/
  "./node_modules/calendar-utils/date-adapters/date-fns/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/calendar-utils/date-adapters/date-fns/index.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCalendarUtilsDateAdaptersDateFnsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var addDays = __webpack_require__(
    /*! date-fns/add_days/index */
    "./node_modules/date-fns/add_days/index.js");

    var addHours = __webpack_require__(
    /*! date-fns/add_hours/index */
    "./node_modules/date-fns/add_hours/index.js");

    var addMinutes = __webpack_require__(
    /*! date-fns/add_minutes/index */
    "./node_modules/date-fns/add_minutes/index.js");

    var addSeconds = __webpack_require__(
    /*! date-fns/add_seconds/index */
    "./node_modules/date-fns/add_seconds/index.js");

    var differenceInDays = __webpack_require__(
    /*! date-fns/difference_in_days/index */
    "./node_modules/date-fns/difference_in_days/index.js");

    var differenceInMinutes = __webpack_require__(
    /*! date-fns/difference_in_minutes/index */
    "./node_modules/date-fns/difference_in_minutes/index.js");

    var differenceInSeconds = __webpack_require__(
    /*! date-fns/difference_in_seconds/index */
    "./node_modules/date-fns/difference_in_seconds/index.js");

    var endOfDay = __webpack_require__(
    /*! date-fns/end_of_day/index */
    "./node_modules/date-fns/end_of_day/index.js");

    var endOfMonth = __webpack_require__(
    /*! date-fns/end_of_month/index */
    "./node_modules/date-fns/end_of_month/index.js");

    var endOfWeek = __webpack_require__(
    /*! date-fns/end_of_week/index */
    "./node_modules/date-fns/end_of_week/index.js");

    var getDay = __webpack_require__(
    /*! date-fns/get_day/index */
    "./node_modules/date-fns/get_day/index.js");

    var getMonth = __webpack_require__(
    /*! date-fns/get_month/index */
    "./node_modules/date-fns/get_month/index.js");

    var isSameDay = __webpack_require__(
    /*! date-fns/is_same_day/index */
    "./node_modules/date-fns/is_same_day/index.js");

    var isSameMonth = __webpack_require__(
    /*! date-fns/is_same_month/index */
    "./node_modules/date-fns/is_same_month/index.js");

    var isSameSecond = __webpack_require__(
    /*! date-fns/is_same_second/index */
    "./node_modules/date-fns/is_same_second/index.js");

    var max = __webpack_require__(
    /*! date-fns/max/index */
    "./node_modules/date-fns/max/index.js");

    var setHours = __webpack_require__(
    /*! date-fns/set_hours/index */
    "./node_modules/date-fns/set_hours/index.js");

    var setMinutes = __webpack_require__(
    /*! date-fns/set_minutes/index */
    "./node_modules/date-fns/set_minutes/index.js");

    var startOfDay = __webpack_require__(
    /*! date-fns/start_of_day/index */
    "./node_modules/date-fns/start_of_day/index.js");

    var startOfMinute = __webpack_require__(
    /*! date-fns/start_of_minute/index */
    "./node_modules/date-fns/start_of_minute/index.js");

    var startOfMonth = __webpack_require__(
    /*! date-fns/start_of_month/index */
    "./node_modules/date-fns/start_of_month/index.js");

    var startOfWeek = __webpack_require__(
    /*! date-fns/start_of_week/index */
    "./node_modules/date-fns/start_of_week/index.js");

    var getHours = __webpack_require__(
    /*! date-fns/get_hours/index */
    "./node_modules/date-fns/get_hours/index.js");

    var getMinutes = __webpack_require__(
    /*! date-fns/get_minutes/index */
    "./node_modules/date-fns/get_minutes/index.js");

    function adapterFactory() {
      return {
        addDays: addDays,
        addHours: addHours,
        addMinutes: addMinutes,
        addSeconds: addSeconds,
        differenceInDays: differenceInDays,
        differenceInMinutes: differenceInMinutes,
        differenceInSeconds: differenceInSeconds,
        endOfDay: endOfDay,
        endOfMonth: endOfMonth,
        endOfWeek: endOfWeek,
        getDay: getDay,
        getMonth: getMonth,
        isSameDay: isSameDay,
        isSameMonth: isSameMonth,
        isSameSecond: isSameSecond,
        max: max,
        setHours: setHours,
        setMinutes: setMinutes,
        startOfDay: startOfDay,
        startOfMinute: startOfMinute,
        startOfMonth: startOfMonth,
        startOfWeek: startOfWeek,
        getHours: getHours,
        getMinutes: getMinutes
      };
    }

    exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/create-point-cb/dist/bundle.js":
  /*!*****************************************************!*\
    !*** ./node_modules/create-point-cb/dist/bundle.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCreatePointCbDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var typeFunc = __webpack_require__(
    /*! type-func */
    "./node_modules/type-func/dist/bundle.js");

    function createPointCB(object, options) {
      // A persistent object (as opposed to returned object) is used to save memory
      // This is good to prevent layout thrashing, or for games, and such
      // NOTE
      // This uses IE fixes which should be OK to remove some day. :)
      // Some speed will be gained by removal of these.
      // pointCB should be saved in a variable on return
      // This allows the usage of element.removeEventListener
      options = options || {};
      var allowUpdate = typeFunc.boolean(options.allowUpdate, true);
      /*if(typeof options.allowUpdate === 'function'){
          allowUpdate = options.allowUpdate;
      }else{
          allowUpdate = function(){return true;};
      }*/

      return function pointCB(event) {
        event = event || window.event; // IE-ism

        object.target = event.target || event.srcElement || event.originalTarget;
        object.element = this;
        object.type = event.type;

        if (!allowUpdate(event)) {
          return;
        } // Support touch
        // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


        if (event.targetTouches) {
          object.x = event.targetTouches[0].clientX;
          object.y = event.targetTouches[0].clientY;
          object.pageX = event.targetTouches[0].pageX;
          object.pageY = event.targetTouches[0].pageY;
          object.screenX = event.targetTouches[0].screenX;
          object.screenY = event.targetTouches[0].screenY;
        } else {
          // If pageX/Y aren't available and clientX/Y are,
          // calculate pageX/Y - logic taken from jQuery.
          // (This is to support old IE)
          // NOTE Hopefully this can be removed soon.
          if (event.pageX === null && event.clientX !== null) {
            var eventDoc = event.target && event.target.ownerDocument || document;
            var doc = eventDoc.documentElement;
            var body = eventDoc.body;
            object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
          } else {
            object.pageX = event.pageX;
            object.pageY = event.pageY;
          } // pageX, and pageY change with page scroll
          // so we're not going to use those for x, and y.
          // NOTE Most browsers also alias clientX/Y with x/y
          // so that's something to consider down the road.


          object.x = event.clientX;
          object.y = event.clientY;
          object.screenX = event.screenX;
          object.screenY = event.screenY;
        }

        object.clientX = object.x;
        object.clientY = object.y;
      }; //NOTE Remember accessibility, Aria roles, and labels.
    }
    /*
    git remote add origin https://github.com/hollowdoor/create_point_cb.git
    git push -u origin master
    */


    module.exports = createPointCB; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-mousemove-dispatcher/dist/bundle.js":
  /*!**************************************************************!*\
    !*** ./node_modules/dom-mousemove-dispatcher/dist/bundle.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomMousemoveDispatcherDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    var objectCreate = void 0;

    if (typeof Object.create != 'function') {
      objectCreate = function (undefined) {
        var Temp = function Temp() {};

        return function (prototype, propertiesObject) {
          if (prototype !== Object(prototype) && prototype !== null) {
            throw TypeError('Argument must be an object, or null');
          }

          Temp.prototype = prototype || {};
          var result = new Temp();
          Temp.prototype = null;

          if (propertiesObject !== undefined) {
            Object.defineProperties(result, propertiesObject);
          } // to imitate the case of Object.create(null)


          if (prototype === null) {
            result.__proto__ = null;
          }

          return result;
        };
      }();
    } else {
      objectCreate = Object.create;
    }

    var objectCreate$1 = objectCreate;
    var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

    function createDispatcher(element) {
      var defaultSettings = {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 1,
        relatedTarget: null,
        region: null
      };

      if (element !== undefined) {
        element.addEventListener('mousemove', onMove);
      }

      function onMove(e) {
        for (var i = 0; i < mouseEventProps.length; i++) {
          defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
        }
      }

      var dispatch = function () {
        if (MouseEvent) {
          return function m1(element, initMove, data) {
            var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEvent === 'function') {
          return function m2(element, initMove, data) {
            var settings = createMoveInit(defaultSettings, initMove);
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent("mousemove", true, //can bubble
            true, //cancelable
            window, //view
            0, //detail
            settings.screenX, //0, //screenX
            settings.screenY, //0, //screenY
            settings.clientX, //80, //clientX
            settings.clientY, //20, //clientY
            settings.ctrlKey, //false, //ctrlKey
            settings.altKey, //false, //altKey
            settings.shiftKey, //false, //shiftKey
            settings.metaKey, //false, //metaKey
            settings.button, //0, //button
            settings.relatedTarget //null //relatedTarget
            ); //evt.dispatched = 'mousemove';

            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        } else if (typeof document.createEventObject === 'function') {
          return function m3(element, initMove, data) {
            var evt = document.createEventObject();
            var settings = createMoveInit(defaultSettings, initMove);

            for (var name in settings) {
              evt[name] = settings[name];
            } //evt.dispatched = 'mousemove';


            setSpecial(evt, data);
            return element.dispatchEvent(evt);
          };
        }
      }();

      function destroy() {
        if (element) element.removeEventListener('mousemove', onMove, false);
        defaultSettings = null;
      }

      return {
        destroy: destroy,
        dispatch: dispatch
      };
    }

    function createMoveInit(defaultSettings, initMove) {
      initMove = initMove || {};
      var settings = objectCreate$1(defaultSettings);

      for (var i = 0; i < mouseEventProps.length; i++) {
        if (initMove[mouseEventProps[i]] !== undefined) settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
      }

      return settings;
    }

    function setSpecial(e, data) {
      console.log('data ', data);
      e.data = data || {};
      e.dispatched = 'mousemove';
    }
    /*
    http://marcgrabanski.com/simulating-mouse-click-events-in-javascript/
    */


    module.exports = createDispatcher; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-plane/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/dom-plane/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomPlaneDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var createPointCb = _interopDefault(__webpack_require__(
    /*! create-point-cb */
    "./node_modules/create-point-cb/dist/bundle.js"));

    function createWindowRect() {
      var props = {
        top: {
          value: 0,
          enumerable: true
        },
        left: {
          value: 0,
          enumerable: true
        },
        right: {
          value: window.innerWidth,
          enumerable: true
        },
        bottom: {
          value: window.innerHeight,
          enumerable: true
        },
        width: {
          value: window.innerWidth,
          enumerable: true
        },
        height: {
          value: window.innerHeight,
          enumerable: true
        },
        x: {
          value: 0,
          enumerable: true
        },
        y: {
          value: 0,
          enumerable: true
        }
      };

      if (Object.create) {
        return Object.create({}, props);
      } else {
        var rect = {};
        Object.defineProperties(rect, props);
        return rect;
      }
    }

    function getClientRect(el) {
      if (el === window) {
        return createWindowRect();
      } else {
        try {
          var rect = el.getBoundingClientRect();

          if (rect.x === undefined) {
            rect.x = rect.left;
            rect.y = rect.top;
          }

          return rect;
        } catch (e) {
          throw new TypeError("Can't call getBoundingClientRect on " + el);
        }
      }
    }

    function pointInside(point, el) {
      var rect = getClientRect(el);
      return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
    }

    exports.createPointCB = createPointCb;
    exports.getClientRect = getClientRect;
    exports.pointInside = pointInside; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/dom-set/dist/bundle.js":
  /*!*********************************************!*\
    !*** ./node_modules/dom-set/dist/bundle.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesDomSetDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var arrayFrom = _interopDefault(__webpack_require__(
    /*! array-from */
    "./node_modules/array-from/index.js"));

    var isArray = _interopDefault(__webpack_require__(
    /*! is-array */
    "./node_modules/is-array/index.js"));

    var isElement = _interopDefault(__webpack_require__(
    /*! iselement */
    "./node_modules/iselement/module/index.js"));

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */


    var isElement$1 = function isElement$1(input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };

    function select(selector) {
      if (typeof selector === 'string') {
        try {
          return document.querySelector(selector);
        } catch (e) {
          throw e;
        }
      } else if (isElement(selector)) {
        return selector;
      }
    }

    function selectAll(selector) {
      if (typeof selector === 'string') {
        return Array.prototype.slice.apply(document.querySelectorAll(selector));
      } else if (isArray(selector)) {
        return selector.map(select);
      } else if ('length' in selector) {
        return arrayFrom(selector).map(select);
      }
    }

    function indexOfElement(elements, element) {
      element = resolveElement(element, true);

      if (!isElement$1(element)) {
        return -1;
      }

      for (var i = 0; i < elements.length; i++) {
        if (elements[i] === element) {
          return i;
        }
      }

      return -1;
    }

    function hasElement(elements, element) {
      return -1 !== indexOfElement(elements, element);
    }

    function domListOf(arr) {
      if (!arr) {
        return [];
      }

      try {
        if (typeof arr === 'string') {
          return arrayFrom(document.querySelectorAll(arr));
        } else if (isArray(arr)) {
          return arr.map(resolveElement);
        } else {
          if (typeof arr.length === 'undefined') {
            return [resolveElement(arr)];
          }

          return arrayFrom(arr, resolveElement);
        }
      } catch (e) {
        throw new Error(e);
      }
    }

    function concatElementLists() {
      var lists = [],
          len = arguments.length;

      while (len--) {
        lists[len] = arguments[len];
      }

      return lists.reduce(function (last, list) {
        return list.length ? last : last.concat(domListOf(list));
      }, []);
    }

    function pushElements(elements, toAdd) {
      for (var i = 0; i < toAdd.length; i++) {
        if (!hasElement(elements, toAdd[i])) {
          elements.push(toAdd[i]);
        }
      }

      return toAdd;
    }

    function addElements(elements) {
      var toAdd = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toAdd[len] = arguments[len + 1];
      }

      toAdd = toAdd.map(resolveElement);
      return pushElements(elements, toAdd);
    }

    function removeElements(elements) {
      var toRemove = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        toRemove[len] = arguments[len + 1];
      }

      return toRemove.map(resolveElement).reduce(function (last, e) {
        var index = indexOfElement(elements, e);

        if (index !== -1) {
          return last.concat(elements.splice(index, 1));
        }

        return last;
      }, []);
    }

    function resolveElement(element, noThrow) {
      if (typeof element === 'string') {
        try {
          return document.querySelector(element);
        } catch (e) {
          throw e;
        }
      }

      if (!isElement$1(element) && !noThrow) {
        throw new TypeError(element + " is not a DOM element.");
      }

      return element;
    }

    exports.indexOfElement = indexOfElement;
    exports.hasElement = hasElement;
    exports.domListOf = domListOf;
    exports.concatElementLists = concatElementLists;
    exports.addElements = addElements;
    exports.removeElements = removeElements;
    exports.resolveElement = resolveElement;
    exports.select = select;
    exports.selectAll = selectAll; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./node_modules/is-array/index.js":
  /*!****************************************!*\
    !*** ./node_modules/is-array/index.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesIsArrayIndexJs(module, exports) {
    /**
     * isArray
     */
    var isArray = Array.isArray;
    /**
     * toString
     */

    var str = Object.prototype.toString;
    /**
     * Whether or not the given `val`
     * is an array.
     *
     * example:
     *
     *        isArray([]);
     *        // > true
     *        isArray(arguments);
     *        // > false
     *        isArray('');
     *        // > false
     *
     * @param {mixed} val
     * @return {bool}
     */

    module.exports = isArray || function (val) {
      return !!val && '[object Array]' == str.call(val);
    };
    /***/

  },

  /***/
  "./node_modules/iselement/module/index.js":
  /*!************************************************!*\
    !*** ./node_modules/iselement/module/index.js ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesIselementModuleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */

    /* harmony default export */


    __webpack_exports__["default"] = function (input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };
    /***/

  },

  /***/
  "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js":
  /*!********************************************************************!*\
    !*** ./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js ***!
    \********************************************************************/

  /*! exports provided: Cmyk, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService, Hsla, Hsva, Rgba, SliderDirective, TextDirective */

  /***/
  function node_modulesNgxColorPickerDistNgxColorPickerEs5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cmyk", function () {
      return Cmyk;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function () {
      return ColorPickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function () {
      return ColorPickerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function () {
      return ColorPickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorPickerService", function () {
      return ColorPickerService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Hsla", function () {
      return Hsla;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Hsva", function () {
      return Hsva;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rgba", function () {
      return Rgba;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderDirective", function () {
      return SliderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextDirective", function () {
      return TextDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var ColorFormats = {
      HEX: 0,
      RGBA: 1,
      HSLA: 2,
      CMYK: 3
    };
    ColorFormats[ColorFormats.HEX] = 'HEX';
    ColorFormats[ColorFormats.RGBA] = 'RGBA';
    ColorFormats[ColorFormats.HSLA] = 'HSLA';
    ColorFormats[ColorFormats.CMYK] = 'CMYK';

    var Rgba =
    /** @class */
    function () {
      function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
      }

      return Rgba;
    }();

    var Hsva =
    /** @class */
    function () {
      function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      }

      return Hsva;
    }();

    var Hsla =
    /** @class */
    function () {
      function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
      }

      return Hsla;
    }();

    var Cmyk =
    /** @class */
    function () {
      function Cmyk(c, m, y, k, a) {
        if (a === void 0) {
          a = 1;
        }

        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
        this.a = a;
      }

      return Cmyk;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function detectIE() {
      /** @type {?} */
      var ua = '';

      if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
      }
      /** @type {?} */


      var msie = ua.indexOf('msie ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      } // Other browser


      return false;
    }

    var TextDirective =
    /** @class */
    function () {
      function TextDirective() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      TextDirective.prototype.inputChange =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var value = event.target.value;

        if (this.rg === undefined) {
          this.newValue.emit(value);
        } else {
          /** @type {?} */
          var numeric = parseFloat(value);
          this.newValue.emit({
            v: numeric,
            rg: this.rg
          });
        }
      };

      TextDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[text]'
        }]
      }];
      TextDirective.propDecorators = {
        rg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        newValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      };
      return TextDirective;
    }();

    var SliderDirective =
    /** @class */
    function () {
      function SliderDirective(elRef) {
        var _this = this;

        this.elRef = elRef;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.listenerMove =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return _this.move(event);
        };

        this.listenerStop =
        /**
        * @return {?}
        */
        function () {
          return _this.stop();
        };
      }
      /**
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.mouseDown =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.start(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.touchStart =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.start(event);
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.move =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        event.preventDefault();
        this.setCursor(event);
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.start =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
      };
      /**
       * @private
       * @return {?}
       */


      SliderDirective.prototype.stop =
      /**
      * @private
      * @return {?}
      */
      function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.getX =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */

        var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.getY =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */

        var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
      };
      /**
       * @private
       * @param {?} event
       * @return {?}
       */


      SliderDirective.prototype.setCursor =
      /**
      * @private
      * @param {?} event
      * @return {?}
      */
      function (event) {
        /** @type {?} */
        var width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */

        var height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */

        var x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */

        var y = Math.max(0, Math.min(this.getY(event), height));

        if (this.rgX !== undefined && this.rgY !== undefined) {
          this.newValue.emit({
            s: x / width,
            v: 1 - y / height,
            rgX: this.rgX,
            rgY: this.rgY
          });
        } else if (this.rgX === undefined && this.rgY !== undefined) {
          this.newValue.emit({
            v: y / height,
            rgY: this.rgY
          });
        } else if (this.rgX !== undefined && this.rgY === undefined) {
          this.newValue.emit({
            v: x / width,
            rgX: this.rgX
          });
        }
      };

      SliderDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[slider]'
        }]
      }];
      /** @nocollapse */

      SliderDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SliderDirective.propDecorators = {
        rgX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rgY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        newValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        touchStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }]
      };
      return SliderDirective;
    }();

    var SliderPosition =
    /** @class */
    function () {
      function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      }

      return SliderPosition;
    }();

    var SliderDimension =
    /** @class */
    function () {
      function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
      }

      return SliderDimension;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerService =
    /** @class */
    function () {
      function ColorPickerService() {
        this.active = null;
      }
      /**
       * @param {?} active
       * @return {?}
       */


      ColorPickerService.prototype.setActive =
      /**
      * @param {?} active
      * @return {?}
      */
      function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
          this.active.closeDialog();
        }

        this.active = active;
      };
      /**
       * @param {?} hsva
       * @return {?}
       */


      ColorPickerService.prototype.hsva2hsla =
      /**
      * @param {?} hsva
      * @return {?}
      */
      function (hsva) {
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */

        var s = hsva.s;
        /** @type {?} */

        var v = hsva.v;
        /** @type {?} */

        var a = hsva.a;

        if (v === 0) {
          return new Hsla(h, 0, 0, a);
        } else if (s === 0 && v === 1) {
          return new Hsla(h, 1, 1, a);
        } else {
          /** @type {?} */
          var l = v * (2 - s) / 2;
          return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
      };
      /**
       * @param {?} hsla
       * @return {?}
       */


      ColorPickerService.prototype.hsla2hsva =
      /**
      * @param {?} hsla
      * @return {?}
      */
      function (hsla) {
        /** @type {?} */
        var h = Math.min(hsla.h, 1);
        /** @type {?} */

        var s = Math.min(hsla.s, 1);
        /** @type {?} */

        var l = Math.min(hsla.l, 1);
        /** @type {?} */

        var a = Math.min(hsla.a, 1);

        if (l === 0) {
          return new Hsva(h, 0, 0, a);
        } else {
          /** @type {?} */
          var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
          return new Hsva(h, 2 * (v - l) / v, v, a);
        }
      };
      /**
       * @param {?} hsva
       * @return {?}
       */


      ColorPickerService.prototype.hsvaToRgba =
      /**
      * @param {?} hsva
      * @return {?}
      */
      function (hsva) {
        /** @type {?} */
        var r;
        /** @type {?} */

        var g;
        /** @type {?} */

        var b;
        /** @type {?} */

        var h = hsva.h;
        /** @type {?} */

        var s = hsva.s;
        /** @type {?} */

        var v = hsva.v;
        /** @type {?} */

        var a = hsva.a;
        /** @type {?} */

        var i = Math.floor(h * 6);
        /** @type {?} */

        var f = h * 6 - i;
        /** @type {?} */

        var p = v * (1 - s);
        /** @type {?} */

        var q = v * (1 - f * s);
        /** @type {?} */

        var t = v * (1 - (1 - f) * s);

        switch (i % 6) {
          case 0:
            r = v, g = t, b = p;
            break;

          case 1:
            r = q, g = v, b = p;
            break;

          case 2:
            r = p, g = v, b = t;
            break;

          case 3:
            r = p, g = q, b = v;
            break;

          case 4:
            r = t, g = p, b = v;
            break;

          case 5:
            r = v, g = p, b = q;
            break;

          default:
            r = 0, g = 0, b = 0;
        }

        return new Rgba(r, g, b, a);
      };
      /**
       * @param {?} cmyk
       * @return {?}
       */


      ColorPickerService.prototype.cmykToRgb =
      /**
      * @param {?} cmyk
      * @return {?}
      */
      function (cmyk) {
        /** @type {?} */
        var r = (1 - cmyk.c) * (1 - cmyk.k);
        /** @type {?} */

        var g = (1 - cmyk.m) * (1 - cmyk.k);
        /** @type {?} */

        var b = (1 - cmyk.y) * (1 - cmyk.k);
        return new Rgba(r, g, b, cmyk.a);
      };
      /**
       * @param {?} rgba
       * @return {?}
       */


      ColorPickerService.prototype.rgbaToCmyk =
      /**
      * @param {?} rgba
      * @return {?}
      */
      function (rgba) {
        /** @type {?} */
        var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);

        if (k === 1) {
          return new Cmyk(0, 0, 0, 1, rgba.a);
        } else {
          /** @type {?} */
          var c = (1 - rgba.r - k) / (1 - k);
          /** @type {?} */

          var m = (1 - rgba.g - k) / (1 - k);
          /** @type {?} */

          var y = (1 - rgba.b - k) / (1 - k);
          return new Cmyk(c, m, y, k, rgba.a);
        }
      };
      /**
       * @param {?} rgba
       * @return {?}
       */


      ColorPickerService.prototype.rgbaToHsva =
      /**
      * @param {?} rgba
      * @return {?}
      */
      function (rgba) {
        /** @type {?} */
        var h;
        /** @type {?} */

        var s;
        /** @type {?} */

        var r = Math.min(rgba.r, 1);
        /** @type {?} */

        var g = Math.min(rgba.g, 1);
        /** @type {?} */

        var b = Math.min(rgba.b, 1);
        /** @type {?} */

        var a = Math.min(rgba.a, 1);
        /** @type {?} */

        var max = Math.max(r, g, b);
        /** @type {?} */

        var min = Math.min(r, g, b);
        /** @type {?} */

        var v = max;
        /** @type {?} */

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if (max === min) {
          h = 0;
        } else {
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;

            case g:
              h = (b - r) / d + 2;
              break;

            case b:
              h = (r - g) / d + 4;
              break;

            default:
              h = 0;
          }

          h /= 6;
        }

        return new Hsva(h, s, v, a);
      };
      /**
       * @param {?} rgba
       * @param {?=} allowHex8
       * @return {?}
       */


      ColorPickerService.prototype.rgbaToHex =
      /**
      * @param {?} rgba
      * @param {?=} allowHex8
      * @return {?}
      */
      function (rgba, allowHex8) {
        /* tslint:disable:no-bitwise */

        /** @type {?} */
        var hex = '#' + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);

        if (allowHex8) {
          hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */


        return hex;
      };
      /**
       * @param {?} cmyk
       * @return {?}
       */


      ColorPickerService.prototype.normalizeCMYK =
      /**
      * @param {?} cmyk
      * @return {?}
      */
      function (cmyk) {
        return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
      };
      /**
       * @param {?} cmyk
       * @return {?}
       */


      ColorPickerService.prototype.denormalizeCMYK =
      /**
      * @param {?} cmyk
      * @return {?}
      */
      function (cmyk) {
        return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
      };
      /**
       * @param {?} rgba
       * @return {?}
       */


      ColorPickerService.prototype.denormalizeRGBA =
      /**
      * @param {?} rgba
      * @return {?}
      */
      function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
      };
      /**
       * @param {?=} colorString
       * @param {?=} allowHex8
       * @return {?}
       */


      ColorPickerService.prototype.stringToHsva =
      /**
      * @param {?=} colorString
      * @param {?=} allowHex8
      * @return {?}
      */
      function (colorString, allowHex8) {
        if (colorString === void 0) {
          colorString = '';
        }

        if (allowHex8 === void 0) {
          allowHex8 = false;
        }
        /** @type {?} */


        var hsva = null;
        colorString = (colorString || '').toLowerCase();
        /** @type {?} */

        var stringParsers = [{
          re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
          parse:
          /**
          * @param {?} execResult
          * @return {?}
          */
          function parse(execResult) {
            return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
          }
        }, {
          re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
          parse:
          /**
          * @param {?} execResult
          * @return {?}
          */
          function parse(execResult) {
            return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
          }
        }];

        if (allowHex8) {
          stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
            parse:
            /**
            * @param {?} execResult
            * @return {?}
            */
            function parse(execResult) {
              return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
            }
          });
        } else {
          stringParsers.push({
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
            parse:
            /**
            * @param {?} execResult
            * @return {?}
            */
            function parse(execResult) {
              return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
            }
          });
        }

        stringParsers.push({
          re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
          parse:
          /**
          * @param {?} execResult
          * @return {?}
          */
          function parse(execResult) {
            return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
          }
        });

        for (var key in stringParsers) {
          if (stringParsers.hasOwnProperty(key)) {
            /** @type {?} */
            var parser = stringParsers[key];
            /** @type {?} */

            var match = parser.re.exec(colorString);
            /** @type {?} */

            var color = match && parser.parse(match);

            if (color) {
              if (color instanceof Rgba) {
                hsva = this.rgbaToHsva(color);
              } else if (color instanceof Hsla) {
                hsva = this.hsla2hsva(color);
              }

              return hsva;
            }
          }
        }

        return hsva;
      };
      /**
       * @param {?} hsva
       * @param {?} outputFormat
       * @param {?} alphaChannel
       * @return {?}
       */


      ColorPickerService.prototype.outputFormat =
      /**
      * @param {?} hsva
      * @param {?} outputFormat
      * @param {?} alphaChannel
      * @return {?}
      */
      function (hsva, outputFormat, alphaChannel) {
        if (outputFormat === 'auto') {
          outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
        }

        switch (outputFormat) {
          case 'hsla':
            /** @type {?} */
            var hsla = this.hsva2hsla(hsva);
            /** @type {?} */

            var hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);

            if (hsva.a < 1 || alphaChannel === 'always') {
              return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
            } else {
              return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
            }

          case 'rgba':
            /** @type {?} */
            var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));

            if (hsva.a < 1 || alphaChannel === 'always') {
              return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
            } else {
              return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            }

          default:
            /** @type {?} */
            var allowHex8 = alphaChannel === 'always' || alphaChannel === 'forced';
            return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
      };

      ColorPickerService.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];
      /** @nocollapse */

      ColorPickerService.ctorParameters = function () {
        return [];
      };

      return ColorPickerService;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerComponent =
    /** @class */
    function () {
      function ColorPickerComponent(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
        this.useRootViewContainer = false;
      }
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.handleEsc =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
          this.onCancelColor(event);
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.handleEnter =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
          this.onAcceptColor(event);
        }
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.ngOnInit =
      /**
      * @return {?}
      */
      function () {
        var _this = this;

        this.slider = new SliderPosition(0, 0, 0, 0);
        /** @type {?} */

        var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        /** @type {?} */

        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);

        if (this.cpCmykEnabled) {
          this.format = ColorFormats.CMYK;
        } else if (this.cpOutputFormat === 'rgba') {
          this.format = ColorFormats.RGBA;
        } else if (this.cpOutputFormat === 'hsla') {
          this.format = ColorFormats.HSLA;
        } else {
          this.format = ColorFormats.HEX;
        }

        this.listenerMouseDown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          _this.onMouseDown(event);
        };

        this.listenerResize =
        /**
        * @return {?}
        */
        function () {
          _this.onResize();
        };

        this.openDialog(this.initialColor, false);
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.ngOnDestroy =
      /**
      * @return {?}
      */
      function () {
        this.closeDialog();
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.ngAfterViewInit =
      /**
      * @return {?}
      */
      function () {
        if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
          /** @type {?} */
          var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
          /** @type {?} */

          var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
          this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
          this.updateColorPicker(false);
          this.cdRef.detectChanges();
        }
      };
      /**
       * @param {?} color
       * @param {?=} emit
       * @return {?}
       */


      ColorPickerComponent.prototype.openDialog =
      /**
      * @param {?} color
      * @param {?=} emit
      * @return {?}
      */
      function (color, emit) {
        if (emit === void 0) {
          emit = true;
        }

        this.service.setActive(this);

        if (!this.width) {
          this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }

        if (!this.height) {
          this.height = 320;
        }

        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.closeDialog =
      /**
      * @return {?}
      */
      function () {
        this.closeColorPicker();
      };
      /**
       * @param {?} instance
       * @param {?} elementRef
       * @param {?} color
       * @param {?} cpWidth
       * @param {?} cpHeight
       * @param {?} cpDialogDisplay
       * @param {?} cpFallbackColor
       * @param {?} cpColorMode
       * @param {?} cpCmykEnabled
       * @param {?} cpAlphaChannel
       * @param {?} cpOutputFormat
       * @param {?} cpDisableInput
       * @param {?} cpIgnoredElements
       * @param {?} cpSaveClickOutside
       * @param {?} cpCloseClickOutside
       * @param {?} cpUseRootViewContainer
       * @param {?} cpPosition
       * @param {?} cpPositionOffset
       * @param {?} cpPositionRelativeToArrow
       * @param {?} cpPresetLabel
       * @param {?} cpPresetColors
       * @param {?} cpMaxPresetColorsLength
       * @param {?} cpPresetEmptyMessage
       * @param {?} cpPresetEmptyMessageClass
       * @param {?} cpOKButton
       * @param {?} cpOKButtonClass
       * @param {?} cpOKButtonText
       * @param {?} cpCancelButton
       * @param {?} cpCancelButtonClass
       * @param {?} cpCancelButtonText
       * @param {?} cpAddColorButton
       * @param {?} cpAddColorButtonClass
       * @param {?} cpAddColorButtonText
       * @param {?} cpRemoveColorButtonClass
       * @return {?}
       */


      ColorPickerComponent.prototype.setupDialog =
      /**
      * @param {?} instance
      * @param {?} elementRef
      * @param {?} color
      * @param {?} cpWidth
      * @param {?} cpHeight
      * @param {?} cpDialogDisplay
      * @param {?} cpFallbackColor
      * @param {?} cpColorMode
      * @param {?} cpCmykEnabled
      * @param {?} cpAlphaChannel
      * @param {?} cpOutputFormat
      * @param {?} cpDisableInput
      * @param {?} cpIgnoredElements
      * @param {?} cpSaveClickOutside
      * @param {?} cpCloseClickOutside
      * @param {?} cpUseRootViewContainer
      * @param {?} cpPosition
      * @param {?} cpPositionOffset
      * @param {?} cpPositionRelativeToArrow
      * @param {?} cpPresetLabel
      * @param {?} cpPresetColors
      * @param {?} cpMaxPresetColorsLength
      * @param {?} cpPresetEmptyMessage
      * @param {?} cpPresetEmptyMessageClass
      * @param {?} cpOKButton
      * @param {?} cpOKButtonClass
      * @param {?} cpOKButtonText
      * @param {?} cpCancelButton
      * @param {?} cpCancelButtonClass
      * @param {?} cpCancelButtonText
      * @param {?} cpAddColorButton
      * @param {?} cpAddColorButtonClass
      * @param {?} cpAddColorButtonText
      * @param {?} cpRemoveColorButtonClass
      * @return {?}
      */
      function (instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
        this.setInitialColor(color);
        this.setColorMode(cpColorMode);
        this.isIE10 = detectIE() === 10;
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpCmykEnabled = cpCmykEnabled;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpCloseClickOutside = cpCloseClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;

        if (!cpPositionRelativeToArrow) {
          this.dialogArrowOffset = 0;
        }

        if (cpDialogDisplay === 'inline') {
          this.dialogArrowSize = 0;
          this.dialogArrowOffset = 0;
        }

        if (cpOutputFormat === 'hex' && cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
          this.cpAlphaChannel = 'disabled';
        }
      };
      /**
       * @param {?} mode
       * @return {?}
       */


      ColorPickerComponent.prototype.setColorMode =
      /**
      * @param {?} mode
      * @return {?}
      */
      function (mode) {
        switch (mode.toString().toUpperCase()) {
          case '1':
          case 'C':
          case 'COLOR':
            this.cpColorMode = 1;
            break;

          case '2':
          case 'G':
          case 'GRAYSCALE':
            this.cpColorMode = 2;
            break;

          case '3':
          case 'P':
          case 'PRESETS':
            this.cpColorMode = 3;
            break;

          default:
            this.cpColorMode = 1;
        }
      };
      /**
       * @param {?} color
       * @return {?}
       */


      ColorPickerComponent.prototype.setInitialColor =
      /**
      * @param {?} color
      * @return {?}
      */
      function (color) {
        this.initialColor = color;
      };
      /**
       * @param {?} cpPresetLabel
       * @param {?} cpPresetColors
       * @return {?}
       */


      ColorPickerComponent.prototype.setPresetConfig =
      /**
      * @param {?} cpPresetLabel
      * @param {?} cpPresetColors
      * @return {?}
      */
      function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
      };
      /**
       * @param {?} value
       * @param {?=} emit
       * @param {?=} update
       * @return {?}
       */


      ColorPickerComponent.prototype.setColorFromString =
      /**
      * @param {?} value
      * @param {?=} emit
      * @param {?=} update
      * @return {?}
      */
      function (value, emit, update) {
        if (emit === void 0) {
          emit = true;
        }

        if (update === void 0) {
          update = true;
        }
        /** @type {?} */


        var hsva;

        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
          hsva = this.service.stringToHsva(value, true);

          if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(value, false);
          }
        } else {
          hsva = this.service.stringToHsva(value, false);
        }

        if (!hsva && !this.hsva) {
          hsva = this.service.stringToHsva(this.fallbackColor, false);
        }

        if (hsva) {
          this.hsva = hsva;
          this.sliderH = this.hsva.h;

          if (this.cpOutputFormat === 'hex' && this.cpAlphaChannel === 'disabled') {
            this.hsva.a = 1;
          }

          this.updateColorPicker(emit, update);
        }
      };
      /**
       * @return {?}
       */


      ColorPickerComponent.prototype.onResize =
      /**
      * @return {?}
      */
      function () {
        if (this.position === 'fixed') {
          this.setDialogPosition();
        } else if (this.cpDialogDisplay !== 'inline') {
          this.closeColorPicker();
        }
      };
      /**
       * @param {?} slider
       * @return {?}
       */


      ColorPickerComponent.prototype.onDragEnd =
      /**
      * @param {?} slider
      * @return {?}
      */
      function (slider) {
        this.directiveInstance.sliderDragEnd({
          slider: slider,
          color: this.outputColor
        });
      };
      /**
       * @param {?} slider
       * @return {?}
       */


      ColorPickerComponent.prototype.onDragStart =
      /**
      * @param {?} slider
      * @return {?}
      */
      function (slider) {
        this.directiveInstance.sliderDragStart({
          slider: slider,
          color: this.outputColor
        });
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.onMouseDown =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.show && !this.isIE10 && this.cpDialogDisplay === 'popup' && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item === event.target;
        }).length === 0) {
          if (this.cpSaveClickOutside) {
            this.directiveInstance.colorSelected(this.outputColor);
          } else {
            this.setColorFromString(this.initialColor, false);

            if (this.cpCmykEnabled) {
              this.directiveInstance.cmykChanged(this.cmykColor);
            }

            this.directiveInstance.colorChanged(this.outputColor);
          }

          if (this.cpCloseClickOutside) {
            this.closeColorPicker();
          }
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.onAcceptColor =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        event.stopPropagation();

        if (this.outputColor) {
          this.directiveInstance.colorSelected(this.outputColor);
        }

        if (this.cpDialogDisplay === 'popup') {
          this.closeColorPicker();
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerComponent.prototype.onCancelColor =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);

        if (this.cpDialogDisplay === 'popup') {
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }

          this.directiveInstance.colorChanged(this.outputColor, true);
          this.closeColorPicker();
        }

        this.directiveInstance.colorCanceled();
      };
      /**
       * @param {?} change
       * @return {?}
       */


      ColorPickerComponent.prototype.onFormatToggle =
      /**
      * @param {?} change
      * @return {?}
      */
      function (change) {
        /** @type {?} */
        var availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
        /** @type {?} */

        var nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onColorChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'lightness',
          value: this.hsva.v,
          color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
          slider: 'saturation',
          value: this.hsva.s,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onHueChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'hue',
          value: this.hsva.h,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onValueChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'value',
          value: this.hsva.v,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onAlphaChange =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
          slider: 'alpha',
          value: this.hsva.a,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onHexInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        if (value === null) {
          this.updateColorPicker();
        } else {
          if (value && value[0] !== '#') {
            value = '#' + value;
          }
          /** @type {?} */


          var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;

          if (this.cpAlphaChannel === 'always') {
            validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
          }
          /** @type {?} */


          var valid = validHex.test(value);

          if (valid) {
            if (value.length < 5) {
              value = '#' + value.substring(1).split('').map(
              /**
              * @param {?} c
              * @return {?}
              */
              function (c) {
                return c + c;
              }).join('');
            }

            if (this.cpAlphaChannel === 'forced') {
              value += Math.round(this.hsva.a * 255).toString(16);
            }

            this.setColorFromString(value, true, false);
          }

          this.directiveInstance.inputChanged({
            input: 'hex',
            valid: valid,
            value: value,
            color: this.outputColor
          });
        }
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onRedInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          rgba.r = value.v / value.rg;
          this.hsva = this.service.rgbaToHsva(rgba);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'red',
          valid: valid,
          value: rgba.r,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onBlueInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          rgba.b = value.v / value.rg;
          this.hsva = this.service.rgbaToHsva(rgba);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'blue',
          valid: valid,
          value: rgba.b,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onGreenInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          rgba.g = value.v / value.rg;
          this.hsva = this.service.rgbaToHsva(rgba);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'green',
          valid: valid,
          value: rgba.g,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onHueInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.hsva.h = value.v / value.rg;
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'hue',
          valid: valid,
          value: this.hsva.h,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onValueInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.hsva.v = value.v / value.rg;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'value',
          valid: valid,
          value: this.hsva.v,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onAlphaInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.hsva.a = value.v / value.rg;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'alpha',
          valid: valid,
          value: this.hsva.a,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onLightnessInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          hsla.l = value.v / value.rg;
          this.hsva = this.service.hsla2hsva(hsla);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'lightness',
          valid: valid,
          value: hsla.l,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onSaturationInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */

        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          hsla.s = value.v / value.rg;
          this.hsva = this.service.hsla2hsva(hsla);
          this.sliderH = this.hsva.h;
          this.updateColorPicker();
        }

        this.directiveInstance.inputChanged({
          input: 'saturation',
          valid: valid,
          value: hsla.s,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onCyanInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.c = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'cyan',
          valid: true,
          value: this.cmyk.c,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onMagentaInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.m = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'magenta',
          valid: true,
          value: this.cmyk.m,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onYellowInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.y = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'yellow',
          valid: true,
          value: this.cmyk.y,
          color: this.outputColor
        });
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onBlackInput =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;

        if (valid) {
          this.cmyk.k = value.v;
          this.updateColorPicker(false, true, true);
        }

        this.directiveInstance.inputChanged({
          input: 'black',
          valid: true,
          value: this.cmyk.k,
          color: this.outputColor
        });
      };
      /**
       * @param {?} event
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onAddPresetColor =
      /**
      * @param {?} event
      * @param {?} value
      * @return {?}
      */
      function (event, value) {
        event.stopPropagation();

        if (!this.cpPresetColors.filter(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return color === value;
        }).length) {
          this.cpPresetColors = this.cpPresetColors.concat(value);
          this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
      };
      /**
       * @param {?} event
       * @param {?} value
       * @return {?}
       */


      ColorPickerComponent.prototype.onRemovePresetColor =
      /**
      * @param {?} event
      * @param {?} value
      * @return {?}
      */
      function (event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter(
        /**
        * @param {?} color
        * @return {?}
        */
        function (color) {
          return color !== value;
        });
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
      }; // Private helper functions for the color picker dialog status
      // Private helper functions for the color picker dialog status

      /**
       * @private
       * @return {?}
       */


      ColorPickerComponent.prototype.openColorPicker = // Private helper functions for the color picker dialog status

      /**
       * @private
       * @return {?}
       */
      function () {
        var _this = this;

        if (!this.show) {
          this.show = true;
          this.hidden = true;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this.hidden = false;

            _this.setDialogPosition();

            _this.cdRef.detectChanges();
          }, 0);
          this.directiveInstance.stateChanged(true);

          if (!this.isIE10) {
            document.addEventListener('mousedown', this.listenerMouseDown);
            document.addEventListener('touchstart', this.listenerMouseDown);
          }

          window.addEventListener('resize', this.listenerResize);
        }
      };
      /**
       * @private
       * @return {?}
       */


      ColorPickerComponent.prototype.closeColorPicker =
      /**
      * @private
      * @return {?}
      */
      function () {
        if (this.show) {
          this.show = false;
          this.directiveInstance.stateChanged(false);

          if (!this.isIE10) {
            document.removeEventListener('mousedown', this.listenerMouseDown);
            document.removeEventListener('touchstart', this.listenerMouseDown);
          }

          window.removeEventListener('resize', this.listenerResize);

          if (!this.cdRef['destroyed']) {
            this.cdRef.detectChanges();
          }
        }
      };
      /**
       * @private
       * @param {?=} emit
       * @param {?=} update
       * @param {?=} cmykInput
       * @return {?}
       */


      ColorPickerComponent.prototype.updateColorPicker =
      /**
      * @private
      * @param {?=} emit
      * @param {?=} update
      * @param {?=} cmykInput
      * @return {?}
      */
      function (emit, update, cmykInput) {
        if (emit === void 0) {
          emit = true;
        }

        if (update === void 0) {
          update = true;
        }

        if (cmykInput === void 0) {
          cmykInput = false;
        }

        if (this.sliderDimMax) {
          if (this.cpColorMode === 2) {
            this.hsva.s = 0;
          }
          /** @type {?} */


          var hue = void 0;
          /** @type {?} */

          var hsla = void 0;
          /** @type {?} */

          var rgba = void 0;
          /** @type {?} */

          var lastOutput = this.outputColor;
          hsla = this.service.hsva2hsla(this.hsva);

          if (!this.cpCmykEnabled) {
            rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
          } else {
            if (!cmykInput) {
              rgba = this.service.hsvaToRgba(this.hsva);
              this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
            } else {
              rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
              this.hsva = this.service.rgbaToHsva(rgba);
            }

            rgba = this.service.denormalizeRGBA(rgba);
            this.sliderH = this.hsva.h;
          }

          hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));

          if (update) {
            this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
            this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);

            if (this.cpCmykEnabled) {
              this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
            }
            /** @type {?} */


            var allowHex8 = this.cpAlphaChannel === 'always';
            this.hexText = this.service.rgbaToHex(rgba, allowHex8);
            this.hexAlpha = this.rgbaText.a;
          }

          if (this.cpOutputFormat === 'auto') {
            if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK) {
              if (this.hsva.a < 1) {
                this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
              }
            }
          }

          this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
          this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
          this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
          this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);

          if (this.format !== ColorFormats.CMYK) {
            this.cmykColor = '';
          } else {
            if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'enabled' || this.cpAlphaChannel === 'forced') {
              /** @type {?} */
              var alpha = Math.round(this.cmyk.a * 100) / 100;
              this.cmykColor = "cmyka(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + "," + alpha + ")";
            } else {
              this.cmykColor = "cmyk(" + this.cmyk.c + "," + this.cmyk.m + "," + this.cmyk.y + "," + this.cmyk.k + ")";
            }
          }

          this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);

          if (emit && lastOutput !== this.outputColor) {
            if (this.cpCmykEnabled) {
              this.directiveInstance.cmykChanged(this.cmykColor);
            }

            this.directiveInstance.colorChanged(this.outputColor);
          }
        }
      }; // Private helper functions for the color picker dialog positioning
      // Private helper functions for the color picker dialog positioning

      /**
       * @private
       * @return {?}
       */


      ColorPickerComponent.prototype.setDialogPosition = // Private helper functions for the color picker dialog positioning

      /**
       * @private
       * @return {?}
       */
      function () {
        if (this.cpDialogDisplay === 'inline') {
          this.position = 'relative';
        } else {
          /** @type {?} */
          var position = 'static';
          /** @type {?} */

          var transform = '';
          /** @type {?} */

          var style = void 0;
          /** @type {?} */

          var parentNode = null;
          /** @type {?} */

          var transformNode = null;
          /** @type {?} */

          var node = this.directiveElementRef.nativeElement.parentNode;
          /** @type {?} */

          var dialogHeight = this.dialogElement.nativeElement.offsetHeight;

          while (node !== null && node.tagName !== 'HTML') {
            style = window.getComputedStyle(node);
            position = style.getPropertyValue('position');
            transform = style.getPropertyValue('transform');

            if (position !== 'static' && parentNode === null) {
              parentNode = node;
            }

            if (transform && transform !== 'none' && transformNode === null) {
              transformNode = node;
            }

            if (position === 'fixed') {
              parentNode = transformNode;
              break;
            }

            node = node.parentNode;
          }
          /** @type {?} */


          var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== 'fixed');

          if (this.useRootViewContainer || position === 'fixed' && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
            this.top = boxDirective.top;
            this.left = boxDirective.left;
          } else {
            if (parentNode === null) {
              parentNode = node;
            }
            /** @type {?} */


            var boxParent = this.createDialogBox(parentNode, position !== 'fixed');
            this.top = boxDirective.top - boxParent.top;
            this.left = boxDirective.left - boxParent.left;
          }

          if (position === 'fixed') {
            this.position = 'fixed';
          }
          /** @type {?} */


          var usePosition = this.cpPosition;

          if (this.cpPosition === 'auto') {
            /** @type {?} */
            var usePositionX = 'right';
            /** @type {?} */

            var usePositionY = 'bottom';
            /** @type {?} */

            var winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            /** @type {?} */

            var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            if (this.left + this.cpWidth > winWidth) {
              usePositionX = 'left';
            }

            if (this.top + dialogHeight > winHeight) {
              usePositionY = 'top';
            }

            usePosition = usePositionX + '-' + usePositionY;
          }

          this.cpUsePosition = usePosition;

          if (this.cpPosition === 'top') {
            this.arrowTop = dialogHeight - 1;
            this.top -= dialogHeight + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          } else if (this.cpPosition === 'bottom') {
            this.top += boxDirective.height + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          } else if (usePosition === 'top-left' || usePosition === 'left-top') {
            this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
            this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          } else if (usePosition === 'top-right' || usePosition === 'right-top') {
            this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
            this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          } else if (this.cpPosition === 'left' || usePosition === 'bottom-left' || usePosition === 'left-bottom') {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left -= this.cpWidth + this.dialogArrowSize - 2;
          } else {
            // this.cpPosition === 'right' || usePosition === 'bottom-right' || usePosition === 'right-bottom'
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left += boxDirective.width + this.dialogArrowSize - 2;
          }
        }
      }; // Private helper functions for the color picker dialog positioning and opening
      // Private helper functions for the color picker dialog positioning and opening

      /**
       * @private
       * @param {?} parent
       * @param {?} child
       * @return {?}
       */


      ColorPickerComponent.prototype.isDescendant = // Private helper functions for the color picker dialog positioning and opening

      /**
       * @private
       * @param {?} parent
       * @param {?} child
       * @return {?}
       */
      function (parent, child) {
        /** @type {?} */
        var node = child.parentNode;

        while (node !== null) {
          if (node === parent) {
            return true;
          }

          node = node.parentNode;
        }

        return false;
      };
      /**
       * @private
       * @param {?} element
       * @param {?} offset
       * @return {?}
       */


      ColorPickerComponent.prototype.createDialogBox =
      /**
      * @private
      * @param {?} element
      * @param {?} offset
      * @return {?}
      */
      function (element, offset) {
        return {
          top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
          left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
          width: element.offsetWidth,
          height: element.offsetHeight
        };
      };

      ColorPickerComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'color-picker',
          template: "<div #dialogPopup class=\"color-picker\" [class.open]=\"show\" [style.display]=\"!show ? 'none' : 'block'\" [style.visibility]=\"hidden ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpUsePosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\xA01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\xA01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"cmyk-text\" [style.display]=\"format !== 3 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.c\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onCyanInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.m\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onMagentaInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.y\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onYellowInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"cmykText?.k\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlackInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"cmykText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n     <div class=\"box\">\n      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\xA01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n\n  cursor: default;\n\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  user-select: none;\n  background-color: #fff;\n}\n\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  font-size: 11px;\n}\n\n.color-picker input {\n  width: 0;\n  height: 26px;\n  min-width: 0;\n\n  font-size: 13px;\n  text-align: center;\n  color: #000;\n}\n\n.color-picker input:invalid,\n.color-picker input:-moz-ui-invalid,\n.color-picker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button,\n.color-picker input::-webkit-outer-spin-button {\n  margin: 0;\n\n  -webkit-appearance: none;\n}\n\n.color-picker .arrow {\n  position: absolute;\n  z-index: 999999;\n\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.color-picker .arrow.arrow-top {\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-bottom {\n  top: -20px;\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-top-left,\n.color-picker .arrow.arrow-left-top {\n  right: -21px;\n  bottom: 8px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-top-right,\n.color-picker .arrow.arrow-right-top {\n  bottom: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-left,\n.color-picker .arrow.arrow-left-bottom,\n.color-picker .arrow.arrow-bottom-left {\n  top: 8px;\n  right: -21px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-right,\n.color-picker .arrow.arrow-right-bottom,\n.color-picker .arrow.arrow-bottom-right {\n  top: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .cursor {\n  position: relative;\n\n  width: 16px;\n  height: 16px;\n  border: #222 solid 2px;\n  border-radius: 50%;\n\n  cursor: default;\n}\n\n.color-picker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.color-picker .left {\n  position: relative;\n\n  padding: 16px 8px;\n}\n\n.color-picker .right {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  padding: 12px 8px;\n}\n\n.color-picker .button-area {\n  padding: 0 16px 16px;\n\n  text-align: right;\n}\n\n.color-picker .preset-area {\n  padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n  overflow: hidden;\n  width: 100%;\n  padding: 4px;\n\n  font-size: 11px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n  position: relative;\n\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 4px 6px 8px;\n  border: #a9a9a9 solid 1px;\n  border-radius: 25%;\n\n  cursor: pointer;\n}\n\n.color-picker .preset-area .preset-empty-message {\n  min-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n\n  font-style: italic;\n  text-align: center;\n}\n\n.color-picker .hex-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box div {\n  float: left;\n\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  text-align: center;\n  color: #555;\n  clear: left;\n}\n\n.color-picker .hex-text .box input {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  padding: 1px;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hex-alpha .box div:first-child,\n.color-picker .hex-alpha .box input:first-child {\n  flex-grow: 3;\n  margin-right: 8px;\n}\n\n.color-picker .cmyk-text,\n.color-picker .hsla-text,\n.color-picker .rgba-text,\n.color-picker .value-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .cmyk-text .box,\n.color-picker .hsla-text .box,\n.color-picker .rgba-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .value-text .box {\n  padding: 0 8px 8px;\n}\n\n.color-picker .cmyk-text .box div,\n.color-picker .hsla-text .box div,\n.color-picker .rgba-text .box div,\n.color-picker .value-text .box div {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  margin-right: 8px;\n\n  text-align: center;\n  color: #555;\n}\n\n.color-picker .cmyk-text .box div:last-child,\n.color-picker .hsla-text .box div:last-child,\n.color-picker .rgba-text .box div:last-child,\n.color-picker .value-text .box div:last-child {\n  margin-right: 0;\n}\n\n.color-picker .cmyk-text .box input,\n.color-picker .hsla-text .box input,\n.color-picker .rgba-text .box input,\n.color-picker .value-text .box input {\n  float: left;\n\n  -webkit-flex: 1;\n  -ms-flex: 1;\n\n  flex: 1;\n  padding: 1px;\n  margin: 0 8px 0 0;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .cmyk-text .box input:last-child,\n.color-picker .hsla-text .box input:last-child,\n.color-picker .rgba-text .box input:last-child,\n.color-picker .value-text .box input:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hue-alpha {\n  align-items: center;\n  margin-bottom: 3px;\n}\n\n.color-picker .hue {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC');\n}\n\n.color-picker .value {\n  direction: rtl;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=');\n}\n\n.color-picker .alpha {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==');\n}\n\n.color-picker .type-policy {\n  position: absolute;\n  top: 218px;\n  right: 12px;\n\n  width: 16px;\n  height: 24px;\n\n  background-size: 8px 16px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.color-picker .type-policy .type-policy-arrow {\n  display: block;\n\n  width: 100%;\n  height: 50%;\n}\n\n.color-picker .selected-color {\n  position: absolute;\n  top: 16px;\n  left: 8px;\n\n  width: 40px;\n  height: 40px;\n  border: 1px solid #a9a9a9;\n  border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC');\n}\n\n.color-picker .saturation-lightness {\n  direction: ltr;\n\n  width: 100%;\n  height: 130px;\n  border: none;\n\n  cursor: pointer;\n  touch-action: manipulation;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACCCAYAAABSD7T3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwksPWR6lgAAIABJREFUeNrtnVuT47gRrAHN+P//Or/61Y5wONZ7mZ1u3XAeLMjJZGZVgdKsfc5xR3S0RIIUW+CHzCpc2McYo7XGv3ex7UiZd57rjyzzv+v+33X/R/+3r/f7vR386Y+TvKNcf/wdhTLPcv9qU2wZd74uth0t1821jkIZLPcsI/6nWa4XvutquU0Z85mnx80S/ZzgpnLnOtHNt7/ofx1TKXcSNzN/7qbMQ3ju7rNQmMYYd/4s2j9aa+P+gGaMcZrb1M/tdrvf7/d2v99P9/t93O/3cbvdxu12G9frdVwul3E+n8c///nP+2+//Xb66aefxl//+tfx5z//2YK5Al2rgvf4UsbpdGrB52bAvArXpuzjmiqAVSGz5eDmGYXzhbAZmCrnmzddpUU+8Y1dAOYeXCtDUwVwV7YCGH6uAmyMcZ9l5vkUaBPGMUZ7/J5w/792/fvv9Xq93263dr/fTxPECeME8nK5jM/Pz/HTTz/dv337dvrll1/GP/7xj/G3v/1t/OUvfwkVswongjdOp9PzH3U3D3zmWGnZVXn4jCqs7wC2BKP4/8tAzkZsoWx6XrqeHZymvp4ABCBJhTQwKfDT8gzrZCIqi5AhiACjBfEB2rP8/X63MM7f6/V6v9/v7Xa7bYC83W7jcrlsVHIq5ffv30+//fbb+OWXX8ZPP/00/v73v4+ff/75JSvbeu+bL2WMMaFbAlpBNM85QX+ct6qoSqkPAwuQlBVKqGNFSUOAA3Bmu7gC5hNOd15nSwvAOUW7C4giUCV8Sgn5L9hNFIqTsp0GxI0ysioyjAjkY/tGJVEpz+fz+OWXX+7fv38//f777+Pbt2/j119/HT///PP49ddfx8fHRwrmTjV779EXu2px2xhjwtdJZQcAWQIPLPISsMJaSwiD8gzIKrwSyATE5j5nAbR5c1dBUwBlsEWW0h6LqiYsqFPAQxCyRZ3wOSARxmlXMX5k64pQfvv27f75+dk+Pj5OHx8f4/v37+Pbt2/jt99+G9++fRsfHx/jcrmUFLO31gYDWblxRIs/TqfT7ousxJsAxXA2Gc7TA9XdgfdoHbFsj76X2+1WArgI1ageGwA3qupqoHsmcbI6Fu93quggFa9d7LeDtgKfAFHBJ+NEByIkcJ5KervdTmhhGcgJJSZ5vn//fj+fz+18Pp8+Pz/H5+fnmGD+/vvv4/v37+Pj42N8fn6O2+1Ws7JjjP6wraMI5E4RZ8x2vV5TSwkquotV7/d7Tz6HFWsD/qNcdw0CQ3q/321c686TwDVIdbuy73zNldhSHb8I2klZznm+InBS4U6n0302aBFsLhHDAKJVJVglfI9jhvu53W53sLANYNxAiDA6MCeUHx8f9+v12i6XS7tcLqcZW57P5yeY8/fz83Ocz+fnsSmYUyknWEG85WBst9stzSLyMdfr9Qi08iY15UZ0LlDGLhR3o5zK2j7OPUTD0E+nU3tk7Xb/16NFbhloAMuY1zjLUOO3BKeIDe+Z8s3/J4gFo4TM5jPmuRg28foUKKVSwo16TgA5npywcWLHgYl/Pz8/73/605/ab7/91m63W7tcLie0sZj4mao5gTyfz88E0f1+j8EcYzwTPEG2cqjyfHNF0M8fuqEiaOVnRzZZQNh5fwQyHg/HDGfJo89Q1zb/quu5XC6773I2XKfTqd/v9+d3wuqWva/YTdUdEV3fhIv/Viyps6YE3x3r43K5bJQS66zaxVGFsvd+//j4aF+/fm3fv39vt9utff36tf3+++/tdrudvn37ZuNLBaaCMgUzC+rZRiFowxUuJI8YMqcCp9Opq5vagaYU6lGJA1XQqejchw6Cj0Gw5nYBrGw01A2O206n04BGouNNyTfp/FwElhUey6nXrIKw7QQWddxuN2ldL5fL839gSPF8ahu/JvBO48CPSuqMf8Vp9/P53L58+dLu93s7n8/tfr8/39/v9/b5+TkhPJ3P56mQ436/j+/fv+/iSgbzer0+AZx/5+88bv6OMda6S5z6kd21fYC9dxv7cIJJ2d9AOS30fPMzyHiTM8B4DF6XUlYHp4KQW3W+1t77MNB1vGHxWq7Xa7vf78+y5/N5A+H1et29xuP5dbYtyaRu4AksbPq6936fjRzXRxBbPr/b+b18+fKljTHaBBBfn8/n0/1+H1++fBnn8zm0sB8fH5u4cr5GuBhMVk0EEn9RsctgVhM+ixlJtMA23R8B6yysAstBOgFXIKKCMIgToMqNEu2fYMH7ztc732dQKkCj1ytAZtY0Kx8pIr8GGJ+AT3V+2Hirhl++fBmXy2Wz73w+b17P8p+fn8/tUwGVleVkTyUb68DkfayWY4zxNRihU4EpLJPZVrK+u7J4/mgfKqeLW9X2REWlItL1diynbDDb3+jXgYjQqn0rrxWc+NkILP7F7xIbMvx7vV53x40xnlbWJF12ZSag/N0pW6t+ZzmOMzHjajKwDfond78zYTdfq18up97zr2q8v3IioBprRtBl0EZ9og5WBRGOdOHjIjXF7UotFbgOWnXzIJyzYvjG5IYgsmMOxHkz8OsMSrVNWeq5T8DaOcbEv1Od5rbs9aO7YvMet63EkF++fMExq+MRl4/L5bLZN/+ez+fnZ6KazuMqXSQVO5spJXflHAIzes/xJseckRJiDMog9d6VfRrqXMr6KpVV27jRwJacGovOAM1zMdQMnwK1AubK63kdCChvI1C7g0z9nf/D+Xze2Vj8H7Gx4P9duQlsYCrqyN8XqG3Hm/10Oj3jw/n+crlstuM+jPmmxT2dTuPz83Pzt2pn1XsEHX/bnPaVqVmh0xwOt0o6XLLAHePUU203wHfcrspCwmV3TryB5s0Mseeg97x/BwzCjBlbB+pRAPla0BVQuT6V6QHdBlj3d0KG147b+DqxQeUymDO43W4dQar+TIjwmAd0z8/h65vf0/yLv3Pb5XLpru/ydDo9s7ET0I+Pj6dKK9VUEIeKWQWPAOrJ8LKd4vE+t91Y3e7UFlWatg2VwJnb+HPmtvm/sfK59/OaWF3x/eP1UPHvA5DDYDpYXfb0drv1V2DkBkxtw/tEWVVlXWdC9pFYs5/jfh9dS/16vW7s6lTG+TfqsxSJHxkXXq/Xdr1eu4LsfD6P3vsT3N77DkL+zPm5jSdKL4zR3AxQd6rHkLkYlSowsrq7znzu6wSwdsMJOXmA5fBcjxtgMGBYHlr5zokhtsMCTgXLQOW4XC6dEyEMprL8mAQzXRgduix2yZzorxkYsDn3hB1VeMLGsXsVtgl2pW8S3svk0vw7R4hNaHvv4cACl5HFzwIH0Kc6zu4XjDPR/jpAVxWzO1Xk2DDb3vTcxeGU1iWZHkmIDWziWKvirCJ4Dravs6IJ/GG6cTqWdXDy+fArQDVVkLqkVjAoZIITdmmIqXwqa95N3+MGYoZQdRVNO53Y1xRkhO16vY7eu507Ca9lJnbGpxOemQhSw/AQsmmp5zU9BiU8G6wvX76M6/U6Pj4+do0Bz4CpgiknTUeDqwlKBmg3u4OVjrZ1A+rAcgaejWq6eJCvCYFDONSwOgHX4EQRw8lxbzDOdEK6gZ3Hk1b+8g2o1JFtKXyv/fEdTXuWjWXdAZiBp6ADeDrCFiim7B6ZFneeI7Gvm/PMkUDX67W7xI8b0D7/v8dA9qfN5oaCf74WZjH0mf1cmfY1Y0JUFmVrTWu8uzkNcLtEj7u5FXBTkfC6GOA5q8YMxO8KVvF6sAVGdcrUbsKODcQKkLMOMdmlxum642YrPm26AlhZW1YB1R+rrGswE8TaYAWeUMxdf+WjwSvZ2Ef3ytOyfn5+PpVPAaqOn43MtNBqvmjjxbjM4lZjZY4gqNMI5ktaW/sYKNwS+9lFQzGihmMCKPa7+Z0V6Eb0GRmobtpX8JljWu5FMLN5ja6hG9kwQgZqf5+1NH5UxzkFReCdWhJ8XdlGUkxO7HRlYRm4mVO43W7ter12TPJEw/rmEN3L5SKHIWZg9mz+pUoKOYq5bJTJdX2gme1UcxMZQFaEQIlHct32M+Y1BzGkGuzfiyAN9z+ugplZ1symCrDCYYkGxDTpI9RzBy0rHyeDUC1nWaeUaD9n4xkNyYMBDZtzZ3B++fJlY21XFDOcARJlabOyiS3uCpLI9jrZjCDkaVvcCCjwognKShWdzXZWlZMvVTgD8LpqlCLrqgbcB+qYwrgKYpT0ccCqbKyCValkEabn/FynogCrPKfqf51xJ7sGB2ZXcZmxoSOztjx300DZi7a0/2AIR0UlBag9SuDw6KcAzlaB7vHZvWpjK90dyrq6bKyDUZQbR0B05biLQkHIcSUmgIK+SwuqgHCnoio2RQU1yj+BnBy9pphVKLGyC7ZzFK1pxWK+E8IhVCWLN/uLtnUU4ayoYLoaANz8FdtaSvY4pV0BEW2ls61czqllBKpTyKgMAhrZ1cdc1RROtPmvWNkdcKZ7ZKxaWjiPLJMpp7OZKxA+rqG/oJLjxf0pnJlqLoDZo3gyU0mKGys2taKecj/d1C+rJSplBqlTyAqgR+D8KjKlmRL2gtUcAdCtsL+ijCNT1oqqqkH2OHEbG5sDFnUg5Aa+yLou2VU1ptj1S2ZQqv1ORZN9IWzRfgaRBxKoBE8UWyqlJFtrIc0AxNjSjed99CTY/XDfSzCz5M0IZoVEsWnPFNTsl8ooVC1TzbGgqFZNDSgVwKK+1sGDMKqxZCWGVMDysiEr1jVSQJUYwj5iHOlThdHt44SQg9CN+nl8D90NMIgAdgr46JqRiR9I8vRdFvbr17m/yxUMKjNLMiVUADwu2CWGhhi+F55TWM9M9cogzms1dnM4uOF/LAEYWdcqnM7yFmyq3IfwmOROd7Y1iFWtOjoY8To41mTV5IysgFFuRzsbWFGbNIIJCDv1dOo4lZG7jWBwRFtVTKuWyeCByJKOan8oZ3ep9XddNl0tDuaywLz9cXPYeDAA0SpkBO9sbVcTOVWldPv4uyzEkzxHtjvonHoSkFEWNoo1d8DhcQputd2ppNon4BzoAiJ1hBFQg0dVtdbGHHDQWushmNEQukLM2QO1G2Y8bgTXqFhcBJj7EjPgcPts8US8qPpPB/dXznOh5Z438tzH5ec6QgrOKrRRfKmysBmUDB+PhYabMlVPER+GCSITTzr7am2tArH3bgcEzPJm+cr5jJ4NnHNFDVrFXcI5Le9k5Jnw+bedbV+FfRzZIHaOOaOsLY0/7UGs58DjrGwKMIMFIGzOEW1/jGsdAtCN6hEAI4hBe9YXeRROBSVPAVPAqvIM5bx5hVKWAMP6zBRy3iescridVdFBinBxXDnG2GRY2XbCvp1lhvGtO9Bxu5h908XQu42lnSArMFdizMim8uwRCxPGnnOS8lwpnbOiDqTAjsrRN/PcoAScCbaACqVM40ylnjjTBs+bwWlAG23/UKbdkiwKWIQPGzWaczpoSlxPEj822cNWkpS7FyzsDrqpfgpG3jahw2vgbaSQAxuLWZYt7JzyNe8JoZpNAcvDFOdw0wqYT9AK1rZz/DdbSlLPp0ryIxgQJlK9AZlEq7IOXpohg9PIhrCng88JsOxiV4ZWAYfg4sikx/8ky2Z9l862uqwrfscIH8+ugTmVGyiddeVYUgEMn4GZzg14EwIsh9sx2cKKiWXReuOE5gzGOQgdlRKVVdlevqb279Xq0Qnsts2VDaBO0coezsruWtHApu6sKG4IBhN0aGU2kLrMKGRTN3HmbCDwKV14zvkMEDG4QfZVspVlaNU2mhc5TEZ3N1h/zqTheuLpW05ZWTGVjb3dbnNmxKZBnN8JqidaVLKAOyARNLS+MB54Z2+VaqoMLKroVBlngefnTPAcoHNWCSvlfA8CI0HEmBNBnBlXyMrzU7A7WVm94PPqQ2gmqKx+WDGsnvilmcSOBJqOK1nYyAIzuAyesq3UdSK3KfWcYKD95HmfYOU3qser2CtYEUA+FpfqdNvgPBZUBhDrGONRVlQsh8rLcaUCykHG0OOUwTlLBrsh5soEMGezi1E4HRVt1icp5wZEFXdibCkG8Y8vX75sbO4E0iom9z+hjSiOfy3DhpXItpVhE+UGQdvoWjtChmrGHf4YAzKgBNnGtuJxFCeGdhUAfQLLK8kBYAP6gvFJZajMG3Xkycy8KuC0q4Eyymwtwdxdv2M0mIBtK0LKnf640j00Auq4gUkdWGlhs22qJc6dZCsL19oxnlTJG4SYVRIGpD8TPFBuM6OElbS1pldid4mGAyN6ZIupbC5bXJN9fdpbThSxLUaI8IG1XIYBxW3Tjs6KQosKcxfxcQmdnwRGM10GnFcCy2XYunLMyAkdgk4mePiczsLygthcBut6goOqS7YVFXADLjaosB6s6ofcZWAZSIRYqSUkizYwttYab3vUOQ9w2HRxIIg8WwRVeE68xi4UtL3zRphxplzwuZrcqYCq1I3jPI5dnJIygEohMbPqVJSzrwzxBJTs5zN+ReUSgxikPQVF3JVBeNQxbHENrEMNvEdFZVV9lH9+ORGEsNZQpyTNc4C3AG7XF4ngzq+DrO2zbuaaOXgdaFcdkEotoSFBVX2qJ0C8OWZeG4KGlpghA0XfTOPCqV2qqwQ26QWfF2PMLhI2w1lVAa2aPsYd0za25MQRwgcZN6uQDCi+ZxiD4XEM2kZxOT41FnZnaRlcpZouzlRqqdbQVWopQoSB58RV50lBNrHi/AwXS5LrwDVlpY3Fc3ByiYGc52Trist6kOXdwInAQtJpp5QchyaquYOV7Su+fxVMaV3dc0RE2S6mUY0gLt2pMcYqrKIQ9w2l1gpQUMtQYcmmbt5DTNxdhnUCjQqtbK9SUSzvrC0mmhhE1e2FS2+oxypy/ZASutkmtjx3vcBC24PX65nbqkBCRhfjS9kIYPnee8cMagVOhI/3T1fAmdtAWZsCswTJCkQVNa0qWKSKPOpHAUhD9DrbVcyoYkwqhvh17vYAayXLQyKGYdxlUDFp494rBXRjYgO17DDYetNIUj/ezp6S0lnlpEwsWmJMkOwsKXeZKEAjIHn0EQJISaRBcO6UMINz7p/bEjjnw4ft+xmDvksxX4G2rIris7qaeKwAFMP2Oi7n4criuZwtpSUwpfLxSnORSrIqusc5ZFaXysqRWjiZ2DyAWEIL35tVSoQElFACjOeGGSE7AHEQgdo/LSvCOgGBvkxsmDbvlS3Fp5vhaB2TAGqRKrKKMrhLVpaGzEVjZ0OQxDhaCTA+QyRR1d15aQzrJntL3RibsipjG6jlgL4yqbS0sNYg1e84vhbBVrElK64CUcWYXDfKxhpIuxiVJZUxsbMy/uRBKTNRQ4kQ3LdRYLS0rJjRPlTPqY6gdJsEDc+aQXAn+HgsNUCbRuF0Oj0zwnA7bWDkbhO5Ens00qeQhS1laBMl5M/cAaxsLF8rKyql+Tf7ELLEGu/ixiimdCvo0TjfpjKwaggen4eh5v7LokLKbLuyvHhcZG8dhGrEDx7Hg93ZppJF7qBqO3iVveXEDQNInzeoe8Yq6ePaZBZ2JviM3W2UAGotekRCAGq4EkF1X3DOnR11yRsBL1tRa0PVcZiNFXZ2c34FskvomInQQ6lzpJoZbJxk43NwKJFBquJSsrByHydxKOnTxQASBmS3j+JMnsHSla3Ec6K9VWoJVn9zfjwOM7hqYAAqJQwE2a3nA48J2QGegRkpZNivSY+ys3EkKd4oJIwsvIHl3cWgLt5k4NH6OmtLWdpurOkwEMupYc7eMtDRhOcI2ui5JhVIzXzLyto/GAPuZoyo8wkoduVgJglCt7OhGbgID4Mq4si+63zUS1FuFFXFlqyaj2emHlLMcBqYu0FMuR28BbB7lOxRMSiCQXFhCKuwkhZ+pYDiGSgbsKKV8MiSRsuHSIWM9rklRiIlZZuqXjsQK8ooYJMgq3JKWVkhHbhsVxFUzthOWPkYijcbx54IKsSdT+uLr3crGKyoYgFiGR9iBk4kfloUX+JIlQRQqabmpgnhqtpQpb6RVQ1WH5DnrS4hEoGZqaerQ2dhFbz8XePxShmDbo70eISjoorO2vK8SJXI4SUmEU4zWKDzUDtWTYw7xXlbSTEj4FRg7zKnKoGRALv0Gs9Tgc1BpCywGZRQAtqVz2xrBcAMzEpfZwFSa2G5W0QBFjSMapWAEFa3HcGN7CxDzECyIkJ97qwrqWNTWVo876PPsjPkj2wvgroM5lLZKMETKVql/CvnWVFiFa/SzJUQwkoZsr67Y6vlSRV3/2tmNTOY3vnaxYwMuoPKqdzR1w7IqHymlPxaAThfU7Ko2ZXYj4AYJHL+kNdKwRQYESTRa5fsUZ/rVC1TMTyWVyYoqNtuzaHsMyv2tvoarxdfqwYgU1axFo/cnql1FGsqK+uAROV8BX4GU8WcZTATi2q7Qcyi0O0V+GhWBMNRUkn8H1SsWVE5By3Gi0ECqUeJoBfAtDa4amkdXG37AGP5Ggeb84p7UazpoKRzdFzeQ8HkoHGxprKy/Hpm5t12p47J6xTYDEz7uINEXSuxYXvFskYAc+ySxH9sf5ftKzU6IbwVBcUGg5e5FMCEXSErZR0wGayV19woM9guPjTqJdVTqR4uE4nJnLldWVkECCZLd2VLF+xtamex7IpiriSDUpvrpn9lrwGMCHyppMH+ps6LILsuFGUj1XEOXiqbqSHPUKnClpWV68kqtURVNDY4TNaocykoYeTU5ngGEQa/S1DnnE4AeXMcKjHPAmFVjCBENaeyLVNHfr3px8xUstJ94hIpfH4HKE/eDaArK6lSyVVFbdt1gxTIVk3pppVlFXi4pEhVBTObquohU85MLXn1iahvUkHJjSCMc01tLFveVVBx0DodM6jftCu7DOtIzYxrc0qp1JGP2ayYFz2Gb6HvMrO8cnGtV6Gjm3uImSfD2GpWK6uowbZGMxFKQCo1pOMtcMXFpRst+hXGoAomF3sSTBGgTglbBKWwsQ3tZqaYSp0Z1CimRDWFcCJUPYJ00BI5FkKYNoifuQxmN88SWVXWLMaUqqqgC0BmQJR6sk3u9NCf6jYLXxAfqsYEgVLAhRY2AtgtflZNFmFyhxdrLkAdWlk4D88M2ixHyepIdhMHrG/iR1ZGtq0MGpbDbRPYOXeSY1M6Ny4ZstvGSktK+XbFPATj2D371saPEsAMXhXrsZ0km/XStkhhMyBfsa6uXFZe2VCe+YMr1+GKgwrQyNYq1VRrB+EizAow6NsdNKcyVEkYeM73ys6q4kAHp6BiFklTkIrVC5oYV7uzwOGCz4UJ0Stq2lWMJy4wtb+RetL6tZFicnJmBw5UjCvXXMZVJX2MQkbf+XN5EWd78Vz8/JEsMZTBiKNzsm1inLRUQ74H4NidaqI68j5sAFgxcRveC7ieLJXfQYxjZZ2CsiWFewZXJmBIlZ1tdtrX4hSuateKso/RZOtOKW2nmq1oTzeK6dRWAWu2NRVb4hq0SXm1GvtugHrbr5IXqmSktg5CuDE2MSlPwsY5kNE2Wp3AqiZbWVLAxiBF+2iBZbuNj6MB6rsMLC7FyasaYDyo7KkoPyEtw3pEMXfPvxAJi2jAQQgjrz0rLIZSWZlIoNhwd5xK4AR9mYNjWAaLrnuImJeBVN9zBORObVvbr+mTTfFSEJLSRnHo7hEJoIi8MFqjxmvgmF5URZz4zLFgZZ8Ctu2X7ggVccKm9gVxIsOHqxXgNMKnFWZYnf1dBnOhayXq17QwFlWW09eNKyVJFmXqaONGA5aCegMbJ3UUkGY1ic3nKWgjq8qfVYGQG1gRt6rs62a6HiqqUOqdesK5NmX4nGofJoiE1d0dF9lVVkvT1/kEEaaCoYOwFpcVcoLM+7669PxC9rWqktH0sWUYld0VCpuBZ/stVRcGgy9WX2+U1Qthi9SzAqSxzZsy+OiFzBYnySGV6Gku44rD8BCOZBV3BvD5+AKRHNwMEsB6EzHnJpkTAeiUlEGkcECeB6GDZTp5YEJTlvdrknxYjTllMkfNtXwDjM7uVjK5JXUUn43rrqpK2jytaxHW0M5G8DC8rtHMYs7KSgduVQMGTYFqFvVS6rkD3sDJ46afdYFwoq11AOKCBLhvwoUgc8IGANycR6knZrdJPdsuxnyjfd3FovTlRMdEdtOl5CMV5EHsXQBis7TOwvIDZaGj2Vnpbh7cpK63VwYEMLwqbjzyl699sawFFkF1yqjUU31HfC6sW1ZFVFuXVXVgz9keEaw0ys1lWfm+azQAQSWA+hKYVfsZjPncAcUB9oIayy/UZXRNckDGji77GsWbvBo6tPrWPqOyVkBUq+INeqpzNdYs/u0ifh5qmpqIW+33JVSUcwY70KL4U9lYdU6ljtSls7lmfi9g3YzeQfVkaGFaV3ODCnaD2N8wsEDFklE3RzM3ZghdYkWHsszq70FIecnKkVkt8ezMzRq9bkGuKojRLBVSod3Y1yPqKgYW7JRQTPVyy5xIYLjOgxgT52RKJUY1dOrIiRd4futQx/A5AcSmEjz0vFWrkLzvbWAu9HOWbGgxFk1VNTpnBKk6TgwisI/HcxYXP1uAWO72ULFlBTq+aSu2VTUs6hrxM2CF+hEor1VIA9ZmFUaab1lSSgZsVs4sxzHlVLoJHr9H4DhONTkI1XC0/wiY2NoWAG5RlnHFnq6oLccpQddMuJ/O17JVA5OHLi0BqCztq7Y1++ucCd98qLI8MIHBV/cKjxQTme3hFBS3MyCqnDsuym2o80HjvFFTtrURmNaGJsmVahImjTsUXKtQZTAVs7Mvv8/+fzUrZAXcLJ6M4koe6XP0b6SmWWNDzyUpQ8bl+LtWx4tuqZ36cRYV3yuVxPNwvIiqiQCSmu7srgTzR6nkyhpCarXwFy1vGd5iP2cY06lFr5Njhhg1Y6+NB28ftbK83s8rf7kLJbKwDFPbLg25a0AdZJEiqr5phixKMDlRUtcssq1hriLqGoH+zeNgVm9OemjsETV8JdF0NHnkIFxWY1OB4Yrp7rtWJ7NgAAAPXklEQVQ3oNs5nplyVf8u2FoLu1JrHveaZWQjqAkshtFa2gzsSG3Zpkbvg3HafF9slPPlldjFlK80Gysm8Mr4MPhneNWENPGjAIpmilTPATdTRTXlCBYHYAQuPwA36xIpWtGN4q3Y2MhiGsUpuSSnlEJRD8PorC7CFYVw+F51qThgabxsTxWzCGY0ZSsb3lfqAy0OPNjNy8xiQQKsHYFQ2HBZVvVbBuq3m1oWKajqaonsM6uZUr6CjXWNZ0l5E3h3jURma6kP3MJIiy1Lm+kahQq41N2iZja5sjtlLYNZHZrH6qUGm4vMbDp6Rw2CFmvuyFkrBcCyMtFqBaECmsHoK9BZ2LA/lJcRqSaDqnaWbrZdGaz3DLgIvBln4woGztbyJGqslwxkhhHrTjTYFXCtOoKS8uLdofVdAbOylGU6nlYpXWZts4nXBq6WxJitMNokHUJnbnJplQm+aGpY2a5GMV2QD1hRubBPFKdumf5OHkLHz0F9luE5kjBjRa0nFE5CUGqHw32MmjZ6xkgINVnSnZ1VZStK2qKlRaLlQgK7uTq7JFXJwM+3SOEKyhZNI+tJ0I5qMYy9k2qJD7dVWdqKXa0CKNR0Ccjg+B2IYu2fcBZJZkMFgM11r0X92wilghFGgzVnexlqB7xL9mS29SiYUVY2nXOZjNBRsyDsQPRWW5hrZ4XcdC4HVWRbjgJr4sFofK5SzjQ7rhI1UebdPdEbj6sqIvTZQZ5va08rABsAW0UxeWytAk7A2KJ9ZpxzCioB24XFtYAeXYxr6anSqhLgppEqWbGwLunTgrV+IjWlL29ljaAl4EQMGsErp4apeZiquwRXLXAqOCeru32mmydc6oWTSWpFAGdzeTB8RTHVMEtlM90CbbQCYhPjq3egYr1FGdYIQjiuDGZ5zZ/AzobKGOyLxti6c4Rwtv2anyWlLICnlLhxJRXt6A5ebDBWFNONbxWZ2d02mnu4S9YECpeppV1zSWRBWxHYzVIv1CXSouwqqX3jBBBDZdYQbpTQW4ZQlS8r5kH4suSRmg2++3JN10x1PaAmEkmtYlEdeGpJEM6kOuCqCR22oSujj5IV2HdT0zj5prLKTjXFAPjdQlyq7xIBxAQP5yMczG4VxAKw0n6ilZ2QBce2pLulkuxxqnoIzFfgqyqjil9S1VNwBrFmeyeops8yOjZUybZdfS8CuaTIJumzs5tODaNtLpFDQ/PcJGweLhmeL1nB0KqiUDScsiUVD89Di3HtrKtSULw3RLiygZD+7sF8JTObgYsrGvDNUFRGl1iy0Ll1YkUc2aJYMog920I8qW6YDCg1Mqk0JHJFKXkbgbRreI+qpYNOZHrVcDUba7pjsphSJNtK6upgRNAVoOS0mugBeN4bIZgHhuPZ/s1ENaX6KsVr+YNrh1Nb7ipR0PE5zbNRegCbrHRUw6Yf07dLBJl1f8KB9as2V1nNqAsl62LBBhehwalerkHmB1JFIEZKSEusdl5JQj1nJlHXSCF342gJ9CYGrXelknJIXqVP8sD+qtplCR3XH2qfKq0ygMp+KnVkKxNlZ8m2YkIlVMiCnXUwl7qznBKSvQz3m3Pt6oQbXO5b5FixCh/fHxUQW/AEcK6zCNqKQnL9sywqmKuwvqSYzT/aPVNNpVyhvRW21aqciCsjdWvBwILUvh5VyCzbWoC1pJjJ680CWsl+udKB6T5RwG1mlohnlpbg47iz5U9ha0FGtmRLFYBtO99y97Ap0z+ZDTAog6kSLZsMHg/IFkkgp6CpvU2U0cYVSdnmkjwBdOmXbxTWNWzuIbipMioVxEckZEoahSOiy2M3K0jcC1LhVDwaqG0ZvkcWqCnrG4GIxykrqlbWdw6LQyBaZR8HmLRIhQWsHswD42ZXVLNkf9l+FlW0HVQ2lwFsC/Z1FdzlQR0KaPfo+Fdfu+/dwVRICu1CGR7AEIiAhc+AZUF0kOBaPxmUqg4i64vQnU4nFDYJ9Nz+1fVXveH9qmr+kPILx8oKcRV/BFbxbE0JMT0kSD4w6L/lNY8ocsqagVdU3A3MjxhxcGuqzsPH4irpaow1q6OyrVjvp9Npc59E91LldboYVzJWdimWfAW2SNEKcDaX2FmBLLA/uKxlmhh613Is1URQApbKfttwxL02q6Onx5pQxSbPojAg+v5hAnN6LHVRDXIsvKtRjiS0qJUyZTAXVbAK82ElFJWaQdVoqUC1Unt7BVaTQudM6SuqexjQJN4+0icaxv/utbKv83ETbT8H8gjcOKxOJmbUa6OOVXht3dFY6rHv9XoNzFLceEA1o8+pKm0LAHPHZ2rYKjFq0hfZFixsqHJgD3eD5n+U0kb1mFjXkn2lvMSSOsNE/CdIAKF0Sytq6urOHUN5gwg4GZosgbmggM5ucra2qrS2Ig1cbiBBcxYzgzUDNLCvL8GbZXNp6ORy3LmS+Kk83zRIAK6A1ioKa2I9NapIuiUFdfC9766PFZUtqUr6KbWk+zZU1a/ZrIXEztrjTOfz7hwKziCeXIaraHtbZIMz+2pGgazCmw4qWAFvEdhodYp0Xq0pV7G1YWYWbO4qhGq42+Z8BYtrLWvluNPpZAeaFFS1vubPgbgxsqcpnAaszBovKaFoDQ8BGtjfUOl4NAG2nmQV04feJgumvX2fsrQEWZghL0JnVdYkn3DOZIeRN86RqPWCmsvGVqEMRnwxQAxwS8EMYo3IzmY2+BCcLp4MKiuyuhImamlbZFcNoNl7tp+RHd18ZjQIRKyXdFRhN98/hyKqwXWNo7O1wiaXoHN108REZZWEq6grnIfjzeg8jdRf1XEL4kkXa5bBjKxoKaljBjeHlVxQ4GaycpW4lDOAKtnTxHAtOfzOtZwHAM7sqVXkV6yu6kap1nHkXKqWF/4XHqjenNKqBjpR3l1ch3Ejg1+EsgdQhsdG0B4FM9sWAVWpuAyiwTPleZxt9VyZVS2qXfReWqTAilpr9ApoWTjxymit7NwV4JTriZyOA9B0k7HFfULourmKYHVnRQvqGL5HMHdqFcR2qWpmcK6eTwx2dipWrviDilr+fKWq3OWRWdHKwA4eu8wjchbeRzFilqjjZN3ufCpfkJ0/scVpnYk6L0PI77lxdWCZ87WiWm7B/AGquQSnujGKsB8CJmiJq8q1pKIVWyqOiTK66r18BN8r74/AE71fdC3yPS2MxdOpnE1tlVxD9JmVOoggN+r4PjAXVFPa3Eg5jVJGFVUGNolH20GVrUB7BOySWq6WqYQdWR92pcFMYMwckbSgCKCqD67DiiWu1g8MQC9ByfcFqW1L+jL714qNCuznoSxt0da2gtWN1G8F0BK0NN0nuimelUF9dIdAfjO44UT3CjQLoUeLHJFTO3gmpRuIIOvwBQCbqNeo3qtZ9iF6xVK13GRlo4zqimq+CGdTiR1uRY8oqgE02hZBa79kZXPMquxRHKla2saZWN4mRqZUj0vLCKhkjKnqOQHNuSZVJoKvAqS1wpEquvWDC1B2ypwrCPsRMEPVTODMLJMDv6qeKXwi2JYV5Sq4qKyvgGsHCLiuj2jR59V8gMqSJ2FJZRXEHVRHj3sFPrct6OpqlW1GpatQdt0GvwfM6n63InsGVFhJGaBqgqqIV6IsXllZgySPq4R3bnt3wi5cv+cN2yqQLW1T95KYVsWWtKk4cB9W53WQQflQYR6Wl4HaJZjvVE0D5yvq+RKgZCs5qdBEP5sD94cAvQLlSgNaSMAtHx88BuNQ41zdFsX30zKbcs0MLD/ihkpQzl0wiTqKLTfbKmCmyYICnK0IbaieC4CG9iSyLQ7cIMGQwau6TKoq60Apl3WN40LZpca1CKKK9VQyyIEn8w0F8F6CL2h8o3ixGwC7s7EWzCOqmcApYxYD4jsAzVS0sl2t98pA7vrKophCVSonbYpgH6mvSn24pTBV4sdtV3BtMq5k82y+IADvUJ0uAlkCVTxIaPm+UNu/qkV4F1TzHXCGrXIAqItBKypqK99VtAOVs64O4ObX7pHLVCpYHcRmwvLR7TvYAKBBN58LGVzDuFz+hQbWgncQyCZAk+VbsPSouf93261iZgmfCpwRbAvqmSqriU2PwhjaoOyYqtIegVXViTsmyta6bGySpY3gyRrpIyAeaWDDxtpsXwKyalMDKNP7YBXMqEskUsi2uC8FNAPxAKTVfT1o6VzM0E0jF+1rWcUuHvdyg7vgoFplX8HpvHpMCOMRUPHzZkInsqlFKNX/EIO52E0SxSzOwob2VmRLW5D1XIU0rbgM1AzWgyC7fe8G7xUAK/taEBat7luqtyP7EmsaJQOj5F+mrnZfCuYCfBUAWwShyd6pMY/vAHG1UqOYpbI/gy5T0CMKm+UO3gFuC85dgfDVeguPDfITrIBLsLrcgdh3CFgFZjaKJ4Iv3F8ANEqvuxR1tVKOgLoCa1jxboBAkj6v7j/icFbA7f4rfRnQDLRViG13i0vqBQrYVqBbADZT0ZpiHoSzvQpopKIFS3sE1HfBWlHXd0H7LnArqvougMtljHBgZnh3Eoz/BKjLML4Z2Aq0+hEJr9jaVUBbvNzCIUiroC7AWmmFw4o5AK3MtB5VypZMSFgs05JyGVwlwBqsEGAAa2ZU1CjUexXGsE4rKriilBvFzOKKo3AuAroE6QFQU3u8YpNXwS5k+1TZt5UrwouN4KiUEw+k3ZWDp1RXHNRqXb21Ts39945yZSg3VnZFNQ9CF3XeZyr5DgBXKiwCMa2MxeTDYXgP1Fsf9QNKZc0k81RJk3r6EQ3rCmBVyLL75EjZ1pIVDHoFtiOAHoB0BdTVylqBsKKKS+AeBXJVLY+CXASuGvO/Auq7GuEjDfGKg1oKa1z/dmmi9I9SUGNhl0AtfulHAawoYrnSkmNXAVuGEhrEVXvUF+A5Ct2PqNOjDetyna4CmeUolmeXLN4Aq7C5Sj10Q7yjgl+t6CNxSRHmI5X+CpwreYB3Qfdqna4q21KdBuc4GoZsn49ZOOiVinwHqK9WzjvgeweEh2AU5+vtxZ9Cd9Wqkh49V18E5oj6vVyn0RStAyGIO5edXRKd5B0VGVXq2yr3xYp+5Ut+C4QJ4P1N339pQMjRejj4vb/Dcr6rQc3O/0rjmtZpeYCBiCHfCemRbNhbK/pNUPc3wfKy5f2D7OlL3/uPhve/oU4T0F8f+VNM2vyoiv0jK+KHQfdHq+0bncz4oz73/+Y6LbKw1o/5B7eOf1Rl/0du9B9tn/9bvrf/j+v0h6ttn2tp/r/4819y4/zv5391uvzzfwDifz6phT1MPgAAAABJRU5ErkJggg==');\n}\n\n.color-picker .cp-add-color-button-class {\n  position: absolute;\n\n  display: inline;\n  padding: 0;\n  margin: 3px -3px;\n  border: 0;\n\n  cursor: pointer;\n  background: transparent;\n}\n\n.color-picker .cp-add-color-button-class:hover {\n  text-decoration: underline;\n}\n\n.color-picker .cp-add-color-button-class:disabled {\n  cursor: not-allowed;\n  color: #999;\n}\n\n.color-picker .cp-add-color-button-class:disabled:hover {\n  text-decoration: none;\n}\n\n.color-picker .cp-remove-color-button-class {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n\n  box-shadow: 1px 1px 5px #333;\n}\n\n.color-picker .cp-remove-color-button-class::before {\n  content: 'x';\n\n  position: relative;\n  bottom: 3.5px;\n\n  display: inline-block;\n\n  font-size: 10px;\n}\n"]
        }]
      }];
      /** @nocollapse */

      ColorPickerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: ColorPickerService
        }];
      };

      ColorPickerComponent.propDecorators = {
        dialogElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dialogPopup', {
            static: true
          }]
        }],
        hueSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hueSlider', {
            static: true
          }]
        }],
        alphaSlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['alphaSlider', {
            static: true
          }]
        }],
        handleEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup.esc', ['$event']]
        }],
        handleEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keyup.enter', ['$event']]
        }]
      };
      return ColorPickerComponent;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerDirective =
    /** @class */
    function () {
      function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this._service = _service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpFallbackColor = '';
        this.cpColorMode = 'color';
        this.cpCmykEnabled = false;
        this.cpOutputFormat = 'auto';
        this.cpAlphaChannel = 'enabled';
        this.cpDisableInput = false;
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpCloseClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'auto';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpCmykColorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
      }
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.handleClick =
      /**
      * @return {?}
      */
      function () {
        this.inputFocus();
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.handleFocus =
      /**
      * @return {?}
      */
      function () {
        this.inputFocus();
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.handleInput =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.inputChange(event);
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.ngOnDestroy =
      /**
      * @return {?}
      */
      function () {
        if (this.cmpRef !== undefined) {
          this.cmpRef.destroy();
        }
      };
      /**
       * @param {?} changes
       * @return {?}
       */


      ColorPickerDirective.prototype.ngOnChanges =
      /**
      * @param {?} changes
      * @return {?}
      */
      function (changes) {
        if (changes.cpToggle && !this.cpDisabled) {
          if (changes.cpToggle.currentValue) {
            this.openDialog();
          } else if (!changes.cpToggle.currentValue) {
            this.closeDialog();
          }
        }

        if (changes.colorPicker) {
          if (this.dialog && !this.ignoreChanges) {
            if (this.cpDialogDisplay === 'inline') {
              this.dialog.setInitialColor(changes.colorPicker.currentValue);
            }

            this.dialog.setColorFromString(changes.colorPicker.currentValue, false);

            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
              this.cmpRef.changeDetectorRef.detectChanges();
            }
          }

          this.ignoreChanges = false;
        }

        if (changes.cpPresetLabel || changes.cpPresetColors) {
          if (this.dialog) {
            this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
          }
        }
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.openDialog =
      /**
      * @return {?}
      */
      function () {
        if (!this.dialogCreated) {
          /** @type {?} */
          var vcRef = this.vcRef;
          this.dialogCreated = true;

          if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
            /** @type {?} */
            var classOfRootComponent = this.appRef.componentTypes[0];
            /** @type {?} */

            var appInstance = this.injector.get(classOfRootComponent);
            vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;

            if (vcRef === this.vcRef) {
              console.warn('You are using cpUseRootViewContainer, ' + 'but the root component is not exposing viewContainerRef!' + 'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
            }
          }
          /** @type {?} */


          var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
          /** @type {?} */

          var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);

          this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
          this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
          this.dialog = this.cmpRef.instance;

          if (this.vcRef !== vcRef) {
            this.cmpRef.changeDetectorRef.detectChanges();
          }
        } else if (this.dialog) {
          this.dialog.openDialog(this.colorPicker);
        }
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.closeDialog =
      /**
      * @return {?}
      */
      function () {
        if (this.dialog && this.cpDialogDisplay === 'popup') {
          this.dialog.closeDialog();
        }
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerDirective.prototype.cmykChanged =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.cpCmykColorChange.emit(value);
      };
      /**
       * @param {?} state
       * @return {?}
       */


      ColorPickerDirective.prototype.stateChanged =
      /**
      * @param {?} state
      * @return {?}
      */
      function (state) {
        this.cpToggleChange.emit(state);

        if (state) {
          this.colorPickerOpen.emit(this.colorPicker);
        } else {
          this.colorPickerClose.emit(this.colorPicker);
        }
      };
      /**
       * @param {?} value
       * @param {?=} ignore
       * @return {?}
       */


      ColorPickerDirective.prototype.colorChanged =
      /**
      * @param {?} value
      * @param {?=} ignore
      * @return {?}
      */
      function (value, ignore) {
        if (ignore === void 0) {
          ignore = true;
        }

        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerDirective.prototype.colorSelected =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.colorPickerSelect.emit(value);
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.colorCanceled =
      /**
      * @return {?}
      */
      function () {
        this.colorPickerCancel.emit();
      };
      /**
       * @return {?}
       */


      ColorPickerDirective.prototype.inputFocus =
      /**
      * @return {?}
      */
      function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */

        var ignored = this.cpIgnoredElements.filter(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item === element;
        });

        if (!this.cpDisabled && !ignored.length) {
          if (typeof document !== 'undefined' && element === document.activeElement) {
            this.openDialog();
          } else if (!this.dialog || !this.dialog.show) {
            this.openDialog();
          } else {
            this.closeDialog();
          }
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.inputChange =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        if (this.dialog) {
          this.dialog.setColorFromString(event.target.value, true);
        } else {
          this.colorPicker = event.target.value;
          this.colorPickerChange.emit(this.colorPicker);
        }
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.inputChanged =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpInputChange.emit(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.sliderChanged =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpSliderChange.emit(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.sliderDragEnd =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpSliderDragEnd.emit(event);
      };
      /**
       * @param {?} event
       * @return {?}
       */


      ColorPickerDirective.prototype.sliderDragStart =
      /**
      * @param {?} event
      * @return {?}
      */
      function (event) {
        this.cpSliderDragStart.emit(event);
      };
      /**
       * @param {?} value
       * @return {?}
       */


      ColorPickerDirective.prototype.presetColorsChanged =
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        this.cpPresetColorsChange.emit(value);
      };

      ColorPickerDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[colorPicker]',
          exportAs: 'ngxColorPicker'
        }]
      }];
      /** @nocollapse */

      ColorPickerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ColorPickerService
        }];
      };

      ColorPickerDirective.propDecorators = {
        colorPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpIgnoredElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpFallbackColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpColorMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCmykEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOutputFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAlphaChannel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDisableInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpDialogDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpSaveClickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCloseClickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpUseRootViewContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPositionOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPositionRelativeToArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpOKButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpCancelButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetColors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpMaxPresetColorsLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetEmptyMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpPresetEmptyMessageClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpAddColorButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpRemoveColorButtonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cpInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpToggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpSliderDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        colorPickerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpCmykColorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cpPresetColorsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        handleFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['focus']
        }],
        handleInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input', ['$event']]
        }]
      };
      return ColorPickerDirective;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ColorPickerModule =
    /** @class */
    function () {
      function ColorPickerModule() {}

      ColorPickerModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [ColorPickerDirective],
          providers: [ColorPickerService],
          declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
          entryComponents: [ColorPickerComponent]
        }]
      }];
      return ColorPickerModule;
    }(); //# sourceMappingURL=ngx-color-picker.es5.js.map

    /***/

  },

  /***/
  "./node_modules/positioning/dist/positioning.js":
  /*!******************************************************!*\
    !*** ./node_modules/positioning/dist/positioning.js ***!
    \******************************************************/

  /*! exports provided: Positioning, positionElements */

  /***/
  function node_modulesPositioningDistPositioningJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Positioning", function () {
      return Positioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "positionElements", function () {
      return positionElements;
    }); // previous version:
    // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


    var Positioning = function () {
      function Positioning() {}

      Positioning.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
      };

      Positioning.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
      };

      Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
      };

      Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;

        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
          offsetParentEl = offsetParentEl.offsetParent;
        }

        return offsetParentEl || document.documentElement;
      };

      Positioning.prototype.position = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elPosition;
        var parentOffset = {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        };

        if (this.getStyle(element, 'position') === 'fixed') {
          elPosition = element.getBoundingClientRect();
        } else {
          var offsetParentEl = this.offsetParent(element);
          elPosition = this.offset(element, false);

          if (offsetParentEl !== document.documentElement) {
            parentOffset = this.offset(offsetParentEl, false);
          }

          parentOffset.top += offsetParentEl.clientTop;
          parentOffset.left += offsetParentEl.clientLeft;
        }

        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;

        if (round) {
          elPosition.top = Math.round(elPosition.top);
          elPosition.bottom = Math.round(elPosition.bottom);
          elPosition.left = Math.round(elPosition.left);
          elPosition.right = Math.round(elPosition.right);
        }

        return elPosition;
      };

      Positioning.prototype.offset = function (element, round) {
        if (round === void 0) {
          round = true;
        }

        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
          top: window.pageYOffset - document.documentElement.clientTop,
          left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
          height: elBcr.height || element.offsetHeight,
          width: elBcr.width || element.offsetWidth,
          top: elBcr.top + viewportOffset.top,
          bottom: elBcr.bottom + viewportOffset.top,
          left: elBcr.left + viewportOffset.left,
          right: elBcr.right + viewportOffset.left
        };

        if (round) {
          elOffset.height = Math.round(elOffset.height);
          elOffset.width = Math.round(elOffset.width);
          elOffset.top = Math.round(elOffset.top);
          elOffset.bottom = Math.round(elOffset.bottom);
          elOffset.left = Math.round(elOffset.left);
          elOffset.right = Math.round(elOffset.right);
        }

        return elOffset;
      };

      Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
          'height': targetElBCR.height || targetElement.offsetHeight,
          'width': targetElBCR.width || targetElement.offsetWidth,
          'top': 0,
          'bottom': targetElBCR.height || targetElement.offsetHeight,
          'left': 0,
          'right': targetElBCR.width || targetElement.offsetWidth
        };

        switch (placementPrimary) {
          case 'top':
            targetElPosition.top = hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
            break;

          case 'bottom':
            targetElPosition.top = hostElPosition.top + hostElPosition.height;
            break;

          case 'left':
            targetElPosition.left = hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
            break;

          case 'right':
            targetElPosition.left = hostElPosition.left + hostElPosition.width;
            break;
        }

        switch (placementSecondary) {
          case 'top':
            targetElPosition.top = hostElPosition.top;
            break;

          case 'bottom':
            targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
            break;

          case 'left':
            targetElPosition.left = hostElPosition.left;
            break;

          case 'right':
            targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
            break;

          case 'center':
            if (placementPrimary === 'top' || placementPrimary === 'bottom') {
              targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
            } else {
              targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
            }

            break;
        }

        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
      }; // get the availble placements of the target element in the viewport dependeing on the host element


      Positioning.prototype.getAvailablePlacements = function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        var hostElemClientRectHorCenter = hostElemClientRect.left + hostElemClientRect.width / 2;
        var hostElemClientRectVerCenter = hostElemClientRect.top + hostElemClientRect.height / 2; // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport

        if (targetElemClientRect.width < hostElemClientRect.left) {
          // check for left only
          if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 && windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
            availablePlacements.splice(availablePlacements.length, 1, 'left');
          } // check for left-top and left-bottom


          this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        } // top: target height is less than host top


        if (targetElemClientRect.height < hostElemClientRect.top) {
          if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 && windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
            availablePlacements.splice(availablePlacements.length, 1, 'top');
          }

          this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        } // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport


        if (windowWidth - hostElemClientRect.right > targetElemClientRect.width) {
          // check for right only
          if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 && windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
            availablePlacements.splice(availablePlacements.length, 1, 'right');
          } // check for right-top and right-bottom


          this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        } // bottom: check if there is enough space between host bottom and viewport end for target height


        if (windowHeight - hostElemClientRect.bottom > targetElemClientRect.height) {
          if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 && windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
            availablePlacements.splice(availablePlacements.length, 1, 'bottom');
          }

          this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }

        return availablePlacements;
      };
      /**
       * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
       * primaryplacement: left|right
       * availablePlacementArr: array in which available placemets to be set
       */


      Positioning.prototype.setSecondaryPlacementForLeftRight = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement; // check for left-bottom

        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
          availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }

        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
          availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
      };
      /**
       * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
       * primaryplacement: top|bottom
       * availablePlacementArr: array in which available placemets to be set
       */


      Positioning.prototype.setSecondaryPlacementForTopBottom = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement; // check for left-bottom

        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
          availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }

        if (targetElemClientRect.width <= hostElemClientRect.right) {
          availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
      };

      return Positioning;
    }();

    var positionService = new Positioning();
    /*
     * Accept the placement array and applies the appropriate placement dependent on the viewport.
     * Returns the applied placement.
     * In case of auto placement, placements are selected in order
     *   'top', 'bottom', 'left', 'right',
     *   'top-left', 'top-right',
     *   'bottom-left', 'bottom-right',
     *   'left-top', 'left-bottom',
     *   'right-top', 'right-bottom'.
     * */

    function positionElements(hostElement, targetElement, placement, appendToBody) {
      var placementVals = Array.isArray(placement) ? placement : [placement]; // replace auto placement with other placements

      var hasAuto = placementVals.findIndex(function (val) {
        return val === 'auto';
      });

      if (hasAuto >= 0) {
        ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'].forEach(function (obj) {
          if (placementVals.find(function (val) {
            return val.search('^' + obj) !== -1;
          }) == null) {
            placementVals.splice(hasAuto++, 1, obj);
          }
        });
      } // coordinates where to position


      var topVal = 0,
          leftVal = 0;
      var appliedPlacement; // get available placements

      var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);

      var _loop_1 = function _loop_1(item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if (availablePlacements.find(function (val) {
          return val === item;
        }) != null || placementVals.length === index + 1) {
          appliedPlacement = item;
          var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
          topVal = pos.top;
          leftVal = pos.left;
          return "break";
        }
      }; // iterate over all the passed placements


      for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i],
            item = _b.item,
            index = _b.index;

        var state_1 = _loop_1(item, index);

        if (state_1 === "break") break;
      }

      targetElement.style.top = topVal + "px";
      targetElement.style.left = leftVal + "px";
      return appliedPlacement;
    } // function to get index and item of an array


    function toItemIndexes(a) {
      return a.map(function (item, index) {
        return {
          item: item,
          index: index
        };
      });
    } //# sourceMappingURL=positioning.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/apps/calendar/calendar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/apps/calendar/calendar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainAppsCalendarCalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"calendar\" class=\"page-layout simple fullwidth\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header p-16 p-sm-24\" [ngClass]=\"viewDate | date:'MMM'\">\r\n\r\n        <div class=\"header-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n            <div class=\"header-top\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\">\r\n\r\n                <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"logo-icon\" [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n                        today\r\n                    </mat-icon>\r\n                    <span class=\"logo-text\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\r\n                        Calendar\r\n                    </span>\r\n                </div>\r\n\r\n                <!-- TOOLBAR -->\r\n                <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <button mat-icon-button aria-label=\"Search\" matTooltip=\"Search\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button\r\n                            mwlCalendarToday\r\n                            [(viewDate)]=\"viewDate\"\r\n                            (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                            aria-label=\"Today\" matTooltip=\"Today\">\r\n                        <mat-icon>today</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button (click)=\"view='day'\" aria-label=\"Day\" matTooltip=\"Day\">\r\n                        <mat-icon>view_day</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button (click)=\"view='week'\" aria-label=\"Week\" matTooltip=\"Week\">\r\n                        <mat-icon>view_week</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button (click)=\"view='month'\" aria-label=\"Month\" matTooltip=\"Month\">\r\n                        <mat-icon>view_module</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <!-- / TOOLBAR -->\r\n\r\n            <!-- HEADER BOTTOM -->\r\n            <div class=\"header-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n                 [@animate]=\"{value:'*',params:{delay:'150ms'}}\">\r\n\r\n                <button mat-icon-button class=\"arrow\"\r\n                        mwlCalendarPreviousView\r\n                        [view]=\"view\"\r\n                        [(viewDate)]=\"viewDate\"\r\n                        (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                        aria-label=\"Previous\">\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                </button>\r\n\r\n                <div class=\"title\">\r\n                    {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\r\n                </div>\r\n\r\n                <button mat-icon-button class=\"arrow\"\r\n                        mwlCalendarNextView\r\n                        [view]=\"view\"\r\n                        [(viewDate)]=\"viewDate\"\r\n                        (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                        aria-label=\"Next\">\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </button>\r\n            </div>\r\n            <!-- / HEADER BOTTOM -->\r\n        </div>\r\n\r\n        <!-- ADD EVENT BUTTON -->\r\n        <button mat-fab class=\"add-event-button mat-accent\" (click)=\"addEvent()\" aria-label=\"Add event\"\r\n                [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n        <!-- / ADD EVENT BUTTON -->\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\" fusePerfectScrollbar [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\r\n        <div [ngSwitch]=\"view\">\r\n            <mwl-calendar-month-view\r\n                *ngSwitchCase=\"'month'\"\r\n                [viewDate]=\"viewDate\"\r\n                [events]=\"events\"\r\n                [refresh]=\"refresh\"\r\n                [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                (dayClicked)=\"dayClicked($event.day)\"\r\n                (eventClicked)=\"editEvent('edit', $event.event)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n                (beforeViewRender)=\"beforeMonthViewRender($event)\">\r\n            </mwl-calendar-month-view>\r\n            <mwl-calendar-week-view\r\n                *ngSwitchCase=\"'week'\"\r\n                [viewDate]=\"viewDate\"\r\n                (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                [events]=\"events\"\r\n                [refresh]=\"refresh\"\r\n                (dayClicked)=\"dayClicked($event.day)\"\r\n                (eventClicked)=\"editEvent('edit', $event.event)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n            </mwl-calendar-week-view>\r\n            <mwl-calendar-day-view\r\n                *ngSwitchCase=\"'day'\"\r\n                [viewDate]=\"viewDate\"\r\n                (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                [events]=\"events\"\r\n                [refresh]=\"refresh\"\r\n                (dayClicked)=\"dayClicked($event.day)\"\r\n                (eventClicked)=\"editEvent('edit', $event.event)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n            </mwl-calendar-day-view>\r\n        </div>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/apps/calendar/event-form/event-form.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/apps/calendar/event-form/event-form.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainAppsCalendarEventFormEventFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"matDialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 pb-0 m-0\" fusePerfectScrollbar>\r\n\r\n        <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n            <mat-form-field appearance=\"outline\" class=\"w-100-p\">\r\n                <mat-label>Title</mat-label>\r\n                <input matInput\r\n                       name=\"title\"\r\n                       formControlName=\"title\"\r\n                       required>\r\n            </mat-form-field>\r\n\r\n            <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" formGroupName=\"color\">\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-8\" fxFlex=\"50\">\r\n                    <mat-label>Primary color</mat-label>\r\n                    <input matInput\r\n                           class=\"primary-color-input border-radius-4\"\r\n                           name=\"primary color\"\r\n                           formControlName=\"primary\"\r\n                           [(colorPicker)]=\"event.color.primary\"\r\n                           cpWidth=\"290px\"\r\n                           [cpPresetColors]=\"presetColors\"\r\n                           [style.background]=\"event.color.primary\"\r\n                           (colorPickerChange)=\"event.color.primary = $event; eventForm.patchValue({color:{primary:$event}})\"/>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"pl-sm-8\" fxFlex=\"50\">\r\n                    <mat-label>Secondary color</mat-label>\r\n                    <input matInput\r\n                           class=\"secondary-color-input border-radius-4\"\r\n                           name=\"secondary color\"\r\n                           formControlName=\"secondary\"\r\n                           [(colorPicker)]=\"event.color.secondary\"\r\n                           cpWidth=\"290px\"\r\n                           [cpPresetColors]=\"presetColors\"\r\n                           [style.background]=\"event.color.secondary\"\r\n                           (colorPickerChange)=\"event.color.secondary = $event; eventForm.patchValue({color:{secondary:$event}})\"/>\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div class=\"pb-32\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n\r\n                <mat-slide-toggle name=\"allDay\" formControlName=\"allDay\" class=\"mr-24\" aria-label=\"All day\">\r\n                    All Day\r\n                </mat-slide-toggle>\r\n\r\n            </div>\r\n\r\n            <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-8\" fxFlex=\"50\">\r\n                    <mat-label>Start date</mat-label>\r\n                    <input matInput [matDatepicker]=\"startDatePicker\" name=\"start\" formControlName=\"start\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"pl-sm-8 no-errors-spacer\" fxFlex=\"50\">\r\n                    <mat-label>Start time</mat-label>\r\n                    <input matInput type=\"time\">\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"pr-sm-8\" fxFlex=\"50\">\r\n                    <mat-label>End date</mat-label>\r\n                    <input matInput [matDatepicker]=\"endDatePicker\" name=\"end\" formControlName=\"end\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #endDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"pl-sm-8 no-errors-spacer\" fxFlex=\"50\">\r\n                    <mat-label>End time</mat-label>\r\n                    <input matInput type=\"time\">\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <mat-form-field appearance=\"outline\" formGroupName=\"meta\" class=\"w-100-p\">\r\n                <mat-label>Location</mat-label>\r\n                <input matInput\r\n                       name=\"location\"\r\n                       formControlName=\"location\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\" formGroupName=\"meta\" class=\"w-100-p\">\r\n                <mat-label>Notes</mat-label>\r\n                <textarea matInput\r\n                          formControlName=\"notes\"\r\n                          mat-maxlength=\"250\"\r\n                          max-rows=\"4\">\r\n                </textarea>\r\n            </mat-form-field>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n        <button *ngIf=\"action ==='edit'\"\r\n                mat-button color=\"primary\"\r\n                class=\"mr-8\"\r\n                (click)=\"matDialogRef.close(['delete',eventForm])\"\r\n                aria-label=\"Delete\"\r\n                matTooltip=\"Delete\">\r\n            DELETE\r\n        </button>\r\n\r\n        <button *ngIf=\"action !== 'edit'\"\r\n                mat-button color=\"primary\"\r\n                class=\"save-button\"\r\n                (click)=\"matDialogRef.close(eventForm)\"\r\n                [disabled]=\"eventForm.invalid\"\r\n                aria-label=\"ADD\">\r\n            ADD\r\n        </button>\r\n\r\n        <button *ngIf=\"action === 'edit'\"\r\n                mat-button color=\"primary\"\r\n                class=\"save-button\"\r\n                (click)=\"matDialogRef.close(['save', eventForm])\"\r\n                [disabled]=\"eventForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/type-func/dist/bundle.js":
  /*!***********************************************!*\
    !*** ./node_modules/type-func/dist/bundle.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesTypeFuncDistBundleJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function getDef(f, d) {
      if (typeof f === 'undefined') {
        return typeof d === 'undefined' ? f : d;
      }

      return f;
    }

    function boolean(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return !!func.apply(this, args);
        };
      }

      return !!func ? function () {
        return true;
      } : function () {
        return false;
      };
    }

    function integer(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var n = parseInt(func.apply(this, args), 10);
          return n != n ? 0 : n;
        };
      }

      func = parseInt(func, 10);
      return func != func ? function () {
        return 0;
      } : function () {
        return func;
      };
    }

    function string(func, def) {
      func = getDef(func, def);

      if (typeof func === 'function') {
        return function f() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return '' + func.apply(this, args);
        };
      }

      func = '' + func;
      return function () {
        return func;
      };
    }

    exports.boolean = boolean;
    exports.integer = integer;
    exports.string = string; //# sourceMappingURL=bundle.js.map

    /***/
  },

  /***/
  "./src/app/main/apps/calendar/calendar.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainAppsCalendarCalendarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder;\n}\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap;\n}\n.cal-month-view .cal-days {\n  border: 1px solid;\n  border-bottom: 0;\n}\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: flex;\n}\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n.cal-month-view .cal-day-cell {\n  min-height: 100px;\n}\n@media all and (-ms-high-contrast: none) {\n  .cal-month-view .cal-day-cell {\n    display: block;\n  }\n}\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid;\n}\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid;\n}\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px;\n}\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px;\n}\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n}\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer;\n}\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default;\n}\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em;\n}\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n}\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px;\n}\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3;\n}\n.cal-month-view .cal-draggable {\n  cursor: move;\n}\n.cal-month-view .cal-drag-active * {\n  pointer-events: none;\n}\n.cal-month-view .cal-event-title {\n  cursor: pointer;\n}\n.cal-month-view .cal-event-title:hover {\n  text-decoration: underline;\n}\n.cal-month-view {\n  background-color: #fff;\n}\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa;\n}\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed;\n}\n.cal-month-view .cal-days {\n  border-color: #e1e1e1;\n}\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right-color: #e1e1e1;\n}\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom-color: #e1e1e1;\n}\n.cal-month-view .cal-day-badge {\n  background-color: #b94a48;\n  color: #fff;\n}\n.cal-month-view .cal-event {\n  background-color: #1e90ff;\n  border-color: #d1e8ff;\n  color: #fff;\n}\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: #8b0000;\n}\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7;\n}\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important;\n}\n.cal-month-view .cal-open-day-events {\n  color: #fff;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5);\n}\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */\n}\n.cal-week-view * {\n  box-sizing: border-box;\n}\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 70px;\n  border: 1px solid;\n}\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px;\n}\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid;\n}\n.cal-week-view .cal-day-headers .cal-header:first-child {\n  border-left: 1px solid;\n}\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5;\n}\n.cal-week-view .cal-day-column {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  border-left: solid 1px;\n}\n.cal-week-view .cal-event {\n  font-size: 12px;\n  border: 1px solid;\n}\n.cal-week-view .cal-time-label-column {\n  width: 70px;\n  height: 100%;\n}\n.cal-week-view .cal-all-day-events {\n  border: solid 1px;\n  border-top: 0;\n  border-bottom-width: 3px;\n  padding-top: 3px;\n  position: relative;\n}\n.cal-week-view .cal-all-day-events .cal-day-columns {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.cal-week-view .cal-all-day-events .cal-events-row {\n  position: relative;\n  height: 31px;\n  margin-left: 70px;\n}\n.cal-week-view .cal-all-day-events .cal-event-container {\n  display: inline-block;\n  position: absolute;\n}\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n  z-index: 1;\n  pointer-events: none;\n}\n.cal-week-view .cal-all-day-events .cal-event {\n  padding: 0 5px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 28px;\n  line-height: 28px;\n}\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 14px;\n}\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n  width: 6px;\n  height: 100%;\n  cursor: col-resize;\n  position: absolute;\n  top: 0;\n}\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n  right: 0;\n}\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cal-week-view .cal-drag-active {\n  pointer-events: none;\n  z-index: 1;\n}\n.cal-week-view .cal-drag-active * {\n  pointer-events: none;\n}\n.cal-week-view .cal-time-events {\n  position: relative;\n  border: solid 1px;\n  border-top: 0;\n  display: -webkit-box;\n  display: flex;\n}\n.cal-week-view .cal-time-events .cal-day-columns {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.cal-week-view .cal-time-events .cal-day-column {\n  position: relative;\n}\n.cal-week-view .cal-time-events .cal-event-container {\n  position: absolute;\n  z-index: 1;\n}\n.cal-week-view .cal-time-events .cal-event {\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  margin: 1px;\n  padding: 0 5px;\n  line-height: 25px;\n}\n.cal-week-view .cal-time-events .cal-resize-handle {\n  width: 100%;\n  height: 4px;\n  cursor: row-resize;\n  position: absolute;\n}\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n  bottom: 0;\n}\n.cal-week-view .cal-hour-segment {\n  position: relative;\n}\n.cal-week-view .cal-hour-segment::after {\n  content: \" \";\n}\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n  cursor: pointer;\n}\n.cal-week-view .cal-draggable {\n  cursor: move;\n}\n.cal-week-view mwl-calendar-week-view-hour-segment,\n.cal-week-view .cal-hour-segment {\n  display: block;\n}\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed;\n}\n.cal-week-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center;\n}\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none;\n}\n.cal-week-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.cal-week-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.cal-week-view {\n  background-color: #fff;\n}\n.cal-week-view .cal-day-headers {\n  border-color: #e1e1e1;\n}\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right-color: #e1e1e1;\n}\n.cal-week-view .cal-day-headers .cal-header:first-child {\n  border-left-color: #e1e1e1;\n}\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed;\n}\n.cal-week-view .cal-day-column {\n  border-left-color: #e1e1e1;\n}\n.cal-week-view .cal-event {\n  background-color: #d1e8ff;\n  border-color: #1e90ff;\n  color: #1e90ff;\n}\n.cal-week-view .cal-all-day-events {\n  border-color: #e1e1e1;\n}\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7;\n}\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000;\n}\n.cal-week-view .cal-time-events {\n  border-color: #e1e1e1;\n}\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n  background-color: #ededed;\n}\n.cal-week-view .cal-hour-odd {\n  background-color: #fafafa;\n}\n.cal-week-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed;\n}\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom-color: #e1e1e1;\n}\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */\n}\n.cal-day-view * {\n  box-sizing: border-box;\n}\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px;\n  overflow-x: auto;\n  position: relative;\n}\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block;\n}\n.cal-day-view .cal-hour-segment::after {\n  content: \" \";\n}\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed;\n}\n.cal-day-view .cal-time {\n  font-weight: bold;\n  width: 70px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none;\n}\n.cal-day-view .cal-drag-active .cal-hour-segment {\n  pointer-events: none;\n}\n.cal-day-view .cal-event-container {\n  position: absolute;\n  cursor: pointer;\n}\n.cal-day-view .cal-event-container.resize-active {\n  z-index: 1;\n  pointer-events: none;\n}\n.cal-day-view .cal-event {\n  padding: 5px;\n  font-size: 12px;\n  border: 1px solid;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n}\n.cal-day-view .cal-all-day-events > * {\n  cursor: pointer;\n}\n.cal-day-view .cal-draggable {\n  cursor: move;\n}\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.cal-day-view .cal-drag-active {\n  z-index: 1;\n}\n.cal-day-view .cal-drag-active * {\n  pointer-events: none;\n}\n.cal-day-view .cal-resize-handle {\n  width: 100%;\n  height: 4px;\n  cursor: row-resize;\n  position: absolute;\n}\n.cal-day-view .cal-resize-handle.cal-resize-handle-after-end {\n  bottom: 0;\n}\n.cal-day-view {\n  background-color: #fff;\n}\n.cal-day-view .cal-hour-rows {\n  border-color: #e1e1e1;\n}\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa;\n}\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom-color: #e1e1e1;\n}\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed;\n}\n.cal-day-view .cal-event {\n  background-color: #d1e8ff;\n  border-color: #1e90ff;\n  color: #1e90ff;\n}\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9;\n}\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n}\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n}\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n}\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n}\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  text-align: center;\n  border-radius: 0.25rem;\n}\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  border-top-color: #000;\n}\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  border-right-color: #000;\n}\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  border-bottom-color: #000;\n}\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  border-left-color: #000;\n}\n.cal-tooltip-inner {\n  color: #fff;\n  background-color: #000;\n}\n.cal-month-view .cal-header .cal-cell {\n  font-weight: 600;\n}\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 150px;\n  }\n}\n@media screen and (min-width: 1920px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 200px;\n  }\n}\n.cal-month-view .cal-day-cell.cal-selected {\n  border: none;\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.cal-month-view .cal-open-day-events {\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.54);\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.cal-month-view .cal-open-day-events > div {\n  padding: 0 16px;\n  margin: 8px 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  -webkit-transition: box-shadow 300ms ease;\n  transition: box-shadow 300ms ease;\n}\n.cal-month-view .cal-open-day-events > div:first-of-type {\n  margin-top: 16px;\n}\n.cal-month-view .cal-open-day-events > div:last-of-type {\n  margin-bottom: 16px;\n}\n.cal-month-view .cal-open-day-events > div:hover {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.cal-month-view .cal-open-day-events > div .cal-event {\n  top: 0;\n  margin: 0;\n}\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title {\n  display: block;\n  padding: 21px 24px;\n  line-height: 1;\n  text-decoration: none;\n}\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n  display: block;\n  line-height: 1;\n  padding: 8px;\n}\n.cal-week-view .cal-header > b {\n  font-weight: 600;\n}\n.cal-week-view .cal-event {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cal-week-view .cal-event mwl-calendar-event-title {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-ordinal-group: 1;\n          order: 0;\n}\n.cal-week-view .cal-event mwl-calendar-event-title .cal-event-title {\n  display: block;\n  line-height: 1;\n  text-decoration: none;\n}\n.cal-week-view .cal-event mwl-calendar-event-actions {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n.cal-week-view .cal-event mwl-calendar-event-actions .cal-event-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cal-week-view .cal-event mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n  display: block;\n  line-height: 1;\n  padding: 8px;\n}\n.cal-day-view .cal-time {\n  font-weight: 600;\n}\n.cal-day-view .cal-event {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.cal-day-view .cal-event mwl-calendar-event-title {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-ordinal-group: 1;\n          order: 0;\n}\n.cal-day-view .cal-event mwl-calendar-event-title .cal-event-title {\n  display: block;\n  height: 26px;\n  line-height: 26px;\n  text-decoration: none;\n}\n.cal-day-view .cal-event mwl-calendar-event-actions {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n.cal-day-view .cal-event mwl-calendar-event-actions .cal-event-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.cal-day-view .cal-event mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n  display: block;\n  line-height: 1;\n  padding: 4px;\n}\n.cal-day-view .cal-hour-segment:after, .cal-day-view .cal-hour-segment::after {\n  content: \"\" !important;\n}\n#calendar .header {\n  height: 200px;\n  min-height: 200px;\n  max-height: 200px;\n  position: relative;\n  background-size: 100% auto;\n  background-position: 0 50%;\n  background-repeat: no-repeat;\n  background-color: #FAFAFA;\n  color: #FFFFFF;\n}\n@media screen and (max-width: 599px) {\n  #calendar .header {\n    height: 164px;\n    min-height: 164px;\n    max-height: 164px;\n  }\n}\n#calendar .header:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.45);\n}\n#calendar .header.Jan {\n  background-image: url(\"/assets/images/calendar/winter.jpg\");\n  background-position: 0 85%;\n}\n#calendar .header.Feb {\n  background-image: url(\"/assets/images/calendar/winter.jpg\");\n  background-position: 0 85%;\n}\n#calendar .header.Mar {\n  background-image: url(\"/assets/images/calendar/spring.jpg\");\n  background-position: 0 40%;\n}\n#calendar .header.Apr {\n  background-image: url(\"/assets/images/calendar/spring.jpg\");\n  background-position: 0 40%;\n}\n#calendar .header.May {\n  background-image: url(\"/assets/images/calendar/spring.jpg\");\n  background-position: 0 40%;\n}\n#calendar .header.Jun {\n  background-image: url(\"/assets/images/calendar/summer.jpg\");\n  background-position: 0 80%;\n}\n#calendar .header.Jul {\n  background-image: url(\"/assets/images/calendar/summer.jpg\");\n  background-position: 0 80%;\n}\n#calendar .header.Aug {\n  background-image: url(\"/assets/images/calendar/summer.jpg\");\n  background-position: 0 80%;\n}\n#calendar .header.Sep {\n  background-image: url(\"/assets/images/calendar/autumn.jpg\");\n  background-position: 0 40%;\n}\n#calendar .header.Oct {\n  background-image: url(\"/assets/images/calendar/autumn.jpg\");\n  background-position: 0 40%;\n}\n#calendar .header.Nov {\n  background-image: url(\"/assets/images/calendar/autumn.jpg\");\n  background-position: 0 40%;\n}\n#calendar .header.Dec {\n  background-image: url(\"/assets/images/calendar/winter.jpg\");\n  background-position: 0 85%;\n}\n#calendar .header .header-content {\n  height: 100%;\n}\n#calendar .header .header-content .header-top {\n  position: relative;\n  z-index: 2;\n}\n#calendar .header .header-content .header-top .logo .logo-icon {\n  margin-right: 16px;\n}\n#calendar .header .header-content .header-top .logo .logo-text {\n  font-size: 24px;\n}\n#calendar .header .header-content .header-bottom {\n  position: relative;\n  z-index: 2;\n}\n#calendar .header .header-content .header-bottom .title {\n  font-size: 20px;\n  min-width: 160px;\n  text-align: center;\n  font-weight: 600;\n}\n#calendar .header .add-event-button {\n  position: absolute;\n  right: 18px;\n  bottom: -26px;\n  z-index: 10;\n}\n#calendar .content {\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvY2FsZW5kYXIvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL25vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvY2FsZW5kYXIvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL25vZGVfbW9kdWxlc1xcYW5ndWxhci1jYWxlbmRhclxcc2Nzc1xcbW9kdWxlc1xcbW9udGhcXGNhbGVuZGFyLW1vbnRoLXZpZXcuc2NzcyIsInNyYy9hcHAvbWFpbi9hcHBzL2NhbGVuZGFyL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9ub2RlX21vZHVsZXNcXGFuZ3VsYXItY2FsZW5kYXJcXHNjc3NcXG1vZHVsZXNcXHdlZWtcXGNhbGVuZGFyLXdlZWstdmlldy5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvY2FsZW5kYXIvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL25vZGVfbW9kdWxlc1xcYW5ndWxhci1jYWxlbmRhclxcc2Nzc1xcbW9kdWxlc1xcZGF5XFxjYWxlbmRhci1kYXktdmlldy5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvY2FsZW5kYXIvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL25vZGVfbW9kdWxlc1xcYW5ndWxhci1jYWxlbmRhclxcc2Nzc1xcbW9kdWxlc1xcY29tbW9uXFxjYWxlbmRhci10b29sdGlwLnNjc3MiLCJzcmMvYXBwL21haW4vYXBwcy9jYWxlbmRhci9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXGFwcHNcXGNhbGVuZGFyXFxjYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hcHBzL2NhbGVuZGFyL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXEBmdXNlXFxzY3NzXFxwYXJ0aWFsc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDMDFDaEIsa0NBQUE7QUE4aERBLDJDQUFBO0FBd0NBLHFCQUFBO0FDaDJGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUYzREo7QUU4REU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRjVESjtBRStERTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUY3REo7QUVnRUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBRjlESjtBRWlFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBRi9ESjtBRWtFRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSwwQkFBQTtVQUFBLG9CQUFBO0FGaEVKO0FFbUVFO0VBQ0UsaUJBQUE7QUZqRUo7QUVvRUk7RUFKRjtJQUtJLGNBQUE7RUZqRUo7QUFDRjtBRW9FRTtFQUNFLHVCQUFBO0FGbEVKO0FFcUVFO0VBQ0Usd0JBQUE7QUZuRUo7QUVzRUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUZwRUo7QUV1RUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUZyRUo7QUV3RUU7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBRnRFSjtBRXlFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUZ2RUo7QUUwRUU7RUFDRSxlQUFBO0FGeEVKO0FFMkVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUZ6RUo7QUU0RUU7RUFDRSxnQkFBQTtBRjFFSjtBRTZFRTtFQUNFLGFBQUE7QUYzRUo7QUU4RUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUY1RUo7QUVnRkk7O0VBRUUsWUFBQTtBRjlFTjtBRWtGRTtFQUNFLFlBQUE7QUZoRko7QUVtRkU7RUFDRSxvQkFBQTtBRmpGSjtBRW9GRTtFQUNFLGVBQUE7QUZsRko7QUVvRkk7RUFDRSwwQkFBQTtBRmxGTjtBRTdHRTtFQUNFLHNCQUFBO0FGZ0hKO0FFOUdJO0VBQ0UseUJBQUE7QUZnSE47QUU3R0k7O0VBRUUseUJBQUE7QUYrR047QUU1R0k7RUFDRSxxQkFBQTtBRjhHTjtBRTNHSTtFQUNFLDJCQUFBO0FGNkdOO0FFMUdJO0VBQ0UsNEJBQUE7QUY0R047QUV6R0k7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUYyR047QUV4R0k7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBRjBHTjtBRXZHSTtFQUNFLGNBQUE7QUZ5R047QUV0R0k7RUFDRSx5QkFBQTtBRndHTjtBRXJHSTtFQUNFLG9DQUFBO0FGdUdOO0FFcEdJO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7QUZzR047QUdqRkE7RUEyTEUseURBQUE7QUh0R0Y7QUdwRkU7RUFDRSxzQkFBQTtBSHNGSjtBR25GRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUhxRko7QUdsRkU7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUhvRko7QUdsRkk7RUFDRSx1QkFBQTtBSG9GTjtBR2pGSTtFQUNFLHNCQUFBO0FIbUZOO0FHL0VFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FIaUZKO0FHOUVFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0Esc0JBQUE7QUhnRko7QUc3RUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUgrRUo7QUc1RUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBSDhFSjtBRzNFRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBSDZFSjtBRzNFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBSDZFTjtBRzFFSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FINEVOO0FHekVJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBSDJFTjtBR3pFTTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBSDJFUjtBR3ZFSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FIeUVOO0FHdEVJO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBSHdFTjtBR3JFSTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUh1RU47QUdwRUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUhzRU47QUduRUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FIcUVOO0FHbkVNO0VBQ0UsUUFBQTtBSHFFUjtBR2hFRTs7RUFFRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUhrRUo7QUcvREU7RUFDRSxvQkFBQTtFQUNBLFVBQUE7QUhpRUo7QUcvREk7RUFDRSxvQkFBQTtBSGlFTjtBRzdERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FIK0RKO0FHN0RJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0FIK0ROO0FHNURJO0VBQ0Usa0JBQUE7QUg4RE47QUczREk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUg2RE47QUcxREk7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBSDRETjtBR3pESTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBSDJETjtBR3pETTtFQUNFLFNBQUE7QUgyRFI7QUd0REU7RUFDRSxrQkFBQTtBSHdESjtBR3RESTtFQUNFLFlBQUE7QUh3RE47QUdwREU7RUFDRSxlQUFBO0FIc0RKO0FHbkRFO0VBQ0UsWUFBQTtBSHFESjtBR2pERTs7RUFFRSxjQUFBO0FIbURKO0FHaERFOztFQUVFLDBCQUFBO0FIa0RKO0FHL0NFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBSGlESjtBRzdDSTtFQUNFLGFBQUE7QUgrQ047QUczQ0U7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FINkNKO0FHMUNFO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBSDRDSjtBRzdVRTtFQUNFLHNCQUFBO0FIZ1ZKO0FHOVVJO0VBQ0UscUJBQUE7QUhnVk47QUc1VU07RUFDRSwyQkFBQTtBSDhVUjtBRzNVTTtFQUNFLDBCQUFBO0FINlVSO0FHelVJOztFQUVFLHlCQUFBO0FIMlVOO0FHeFVJO0VBQ0UsMEJBQUE7QUgwVU47QUd2VUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBSHlVTjtBR3RVSTtFQUNFLHFCQUFBO0FId1VOO0FHclVJO0VBQ0UseUJBQUE7QUh1VU47QUdwVUk7RUFDRSxjQUFBO0FIc1VOO0FHblVJO0VBQ0UscUJBQUE7QUhxVU47QUdqVVU7RUFDRSx5QkFBQTtBSG1VWjtBRzdUSTtFQUNFLHlCQUFBO0FIK1ROO0FHNVRJO0VBQ0UseUJBQUE7QUg4VE47QUczVEk7O0VBRUUsNEJBQUE7QUg2VE47QUlsV0E7RUFZRSx5REFBQTtBSjBWRjtBSXJXRTtFQUNFLHNCQUFBO0FKdVdKO0FJcFdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBSnNXSjtBSWxXRTs7RUFFRSxjQUFBO0FKb1dKO0FJaldFO0VBQ0UsWUFBQTtBSm1XSjtBSWhXRTs7RUFFRSwwQkFBQTtBSmtXSjtBSS9WRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBSmlXSjtBSTdWSTtFQUNFLGFBQUE7QUorVk47QUkzVkU7RUFDRSxvQkFBQTtBSjZWSjtBSTFWRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBSjRWSjtBSTFWSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBSjRWTjtBSXhWRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUowVko7QUl2VkU7RUFDRSxlQUFBO0FKeVZKO0FJdFZFO0VBQ0UsWUFBQTtBSndWSjtBSXJWRTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUp1Vko7QUlwVkU7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FKc1ZKO0FJblZFO0VBQ0UsVUFBQTtBSnFWSjtBSW5WSTtFQUNFLG9CQUFBO0FKcVZOO0FJalZFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FKbVZKO0FJalZJO0VBQ0UsU0FBQTtBSm1WTjtBSXBkRTtFQUNFLHNCQUFBO0FKdWRKO0FJcmRJO0VBQ0UscUJBQUE7QUp1ZE47QUlwZEk7RUFDRSx5QkFBQTtBSnNkTjtBSW5kSTs7RUFFRSw0QkFBQTtBSnFkTjtBSWxkSTs7RUFFRSx5QkFBQTtBSm9kTjtBSWpkSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FKbWROO0FLcmRBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUx3ZEY7QUtyZEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUx3ZEY7QUtyZEE7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUx3ZEY7QUtyZEE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUx3ZEY7QUtyZEE7RUFDRSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUx3ZEY7QUtyZEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBTHdkRjtBS3JkQTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBTHdkRjtBS3JkQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBTHdkRjtBS3JkQTtFQUNFLFFBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBTHdkRjtBS3JkQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FMd2RGO0FLcmRBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUx3ZEY7QUsvakJFO0VBQ0Usc0JBQUE7QUxra0JKO0FLL2pCRTtFQUNFLHdCQUFBO0FMa2tCSjtBSy9qQkU7RUFDRSx5QkFBQTtBTGtrQko7QUsvakJFO0VBQ0UsdUJBQUE7QUxra0JKO0FLL2pCRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBTGtrQko7QU1ybEJRO0VBQ0ksZ0JBQUE7QU53bEJaO0FPL2pCUTtFRHJCSjtJQUdRLGlCQUFBO0VOcWxCVjtBQUNGO0FPcGtCUTtFRHJCSjtJQU9RLGlCQUFBO0VOc2xCVjtBQUNGO0FNcGxCUTtFQUNJLFlBQUE7RUxrYVYsMkhBQUE7QURxTEY7QU1sbEJJO0VBQ0ksK0NBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FOb2xCUjtBTWxsQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFTGlaVix5SEFBQTtFSy9ZVSx5Q0FBQTtFQUFBLGlDQUFBO0FOb2xCWjtBTWxsQlk7RUFDSSxnQkFBQTtBTm9sQmhCO0FNamxCWTtFQUNJLG1CQUFBO0FObWxCaEI7QU1obEJZO0VMcVlWLHlIQUFBO0FEOE1GO0FNL2tCWTtFQUNJLE1BQUE7RUFDQSxTQUFBO0FOaWxCaEI7QU05a0JZO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FOZ2xCaEI7QU05a0JnQjtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBTmdsQnBCO0FNMWtCZ0I7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FONGtCcEI7QU0xa0JvQjtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBTjRrQnhCO0FNamtCSTtFQUNJLGdCQUFBO0FOb2tCUjtBTWprQkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FObWtCUjtBTWprQlE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsNEJBQUE7VUFBQSxRQUFBO0FObWtCWjtBTWprQlk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FObWtCaEI7QU0vakJRO0VBQ0ksNEJBQUE7VUFBQSxRQUFBO0FOaWtCWjtBTS9qQlk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FOaWtCaEI7QU0vakJnQjtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBTmlrQnBCO0FNeGpCSTtFQUNJLGdCQUFBO0FOMmpCUjtBTXhqQkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QU4wakJSO0FNeGpCUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSw0QkFBQTtVQUFBLFFBQUE7QU4wakJaO0FNeGpCWTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBTjBqQmhCO0FNdGpCUTtFQUNJLDRCQUFBO1VBQUEsUUFBQTtBTndqQlo7QU10akJZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBTndqQmhCO0FNdGpCZ0I7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QU53akJwQjtBTWhqQlE7RUFFSSxzQkFBQTtBTmlqQlo7QU0xaUJJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBTjZpQlI7QU9sdEJRO0VENEpKO0lBWVEsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RU44aUJWO0FBQ0Y7QU01aUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBTjhpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0zaUJRO0VBQ0ksMkRBQUE7RUFDQSwwQkFBQTtBTjZpQlo7QU0xaUJRO0VBQ0ksWUFBQTtBTjRpQlo7QU0xaUJZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FONGlCaEI7QU14aUJvQjtFQUNJLGtCQUFBO0FOMGlCeEI7QU12aUJvQjtFQUNJLGVBQUE7QU55aUJ4QjtBTXBpQlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QU5zaUJoQjtBTXBpQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBTnNpQnBCO0FNamlCUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FObWlCWjtBTS9oQkk7RUFDSSxhQUFBO0FOaWlCUiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuLmNhbC1tb250aC12aWV3IC5jYWwtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtaGVhZGVyIC5jYWwtY2VsbCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXRvcCB7XG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIGZsZXg6IDE7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1iYWRnZSB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudHMge1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbjogM3B4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAycHg7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtaW4tbW9udGguY2FsLWhhcy1ldmVudHMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LW51bWJlciB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIC5jYWwtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LWJhZGdlLFxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZXZlbnQge1xuICBvcGFjaXR5OiAwLjM7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmU7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50LXRpdGxlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jYWwtbW9udGgtdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGw6aG92ZXIsXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLmNhbC1oYXMtZXZlbnRzLmNhbC1vcGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTFlMWUxO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTRhNDg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xuICBib3JkZXItY29sb3I6ICNkMWU4ZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXdlZWtlbmQgLmNhbC1kYXktbnVtYmVyIHtcbiAgY29sb3I6ICM4YjAwMDA7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtdG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmZGU3O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWRyYWctb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTAgIWltcG9ydGFudDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNhbC13ZWVrLXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG59XG4uY2FsLXdlZWstdmlldyAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlciB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnRzLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIucmVzaXplLWFjdGl2ZSB7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXN0YXJ0cy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZW5kcy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gIHJpZ2h0OiAwO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCxcbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBib3JkZXItdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZXZlbnQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbiAgbWFyZ2luOiAxcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBjdXJzb3I6IHJvdy1yZXNpemU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gIGJvdHRvbTogMDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLCoFwiO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudC1jb250YWluZXI6bm90KC5jYWwtZHJhZ2dhYmxlKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLmNhbC13ZWVrLXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQsXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudC5jYWwtYWZ0ZXItaG91ci1zdGFydCAuY2FsLXRpbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1zdGFydHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1lbmRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmNhbC13ZWVrLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyB7XG4gIGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6aG92ZXIsXG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtZHJhZy1vdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTFlMWUxO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWU4ZmY7XG4gIGJvcmRlci1jb2xvcjogIzFlOTBmZjtcbiAgY29sb3I6ICMxZTkwZmY7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIuY2FsLXRvZGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmRlNztcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4ge1xuICBjb2xvcjogIzhiMDAwMDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMge1xuICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnM6bm90KC5jYWwtcmVzaXplLWFjdGl2ZSkgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLW9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRyYWctb3ZlciAuY2FsLWhvdXItc2VnbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UxZTFlMTtcbn1cblxuLmNhbC1kYXktdmlldyB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi9cbn1cbi5jYWwtZGF5LXZpZXcgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtaG91ci1yb3dzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FsLWRheS12aWV3IG13bC1jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnQsXG4uY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiwqBcIjtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4uY2FsLWRheS12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBkYXNoZWQ7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtdGltZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQuY2FsLWFmdGVyLWhvdXItc3RhcnQgLmNhbC10aW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAuY2FsLWhvdXItc2VnbWVudCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50LWNvbnRhaW5lci5yZXNpemUtYWN0aXZlIHtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgPiAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1zdGFydHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWVuZHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWRyYWctYWN0aXZlIHtcbiAgei1pbmRleDogMTtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgY3Vyc29yOiByb3ctcmVzaXplO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICBib3R0b206IDA7XG59XG5cbi5jYWwtZGF5LXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWhvdXItcm93cyB7XG4gIGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4uY2FsLWRheS12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIsXG4uY2FsLWRheS12aWV3IC5jYWwtZHJhZy1vdmVyIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWU4ZmY7XG4gIGJvcmRlci1jb2xvcjogIzFlOTBmZjtcbiAgY29sb3I6ICMxZTkwZmY7XG59XG5cbi5jYWwtdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA3MDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3AgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggMDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwO1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtYm90dG9tIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4O1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWxlZnQgLmNhbC10b29sdGlwLWFycm93IHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCAwIDVweCA1cHg7XG59XG5cbi5jYWwtdG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmNhbC10b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDA7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWxlZnQgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDA7XG59XG5cbi5jYWwtdG9vbHRpcC1pbm5lciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIgLmNhbC1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gIH1cbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1zZWxlY3RlZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYge1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBlYXNlO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXY6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IC5jYWwtZXZlbnQge1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUge1xuICBmbGV4OiAxO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSAuY2FsLWV2ZW50LXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIxcHggMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiBtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlciA+IGIge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleDogMTtcbiAgb3JkZXI6IDA7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSAuY2FsLWV2ZW50LXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zIHtcbiAgb3JkZXI6IDE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2FsLWRheS12aWV3IC5jYWwtdGltZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleDogMTtcbiAgb3JkZXI6IDA7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IG13bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zIHtcbiAgb3JkZXI6IDE7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6YWZ0ZXIsIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xufVxuXG4jY2FsZW5kYXIgLmhlYWRlciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI2NhbGVuZGFyIC5oZWFkZXIge1xuICAgIGhlaWdodDogMTY0cHg7XG4gICAgbWluLWhlaWdodDogMTY0cHg7XG4gICAgbWF4LWhlaWdodDogMTY0cHg7XG4gIH1cbn1cbiNjYWxlbmRhciAuaGVhZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuI2NhbGVuZGFyIC5oZWFkZXIuSmFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvd2ludGVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA4NSU7XG59XG4jY2FsZW5kYXIgLmhlYWRlci5GZWIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci93aW50ZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDg1JTtcbn1cbiNjYWxlbmRhciAuaGVhZGVyLk1hciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL3NwcmluZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgNDAlO1xufVxuI2NhbGVuZGFyIC5oZWFkZXIuQXByIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvc3ByaW5nLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA0MCU7XG59XG4jY2FsZW5kYXIgLmhlYWRlci5NYXkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci9zcHJpbmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDQwJTtcbn1cbiNjYWxlbmRhciAuaGVhZGVyLkp1biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL3N1bW1lci5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgODAlO1xufVxuI2NhbGVuZGFyIC5oZWFkZXIuSnVsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvc3VtbWVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA4MCU7XG59XG4jY2FsZW5kYXIgLmhlYWRlci5BdWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci9zdW1tZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDgwJTtcbn1cbiNjYWxlbmRhciAuaGVhZGVyLlNlcCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL2F1dHVtbi5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgNDAlO1xufVxuI2NhbGVuZGFyIC5oZWFkZXIuT2N0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvYXV0dW1uLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA0MCU7XG59XG4jY2FsZW5kYXIgLmhlYWRlci5Ob3Yge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci9hdXR1bW4uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDQwJTtcbn1cbiNjYWxlbmRhciAuaGVhZGVyLkRlYyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL3dpbnRlci5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgODUlO1xufVxuI2NhbGVuZGFyIC5oZWFkZXIgLmhlYWRlci1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI2NhbGVuZGFyIC5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5oZWFkZXItdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuI2NhbGVuZGFyIC5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5oZWFkZXItdG9wIC5sb2dvIC5sb2dvLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4jY2FsZW5kYXIgLmhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmhlYWRlci10b3AgLmxvZ28gLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiNjYWxlbmRhciAuaGVhZGVyIC5oZWFkZXItY29udGVudCAuaGVhZGVyLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbiNjYWxlbmRhciAuaGVhZGVyIC5oZWFkZXItY29udGVudCAuaGVhZGVyLWJvdHRvbSAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNjYWxlbmRhciAuaGVhZGVyIC5hZGQtZXZlbnQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMThweDtcbiAgYm90dG9tOiAtMjZweDtcbiAgei1pbmRleDogMTA7XG59XG4jY2FsZW5kYXIgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xufSIsIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIGNhbiB1c2UgcmVsYXRpdmUgaW1wb3J0cyBmb3IgaW1wb3J0cyBmcm9tIHRoZSBjZGsgYmVjYXVzZSB3ZSBidW5kbGUgZXZlcnl0aGluZ1xuLy8gdXAgaW50byBhIHNpbmdsZSBmbGF0IHNjc3MgZmlsZSBmb3IgbWF0ZXJpYWwuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMCAhZGVmYXVsdDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vXG4vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSkge1xuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiAkdGFyZ2V0KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDtcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAgIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDAsICR0ZXh0OiAkZGVmYXVsdCkge1xuICAkcmVzdWx0OiBtYXBfbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcbiAgICB0ZXh0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICR0ZXh0KSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcF9tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJGNvbG9yLW1hcCBUaGUgdGhlbWUgcGFsZXR0ZSAob3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIEBwYXJhbSAkaHVlIFRoZSBodWUgZnJvbSB0aGUgcGFsZXR0ZSB0byB1c2UuIElmIHRoaXMgaXMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGl0IHdpbGxcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXG4vLyBAcGFyYW0gJG9wYWNpdHkgVGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgZm9yIHRoZSBjb2xvci5cbkBmdW5jdGlvbiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWU6IGRlZmF1bHQsICRvcGFjaXR5OiBudWxsKSB7XG4gIC8vIElmIGh1ZUtleSBpcyBhIG51bWJlciBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgdGhlbiBpdCBhY3R1YWxseSBjb250YWlucyBhblxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxuICBAaWYgdHlwZS1vZigkaHVlKSA9PSBudW1iZXIgYW5kICRodWUgPj0gMCBhbmQgJGh1ZSA8PSAxIHtcbiAgICBAcmV0dXJuIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJGh1ZSk7XG4gIH1cblxuICAkY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsICRodWUpO1xuXG4gIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgLy8gSWYgdGhlICRjb2xvciByZXNvbHZlZCB0byBzb21ldGhpbmcgZGlmZmVyZW50IGZyb20gYSBjb2xvciAoZS5nLiBhIENTUyB2YXJpYWJsZSksXG4gICAgLy8gd2UgY2FuJ3QgYXBwbHkgdGhlIG9wYWNpdHkgYW55d2F5IHNvIHdlIHJldHVybiB0aGUgdmFsdWUgYXMgaXMsIG90aGVyd2lzZSBTYXNzIGNhblxuICAgIC8vIHRocm93IGFuIGVycm9yIG9yIG91dHB1dCBzb21ldGhpbmcgaW52YWxpZC5cbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfVxuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsIGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBsaWdodCB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWxpZ2h0LXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiBmYWxzZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGRhcmsgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1kYXJrLXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiB0cnVlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cblxuJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTogMC4xO1xuXG5AbWl4aW4gbWF0LXJpcHBsZSgpIHtcblxuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbkBtaXhpbiBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwX2dldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvLyBJZiB0aGUgcmlwcGxlIGNvbG9yIGlzIHJlc29sdmVzIHRvIGEgY29sb3IgKnR5cGUqLCB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5LCBvdGhlcndpc2VcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSkgd2UgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb2xvciBhbmQgc2V0dGluZyBhbiBvcGFjaXR5LlxuICAgIEBpZiAodHlwZS1vZigkZm9yZWdyb3VuZC1iYXNlKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtYmFzZTtcbiAgICAgIG9wYWNpdHk6ICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICY6aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSxcbiAgICAmOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gSW4gbXVsdGlwbGUgbW9kZSB0aGVyZSBpcyBhIGNoZWNrYm94IHRvIHNob3cgdGhhdCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICYubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIHRoZSBhY2NlbnQgY29sb3IuIE5vdGUgdGhhdCB0aGUgcHNldWRvIGNoZWNrYm94ZXMgYXJlIG1lYW50IHRvIGluaGVyaXQgdGhlXG4gIC8vIHRoZW1lIGZyb20gdGhlaXIgcGFyZW50LCByYXRoZXIgdGhhbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHRoZW1pbmcsIHdoaWNoIGlzIHdoeSB3ZVxuICAvLyBkb24ndCBhdHRhY2ggdG8gdGhlIGBtYXQtKmAgY2xhc3Nlcy5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgJi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFJlcHJlc2VudHMgYSB0eXBvZ3JhcGh5IGxldmVsIGZyb20gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWxldmVsKFxuICAkZm9udC1zaXplLFxuICAkbGluZS1oZWlnaHQ6ICRmb250LXNpemUsXG4gICRmb250LXdlaWdodDogNDAwLFxuICAkZm9udC1mYW1pbHk6IG51bGwsXG4gICRsZXR0ZXItc3BhY2luZzogbnVsbCkge1xuXG4gIEByZXR1cm4gKFxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSxcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LFxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQsXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSxcbiAgICBsZXR0ZXItc3BhY2luZzogJGxldHRlci1zcGFjaW5nXG4gICk7XG59XG5cbi8vIFJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHR5cG9ncmFwaHkgbGV2ZWxzLlxuLy8gRGVmYXVsdHMgY29tZSBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWxcbi8vIE5vdGU6IFRoZSBzcGVjIGRvZXNuJ3QgbWVudGlvbiBsZXR0ZXIgc3BhY2luZy4gVGhlIHZhbHVlcyBoZXJlIGNvbWUgZnJvbVxuLy8gZXllYmFsbGluZyBpdCB1bnRpbCBpdCBsb29rZWQgZXhhY3RseSBsaWtlIHRoZSBzcGVjIGV4YW1wbGVzLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wNWVtKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMmVtKSxcbiAgJGRpc3BsYXktMjogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDQ1cHgsIDQ4cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbSksXG4gICRkaXNwbGF5LTE6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgzNHB4LCA0MHB4LCA0MDApLFxuICAkaGVhZGxpbmU6ICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjRweCwgMzJweCwgNDAwKSxcbiAgJHRpdGxlOiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDIwcHgsIDMycHgsIDUwMCksXG4gICRzdWJoZWFkaW5nLTI6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNnB4LCAyOHB4LCA0MDApLFxuICAkc3ViaGVhZGluZy0xOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTVweCwgMjRweCwgNDAwKSxcbiAgJGJvZHktMjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDI0cHgsIDUwMCksXG4gICRib2R5LTE6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyMHB4LCA0MDApLFxuICAkY2FwdGlvbjogICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTJweCwgMjBweCwgNDAwKSxcbiAgJGJ1dHRvbjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDE0cHgsIDUwMCksXG4gIC8vIExpbmUtaGVpZ2h0IG11c3QgYmUgdW5pdC1sZXNzIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUuXG4gICRpbnB1dDogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbChpbmhlcml0LCAxLjEyNSwgNDAwKVxuKSB7XG5cbiAgLy8gRGVjbGFyZSBhbiBpbml0aWFsIG1hcCB3aXRoIGFsbCBvZiB0aGUgbGV2ZWxzLlxuICAkY29uZmlnOiAoXG4gICAgZGlzcGxheS00OiAgICAgICRkaXNwbGF5LTQsXG4gICAgZGlzcGxheS0zOiAgICAgICRkaXNwbGF5LTMsXG4gICAgZGlzcGxheS0yOiAgICAgICRkaXNwbGF5LTIsXG4gICAgZGlzcGxheS0xOiAgICAgICRkaXNwbGF5LTEsXG4gICAgaGVhZGxpbmU6ICAgICAgICRoZWFkbGluZSxcbiAgICB0aXRsZTogICAgICAgICAgJHRpdGxlLFxuICAgIHN1YmhlYWRpbmctMjogICAkc3ViaGVhZGluZy0yLFxuICAgIHN1YmhlYWRpbmctMTogICAkc3ViaGVhZGluZy0xLFxuICAgIGJvZHktMjogICAgICAgICAkYm9keS0yLFxuICAgIGJvZHktMTogICAgICAgICAkYm9keS0xLFxuICAgIGNhcHRpb246ICAgICAgICAkY2FwdGlvbixcbiAgICBidXR0b246ICAgICAgICAgJGJ1dHRvbixcbiAgICBpbnB1dDogICAgICAgICAgJGlucHV0LFxuICApO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgbGV2ZWxzIGFuZCBzZXQgdGhlIGBmb250LWZhbWlseWAgb2YgdGhlIG9uZXMgdGhhdCBkb24ndCBoYXZlIG9uZSB0byB0aGUgYmFzZS5cbiAgLy8gTm90ZSB0aGF0IFNhc3MgY2FuJ3QgbW9kaWZ5IG1hcHMgaW4gcGxhY2UsIHdoaWNoIG1lYW5zIHRoYXQgd2UgbmVlZCB0byBtZXJnZSBhbmQgcmUtYXNzaWduLlxuICBAZWFjaCAka2V5LCAkbGV2ZWwgaW4gJGNvbmZpZyB7XG4gICAgQGlmIG1hcC1nZXQoJGxldmVsLCBmb250LWZhbWlseSkgPT0gbnVsbCB7XG4gICAgICAkbmV3LWxldmVsOiBtYXAtbWVyZ2UoJGxldmVsLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xuICAgICAgJGNvbmZpZzogbWFwLW1lcmdlKCRjb25maWcsICgka2V5OiAkbmV3LWxldmVsKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSBiYXNlIGZvbnQgZmFtaWx5IHRvIHRoZSBjb25maWcuXG4gIEByZXR1cm4gbWFwLW1lcmdlKCRjb25maWcsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG59XG5cbi8vIEFkZHMgdGhlIGJhc2UgdHlwb2dyYXBoeSBzdHlsZXMsIGJhc2VkIG9uIGEgY29uZmlnLlxuQG1peGluIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZywgJHNlbGVjdG9yOiAnLm1hdC10eXBvZ3JhcGh5Jykge1xuICAubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAjeyRzZWxlY3Rvcn0gaDEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDIsIC5tYXQtdGl0bGUsICN7JHNlbGVjdG9yfSBoMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsICN7JHNlbGVjdG9yfSBoMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAjeyRzZWxlY3Rvcn0gaDQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAvLyBOb3RlOiB0aGUgc3BlYyBkb2Vzbid0IGhhdmUgYW55dGhpbmcgdGhhdCB3b3VsZCBjb3JyZXNwb25kIHRvIGg1IGFuZCBoNiwgYnV0IHdlIGFkZCB0aGVzZSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuIFRoZSBmb250IHNpemVzIGNvbWUgZnJvbSB0aGUgQ2hyb21lIHVzZXIgYWdlbnQgc3R5bGVzIHdoaWNoIGhhdmUgaDUgYXQgMC44M2VtXG4gIC8vIGFuZCBoNiBhdCAwLjY3ZW0uXG4gIC5tYXQtaDUsICN7JHNlbGVjdG9yfSBoNSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjgzLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWg2LCAjeyRzZWxlY3Rvcn0gaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpICogMC42NyxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgI3skc2VsZWN0b3J9IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICB9XG4gIH1cblxuICAubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBjYXB0aW9uKTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuJG1hdC1iYWRnZS1mb250LXNpemU6IDEycHg7XG4kbWF0LWJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XG4kbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRtYXQtYmFkZ2Utc21hbGwtc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgLSA2O1xuJG1hdC1iYWRnZS1sYXJnZS1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX21hdC1iYWRnZS1zaXplKCRzaXplKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWJvdmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICB0b3A6IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVsb3cge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBib3R0b206IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLW92ZXJsYXAge1xuICAgICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpIHtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAodHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCB0eXBlLW9mKCRhcHAtYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbWl4KCRhcHAtYmFja2dyb3VuZCwgcmdiYSgkYmFkZ2UtY29sb3IsIDEpLCAoMSAtICRiYWRnZS1vcGFjaXR5KSAqIDEwMCUpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFkZ2UtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LFxuICAubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBUaGUgYWN0aXZlIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGFkZGVkXG4gIC8vIHNvIGl0IGNhbiBhbmltYXRlIHNjYWxlIHRvIGRlZmF1bHRcbiAgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICAgIC8vIFNjYWxlIHRvIGBub25lYCBpbnN0ZWFkIG9mIGAxYCB0byBhdm9pZCBibHVycnkgdGV4dCBpbiBzb21lIGJyb3dzZXJzLlxuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLXNtYWxsLXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWxhcmdlLXNpemUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6ICRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZTtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIC8vIFNldCB0aGUgZm9udCBzaXplIHRvIDc1JSBvZiB0aGUgb3JpZ2luYWwuXG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDAuNzU7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgdGV4dCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChibGFjay1vbi13aGl0ZSkge1xuICAgICAgLy8gSGF2aW5nIHRoZSBvbmUgYWJvdmUgYmUgIWltcG9ydGFudCBlbmRzIHVwIG92ZXJyaWRpbmcgdGhlIGJyb3dzZXIncyBhdXRvbWF0aWNcbiAgICAgIC8vIGNvbG9yIGludmVyc2lvbiBzbyB3ZSBuZWVkIHRvIHJlLWludmVydCBpdCBvdXJzZWx2ZXMgZm9yIGJsYWNrLW9uLXdoaXRlLlxuICAgICAgc3Ryb2tlOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIG9uZSBpcyBtb3ZlZCBkb3duIGhlcmUgc28gaXQgY2FuIHRhcmdldCBib3RoXG4gIC8vIHRoZSB0aGVtZSBjb2xvcnMgYW5kIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIGJlY2F1c2UgaXQgaGlkZXMgdGhlIGNoZWNrYm94IG91dGxpbmUuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgYmFzZSk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLFxuICAubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKCR1bnNlbGVjdGVkLWZvcmVncm91bmQsICR1bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuXG4gICAgJjpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSB7XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDMsICR0aGVtZSk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgICRiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJhY2tncm91bmQsICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdG8gYmFja2dyb3VuZCB0byBhIGNvbG9yIChlLmcuIGl0J3MgYSBDU1MgdmFyaWFibGUpLFxuICAgICAgLy8gZmFsbCBiYWNrIHRvIGZhZGluZyB0aGUgY29udGVudCBvdXQgdmlhIGBvcGFjaXR5YC5cbiAgICAgIG9wYWNpdHk6ICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQoJGNvbG9yLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgLy8gZmFkZSBpdCBvdXQgc28gd2UgZmFsbCBiYWNrIHRvIHJlZHVjaW5nIHRoZSBlbGVtZW50IG9wYWNpdHkuIE5vdGUgdGhhdCB3ZSBkb24ndCB1c2UgdGhlXG4gICAgICAvLyAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQsIGJlY2F1c2UgaGludCB0ZXh0IHVzdWFsbHkgaGFzIHNvbWUgb3BhY2l0eSBhcHBsaWVkXG4gICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSksIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybiksIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LCAwLjIpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjEyKTtcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjcpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFzcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAodHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIHR5cGUtb2YoJHRleHQtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBtaXgoJHRhYmxlLWJhY2tncm91bmQsIHJnYmEoJHRleHQtY29sb3IsIDEpLCAoMSAtICR0ZXh0LW9wYWNpdHkpICogMTAwJSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4gIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAsIC5tYXQtdGFiLW5hdi1iYXIge1xuICAgICR0aGVtZS1jb2xvcnM6IChcbiAgICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgICAgYWNjZW50OiAkYWNjZW50LFxuICAgICAgd2FybjogJHdhcm5cbiAgICApO1xuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgdGFic1xuICAgICAgJi5tYXQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBpbmsgYmFyIHdoZW4gYmFja2dyb3VuZCBjb2xvciBpcyB0aGUgc2FtZVxuICAgICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYi1sYWJlbC1mb2N1cygkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRtYXQtZ3JleSwgNzAwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMnO1xuXG4kY2FsLW1vbnRoLXZpZXctdmFyczogKCkgIWRlZmF1bHQ7XG4kY2FsLW1vbnRoLXZpZXctdmFyczogbWFwLW1lcmdlKCRjYWwtdmFycywgJGNhbC1tb250aC12aWV3LXZhcnMpO1xuXG5AbWl4aW4gY2FsLW1vbnRoLXZpZXctdGhlbWUoJG92ZXJyaWRlcykge1xuICAkdGhlbWU6IG1hcC1tZXJnZSgkY2FsLW1vbnRoLXZpZXctdmFycywgJG92ZXJyaWRlcyk7XG5cbiAgLmNhbC1tb250aC12aWV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYmctcHJpbWFyeSk7XG5cbiAgICAuY2FsLWNlbGwtcm93OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBiZy1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgIC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsOmhvdmVyLFxuICAgIC5jYWwtY2VsbC5jYWwtaGFzLWV2ZW50cy5jYWwtb3BlbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYmctYWN0aXZlKTtcbiAgICB9XG5cbiAgICAuY2FsLWRheXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FsLWRheS1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYmFkZ2UtY29sb3IpO1xuICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCB3aGl0ZSk7XG4gICAgfVxuXG4gICAgLmNhbC1ldmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgZXZlbnQtY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBldmVudC1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCB3aGl0ZSk7XG4gICAgfVxuXG4gICAgLmNhbC1kYXktY2VsbC5jYWwtd2Vla2VuZCAuY2FsLWRheS1udW1iZXIge1xuICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCB3ZWVrZW5kLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FsLWRheS1jZWxsLmNhbC10b2RheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgdG9kYXktYmcpO1xuICAgIH1cblxuICAgIC5jYWwtZGF5LWNlbGwuY2FsLWRyYWctb3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4obWFwLWdldCgkdGhlbWUsIGJnLWFjdGl2ZSksIDUlKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgd2hpdGUpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGdyYXkpO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2JhKG1hcC1nZXQoJHRoZW1lLCBibGFjayksIDAuNSk7XG4gICAgfVxuICB9XG59XG5cbi5jYWwtbW9udGgtdmlldyB7XG4gIC5jYWwtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIC5jYWwtaGVhZGVyIC5jYWwtY2VsbCB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmNhbC1kYXlzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG5cbiAgLmNhbC1jZWxsLXRvcCB7XG4gICAgbWluLWhlaWdodDogNzhweDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmNhbC1jZWxsLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5jYWwtY2VsbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAuY2FsLWRheS1jZWxsIHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcblxuICAgIC8vIGllMTEgaGFjayBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItY2FsZW5kYXIvaXNzdWVzLzUwMVxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgfVxuXG4gIC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIH1cblxuICAuY2FsLWRheS1iYWRnZSB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLmNhbC1kYXktbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNhbC1ldmVudHMge1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmNhbC1ldmVudCB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cblxuICAuY2FsLWRheS1jZWxsLmNhbC1pbi1tb250aC5jYWwtaGFzLWV2ZW50cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNhbC1kYXktY2VsbC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LW51bWJlciB7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IC5jYWwtZGF5LW51bWJlciB7XG4gICAgZm9udC1zaXplOiAxLjllbTtcbiAgfVxuXG4gIC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgLmNhbC1vcGVuLWRheS1ldmVudHMgLmNhbC1ldmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICB9XG5cbiAgLmNhbC1vdXQtbW9udGgge1xuICAgIC5jYWwtZGF5LWJhZGdlLFxuICAgIC5jYWwtZXZlbnQge1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gIH1cblxuICAuY2FsLWRyYWctYWN0aXZlICoge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNhbC1ldmVudC10aXRsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgY2FsLW1vbnRoLXZpZXctdGhlbWUoJGNhbC1tb250aC12aWV3LXZhcnMpO1xuIiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcblxuJGNhbC13ZWVrLXZpZXctdmFyczogKCkgIWRlZmF1bHQ7XG4kY2FsLXdlZWstdmlldy12YXJzOiBtYXAtbWVyZ2UoJGNhbC12YXJzLCAkY2FsLXdlZWstdmlldy12YXJzKTtcblxuQG1peGluIGNhbC13ZWVrLXZpZXctdGhlbWUoJG92ZXJyaWRlcykge1xuICAkdGhlbWU6IG1hcC1tZXJnZSgkY2FsLXdlZWstdmlldy12YXJzLCAkb3ZlcnJpZGVzKTtcblxuICAuY2FsLXdlZWstdmlldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJnLXByaW1hcnkpO1xuXG4gICAgLmNhbC1kYXktaGVhZGVycyB7XG4gICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBib3JkZXItY29sb3IpO1xuICAgIH1cblxuICAgIC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXIge1xuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmhvdmVyLFxuICAgIC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1kcmFnLW92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJnLWFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLmNhbC1kYXktY29sdW1uIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FsLWV2ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBldmVudC1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgZXZlbnQtY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsIGV2ZW50LWNvbG9yLXByaW1hcnkpO1xuICAgIH1cblxuICAgIC5jYWwtYWxsLWRheS1ldmVudHMge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FsLWhlYWRlci5jYWwtdG9kYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIHRvZGF5LWJnKTtcbiAgICB9XG5cbiAgICAuY2FsLWhlYWRlci5jYWwtd2Vla2VuZCBzcGFuIHtcbiAgICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgd2Vla2VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmNhbC10aW1lLWV2ZW50cyB7XG4gICAgICBib3JkZXItY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBib3JkZXItY29sb3IpO1xuXG4gICAgICAuY2FsLWRheS1jb2x1bW5zIHtcbiAgICAgICAgJjpub3QoLmNhbC1yZXNpemUtYWN0aXZlKSB7XG4gICAgICAgICAgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJnLWFjdGl2ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhbC1ob3VyLW9kZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYmctc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAuY2FsLWRyYWctb3ZlciAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYmctYWN0aXZlKTtcbiAgICB9XG5cbiAgICAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgICAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLmNhbC13ZWVrLXZpZXcge1xuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLmNhbC1kYXktaGVhZGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gIH1cblxuICAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyIHtcbiAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtZGF5LWhlYWRlcnMgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAuY2FsLWRheS1jb2x1bW4ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4O1xuICB9XG5cbiAgLmNhbC1ldmVudCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICB9XG5cbiAgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNhbC1hbGwtZGF5LWV2ZW50cyB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY2FsLWRheS1jb2x1bW5zIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmNhbC1ldmVudHMtcm93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMzFweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgIH1cblxuICAgIC5jYWwtZXZlbnQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgJi5yZXNpemUtYWN0aXZlIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhbC1ldmVudCB7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIH1cblxuICAgIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jYWwtZW5kcy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgIC5jYWwtdGltZS1sYWJlbC1jb2x1bW4ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcblxuICAgICAgJi5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FsLWV2ZW50LFxuICAuY2FsLWhlYWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmNhbC1kcmFnLWFjdGl2ZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTtcblxuICAgICYgKiB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuY2FsLXRpbWUtZXZlbnRzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmNhbC1kYXktY29sdW1ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuY2FsLWV2ZW50IHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgY3Vyc29yOiByb3ctcmVzaXplO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAmLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ1xcMDBhMCc7XG4gICAgfVxuICB9XG5cbiAgLmNhbC1ldmVudC1jb250YWluZXI6bm90KC5jYWwtZHJhZ2dhYmxlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNhbC1kcmFnZ2FibGUge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi9cbiAgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQsIC8qIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItY2FsZW5kYXIvaXNzdWVzLzI2MCovXG4gIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuICAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBkYXNoZWQ7XG4gIH1cblxuICAuY2FsLXRpbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNhbC1ob3VyLXNlZ21lbnQuY2FsLWFmdGVyLWhvdXItc3RhcnQge1xuICAgIC5jYWwtdGltZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtc3RhcnRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIH1cblxuICAuY2FsLWVuZHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxufVxuXG5AaW5jbHVkZSBjYWwtd2Vlay12aWV3LXRoZW1lKCRjYWwtd2Vlay12aWV3LXZhcnMpO1xuIiwiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcblxuJGNhbC1kYXktdmlldy12YXJzOiAoKSAhZGVmYXVsdDtcbiRjYWwtZGF5LXZpZXctdmFyczogbWFwLW1lcmdlKCRjYWwtdmFycywgJGNhbC1kYXktdmlldy12YXJzKTtcblxuQG1peGluIGNhbC1kYXktdmlldy10aGVtZSgkb3ZlcnJpZGVzKSB7XG4gICR0aGVtZTogbWFwLW1lcmdlKCRjYWwtZGF5LXZpZXctdmFycywgJG92ZXJyaWRlcyk7XG5cbiAgLmNhbC1kYXktdmlldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJnLXByaW1hcnkpO1xuXG4gICAgLmNhbC1ob3VyLXJvd3Mge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgYm9yZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuY2FsLWhvdXI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJnLXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4gICAgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIsXG4gICAgLmNhbC1kcmFnLW92ZXIgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJnLWFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLmNhbC1ldmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgZXZlbnQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGJvcmRlci1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGV2ZW50LWNvbG9yLXByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBldmVudC1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLmNhbC1kYXktdmlldyB7XG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuY2FsLWhvdXItcm93cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG4gIG13bC1jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnQsIC8qIGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItY2FsZW5kYXIvaXNzdWVzLzI2MCovXG4gIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jYWwtaG91ci1zZWdtZW50OjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMDBhMCc7XG4gIH1cblxuICAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkO1xuICB9XG5cbiAgLmNhbC10aW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNhbC1ob3VyLXNlZ21lbnQuY2FsLWFmdGVyLWhvdXItc3RhcnQge1xuICAgIC5jYWwtdGltZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtZHJhZy1hY3RpdmUgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmLnJlc2l6ZS1hY3RpdmUge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtZXZlbnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNhbC1hbGwtZGF5LWV2ZW50cyA+ICoge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jYWwtZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gIH1cblxuICAuY2FsLXN0YXJ0cy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICB9XG5cbiAgLmNhbC1lbmRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIH1cblxuICAuY2FsLWRyYWctYWN0aXZlIHtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJiAqIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgY3Vyc29yOiByb3ctcmVzaXplO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICYuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cblxuQGluY2x1ZGUgY2FsLWRheS12aWV3LXRoZW1lKCRjYWwtZGF5LXZpZXctdmFycyk7XG4iLCJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMnO1xuXG4kY2FsLXRvb2x0aXAtdmFyczogKCkgIWRlZmF1bHQ7XG4kY2FsLXRvb2x0aXAtdmFyczogbWFwLW1lcmdlKCRjYWwtdmFycywgJGNhbC10b29sdGlwLXZhcnMpO1xuXG5AbWl4aW4gY2FsLXRvb2x0aXAtdGhlbWUoJG92ZXJyaWRlcykge1xuICAkdGhlbWU6IG1hcC1tZXJnZSgkY2FsLXRvb2x0aXAtdmFycywgJG92ZXJyaWRlcyk7XG5cbiAgLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBibGFjayk7XG4gIH1cblxuICAuY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQgLmNhbC10b29sdGlwLWFycm93IHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBibGFjayk7XG4gIH1cblxuICAuY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtYm90dG9tIC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWFwLWdldCgkdGhlbWUsIGJsYWNrKTtcbiAgfVxuXG4gIC5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBibGFjayk7XG4gIH1cblxuICAuY2FsLXRvb2x0aXAtaW5uZXIge1xuICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBibGFjayk7XG4gIH1cbn1cblxuLmNhbC10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDcwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3Age1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggNXB4IDA7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtYm90dG9tIC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHg7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDtcbn1cblxuLmNhbC10b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uY2FsLXRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbkBpbmNsdWRlIGNhbC10b29sdGlwLXRoZW1lKCRjYWwtdG9vbHRpcC12YXJzKTtcbiIsIkBpbXBvcnQgXCJzcmMvQGZ1c2Uvc2Nzcy9mdXNlXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYW5ndWxhci1jYWxlbmRhci9zY3NzL2FuZ3VsYXItY2FsZW5kYXJcIjtcclxuXHJcbi5jYWwtbW9udGgtdmlldyB7XHJcblxyXG4gICAgLmNhbC1oZWFkZXIge1xyXG5cclxuICAgICAgICAuY2FsLWNlbGwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FsLWRheS1jZWxsIHtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludChsZykge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoZ3QtbGcpIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmNhbC1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbig5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbC1vcGVuLWRheS1ldmVudHMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA4cHggMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKDMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FsLWV2ZW50IHtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhbC1ldmVudC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjFweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMge1xyXG5cclxuICAgICAgICAgICAgICAgIC5jYWwtZXZlbnQtYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWwtZXZlbnQtYWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhbC13ZWVrLXZpZXcge1xyXG5cclxuICAgIC5jYWwtaGVhZGVyID4gYiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FsLWV2ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICAgIC5jYWwtZXZlbnQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMge1xyXG4gICAgICAgICAgICBvcmRlcjogMTtcclxuXHJcbiAgICAgICAgICAgIC5jYWwtZXZlbnQtYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhbC1ldmVudC1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhbC1kYXktdmlldyB7XHJcblxyXG4gICAgLmNhbC10aW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWwtZXZlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICAgIC5jYWwtZXZlbnQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMge1xyXG4gICAgICAgICAgICBvcmRlcjogMTtcclxuXHJcbiAgICAgICAgICAgIC5jYWwtZXZlbnQtYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhbC1ldmVudC1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FsLWhvdXItc2VnbWVudCB7XHJcblxyXG4gICAgICAgICY6YWZ0ZXIsXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2NhbGVuZGFyIHtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoeHMpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjRweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTY0cHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2NHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLkphbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvd2ludGVyLmpwZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDg1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5GZWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL3dpbnRlci5qcGcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA4NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuTWFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci9zcHJpbmcuanBnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLkFwciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvc3ByaW5nLmpwZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDQwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5NYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL3NwcmluZy5qcGcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuSnVuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci9zdW1tZXIuanBnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLkp1bCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvc3VtbWVyLmpwZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDgwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5BdWcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL3N1bW1lci5qcGcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuU2VwIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci9hdXR1bW4uanBnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLk9jdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIvYXV0dW1uLmpwZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDQwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5Ob3Yge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyL2F1dHVtbi5qcGcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuRGVjIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYWxlbmRhci93aW50ZXIuanBnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgODUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10b3Age1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgICAgICAgICAubG9nbyB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubG9nby10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci1ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkLWV2ZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTI2cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBNZWRpYSBzdGVwIGJyZWFrcG9pbnQgbWl4aW4gYmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCBsaWJcclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJyxcclxuICAgIHNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXHJcbiAgICBtZDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcclxuICAgIGxnOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyxcclxuICAgIHhsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJyxcclxuICAgIGx0LXNtOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknLFxyXG4gICAgbHQtbWQ6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXHJcbiAgICBsdC1sZzogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KScsXHJcbiAgICBsdC14bDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXHJcbiAgICBndC14czogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpJyxcclxuICAgIGd0LXNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknLFxyXG4gICAgZ3QtbWQ6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCknLFxyXG4gICAgZ3QtbGc6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCknXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBSZS1tYXAgdGhlIGJyZWFrcG9pbnRzIGZvciB0aGUgaGVscGVyIGNsYXNzZXNcclxuJGhlbHBlci1icmVha3BvaW50czogKFxyXG4gICAgeHM6IG51bGwsXHJcbiAgICBzbTogJ2d0LXhzJyxcclxuICAgIG1kOiAnZ3Qtc20nLFxyXG4gICAgbGc6ICdndC1tZCcsXHJcbiAgICB4bDogJ2d0LWxnJ1xyXG4pO1xyXG5cclxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQoJGJyZWFrcG9pbnROYW1lKSB7XHJcblxyXG4gICAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludE5hbWUpO1xyXG5cclxuICAgIEBpZiAoJG1lZGlhUXVlcnkgPT0gbnVsbCkge1xyXG4gICAgICAgIEBjb250ZW50XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAbWVkaWEgI3skbWVkaWFRdWVyeX0ge1xyXG4gICAgICAgICAgICBAY29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/apps/calendar/calendar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.component.ts ***!
    \**********************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppMainAppsCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fuse/components/confirm-dialog/confirm-dialog.component */
    "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/animations */
    "./src/@fuse/animations/index.ts");
    /* harmony import */


    var app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.service */
    "./src/app/main/apps/calendar/calendar.service.ts");
    /* harmony import */


    var app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/apps/calendar/event.model */
    "./src/app/main/apps/calendar/event.model.ts");
    /* harmony import */


    var app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/apps/calendar/event-form/event-form.component */
    "./src/app/main/apps/calendar/event-form/event-form.component.ts");

    var CalendarComponent = /*#__PURE__*/function () {
      function CalendarComponent(_matDialog, _calendarService) {
        var _this26 = this;

        _classCallCheck(this, CalendarComponent);

        this._matDialog = _matDialog;
        this._calendarService = _calendarService;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // Set the defaults

        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = {
          date: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(new Date())
        };
        this.actions = [{
          label: '<i class="material-icons s-16">edit</i>',
          onClick: function onClick(_ref62) {
            var event = _ref62.event;

            _this26.editEvent('edit', event);
          }
        }, {
          label: '<i class="material-icons s-16">delete</i>',
          onClick: function onClick(_ref63) {
            var event = _ref63.event;

            _this26.deleteEvent(event);
          }
        }];
        /**
         * Get events from service/server
         */

        this.setEvents();
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(CalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          /**
           * Watch re-render-refresh for updating db
           */
          this.refresh.subscribe(function (updateDB) {
            if (updateDB) {
              _this27._calendarService.updateEvents(_this27.events);
            }
          });

          this._calendarService.onEventsUpdated.subscribe(function (events) {
            _this27.setEvents();

            _this27.refresh.next();
          });
        } // -----------------------------------------------------------------------------------------------------
        // @ Public methods
        // -----------------------------------------------------------------------------------------------------

        /**
         * Set events
         */

      }, {
        key: "setEvents",
        value: function setEvents() {
          var _this28 = this;

          this.events = this._calendarService.events.map(function (item) {
            item.actions = _this28.actions;
            return new app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_8__["CalendarEventModel"](item);
          });
        }
        /**
         * Before View Renderer
         *
         * @param {any} header
         * @param {any} body
         */

      }, {
        key: "beforeMonthViewRender",
        value: function beforeMonthViewRender(_ref64) {
          var _this29 = this;

          var header = _ref64.header,
              body = _ref64.body;

          /**
           * Get the selected day
           */
          var _selectedDay = body.find(function (_day) {
            return _day.date.getTime() === _this29.selectedDay.date.getTime();
          });

          if (_selectedDay) {
            /**
             * Set selected day style
             * @type {string}
             */
            _selectedDay.cssClass = 'cal-selected';
          }
        }
        /**
         * Day clicked
         *
         * @param {MonthViewDay} day
         */

      }, {
        key: "dayClicked",
        value: function dayClicked(day) {
          var date = day.date;
          var events = day.events;

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameMonth"])(date, this.viewDate)) {
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
              this.activeDayIsOpen = false;
            } else {
              this.activeDayIsOpen = true;
              this.viewDate = date;
            }
          }

          this.selectedDay = day;
          this.refresh.next();
        }
        /**
         * Event times changed
         * Event dropped or resized
         *
         * @param {CalendarEvent} event
         * @param {Date} newStart
         * @param {Date} newEnd
         */

      }, {
        key: "eventTimesChanged",
        value: function eventTimesChanged(_ref65) {
          var event = _ref65.event,
              newStart = _ref65.newStart,
              newEnd = _ref65.newEnd;
          event.start = newStart;
          event.end = newEnd; // console.warn('Dropped or resized', event);

          this.refresh.next(true);
        }
        /**
         * Delete Event
         *
         * @param event
         */

      }, {
        key: "deleteEvent",
        value: function deleteEvent(event) {
          var _this30 = this;

          this.confirmDialogRef = this._matDialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogComponent"], {
            disableClose: false
          });
          this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
          this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              var eventIndex = _this30.events.indexOf(event);

              _this30.events.splice(eventIndex, 1);

              _this30.refresh.next(true);
            }

            _this30.confirmDialogRef = null;
          });
        }
        /**
         * Edit Event
         *
         * @param {string} action
         * @param {CalendarEvent} event
         */

      }, {
        key: "editEvent",
        value: function editEvent(action, event) {
          var _this31 = this;

          var eventIndex = this.events.indexOf(event);
          this.dialogRef = this._matDialog.open(app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["CalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
              event: event,
              action: action
            }
          });
          this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
              return;
            }

            var actionType = response[0];
            var formData = response[1];

            switch (actionType) {
              /**
               * Save
               */
              case 'save':
                _this31.events[eventIndex] = Object.assign(_this31.events[eventIndex], formData.getRawValue());

                _this31.refresh.next(true);

                break;

              /**
               * Delete
               */

              case 'delete':
                _this31.deleteEvent(event);

                break;
            }
          });
        }
        /**
         * Add Event
         */

      }, {
        key: "addEvent",
        value: function addEvent() {
          var _this32 = this;

          this.dialogRef = this._matDialog.open(app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["CalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
              action: 'new',
              date: this.selectedDay.date
            }
          });
          this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
              return;
            }

            var newEvent = response.getRawValue();
            newEvent.actions = _this32.actions;

            _this32.events.push(newEvent);

            _this32.refresh.next(true);
          });
        }
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_7__["CalendarService"]
      }];
    };

    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'calendar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calendar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/apps/calendar/calendar.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calendar.component.scss */
      "./src/app/main/apps/calendar/calendar.component.scss")).default]
    })], CalendarComponent);
    /***/
  },

  /***/
  "./src/app/main/apps/calendar/calendar.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.module.ts ***!
    \*******************************************************/

  /*! exports provided: CalendarModule */

  /***/
  function srcAppMainAppsCalendarCalendarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
      return CalendarModule;
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


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.component */
    "./src/app/main/apps/calendar/calendar.component.ts");
    /* harmony import */


    var app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! app/main/apps/calendar/calendar.service */
    "./src/app/main/apps/calendar/calendar.service.ts");
    /* harmony import */


    var app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! app/main/apps/calendar/event-form/event-form.component */
    "./src/app/main/apps/calendar/event-form/event-form.component.ts");

    var routes = [{
      path: '**',
      component: app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_17__["CalendarComponent"],
      children: [],
      resolve: {
        chat: app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_18__["CalendarService"]
      }
    }];

    var CalendarModule = function CalendarModule() {
      _classCallCheck(this, CalendarModule);
    };

    CalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_apps_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_17__["CalendarComponent"], app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_19__["CalendarEventFormDialogComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__["adapterFactory"]
      }), ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_15__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_16__["FuseConfirmDialogModule"]],
      providers: [app_main_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_18__["CalendarService"]],
      entryComponents: [app_main_apps_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_19__["CalendarEventFormDialogComponent"]]
    })], CalendarModule);
    /***/
  },

  /***/
  "./src/app/main/apps/calendar/calendar.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/apps/calendar/calendar.service.ts ***!
    \********************************************************/

  /*! exports provided: CalendarService */

  /***/
  function srcAppMainAppsCalendarCalendarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarService", function () {
      return CalendarService;
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

    var CalendarService = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function CalendarService(_httpClient) {
        _classCallCheck(this, CalendarService);

        this._httpClient = _httpClient; // Set the defaults

        this.onEventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Resolver
       *
       * @param {ActivatedRouteSnapshot} route
       * @param {RouterStateSnapshot} state
       * @returns {Observable<any> | Promise<any> | any}
       */


      _createClass(CalendarService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this33 = this;

          return new Promise(function (resolve, reject) {
            Promise.all([_this33.getEvents()]).then(function (_ref66) {
              var _ref67 = _slicedToArray(_ref66, 1),
                  events = _ref67[0];

              resolve();
            }, reject);
          });
        }
        /**
         * Get events
         *
         * @returns {Promise<any>}
         */

      }, {
        key: "getEvents",
        value: function getEvents() {
          var _this34 = this;

          return new Promise(function (resolve, reject) {
            _this34._httpClient.get('api/calendar/events').subscribe(function (response) {
              _this34.events = response.data;

              _this34.onEventsUpdated.next(_this34.events);

              resolve(_this34.events);
            }, reject);
          });
        }
        /**
         * Update events
         *
         * @param events
         * @returns {Promise<any>}
         */

      }, {
        key: "updateEvents",
        value: function updateEvents(events) {
          var _this35 = this;

          return new Promise(function (resolve, reject) {
            _this35._httpClient.post('api/calendar/events', {
              id: 'events',
              data: _toConsumableArray(events)
            }).subscribe(function (response) {
              _this35.getEvents();
            }, reject);
          });
        }
      }]);

      return CalendarService;
    }();

    CalendarService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CalendarService);
    /***/
  },

  /***/
  "./src/app/main/apps/calendar/event-form/event-form.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/main/apps/calendar/event-form/event-form.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainAppsCalendarEventFormEventFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    /***/
  },

  /***/
  "./src/app/main/apps/calendar/event-form/event-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/main/apps/calendar/event-form/event-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CalendarEventFormDialogComponent */

  /***/
  function srcAppMainAppsCalendarEventFormEventFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventFormDialogComponent", function () {
      return CalendarEventFormDialogComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fuse/mat-colors */
    "./src/@fuse/mat-colors/index.ts");
    /* harmony import */


    var app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/main/apps/calendar/event.model */
    "./src/app/main/apps/calendar/event.model.ts");

    var CalendarEventFormDialogComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {MatDialogRef<CalendarEventFormDialogComponent>} matDialogRef
       * @param _data
       * @param {FormBuilder} _formBuilder
       */
      function CalendarEventFormDialogComponent(matDialogRef, _data, _formBuilder) {
        _classCallCheck(this, CalendarEventFormDialogComponent);

        this.matDialogRef = matDialogRef;
        this._data = _data;
        this._formBuilder = _formBuilder;
        this.presetColors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_4__["MatColors"].presets;
        this.event = _data.event;
        this.action = _data.action;

        if (this.action === 'edit') {
          this.dialogTitle = this.event.title;
        } else {
          this.dialogTitle = 'New Event';
          this.event = new app_main_apps_calendar_event_model__WEBPACK_IMPORTED_MODULE_5__["CalendarEventModel"]({
            start: _data.date,
            end: _data.date
          });
        }

        this.eventForm = this.createEventForm();
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Create the event form
       *
       * @returns {FormGroup}
       */


      _createClass(CalendarEventFormDialogComponent, [{
        key: "createEventForm",
        value: function createEventForm() {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.title),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.start),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.end),
            allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.allDay),
            color: this._formBuilder.group({
              primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.color.primary),
              secondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.color.secondary)
            }),
            meta: this._formBuilder.group({
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.meta.location),
              notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.event.meta.notes)
            })
          });
        }
      }]);

      return CalendarEventFormDialogComponent;
    }();

    CalendarEventFormDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CalendarEventFormDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'calendar-event-form-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/apps/calendar/event-form/event-form.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-form.component.scss */
      "./src/app/main/apps/calendar/event-form/event-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], CalendarEventFormDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/apps/calendar/event.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/main/apps/calendar/event.model.ts ***!
    \***************************************************/

  /*! exports provided: CalendarEventModel */

  /***/
  function srcAppMainAppsCalendarEventModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventModel", function () {
      return CalendarEventModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/index.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);

    var CalendarEventModel =
    /**
     * Constructor
     *
     * @param data
     */
    function CalendarEventModel(data) {
      _classCallCheck(this, CalendarEventModel);

      data = data || {};
      this.start = new Date(data.start) || Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date());
      this.end = new Date(data.end) || Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date());
      this.title = data.title || '';
      this.color = {
        primary: data.color && data.color.primary || '#1e90ff',
        secondary: data.color && data.color.secondary || '#D1E8FF'
      };
      this.draggable = data.draggable;
      this.resizable = {
        beforeStart: data.resizable && data.resizable.beforeStart || true,
        afterEnd: data.resizable && data.resizable.afterEnd || true
      };
      this.actions = data.actions || [];
      this.allDay = data.allDay || false;
      this.cssClass = data.cssClass || '';
      this.meta = {
        location: data.meta && data.meta.location || '',
        notes: data.meta && data.meta.notes || ''
      };
    };
    /***/

  }
}]);
//# sourceMappingURL=calendar-calendar-module-es5.js.map