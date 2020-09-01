function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-ui-ui-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/cards/cards.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/cards/cards.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiCardsCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"cards\" class=\"page-layout simple fullwidth\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Cards</div>\r\n        </div>\r\n\r\n        <div>\r\n            <mat-slide-toggle color=\"primary\" (change)=\"toggleView()\">\r\n                View Source\r\n            </mat-slide-toggle>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\" [ngClass]=\"this.view\">\r\n\r\n        <div class=\"cards\">\r\n\r\n            <!-- CARD 1 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            Cards provide context and an entry point to more robust information and views, and their\r\n                            content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    Cards provide context and an entry point to more robust information and views, and\r\n                                    their content and quantity can vary greatly.\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 1 -->\r\n\r\n            <!-- CARD 2 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            Cards provide context and an entry point to more robust information and views, and their\r\n                            content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">SHARE</button>\r\n                            <button mat-button color=\"accent\">EXPLORE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    Cards provide context and an entry point to more robust information and views, and\r\n                                    their content and quantity can vary greatly.\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">SHARE</button>\r\n                                    <button mat-button color=\"accent\">EXPLORE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 2 -->\r\n\r\n            <!-- CARD 3 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            Cards provide context and an entry point to more robust information and views, and their\r\n                            content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    Cards provide context and an entry point to more robust information and views, and\r\n                                    their content and quantity can vary greatly.\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 3 -->\r\n\r\n            <!-- CARD 4 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card indigo\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            All cards can be mixed with Fuse Color Classes to have different colors. This greatly\r\n                            increases the unique variations of all cards. Cards provide context and an entry point to\r\n                            more robust information and views, and their content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button>SHARE</button>\r\n                            <button mat-button>EXPLORE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card indigo\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    All cards can be mixed with Fuse Color Classes to have different colors. This\r\n                                    greatly increases the unique variations of all cards. Cards provide context and an\r\n                                    entry point to more robust information and views, and their content and quantity can\r\n                                    vary greatly.\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button>SHARE</button>\r\n                                    <button mat-button>EXPLORE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 4 -->\r\n\r\n            <!-- CARD 5 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 5 -->\r\n\r\n            <!-- CARD 6 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                        <div class=\"p-16 line-height-1.75\">\r\n                            Cards provide context and an entry point to more robust information and views, and their\r\n                            content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                                <div class=\"p-16 line-height-1.75\">\r\n                                    Cards provide context and an entry point to more robust information and views, and\r\n                                    their content and quantity can vary greatly.\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 6 -->\r\n\r\n            <!-- CARD 7 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"position-relative\">\r\n                            <img src=\"assets/images/cards/card3.jpg\">\r\n                            <div class=\"position-absolute font-size-20 fuse-white-fg p-16 align-left align-bottom\">\r\n                                Top 10 Holiday Locations\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h4 secondary-text\">Number 10</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            Cards are a convenient means of displaying content composed of different elements.\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">SHARE</button>\r\n                            <button mat-button color=\"accent\">EXPLORE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"position-relative\">\r\n                                    <img src=\"assets/images/cards/card3.jpg\">\r\n                                    <div class=\"position-absolute font-size-20 fuse-white-fg p-16 align-left align-bottom\">\r\n                                        Top 10 Holiday Locations\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h4 secondary-text\">Number 10</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    Cards are a convenient means of displaying content composed of different elements.\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">SHARE</button>\r\n                                    <button mat-button color=\"accent\">EXPLORE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 7 -->\r\n\r\n            <!-- CARD 8 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h4 secondary-text\">Travel</div>\r\n                                <div class=\"h1\">Big City Life</div>\r\n                            </div>\r\n\r\n                            <div class=\"w-80 h-80\">\r\n                                <img src=\"assets/images/cards/card2-small.jpg\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            Cards provide context and an entry point to more robust information and views, and their\r\n                            content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">READ</button>\r\n                            <button mat-button color=\"accent\">SHARE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                                    <div class=\"pr-16\">\r\n                                        <div class=\"h4 secondary-text\">Travel</div>\r\n                                        <div class=\"h1\">Big City Life</div>\r\n                                    </div>\r\n\r\n                                    <div class=\"w-80 h-80\">\r\n                                        <img src=\"assets/images/cards/card2-small.jpg\">\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    Cards provide context and an entry point to more robust information and views, and\r\n                                    their content and quantity can vary greatly.\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">READ</button>\r\n                                    <button mat-button color=\"accent\">SHARE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 8 -->\r\n\r\n            <!-- CARD 9 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card3.jpg\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Top Winter Locations</div>\r\n                            <div class=\"h4 secondary-text\">More than 200 locations</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            Cards provide context and an entry point to more robust information and views, and their\r\n                            content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <button mat-button color=\"accent\">SHARE</button>\r\n                                <button mat-button color=\"accent\">EXPLORE</button>\r\n                            </div>\r\n\r\n                            <button mat-icon-button aria-label=\"expand card\"\r\n                                    (click)=\"card9Expanded = !card9Expanded\">\r\n                                <mat-icon *ngIf=\"card9Expanded\">keyboard_arrow_up</mat-icon>\r\n                                <mat-icon *ngIf=\"!card9Expanded\">keyboard_arrow_down</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                        <div class=\"card-expand-area\" *ngIf=\"card9Expanded\" [@expandCollapse]>\r\n                            <div class=\"card-expanded-content\">\r\n                                Card content that exceeds the maximum card height is truncated and does not scroll, but\r\n                                the card can be expanded. Once expanded, the card may exceed the maximum height of the\r\n                                view. In this case, the card will scroll with the card collection.\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card3.jpg\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Top Winter Locations</div>\r\n                                    <div class=\"h4 secondary-text\">More than 200 locations</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    Cards provide context and an entry point to more robust information and views, and\r\n                                    their\r\n                                    content and quantity can vary greatly.\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <button mat-button color=\"accent\">SHARE</button>\r\n                                        <button mat-button color=\"accent\">EXPLORE</button>\r\n                                    </div>\r\n\r\n                                    <button mat-icon-button aria-label=\"expand card\"\r\n                                            (click)=\"card9Expanded = !card9Expanded\">\r\n                                        <mat-icon *ngIf=\"card9Expanded\">keyboard_arrow_up</mat-icon>\r\n                                        <mat-icon *ngIf=\"!card9Expanded\">keyboard_arrow_down</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"card-expand-area\" *ngIf=\"card9Expanded\" [@expandCollapse]>\r\n                                    <div class=\"card-expanded-content\">\r\n                                        Card content that exceeds the maximum card height is truncated and does not\r\n                                        scroll, but the card can be expanded. Once expanded, the card may exceed the\r\n                                        maximum height of the view. In this case, the card will scroll with the card\r\n                                        collection.\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 9 -->\r\n\r\n            <!-- CARD 10 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card2.jpg\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Top eastern road trips</div>\r\n                            <div class=\"h4 secondary-text\">2,000 miles of wonder</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <button mat-button color=\"accent\">SHARE</button>\r\n                                <button mat-button color=\"accent\">EXPLORE</button>\r\n                            </div>\r\n\r\n                            <button mat-icon-button aria-label=\"expand card\"\r\n                                    (click)=\"card10Expanded = !card10Expanded\">\r\n                                <mat-icon *ngIf=\"card10Expanded\">keyboard_arrow_up</mat-icon>\r\n                                <mat-icon *ngIf=\"!card10Expanded\">keyboard_arrow_down</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                        <div class=\"card-expand-area\" *ngIf=\"card10Expanded\" [@expandCollapse]>\r\n                            <div class=\"card-expanded-content\">\r\n                                Card content that exceeds the maximum card height is truncated and does not scroll, but\r\n                                the card can be expanded. Once expanded, the card may exceed the maximum height of the\r\n                                view. In this case, the card will scroll with the card collection.\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card2.jpg\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Top eastern road trips</div>\r\n                                    <div class=\"h4 secondary-text\">2,000 miles of wonder</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <button mat-button color=\"accent\">SHARE</button>\r\n                                        <button mat-button color=\"accent\">EXPLORE</button>\r\n                                    </div>\r\n\r\n                                    <button mat-icon-button aria-label=\"expand card\"\r\n                                            (click)=\"card10Expanded = !card10Expanded\">\r\n                                        <mat-icon *ngIf=\"card10Expanded\">keyboard_arrow_up</mat-icon>\r\n                                        <mat-icon *ngIf=\"!card10Expanded\">keyboard_arrow_down</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"card-expand-area\" *ngIf=\"card10Expanded\" [@expandCollapse]>\r\n                                    <div class=\"card-expanded-content\">\r\n                                        Card content that exceeds the maximum card height is truncated and does not\r\n                                        scroll, but the card can be expanded. Once expanded, the card may exceed the\r\n                                        maximum height of the view. In this case, the card will scroll with the card\r\n                                        collection.\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 10 -->\r\n\r\n            <!-- CARD 11 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <img class=\"w-40 h-40 border-radius-100\" src=\"assets/images/avatars/Christy.jpg\">\r\n\r\n                            <div class=\"ml-16\">\r\n                                <div class=\"text-bold\">Christy</div>\r\n                                <div class=\"h5 text-bold secondary-text\">20 mins. ago</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                            <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            Cards provide context and an entry point to more robust information and views, and their\r\n                            content and quantity can vary greatly.\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <img class=\"w-40 h-40 border-radius-100\" src=\"assets/images/avatars/Christy.jpg\">\r\n\r\n                                    <div class=\"ml-16\">\r\n                                        <div class=\"text-bold\">Christy</div>\r\n                                        <div class=\"h5 text-bold secondary-text\">20 mins. ago</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <img src=\"assets/images/cards/card1.jpg\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Kangaroo Valley Safari</div>\r\n                                    <div class=\"h4 secondary-text\">Free on Thursdays</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    Cards provide context and an entry point to more robust information and views, and\r\n                                    their content and quantity can vary greatly.\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 11 -->\r\n\r\n            <!-- CARD 12 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card2.jpg\">\r\n\r\n                        <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                            <button mat-icon-button aria-label=\"add to favorites\">\r\n                                <mat-icon>favorite</mat-icon>\r\n                            </button>\r\n\r\n                            <button mat-icon-button aria-label=\"bookmark\">\r\n                                <mat-icon>bookmark</mat-icon>\r\n                            </button>\r\n\r\n                            <button mat-icon-button aria-label=\"send location\">\r\n                                <mat-icon>location_on</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card2.jpg\">\r\n\r\n                                <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                                    <button mat-icon-button aria-label=\"add to favorites\">\r\n                                        <mat-icon>favorite</mat-icon>\r\n                                    </button>\r\n\r\n                                    <button mat-icon-button aria-label=\"bookmark\">\r\n                                        <mat-icon>bookmark</mat-icon>\r\n                                    </button>\r\n\r\n                                    <button mat-icon-button aria-label=\"send location\">\r\n                                        <mat-icon>location_on</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 12 -->\r\n\r\n            <!-- CARD 13 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card variable-width\">\r\n\r\n                        <div class=\"position-relative\">\r\n                            <img src=\"assets/images/cards/card3-square.jpg\">\r\n                            <div class=\"position-absolute font-size-20 fuse-white-fg p-16 align-left align-bottom\">\r\n                                Winter\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button mat-icon-button aria-label=\"add to favorites\">\r\n                                <mat-icon>favorite</mat-icon>\r\n                            </button>\r\n\r\n                            <button mat-icon-button aria-label=\"bookmark\">\r\n                                <mat-icon>bookmark</mat-icon>\r\n                            </button>\r\n\r\n                            <button mat-icon-button aria-label=\"send location\">\r\n                                <mat-icon>location_on</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card variable-width\">\r\n\r\n                                <div class=\"position-relative\">\r\n                                    <img src=\"assets/images/cards/card3-square.jpg\">\r\n                                    <div class=\"position-absolute font-size-20 fuse-white-fg p-16 align-left align-bottom\">\r\n                                        Winter\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-4\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                    <button mat-icon-button aria-label=\"add to favorites\">\r\n                                        <mat-icon>favorite</mat-icon>\r\n                                    </button>\r\n\r\n                                    <button mat-icon-button aria-label=\"bookmark\">\r\n                                        <mat-icon>bookmark</mat-icon>\r\n                                    </button>\r\n\r\n                                    <button mat-icon-button aria-label=\"send location\">\r\n                                        <mat-icon>location_on</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 13 -->\r\n\r\n            <!-- CARD 14 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h1\">Brooklyn</div>\r\n                                <div class=\"h4 secondary-text\">Travel guide</div>\r\n                            </div>\r\n\r\n                            <div class=\"w-80 h-80\">\r\n                                <img src=\"assets/images/cards/card2-small.jpg\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">READ</button>\r\n                            <button mat-button color=\"accent\">SHARE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                                    <div class=\"pr-16\">\r\n                                        <div class=\"h1\">Brooklyn</div>\r\n                                        <div class=\"h4 secondary-text\">Travel guide</div>\r\n                                    </div>\r\n\r\n                                    <div class=\"w-80 h-80\">\r\n                                        <img src=\"assets/images/cards/card2-small.jpg\">\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">READ</button>\r\n                                    <button mat-button color=\"accent\">SHARE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 14 -->\r\n\r\n            <!-- CARD 15 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h1\">Brooklyn</div>\r\n                                <div class=\"h4 secondary-text\">Travel guide</div>\r\n                            </div>\r\n\r\n                            <div class=\"w-120 h-120\">\r\n                                <img src=\"assets/images/cards/card2-medium.jpg\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">READ</button>\r\n                            <button mat-button color=\"accent\">SHARE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                                    <div class=\"pr-16\">\r\n                                        <div class=\"h1\">Brooklyn</div>\r\n                                        <div class=\"h4 secondary-text\">Travel guide</div>\r\n                                    </div>\r\n\r\n                                    <div class=\"w-120 h-120\">\r\n                                        <img src=\"assets/images/cards/card2-medium.jpg\">\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">READ</button>\r\n                                    <button mat-button color=\"accent\">SHARE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 15 -->\r\n\r\n            <!-- CARD 16 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h1\">Brooklyn</div>\r\n                                <div class=\"h4 secondary-text\">Travel guide</div>\r\n                            </div>\r\n\r\n                            <div class=\"w-160 h-160\">\r\n                                <img src=\"assets/images/cards/card2-large.jpg\">\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">READ</button>\r\n                            <button mat-button color=\"accent\">SHARE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                                    <div class=\"pr-16\">\r\n                                        <div class=\"h1\">Brooklyn</div>\r\n                                        <div class=\"h4 secondary-text\">Travel guide</div>\r\n                                    </div>\r\n\r\n                                    <div class=\"w-160 h-160\">\r\n                                        <img src=\"assets/images/cards/card2-large.jpg\">\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">READ</button>\r\n                                    <button mat-button color=\"accent\">SHARE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 16 -->\r\n\r\n            <!-- CARD 17 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <img src=\"assets/images/cards/card2.jpg\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">Coffee NewYork</div>\r\n                            <div class=\"h5 secondary-text\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                    <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                    <mat-icon class=\"s-16 amber-fg\">star_half</mat-icon>\r\n                                    <div class=\"ml-8 secondary-text\">4.7</div>\r\n                                    <div class=\"ml-4 secondary-text\">(51)</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"px-16 line-height-1.75\">\r\n                            Small plates, salads & sandwiches in an intimate setting with 12 indoor seats plus patio\r\n                            seating.\r\n                        </div>\r\n\r\n                        <div class=\"card-divider\"></div>\r\n\r\n                        <div class=\"p-16 pt-0 line-height-1.75\">\r\n                            <div class=\"mb-16 text-bold\">Tonight's Availability</div>\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mr-16\">access_time</mat-icon>\r\n                                <mat-button-toggle-group>\r\n                                    <mat-button-toggle value=\"0530PM\">\r\n                                        5:30PM\r\n                                    </mat-button-toggle>\r\n                                    <mat-button-toggle value=\"0730PM\" [checked]=\"true\">\r\n                                        7:30PM\r\n                                    </mat-button-toggle>\r\n                                    <mat-button-toggle value=\"0900PM\">\r\n                                        9:00PM\r\n                                    </mat-button-toggle>\r\n                                </mat-button-toggle-group>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">RESERVE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <img src=\"assets/images/cards/card2.jpg\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">Coffee NewYork</div>\r\n                                    <div class=\"h5 secondary-text\">\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                            <mat-icon class=\"s-16 amber-fg\">star</mat-icon>\r\n                                            <mat-icon class=\"s-16 amber-fg\">star_half</mat-icon>\r\n                                            <div class=\"ml-8 secondary-text\">4.7</div>\r\n                                            <div class=\"ml-4 secondary-text\">(51)</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 line-height-1.75\">\r\n                                    Small plates, salads & sandwiches in an intimate setting with 12 indoor seats plus\r\n                                    patio\r\n                                    seating.\r\n                                </div>\r\n\r\n                                <div class=\"card-divider\"></div>\r\n\r\n                                <div class=\"p-16 pt-0 line-height-1.75\">\r\n                                    <div class=\"mb-16 text-bold\">Tonight's Availability</div>\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <mat-icon class=\"mr-16\">access_time</mat-icon>\r\n                                        <mat-button-toggle-group>\r\n                                            <mat-button-toggle value=\"0530PM\">\r\n                                                5:30PM\r\n                                            </mat-button-toggle>\r\n                                            <mat-button-toggle value=\"0730PM\" [checked]=\"true\">\r\n                                                7:30PM\r\n                                            </mat-button-toggle>\r\n                                            <mat-button-toggle value=\"0900PM\">\r\n                                                9:00PM\r\n                                            </mat-button-toggle>\r\n                                        </mat-button-toggle-group>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">RESERVE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 17 -->\r\n\r\n            <!-- CARD 18 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1\">San Francisco</div>\r\n                            <div class=\"h4 secondary-text\">Mon, 12:30 PM, Mostly Sunny</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                                <span class=\"font-weight-300 font-size-72 line-height-72\">23</span>\r\n                                <span class=\"font-weight-300 font-size-48 line-height-48 ml-8 mt-4\">°</span>\r\n                                <span class=\"font-weight-300 font-size-48 line-height-48 mt-4\">C</span>\r\n                            </div>\r\n                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\" class=\"icon s-64\"></mat-icon>\r\n                        </div>\r\n\r\n                        <div class=\"px-16 pb-4\">\r\n                            <div class=\"pb-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-wind\"\r\n                                          class=\"icon s-16 mr-16\"></mat-icon>\r\n                                <div>23 km/h</div>\r\n                            </div>\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-rainy2\"\r\n                                          class=\"icon s-16 mr-16\"></mat-icon>\r\n                                <div>48 %</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-divider\"></div>\r\n\r\n                        <div class=\"p-16 pt-4\">\r\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div>Tuesday</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\r\n                                              class=\"icon s-16 mr-16\"></mat-icon>\r\n                                    <div class=\"secondary-text\">24°</div>\r\n                                    <div class=\"disabled-text\">/</div>\r\n                                    <div class=\"disabled-text\">12°</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div>Wednesday</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\r\n                                              class=\"icon s-16 mr-16\"></mat-icon>\r\n                                    <div class=\"secondary-text\">22°</div>\r\n                                    <div class=\"disabled-text\">/</div>\r\n                                    <div class=\"disabled-text\">14°</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div>Thursday</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\r\n                                              class=\"icon s-16 mr-16\"></mat-icon>\r\n                                    <div class=\"secondary-text\">23°</div>\r\n                                    <div class=\"disabled-text\">/</div>\r\n                                    <div class=\"disabled-text\">13°</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div>Friday</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\r\n                                              class=\"icon s-16 mr-16\"></mat-icon>\r\n                                    <div class=\"secondary-text\">25°</div>\r\n                                    <div class=\"disabled-text\">/</div>\r\n                                    <div class=\"disabled-text\">15°</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div>Saturday</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\r\n                                              class=\"icon s-16 mr-16\"></mat-icon>\r\n                                    <div class=\"secondary-text\">24°</div>\r\n                                    <div class=\"disabled-text\">/</div>\r\n                                    <div class=\"disabled-text\">15°</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">FULL REPORT</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1\">San Francisco</div>\r\n                                    <div class=\"h4 secondary-text\">Mon, 12:30 PM, Mostly Sunny</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                                        <span class=\"font-weight-300 font-size-72 line-height-72\">23</span>\r\n                                        <span class=\"font-weight-300 font-size-48 line-height-48 ml-8 mt-4\">°</span>\r\n                                        <span class=\"font-weight-300 font-size-48 line-height-48 mt-4\">C</span>\r\n                                    </div>\r\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\" class=\"icon s-64\"></mat-icon>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 pb-4\">\r\n                                    <div class=\"pb-8\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-wind\"\r\n                                                  class=\"icon s-16 mr-16\"></mat-icon>\r\n                                        <div>23 km/h</div>\r\n                                    </div>\r\n\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                        <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-rainy2\"\r\n                                                  class=\"icon s-16 mr-16\"></mat-icon>\r\n                                        <div>48 %</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"card-divider\"></div>\r\n\r\n                                <div class=\"p-16 pt-4\">\r\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div>Tuesday</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\r\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\r\n                                            <div class=\"secondary-text\">24°</div>\r\n                                            <div class=\"disabled-text\">/</div>\r\n                                            <div class=\"disabled-text\">12°</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div>Wednesday</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-sun\"\r\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\r\n                                            <div class=\"secondary-text\">22°</div>\r\n                                            <div class=\"disabled-text\">/</div>\r\n                                            <div class=\"disabled-text\">14°</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div>Thursday</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\r\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\r\n                                            <div class=\"secondary-text\">23°</div>\r\n                                            <div class=\"disabled-text\">/</div>\r\n                                            <div class=\"disabled-text\">13°</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"mb-12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div>Friday</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\r\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\r\n                                            <div class=\"secondary-text\">25°</div>\r\n                                            <div class=\"disabled-text\">/</div>\r\n                                            <div class=\"disabled-text\">15°</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div>Saturday</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-cloudy\"\r\n                                                      class=\"icon s-16 mr-16\"></mat-icon>\r\n                                            <div class=\"secondary-text\">24°</div>\r\n                                            <div class=\"disabled-text\">/</div>\r\n                                            <div class=\"disabled-text\">15°</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-8 pt-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">FULL REPORT</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 18 -->\r\n\r\n            <!-- CARD 19 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"light-blue-600\">\r\n\r\n                            <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                <div class=\"pr-16\">\r\n                                    <div class=\"h1 font-weight-300\">Google Inc.</div>\r\n                                    <div class=\"h5 secondary-text\">NASDAQ: GOOG</div>\r\n                                </div>\r\n\r\n                                <div>\r\n                                    <button mat-icon-button [matMenuTriggerFor]=\"card19Menu\" aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n\r\n                                    <mat-menu #card19Menu=\"matMenu\">\r\n                                        <button mat-menu-item>\r\n                                            <mat-icon>trending_up</mat-icon>\r\n                                            <span>Trend</span>\r\n                                        </button>\r\n                                        <button mat-menu-item>\r\n                                            <mat-icon>history</mat-icon>\r\n                                            <span>History</span>\r\n                                        </button>\r\n                                        <button mat-menu-item>\r\n                                            <mat-icon>notifications_off</mat-icon>\r\n                                            <span>Disable alerts</span>\r\n                                        </button>\r\n                                    </mat-menu>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"p-16 pt-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\r\n                                <div class=\"font-size-48 font-weight-300 line-height-1\">540.48</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon>trending_up</mat-icon>\r\n                                    <div class=\"ml-8\">2.29 (2.05%)</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <mat-tab-group backgroundColor=\"accent\">\r\n                            <mat-tab label=\"1DAY\">\r\n                                <div class=\"h-200 my-16\">\r\n                                    <ngx-charts-line-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"card19.scheme\"\r\n                                        [results]=\"card19.data\"\r\n                                        [xAxis]=\"false\"\r\n                                        [yAxis]=\"true\"\r\n                                        [yScaleMin]=\"'538'\"\r\n                                        [yScaleMax]=\"'541'\">\r\n                                    </ngx-charts-line-chart>\r\n                                </div>\r\n                            </mat-tab>\r\n\r\n                            <mat-tab label=\"1WEEK\">\r\n                                <div class=\"h-200 my-16\">\r\n                                    <ngx-charts-line-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"card19.scheme\"\r\n                                        [results]=\"card19.data\"\r\n                                        [xAxis]=\"false\"\r\n                                        [yAxis]=\"true\"\r\n                                        [yScaleMin]=\"'538'\"\r\n                                        [yScaleMax]=\"'541'\">\r\n                                    </ngx-charts-line-chart>\r\n                                </div>\r\n                            </mat-tab>\r\n\r\n                            <mat-tab label=\"1MONTH\">\r\n                                <div class=\"h-200 my-16\">\r\n                                    <ngx-charts-line-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"card19.scheme\"\r\n                                        [results]=\"card19.data\"\r\n                                        [xAxis]=\"false\"\r\n                                        [yAxis]=\"true\"\r\n                                        [yScaleMin]=\"'538'\"\r\n                                        [yScaleMax]=\"'541'\">\r\n                                    </ngx-charts-line-chart>\r\n                                </div>\r\n                            </mat-tab>\r\n                        </mat-tab-group>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"light-blue-600\">\r\n\r\n                                    <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                        <div class=\"pr-16\">\r\n                                            <div class=\"h1 font-weight-300\">Google Inc.</div>\r\n                                            <div class=\"h5 secondary-text\">NASDAQ: GOOG</div>\r\n                                        </div>\r\n\r\n                                        <div>\r\n                                            <button mat-icon-button [matMenuTriggerFor]=\"card19Menu\" aria-label=\"more\">\r\n                                                <mat-icon>more_vert</mat-icon>\r\n                                            </button>\r\n\r\n                                            <mat-menu #card19Menu=\"matMenu\">\r\n                                                <button mat-menu-item>\r\n                                                    <mat-icon>trending_up</mat-icon>\r\n                                                    <span>Trend</span>\r\n                                                </button>\r\n                                                <button mat-menu-item>\r\n                                                    <mat-icon>history</mat-icon>\r\n                                                    <span>History</span>\r\n                                                </button>\r\n                                                <button mat-menu-item>\r\n                                                    <mat-icon>notifications_off</mat-icon>\r\n                                                    <span>Disable alerts</span>\r\n                                                </button>\r\n                                            </mat-menu>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"p-16 pt-8\" fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\r\n                                        <div class=\"font-size-48 font-weight-300 line-height-1\">540.48</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                            <mat-icon>trending_up</mat-icon>\r\n                                            <div class=\"ml-8\">2.29 (2.05%)</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <mat-tab-group backgroundColor=\"accent\">\r\n                                    <mat-tab label=\"1DAY\">\r\n                                        <div class=\"h-200 my-16\">\r\n                                            <ngx-charts-line-chart\r\n                                                *fuseIfOnDom\r\n                                                [scheme]=\"card19.scheme\"\r\n                                                [results]=\"card19.data\"\r\n                                                [xAxis]=\"false\"\r\n                                                [yAxis]=\"true\"\r\n                                                [yScaleMin]=\"'538'\"\r\n                                                [yScaleMax]=\"'541'\">\r\n                                            </ngx-charts-line-chart>\r\n                                        </div>\r\n                                    </mat-tab>\r\n\r\n                                    <mat-tab label=\"1WEEK\">\r\n                                        <div class=\"h-200 my-16\">\r\n                                            <ngx-charts-line-chart\r\n                                                *fuseIfOnDom\r\n                                                [scheme]=\"card19.scheme\"\r\n                                                [results]=\"card19.data\"\r\n                                                [xAxis]=\"false\"\r\n                                                [yAxis]=\"true\"\r\n                                                [yScaleMin]=\"'538'\"\r\n                                                [yScaleMax]=\"'541'\">\r\n                                            </ngx-charts-line-chart>\r\n                                        </div>\r\n                                    </mat-tab>\r\n\r\n                                    <mat-tab label=\"1MONTH\">\r\n                                        <div class=\"h-200 my-16\">\r\n                                            <ngx-charts-line-chart\r\n                                                *fuseIfOnDom\r\n                                                [scheme]=\"card19.scheme\"\r\n                                                [results]=\"card19.data\"\r\n                                                [xAxis]=\"false\"\r\n                                                [yAxis]=\"true\"\r\n                                                [yScaleMin]=\"'538'\"\r\n                                                [yScaleMax]=\"'541'\">\r\n                                            </ngx-charts-line-chart>\r\n                                        </div>\r\n                                    </mat-tab>\r\n                                </mat-tab-group>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 19 -->\r\n\r\n            <!-- CARD 20 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div class=\"h1 pr-16\">Top campaigns</div>\r\n\r\n                            <div>\r\n                                <button mat-icon-button [matMenuTriggerFor]=\"card20Menu\" aria-label=\"more\">\r\n                                    <mat-icon>more_vert</mat-icon>\r\n                                </button>\r\n\r\n                                <mat-menu #card20Menu=\"matMenu\">\r\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                        <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                        <span>Show Clicks</span>\r\n                                    </button>\r\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                        <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                        <span>Show Conversion</span>\r\n                                    </button>\r\n                                    <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                        <mat-icon>check_box_outline_blank</mat-icon>\r\n                                        <span>Show CPC</span>\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <table class=\"simple clickable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th class=\"text-right\">Clicks</th>\r\n                                    <th class=\"text-right\">Conv</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Holiday Travel</td>\r\n                                    <td class=\"text-right\">3621</td>\r\n                                    <td class=\"text-right\">90</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Get Away Deals</td>\r\n                                    <td class=\"text-right\">703</td>\r\n                                    <td class=\"text-right\">7</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Airfare</td>\r\n                                    <td class=\"text-right\">532</td>\r\n                                    <td class=\"text-right\">0</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Vacation</td>\r\n                                    <td class=\"text-right\">201</td>\r\n                                    <td class=\"text-right\">8</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Hotels</td>\r\n                                    <td class=\"text-right\">94</td>\r\n                                    <td class=\"text-right\">4</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                        <div class=\"card-divider full-width\"></div>\r\n\r\n                        <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">GO TO CAMPAIGNS</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h1 pr-16\">Top campaigns</div>\r\n\r\n                                    <div>\r\n                                        <button mat-icon-button [matMenuTriggerFor]=\"card20Menu\" aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n\r\n                                        <mat-menu #card20Menu=\"matMenu\">\r\n                                            <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                                <span>Show Clicks</span>\r\n                                            </button>\r\n                                            <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                                <span>Show Conversion</span>\r\n                                            </button>\r\n                                            <button fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-menu-item>\r\n                                                <mat-icon>check_box_outline_blank</mat-icon>\r\n                                                <span>Show CPC</span>\r\n                                            </button>\r\n                                        </mat-menu>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <table class=\"simple clickable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th></th>\r\n                                            <th class=\"text-right\">Clicks</th>\r\n                                            <th class=\"text-right\">Conv</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>Holiday Travel</td>\r\n                                            <td class=\"text-right\">3621</td>\r\n                                            <td class=\"text-right\">90</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Get Away Deals</td>\r\n                                            <td class=\"text-right\">703</td>\r\n                                            <td class=\"text-right\">7</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Airfare</td>\r\n                                            <td class=\"text-right\">532</td>\r\n                                            <td class=\"text-right\">0</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Vacation</td>\r\n                                            <td class=\"text-right\">201</td>\r\n                                            <td class=\"text-right\">8</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Hotels</td>\r\n                                            <td class=\"text-right\">94</td>\r\n                                            <td class=\"text-right\">4</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                                <div class=\"card-divider full-width\"></div>\r\n\r\n                                <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">GO TO CAMPAIGNS</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 20 -->\r\n\r\n            <!-- CARD 21 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16 pb-0\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div class=\"h1 pr-16\">Schedule</div>\r\n\r\n                            <mat-form-field>\r\n                                <mat-select class=\"simplified\" value=\"today\">\r\n                                    <mat-option value=\"today\">Today</mat-option>\r\n                                    <mat-option value=\"yesterday\">Yesterday</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <mat-list>\r\n                            <mat-list-item>\r\n                                <h3 matLine>Group Meeting</h3>\r\n                                <p matLine>\r\n                                    <span class=\"secondary-text\">In 32 minutes -</span>\r\n                                    <span class=\"text-bold\">Room 1B</span>\r\n                                </p>\r\n                            </mat-list-item>\r\n\r\n                            <mat-list-item>\r\n                                <h3 matLine>Coffee Break</h3>\r\n                                <p matLine>\r\n                                    <span class=\"secondary-text\">10:30AM</span>\r\n                                </p>\r\n                            </mat-list-item>\r\n\r\n                            <mat-list-item>\r\n                                <h3 matLine>Public Beta Release</h3>\r\n                                <p matLine>\r\n                                    <span class=\"secondary-text\">11:00AM</span>\r\n                                </p>\r\n                            </mat-list-item>\r\n\r\n                            <mat-list-item>\r\n                                <h3 matLine>Lunch</h3>\r\n                                <p matLine>\r\n                                    <span class=\"secondary-text\">12:10PM</span>\r\n                                </p>\r\n                            </mat-list-item>\r\n\r\n                            <mat-list-item>\r\n                                <h3 matLine>Dinner with David</h3>\r\n                                <p matLine>\r\n                                    <span class=\"secondary-text\">17:30PM</span>\r\n                                </p>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n\r\n                        <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <button mat-button color=\"accent\">SEE COMPLETE SCHEDULE</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h1 pr-16\">Top campaigns</div>\r\n\r\n                                    <div>\r\n                                        <button mat-icon-button [matMenuTriggerFor]=\"card20Menu\" aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n\r\n                                        <mat-menu #card20Menu=\"matMenu\">\r\n                                            <button mat-menu-item>\r\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                                <span>Show Clicks</span>\r\n                                            </button>\r\n                                            <button mat-menu-item>\r\n                                                <mat-icon color=\"accent\">check_box</mat-icon>\r\n                                                <span>Show Conversion</span>\r\n                                            </button>\r\n                                            <button mat-menu-item>\r\n                                                <mat-icon>check_box_outline_blank</mat-icon>\r\n                                                <span>Show CPC</span>\r\n                                            </button>\r\n                                        </mat-menu>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <table class=\"simple clickable\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th></th>\r\n                                            <th>Clicks</th>\r\n                                            <th>Conv</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>Holiday Travel</td>\r\n                                            <td>3621</td>\r\n                                            <td>90</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Get Away Deals</td>\r\n                                            <td>703</td>\r\n                                            <td>7</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Airfare</td>\r\n                                            <td>532</td>\r\n                                            <td>0</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Vacation</td>\r\n                                            <td>201</td>\r\n                                            <td>8</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Hotels</td>\r\n                                            <td>94</td>\r\n                                            <td>4</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                                <div class=\"p-8 pt-16\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <button mat-button color=\"accent\">SEE COMPLETE SCHEDULE</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 21 -->\r\n\r\n            <!-- CARD 22 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div class=\"pr-16\">\r\n                                <div class=\"h1 font-weight-300\">Sales Reports</div>\r\n                            </div>\r\n\r\n                            <div>\r\n                                <button mat-icon-button [matMenuTriggerFor]=\"card22Menu\" aria-label=\"more\">\r\n                                    <mat-icon>more_vert</mat-icon>\r\n                                </button>\r\n\r\n                                <mat-menu #card22Menu=\"matMenu\">\r\n                                    <button mat-menu-item>\r\n                                        <mat-icon>history</mat-icon>\r\n                                        <span>History</span>\r\n                                    </button>\r\n                                    <button mat-menu-item>\r\n                                        <mat-icon>notifications_off</mat-icon>\r\n                                        <span>Disable alerts</span>\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <mat-tab-group>\r\n                            <mat-tab label=\"1WEEK\">\r\n                                <div class=\"p-16\">\r\n                                    <p>\r\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\r\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\r\n                                        cursus. In sodales pretium ultrices.\r\n                                    </p>\r\n                                    <p>\r\n                                        Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.\r\n                                        Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\r\n                                        rutrum enim, vel tempor sapien arcu a tellus.\r\n                                    </p>\r\n                                    <p>\r\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\r\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\r\n                                        cursus. In sodales pretium ultrices.\r\n                                    </p>\r\n                                </div>\r\n                            </mat-tab>\r\n\r\n                            <mat-tab label=\"2WEEKS\">\r\n                                <div class=\"p-16\">\r\n                                    <p>\r\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\r\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\r\n                                        cursus. In sodales pretium ultrices.\r\n                                    </p>\r\n                                    <p>\r\n                                        Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.\r\n                                        Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\r\n                                        rutrum enim, vel tempor sapien arcu a tellus.\r\n                                    </p>\r\n                                    <p>\r\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\r\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\r\n                                        cursus. In sodales pretium ultrices.\r\n                                    </p>\r\n                                </div>\r\n                            </mat-tab>\r\n\r\n                            <mat-tab label=\"3WEEKS\">\r\n                                <div class=\"p-16\">\r\n                                    <p>\r\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\r\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\r\n                                        cursus. In sodales pretium ultrices.\r\n                                    </p>\r\n                                    <p>\r\n                                        Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.\r\n                                        Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\r\n                                        rutrum enim, vel tempor sapien arcu a tellus.\r\n                                    </p>\r\n                                    <p>\r\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante\r\n                                        augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam\r\n                                        cursus. In sodales pretium ultrices.\r\n                                    </p>\r\n                                </div>\r\n                            </mat-tab>\r\n                        </mat-tab-group>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"pr-16\">\r\n                                        <div class=\"h1 font-weight-300\">Sales Reports</div>\r\n                                    </div>\r\n\r\n                                    <div>\r\n                                        <button mat-icon-button [matMenuTriggerFor]=\"card22Menu\" aria-label=\"more\">\r\n                                            <mat-icon>more_vert</mat-icon>\r\n                                        </button>\r\n\r\n                                        <mat-menu #card22Menu=\"matMenu\">\r\n                                            <button mat-menu-item>\r\n                                                <mat-icon>history</mat-icon>\r\n                                                <span>History</span>\r\n                                            </button>\r\n                                            <button mat-menu-item>\r\n                                                <mat-icon>notifications_off</mat-icon>\r\n                                                <span>Disable alerts</span>\r\n                                            </button>\r\n                                        </mat-menu>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <mat-tab-group>\r\n                                    <mat-tab label=\"1WEEK\">\r\n                                        <div class=\"p-16\">\r\n                                            <p>\r\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\r\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\r\n                                                consequat aliquam cursus. In sodales pretium ultrices.\r\n                                            </p>\r\n                                            <p>\r\n                                                Maecenas lectus est, sollicitudin consectetur felis nec, feugiat\r\n                                                ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices\r\n                                                porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                                            </p>\r\n                                            <p>\r\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\r\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\r\n                                                consequat aliquam cursus. In sodales pretium ultrices.\r\n                                            </p>\r\n                                        </div>\r\n                                    </mat-tab>\r\n\r\n                                    <mat-tab label=\"2WEEKS\">\r\n                                        <div class=\"p-16\">\r\n                                            <p>\r\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\r\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\r\n                                                consequat aliquam cursus. In sodales pretium ultrices.\r\n                                            </p>\r\n                                            <p>\r\n                                                Maecenas lectus est, sollicitudin consectetur felis nec, feugiat\r\n                                                ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices\r\n                                                porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                                            </p>\r\n                                            <p>\r\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\r\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\r\n                                                consequat aliquam cursus. In sodales pretium ultrices.\r\n                                            </p>\r\n                                        </div>\r\n                                    </mat-tab>\r\n\r\n                                    <mat-tab label=\"3WEEKS\">\r\n                                        <div class=\"p-16\">\r\n                                            <p>\r\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\r\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\r\n                                                consequat aliquam cursus. In sodales pretium ultrices.\r\n                                            </p>\r\n                                            <p>\r\n                                                Maecenas lectus est, sollicitudin consectetur felis nec, feugiat\r\n                                                ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices\r\n                                                porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                                            </p>\r\n                                            <p>\r\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis\r\n                                                ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam\r\n                                                consequat aliquam cursus. In sodales pretium ultrices.\r\n                                            </p>\r\n                                        </div>\r\n                                    </mat-tab>\r\n                                </mat-tab-group>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 22 -->\r\n\r\n            <!-- CARD 23 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16 pb-0\">\r\n                            <div class=\"h1 font-weight-300\">Shopping List</div>\r\n                        </div>\r\n\r\n                        <div class=\"card-divider\"></div>\r\n\r\n                        <mat-selection-list class=\"pt-0 pb-16\">\r\n                            <mat-list-option checkboxPosition=\"before\" selected>Milk</mat-list-option>\r\n                            <mat-list-option checkboxPosition=\"before\">Tomatoes</mat-list-option>\r\n                            <mat-list-option checkboxPosition=\"before\" selected>Green Apples</mat-list-option>\r\n                            <mat-list-option checkboxPosition=\"before\" selected>Chocolate Bar</mat-list-option>\r\n                            <mat-list-option checkboxPosition=\"before\">Break</mat-list-option>\r\n                            <mat-list-option checkboxPosition=\"before\">Eggs</mat-list-option>\r\n                            <mat-list-option checkboxPosition=\"before\" selected>Lettuce</mat-list-option>\r\n                            <mat-list-option checkboxPosition=\"before\">Pickles</mat-list-option>\r\n                        </mat-selection-list>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16 pb-0\">\r\n                                    <div class=\"h1 font-weight-300\">Shopping List</div>\r\n                                </div>\r\n\r\n                                <div class=\"card-divider\"></div>\r\n\r\n                                <mat-selection-list class=\"pt-0 pb-16\">\r\n                                    <mat-list-option checkboxPosition=\"before\" selected>Milk</mat-list-option>\r\n                                    <mat-list-option checkboxPosition=\"before\">Tomatoes</mat-list-option>\r\n                                    <mat-list-option checkboxPosition=\"before\" selected>Green Apples</mat-list-option>\r\n                                    <mat-list-option checkboxPosition=\"before\" selected>Chocolate Bar</mat-list-option>\r\n                                    <mat-list-option checkboxPosition=\"before\">Break</mat-list-option>\r\n                                    <mat-list-option checkboxPosition=\"before\">Eggs</mat-list-option>\r\n                                    <mat-list-option checkboxPosition=\"before\" selected>Lettuce</mat-list-option>\r\n                                    <mat-list-option checkboxPosition=\"before\">Pickles</mat-list-option>\r\n                                </mat-selection-list>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 23 -->\r\n\r\n            <!-- CARD 24 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h1 font-weight-300\">Sessions by device</div>\r\n                        </div>\r\n\r\n                        <div class=\"h-200\">\r\n                            <ngx-charts-pie-chart\r\n                                [scheme]=\"card24.scheme\"\r\n                                [results]=\"card24.devices\"\r\n                                [doughnut]=\"true\">\r\n                            </ngx-charts-pie-chart>\r\n                        </div>\r\n\r\n                        <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                                <div class=\"h4 secondary-text\">Desktop</div>\r\n                                <div class=\"h2 font-weight-300 py-8\">92.8%</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                    <mat-icon class=\"s-18 pr-4 red-fg\">\r\n                                        arrow_downward\r\n                                    </mat-icon>\r\n\r\n                                    <div class=\"h5 red-fg\">\r\n                                        -0.6%\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                                <div class=\"h4 secondary-text\">Mobile</div>\r\n                                <div class=\"h2 font-weight-300 py-8\">6.1%</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                    <mat-icon class=\"s-18 pr-4 green-fg\">\r\n                                        arrow_upward\r\n                                    </mat-icon>\r\n\r\n                                    <div class=\"h5 green-fg\">\r\n                                        +0.7%\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                                <div class=\"h4 secondary-text\">Tablet</div>\r\n                                <div class=\"h2 font-weight-300 py-8\">1.1%</div>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                    <mat-icon class=\"s-18 pr-4 green-fg\">\r\n                                        arrow_upward\r\n                                    </mat-icon>\r\n\r\n                                    <div class=\"h5 green-fg\">\r\n                                        +0.1%\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-divider mb-0\"></div>\r\n\r\n                        <div class=\"px-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <mat-form-field>\r\n                                <mat-select class=\"simplified\" value=\"7days\">\r\n                                    <mat-option value=\"today\">Today</mat-option>\r\n                                    <mat-option value=\"yesterday\">Yesterday</mat-option>\r\n                                    <mat-option value=\"7days\">Last 7 days</mat-option>\r\n                                    <mat-option value=\"28days\">Last 28 days</mat-option>\r\n                                    <mat-option value=\"90days\">Last 90 days</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n\r\n                            <button mat-button color=\"accent\">OVERVIEW</button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h1 font-weight-300\">Sessions by device</div>\r\n                                </div>\r\n\r\n                                <div class=\"h-200\">\r\n                                    <ngx-charts-pie-chart\r\n                                        [scheme]=\"card24.scheme\"\r\n                                        [results]=\"card24.devices\"\r\n                                        [doughnut]=\"true\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                                        <div class=\"h4 secondary-text\">Desktop</div>\r\n                                        <div class=\"h2 font-weight-300 py-8\">92.8%</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                            <mat-icon class=\"s-18 pr-4 red-fg\">\r\n                                                arrow_downward\r\n                                            </mat-icon>\r\n\r\n                                            <div class=\"h5 red-fg\">\r\n                                                -0.6%\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                                        <div class=\"h4 secondary-text\">Mobile</div>\r\n                                        <div class=\"h2 font-weight-300 py-8\">6.1%</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                            <mat-icon class=\"s-18 pr-4 green-fg\">\r\n                                                arrow_upward\r\n                                            </mat-icon>\r\n\r\n                                            <div class=\"h5 green-fg\">\r\n                                                +0.7%\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"px-16\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                                        <div class=\"h4 secondary-text\">Tablet</div>\r\n                                        <div class=\"h2 font-weight-300 py-8\">1.1%</div>\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                            <mat-icon class=\"s-18 pr-4 green-fg\">\r\n                                                arrow_upward\r\n                                            </mat-icon>\r\n\r\n                                            <div class=\"h5 green-fg\">\r\n                                                +0.1%\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"card-divider mb-0\"></div>\r\n\r\n                                <div class=\"px-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <mat-form-field>\r\n                                        <mat-select class=\"simplified\" value=\"7days\">\r\n                                            <mat-option value=\"today\">Today</mat-option>\r\n                                            <mat-option value=\"yesterday\">Yesterday</mat-option>\r\n                                            <mat-option value=\"7days\">Last 7 days</mat-option>\r\n                                            <mat-option value=\"28days\">Last 28 days</mat-option>\r\n                                            <mat-option value=\"90days\">Last 90 days</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n\r\n                                    <button mat-button color=\"accent\">OVERVIEW</button>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 24 -->\r\n\r\n            <!-- CARD 25 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h5 secondary-text\">Conversion</div>\r\n                            <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">492</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0\">\r\n                            <span class=\"green-fg\">+22%</span>\r\n                            of target\r\n                        </div>\r\n\r\n                        <div class=\"h-80\">\r\n                            <ngx-charts-bar-vertical\r\n                                [scheme]=\"card25.scheme\"\r\n                                [results]=\"card25.data\">\r\n                            </ngx-charts-bar-vertical>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h5 secondary-text\">Conversion</div>\r\n                                    <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">492</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0\">\r\n                                    <span class=\"green-fg\">+22%</span>\r\n                                    of target\r\n                                </div>\r\n\r\n                                <div class=\"h-80\">\r\n                                    <ngx-charts-bar-vertical\r\n                                        [scheme]=\"card25.scheme\"\r\n                                        [results]=\"card25.data\">\r\n                                    </ngx-charts-bar-vertical>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 25 -->\r\n\r\n            <!-- CARD 26 -->\r\n            <div class=\"card\">\r\n\r\n                <!-- PREVIEW -->\r\n                <div class=\"card-preview\">\r\n\r\n                    <div class=\"fuse-card\">\r\n\r\n                        <div class=\"p-16\">\r\n                            <div class=\"h5 secondary-text\">Impressions</div>\r\n                            <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">87.4M</div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pt-0\">\r\n                            <span class=\"green-fg\">+12.3%</span>\r\n                            of target\r\n                        </div>\r\n\r\n                        <div class=\"h-80\">\r\n                            <ngx-charts-line-chart\r\n                                [scheme]=\"card26.scheme\"\r\n                                [results]=\"card26.data\"\r\n                                [curve]=\"card26.curve\">\r\n                            </ngx-charts-line-chart>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / PREVIEW -->\r\n\r\n                <!-- SOURCE -->\r\n                <div class=\"card-source\" fxHide fxShow.gt-sm>\r\n\r\n                    <fuse-highlight lang=\"html\">\r\n                        <textarea #source>\r\n\r\n                            <div class=\"fuse-card\">\r\n\r\n                                <div class=\"p-16\">\r\n                                    <div class=\"h5 secondary-text\">Impressions</div>\r\n                                    <div class=\"font-size-54 font-weight-300 line-height-1 mt-8\">87.4M</div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 pt-0\">\r\n                                    <span class=\"green-fg\">+12.3%</span>\r\n                                    of target\r\n                                </div>\r\n\r\n                                <div class=\"h-80\">\r\n                                    <ngx-charts-line-chart\r\n                                        [scheme]=\"card26.scheme\"\r\n                                        [results]=\"card26.data\"\r\n                                        [curve]=\"card26.curve\">\r\n                                    </ngx-charts-line-chart>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </textarea>\r\n                    </fuse-highlight>\r\n\r\n                </div>\r\n                <!-- / SOURCE -->\r\n\r\n            </div>\r\n            <!-- / CARD 26 -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/colors/colors.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/colors/colors.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiColorsColorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"material-colors\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\r\n         fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Colors</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\"\r\n           href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\r\n           target=\"_blank\">\r\n            <mat-icon class=\"mr-8\">link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group class=\"color-tabs\" dynamicHeight=\"true\" (selectedTabChange)=\"selectColor($event)\">\r\n\r\n            <mat-tab *ngFor=\"let color of ['primary', 'accent', 'warn']\" label=\"{{color}}\">\r\n                <ng-template mat-tab-label>\r\n                    <span class=\"text-capitalize\">{{color}}</span>\r\n                </ng-template>\r\n            </mat-tab>\r\n\r\n            <mat-tab *ngFor=\"let color of (colors | keys)\" label=\"{{color.key}}\">\r\n                <ng-template mat-tab-label>\r\n                    <span class=\"text-capitalize\">{{color.key}}</span>\r\n                </ng-template>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n        <div class=\"color-tabs-content p-24\" fxLayout=\"column\">\r\n\r\n            <div class=\"h3 pb-16\">Fuse has classes for every single color from\r\n                <a href=\"https://www.google.com/design/spec/style/color.html#color-color-palette\"\r\n                   target=\"_blank\">Material Design Color Palette</a> for your convenient. You can use them with pretty\r\n                much every element.\r\n            </div>\r\n\r\n            <div class=\"color-header colored-bg p-8\"\r\n                 [ngClass]=\"selectedColor\"\r\n                 fxLayout=\"column\">\r\n\r\n                <div fxLayout=\"row\">\r\n                    <h3 class=\"text-capitalize p-8\" fxFlex=\"30\">{{selectedColor}}</h3>\r\n                    <h4 class=\"p-8\" fxFlex=\"30\">Background and Color</h4>\r\n                    <h4 class=\"p-8\" fxFlex=\"30\">Background only</h4>\r\n                    <h4 class=\"p-8\" fxFlex=\"128px\">Color only</h4>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\">\r\n\r\n                <div class=\"colored-bg p-8\" fxLayout=\"row\" [ngClass]=\"selectedColor\">\r\n\r\n                    <div class=\"colored-bg p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n                        Default\r\n                    </div>\r\n\r\n                    <div class=\"colored-bg p-8\" [ngClass]=\"selectedColor\" fxFlex=\"30\">\r\n                        <div class=\"pb-4\">.{{selectedColor}}</div>\r\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\r\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\r\n                        <div class=\"divider\">.divider</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n                        .{{selectedColor + '-bg'}}\r\n                    </div>\r\n\r\n                    <div class=\"p-8\"\r\n                         [ngClass]=\"selectedColor + '-' + '-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\r\n                        .{{selectedColor + '-' + '-fg'}}\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"color\" fxLayout=\"column\" fxFlex=\"1 0 auto\"\r\n                 *ngIf=\"selectedColor != 'black' && selectedColor != 'white'\">\r\n\r\n                <div class=\"colored-bg p-8\"\r\n                     *ngFor=\"let hue of ['50','100','200','300','400','500','600','700','800','900','A100','A200','A400','A700']\"\r\n                     fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayout.sm=\"column\"\r\n                     [ngClass]=\"selectedColor + '-' + hue\">\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">{{hue}}</div>\r\n\r\n                    <div class=\"colored-bg p-8\" [ngClass]=\"selectedColor + '-' + hue\" fxFlex=\"30\">\r\n                        <div class=\"pb-4\">.{{selectedColor + '-' + hue}}</div>\r\n                        <div class=\"secondary-text pb-4\">.secondary-text</div>\r\n                        <div class=\"hint-text pb-4\">.hint-text, .disabled-text</div>\r\n                        <div class=\"divider\">.divider</div>\r\n                    </div>\r\n\r\n                    <div class=\"p-8\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n                        .{{selectedColor + '-' + hue + '-bg'}}\r\n                    </div>\r\n\r\n                    <div class=\"fg-box mat-elevation-z2 p-8\"\r\n                         [ngClass]=\"selectedColor + '-' + hue + '-fg'\" fxFlex=\"128px\" fxLayoutAlign=\"center center\">\r\n                        .{{selectedColor + '-' + hue + '-fg'}}\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/forms/forms.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/forms/forms.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiFormsFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"forms\" class=\"page-layout simple fullwidth\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Forms</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div class=\"h1\">\r\n            Reactive Forms\r\n        </div>\r\n\r\n        <p class=\"pt-16 pb-32\">\r\n            Angular reactive forms facilitate a reactive style of programming that favors explicit management of the\r\n            data flowing between a non-UI data model (typically retrieved from a server) and a UI-oriented form model\r\n            that retains the states and values of the HTML controls on screen. Reactive forms offer the ease of using\r\n            reactive patterns, testing, and validation.\r\n        </p>\r\n\r\n        <div class=\"mb-24\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayout.gt-md=\"row\">\r\n\r\n            <!-- REACTIVE FORM EXAMPLE -->\r\n\r\n            <form class=\"mat-card mat-elevation-z4 p-24 mr-24\" fxLayout=\"column\" fxLayoutAlign=\"start\"\r\n                  fxFlex=\"1 0 auto\" name=\"form\" [formGroup]=\"form\">\r\n\r\n                <div class=\"h2 mb-24\">Reactive Form Example</div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                        <mat-label>Company (disabled)</mat-label>\r\n                        <input matInput formControlName=\"company\">\r\n                        <mat-icon matSuffix class=\"disabled-text\">domain</mat-icon>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\" class=\"pr-4\">\r\n                        <mat-label>First name</mat-label>\r\n                        <input matInput formControlName=\"firstName\" required>\r\n                        <mat-icon matSuffix class=\"secondary-text\">account_circle</mat-icon>\r\n                        <mat-error>First Name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"50\" class=\"pl-4\">\r\n                        <mat-label>Last name</mat-label>\r\n                        <input matInput formControlName=\"lastName\" required>\r\n                        <mat-icon matSuffix class=\"secondary-text\">account_circle</mat-icon>\r\n                        <mat-error>Last Name is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                        <mat-label>Address</mat-label>\r\n                        <textarea matInput formControlName=\"address\" required>\r\n                            1600 Amphitheatre Pkwy\r\n                        </textarea>\r\n                        <mat-error>Address is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                        <mat-label>Address 2</mat-label>\r\n                        <textarea matInput formControlName=\"address2\"></textarea>\r\n                        <mat-error>Address 2 is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"33\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput formControlName=\"city\" required>\r\n                        <mat-icon matSuffix class=\"secondary-text\">location_city</mat-icon>\r\n                        <mat-error>City is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"34\" class=\"px-8\">\r\n                        <mat-label>State</mat-label>\r\n                        <input matInput formControlName=\"state\" required>\r\n                        <mat-icon matSuffix class=\"secondary-text\">location_city</mat-icon>\r\n                        <mat-error>State is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"33\">\r\n                        <mat-label>Postal Code</mat-label>\r\n                        <input matInput #postalCode value=\"94043\"\r\n                               formControlName=\"postalCode\" maxlength=\"5\" required>\r\n                        <mat-icon matSuffix class=\"secondary-text\">markunread_mailbox</mat-icon>\r\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                        <mat-error>Postal Code is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\r\n\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                        <mat-label>Country</mat-label>\r\n                        <mat-select formControlName=\"country\" required>\r\n                            <mat-option [value]=\"'United States of America'\">\r\n                                United States of America\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'United Kingdom'\">\r\n                                United Kingdom\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Russia'\">\r\n                                Russia\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'China'\">\r\n                                China\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Japan'\">\r\n                                Japan\r\n                            </mat-option>\r\n                            <mat-option [value]=\"'Turkey'\">\r\n                                Turkey\r\n                            </mat-option>\r\n                        </mat-select>\r\n                        <mat-icon matSuffix class=\"secondary-text\">outlined_flag</mat-icon>\r\n                        <mat-error>Country is required!</mat-error>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <!-- / REACTIVE FORM EXAMPLE -->\r\n\r\n            <div class=\"mat-card form-errors-model p-24 mat-elevation-z4\">\r\n                <div class=\"h2 mb-24\">Reactive Form Model</div>\r\n                <pre><code>{{form.getRawValue() | json}}</code></pre>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"h1 pt-32\">\r\n            Horizontal Stepper\r\n        </div>\r\n\r\n        <p class=\"pb-32\">\r\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n            <code>mat-horizontal-stepper</code> selector can be used to create a horizontal stepper.\r\n        </p>\r\n\r\n        <div class=\"horizontal-stepper-wrapper\">\r\n\r\n            <!-- HORIZONTAL STEPPER EXAMPLE -->\r\n            <mat-horizontal-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep1\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep1\">\r\n\r\n                        <ng-template matStepLabel>Fill out your name</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>First Name</mat-label>\r\n                                <input matInput formControlName=\"firstName\" required>\r\n                                <mat-error>First Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>Last Name</mat-label>\r\n                                <input matInput formControlName=\"lastName\" required>\r\n                                <mat-error>Last Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep2\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep2\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>Address</mat-label>\r\n                                <textarea matInput formControlName=\"address\" required>\r\n                                    1600 Amphitheatre Pkwy\r\n                                </textarea>\r\n                                <mat-error>Address is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>Reactive Form Example\r\n\r\n                <mat-step [stepControl]=\"horizontalStepperStep3\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"horizontalStepperStep3\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>City</mat-label>\r\n                                <input matInput formControlName=\"city\" required>\r\n                                <mat-error>City is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>State</mat-label>\r\n                                <input matInput formControlName=\"state\" required>\r\n                                <mat-error>State is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>Postal Code</mat-label>\r\n                                <input matInput #postalCode2 formControlName=\"postalCode\"\r\n                                       maxlength=\"5\" required>\r\n                                <mat-hint align=\"end\">{{postalCode2.value.length}} / 5</mat-hint>\r\n                                <mat-error>Postal Code is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step>\r\n\r\n                    <ng-template matStepLabel>Done</ng-template>\r\n\r\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        Thank your for filling out our form.\r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                            Previous\r\n                        </button>\r\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishHorizontalStepper()\">\r\n                            Finish\r\n                        </button>\r\n                    </div>\r\n\r\n                </mat-step>\r\n\r\n            </mat-horizontal-stepper>\r\n            <!-- / HORIZONTAL STEPPER EXAMPLE -->\r\n\r\n        </div>\r\n\r\n        <div class=\"h1 pt-48\">\r\n            Vertical Stepper\r\n        </div>\r\n\r\n        <p class=\"pb-32\">\r\n            Angular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n            <code>mat-vertical-stepper</code> can be used to create a vertical stepper.\r\n        </p>\r\n\r\n        <div class=\"vertical-stepper-wrapper\">\r\n\r\n            <!-- VERTICAL STEPPER EXAMPLE -->\r\n            <mat-vertical-stepper class=\"mat-elevation-z4\" [linear]=\"true\">\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep1\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep1\">\r\n\r\n                        <ng-template matStepLabel>Fill out your name</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>First Name</mat-label>\r\n                                <input matInput formControlName=\"firstName\" required>\r\n                                <mat-error>First Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>Last Name</mat-label>\r\n                                <input matInput formControlName=\"lastName\" required>\r\n                                <mat-error>Last Name is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep2\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep2\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>Address</mat-label>\r\n                                <textarea matInput formControlName=\"address\" required>\r\n                                    1600 Amphitheatre Pkwy\r\n                                </textarea>\r\n                                <mat-error>Address is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step [stepControl]=\"verticalStepperStep3\">\r\n\r\n                    <form fxLayout=\"column\" [formGroup]=\"verticalStepperStep3\">\r\n\r\n                        <ng-template matStepLabel>Fill out your address</ng-template>\r\n\r\n                        <div fxFlex=\"1 0 auto\" fxLayout=\"column\">\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>City</mat-label>\r\n                                <input matInput formControlName=\"city\" required>\r\n                                <mat-error>City is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>State</mat-label>\r\n                                <input matInput formControlName=\"state\" required>\r\n                                <mat-error>State is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" fxFlex=\"100\">\r\n                                <mat-label>Postal Code</mat-label>\r\n                                <input matInput #postalCode3 formControlName=\"postalCode\"\r\n                                       maxlength=\"5\" required>\r\n                                <mat-hint align=\"end\">{{postalCode3.value.length}} / 5</mat-hint>\r\n                                <mat-error>Postal Code is required!</mat-error>\r\n                            </mat-form-field>\r\n\r\n                        </div>\r\n\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                                Previous\r\n                            </button>\r\n                            <button mat-raised-button matStepperNext type=\"button\" color=\"accent\">\r\n                                Next\r\n                            </button>\r\n                        </div>\r\n\r\n                    </form>\r\n\r\n                </mat-step>\r\n\r\n                <mat-step>\r\n\r\n                    <ng-template matStepLabel>Done</ng-template>\r\n\r\n                    <div class=\"h2 m-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        Thank your for filling out our form.\r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                        <button class=\"mr-8\" mat-raised-button matStepperPrevious type=\"button\" color=\"accent\">\r\n                            Previous\r\n                        </button>\r\n                        <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"finishVerticalStepper()\">\r\n                            Finish\r\n                        </button>\r\n                    </div>\r\n\r\n                </mat-step>\r\n\r\n            </mat-vertical-stepper>\r\n            <!-- / VERTICAL STEPPER EXAMPLE -->\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/helper-classes.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/helper-classes.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiHelperClassesHelperClassesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Helper Classes</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Padding & Margin Helpers\">\r\n\r\n                <helper-classes-padding-margin></helper-classes-padding-margin>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Width & Height Helpers\">\r\n\r\n                <helper-classes-width-height></helper-classes-width-height>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiHelperClassesTabsPaddingMarginPaddingMarginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"helper-classes-padding-margin\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Padding Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>p-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-0\">No padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>p-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-4\">4px padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>p-12</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"p-12\">12px padding</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Direction Specific Padding Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>pt-0</span>\r\n                <span>pr-0</span>\r\n                <span>pb-0</span>\r\n                <span>pl-0</span>\r\n                <span>px-0</span>\r\n                <span>py-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"pt-0\">0 padding from top</span>\r\n                    <span class=\"pr-0\">0 padding from right</span>\r\n                    <span class=\"pb-0\">0 padding from bottom</span>\r\n                    <span class=\"pl-0\">0 padding from left</span>\r\n                    <span class=\"px-0\">0 padding from left and right</span>\r\n                    <span class=\"py-0\">0 padding from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>pt-4</span>\r\n                <span>pr-4</span>\r\n                <span>pb-4</span>\r\n                <span>pl-4</span>\r\n                <span>px-4</span>\r\n                <span>py-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"pt-4\">4px padding from top</span>\r\n                    <span class=\"pr-4\">4px padding from right</span>\r\n                    <span class=\"pb-4\">4px padding from bottom</span>\r\n                    <span class=\"pl-4\">4px padding from left</span>\r\n                    <span class=\"px-4\">4px padding from left and right</span>\r\n                    <span class=\"py-4\">4px padding from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Margin Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>m-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-0\">No margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>m-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-4\">4px margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>m-12</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"m-12\">12px margin</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Direction Specific Margin Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>mt-0</span>\r\n                <span>mr-0</span>\r\n                <span>mb-0</span>\r\n                <span>ml-0</span>\r\n                <span>mx-0</span>\r\n                <span>my-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mt-0\">0 margin from top</span>\r\n                    <span class=\"mr-0\">0 margin from right</span>\r\n                    <span class=\"mb-0\">0 margin from bottom</span>\r\n                    <span class=\"ml-0\">0 margin from left</span>\r\n                    <span class=\"mx-0\">0 margin from left and right</span>\r\n                    <span class=\"my-0\">0 margin from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:256, Multiples of 4</div>\r\n                <span>mt-4</span>\r\n                <span>mr-4</span>\r\n                <span>mb-4</span>\r\n                <span>ml-4</span>\r\n                <span>mx-4</span>\r\n                <span>my-4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mt-4\">4px margin from top</span>\r\n                    <span class=\"mr-4\">4px margin from right</span>\r\n                    <span class=\"mb-4\">4px margin from bottom</span>\r\n                    <span class=\"ml-4\">4px margin from left</span>\r\n                    <span class=\"mx-4\">4px margin from left and right</span>\r\n                    <span class=\"my-4\">4px margin from top and bottom</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiHelperClassesTabsWidthHeightWidthHeightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"helper-classes-width-height\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Width Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>w-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-0\">0px width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\r\n                <span>w-100</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-100\">100px width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>w-25-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-25-p\">25% width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>w-100-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"w-100-p\">100% width</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Height Helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>h-0</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-0\">0px height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:512, Multiples of 4</div>\r\n                <span>h-100</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-100\">100px height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>h-25-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-25-p\">25% height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Min:0 - Max:100, Multiples of 5</div>\r\n                <span>h-100-p</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"h-100-p\">100% height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/icons/icons.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/icons/icons.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiIconsIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"helper-classes\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\r\n         fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Icons</div>\r\n        </div>\r\n\r\n        <a mat-raised-button class=\"reference-button mt-16 mt-sm-0\" href=\"https://material.angular.io\"\r\n           target=\"_blank\">\r\n            <mat-icon class=\"mr-8\">link</mat-icon>\r\n            <span>Reference</span>\r\n        </a>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <mat-spinner *ngIf=\"loading\" color=\"accent\"></mat-spinner>\r\n        </div>\r\n\r\n        <div *ngIf=\"!loading\">\r\n\r\n            <div fxLayout=\"column\">\r\n\r\n                <div class=\"m-32\">\r\n                    <mat-form-field class=\"w-100-p\">\r\n                        <input matInput placeholder=\"Search an icon...\" (input)=\"filterIcons($event)\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row wrap\">\r\n\r\n                    <div class=\"icon-holder m-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n                         *ngFor=\"let icon of filteredIcons\">\r\n                        <mat-icon class=\"secondary-text s-48\">{{icon.ligature}}</mat-icon>\r\n                        <div class=\"icon-name secondary-text mt-8\">{{icon.ligature}}</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/blank/blank.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/blank/blank.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsBlankBlankComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout blank p-24\" fusePerfectScrollbar>\r\n\r\n    <h2>Blank Page</h2>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedFullWidth1FullWidth1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded fullwidth\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n                <span>Content toolbar</span>\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedFullWidth2FullWidth2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded fullwidth inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n                <span>Content toolbar</span>\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n\r\n                <fuse-demo-content></fuse-demo-content>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedFullWidthTabbed1FullWidthTabbed1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded fullwidth tabbed\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with tabs and content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedFullWidthTabbed2FullWidthTabbed2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded fullwidth tabbed inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <h2 class=\"m-0\">Full width with tabs and inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedLeftSidebar1LeftSidebar1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded left-sidebar\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Left sidebar with content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedLeftSidebar2LeftSidebar2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded left-sidebar inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Left sidebar with inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedLeftSidebarTabbed1LeftSidebarTabbed1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded left-sidebar tabbed\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-tabbed-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-tabbed-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Left sidebar with tabs and content scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedLeftSidebarTabbed2LeftSidebarTabbed2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded left-sidebar tabbed inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-left-sidebar-tabbed-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-left-sidebar-tabbed-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Left sidebar with tabs and inner scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedRightSidebar1RightSidebar1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded right-sidebar\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Right sidebar with content scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedRightSidebar2RightSidebar2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded right-sidebar inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-2\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n            <h2 class=\"m-0\">Right sidebar with inner scroll</h2>\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT TOOLBAR -->\r\n            <div class=\"toolbar px-24 py-8\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <span>Content toolbar</span>\r\n\r\n            </div>\r\n            <!-- / CONTENT TOOLBAR -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedRightSidebarTabbed1RightSidebarTabbed1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded right-sidebar tabbed\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-tabbed-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-tabbed-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Right sidebar with tabs and content scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\">\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsCardedRightSidebarTabbed2RightSidebarTabbed2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout carded right-sidebar tabbed inner-scroll\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg accent\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"carded-right-sidebar-tabbed-2\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR HEADER -->\r\n        <div class=\"header p-24 accent\">\r\n            <h2 class=\"m-0\">Sidebar header</h2>\r\n        </div>\r\n        <!-- / SIDEBAR HEADER -->\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT HEADER -->\r\n        <div class=\"header accent p-24\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('carded-right-sidebar-tabbed-2')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n\r\n                <h2 class=\"m-0\">Right sidebar with tabs and inner scroll</h2>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / CONTENT HEADER -->\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 8\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 9\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"Tab 10\">\r\n                        <div class=\"tab-content p-24\" fusePerfectScrollbar>\r\n                            <!-- PUT YOUR TAB CONTENT HERE -->\r\n                            <fuse-demo-content></fuse-demo-content>\r\n                            <!-- / PUT YOUR TAB CONTENT HERE -->\r\n                        </div>\r\n                    </mat-tab>\r\n\r\n                </mat-tab-group>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleFullWidth1FullWidth1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple fullwidth\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <h2>Full width</h2>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n        <fuse-demo-content></fuse-demo-content>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleFullWidthTabbed1FullWidthTabbed1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple tabbed\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\">\r\n        <h2>Tabbed</h2>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Tab 1\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Tab 2\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Tab 3\">\r\n                <div class=\"p-24\">\r\n                    <fuse-demo-content></fuse-demo-content>\r\n                </div>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleLeftSidebar1LeftSidebar1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple left-sidebar\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-1\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-left-sidebar-1')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Left sidebar with content scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleLeftSidebar2LeftSidebar2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple left-sidebar inner-scroll\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\" fusePerfectScrollbar>\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-left-sidebar-2')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Left sidebar with inner scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleLeftSidebar3LeftSidebar3ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple left-sidebar inner-sidebar\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-left-sidebar-3')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Left inner sidebar with content scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-3\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleLeftSidebar4LeftSidebar4ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple left-sidebar inner-sidebar inner-scroll\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-left-sidebar-4')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Left inner sidebar with inner scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-left-sidebar-4\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleRightSidebar1RightSidebar1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple right-sidebar\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-right-sidebar-1')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Right sidebar with content scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleRightSidebar2RightSidebar2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple right-sidebar inner-scroll\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-2\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content p-24\" fusePerfectScrollbar>\r\n            <fuse-demo-sidebar></fuse-demo-sidebar>\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\" fusePerfectScrollbar>\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                    (click)=\"toggleSidebar('simple-right-sidebar-2')\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <h2 class=\"m-0\">Right sidebar with inner scroll</h2>\r\n\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content p-24\">\r\n            <fuse-demo-content></fuse-demo-content>\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleRightSidebar3RightSidebar3ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple right-sidebar inner-sidebar\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-right-sidebar-3')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Right inner sidebar with content scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-3\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiPageLayoutsSimpleRightSidebar4RightSidebar4ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-layout simple right-sidebar inner-sidebar inner-scroll\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n        <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                (click)=\"toggleSidebar('simple-right-sidebar-4')\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        <div>\r\n            <h2>Right inner sidebar with inner scroll</h2>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <!-- SIDEBAR -->\r\n        <fuse-sidebar class=\"sidebar\" name=\"simple-right-sidebar-4\" position=\"left\" lockedOpen=\"gt-md\">\r\n\r\n            <!-- SIDEBAR CONTENT -->\r\n            <div class=\"content p-24\" fusePerfectScrollbar>\r\n                <fuse-demo-sidebar></fuse-demo-sidebar>\r\n            </div>\r\n            <!-- / SIDEBAR CONTENT -->\r\n\r\n        </fuse-sidebar>\r\n        <!-- / SIDEBAR -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content p-24\">\r\n                <fuse-demo-content></fuse-demo-content>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiTypographyTabsBlockquotesListsBlockquotesListsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"typography-blockquotes-lists\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Blockquotes</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote>\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote>\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote>\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                    <footer>\r\n                        David Allen\r\n                    </footer>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote>\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                        <footer>\r\n                            David Allen\r\n                        </footer>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <blockquote class=\"reverse\">\r\n                    <p>\r\n                        You can do anything, but not everything.\r\n                    </p>\r\n                    <footer>\r\n                        David Allen\r\n                    </footer>\r\n                </blockquote>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <blockquote class=\"reverse\">\r\n                        <p>\r\n                            You can do anything, but not everything.\r\n                        </p>\r\n                        <footer>\r\n                            David Allen\r\n                        </footer>\r\n                    </blockquote>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Lists</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <ol>\r\n                    <li>Ordered list item</li>\r\n                    <li>\r\n                        Ordered list item\r\n                        <ol>\r\n                            <li>Ordered list item</li>\r\n                            <li>Ordered list item</li>\r\n                        </ol>\r\n                    </li>\r\n                    <li>Ordered list item</li>\r\n                    <li>Ordered list item</li>\r\n                </ol>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <ol>\r\n                        <li>Ordered list item</li>\r\n                        <li>\r\n                            Ordered list item\r\n                            <ol>\r\n                                <li>Ordered list item</li>\r\n                                <li>Ordered list item</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>Ordered list item</li>\r\n                        <li>Ordered list item</li>\r\n                    </ol>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <ul>\r\n                    <li>Unordered list item</li>\r\n                    <li>\r\n                        Unordered list item\r\n                        <ul>\r\n                            <li>Unordered list item</li>\r\n                            <li>Unordered list item</li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>Unordered list item</li>\r\n                    <li>Unordered list item</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <ul>\r\n                        <li>Unordered list item</li>\r\n                        <li>\r\n                            Unordered list item\r\n                            <ul>\r\n                                <li>Unordered list item</li>\r\n                                <li>Unordered list item</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>Unordered list item</li>\r\n                        <li>Unordered list item</li>\r\n                    </ul>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Definition Lists</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <dl>\r\n                    <dt>Definition term</dt>\r\n                    <dd>This is the definition description</dd>\r\n\r\n                    <dt>Another definition term</dt>\r\n                    <dd>This is also another definition description</dd>\r\n                </dl>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <dl>\r\n                        <dt>Definition term</dt>\r\n                        <dd>This is the definition description</dd>\r\n\r\n                        <dt>Another definition term</dt>\r\n                        <dd>This is also another definition description</dd>\r\n                    </dl>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Change log</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n\r\n                <div class=\"changelog\">\r\n\r\n                    <div class=\"entry\">\r\n\r\n                        <div class=\"title\">\r\n                            <span class=\"version\">v1.0.0</span>\r\n                            <span class=\"date\">(2018-05-08)</span>\r\n                        </div>\r\n\r\n                        <div class=\"groups\">\r\n\r\n                            <div class=\"breaking-changes\">\r\n                                <span class=\"title\">Breaking changes</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <div class=\"new\">\r\n                                <span class=\"title\">New</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <div class=\"improved\">\r\n                                <span class=\"title\">Improved</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <div class=\"fixed\">\r\n                                <span class=\"title\">Fixed</span>\r\n                                <ul>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                    <li>This is an example list item for the change log</li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"changelog\">\r\n\r\n                        <div class=\"entry\">\r\n\r\n                            <div class=\"title\">\r\n                                <span class=\"version\">v1.0.0</span>\r\n                                <span class=\"date\">(2018-05-08)</span>\r\n                            </div>\r\n\r\n                            <div class=\"groups\">\r\n\r\n                                <div class=\"breaking-changes\">\r\n                                    <span class=\"title\">Breaking changes</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"new\">\r\n                                    <span class=\"title\">New</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"improved\">\r\n                                    <span class=\"title\">Improved</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"fixed\">\r\n                                    <span class=\"title\">Fixed</span>\r\n                                    <ul>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                        <li>This is an example list item for the change log</li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/headings/headings.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/headings/headings.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiTypographyTabsHeadingsHeadingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"typography-headings\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Material design typography classes</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">112px</div>\r\n                <span class=\"mat-display-4\">Display 4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-4\">Display 4</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">56px</div>\r\n                <span class=\"mat-display-3\">Display 3</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-3\">Display 3</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">45px</div>\r\n                <span class=\"mat-display-2\">Display 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-2\">Display 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">34px</div>\r\n                <span class=\"mat-display-1\">Display 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-display-1\">Display 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">24px</div>\r\n                <span class=\"mat-headline\">Headline</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-headline\">Headline</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">20px</div>\r\n                <span class=\"mat-title\">Title</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-title\">Title</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">16px</div>\r\n                <span class=\"mat-subheading-2\">Subheading 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-subheading-2\">Subheading 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">15px</div>\r\n                <span class=\"mat-subheading-1\">Subheading 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-subheading-1\">Subheading 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">14px</div>\r\n                <span class=\"mat-body-1\">Body 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-body-1\">Body 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">14px</div>\r\n                <span class=\"mat-body-2\">Body 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-body-2\">Body 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">12px</div>\r\n                <span class=\"mat-caption\">Caption</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"mat-caption\">Caption</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Standard Headings</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">24px</div>\r\n                <span class=\"h1\">Heading 1</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h1>Heading 1</h1>\r\n                    <span class=\"h1\">Heading 1</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">20px</div>\r\n                <span class=\"h2\">Heading 2</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h2>Heading 2</h2>\r\n                    <span class=\"h2\">Heading 2</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">16px</div>\r\n                <span class=\"h3\">Heading 3</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h3>Heading 3</h3>\r\n                    <span class=\"h3\">Heading 3</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">15px</div>\r\n                <span class=\"h4\">Heading 4</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h4>Heading 4</h4>\r\n                    <span class=\"h4\">Heading 4</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">13px</div>\r\n                <span class=\"h5\">Heading 5</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h5>Heading 5</h5>\r\n                    <span class=\"h5\">Heading 5</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption secondary-text\">12px</div>\r\n                <span class=\"h6\">Heading 6</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <h6>Heading 6</h6>\r\n                    <span class=\"h6\">Heading 6</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/helpers/helpers.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/helpers/helpers.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiTypographyTabsHelpersHelpersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"typography-helpers\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Font Weight</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">From 100 to 900</div>\r\n                <span class=\"font-weight-100\">font-weight: 100</span>\r\n                <span>...</span>\r\n                <span class=\"font-weight-900\">font-weight: 900</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"font-weight-100\">100 font weight</span>\r\n                    ...\r\n                    <span class=\"font-weight-900\">900 font weight</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Font Size</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\r\n                <span class=\"font-size-20\">font-size: 20</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"font-size-20\">font-size: 20</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Line Height</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"mat-caption mb-16\">Multiplies of 2, max: 120</div>\r\n                <span>line-height: 2</span>\r\n                <span>...</span>\r\n                <span>line-height: 120</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"line-height-2\">2px line height</span>\r\n                    ...\r\n                    <span class=\"line-height-120\">120px line height</span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mat-title mt-64\">Other helpers</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z4 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-left\">Left aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-left\">Left aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-center\">Center aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-center\">Center aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-right\">Right aligned text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-right\">Right aligned text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <p>\r\n                    <span class=\"text-boxed\">Boxed text</span>\r\n                </p>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <p>\r\n                        <span class=\"text-boxed\">Boxed text</span>\r\n                    </p>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <p>\r\n                    <span class=\"text-strike\">Strike-through text</span>\r\n                </p>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <p>\r\n                        <span class=\"text-strike\">Strike-through text</span>\r\n                    </p>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-italic\">Italic text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-italic\">Italic text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-semibold\">Semi-bold text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-semibold\">Semi-bold text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"text-bold\">Bold text</div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"text-bold\">Bold text</div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span class=\"text-truncate\">This is a truncated text. It will be truncated if it's too long. Vivamus\r\n                    convallis dui porta massa.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <span class=\"text-truncate\">\r\n                        This is a truncated text. It will be truncated if it's too long. Vivamus convallis dui porta\r\n                        massa.\r\n                    </span>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiTypographyTabsInlineTextElementsInlineTextElementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"typography-inline-text-elements\" class=\"p-24\">\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><abbr title=\"Cascaded Style Sheet\">CSS</abbr></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <abbr title=\"Cascaded Style Sheet\">CSS</abbr>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a <mark>marked</mark> text.</span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a <mark>marked</mark> text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    <del>This is a deleted text.</del>\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <del>This is a deleted text.</del>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><s>This is a strike-through text.</s></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <s>This is a strike-through text.</s>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><u>This is an underlined text.</u></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <u>This is an underlined text.</u>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    <small>This is a small text.</small>\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <small>This is a small text.</small>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><strong>This is a strong text.</strong></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <strong>This is a strong text.</strong>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span><em>This is an italic text.</em></span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <em>This is an italic text.</em>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-super\">super</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-super\">super</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>\r\n                    This is a\r\n                    <span class=\"text-sub\">sub</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-sub\">sub</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-capitalize\">capitalized</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-capitalized\">capitalized</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is an\r\n                    <span class=\"text-uppercase\">uppercase</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is an\r\n                    <span class=\"text-uppercase\">uppercase</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <span>This is a\r\n                    <span class=\"text-lowercase\">LOWERCASE</span>\r\n                    text.\r\n                </span>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                       fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    This is a\r\n                    <span class=\"text-lowercase\">LOWERCASE</span>\r\n                    text.\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiTypographyTabsMessageBoxesMessageBoxesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"typography-message-boxes\" class=\"p-24\">\r\n\r\n    <div class=\"mat-title\">Message Boxes</div>\r\n\r\n    <div class=\"mat-card mat-elevation-z2 p-24\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box\">\r\n                    This is a standard message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box\">\r\n                        This is a standard message box\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box error\">\r\n                    This is an alert message box!\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box error\">\r\n                        This is an alert message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box warning\">\r\n                    This is a warning message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box warning\">\r\n                        This is a warning message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box success\">\r\n                    This is a success message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box success\">\r\n                        This is a success message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n\r\n            <div class=\"preview\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"50\">\r\n                <div class=\"message-box info\">\r\n                    This is a info message box\r\n                </div>\r\n            </div>\r\n\r\n            <fuse-highlight lang=\"html\" class=\"source-code\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                            fxFlex=\"50\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    <div class=\"message-box info\">\r\n                        This is a info message box!\r\n                    </div>\r\n                </textarea>\r\n            </fuse-highlight>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/typography.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/typography.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainUiTypographyTypographyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"typography\" class=\"page-layout simple tabbed\" fxLayout=\"column\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header accent p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">User Interface</span>\r\n            </div>\r\n            <div class=\"h1 mt-16\">Typography</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Headings\">\r\n\r\n                <typography-headings></typography-headings>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Inline Text Elements\">\r\n\r\n                <typography-inline-text-elements></typography-inline-text-elements>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Blockquotes & Lists\">\r\n\r\n                <typography-blockquotes-lists></typography-blockquotes-lists>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Message Boxes\">\r\n\r\n                <typography-message-boxes></typography-message-boxes>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Helpers\">\r\n\r\n                <typography-helpers></typography-helpers>\r\n\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/main/ui/cards/cards.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/main/ui/cards/cards.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiCardsCardsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\ncards .content .cards {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\ncards .content .cards .card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  padding: 24px 24px 48px 24px;\n  margin-bottom: 96px;\n}\ncards .content .cards .card .card-preview {\n  display: -webkit-box;\n  display: flex;\n  min-width: 320px;\n}\ncards .content .cards .card .card-source {\n  display: none;\n}\ncards .content.source .cards {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\ncards .content.source .cards .card {\n  width: 100%;\n  margin-bottom: 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\ncards .content.source .cards .card .card-source {\n  background: #263238;\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-flex: 1;\n          flex: 1;\n  max-height: 400px;\n  min-width: 400px;\n  margin-left: 24px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS9jYXJkcy9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXF90aGVtaW5nLnNjc3MiLCJzcmMvYXBwL21haW4vdWkvY2FyZHMvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL3NyY1xcYXBwXFxtYWluXFx1aVxcY2FyZHNcXGNhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3VpL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTAxQ0Esa0NBQUE7QUE4aERBLDJDQUFBO0FBd0NBLHFCQUFBO0FDMTVGUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0ZaO0FESVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBRElnQjtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FDRnBCO0FES2dCO0VBQ0ksYUFBQTtBQ0hwQjtBRFVZO0VBQ0ksNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDUmhCO0FEVWdCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNScEI7QURVb0I7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNSeEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3VpL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGFsbCB0aGUgdGhlbWluZyBmdW5jdGlvbmFsaXR5LlxuLy8gV2UgY2FuIHVzZSByZWxhdGl2ZSBpbXBvcnRzIGZvciBpbXBvcnRzIGZyb20gdGhlIGNkayBiZWNhdXNlIHdlIGJ1bmRsZSBldmVyeXRoaW5nXG4vLyB1cCBpbnRvIGEgc2luZ2xlIGZsYXQgc2NzcyBmaWxlIGZvciBtYXRlcmlhbC5cbi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheTogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wOiAxMDAwICFkZWZhdWx0O1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBjZGstb3ZlcmxheSgpIHtcbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICAvLyBEaXNhYmxlIGV2ZW50cyBmcm9tIGJlaW5nIGNhcHR1cmVkIG9uIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIC8vIFRoZSBjb250YWluZXIgc2hvdWxkIGJlIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydC5cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBUaGUgb3ZlcmxheS1jb250YWluZXIgaXMgYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgYWxsIGluZGl2aWR1YWwgb3ZlcmxheXMuXG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIEZvciBjb25uZWN0ZWQtcG9zaXRpb24gb3ZlcmxheXMsIHdlIHNldCBgZGlzcGxheTogZmxleGAgaW5cbiAgICAvLyBvcmRlciB0byBmb3JjZSBgbWF4LXdpZHRoYCBhbmQgYG1heC1oZWlnaHRgIHRvIHRha2UgZWZmZWN0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICAgIC8vIFRPRE8oamVsYm91cm4pOiByZXVzZSBzaWRlbmF2IGZ1bGxzY3JlZW4gbWl4aW4uXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWQgc28gd2UgbmVlZCB0byBmYWxsIGJhY2tcbiAgICAgIC8vIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLiBOb3RlIHRoYXQgd2UgY2FuJ3QgdXNlIHRoZSBgY2RrLWhpZ2gtY29udHJhc3RgXG4gICAgICAvLyBtaXhpbiwgYmVjYXVzZSB3ZSBjYW4ndCBub3JtYWxpemUgdGhlIGltcG9ydCBwYXRoIHRvIHRoZSBfYTExeS5zY3NzIGJvdGggZm9yIHRoZVxuICAgICAgLy8gc291cmNlIGFuZCB3aGVuIHRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZC4gU2VlICMxMDkwOC5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYsICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIE92ZXJsYXkgcGFyZW50IGVsZW1lbnQgdXNlZCB3aXRoIHRoZSBjb25uZWN0ZWQgcG9zaXRpb24gc3RyYXRlZ3kuIFVzZWQgdG8gY29uc3RyYWluIHRoZVxuICAvLyBvdmVybGF5IGVsZW1lbnQncyBzaXplIHRvIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LlxuICAuY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuXG5AbWl4aW4gY2RrLWExMXkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy9cbi8vIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLyAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG5AbWl4aW4gY2RrLWhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlKSB7XG4gIEBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6ICR0YXJnZXQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIGNkay10ZXh0LWZpZWxkIHtcbiAgLy8gS2V5ZnJhbWVzIHRoYXQgYXBwbHkgbm8gc3R5bGVzLCBidXQgYWxsb3cgdXMgdG8gbW9uaXRvciB3aGVuIGFuIHRleHQgZmllbGQgYmVjb21lcyBhdXRvZmlsbGVkXG4gIC8vIGJ5IHdhdGNoaW5nIGZvciB0aGUgYW5pbWF0aW9uIGV2ZW50cyB0aGF0IGFyZSBmaXJlZCB3aGVuIHRoZXkgc3RhcnQuIE5vdGU6IHRoZSAvKiEqLyBjb21tZW50IGlzXG4gIC8vIG5lZWRlZCB0byBwcmV2ZW50IExpYlNhc3MgZnJvbSBzdHJpcHBpbmcgdGhlIGtleWZyYW1lcyBvdXQuXG4gIC8vIEJhc2VkIG9uOiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsvKiEqL31cbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgey8qISovfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0O1xuICB9XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gICAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgfVxuXG4gICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDpcbiAgICAgICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IG1hdGVyaWFsIGRlc2lnbiB0cmVhdG1lbnRzIHRvIGFueSBlbGVtZW50LlxuLy8gTWVkaWEgcXVlcmllc1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQ2hhbmdlICRtYXQteHNtYWxsIGFuZCAkbWF0LXNtYWxsIHVzYWdlcyB0byByZWx5IG9uIEJyZWFrcG9pbnRPYnNlcnZlcixcbiRtYXQteHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kbWF0LXNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJG1hdC10b2dnbGUtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuLy8gV2lkdGggYW5kIGhlaWdodCBvZiBpbnB1dCB0b2dnbGVzXG4kbWF0LXRvZ2dsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4vLyBFYXNpbmcgQ3VydmVzXG4vLyBUT0RPKGplbGJvdXJuKTogYWxsIG9mIHRoZXNlIG5lZWQgdG8gYmUgcmV2aXNpdGVkXG5cbi8vIFRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXMgdXNlZCBieSBtYXRlcmlhbCBkZXNpZ24uXG4kbWF0LWxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1saW5lYXItaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dDogYWxsICRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1kdXJhdGlvbjogMzAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW46IGFsbCAkc3dpZnQtZWFzZS1pbi1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uOiAkZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb24gIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWxpbmVhci1kdXJhdGlvbjogODBtcyAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyOiBhbGwgJHN3aWZ0LWxpbmVhci1kdXJhdGlvbiAkc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kX21hdC1lbGV2YXRpb24tcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICBAaWYgdHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IHVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC1nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLFxuICAgICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuXG4vLyBDb2xvciBwYWxldHRlcyBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbi8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci9cbi8vXG4vLyBDb250cmFzdCBjb2xvcnMgYXJlIGhhcmQtY29kZWQgYmVjYXVzZSBpdCBpcyB0b28gZGlmZmljdWx0IChwcm9iYWJseSBpbXBvc3NpYmxlKSB0b1xuLy8gY2FsY3VsYXRlIHRoZW0uIFRoZXNlIGNvbnRyYXN0IGNvbG9ycyBhcmUgcHVsbGVkIGZyb20gdGhlIHB1YmxpYyBNYXRlcmlhbCBEZXNpZ24gc3BlYyBzd2F0Y2hlcy5cbi8vIFdoaWxlIHRoZSBjb250cmFzdCBjb2xvcnMgaW4gdGhlIHNwZWMgYXJlIG5vdCBwcmVzY3JpcHRpdmUsIHdlIHVzZSB0aGVtIGZvciBjb252ZW5pZW5jZS5cblxuXG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRkYXJrLXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay04Ny1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGxpZ2h0LXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS04Ny1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTEyLW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTEyLW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stNi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjA2KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS02LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMDYpO1xuXG4kZGFyay1wcmltYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuODcpO1xuJGRhcmstc2Vjb25kYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuNTQpO1xuJGRhcmstZGlzYWJsZWQtdGV4dDogcmdiYShibGFjaywgMC4zOCk7XG4kZGFyay1kaXZpZGVyczogcmdiYShibGFjaywgMC4xMik7XG4kZGFyay1mb2N1c2VkOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRsaWdodC1wcmltYXJ5LXRleHQ6IHdoaXRlO1xuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiByZ2JhKHdoaXRlLCAwLjcpO1xuJGxpZ2h0LWRpc2FibGVkLXRleHQ6IHJnYmEod2hpdGUsIDAuNSk7XG4kbGlnaHQtZGl2aWRlcnM6IHJnYmEod2hpdGUsIDAuMTIpO1xuJGxpZ2h0LWZvY3VzZWQ6IHJnYmEod2hpdGUsIDAuMTIpO1xuXG4kbWF0LXJlZDogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmNDQzMzYsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXBpbms6IChcbiAgNTA6ICNmY2U0ZWMsXG4gIDEwMDogI2Y4YmJkMCxcbiAgMjAwOiAjZjQ4ZmIxLFxuICAzMDA6ICNmMDYyOTIsXG4gIDQwMDogI2VjNDA3YSxcbiAgNTAwOiAjZTkxZTYzLFxuICA2MDA6ICNkODFiNjAsXG4gIDcwMDogI2MyMTg1YixcbiAgODAwOiAjYWQxNDU3LFxuICA5MDA6ICM4ODBlNGYsXG4gIEExMDA6ICNmZjgwYWIsXG4gIEEyMDA6ICNmZjQwODEsXG4gIEE0MDA6ICNmNTAwNTcsXG4gIEE3MDA6ICNjNTExNjIsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1wdXJwbGU6IChcbiAgNTA6ICNmM2U1ZjUsXG4gIDEwMDogI2UxYmVlNyxcbiAgMjAwOiAjY2U5M2Q4LFxuICAzMDA6ICNiYTY4YzgsXG4gIDQwMDogI2FiNDdiYyxcbiAgNTAwOiAjOWMyN2IwLFxuICA2MDA6ICM4ZTI0YWEsXG4gIDcwMDogIzdiMWZhMixcbiAgODAwOiAjNmExYjlhLFxuICA5MDA6ICM0YTE0OGMsXG4gIEExMDA6ICNlYTgwZmMsXG4gIEEyMDA6ICNlMDQwZmIsXG4gIEE0MDA6ICNkNTAwZjksXG4gIEE3MDA6ICNhYTAwZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWRlZXAtcHVycGxlOiAoXG4gIDUwOiAjZWRlN2Y2LFxuICAxMDA6ICNkMWM0ZTksXG4gIDIwMDogI2IzOWRkYixcbiAgMzAwOiAjOTU3NWNkLFxuICA0MDA6ICM3ZTU3YzIsXG4gIDUwMDogIzY3M2FiNyxcbiAgNjAwOiAjNWUzNWIxLFxuICA3MDA6ICM1MTJkYTgsXG4gIDgwMDogIzQ1MjdhMCxcbiAgOTAwOiAjMzExYjkyLFxuICBBMTAwOiAjYjM4OGZmLFxuICBBMjAwOiAjN2M0ZGZmLFxuICBBNDAwOiAjNjUxZmZmLFxuICBBNzAwOiAjNjIwMGVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1pbmRpZ286IChcbiAgNTA6ICNlOGVhZjYsXG4gIDEwMDogI2M1Y2FlOSxcbiAgMjAwOiAjOWZhOGRhLFxuICAzMDA6ICM3OTg2Y2IsXG4gIDQwMDogIzVjNmJjMCxcbiAgNTAwOiAjM2Y1MWI1LFxuICA2MDA6ICMzOTQ5YWIsXG4gIDcwMDogIzMwM2Y5ZixcbiAgODAwOiAjMjgzNTkzLFxuICA5MDA6ICMxYTIzN2UsXG4gIEExMDA6ICM4YzllZmYsXG4gIEEyMDA6ICM1MzZkZmUsXG4gIEE0MDA6ICMzZDVhZmUsXG4gIEE3MDA6ICMzMDRmZmUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJsdWU6IChcbiAgNTA6ICNlM2YyZmQsXG4gIDEwMDogI2JiZGVmYixcbiAgMjAwOiAjOTBjYWY5LFxuICAzMDA6ICM2NGI1ZjYsXG4gIDQwMDogIzQyYTVmNSxcbiAgNTAwOiAjMjE5NmYzLFxuICA2MDA6ICMxZTg4ZTUsXG4gIDcwMDogIzE5NzZkMixcbiAgODAwOiAjMTU2NWMwLFxuICA5MDA6ICMwZDQ3YTEsXG4gIEExMDA6ICM4MmIxZmYsXG4gIEEyMDA6ICM0NDhhZmYsXG4gIEE0MDA6ICMyOTc5ZmYsXG4gIEE3MDA6ICMyOTYyZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ibHVlOiAoXG4gIDUwOiAjZTFmNWZlLFxuICAxMDA6ICNiM2U1ZmMsXG4gIDIwMDogIzgxZDRmYSxcbiAgMzAwOiAjNGZjM2Y3LFxuICA0MDA6ICMyOWI2ZjYsXG4gIDUwMDogIzAzYTlmNCxcbiAgNjAwOiAjMDM5YmU1LFxuICA3MDA6ICMwMjg4ZDEsXG4gIDgwMDogIzAyNzdiZCxcbiAgOTAwOiAjMDE1NzliLFxuICBBMTAwOiAjODBkOGZmLFxuICBBMjAwOiAjNDBjNGZmLFxuICBBNDAwOiAjMDBiMGZmLFxuICBBNzAwOiAjMDA5MWVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWN5YW46IChcbiAgNTA6ICNlMGY3ZmEsXG4gIDEwMDogI2IyZWJmMixcbiAgMjAwOiAjODBkZWVhLFxuICAzMDA6ICM0ZGQwZTEsXG4gIDQwMDogIzI2YzZkYSxcbiAgNTAwOiAjMDBiY2Q0LFxuICA2MDA6ICMwMGFjYzEsXG4gIDcwMDogIzAwOTdhNyxcbiAgODAwOiAjMDA4MzhmLFxuICA5MDA6ICMwMDYwNjQsXG4gIEExMDA6ICM4NGZmZmYsXG4gIEEyMDA6ICMxOGZmZmYsXG4gIEE0MDA6ICMwMGU1ZmYsXG4gIEE3MDA6ICMwMGI4ZDQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC10ZWFsOiAoXG4gIDUwOiAjZTBmMmYxLFxuICAxMDA6ICNiMmRmZGIsXG4gIDIwMDogIzgwY2JjNCxcbiAgMzAwOiAjNGRiNmFjLFxuICA0MDA6ICMyNmE2OWEsXG4gIDUwMDogIzAwOTY4OCxcbiAgNjAwOiAjMDA4OTdiLFxuICA3MDA6ICMwMDc5NmIsXG4gIDgwMDogIzAwNjk1YyxcbiAgOTAwOiAjMDA0ZDQwLFxuICBBMTAwOiAjYTdmZmViLFxuICBBMjAwOiAjNjRmZmRhLFxuICBBNDAwOiAjMWRlOWI2LFxuICBBNzAwOiAjMDBiZmE1LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JlZW46IChcbiAgNTA6ICNlOGY1ZTksXG4gIDEwMDogI2M4ZTZjOSxcbiAgMjAwOiAjYTVkNmE3LFxuICAzMDA6ICM4MWM3ODQsXG4gIDQwMDogIzY2YmI2YSxcbiAgNTAwOiAjNGNhZjUwLFxuICA2MDA6ICM0M2EwNDcsXG4gIDcwMDogIzM4OGUzYyxcbiAgODAwOiAjMmU3ZDMyLFxuICA5MDA6ICMxYjVlMjAsXG4gIEExMDA6ICNiOWY2Y2EsXG4gIEEyMDA6ICM2OWYwYWUsXG4gIEE0MDA6ICMwMGU2NzYsXG4gIEE3MDA6ICMwMGM4NTMsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWdyZWVuOiAoXG4gIDUwOiAjZjFmOGU5LFxuICAxMDA6ICNkY2VkYzgsXG4gIDIwMDogI2M1ZTFhNSxcbiAgMzAwOiAjYWVkNTgxLFxuICA0MDA6ICM5Y2NjNjUsXG4gIDUwMDogIzhiYzM0YSxcbiAgNjAwOiAjN2NiMzQyLFxuICA3MDA6ICM2ODlmMzgsXG4gIDgwMDogIzU1OGIyZixcbiAgOTAwOiAjMzM2OTFlLFxuICBBMTAwOiAjY2NmZjkwLFxuICBBMjAwOiAjYjJmZjU5LFxuICBBNDAwOiAjNzZmZjAzLFxuICBBNzAwOiAjNjRkZDE3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpbWU6IChcbiAgNTA6ICNmOWZiZTcsXG4gIDEwMDogI2YwZjRjMyxcbiAgMjAwOiAjZTZlZTljLFxuICAzMDA6ICNkY2U3NzUsXG4gIDQwMDogI2Q0ZTE1NyxcbiAgNTAwOiAjY2RkYzM5LFxuICA2MDA6ICNjMGNhMzMsXG4gIDcwMDogI2FmYjQyYixcbiAgODAwOiAjOWU5ZDI0LFxuICA5MDA6ICM4Mjc3MTcsXG4gIEExMDA6ICNmNGZmODEsXG4gIEEyMDA6ICNlZWZmNDEsXG4gIEE0MDA6ICNjNmZmMDAsXG4gIEE3MDA6ICNhZWVhMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXllbGxvdzogKFxuICA1MDogI2ZmZmRlNyxcbiAgMTAwOiAjZmZmOWM0LFxuICAyMDA6ICNmZmY1OWQsXG4gIDMwMDogI2ZmZjE3NixcbiAgNDAwOiAjZmZlZTU4LFxuICA1MDA6ICNmZmViM2IsXG4gIDYwMDogI2ZkZDgzNSxcbiAgNzAwOiAjZmJjMDJkLFxuICA4MDA6ICNmOWE4MjUsXG4gIDkwMDogI2Y1N2YxNyxcbiAgQTEwMDogI2ZmZmY4ZCxcbiAgQTIwMDogI2ZmZmYwMCxcbiAgQTQwMDogI2ZmZWEwMCxcbiAgQTcwMDogI2ZmZDYwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1hbWJlcjogKFxuICA1MDogI2ZmZjhlMSxcbiAgMTAwOiAjZmZlY2IzLFxuICAyMDA6ICNmZmUwODIsXG4gIDMwMDogI2ZmZDU0ZixcbiAgNDAwOiAjZmZjYTI4LFxuICA1MDA6ICNmZmMxMDcsXG4gIDYwMDogI2ZmYjMwMCxcbiAgNzAwOiAjZmZhMDAwLFxuICA4MDA6ICNmZjhmMDAsXG4gIDkwMDogI2ZmNmYwMCxcbiAgQTEwMDogI2ZmZTU3ZixcbiAgQTIwMDogI2ZmZDc0MCxcbiAgQTQwMDogI2ZmYzQwMCxcbiAgQTcwMDogI2ZmYWIwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1vcmFuZ2U6IChcbiAgNTA6ICNmZmYzZTAsXG4gIDEwMDogI2ZmZTBiMixcbiAgMjAwOiAjZmZjYzgwLFxuICAzMDA6ICNmZmI3NGQsXG4gIDQwMDogI2ZmYTcyNixcbiAgNTAwOiAjZmY5ODAwLFxuICA2MDA6ICNmYjhjMDAsXG4gIDcwMDogI2Y1N2MwMCxcbiAgODAwOiAjZWY2YzAwLFxuICA5MDA6ICNlNjUxMDAsXG4gIEExMDA6ICNmZmQxODAsXG4gIEEyMDA6ICNmZmFiNDAsXG4gIEE0MDA6ICNmZjkxMDAsXG4gIEE3MDA6ICNmZjZkMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IGJsYWNrLFxuICApXG4pO1xuXG4kbWF0LWRlZXAtb3JhbmdlOiAoXG4gIDUwOiAjZmJlOWU3LFxuICAxMDA6ICNmZmNjYmMsXG4gIDIwMDogI2ZmYWI5MSxcbiAgMzAwOiAjZmY4YTY1LFxuICA0MDA6ICNmZjcwNDMsXG4gIDUwMDogI2ZmNTcyMixcbiAgNjAwOiAjZjQ1MTFlLFxuICA3MDA6ICNlNjRhMTksXG4gIDgwMDogI2Q4NDMxNSxcbiAgOTAwOiAjYmYzNjBjLFxuICBBMTAwOiAjZmY5ZTgwLFxuICBBMjAwOiAjZmY2ZTQwLFxuICBBNDAwOiAjZmYzZDAwLFxuICBBNzAwOiAjZGQyYzAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1icm93bjogKFxuICA1MDogI2VmZWJlOSxcbiAgMTAwOiAjZDdjY2M4LFxuICAyMDA6ICNiY2FhYTQsXG4gIDMwMDogI2ExODg3ZixcbiAgNDAwOiAjOGQ2ZTYzLFxuICA1MDA6ICM3OTU1NDgsXG4gIDYwMDogIzZkNGM0MSxcbiAgNzAwOiAjNWQ0MDM3LFxuICA4MDA6ICM0ZTM0MmUsXG4gIDkwMDogIzNlMjcyMyxcbiAgQTEwMDogI2Q3Y2NjOCxcbiAgQTIwMDogI2JjYWFhNCxcbiAgQTQwMDogIzhkNmU2MyxcbiAgQTcwMDogIzVkNDAzNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmV5OiAoXG4gIDUwOiAjZmFmYWZhLFxuICAxMDA6ICNmNWY1ZjUsXG4gIDIwMDogI2VlZWVlZSxcbiAgMzAwOiAjZTBlMGUwLFxuICA0MDA6ICNiZGJkYmQsXG4gIDUwMDogIzllOWU5ZSxcbiAgNjAwOiAjNzU3NTc1LFxuICA3MDA6ICM2MTYxNjEsXG4gIDgwMDogIzQyNDI0MixcbiAgOTAwOiAjMjEyMTIxLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZWVlZWVlLFxuICBBNDAwOiAjYmRiZGJkLFxuICBBNzAwOiAjNjE2MTYxLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWdyYXk6ICRtYXQtZ3JleTtcblxuJG1hdC1ibHVlLWdyZXk6IChcbiAgNTA6ICNlY2VmZjEsXG4gIDEwMDogI2NmZDhkYyxcbiAgMjAwOiAjYjBiZWM1LFxuICAzMDA6ICM5MGE0YWUsXG4gIDQwMDogIzc4OTA5YyxcbiAgNTAwOiAjNjA3ZDhiLFxuICA2MDA6ICM1NDZlN2EsXG4gIDcwMDogIzQ1NWE2NCxcbiAgODAwOiAjMzc0NzRmLFxuICA5MDA6ICMyNjMyMzgsXG4gIEExMDA6ICNjZmQ4ZGMsXG4gIEEyMDA6ICNiMGJlYzUsXG4gIEE0MDA6ICM3ODkwOWMsXG4gIEE3MDA6ICM0NTVhNjQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtYmx1ZS1ncmF5OiAkbWF0LWJsdWUtZ3JleTtcblxuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDEwMCksXG4gIGJhY2tncm91bmQ6IG1hcF9nZXQoJG1hdC1ncmV5LCA1MCksXG4gIGhvdmVyOiAgICAgIHJnYmEoYmxhY2ssIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICB3aGl0ZSxcbiAgZGlhbG9nOiAgICAgd2hpdGUsXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYShibGFjaywgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IHdoaXRlLFxuICBmb2N1c2VkLWJ1dHRvbjogJGRhcmstZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNDAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbik7XG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBibGFjayxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIGJhY2tncm91bmQ6ICMzMDMwMzAsXG4gIGhvdmVyOiAgICAgIHJnYmEod2hpdGUsIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlhbG9nOiAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYSh3aGl0ZSwgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBmb2N1c2VkLWJ1dHRvbjogJGxpZ2h0LWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IGJsYWNrLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogYmxhY2ssXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG5cblxuLy8gRm9yIGEgZ2l2ZW4gaHVlIGluIGEgcGFsZXR0ZSwgcmV0dXJuIHRoZSBjb250cmFzdCBjb2xvciBmcm9tIHRoZSBtYXAgb2YgY29udHJhc3QgcGFsZXR0ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRodWVcbkBmdW5jdGlvbiBtYXQtY29udHJhc3QoJHBhbGV0dGUsICRodWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUsIGNvbnRyYXN0KSwgJGh1ZSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIG1hcCBvZiBodWVzIHRvIGNvbG9ycyBmb3IgYSB0aGVtZS4gVGhpcyBpcyB1c2VkIHRvIGRlZmluZSBhIHRoZW1lIHBhbGV0dGUgaW4gdGVybXNcbi8vIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gaHVlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJHByaW1hcnlcbi8vIEBwYXJhbSAkbGlnaHRlclxuQGZ1bmN0aW9uIG1hdC1wYWxldHRlKCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0OiA1MDAsICRsaWdodGVyOiAxMDAsICRkYXJrZXI6IDcwMCwgJHRleHQ6ICRkZWZhdWx0KSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuICAgIHRleHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJHRleHQpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG5cbiAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAvLyBJZiB0aGUgJGNvbG9yIHJlc29sdmVkIHRvIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSBhIGNvbG9yIChlLmcuIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAvLyB3ZSBjYW4ndCBhcHBseSB0aGUgb3BhY2l0eSBhbnl3YXkgc28gd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcywgb3RoZXJ3aXNlIFNhc3MgY2FuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3Igb3Igb3V0cHV0IHNvbWV0aGluZyBpbnZhbGlkLlxuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIC8vIEd1YXJkIGFnYWluc3QgdW5xdW90aW5nIG5vbi1zdHJpbmcgdmFsdWVzLCBiZWNhdXNlIGl0J3MgZGVwcmVjYXRlZC5cbiAgQHJldHVybiBpZih0eXBlLW9mKCRmb250LWZhbWlseSkgPT0gc3RyaW5nLCB1bnF1b3RlKCRmb250LWZhbWlseSksICRmb250LWZhbWlseSk7XG59XG5cbi8vIE91dHB1dHMgdGhlIHNob3J0aGFuZCBgZm9udGAgQ1NTIHByb3BlcnR5LCBiYXNlZCBvbiBhIHNldCBvZiB0eXBvZ3JhcGh5IHZhbHVlcy4gRmFsbHMgYmFjayB0b1xuLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KSB7XG4gIC8vIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBzZXQgdG8gYGluaGVyaXRgLCB3ZSBjYW4ndCB1c2UgdGhlIHNob3J0aGFuZFxuICAvLyBzbyB3ZSBmYWxsIGJhY2sgdG8gcGFzc2luZyBpbiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLlxuICBAaWYgKCRmb250LXNpemUgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXNpemUgPT0gbnVsbCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gbnVsbCkge1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBzaG9ydGhhbmQgYGZvbnRgLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGFtb3VudCBvZiBieXRlcy4gTm90ZVxuICAgIC8vIHRoYXQgd2UgbmVlZCB0byB1c2UgaW50ZXJwb2xhdGlvbiBmb3IgYGZvbnQtc2l6ZS9saW5lLWhlaWdodGAgaW4gb3JkZXIgdG8gcHJldmVudFxuICAgIC8vIFNhc3MgZnJvbSBkaXZpZGluZyB0aGUgdHdvIHZhbHVlcy5cbiAgICBmb250OiAkZm9udC13ZWlnaHQgI3skZm9udC1zaXplfS8jeyRsaW5lLWhlaWdodH0gJGZvbnQtZmFtaWx5O1xuICB9XG59XG5cbi8vIENvbnZlcnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBpbnRvIENTUyBzdHlsZXMuXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsICRsZXZlbCkge1xuICAkZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbCk7XG5cbiAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSk7XG4gIGxldHRlci1zcGFjaW5nOiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKTtcbn1cblxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1vcHRpb24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxuICAgICY6Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbiBtdWx0aXBsZSBtb2RlIHRoZXJlIGlzIGEgY2hlY2tib3ggdG8gc2hvdyB0aGF0IHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgJi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICYubWF0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0aW9uIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcbiAgJGNvbG9yZWQtYm94LXNlbGVjdG9yOiAnLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc7XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWVzIGhlcmUgY29tZSBmcm9tXG4vLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW0pLFxuICAkZGlzcGxheS0zOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNTZweCwgNTZweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW0pLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuODMsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjY3LFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTEsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMSk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxufVxuXG5cblxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9ucyBpbiBhdXRvY29tcGxldGVzIHNob3VsZCBub3QgYmUgZ3JheSwgYnV0IHdlXG4gICAgLy8gb25seSB3YW50IHRvIG92ZXJyaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBvcHRpb25zIGlmXG4gICAgLy8gdGhleSBhcmUgKm5vdCogaW4gaG92ZXIgb3IgZm9jdXMgc3RhdGUuIFRoaXMgY2hhbmdlIGhhcyB0byBiZVxuICAgIC8vIG1hZGUgaGVyZSBiZWNhdXNlIGJhc2Ugb3B0aW9uIHN0eWxlcyBhcmUgc2hhcmVkIGJldHdlZW4gdGhlXG4gICAgLy8gYXV0b2NvbXBsZXRlIGFuZCB0aGUgc2VsZWN0LlxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAgICY6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cbi8vIFRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBzdHlsZXMgZm9yIHRoZSBiYWRnZVxuLy8gcmF0aGVyIHRoYW4ganVzdCB0aGUgY29sb3IvdGhlbWUgYmVjYXVzZSBvZlxuLy8gbm8gc3R5bGUgc2hlZXQgc3VwcG9ydCBmb3IgZGlyZWN0aXZlcy5cblxuXG5cblxuXG4kbWF0LWJhZGdlLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMDtcbiRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJG1hdC1iYWRnZS1zbWFsbC1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSAtIDY7XG4kbWF0LWJhZGdlLWxhcmdlLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplICsgNjtcblxuLy8gTWl4aW4gZm9yIGJ1aWxkaW5nIG9mZnNldCBnaXZlbiBkaWZmZXJlbnQgc2l6ZXNcbkBtaXhpbiBfbWF0LWJhZGdlLXNpemUoJHNpemUpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSkge1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtYWNjZW50IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLXdhcm4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1oaWRkZW4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtZGlzYWJsZWQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgICAvLyBUaGUgZGlzYWJsZWQgY29sb3IgdXN1YWxseSBoYXMgc29tZSBraW5kIG9mIG9wYWNpdHksIGJ1dCBiZWNhdXNlIHRoZSBiYWRnZSBpcyBvdmVybGF5ZWRcbiAgICAgIC8vIG9uIHRvcCBvZiBzb21ldGhpbmcgZWxzZSwgaXQgd29uJ3QgbG9vayBnb29kIGlmIGl0J3Mgb3BhcXVlLiBJZiBpdCBpcyBhIGNvbG9yICp0eXBlKixcbiAgICAgIC8vIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZ1xuICAgICAgLy8gdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW5cbiAgICAgIC8vIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgQGlmICh0eXBlLW9mKCRiYWRnZS1jb2xvcikgPT0gY29sb3IgYW5kIHR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4gIC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgLy8gU2V0IHRoZSBmb250IHNpemUgdG8gNzUlIG9mIHRoZSBvcmlnaW5hbC5cbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMC43NTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCB0ZXh0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGJsYWNrLW9uLXdoaXRlKSB7XG4gICAgICAvLyBIYXZpbmcgdGhlIG9uZSBhYm92ZSBiZSAhaW1wb3J0YW50IGVuZHMgdXAgb3ZlcnJpZGluZyB0aGUgYnJvd3NlcidzIGF1dG9tYXRpY1xuICAgICAgLy8gY29sb3IgaW52ZXJzaW9uIHNvIHdlIG5lZWQgdG8gcmUtaW52ZXJ0IGl0IG91cnNlbHZlcyBmb3IgYmxhY2stb24td2hpdGUuXG4gICAgICBzdHJva2U6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgb25lIGlzIG1vdmVkIGRvd24gaGVyZSBzbyBpdCBjYW4gdGFyZ2V0IGJvdGhcbiAgLy8gdGhlIHRoZW1lIGNvbG9ycyBhbmQgdGhlIGRpc2FibGVkIHN0YXRlLlxuICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIC8vIE5lZWRzIHRvIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCBoaWRlcyB0aGUgY2hlY2tib3ggb3V0bGluZS5cbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgYm9yZGVyLWNvbG9yOiBmYWRlLW91dCgkY29sb3IsICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICAmOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKSB7XG4gICAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIGhvdmVyIG9uIHRvdWNoIGRldmljZXMgc2luY2UgaXQgY2FuIGFwcGVhciBsaWtlIGl0IGlzIHN0dWNrLiBXZSBjYW4ndCB1c2VcbiAgLy8gYEBtZWRpYSAoaG92ZXIpYCBhYm92ZSwgYmVjYXVzZSB0aGUgZGVza3RvcCBzdXBwb3J0IGJyb3dzZXIgc3VwcG9ydCBpc24ndCBncmVhdC5cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBUaGlzIG1peGluIHdpbGwgZW5zdXJlIHRoYXQgbGluZXMgdGhhdCBvdmVyZmxvdyB0aGUgY29udGFpbmVyIHdpbGwgaGlkZSB0aGUgb3ZlcmZsb3cgYW5kXG4vLyB0cnVuY2F0ZSBuZWF0bHkgd2l0aCBhbiBlbGxpcHNpcy5cbkBtaXhpbiBtYXQtdHJ1bmNhdGUtbGluZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8vIE1peGluIHRvIHByb3ZpZGUgYWxsIG1hdC1saW5lIHN0eWxlcywgY2hhbmdpbmcgc2Vjb25kYXJ5IGZvbnQgc2l6ZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSBsaXN0XG4vLyBpcyBpbiBkZW5zZSBtb2RlLlxuQG1peGluIG1hdC1saW5lLWJhc2UoJHNlY29uZGFyeS1mb250LXNpemUpIHtcbiAgLm1hdC1saW5lIHtcbiAgICBAaW5jbHVkZSBtYXQtdHJ1bmNhdGUtbGluZSgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAvLyBhbGwgbGluZXMgYnV0IHRoZSB0b3AgbGluZSBzaG91bGQgaGF2ZSBzbWFsbGVyIHRleHRcbiAgICAmOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNlY29uZGFyeS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gbm9ybWFsaXplcyBkZWZhdWx0IGVsZW1lbnQgc3R5bGVzLCBlLmcuIGZvbnQgd2VpZ2h0IGZvciBoZWFkaW5nIHRleHQuXG5AbWl4aW4gbWF0LW5vcm1hbGl6ZS10ZXh0KCkge1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNlIHN0eWxlcyBmb3IgdGhlIHdyYXBwZXIgYXJvdW5kIG1hdC1saW5lIGVsZW1lbnRzIGluIGEgbGlzdC5cbkBtaXhpbiBtYXQtbGluZS13cmFwcGVyLWJhc2UoKSB7XG4gIEBpbmNsdWRlIG1hdC1ub3JtYWxpemUtdGV4dCgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC8vIE11c3QgcmVtb3ZlIHdyYXBwZXIgd2hlbiBsaW5lcyBhcmUgZW1wdHkgb3IgaXQgdGFrZXMgdXAgaG9yaXpvbnRhbFxuICAvLyBzcGFjZSBhbmQgcHVzaGVzIG90aGVyIGVsZW1lbnRzIHRvIHRoZSByaWdodC5cbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKSB7IH1cblxuQG1peGluIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbiAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtaWNvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbi8vIFJlbmRlcnMgYSBncmFkaWVudCBmb3Igc2hvd2luZyB0aGUgZGFzaGVkIGxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4vLyBVbmxpa2UgdXNpbmcgYSBib3JkZXIsIGEgZ3JhZGllbnQgYWxsb3dzIHVzIHRvIGFkanVzdCB0aGUgc3BhY2luZyBvZiB0aGUgZG90dGVkIGxpbmVcbi8vIHRvIG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbkBtaXhpbiBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICBAcmV0dXJuIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbn1cblxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIHVzZXItc2VsZWN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGN1cnNvci1ncmFiIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuQG1peGluIGN1cnNvci1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZhbHVlKSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5cblxuXG5AbWl4aW4gbWF0LWlucHV0LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAgIEBpbmNsdWRlIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgICB9XG5cbiAgICAvLyBPbiBkYXJrIHRoZW1lcyB3ZSBzZXQgdGhlIG5hdGl2ZSBgc2VsZWN0YCBjb2xvciB0byBzb21lIHNoYWRlIG9mIHdoaXRlLFxuICAgIC8vIGhvd2V2ZXIgdGhlIGNvbG9yIHByb3BhZ2F0ZXMgdG8gYWxsIG9mIHRoZSBgb3B0aW9uYCBlbGVtZW50cywgd2hpY2ggYXJlXG4gICAgLy8gYWx3YXlzIG9uIGEgd2hpdGUgYmFja2dyb3VuZCBpbnNpZGUgdGhlIGRyb3Bkb3duLCBjYXVzaW5nIHRoZW0gdG8gYmxlbmQgaW4uXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3QgY2hhbmdlIGJhY2tncm91bmQgb2YgdGhlIGRyb3Bkb3duLCB3ZSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAgICAvLyByZXNldCB0aGUgY29sb3Igb2YgdGhlIG9wdGlvbnMgdG8gc29tZXRoaW5nIGRhcmsuXG4gICAgQGlmIChtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtJGxpbmUtc3BhY2luZyAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWxpc3QtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWxpc3Qtb3B0aW9uKTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24sXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0sXG4gIC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVuc2UgbGlzdFxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0ge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbWVudS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLCAmOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbiAgLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtOmhvdmVyLFxuICAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciwgLm1hdC1zcGlubmVyIHtcbiAgICBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1yYWRpby1jb2xvcigkcGFsZXR0ZSkge1xuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbiAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbiAgJjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgJi5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICAkb3BhY2l0eTogMC42O1xuICAgICRiYWNrZHJvcC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkLCAkb3BhY2l0eSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrOiBtYXBfZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIENvbG9yIGh1ZXMgYXJlIGJhc2VkIG9uIHRoZSBzcGVjcyB3aGljaCBicmllZmx5IHNob3cgdGhlIGh1ZXMgdGhhdCBhcmUgYXBwbGllZCB0byBhIHN3aXRjaC5cbiAgLy8gVGhlIDIwMTggc3BlY3Mgbm8gbG9uZ2VyIGRlc2NyaWJlIGhvdyBkYXJrIHN3aXRjaGVzIHNob3VsZCBsb29rIGxpa2UuIER1ZSB0byB0aGUgbGFjayBvZlxuICAvLyBpbmZvcm1hdGlvbiBmb3IgZGFyayB0aGVtZWQgc3dpdGNoZXMsIHdlIHBhcnRpYWxseSBrZWVwIHRoZSBvbGQgYmVoYXZpb3IgdGhhdCBpcyBiYXNlZCBvblxuICAvLyB0aGUgcHJldmlvdXMgc3BlY2lmaWNhdGlvbnMuIEZvciB0aGUgY2hlY2tlZCBjb2xvciB3ZSBhbHdheXMgdXNlIHRoZSBgZGVmYXVsdGAgaHVlIGJlY2F1c2VcbiAgLy8gdGhhdCBmb2xsb3dzIE1EQyBhbmQgYWxzbyBtYWtlcyBpdCBlYXNpZXIgZm9yIHBlb3BsZSB0byBjcmVhdGUgYSBjdXN0b20gdGhlbWUgd2l0aG91dCBuZWVkaW5nXG4gIC8vIHRvIHNwZWNpZnkgZWFjaCBodWUgaW5kaXZpZHVhbGx5LlxuICAkdGh1bWItdW5jaGVja2VkLWh1ZTogaWYoJGlzLWRhcmssIDQwMCwgNTApO1xuICAkdGh1bWItY2hlY2tlZC1odWU6IGRlZmF1bHQ7XG5cbiAgJGJhci11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkYWNjZW50LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwcmltYXJ5LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkd2FybiwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpcHBsZS11bmNoZWNrZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQsIDAuMik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuMTIpO1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuNyk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIElmIHRoZSB2YWx1ZSBpcyBhIGNvbG9yXG4gICAgLy8gKnR5cGUqLCB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmRcbiAgICAvLyB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmRcbiAgICAvLyB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLiBPdGhlcndpc2UsIGlmIGl0IHJlc29sdmVzIHRvIHNvbWV0aGluZyBkaWZmZXJlbnRcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSksIHdlIHVzZSB0aGUgY29sb3IgZGlyZWN0bHkuXG4gICAgQGlmICh0eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkdGV4dC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICR0ZXh0LW9wYWNpdHk6IG9wYWNpdHkoJHRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcywgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYXBwLWJhcik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sYmFyLFxuICAubWF0LXRvb2xiYXIgaDEsXG4gIC5tYXQtdG9vbGJhciBoMixcbiAgLm1hdC10b29sYmFyIGgzLFxuICAubWF0LXRvb2xiYXIgaDQsXG4gIC5tYXQtdG9vbGJhciBoNSxcbiAgLm1hdC10b29sYmFyIGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cblxuXG5cbiRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0OiAyMnB4O1xuJG1hdC10b29sdGlwLWZvbnQtc2l6ZTogMTBweDtcbiRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nOiAoJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtZm9udC1zaXplKSAvIDI7XG5cbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQ6IDMwcHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU6IDE0cHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nOlxuICAgICgkbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplKSAvIDI7XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJG1hdC1ncmV5LCA3MDAsIDAuOSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJGRhcmstcHJpbWFyeS10ZXh0LCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQpO1xuICAgIGJhY2tncm91bmQ6IGlmKCRpcy1kYXJrLXRoZW1lLCBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLCAjMzIzMjMyKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgaW5oZXJpdCwgbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IGluaGVyaXQ7XG4gICAgICBzaXplOiBpbmhlcml0O1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMSwgMC4wNCkpO1xuICAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjA1LCAwLjAyKSk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRvcCBvZiB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLXRvcDogMC4yNWVtO1xuICAvLyBUaGUgcGFkZGluZyBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLWJvdHRvbTogMC43NWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG4vLyBTYW1lIGFzIG1peGluIGFib3ZlLCBidXQgb21pdHMgdGhlIHRyYW5zbGF0ZVogZm9yIHByaW50aW5nIHB1cnBvc2VzLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgb3V0bGluZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBzdGFuZGFyZCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7fVxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IGFwcGx5IHRvIGFsbCBhcHBlYXJhbmNlcyBvZiB0aGUgZm9ybS1maWVsZC5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgLy8gTGFiZWwgY29sb3JzLiBSZXF1aXJlZCBpcyB1c2VkIGZvciB0aGUgYCpgIHN0YXIgc2hvd24gaW4gdGhlIGxhYmVsLlxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICR1bmRlcmxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtaGludCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9jdXNlZC1sYWJlbC1jb2xvcjtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogJHJlcXVpcmVkLWxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1iYXNlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAvLyBTdHlsaW5nIGZvciB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGZvcm0gZmllbGQuIE5vdGUgdGhhdCB3aGlsZSB0aGUgc2FtZSBjYW4gYmVcbiAgLy8gYWNoaWV2ZWQgd2l0aCB0aGUgbmctKiBjbGFzc2VzLCB3ZSB1c2UgdGhpcyBhcHByb2FjaCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZVxuICAvLyBsb2dpYyBpcyB1c2VkIHRvIHN0eWxlIHRoZSBlcnJvciBzdGF0ZSBhbmQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZXMuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcblxuICAgICAgJi5tYXQtYWNjZW50LFxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSk7XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZTogMS41O1xuXG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBpbnB1dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLy8gQWxsb3cgaWNvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEFsbG93IGljb24gYnV0dG9ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuICAgICAgd2lkdGg6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIC8vIFRocm93cyBvZmYgdGhlIGJhc2VsaW5lIGlmIHdlIGRvIGl0IGFzIGEgcmVhbCBtYXJnaW4sIHNvIHdlIGRvIGl0IGFzIGEgYm9yZGVyIGluc3RlYWQuXG4gICAgYm9yZGVyLXRvcDogJGluZml4LW1hcmdpbi10b3Agc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLSRpbmZpeC1tYXJnaW4tdG9wO1xuICAgIHBhZGRpbmctdG9wOiAkaW5maXgtbWFyZ2luLXRvcDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNpemU7XG4gICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRyZWUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10cmVlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdHJlZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZXMgYWxsIG9mIHRoZSB0eXBvZ3JhcGhpYyBzdHlsZXMuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCRjb25maWc6IG51bGwpIHtcbiAgQGlmICRjb25maWcgPT0gbnVsbCB7XG4gICAgJGNvbmZpZzogbWF0LXR5cG9ncmFwaHktY29uZmlnKCk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gbWF0LWNvcmUoJHR5cG9ncmFwaHktY29uZmlnOiBudWxsKSB7XG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeS1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay1hMTF5KCk7XG4gIEBpbmNsdWRlIGNkay1vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay10ZXh0LWZpZWxkKCk7XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiBtYXQtY29yZS10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSN7JHpWYWx1ZX0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC8vIE1hcmtlciB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFkZGVkIGEgdGhlbWUgdG8gdGhlaXIgcGFnZS5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQ3JlYXRlIGEgdGhlbWUuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LWNvcmUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKTtcbn1cbiIsIkBpbXBvcnQgXCJzcmMvQGZ1c2Uvc2Nzcy9mdXNlXCI7XHJcblxyXG5jYXJkcyB7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICAuY2FyZHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDI0cHggNDhweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1wcmV2aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmQtc291cmNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNvdXJjZSB7XHJcblxyXG4gICAgICAgICAgICAuY2FyZHMge1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtc291cmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2MzIzODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuY2FyZHMgLmNvbnRlbnQgLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuY2FyZHMgLmNvbnRlbnQgLmNhcmRzIC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDI0cHggMjRweCA0OHB4IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDk2cHg7XG59XG5jYXJkcyAuY29udGVudCAuY2FyZHMgLmNhcmQgLmNhcmQtcHJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5jYXJkcyAuY29udGVudCAuY2FyZHMgLmNhcmQgLmNhcmQtc291cmNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmNhcmRzIC5jb250ZW50LnNvdXJjZSAuY2FyZHMge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuY2FyZHMgLmNvbnRlbnQuc291cmNlIC5jYXJkcyAuY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbmNhcmRzIC5jb250ZW50LnNvdXJjZSAuY2FyZHMgLmNhcmQgLmNhcmQtc291cmNlIHtcbiAgYmFja2dyb3VuZDogIzI2MzIzODtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4OiAxO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/ui/cards/cards.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/ui/cards/cards.component.ts ***!
    \**************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcAppMainUiCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
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


    var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3-shape */
    "./node_modules/d3-shape/src/index.js");
    /* harmony import */


    var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fuse/animations */
    "./src/@fuse/animations/index.ts");

    var CardsComponent = /*#__PURE__*/function () {
      function CardsComponent() {
        _classCallCheck(this, CardsComponent);

        // Set the defaults
        this.view = 'preview';
        this.card9Expanded = false;
        this.card10Expanded = false;
        this.card19 = {
          scheme: {
            domain: ['#5c84f1']
          },
          data: [{
            name: 'GOOG',
            series: [{
              name: 'Jan 1',
              value: 540.2
            }, {
              name: 'Jan 2',
              value: 539.4
            }, {
              name: 'Jan 3',
              value: 538.9
            }, {
              name: 'Jan 4',
              value: 539.6
            }, {
              name: 'Jan 5',
              value: 540
            }, {
              name: 'Jan 6',
              value: 540.2
            }, {
              name: 'Jan 7',
              value: 540.48
            }]
          }],
          curve: d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveBasis"]
        };
        this.card24 = {
          scheme: {
            domain: ['#4867d2', '#5c84f1', '#89a9f4']
          },
          devices: [{
            name: 'Desktop',
            value: 92.8,
            change: -0.6
          }, {
            name: 'Mobile',
            value: 6.1,
            change: 0.7
          }, {
            name: 'Tablet',
            value: 1.1,
            change: 0.1
          }]
        };
        this.card25 = {
          scheme: {
            domain: ['#5c84f1']
          },
          data: [{
            name: 'Monday',
            value: 221
          }, {
            name: 'Tuesday',
            value: 428
          }, {
            name: 'Wednesday',
            value: 492
          }, {
            name: 'Thursday',
            value: 471
          }, {
            name: 'Friday',
            value: 413
          }, {
            name: 'Saturday',
            value: 344
          }, {
            name: 'Sunday',
            value: 294
          }]
        };
        this.card26 = {
          scheme: {
            domain: ['#5c84f1']
          },
          data: [{
            name: 'Impressions',
            series: [{
              name: 'Jan 1',
              value: 670000
            }, {
              name: 'Jan 2',
              value: 540000
            }, {
              name: 'Jan 3',
              value: 820000
            }, {
              name: 'Jan 4',
              value: 570000
            }, {
              name: 'Jan 5',
              value: 720000
            }, {
              name: 'Jan 6',
              value: 570000
            }, {
              name: 'Jan 7',
              value: 870000
            }, {
              name: 'Jan 8',
              value: 720000
            }, {
              name: 'Jan 9',
              value: 890000
            }, {
              name: 'Jan 10',
              value: 987000
            }, {
              name: 'Jan 11',
              value: 1120000
            }, {
              name: 'Jan 12',
              value: 1360000
            }, {
              name: 'Jan 13',
              value: 1100000
            }, {
              name: 'Jan 14',
              value: 1490000
            }, {
              name: 'Jan 15',
              value: 980000
            }]
          }],
          curve: d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveBasis"]
        };
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle the view
       */


      _createClass(CardsComponent, [{
        key: "toggleView",
        value: function toggleView() {
          if (this.view === 'preview') {
            this.view = 'source';
          } else {
            this.view = 'preview';
          }
        }
      }]);

      return CardsComponent;
    }();

    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/cards/cards.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cards.component.scss */
      "./src/app/main/ui/cards/cards.component.scss")).default]
    })], CardsComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/cards/cards.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/main/ui/cards/cards.module.ts ***!
    \***********************************************/

  /*! exports provided: UICardsModule */

  /***/
  function srcAppMainUiCardsCardsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UICardsModule", function () {
      return UICardsModule;
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


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fuse/components/demo/demo.module */
    "./src/@fuse/components/demo/demo.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var app_main_ui_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! app/main/ui/cards/cards.component */
    "./src/app/main/ui/cards/cards.component.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/release/esm.js");

    var routes = [{
      path: 'cards',
      component: app_main_ui_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"]
    }];

    var UICardsModule = function UICardsModule() {
      _classCallCheck(this, UICardsModule);
    };

    UICardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_ui_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__["NgxChartsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_11__["FuseSharedModule"], _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_12__["FuseDemoModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseHighlightModule"]]
    })], UICardsModule);
    /***/
  },

  /***/
  "./src/app/main/ui/colors/colors.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/main/ui/colors/colors.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiColorsColorsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content .color-tabs-content .color-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n:host .content .color-tabs-content .color .fg-box {\n  background-color: white;\n}\n:host .content .color-tabs-content .colored-bg {\n  -webkit-transition: background-color 400ms ease;\n  transition: background-color 400ms ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS9jb2xvcnMvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL3NyY1xcYXBwXFxtYWluXFx1aVxcY29sb3JzXFxjb2xvcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vdWkvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNWTtFQUNJLGtEQUFBO0FDTGhCO0FEVWdCO0VBQ0ksdUJBQUE7QUNScEI7QURZWTtFQUNJLCtDQUFBO0VBQUEsdUNBQUE7QUNWaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3VpL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICAuY29sb3ItdGFicy1jb250ZW50IHtcclxuXHJcbiAgICAgICAgICAgIC5jb2xvci1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb2xvciB7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZnLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb2xvcmVkLWJnIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNDAwbXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiOmhvc3QgLmNvbnRlbnQgLmNvbG9yLXRhYnMtY29udGVudCAuY29sb3ItaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG46aG9zdCAuY29udGVudCAuY29sb3ItdGFicy1jb250ZW50IC5jb2xvciAuZmctYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG46aG9zdCAuY29udGVudCAuY29sb3ItdGFicy1jb250ZW50IC5jb2xvcmVkLWJnIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA0MDBtcyBlYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/colors/colors.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/main/ui/colors/colors.component.ts ***!
    \****************************************************/

  /*! exports provided: ColorsComponent */

  /***/
  function srcAppMainUiColorsColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorsComponent", function () {
      return ColorsComponent;
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


    var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/mat-colors */
    "./src/@fuse/mat-colors/index.ts");

    var ColorsComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function ColorsComponent() {
        _classCallCheck(this, ColorsComponent);

        // Set the defaults
        this.colors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_2__["MatColors"].all;

        this._updateSelectedColor('primary');
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Select color
       *
       * @param selected
       */


      _createClass(ColorsComponent, [{
        key: "selectColor",
        value: function selectColor(selected) {
          this._updateSelectedColor(selected.tab.textLabel);
        }
        /**
         * Update selected color
         *
         * @param colorName
         * @private
         */

      }, {
        key: "_updateSelectedColor",
        value: function _updateSelectedColor(colorName) {
          this.selectedColor = colorName;
          this.selectedColorDefaultValue = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_2__["MatColors"].getColor(this.selectedColor)[500];
        }
      }]);

      return ColorsComponent;
    }();

    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'colors',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./colors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/colors/colors.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./colors.component.scss */
      "./src/app/main/ui/colors/colors.component.scss")).default]
    })], ColorsComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/colors/colors.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/main/ui/colors/colors.module.ts ***!
    \*************************************************/

  /*! exports provided: UIColorsModule */

  /***/
  function srcAppMainUiColorsColorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIColorsModule", function () {
      return UIColorsModule;
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


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fuse/components/demo/demo.module */
    "./src/@fuse/components/demo/demo.module.ts");
    /* harmony import */


    var app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/ui/colors/colors.component */
    "./src/app/main/ui/colors/colors.component.ts");

    var routes = [{
      path: 'colors',
      component: app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_8__["ColorsComponent"]
    }];

    var UIColorsModule = function UIColorsModule() {
      _classCallCheck(this, UIColorsModule);
    };

    UIColorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_ui_colors_colors_component__WEBPACK_IMPORTED_MODULE_8__["ColorsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__["FuseSharedModule"], _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["FuseDemoModule"]]
    })], UIColorsModule);
    /***/
  },

  /***/
  "./src/app/main/ui/forms/forms.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/main/ui/forms/forms.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiFormsFormsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content form {\n  width: 100%;\n  max-width: 800px !important;\n}\n:host .content .form-errors-model {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content .form-errors-model code {\n  background: none !important;\n}\n:host .content .horizontal-stepper-wrapper,\n:host .content .vertical-stepper-wrapper {\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS9mb3Jtcy9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXHVpXFxmb3Jtc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vdWkvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QUNIWjtBRE1RO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDSlo7QURNWTtFQUNJLDJCQUFBO0FDSmhCO0FEUVE7O0VBRUksZ0JBQUE7QUNOWiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWVycm9ycy1tb2RlbCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvcml6b250YWwtc3RlcHBlci13cmFwcGVyLFxyXG4gICAgICAgIC52ZXJ0aWNhbC1zdGVwcGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0IC5jb250ZW50IGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmNvbnRlbnQgLmZvcm0tZXJyb3JzLW1vZGVsIHtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5jb250ZW50IC5mb3JtLWVycm9ycy1tb2RlbCBjb2RlIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmNvbnRlbnQgLmhvcml6b250YWwtc3RlcHBlci13cmFwcGVyLFxuOmhvc3QgLmNvbnRlbnQgLnZlcnRpY2FsLXN0ZXBwZXItd3JhcHBlciB7XG4gIG1heC13aWR0aDogODAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/ui/forms/forms.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/ui/forms/forms.component.ts ***!
    \**************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcAppMainUiFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var FormsComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FormBuilder} _formBuilder
       */
      function FormsComponent(_formBuilder) {
        _classCallCheck(this, FormsComponent);

        this._formBuilder = _formBuilder; // Set the private defaults

        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(FormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Reactive Form
          this.form = this._formBuilder.group({
            company: [{
              value: 'Google',
              disabled: true
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }); // Horizontal Stepper form steps

          this.horizontalStepperStep1 = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.horizontalStepperStep2 = this._formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.horizontalStepperStep3 = this._formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]]
          }); // Vertical Stepper form stepper

          this.verticalStepperStep1 = this._formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.verticalStepperStep2 = this._formBuilder.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.verticalStepperStep3 = this._formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]]
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
        } // -----------------------------------------------------------------------------------------------------
        // @ Public methods
        // -----------------------------------------------------------------------------------------------------

        /**
         * Finish the horizontal stepper
         */

      }, {
        key: "finishHorizontalStepper",
        value: function finishHorizontalStepper() {
          alert('You have finished the horizontal stepper!');
        }
        /**
         * Finish the vertical stepper
         */

      }, {
        key: "finishVerticalStepper",
        value: function finishVerticalStepper() {
          alert('You have finished the vertical stepper!');
        }
      }]);

      return FormsComponent;
    }();

    FormsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/forms/forms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forms.component.scss */
      "./src/app/main/ui/forms/forms.component.scss")).default]
    })], FormsComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/forms/forms.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/main/ui/forms/forms.module.ts ***!
    \***********************************************/

  /*! exports provided: UIFormsModule */

  /***/
  function srcAppMainUiFormsFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIFormsModule", function () {
      return UIFormsModule;
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


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! app/main/ui/forms/forms.component */
    "./src/app/main/ui/forms/forms.component.ts");

    var routes = [{
      path: 'forms',
      component: app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"]
    }];

    var UIFormsModule = function UIFormsModule() {
      _classCallCheck(this, UIFormsModule);
    };

    UIFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_ui_forms_forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"]]
    })], UIFormsModule);
    /***/
  },

  /***/
  "./src/app/main/ui/helper-classes/helper-classes.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/main/ui/helper-classes/helper-classes.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiHelperClassesHelperClassesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvaGVscGVyLWNsYXNzZXMvaGVscGVyLWNsYXNzZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/helper-classes/helper-classes.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/ui/helper-classes/helper-classes.component.ts ***!
    \********************************************************************/

  /*! exports provided: HelperClassesComponent */

  /***/
  function srcAppMainUiHelperClassesHelperClassesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperClassesComponent", function () {
      return HelperClassesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelperClassesComponent =
    /**
     * Constructor
     */
    function HelperClassesComponent() {
      _classCallCheck(this, HelperClassesComponent);
    };

    HelperClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'helper-classes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./helper-classes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/helper-classes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./helper-classes.component.scss */
      "./src/app/main/ui/helper-classes/helper-classes.component.scss")).default]
    })], HelperClassesComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/helper-classes/helper-classes.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/main/ui/helper-classes/helper-classes.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UIHelperClassesModule */

  /***/
  function srcAppMainUiHelperClassesHelperClassesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIHelperClassesModule", function () {
      return UIHelperClassesModule;
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/main/ui/helper-classes/helper-classes.component */
    "./src/app/main/ui/helper-classes/helper-classes.component.ts");
    /* harmony import */


    var app_main_ui_helper_classes_tabs_padding_margin_padding_margin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component */
    "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts");
    /* harmony import */


    var app_main_ui_helper_classes_tabs_width_height_width_height_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/ui/helper-classes/tabs/width-height/width-height.component */
    "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts");

    var routes = [{
      path: 'helper-classes',
      component: app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_7__["HelperClassesComponent"]
    }];

    var UIHelperClassesModule = function UIHelperClassesModule() {
      _classCallCheck(this, UIHelperClassesModule);
    };

    UIHelperClassesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_ui_helper_classes_helper_classes_component__WEBPACK_IMPORTED_MODULE_7__["HelperClassesComponent"], app_main_ui_helper_classes_tabs_padding_margin_padding_margin_component__WEBPACK_IMPORTED_MODULE_8__["HelperClassesPaddingMarginComponent"], app_main_ui_helper_classes_tabs_width_height_width_height_component__WEBPACK_IMPORTED_MODULE_9__["HelperClassesWidthHeightComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseHighlightModule"]]
    })], UIHelperClassesModule);
    /***/
  },

  /***/
  "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiHelperClassesTabsPaddingMarginPaddingMarginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #helper-classes-padding-margin .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #helper-classes-padding-margin .source-code code {\n  background: none !important;\n}\n:host #helper-classes-padding-margin .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #helper-classes-padding-margin .preview:last-child {\n  margin-bottom: 0;\n}\n:host #helper-classes-padding-margin .preview .mat-caption {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS9oZWxwZXItY2xhc3Nlcy90YWJzL3BhZGRpbmctbWFyZ2luL0Q6XFxDb2RlXFxCdXNpdGVjaFxcUVdDb2xsZWN0b3I2XFxmcm9udGVuZC9zcmNcXGFwcFxcbWFpblxcdWlcXGhlbHBlci1jbGFzc2VzXFx0YWJzXFxwYWRkaW5nLW1hcmdpblxccGFkZGluZy1tYXJnaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vdWkvaGVscGVyLWNsYXNzZXMvdGFicy9wYWRkaW5nLW1hcmdpbi9wYWRkaW5nLW1hcmdpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0haO0FES1k7RUFDSSwyQkFBQTtBQ0hoQjtBRE9RO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTFo7QURPWTtFQUNJLGdCQUFBO0FDTGhCO0FEUVk7RUFDSSxtQkFBQTtBQ05oQiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvaGVscGVyLWNsYXNzZXMvdGFicy9wYWRkaW5nLW1hcmdpbi9wYWRkaW5nLW1hcmdpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAjaGVscGVyLWNsYXNzZXMtcGFkZGluZy1tYXJnaW4ge1xyXG5cclxuICAgICAgICAuc291cmNlLWNvZGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG5cclxuICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWNhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0ICNoZWxwZXItY2xhc3Nlcy1wYWRkaW5nLW1hcmdpbiAuc291cmNlLWNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI2hlbHBlci1jbGFzc2VzLXBhZGRpbmctbWFyZ2luIC5zb3VyY2UtY29kZSBjb2RlIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgI2hlbHBlci1jbGFzc2VzLXBhZGRpbmctbWFyZ2luIC5wcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBtaW4taGVpZ2h0OiAxODBweDtcbn1cbjpob3N0ICNoZWxwZXItY2xhc3Nlcy1wYWRkaW5nLW1hcmdpbiAucHJldmlldzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0ICNoZWxwZXItY2xhc3Nlcy1wYWRkaW5nLW1hcmdpbiAucHJldmlldyAubWF0LWNhcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: HelperClassesPaddingMarginComponent */

  /***/
  function srcAppMainUiHelperClassesTabsPaddingMarginPaddingMarginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperClassesPaddingMarginComponent", function () {
      return HelperClassesPaddingMarginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelperClassesPaddingMarginComponent =
    /**
     * Constructor
     */
    function HelperClassesPaddingMarginComponent() {
      _classCallCheck(this, HelperClassesPaddingMarginComponent);
    };

    HelperClassesPaddingMarginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'helper-classes-padding-margin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./padding-margin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./padding-margin.component.scss */
      "./src/app/main/ui/helper-classes/tabs/padding-margin/padding-margin.component.scss")).default]
    })], HelperClassesPaddingMarginComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiHelperClassesTabsWidthHeightWidthHeightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #helper-classes-width-height .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #helper-classes-width-height .source-code code {\n  background: none !important;\n}\n:host #helper-classes-width-height .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #helper-classes-width-height .preview:last-child {\n  margin-bottom: 0;\n}\n:host #helper-classes-width-height .preview .mat-caption {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS9oZWxwZXItY2xhc3Nlcy90YWJzL3dpZHRoLWhlaWdodC9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXHVpXFxoZWxwZXItY2xhc3Nlc1xcdGFic1xcd2lkdGgtaGVpZ2h0XFx3aWR0aC1oZWlnaHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vdWkvaGVscGVyLWNsYXNzZXMvdGFicy93aWR0aC1oZWlnaHQvd2lkdGgtaGVpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSFo7QURLWTtFQUNJLDJCQUFBO0FDSGhCO0FET1E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNMWjtBRE9ZO0VBQ0ksZ0JBQUE7QUNMaEI7QURRWTtFQUNJLG1CQUFBO0FDTmhCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi91aS9oZWxwZXItY2xhc3Nlcy90YWJzL3dpZHRoLWhlaWdodC93aWR0aC1oZWlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgI2hlbHBlci1jbGFzc2VzLXdpZHRoLWhlaWdodCB7XHJcblxyXG4gICAgICAgIC5zb3VyY2UtY29kZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcblxyXG4gICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiOmhvc3QgI2hlbHBlci1jbGFzc2VzLXdpZHRoLWhlaWdodCAuc291cmNlLWNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI2hlbHBlci1jbGFzc2VzLXdpZHRoLWhlaWdodCAuc291cmNlLWNvZGUgY29kZSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbjpob3N0ICNoZWxwZXItY2xhc3Nlcy13aWR0aC1oZWlnaHQgLnByZXZpZXcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI2hlbHBlci1jbGFzc2VzLXdpZHRoLWhlaWdodCAucHJldmlldzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0ICNoZWxwZXItY2xhc3Nlcy13aWR0aC1oZWlnaHQgLnByZXZpZXcgLm1hdC1jYXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.ts ***!
    \************************************************************************************/

  /*! exports provided: HelperClassesWidthHeightComponent */

  /***/
  function srcAppMainUiHelperClassesTabsWidthHeightWidthHeightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperClassesWidthHeightComponent", function () {
      return HelperClassesWidthHeightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelperClassesWidthHeightComponent =
    /**
     * Constructor
     */
    function HelperClassesWidthHeightComponent() {
      _classCallCheck(this, HelperClassesWidthHeightComponent);
    };

    HelperClassesWidthHeightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'helper-classes-width-height',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./width-height.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./width-height.component.scss */
      "./src/app/main/ui/helper-classes/tabs/width-height/width-height.component.scss")).default]
    })], HelperClassesWidthHeightComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/icons/icons.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/main/ui/icons/icons.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiIconsIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .content {\n  max-width: 1200px;\n}\n:host .content .icon-holder {\n  width: 112px;\n  height: 120px;\n}\n:host .content .icon-holder .icon-name {\n  font-size: 12px;\n  word-wrap: break-word;\n  width: 100px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS9pY29ucy9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXHVpXFxpY29uc1xcaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vdWkvaWNvbnMvaWNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQ0RSO0FER1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0RaO0FER1k7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3VpL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuXHJcbiAgICAgICAgLmljb24taG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDExMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG5cclxuICAgICAgICAgICAgLmljb24tbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiOmhvc3QgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbn1cbjpob3N0IC5jb250ZW50IC5pY29uLWhvbGRlciB7XG4gIHdpZHRoOiAxMTJweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbjpob3N0IC5jb250ZW50IC5pY29uLWhvbGRlciAuaWNvbi1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/icons/icons.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main/ui/icons/icons.component.ts ***!
    \**************************************************/

  /*! exports provided: IconsComponent */

  /***/
  function srcAppMainUiIconsIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsComponent", function () {
      return IconsComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var IconsComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {HttpClient} _httpClient
       */
      function IconsComponent(_httpClient) {
        _classCallCheck(this, IconsComponent);

        this._httpClient = _httpClient; // Set the defaults

        this.loading = true; // Set the private defaults

        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      } // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------

      /**
       * On init
       */


      _createClass(IconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._httpClient.get('api/icons').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll)).subscribe(function (icons) {
            _this.icons = icons;
            _this.filteredIcons = _this.icons;
            _this.loading = false;
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
        } // -----------------------------------------------------------------------------------------------------
        // @ Public methods
        // -----------------------------------------------------------------------------------------------------

        /**
         * Filter icons
         *
         * @param event
         */

      }, {
        key: "filterIcons",
        value: function filterIcons(event) {
          var value = event.target.value;
          this.filteredIcons = this.icons.filter(function (icon) {
            return icon.name.includes(value) || icon.tags.includes(value);
          });
        }
      }]);

      return IconsComponent;
    }();

    IconsComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'icons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/icons/icons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./icons.component.scss */
      "./src/app/main/ui/icons/icons.component.scss")).default]
    })], IconsComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/icons/icons.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/main/ui/icons/icons.module.ts ***!
    \***********************************************/

  /*! exports provided: UIIconsModule */

  /***/
  function srcAppMainUiIconsIconsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIIconsModule", function () {
      return UIIconsModule;
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


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/ui/icons/icons.component */
    "./src/app/main/ui/icons/icons.component.ts");

    var routes = [{
      path: 'icons',
      component: app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"]
    }];

    var UIIconsModule = function UIIconsModule() {
      _classCallCheck(this, UIIconsModule);
    };

    UIIconsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_ui_icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_8__["FuseSharedModule"]]
    })], UIIconsModule);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/blank/blank.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/blank/blank.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsBlankBlankComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/blank/blank.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/blank/blank.component.ts ***!
    \***************************************************************/

  /*! exports provided: BlankComponent */

  /***/
  function srcAppMainUiPageLayoutsBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
      return BlankComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlankComponent =
    /**
     * Constructor
     */
    function BlankComponent() {
      _classCallCheck(this, BlankComponent);
    };

    BlankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'blank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blank.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/blank/blank.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blank.component.scss */
      "./src/app/main/ui/page-layouts/blank/blank.component.scss")).default]
    })], BlankComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidth1FullWidth1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9mdWxsLXdpZHRoLTEvZnVsbC13aWR0aC0xLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CardedFullWidth1Component */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidth1FullWidth1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedFullWidth1Component", function () {
      return CardedFullWidth1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardedFullWidth1Component =
    /**
     * Constructor
     */
    function CardedFullWidth1Component() {
      _classCallCheck(this, CardedFullWidth1Component);
    };

    CardedFullWidth1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-fullwidth-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-width-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-width-1.component.scss */
      "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.scss")).default]
    })], CardedFullWidth1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidth2FullWidth2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9mdWxsLXdpZHRoLTIvZnVsbC13aWR0aC0yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CardedFullWidth2Component */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidth2FullWidth2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedFullWidth2Component", function () {
      return CardedFullWidth2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardedFullWidth2Component =
    /**
     * Constructor
     */
    function CardedFullWidth2Component() {
      _classCallCheck(this, CardedFullWidth2Component);
    };

    CardedFullWidth2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-fullwidth-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-width-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-width-2.component.scss */
      "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.scss")).default]
    })], CardedFullWidth2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidthTabbed1FullWidthTabbed1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9mdWxsLXdpZHRoLXRhYmJlZC0xL2Z1bGwtd2lkdGgtdGFiYmVkLTEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: CardedFullWidthTabbed1Component */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidthTabbed1FullWidthTabbed1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedFullWidthTabbed1Component", function () {
      return CardedFullWidthTabbed1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardedFullWidthTabbed1Component =
    /**
     * Constructor
     */
    function CardedFullWidthTabbed1Component() {
      _classCallCheck(this, CardedFullWidthTabbed1Component);
    };

    CardedFullWidthTabbed1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-fullwidth-tabbed-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-width-tabbed-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-width-tabbed-1.component.scss */
      "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.scss")).default]
    })], CardedFullWidthTabbed1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidthTabbed2FullWidthTabbed2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9mdWxsLXdpZHRoLXRhYmJlZC0yL2Z1bGwtd2lkdGgtdGFiYmVkLTIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: CardedFullWidthTabbed2Component */

  /***/
  function srcAppMainUiPageLayoutsCardedFullWidthTabbed2FullWidthTabbed2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedFullWidthTabbed2Component", function () {
      return CardedFullWidthTabbed2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardedFullWidthTabbed2Component =
    /**
     * Constructor
     */
    function CardedFullWidthTabbed2Component() {
      _classCallCheck(this, CardedFullWidthTabbed2Component);
    };

    CardedFullWidthTabbed2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-fullwidth-tabbed-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-width-tabbed-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-width-tabbed-2.component.scss */
      "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.scss")).default]
    })], CardedFullWidthTabbed2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebar1LeftSidebar1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9sZWZ0LXNpZGViYXItMS9sZWZ0LXNpZGViYXItMS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CardedLeftSidebar1Component */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebar1LeftSidebar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedLeftSidebar1Component", function () {
      return CardedLeftSidebar1Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedLeftSidebar1Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedLeftSidebar1Component(_fuseSidebarService) {
        _classCallCheck(this, CardedLeftSidebar1Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedLeftSidebar1Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedLeftSidebar1Component;
    }();

    CardedLeftSidebar1Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedLeftSidebar1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-left-sidebar-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-1.component.scss */
      "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.scss")).default]
    })], CardedLeftSidebar1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebar2LeftSidebar2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9sZWZ0LXNpZGViYXItMi9sZWZ0LXNpZGViYXItMi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CardedLeftSidebar2Component */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebar2LeftSidebar2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedLeftSidebar2Component", function () {
      return CardedLeftSidebar2Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedLeftSidebar2Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedLeftSidebar2Component(_fuseSidebarService) {
        _classCallCheck(this, CardedLeftSidebar2Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedLeftSidebar2Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedLeftSidebar2Component;
    }();

    CardedLeftSidebar2Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedLeftSidebar2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-left-sidebar-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-2.component.scss */
      "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.scss")).default]
    })], CardedLeftSidebar2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebarTabbed1LeftSidebarTabbed1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9sZWZ0LXNpZGViYXItdGFiYmVkLTEvbGVmdC1zaWRlYmFyLXRhYmJlZC0xLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: CardedLeftSidebarTabbed1Component */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebarTabbed1LeftSidebarTabbed1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedLeftSidebarTabbed1Component", function () {
      return CardedLeftSidebarTabbed1Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedLeftSidebarTabbed1Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedLeftSidebarTabbed1Component(_fuseSidebarService) {
        _classCallCheck(this, CardedLeftSidebarTabbed1Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedLeftSidebarTabbed1Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedLeftSidebarTabbed1Component;
    }();

    CardedLeftSidebarTabbed1Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedLeftSidebarTabbed1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-left-sidebar-tabbed-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-tabbed-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-tabbed-1.component.scss */
      "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.scss")).default]
    })], CardedLeftSidebarTabbed1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebarTabbed2LeftSidebarTabbed2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9sZWZ0LXNpZGViYXItdGFiYmVkLTIvbGVmdC1zaWRlYmFyLXRhYmJlZC0yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: CardedLeftSidebarTabbed2Component */

  /***/
  function srcAppMainUiPageLayoutsCardedLeftSidebarTabbed2LeftSidebarTabbed2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedLeftSidebarTabbed2Component", function () {
      return CardedLeftSidebarTabbed2Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedLeftSidebarTabbed2Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedLeftSidebarTabbed2Component(_fuseSidebarService) {
        _classCallCheck(this, CardedLeftSidebarTabbed2Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedLeftSidebarTabbed2Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedLeftSidebarTabbed2Component;
    }();

    CardedLeftSidebarTabbed2Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedLeftSidebarTabbed2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-left-sidebar-tabbed-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-tabbed-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-tabbed-2.component.scss */
      "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.scss")).default]
    })], CardedLeftSidebarTabbed2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebar1RightSidebar1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9yaWdodC1zaWRlYmFyLTEvcmlnaHQtc2lkZWJhci0xLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CardedRightSidebar1Component */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebar1RightSidebar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedRightSidebar1Component", function () {
      return CardedRightSidebar1Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedRightSidebar1Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedRightSidebar1Component(_fuseSidebarService) {
        _classCallCheck(this, CardedRightSidebar1Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedRightSidebar1Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedRightSidebar1Component;
    }();

    CardedRightSidebar1Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedRightSidebar1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-right-sidebar-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-1.component.scss */
      "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.scss")).default]
    })], CardedRightSidebar1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebar2RightSidebar2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9yaWdodC1zaWRlYmFyLTIvcmlnaHQtc2lkZWJhci0yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CardedRightSidebar2Component */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebar2RightSidebar2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedRightSidebar2Component", function () {
      return CardedRightSidebar2Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedRightSidebar2Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedRightSidebar2Component(_fuseSidebarService) {
        _classCallCheck(this, CardedRightSidebar2Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedRightSidebar2Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedRightSidebar2Component;
    }();

    CardedRightSidebar2Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedRightSidebar2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-right-sidebar-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-2.component.scss */
      "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.scss")).default]
    })], CardedRightSidebar2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebarTabbed1RightSidebarTabbed1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9yaWdodC1zaWRlYmFyLXRhYmJlZC0xL3JpZ2h0LXNpZGViYXItdGFiYmVkLTEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: CardedRightSidebarTabbed1Component */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebarTabbed1RightSidebarTabbed1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedRightSidebarTabbed1Component", function () {
      return CardedRightSidebarTabbed1Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedRightSidebarTabbed1Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedRightSidebarTabbed1Component(_fuseSidebarService) {
        _classCallCheck(this, CardedRightSidebarTabbed1Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedRightSidebarTabbed1Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedRightSidebarTabbed1Component;
    }();

    CardedRightSidebarTabbed1Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedRightSidebarTabbed1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-right-sidebar-tabbed-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-tabbed-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-tabbed-1.component.scss */
      "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.scss")).default]
    })], CardedRightSidebarTabbed1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebarTabbed2RightSidebarTabbed2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL2NhcmRlZC9yaWdodC1zaWRlYmFyLXRhYmJlZC0yL3JpZ2h0LXNpZGViYXItdGFiYmVkLTIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: CardedRightSidebarTabbed2Component */

  /***/
  function srcAppMainUiPageLayoutsCardedRightSidebarTabbed2RightSidebarTabbed2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardedRightSidebarTabbed2Component", function () {
      return CardedRightSidebarTabbed2Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var CardedRightSidebarTabbed2Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function CardedRightSidebarTabbed2Component(_fuseSidebarService) {
        _classCallCheck(this, CardedRightSidebarTabbed2Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(CardedRightSidebarTabbed2Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return CardedRightSidebarTabbed2Component;
    }();

    CardedRightSidebarTabbed2Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    CardedRightSidebarTabbed2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'carded-right-sidebar-tabbed-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-tabbed-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-tabbed-2.component.scss */
      "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.scss")).default]
    })], CardedRightSidebarTabbed2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/page-layouts.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/page-layouts.module.ts ***!
    \*************************************************************/

  /*! exports provided: UIPageLayoutsModule */

  /***/
  function srcAppMainUiPageLayoutsPageLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIPageLayoutsModule", function () {
      return UIPageLayoutsModule;
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


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fuse/components/demo/demo.module */
    "./src/@fuse/components/demo/demo.module.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/full-width-1/full-width-1.component */
    "./src/app/main/ui/page-layouts/carded/full-width-1/full-width-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/full-width-2/full-width-2.component */
    "./src/app/main/ui/page-layouts/carded/full-width-2/full-width-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component */
    "./src/app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component */
    "./src/app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component */
    "./src/app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component */
    "./src/app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component */
    "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component */
    "./src/app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component */
    "./src/app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component */
    "./src/app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component */
    "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component */
    "./src/app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/full-width-1/full-width-1.component */
    "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component */
    "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component */
    "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component */
    "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component */
    "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component */
    "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component */
    "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component */
    "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component */
    "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component */
    "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts");
    /* harmony import */


    var app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! app/main/ui/page-layouts/blank/blank.component */
    "./src/app/main/ui/page-layouts/blank/blank.component.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");

    var routes = [// Carded
    {
      path: 'page-layouts/carded/full-width-1',
      component: app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_8__["CardedFullWidth1Component"]
    }, {
      path: 'page-layouts/carded/full-width-2',
      component: app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_9__["CardedFullWidth2Component"]
    }, {
      path: 'page-layouts/carded/full-width-tabbed-1',
      component: app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_10__["CardedFullWidthTabbed1Component"]
    }, {
      path: 'page-layouts/carded/full-width-tabbed-2',
      component: app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_11__["CardedFullWidthTabbed2Component"]
    }, {
      path: 'page-layouts/carded/left-sidebar-1',
      component: app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_12__["CardedLeftSidebar1Component"]
    }, {
      path: 'page-layouts/carded/left-sidebar-tabbed-1',
      component: app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_14__["CardedLeftSidebarTabbed1Component"]
    }, {
      path: 'page-layouts/carded/left-sidebar-2',
      component: app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_13__["CardedLeftSidebar2Component"]
    }, {
      path: 'page-layouts/carded/left-sidebar-tabbed-2',
      component: app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_15__["CardedLeftSidebarTabbed2Component"]
    }, {
      path: 'page-layouts/carded/right-sidebar-1',
      component: app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_16__["CardedRightSidebar1Component"]
    }, {
      path: 'page-layouts/carded/right-sidebar-tabbed-1',
      component: app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__["CardedRightSidebarTabbed1Component"]
    }, {
      path: 'page-layouts/carded/right-sidebar-2',
      component: app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_17__["CardedRightSidebar2Component"]
    }, {
      path: 'page-layouts/carded/right-sidebar-tabbed-2',
      component: app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_19__["CardedRightSidebarTabbed2Component"]
    }, // Simple
    {
      path: 'page-layouts/simple/full-width-1',
      component: app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_20__["SimpleFullWidth1Component"]
    }, {
      path: 'page-layouts/simple/full-width-tabbed-1',
      component: app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_21__["SimpleFullWidthTabbed1Component"]
    }, {
      path: 'page-layouts/simple/left-sidebar-1',
      component: app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_22__["SimpleLeftSidebar1Component"]
    }, {
      path: 'page-layouts/simple/left-sidebar-2',
      component: app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_23__["SimpleLeftSidebar2Component"]
    }, {
      path: 'page-layouts/simple/left-sidebar-3',
      component: app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_24__["SimpleLeftSidebar3Component"]
    }, {
      path: 'page-layouts/simple/left-sidebar-4',
      component: app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_25__["SimpleLeftSidebar4Component"]
    }, {
      path: 'page-layouts/simple/right-sidebar-1',
      component: app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_26__["SimpleRightSidebar1Component"]
    }, {
      path: 'page-layouts/simple/right-sidebar-2',
      component: app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_27__["SimpleRightSidebar2Component"]
    }, {
      path: 'page-layouts/simple/right-sidebar-3',
      component: app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_28__["SimpleRightSidebar3Component"]
    }, {
      path: 'page-layouts/simple/right-sidebar-4',
      component: app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_29__["SimpleRightSidebar4Component"]
    }, // Blank
    {
      path: 'page-layouts/blank',
      component: app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_30__["BlankComponent"]
    }];

    var UIPageLayoutsModule = function UIPageLayoutsModule() {
      _classCallCheck(this, UIPageLayoutsModule);
    };

    UIPageLayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_ui_page_layouts_carded_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_8__["CardedFullWidth1Component"], app_main_ui_page_layouts_carded_full_width_2_full_width_2_component__WEBPACK_IMPORTED_MODULE_9__["CardedFullWidth2Component"], app_main_ui_page_layouts_carded_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_10__["CardedFullWidthTabbed1Component"], app_main_ui_page_layouts_carded_full_width_tabbed_2_full_width_tabbed_2_component__WEBPACK_IMPORTED_MODULE_11__["CardedFullWidthTabbed2Component"], app_main_ui_page_layouts_carded_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_12__["CardedLeftSidebar1Component"], app_main_ui_page_layouts_carded_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_13__["CardedLeftSidebar2Component"], app_main_ui_page_layouts_carded_left_sidebar_tabbed_1_left_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_14__["CardedLeftSidebarTabbed1Component"], app_main_ui_page_layouts_carded_left_sidebar_tabbed_2_left_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_15__["CardedLeftSidebarTabbed2Component"], app_main_ui_page_layouts_carded_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_16__["CardedRightSidebar1Component"], app_main_ui_page_layouts_carded_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_17__["CardedRightSidebar2Component"], app_main_ui_page_layouts_carded_right_sidebar_tabbed_1_right_sidebar_tabbed_1_component__WEBPACK_IMPORTED_MODULE_18__["CardedRightSidebarTabbed1Component"], app_main_ui_page_layouts_carded_right_sidebar_tabbed_2_right_sidebar_tabbed_2_component__WEBPACK_IMPORTED_MODULE_19__["CardedRightSidebarTabbed2Component"], app_main_ui_page_layouts_simple_full_width_1_full_width_1_component__WEBPACK_IMPORTED_MODULE_20__["SimpleFullWidth1Component"], app_main_ui_page_layouts_simple_full_width_tabbed_1_full_width_tabbed_1_component__WEBPACK_IMPORTED_MODULE_21__["SimpleFullWidthTabbed1Component"], app_main_ui_page_layouts_simple_left_sidebar_1_left_sidebar_1_component__WEBPACK_IMPORTED_MODULE_22__["SimpleLeftSidebar1Component"], app_main_ui_page_layouts_simple_left_sidebar_2_left_sidebar_2_component__WEBPACK_IMPORTED_MODULE_23__["SimpleLeftSidebar2Component"], app_main_ui_page_layouts_simple_left_sidebar_3_left_sidebar_3_component__WEBPACK_IMPORTED_MODULE_24__["SimpleLeftSidebar3Component"], app_main_ui_page_layouts_simple_left_sidebar_4_left_sidebar_4_component__WEBPACK_IMPORTED_MODULE_25__["SimpleLeftSidebar4Component"], app_main_ui_page_layouts_simple_right_sidebar_1_right_sidebar_1_component__WEBPACK_IMPORTED_MODULE_26__["SimpleRightSidebar1Component"], app_main_ui_page_layouts_simple_right_sidebar_2_right_sidebar_2_component__WEBPACK_IMPORTED_MODULE_27__["SimpleRightSidebar2Component"], app_main_ui_page_layouts_simple_right_sidebar_3_right_sidebar_3_component__WEBPACK_IMPORTED_MODULE_28__["SimpleRightSidebar3Component"], app_main_ui_page_layouts_simple_right_sidebar_4_right_sidebar_4_component__WEBPACK_IMPORTED_MODULE_29__["SimpleRightSidebar4Component"], app_main_ui_page_layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_30__["BlankComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_31__["FuseSidebarModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__["FuseSharedModule"], _fuse_components_demo_demo_module__WEBPACK_IMPORTED_MODULE_7__["FuseDemoModule"]]
    })], UIPageLayoutsModule);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleFullWidth1FullWidth1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9mdWxsLXdpZHRoLTEvZnVsbC13aWR0aC0xLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.ts ***!
    \************************************************************************************/

  /*! exports provided: SimpleFullWidth1Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleFullWidth1FullWidth1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleFullWidth1Component", function () {
      return SimpleFullWidth1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SimpleFullWidth1Component =
    /**
     * Constructor
     */
    function SimpleFullWidth1Component() {
      _classCallCheck(this, SimpleFullWidth1Component);
    };

    SimpleFullWidth1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-fullwidth-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-width-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-width-1.component.scss */
      "./src/app/main/ui/page-layouts/simple/full-width-1/full-width-1.component.scss")).default]
    })], SimpleFullWidth1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleFullWidthTabbed1FullWidthTabbed1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9mdWxsLXdpZHRoLXRhYmJlZC0xL2Z1bGwtd2lkdGgtdGFiYmVkLTEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: SimpleFullWidthTabbed1Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleFullWidthTabbed1FullWidthTabbed1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleFullWidthTabbed1Component", function () {
      return SimpleFullWidthTabbed1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SimpleFullWidthTabbed1Component =
    /**
     * Constructor
     */
    function SimpleFullWidthTabbed1Component() {
      _classCallCheck(this, SimpleFullWidthTabbed1Component);
    };

    SimpleFullWidthTabbed1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-full-width-tabbed-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./full-width-tabbed-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./full-width-tabbed-1.component.scss */
      "./src/app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component.scss")).default]
    })], SimpleFullWidthTabbed1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar1LeftSidebar1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9sZWZ0LXNpZGViYXItMS9sZWZ0LXNpZGViYXItMS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SimpleLeftSidebar1Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar1LeftSidebar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar1Component", function () {
      return SimpleLeftSidebar1Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleLeftSidebar1Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleLeftSidebar1Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleLeftSidebar1Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleLeftSidebar1Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleLeftSidebar1Component;
    }();

    SimpleLeftSidebar1Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleLeftSidebar1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-left-sidebar-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-1.component.scss */
      "./src/app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component.scss")).default]
    })], SimpleLeftSidebar1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar2LeftSidebar2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9sZWZ0LXNpZGViYXItMi9sZWZ0LXNpZGViYXItMi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SimpleLeftSidebar2Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar2LeftSidebar2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar2Component", function () {
      return SimpleLeftSidebar2Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleLeftSidebar2Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleLeftSidebar2Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleLeftSidebar2Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleLeftSidebar2Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleLeftSidebar2Component;
    }();

    SimpleLeftSidebar2Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleLeftSidebar2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-left-sidebar-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-2.component.scss */
      "./src/app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component.scss")).default]
    })], SimpleLeftSidebar2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar3LeftSidebar3ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9sZWZ0LXNpZGViYXItMy9sZWZ0LXNpZGViYXItMy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SimpleLeftSidebar3Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar3LeftSidebar3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar3Component", function () {
      return SimpleLeftSidebar3Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleLeftSidebar3Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleLeftSidebar3Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleLeftSidebar3Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleLeftSidebar3Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleLeftSidebar3Component;
    }();

    SimpleLeftSidebar3Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleLeftSidebar3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-left-sidebar-4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-3.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-3.component.scss */
      "./src/app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component.scss")).default]
    })], SimpleLeftSidebar3Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar4LeftSidebar4ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9sZWZ0LXNpZGViYXItNC9sZWZ0LXNpZGViYXItNC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SimpleLeftSidebar4Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleLeftSidebar4LeftSidebar4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleLeftSidebar4Component", function () {
      return SimpleLeftSidebar4Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleLeftSidebar4Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleLeftSidebar4Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleLeftSidebar4Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleLeftSidebar4Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleLeftSidebar4Component;
    }();

    SimpleLeftSidebar4Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleLeftSidebar4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-left-sidebar-4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-sidebar-4.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-sidebar-4.component.scss */
      "./src/app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component.scss")).default]
    })], SimpleLeftSidebar4Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar1RightSidebar1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9yaWdodC1zaWRlYmFyLTEvcmlnaHQtc2lkZWJhci0xLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SimpleRightSidebar1Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar1RightSidebar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar1Component", function () {
      return SimpleRightSidebar1Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleRightSidebar1Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleRightSidebar1Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleRightSidebar1Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleRightSidebar1Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleRightSidebar1Component;
    }();

    SimpleRightSidebar1Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleRightSidebar1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-right-sidebar-1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-1.component.scss */
      "./src/app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component.scss")).default]
    })], SimpleRightSidebar1Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar2RightSidebar2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9yaWdodC1zaWRlYmFyLTIvcmlnaHQtc2lkZWJhci0yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SimpleRightSidebar2Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar2RightSidebar2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar2Component", function () {
      return SimpleRightSidebar2Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleRightSidebar2Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleRightSidebar2Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleRightSidebar2Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleRightSidebar2Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleRightSidebar2Component;
    }();

    SimpleRightSidebar2Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleRightSidebar2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-right-sidebar-2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-2.component.scss */
      "./src/app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component.scss")).default]
    })], SimpleRightSidebar2Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar3RightSidebar3ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9yaWdodC1zaWRlYmFyLTMvcmlnaHQtc2lkZWJhci0zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SimpleRightSidebar3Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar3RightSidebar3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar3Component", function () {
      return SimpleRightSidebar3Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleRightSidebar3Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleRightSidebar3Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleRightSidebar3Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleRightSidebar3Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleRightSidebar3Component;
    }();

    SimpleRightSidebar3Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleRightSidebar3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-right-sidebar-4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-3.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-3.component.scss */
      "./src/app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component.scss")).default]
    })], SimpleRightSidebar3Component);
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar4RightSidebar4ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvcGFnZS1sYXlvdXRzL3NpbXBsZS9yaWdodC1zaWRlYmFyLTQvcmlnaHQtc2lkZWJhci00LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SimpleRightSidebar4Component */

  /***/
  function srcAppMainUiPageLayoutsSimpleRightSidebar4RightSidebar4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleRightSidebar4Component", function () {
      return SimpleRightSidebar4Component;
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


    var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fuse/components/sidebar/sidebar.service */
    "./src/@fuse/components/sidebar/sidebar.service.ts");

    var SimpleRightSidebar4Component = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {FuseSidebarService} _fuseSidebarService
       */
      function SimpleRightSidebar4Component(_fuseSidebarService) {
        _classCallCheck(this, SimpleRightSidebar4Component);

        this._fuseSidebarService = _fuseSidebarService;
      } // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------

      /**
       * Toggle sidebar
       *
       * @param name
       */


      _createClass(SimpleRightSidebar4Component, [{
        key: "toggleSidebar",
        value: function toggleSidebar(name) {
          this._fuseSidebarService.getSidebar(name).toggleOpen();
        }
      }]);

      return SimpleRightSidebar4Component;
    }();

    SimpleRightSidebar4Component.ctorParameters = function () {
      return [{
        type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["FuseSidebarService"]
      }];
    };

    SimpleRightSidebar4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-right-sidebar-4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-sidebar-4.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-sidebar-4.component.scss */
      "./src/app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component.scss")).default]
    })], SimpleRightSidebar4Component);
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiTypographyTabsBlockquotesListsBlockquotesListsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #typography-blockquotes-lists .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n  max-height: 500px;\n}\n:host #typography-blockquotes-lists .source-code code {\n  background: none !important;\n}\n:host #typography-blockquotes-lists .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-blockquotes-lists .preview:last-child {\n  margin-bottom: 0;\n}\n:host #typography-blockquotes-lists .preview .mat-caption {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS90eXBvZ3JhcGh5L3RhYnMvYmxvY2txdW90ZXMtbGlzdHMvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL3NyY1xcYXBwXFxtYWluXFx1aVxcdHlwb2dyYXBoeVxcdGFic1xcYmxvY2txdW90ZXMtbGlzdHNcXGJsb2NrcXVvdGVzLWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3VpL3R5cG9ncmFwaHkvdGFicy9ibG9ja3F1b3Rlcy1saXN0cy9ibG9ja3F1b3Rlcy1saXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSFo7QURLWTtFQUNJLDJCQUFBO0FDSGhCO0FET1E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNMWjtBRE9ZO0VBQ0ksZ0JBQUE7QUNMaEI7QURRWTtFQUNJLG1CQUFBO0FDTmhCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi91aS90eXBvZ3JhcGh5L3RhYnMvYmxvY2txdW90ZXMtbGlzdHMvYmxvY2txdW90ZXMtbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgI3R5cG9ncmFwaHktYmxvY2txdW90ZXMtbGlzdHMge1xyXG5cclxuICAgICAgICAuc291cmNlLWNvZGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuXHJcbiAgICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJldmlldyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1jYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAjdHlwb2dyYXBoeS1ibG9ja3F1b3Rlcy1saXN0cyAuc291cmNlLWNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbjpob3N0ICN0eXBvZ3JhcGh5LWJsb2NrcXVvdGVzLWxpc3RzIC5zb3VyY2UtY29kZSBjb2RlIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgI3R5cG9ncmFwaHktYmxvY2txdW90ZXMtbGlzdHMgLnByZXZpZXcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI3R5cG9ncmFwaHktYmxvY2txdW90ZXMtbGlzdHMgLnByZXZpZXc6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG46aG9zdCAjdHlwb2dyYXBoeS1ibG9ja3F1b3Rlcy1saXN0cyAucHJldmlldyAubWF0LWNhcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: TypographyBlockquotesListsComponent */

  /***/
  function srcAppMainUiTypographyTabsBlockquotesListsBlockquotesListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyBlockquotesListsComponent", function () {
      return TypographyBlockquotesListsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypographyBlockquotesListsComponent =
    /**
     * Constructor
     */
    function TypographyBlockquotesListsComponent() {
      _classCallCheck(this, TypographyBlockquotesListsComponent);
    };

    TypographyBlockquotesListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'typography-blockquotes-lists',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blockquotes-lists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blockquotes-lists.component.scss */
      "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.scss")).default]
    })], TypographyBlockquotesListsComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/headings/headings.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/headings/headings.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiTypographyTabsHeadingsHeadingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #typography-headings .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-headings .source-code code {\n  background: none !important;\n}\n:host #typography-headings .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-headings .preview:last-child {\n  margin-bottom: 0;\n}\n:host #typography-headings .preview .mat-caption {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS90eXBvZ3JhcGh5L3RhYnMvaGVhZGluZ3MvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL3NyY1xcYXBwXFxtYWluXFx1aVxcdHlwb2dyYXBoeVxcdGFic1xcaGVhZGluZ3NcXGhlYWRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3VpL3R5cG9ncmFwaHkvdGFicy9oZWFkaW5ncy9oZWFkaW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0haO0FES1k7RUFDSSwyQkFBQTtBQ0hoQjtBRE9RO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTFo7QURPWTtFQUNJLGdCQUFBO0FDTGhCO0FEUVk7RUFDSSxtQkFBQTtBQ05oQiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvdHlwb2dyYXBoeS90YWJzL2hlYWRpbmdzL2hlYWRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAgICN0eXBvZ3JhcGh5LWhlYWRpbmdzIHtcclxuXHJcbiAgICAgICAgLnNvdXJjZS1jb2RlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuXHJcbiAgICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJldmlldyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1jYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAjdHlwb2dyYXBoeS1oZWFkaW5ncyAuc291cmNlLWNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI3R5cG9ncmFwaHktaGVhZGluZ3MgLnNvdXJjZS1jb2RlIGNvZGUge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdCAjdHlwb2dyYXBoeS1oZWFkaW5ncyAucHJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG59XG46aG9zdCAjdHlwb2dyYXBoeS1oZWFkaW5ncyAucHJldmlldzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0ICN0eXBvZ3JhcGh5LWhlYWRpbmdzIC5wcmV2aWV3IC5tYXQtY2FwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/headings/headings.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/headings/headings.component.ts ***!
    \************************************************************************/

  /*! exports provided: TypographyHeadingsComponent */

  /***/
  function srcAppMainUiTypographyTabsHeadingsHeadingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyHeadingsComponent", function () {
      return TypographyHeadingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypographyHeadingsComponent =
    /**
     * Constructor
     */
    function TypographyHeadingsComponent() {
      _classCallCheck(this, TypographyHeadingsComponent);
    };

    TypographyHeadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'typography-headings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./headings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/headings/headings.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./headings.component.scss */
      "./src/app/main/ui/typography/tabs/headings/headings.component.scss")).default]
    })], TypographyHeadingsComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/helpers/helpers.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiTypographyTabsHelpersHelpersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #typography-helpers .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-helpers .source-code code {\n  background: none !important;\n}\n:host #typography-helpers .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-helpers .preview:last-child {\n  margin-bottom: 0;\n}\n:host #typography-helpers .preview .mat-caption {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS90eXBvZ3JhcGh5L3RhYnMvaGVscGVycy9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXHVpXFx0eXBvZ3JhcGh5XFx0YWJzXFxoZWxwZXJzXFxoZWxwZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3VpL3R5cG9ncmFwaHkvdGFicy9oZWxwZXJzL2hlbHBlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNIWjtBREtZO0VBQ0ksMkJBQUE7QUNIaEI7QURPUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0xaO0FET1k7RUFDSSxnQkFBQTtBQ0xoQjtBRFFZO0VBQ0ksbUJBQUE7QUNOaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3VpL3R5cG9ncmFwaHkvdGFicy9oZWxwZXJzL2hlbHBlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgI3R5cG9ncmFwaHktaGVscGVycyB7XHJcblxyXG4gICAgICAgIC5zb3VyY2UtY29kZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcblxyXG4gICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiOmhvc3QgI3R5cG9ncmFwaHktaGVscGVycyAuc291cmNlLWNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI3R5cG9ncmFwaHktaGVscGVycyAuc291cmNlLWNvZGUgY29kZSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbjpob3N0ICN0eXBvZ3JhcGh5LWhlbHBlcnMgLnByZXZpZXcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI3R5cG9ncmFwaHktaGVscGVycyAucHJldmlldzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0ICN0eXBvZ3JhcGh5LWhlbHBlcnMgLnByZXZpZXcgLm1hdC1jYXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/helpers/helpers.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/helpers/helpers.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TypographyHelpersComponent */

  /***/
  function srcAppMainUiTypographyTabsHelpersHelpersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyHelpersComponent", function () {
      return TypographyHelpersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypographyHelpersComponent =
    /**
     * Constructor
     */
    function TypographyHelpersComponent() {
      _classCallCheck(this, TypographyHelpersComponent);
    };

    TypographyHelpersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'typography-helpers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./helpers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/helpers/helpers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./helpers.component.scss */
      "./src/app/main/ui/typography/tabs/helpers/helpers.component.scss")).default]
    })], TypographyHelpersComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiTypographyTabsInlineTextElementsInlineTextElementsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #typography-inline-text-elements .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-inline-text-elements .source-code code {\n  background: none !important;\n}\n:host #typography-inline-text-elements .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-inline-text-elements .preview:last-child {\n  margin-bottom: 0;\n}\n:host #typography-inline-text-elements .preview .mat-caption {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS90eXBvZ3JhcGh5L3RhYnMvaW5saW5lLXRleHQtZWxlbWVudHMvRDpcXENvZGVcXEJ1c2l0ZWNoXFxRV0NvbGxlY3RvcjZcXGZyb250ZW5kL3NyY1xcYXBwXFxtYWluXFx1aVxcdHlwb2dyYXBoeVxcdGFic1xcaW5saW5lLXRleHQtZWxlbWVudHNcXGlubGluZS10ZXh0LWVsZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3VpL3R5cG9ncmFwaHkvdGFicy9pbmxpbmUtdGV4dC1lbGVtZW50cy9pbmxpbmUtdGV4dC1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0haO0FES1k7RUFDSSwyQkFBQTtBQ0hoQjtBRE9RO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTFo7QURPWTtFQUNJLGdCQUFBO0FDTGhCO0FEUVk7RUFDSSxtQkFBQTtBQ05oQiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvdHlwb2dyYXBoeS90YWJzL2lubGluZS10ZXh0LWVsZW1lbnRzL2lubGluZS10ZXh0LWVsZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAgICN0eXBvZ3JhcGh5LWlubGluZS10ZXh0LWVsZW1lbnRzIHtcclxuXHJcbiAgICAgICAgLnNvdXJjZS1jb2RlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuXHJcbiAgICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJldmlldyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTgwcHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdC1jYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCAjdHlwb2dyYXBoeS1pbmxpbmUtdGV4dC1lbGVtZW50cyAuc291cmNlLWNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuOmhvc3QgI3R5cG9ncmFwaHktaW5saW5lLXRleHQtZWxlbWVudHMgLnNvdXJjZS1jb2RlIGNvZGUge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdCAjdHlwb2dyYXBoeS1pbmxpbmUtdGV4dC1lbGVtZW50cyAucHJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG59XG46aG9zdCAjdHlwb2dyYXBoeS1pbmxpbmUtdGV4dC1lbGVtZW50cyAucHJldmlldzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjpob3N0ICN0eXBvZ3JhcGh5LWlubGluZS10ZXh0LWVsZW1lbnRzIC5wcmV2aWV3IC5tYXQtY2FwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: TypographyInlineTextElementsComponent */

  /***/
  function srcAppMainUiTypographyTabsInlineTextElementsInlineTextElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyInlineTextElementsComponent", function () {
      return TypographyInlineTextElementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypographyInlineTextElementsComponent =
    /**
     * Constructor
     */
    function TypographyInlineTextElementsComponent() {
      _classCallCheck(this, TypographyInlineTextElementsComponent);
    };

    TypographyInlineTextElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'typography-inline-text-elements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inline-text-elements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inline-text-elements.component.scss */
      "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.scss")).default]
    })], TypographyInlineTextElementsComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiTypographyTabsMessageBoxesMessageBoxesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #typography-message-boxes .source-code {\n  position: relative;\n  margin-bottom: 24px;\n  min-height: 180px;\n  max-height: 500px;\n}\n:host #typography-message-boxes .source-code code {\n  background: none !important;\n}\n:host #typography-message-boxes .preview {\n  font-size: 16px;\n  padding: 16px;\n  margin-bottom: 24px;\n  min-height: 180px;\n}\n:host #typography-message-boxes .preview:last-child {\n  margin-bottom: 0;\n}\n:host #typography-message-boxes .preview .mat-caption {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi91aS90eXBvZ3JhcGh5L3RhYnMvbWVzc2FnZS1ib3hlcy9EOlxcQ29kZVxcQnVzaXRlY2hcXFFXQ29sbGVjdG9yNlxcZnJvbnRlbmQvc3JjXFxhcHBcXG1haW5cXHVpXFx0eXBvZ3JhcGh5XFx0YWJzXFxtZXNzYWdlLWJveGVzXFxtZXNzYWdlLWJveGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL3VpL3R5cG9ncmFwaHkvdGFicy9tZXNzYWdlLWJveGVzL21lc3NhZ2UtYm94ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0haO0FES1k7RUFDSSwyQkFBQTtBQ0hoQjtBRE9RO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTFo7QURPWTtFQUNJLGdCQUFBO0FDTGhCO0FEUVk7RUFDSSxtQkFBQTtBQ05oQiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvdHlwb2dyYXBoeS90YWJzL21lc3NhZ2UtYm94ZXMvbWVzc2FnZS1ib3hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAjdHlwb2dyYXBoeS1tZXNzYWdlLWJveGVzIHtcclxuXHJcbiAgICAgICAgLnNvdXJjZS1jb2RlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcblxyXG4gICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtY2FwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiOmhvc3QgI3R5cG9ncmFwaHktbWVzc2FnZS1ib3hlcyAuc291cmNlLWNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cbjpob3N0ICN0eXBvZ3JhcGh5LW1lc3NhZ2UtYm94ZXMgLnNvdXJjZS1jb2RlIGNvZGUge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdCAjdHlwb2dyYXBoeS1tZXNzYWdlLWJveGVzIC5wcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBtaW4taGVpZ2h0OiAxODBweDtcbn1cbjpob3N0ICN0eXBvZ3JhcGh5LW1lc3NhZ2UtYm94ZXMgLnByZXZpZXc6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG46aG9zdCAjdHlwb2dyYXBoeS1tZXNzYWdlLWJveGVzIC5wcmV2aWV3IC5tYXQtY2FwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TypographyMessageBoxesComponent */

  /***/
  function srcAppMainUiTypographyTabsMessageBoxesMessageBoxesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyMessageBoxesComponent", function () {
      return TypographyMessageBoxesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypographyMessageBoxesComponent =
    /**
     * Constructor
     */
    function TypographyMessageBoxesComponent() {
      _classCallCheck(this, TypographyMessageBoxesComponent);
    };

    TypographyMessageBoxesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'typography-message-boxes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-boxes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-boxes.component.scss */
      "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.scss")).default]
    })], TypographyMessageBoxesComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/typography/typography.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/main/ui/typography/typography.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainUiTypographyTypographyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/ui/typography/typography.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/main/ui/typography/typography.component.ts ***!
    \************************************************************/

  /*! exports provided: TypographyComponent */

  /***/
  function srcAppMainUiTypographyTypographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
      return TypographyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TypographyComponent =
    /**
     * Constructor
     */
    function TypographyComponent() {
      _classCallCheck(this, TypographyComponent);
    };

    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'typography',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./typography.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/ui/typography/typography.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./typography.component.scss */
      "./src/app/main/ui/typography/typography.component.scss")).default]
    })], TypographyComponent);
    /***/
  },

  /***/
  "./src/app/main/ui/typography/typography.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/main/ui/typography/typography.module.ts ***!
    \*********************************************************/

  /*! exports provided: UITypographyModule */

  /***/
  function srcAppMainUiTypographyTypographyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UITypographyModule", function () {
      return UITypographyModule;
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fuse/shared.module */
    "./src/@fuse/shared.module.ts");
    /* harmony import */


    var _fuse_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fuse/components */
    "./src/@fuse/components/index.ts");
    /* harmony import */


    var app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/main/ui/typography/typography.component */
    "./src/app/main/ui/typography/typography.component.ts");
    /* harmony import */


    var app_main_ui_typography_tabs_headings_headings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/ui/typography/tabs/headings/headings.component */
    "./src/app/main/ui/typography/tabs/headings/headings.component.ts");
    /* harmony import */


    var app_main_ui_typography_tabs_inline_text_elements_inline_text_elements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component */
    "./src/app/main/ui/typography/tabs/inline-text-elements/inline-text-elements.component.ts");
    /* harmony import */


    var app_main_ui_typography_tabs_blockquotes_lists_blockquotes_lists_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component */
    "./src/app/main/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component.ts");
    /* harmony import */


    var app_main_ui_typography_tabs_message_boxes_message_boxes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! app/main/ui/typography/tabs/message-boxes/message-boxes.component */
    "./src/app/main/ui/typography/tabs/message-boxes/message-boxes.component.ts");
    /* harmony import */


    var app_main_ui_typography_tabs_helpers_helpers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! app/main/ui/typography/tabs/helpers/helpers.component */
    "./src/app/main/ui/typography/tabs/helpers/helpers.component.ts");

    var routes = [{
      path: 'typography',
      component: app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"]
    }];

    var UITypographyModule = function UITypographyModule() {
      _classCallCheck(this, UITypographyModule);
    };

    UITypographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [app_main_ui_typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"], app_main_ui_typography_tabs_headings_headings_component__WEBPACK_IMPORTED_MODULE_8__["TypographyHeadingsComponent"], app_main_ui_typography_tabs_inline_text_elements_inline_text_elements_component__WEBPACK_IMPORTED_MODULE_9__["TypographyInlineTextElementsComponent"], app_main_ui_typography_tabs_blockquotes_lists_blockquotes_lists_component__WEBPACK_IMPORTED_MODULE_10__["TypographyBlockquotesListsComponent"], app_main_ui_typography_tabs_message_boxes_message_boxes_component__WEBPACK_IMPORTED_MODULE_11__["TypographyMessageBoxesComponent"], app_main_ui_typography_tabs_helpers_helpers_component__WEBPACK_IMPORTED_MODULE_12__["TypographyHelpersComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"], _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseHighlightModule"]]
    })], UITypographyModule);
    /***/
  },

  /***/
  "./src/app/main/ui/ui.module.ts":
  /*!**************************************!*\
    !*** ./src/app/main/ui/ui.module.ts ***!
    \**************************************/

  /*! exports provided: UIModule */

  /***/
  function srcAppMainUiUiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UIModule", function () {
      return UIModule;
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


    var app_main_ui_cards_cards_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/main/ui/cards/cards.module */
    "./src/app/main/ui/cards/cards.module.ts");
    /* harmony import */


    var app_main_ui_forms_forms_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/main/ui/forms/forms.module */
    "./src/app/main/ui/forms/forms.module.ts");
    /* harmony import */


    var app_main_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/main/ui/icons/icons.module */
    "./src/app/main/ui/icons/icons.module.ts");
    /* harmony import */


    var app_main_ui_typography_typography_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/main/ui/typography/typography.module */
    "./src/app/main/ui/typography/typography.module.ts");
    /* harmony import */


    var app_main_ui_helper_classes_helper_classes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/main/ui/helper-classes/helper-classes.module */
    "./src/app/main/ui/helper-classes/helper-classes.module.ts");
    /* harmony import */


    var app_main_ui_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/main/ui/page-layouts/page-layouts.module */
    "./src/app/main/ui/page-layouts/page-layouts.module.ts");
    /* harmony import */


    var app_main_ui_colors_colors_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/main/ui/colors/colors.module */
    "./src/app/main/ui/colors/colors.module.ts");

    var UIModule = function UIModule() {
      _classCallCheck(this, UIModule);
    };

    UIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [app_main_ui_cards_cards_module__WEBPACK_IMPORTED_MODULE_2__["UICardsModule"], app_main_ui_forms_forms_module__WEBPACK_IMPORTED_MODULE_3__["UIFormsModule"], app_main_ui_icons_icons_module__WEBPACK_IMPORTED_MODULE_4__["UIIconsModule"], app_main_ui_typography_typography_module__WEBPACK_IMPORTED_MODULE_5__["UITypographyModule"], app_main_ui_helper_classes_helper_classes_module__WEBPACK_IMPORTED_MODULE_6__["UIHelperClassesModule"], app_main_ui_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["UIPageLayoutsModule"], app_main_ui_colors_colors_module__WEBPACK_IMPORTED_MODULE_8__["UIColorsModule"]]
    })], UIModule);
    /***/
  }
}]);
//# sourceMappingURL=main-ui-ui-module-es5.js.map