function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/countdown/countdown.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/countdown/countdown.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsCountdownCountdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"countdown\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Countdown</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-countdown</code> is a custom built Fuse component allows you to create a countdowns.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Sample</div>\r\n        <p fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <fuse-countdown eventDate=\"2019-07-28\"></fuse-countdown>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-countdown eventDate=\"2019-07-28\"></fuse-countdown>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Inputs</div>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">eventDate</code>\r\n            <span>\r\n                The date of the event. Since fuse-countdown uses moment.js to parse the dates, any moment.js\r\n                compatible date string can be used.\r\n            </span>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/highlight/highlight.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/highlight/highlight.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsHighlightHighlightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"highlight\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Highlight</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-highlight</code> is a custom built Fuse component allows to show syntax highlighted codes.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Sample</div>\r\n        <p fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n\r\n                    <div class=\"title\">\r\n                        <span>Example Title</span>\r\n                    </div>\r\n\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n\r\n&lt;fuse-highlight lang=\"html\"&gt;\r\n    &lt;textarea #source&gt;\r\n        &lt;div class=\"title\"&gt;\r\n            &lt;span&gt;Example Title&lt;/span&gt;\r\n        &lt;/div&gt;\r\n    &lt;/textarea&gt;\r\n&lt;/fuse-highlight&gt;\r\n\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Inputs</div>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">lang</code>\r\n            <span>\r\n                Language of the code to be highlighted.\r\n            </span>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/material-color-picker/material-color-picker.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/material-color-picker/material-color-picker.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsMaterialColorPickerMaterialColorPickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"material-color-picker\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Material Color Picker</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-material-color-picker</code> is a custom built Fuse component allows you to add a color picker\r\n            that allows to choose one of the many Material spec. colors.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Sample</div>\r\n        <p fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <fuse-material-color-picker></fuse-material-color-picker>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-material-color-picker [(selectedClass)]=\"colorClass\"\r\n                                                (onColorChanged)=\"onColorChanged()\">\r\n                    </fuse-material-color-picker>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Two-way bindings</div>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">selectedClass</code>\r\n            <span>\r\n                The name of the Fuse color class to select, e.g. <code>red-500</code>\r\n            </span>\r\n        </p>\r\n        <p class=\"py-8 pt-4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">selectedBg</code>\r\n            <span>\r\n                The hex code of the color to be selected. It will be only selected if the hex code of the color\r\n                matches one of the material colors.\r\n            </span>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Outputs</div>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-16\">onColorChanged</code>\r\n            <span>\r\n                Event that triggered when a color selected. Returns an object that holds palette, hue, class name,\r\n                background and foreground colors.\r\n            </span>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/navigation/navigation.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/navigation/navigation.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"navigation\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Navigation</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-navigation</code> is a custom built Fuse component allows you to create a multi-level collapsable\r\n            navigation. It has built-in support for translations using <b>ngx-translate</b> module.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-navigation [navigation]=\"navigation\" [layout]=\"'vertical'\"></fuse-navigation>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"my-48\">\r\n            <h2>[navigation]</h2>\r\n            <p class=\"py-8\">\r\n                <code>&lt;fuse-navigation&gt;&lt;/fuse-navigation&gt;</code> uses a json file to populate\r\n                the entire navigation. It supports three different navigation items; <b>Group</b>,\r\n                <b>Collapsable</b> and <b>Item</b>. These items can be mixed and matched to create unique and complex\r\n                navigation layouts.\r\n            </p>\r\n            <p class=\"py-8\">\r\n                Navigation data can be found in <code>src/app/navigation</code> folder along with its translation\r\n                files. Navigation data and its translation files are set in <b>app.component.ts</b> file. Check that\r\n                file for more detailed usage example.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"my-48\">\r\n            <h2>[layout]</h2>\r\n            <p class=\"py-8\">\r\n                There are two different layout options for the component; <code>vertical</code> and\r\n                <code>horizontal</code>. You can set the layout using the <code>[layout]</code> input.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"section-title\">Alternative usage (preferred)</div>\r\n        <p class=\"py-8\">\r\n            An alternative usage to the above one is to using the <b>Navigation Service</b>. Simply, you get your\r\n            navigation array, register that as a navigation using the service and then set it as the current\r\n            navigation. This allows for easier updating and swapping of the navigation:\r\n        </p>\r\n\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"ts\">\r\n                <textarea #source>\r\n                    // Get your navigation array from database or file\r\n                    this.navigation = [...]\r\n\r\n                    // Register the navigation to the service\r\n                    this._fuseNavigationService.register('main', this.navigation);\r\n\r\n                    // Set the main navigation as our current navigation\r\n                    this._fuseNavigationService.setCurrentNavigation('main');\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <p class=\"py-8\">\r\n            Once you register your navigation like this, you no longer need to provide the <b>[navigation]</b> input\r\n            while using the <code>fuse-navigation</code>:\r\n        </p>\r\n\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-navigation [layout]=\"'vertical'\"></fuse-navigation>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"main-title\">Navigation item types</div>\r\n\r\n        <div class=\"section-title\">Grouping</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"json\">\r\n                <textarea #source>\r\n                    {\r\n                        'id'       : 'components',\r\n                        'title'    : 'COMPONENTS',\r\n                        'translate': 'NAV.COMPONENTS',\r\n                        'type'     : 'group',\r\n                        'children' : [\r\n                            {\r\n                                'id'   : 'ngx-datatable',\r\n                                'title': 'ngx-datatable',\r\n                                'type' : 'item',\r\n                                'url'  : '/components/datatables/ngx-datatable'\r\n                            }\r\n                        ]\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Collapsable</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"json\">\r\n                <textarea #source>\r\n                    {\r\n                        'id'       : 'datatables',\r\n                        'title'    : 'Datatables',\r\n                        'translate': 'NAV.DATATABLES',\r\n                        'type'     : 'collapsable',\r\n                        'icon'     : 'border_all',\r\n                        'children' : [\r\n                            {\r\n                                'id'   : 'ngx-datatable',\r\n                                'title': 'ngx-datatable',\r\n                                'type' : 'item',\r\n                                'url'  : '/components/datatables/ngx-datatable'\r\n                            }\r\n                        ]\r\n                    },\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Item</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"json\">\r\n                <textarea #source>\r\n                    {\r\n                        'id'       : 'countdown',\r\n                        'title'    : 'Countdown',\r\n                        'translate': 'NAV.COUNTDOWN',\r\n                        'type'     : 'item',\r\n                        'icon'     : 'settings_input_component',\r\n                        'url'      : '/components/countdown'\r\n                    },\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"main-title\">Vertical Navigation Default Folded Status</div>\r\n        <p>\r\n            It's possible to change the default folded status of the navigation.\r\n        </p>\r\n        <p>\r\n            Find the layout that you want to edit from <b>app/layout/vertical/</b> directory. Edit the layout's html\r\n            file and look for the <code>[folded]</code> attribute on <code>fuse-sidebar</code> components.\r\n        </p>\r\n        <p>\r\n            Assigning <code>true</code> to that attribute will make the vertical navigation folded by default.\r\n        </p>\r\n\r\n        <div class=\"main-title\">Updating the navigation</div>\r\n\r\n        <p class=\"message-box warning\">\r\n            In order to make the runtime modifications easier, it's strongly recommended that to give a unique id\r\n            to all of your navigation items.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Show / Hide certain navigation items</div>\r\n\r\n        <div class=\"my-24\">\r\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"showHideCalendarMenuItem()\">\r\n                Show / Hide calendar menu item\r\n            </button>\r\n        </div>\r\n\r\n        <p class=\"py-8 mb-48\">\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    hidden = false;\r\n\r\n                    showHideCalendarMenuItem(): void\r\n                    {\r\n                        // Toggle the visibility\r\n                        this.hidden = !this.hidden;\r\n\r\n                        // Update the calendar menu item\r\n                        this._fuseNavigationService.updateNavigationItem('calendar', {\r\n                            hidden: this.hidden\r\n                        });\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Update navigation item on-the-fly</div>\r\n\r\n        <div class=\"my-24\">\r\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"updateMailBadge()\">\r\n                Update Mail app badge\r\n            </button>\r\n        </div>\r\n\r\n        <p class=\"py-8 mb-48\">\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    updateMailBadge()\r\n                    {\r\n                        // Update the badge title\r\n                        this._fuseNavigationService.updateNavigationItem('mail', {\r\n                            badge: {\r\n                                title: 35\r\n                            }\r\n                        });\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Add a subitem to the Calendar nav item</div>\r\n\r\n        <div class=\"my-24\">\r\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"addSubitemToCalendar()\">\r\n                Add a subitem to the Calendar nav item\r\n            </button>\r\n        </div>\r\n\r\n        <p class=\"py-8 mb-48\">\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    addSubitemToCalendar()\r\n                    {\r\n                        // Prepare the new nav item\r\n                        const newNavItem = {\r\n                            id   : 'sub-item',\r\n                            title: 'Sub Item',\r\n                            type : 'item',\r\n                            url  : '/apps/calendar'\r\n                        };\r\n\r\n                        this._fuseNavigationService.updateNavigationItem('calendar', {\r\n                            type: 'collapsable',\r\n                            children: [\r\n                                newNavItem\r\n                            ]\r\n                        });\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Add a nav item with custom function</div>\r\n\r\n        <div class=\"my-24\">\r\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"addNavItemWithCustomFunction()\">\r\n                Add a nav item with custom function\r\n            </button>\r\n        </div>\r\n\r\n        <p class=\"py-8 mb-48\">\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    addNavItemWithCustomFunction()\r\n                    {\r\n                        // Prepare the new nav item\r\n                        const newNavItem = {\r\n                            id      : 'custom-item',\r\n                            title   : 'Custom Item',\r\n                            type    : 'item',\r\n                            function: () => {\r\n                                alert('Custom function!');\r\n                            }\r\n                        };\r\n\r\n                        // Add the new nav item at the beginning of the navigation\r\n                        this._fuseNavigationService.addNavigationItem(newNavItem, 'start');\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Remove the Dashboards menu item</div>\r\n\r\n        <div class=\"my-24\">\r\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"removeDashboards()\">\r\n                Remove Dashboards menu item\r\n            </button>\r\n        </div>\r\n\r\n        <p class=\"py-8 mb-48\">\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    removeDashboards(): void\r\n                    {\r\n                        this._fuseNavigationService.removeNavigationItem('dashboards');\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Register a new navigation and toggle to it</div>\r\n\r\n        <div class=\"my-24\">\r\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"registerNewNavigationAndToggle()\">\r\n                Register a new navigation and toggle to it\r\n            </button>\r\n        </div>\r\n\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    registerNewNavigationAndToggle(): void\r\n                    {\r\n                        const adminNav = [\r\n                            {\r\n                                id      : 'admin',\r\n                                title   : 'Admin',\r\n                                type    : 'group',\r\n                                icon    : 'apps',\r\n                                children: [\r\n                                    {\r\n                                        id   : 'users',\r\n                                        title: 'Users',\r\n                                        type : 'item',\r\n                                        icon : 'person',\r\n                                        url  : '/apps/dashboards/analytics'\r\n                                    },\r\n                                    {\r\n                                        id   : 'payments',\r\n                                        title: 'Payments',\r\n                                        type : 'item',\r\n                                        icon : 'attach_money',\r\n                                        url  : '/apps/academy'\r\n                                    }\r\n                                ]\r\n                            },\r\n                            {\r\n                                id      : 'control-panel',\r\n                                title   : 'Control Panel',\r\n                                type    : 'group',\r\n                                icon    : 'apps',\r\n                                children: [\r\n                                    {\r\n                                        id   : 'cron-jobs',\r\n                                        title: 'Cron Jobs',\r\n                                        type : 'item',\r\n                                        icon : 'settings',\r\n                                        url  : '/apps/file-manager'\r\n                                    },\r\n                                    {\r\n                                        id   : 'maintenance-mode',\r\n                                        title: 'Maintenance Mode',\r\n                                        type : 'item',\r\n                                        icon : 'build',\r\n                                        url  : '/apps/todo'\r\n                                    }\r\n                                ]\r\n                            }\r\n                        ];\r\n\r\n                        // Register the new navigation\r\n                        this._fuseNavigationService.register('admin-nav', adminNav);\r\n\r\n                        // Set the current navigation\r\n                        this._fuseNavigationService.setCurrentNavigation('admin-nav');\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/progress-bar/progress-bar.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/progress-bar/progress-bar.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsProgressBarProgressBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"progress-bar\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Progress Bar</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-progress-bar</code> is a custom built Fuse component allows you to have a service controlled\r\n            progress bar. It internally uses <code>mat-progress-bar</code> and provides a global service to control it.\r\n        </p>\r\n\r\n        <p class=\"message-box info\">\r\n            Due to the nature of global progress bars, <code>fuse-progress-bar</code> can only be used once in the\r\n            entire app and it's currently located at <code>app.component.html</code> file.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-progress-bar></fuse-progress-bar>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Service Usage</div>\r\n        <p class=\"py-8\">\r\n\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    export class SomeComponent implements OnInit\r\n                    {\r\n                        /**\r\n                        * Constructor\r\n                        */\r\n                        constructor(\r\n                            private _fuseProgressBarService: FuseProgressBarService\r\n                        ) {}\r\n\r\n                        showcase()\r\n                        {\r\n                            // Show the progress bar\r\n                            this._fuseProgressBarService.show();\r\n\r\n                            // Hide the progress bar\r\n                            this._fuseProgressBarService.hide();\r\n\r\n                            // Set the mode\r\n                            // mode: 'determinate' | 'indeterminate' | 'buffer' | 'query'\r\n                            this._fuseProgressBarService.setMode(mode);\r\n\r\n                            // Set the value\r\n                            // value: number\r\n                            this._fuseProgressBarService.setValue(value);\r\n\r\n                            // Set the buffer value\r\n                            // bufferValue: number\r\n                            this._fuseProgressBarService.setBufferValue(bufferValue);\r\n                        }\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/search-bar/search-bar.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/search-bar/search-bar.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsSearchBarSearchBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"search-bar\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Search Bar</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-search-bar</code> is a custom built Fuse component allows you to have a search bar that activates\r\n            on click.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-search-bar (input)=\"search($event)\"></fuse-search-bar>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Outputs</div>\r\n        <p class=\"py-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <code class=\"mr-8\">input</code>\r\n            <span>Triggers every time an input occurs within the search bar. Can be used to trigger the actual\r\n                search mechanism. The $event is the value from the search input.\r\n            </span>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/shortcuts/shortcuts.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/shortcuts/shortcuts.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsShortcutsShortcutsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"shortcuts\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Shortcuts</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-shortcuts</code> is a custom built Fuse component allows you to create and save shortcuts from\r\n            the navigation model.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-shortcuts></fuse-shortcuts>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"section-title\">Model</div>\r\n        <p class=\"py-8\">\r\n            <code>&lt;fuse-shortcuts&gt;&lt;/fuse-shortcuts&gt;</code> uses the same service with navigation\r\n            component to populate the shortcuts. It can search the navigation items as well as pin and unpin them as\r\n            shortcuts. It uses browser cookies to store the shortcuts.\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/sidebar/sidebar.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/sidebar/sidebar.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"sidebar\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Sidebar</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-sidebar</code> is a custom built Fuse component allows you to create a sidebar. Currently it's\r\n            only used as the main navigation sidebar but in the future it will allow multiple usages.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n                    <fuse-sidebar name=\"navbar\" [folded]=\"someSetting.isFolded\" lockedOpen=\"gt-md\"></fuse-sidebar>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <div class=\"my-48\">\r\n            <h3><code>[name]</code></h3>\r\n            <p class=\"py-8\">\r\n                <b>name</b> attribute allows you to set a unique name to the sidebar. It's required for sidebar to\r\n                work correctly, as every sidebar being registered to the sidebar service.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"my-48\">\r\n            <h3><code>[folded]</code></h3>\r\n            <p class=\"py-8\">\r\n                Controls the folded status of the sidebar.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"my-48\">\r\n            <h3><code>[foldedWidth]</code></h3>\r\n            <p class=\"py-8\">\r\n                Controls the width of the sidebar when it's folded.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"my-48\">\r\n            <h3><code>[position]</code></h3>\r\n            <p class=\"py-8\">\r\n                Controls the position of the sidebar when it's hidden. This doesn't affect on the locked-open placement\r\n                of the sidebar, it only controls which side the sidebar is going to slide in when it's completely\r\n                hidden.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"my-48\">\r\n            <h3><code>[lockedOpen]</code></h3>\r\n            <p class=\"py-8\">\r\n                Accepts Angular Material breakpoint aliases ('gt-md', 'lg' etc.) and locks open the sidebar if the\r\n                alias matches the current breakpoint, similar to how Angular Material 1.x sidenav works.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"my-48\">\r\n            <h3><code>(onFoldedChanged)</code></h3>\r\n            <p class=\"py-8\">\r\n                <b>onFoldedChanged</b> event will be triggered when the sidebar folded or unfolded permanently.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"my-48\">\r\n            <h3><code>(onOpenedChanged)</code></h3>\r\n            <p class=\"py-8\">\r\n                <b>onOpenedChanged</b> event will be triggered when the sidebar opened or closed.\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"section-title\">Sidebar Service</div>\r\n        <p class=\"py-8\">\r\n            The sidebar service allows you to control the Sidebar's states from anywhere. To access the sidebar,\r\n            you need to use the name attribute:\r\n        </p>\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"ts\">\r\n                <textarea #source>\r\n                    toggleSidebar(): void\r\n                    {\r\n                        this._fuseSidebarService.getSidebar('my-left-sidebar').toggleOpen();\r\n                    }\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/widget/widget.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/widget/widget.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDocumentationComponentsWidgetWidgetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"widget\" class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Documentation</span>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Widget</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            <code>fuse-widget</code> is a custom built Fuse component allows to create flippable widget boxes.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Sample</div>\r\n        <div>\r\n            <fuse-widget class=\"\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                <!-- Front -->\r\n                <div class=\"fuse-widget-front mat-elevation-z2\">\r\n                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                        <div>Widget title</div>\r\n\r\n                        <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\r\n                            <mat-icon>more_vert</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        Widget Content\r\n                    </div>\r\n                </div>\r\n                <!-- / Front -->\r\n\r\n                <!-- Back -->\r\n                <div class=\"fuse-widget-back p-16 pt-32 mat-elevation-z2\">\r\n                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                            aria-label=\"Flip widget\">\r\n                        <mat-icon class=\"s-16\">close</mat-icon>\r\n                    </button>\r\n\r\n                    <div>\r\n                        More widget info\r\n                    </div>\r\n                </div>\r\n                <!-- / Back -->\r\n\r\n            </fuse-widget>\r\n        </div>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p class=\"py-8\">\r\n\r\n            <fuse-highlight lang=\"html\">\r\n                <textarea #source>\r\n\r\n                    <fuse-widget class=\"\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                        <!-- Front -->\r\n                        <div class=\"fuse-widget-front mat-elevation-z2\">\r\n                            <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div>Widget title</div>\r\n\r\n                                <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\r\n                                    <mat-icon>more_vert</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n                            <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                Widget Content\r\n                            </div>\r\n                        </div>\r\n                        <!-- / Front -->\r\n\r\n                        <!-- Back -->\r\n                        <div class=\"fuse-widget-back p-16 pt-32 mat-elevation-z2\">\r\n                            <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                    aria-label=\"Flip widget\">\r\n                                <mat-icon class=\"s-16\">close</mat-icon>\r\n                            </button>\r\n\r\n                            <div>\r\n                                More widget info\r\n                            </div>\r\n                        </div>\r\n                        <!-- / Back -->\r\n\r\n                    </fuse-widget>\r\n\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/components.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/documentation/components/components.module.ts ***!
    \********************************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppMainDocumentationComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var app_main_documentation_components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/main/documentation/components/countdown/countdown.component */
    "./src/app/main/documentation/components/countdown/countdown.component.ts");
    /* harmony import */


    var app_main_documentation_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/documentation/components/highlight/highlight.component */
    "./src/app/main/documentation/components/highlight/highlight.component.ts");
    /* harmony import */


    var app_main_documentation_components_material_color_picker_material_color_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/documentation/components/material-color-picker/material-color-picker.component */
    "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.ts");
    /* harmony import */


    var app_main_documentation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! app/main/documentation/components/navigation/navigation.component */
    "./src/app/main/documentation/components/navigation/navigation.component.ts");
    /* harmony import */


    var app_main_documentation_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! app/main/documentation/components/progress-bar/progress-bar.component */
    "./src/app/main/documentation/components/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var app_main_documentation_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! app/main/documentation/components/search-bar/search-bar.component */
    "./src/app/main/documentation/components/search-bar/search-bar.component.ts");
    /* harmony import */


    var app_main_documentation_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! app/main/documentation/components/sidebar/sidebar.component */
    "./src/app/main/documentation/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var app_main_documentation_components_shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! app/main/documentation/components/shortcuts/shortcuts.component */
    "./src/app/main/documentation/components/shortcuts/shortcuts.component.ts");
    /* harmony import */


    var app_main_documentation_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! app/main/documentation/components/widget/widget.component */
    "./src/app/main/documentation/components/widget/widget.component.ts");

    var routes = [{
      path: 'countdown',
      component: app_main_documentation_components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_7__["DocsComponentsCountdownComponent"]
    }, {
      path: 'highlight',
      component: app_main_documentation_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponentsHighlightComponent"]
    }, {
      path: 'material-color-picker',
      component: app_main_documentation_components_material_color_picker_material_color_picker_component__WEBPACK_IMPORTED_MODULE_9__["DocsComponentsMaterialColorPickerComponent"]
    }, {
      path: 'navigation',
      component: app_main_documentation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["DocsComponentsNavigationComponent"]
    }, {
      path: 'progress-bar',
      component: app_main_documentation_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["DocsComponentsProgressBarComponent"]
    }, {
      path: 'search-bar',
      component: app_main_documentation_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__["DocsComponentsSearchBarComponent"]
    }, {
      path: 'sidebar',
      component: app_main_documentation_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["DocsComponentsSidebarComponent"]
    }, {
      path: 'shortcuts',
      component: app_main_documentation_components_shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__["DocsComponentsShortcutsComponent"]
    }, {
      path: 'widget',
      component: app_main_documentation_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__["DocsComponentsWidgetComponent"]
    }];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_documentation_components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_7__["DocsComponentsCountdownComponent"], app_main_documentation_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_8__["DocsComponentsHighlightComponent"], app_main_documentation_components_material_color_picker_material_color_picker_component__WEBPACK_IMPORTED_MODULE_9__["DocsComponentsMaterialColorPickerComponent"], app_main_documentation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["DocsComponentsNavigationComponent"], app_main_documentation_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["DocsComponentsProgressBarComponent"], app_main_documentation_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__["DocsComponentsSearchBarComponent"], app_main_documentation_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["DocsComponentsSidebarComponent"], app_main_documentation_components_shortcuts_shortcuts_component__WEBPACK_IMPORTED_MODULE_14__["DocsComponentsShortcutsComponent"], app_main_documentation_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_15__["DocsComponentsWidgetComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseCountdownModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseHighlightModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseMaterialColorPickerModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseWidgetModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/countdown/countdown.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/main/documentation/components/countdown/countdown.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsCountdownCountdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvY291bnRkb3duL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcZG9jdW1lbnRhdGlvblxcY29tcG9uZW50c1xcY291bnRkb3duXFxjb3VudGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL2NvdW50ZG93bi9jb3VudGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/countdown/countdown.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/main/documentation/components/countdown/countdown.component.ts ***!
    \********************************************************************************/

  /*! exports provided: DocsComponentsCountdownComponent */

  /***/
  function srcAppMainDocumentationComponentsCountdownCountdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsCountdownComponent", function () {
      return DocsComponentsCountdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsCountdownComponent =
    /**
     * Constructor
     */
    function DocsComponentsCountdownComponent() {
      _classCallCheck(this, DocsComponentsCountdownComponent);
    };

    DocsComponentsCountdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-countdown',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/countdown/countdown.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./countdown.component.scss */
      "./src/app/main/documentation/components/countdown/countdown.component.scss")).default]
    })], DocsComponentsCountdownComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/highlight/highlight.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/main/documentation/components/highlight/highlight.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsHighlightHighlightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvaGlnaGxpZ2h0L0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcZG9jdW1lbnRhdGlvblxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxoaWdobGlnaHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL2hpZ2hsaWdodC9oaWdobGlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvaGlnaGxpZ2h0L2hpZ2hsaWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/highlight/highlight.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/main/documentation/components/highlight/highlight.component.ts ***!
    \********************************************************************************/

  /*! exports provided: DocsComponentsHighlightComponent */

  /***/
  function srcAppMainDocumentationComponentsHighlightHighlightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsHighlightComponent", function () {
      return DocsComponentsHighlightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsHighlightComponent =
    /**
     * Constructor
     */
    function DocsComponentsHighlightComponent() {
      _classCallCheck(this, DocsComponentsHighlightComponent);
    };

    DocsComponentsHighlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-highlight',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./highlight.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/highlight/highlight.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./highlight.component.scss */
      "./src/app/main/documentation/components/highlight/highlight.component.scss")).default]
    })], DocsComponentsHighlightComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/main/documentation/components/material-color-picker/material-color-picker.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsMaterialColorPickerMaterialColorPickerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvbWF0ZXJpYWwtY29sb3ItcGlja2VyL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcZG9jdW1lbnRhdGlvblxcY29tcG9uZW50c1xcbWF0ZXJpYWwtY29sb3ItcGlja2VyXFxtYXRlcmlhbC1jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL21hdGVyaWFsLWNvbG9yLXBpY2tlci9tYXRlcmlhbC1jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvbWF0ZXJpYWwtY29sb3ItcGlja2VyL21hdGVyaWFsLWNvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/main/documentation/components/material-color-picker/material-color-picker.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: DocsComponentsMaterialColorPickerComponent */

  /***/
  function srcAppMainDocumentationComponentsMaterialColorPickerMaterialColorPickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsMaterialColorPickerComponent", function () {
      return DocsComponentsMaterialColorPickerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsMaterialColorPickerComponent =
    /**
     * Constructor
     */
    function DocsComponentsMaterialColorPickerComponent() {
      _classCallCheck(this, DocsComponentsMaterialColorPickerComponent);
    };

    DocsComponentsMaterialColorPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-material-color-picker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./material-color-picker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/material-color-picker/material-color-picker.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./material-color-picker.component.scss */
      "./src/app/main/documentation/components/material-color-picker/material-color-picker.component.scss")).default]
    })], DocsComponentsMaterialColorPickerComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/navigation/navigation.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/main/documentation/components/navigation/navigation.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXGRvY3VtZW50YXRpb25cXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/navigation/navigation.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/main/documentation/components/navigation/navigation.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DocsComponentsNavigationComponent */

  /***/
  function srcAppMainDocumentationComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsNavigationComponent", function () {
      return DocsComponentsNavigationComponent;
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


    var _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/navigation/navigation.service */
    "./src/@fuse/components/navigation/navigation.service.ts");

    var DocsComponentsNavigationComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function DocsComponentsNavigationComponent(_fuseNavigationService) {
        _classCallCheck(this, DocsComponentsNavigationComponent);

        this._fuseNavigationService = _fuseNavigationService; // Set the defaults

        this.hidden = false;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Show/hide calendar menu item
       */


      _createClass(DocsComponentsNavigationComponent, [{
        key: "showHideCalendarMenuItem",
        value: function showHideCalendarMenuItem() {
          // Toggle the visibility
          this.hidden = !this.hidden; // Update the calendar menu item

          this._fuseNavigationService.updateNavigationItem('calendar', {
            hidden: this.hidden
          });
        }
        /**
         * Update mail badge
         */

      }, {
        key: "updateMailBadge",
        value: function updateMailBadge() {
          // Update the badge title
          this._fuseNavigationService.updateNavigationItem('mail', {
            badge: {
              title: 35
            }
          });
        }
        /**
         * Add subitem to the calendar
         */

      }, {
        key: "addSubitemToCalendar",
        value: function addSubitemToCalendar() {
          // Prepare the new nav item
          var newNavItem = {
            id: 'sub-item',
            title: 'Sub Item',
            type: 'item',
            url: '/apps/calendar'
          };

          this._fuseNavigationService.updateNavigationItem('calendar', {
            type: 'collapsable',
            children: [newNavItem]
          });
        }
        /**
         * Add a nav item with custom function
         */

      }, {
        key: "addNavItemWithCustomFunction",
        value: function addNavItemWithCustomFunction() {
          // Prepare the new nav item
          var newNavItem = {
            id: 'custom-item',
            title: 'Custom Item',
            type: 'item',
            function: function _function() {
              alert('Custom function!');
            }
          }; // Add the new nav item at the beginning of the navigation

          this._fuseNavigationService.addNavigationItem(newNavItem, 'start');
        }
        /**
         * Remove the dashboard menu item
         */

      }, {
        key: "removeDashboards",
        value: function removeDashboards() {
          this._fuseNavigationService.removeNavigationItem('dashboards');
        }
        /**
         * Register a new navigation and toggle to it
         */

      }, {
        key: "registerNewNavigationAndToggle",
        value: function registerNewNavigationAndToggle() {
          var adminNav = [{
            id: 'admin',
            title: 'Admin',
            type: 'group',
            icon: 'apps',
            children: [{
              id: 'users',
              title: 'Users',
              type: 'item',
              icon: 'person',
              url: '/apps/dashboards/analytics'
            }, {
              id: 'payments',
              title: 'Payments',
              type: 'item',
              icon: 'attach_money',
              url: '/apps/academy'
            }]
          }, {
            id: 'control-panel',
            title: 'Control Panel',
            type: 'group',
            icon: 'apps',
            children: [{
              id: 'cron-jobs',
              title: 'Cron Jobs',
              type: 'item',
              icon: 'settings',
              url: '/apps/file-manager'
            }, {
              id: 'maintenance-mode',
              title: 'Maintenance Mode',
              type: 'item',
              icon: 'build',
              url: '/apps/todo'
            }]
          }]; // Register the new navigation

          this._fuseNavigationService.register('admin-nav', adminNav); // Set the current navigation


          this._fuseNavigationService.setCurrentNavigation('admin-nav');
        }
      }]);

      return DocsComponentsNavigationComponent;
    }();

    DocsComponentsNavigationComponent.ctorParameters = function () {
      return [{
        type: _fuse_components_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["FuseNavigationService"]
      }];
    };

    DocsComponentsNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/main/documentation/components/navigation/navigation.component.scss")).default]
    })], DocsComponentsNavigationComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/progress-bar/progress-bar.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/documentation/components/progress-bar/progress-bar.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsProgressBarProgressBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcZG9jdW1lbnRhdGlvblxcY29tcG9uZW50c1xccHJvZ3Jlc3MtYmFyXFxwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/progress-bar/progress-bar.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/main/documentation/components/progress-bar/progress-bar.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DocsComponentsProgressBarComponent */

  /***/
  function srcAppMainDocumentationComponentsProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsProgressBarComponent", function () {
      return DocsComponentsProgressBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsProgressBarComponent =
    /**
     * Constructor
     */
    function DocsComponentsProgressBarComponent() {
      _classCallCheck(this, DocsComponentsProgressBarComponent);
    };

    DocsComponentsProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-progress-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/progress-bar/progress-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress-bar.component.scss */
      "./src/app/main/documentation/components/progress-bar/progress-bar.component.scss")).default]
    })], DocsComponentsProgressBarComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/search-bar/search-bar.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/main/documentation/components/search-bar/search-bar.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsSearchBarSearchBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvc2VhcmNoLWJhci9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXGRvY3VtZW50YXRpb25cXGNvbXBvbmVudHNcXHNlYXJjaC1iYXJcXHNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/search-bar/search-bar.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/main/documentation/components/search-bar/search-bar.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DocsComponentsSearchBarComponent */

  /***/
  function srcAppMainDocumentationComponentsSearchBarSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsSearchBarComponent", function () {
      return DocsComponentsSearchBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsSearchBarComponent =
    /**
     * Constructor
     */
    function DocsComponentsSearchBarComponent() {
      _classCallCheck(this, DocsComponentsSearchBarComponent);
    };

    DocsComponentsSearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-search-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/search-bar/search-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-bar.component.scss */
      "./src/app/main/documentation/components/search-bar/search-bar.component.scss")).default]
    })], DocsComponentsSearchBarComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/shortcuts/shortcuts.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/main/documentation/components/shortcuts/shortcuts.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsShortcutsShortcutsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvc2hvcnRjdXRzL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcZG9jdW1lbnRhdGlvblxcY29tcG9uZW50c1xcc2hvcnRjdXRzXFxzaG9ydGN1dHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL3Nob3J0Y3V0cy9zaG9ydGN1dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvc2hvcnRjdXRzL3Nob3J0Y3V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/shortcuts/shortcuts.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/main/documentation/components/shortcuts/shortcuts.component.ts ***!
    \********************************************************************************/

  /*! exports provided: DocsComponentsShortcutsComponent */

  /***/
  function srcAppMainDocumentationComponentsShortcutsShortcutsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsShortcutsComponent", function () {
      return DocsComponentsShortcutsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsShortcutsComponent =
    /**
     * Constructor
     */
    function DocsComponentsShortcutsComponent() {
      _classCallCheck(this, DocsComponentsShortcutsComponent);
    };

    DocsComponentsShortcutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-shortcuts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shortcuts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/shortcuts/shortcuts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shortcuts.component.scss */
      "./src/app/main/documentation/components/shortcuts/shortcuts.component.scss")).default]
    })], DocsComponentsShortcutsComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/sidebar/sidebar.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/main/documentation/components/sidebar/sidebar.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvc2lkZWJhci9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXGRvY3VtZW50YXRpb25cXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RvY3VtZW50YXRpb24vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/sidebar/sidebar.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/main/documentation/components/sidebar/sidebar.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DocsComponentsSidebarComponent */

  /***/
  function srcAppMainDocumentationComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsSidebarComponent", function () {
      return DocsComponentsSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsSidebarComponent =
    /**
     * Constructor
     */
    function DocsComponentsSidebarComponent() {
      _classCallCheck(this, DocsComponentsSidebarComponent);
    };

    DocsComponentsSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/main/documentation/components/sidebar/sidebar.component.scss")).default]
    })], DocsComponentsSidebarComponent);
    /***/
  },

  /***/
  "./src/app/main/documentation/components/widget/widget.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/main/documentation/components/widget/widget.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDocumentationComponentsWidgetWidgetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvd2lkZ2V0L0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcZG9jdW1lbnRhdGlvblxcY29tcG9uZW50c1xcd2lkZ2V0XFx3aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kb2N1bWVudGF0aW9uL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/documentation/components/widget/widget.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/main/documentation/components/widget/widget.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DocsComponentsWidgetComponent */

  /***/
  function srcAppMainDocumentationComponentsWidgetWidgetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsComponentsWidgetComponent", function () {
      return DocsComponentsWidgetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocsComponentsWidgetComponent =
    /**
     * Constructor
     */
    function DocsComponentsWidgetComponent() {
      _classCallCheck(this, DocsComponentsWidgetComponent);
    };

    DocsComponentsWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'docs-components-widget',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./widget.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/documentation/components/widget/widget.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./widget.component.scss */
      "./src/app/main/documentation/components/widget/widget.component.scss")).default]
    })], DocsComponentsWidgetComponent);
    /***/
  }
}]);
//# sourceMappingURL=components-components-module-es5.js.map