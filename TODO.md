### TODOs
| Filename | line # | TODO
|:------|:------:|:------
| node_modules\babylon\lib\index.js | 21 | 
| node_modules\babylon\lib\index.js | 25 | 
| node_modules\babylon\lib\index.js | 1990 | 
| node_modules\babylon\lib\index.js | 3325 | fix this
| node_modules\babylon\lib\index.js | 4868 | better type. Node is an N.AnyExport.
| node_modules\babylon\lib\index.js | 6484 | This should be a type error. Passing in a SourceLocation, and it expects a Position.
| node_modules\babylon\lib\index.js | 7966 | actually a bit more complex in TypeScript, but shouldn't matter.
| node_modules\babylon\lib\index.js | 7975 | Would be nice to avoid lookahead. Want a hasLineBreakUpNext() method...
| node_modules\bson\browser_build\bson.js | 6018 | add validation descriptor w/o calling accessors
| node_modules\bson\browser_build\bson.js | 9422 | Legacy, not needed anymore. Remove in next major version.
| node_modules\bson\browser_build\bson.js | 14093 | implementing a custom parsing for this, or refactoring the regex would yield
| node_modules\catharsis\lib\describe.js | 355 | this hardcodes the order and placement of functionNew and functionThis; need to move
| node_modules\debug\src\browser.js | 36 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\ecc-jsbn\lib\ec.js | 15 | if(x.compareTo(q) >= 0) error
| node_modules\ecc-jsbn\lib\ec.js | 78 | compression flag
| node_modules\ecc-jsbn\lib\ec.js | 162 | optimized handling of constants
| node_modules\ecc-jsbn\lib\ec.js | 189 | modularize the multiplication algorithm
| node_modules\ecc-jsbn\lib\sec.js | 150 | make this into a proper hashtable
| node_modules\entities\lib\decode.js | 46 | consider creating a merged map
| node_modules\entities\lib\encode.js | 30 | add ranges
| node_modules\express\lib\request.js | 448 | change req.host to return host in next major
| node_modules\form-data\lib\form_data.js | 115 | Looks like there is bug in Node fs.createReadStream
| node_modules\gulp\bin\gulp.js | 181 | batch these
| node_modules\htmlparser2\lib\FeedHandler.js | 5 | make this a streamable handler
| node_modules\htmlparser2\lib\Tokenizer.js | 627 | make events conditional
| node_modules\htmlparser2\lib\Tokenizer.js | 880 | add a way to remove current tag
| node_modules\iconv-lite\encodings\dbcs-codec.js | 347 | What if we have no default? (resCode == undefined)
| node_modules\iconv-lite\encodings\dbcs-codec.js | 471 | Callback with seq.
| node_modules\iconv-lite\encodings\dbcs-data.js | 63 | KDDI extension to Shift_JIS
| node_modules\iconv-lite\encodings\dbcs-data.js | 64 | IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
| node_modules\iconv-lite\encodings\dbcs-data.js | 65 | IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
| node_modules\iconv-lite\encodings\dbcs-data.js | 80 | Euro = 0x80 in cp936, but not in GBK (where it's valid but undefined)
| node_modules\iconv-lite\encodings\dbcs-data.js | 104 | Support GB18030 (~27000 chars + whole unicode mapping, cp54936)
| node_modules\iconv-lite\lib\extend-node.js | 166 | Set _charsWritten.
| node_modules\immutable\dist\immutable.js | 2255 | seems like these methods are very similar
| node_modules\ink-docstrap\template\publish.js | 841 | move the tutorial functions to templateHelper.js
| node_modules\jquery\dist\jquery.js | 753 | identify versions
| node_modules\jquery\dist\jquery.js | 767 | identify versions
| node_modules\jquery\dist\jquery.js | 4234 | Now that all calls to _data and _removeData have been replaced
| node_modules\jquery\dist\jquery.slim.js | 753 | identify versions
| node_modules\jquery\dist\jquery.slim.js | 767 | identify versions
| node_modules\jquery\dist\jquery.slim.js | 4234 | Now that all calls to _data and _removeData have been replaced
| node_modules\jquery\src\data.js | 85 | Now that all calls to _data and _removeData have been replaced
| node_modules\js-base64\test-moment\moment.js | 363 | Remove "ordinalParse" fallback in next major release.
| node_modules\js-base64\test-moment\moment.js | 1007 | add sorting
| node_modules\js-base64\test-moment\moment.js | 1047 | Another silent failure?
| node_modules\js-base64\test-moment\moment.js | 1839 | Find a better way to register and load all the locales in Node
| node_modules\js-base64\test-moment\moment.js | 2108 | We need to take the current isoWeekYear, but that depends on
| node_modules\js-base64\test-moment\moment.js | 2283 | Replace the vanilla JS Date object with an indepentent day-of-week check.
| node_modules\js-base64\test-moment\moment.js | 2387 | Move this to another part of the creation flow to prevent circular deps
| node_modules\js-base64\test-moment\moment.js | 2682 | Use [].sort instead?
| node_modules\js-base64\test-moment\moment.js | 3113 | remove 'name' arg after deprecation is removed
| node_modules\js-base64\test-moment\moment.js | 3668 | Remove "ordinalParse" fallback in next major release.
| node_modules\js-base64\test-moment\moment.js | 4226 | Use this.as('ms')?
| node_modules\js-yaml\dist\js-yaml.js | 1542 | rework to inline fn with no type cast?
| node_modules\js-yaml\dist\js-yaml.js | 2896 | Add tag format check.
| node_modules\localtunnel\lib\Tunnel.js | 47 | @shtylman don't print to stdout?
| node_modules\localtunnel\lib\TunnelCluster.js | 77 | some languages have single threaded servers which makes opening up
| node_modules\lodash\function\debounce.js | 62 | Changes.cancel();
| node_modules\moment\min\locales.js | 3290 | Return 'e' when day of month > 1. Move this case inside
| node_modules\moment\min\moment-with-locales.js | 357 | Remove "ordinalParse" fallback in next major release.
| node_modules\moment\min\moment-with-locales.js | 1000 | add sorting
| node_modules\moment\min\moment-with-locales.js | 1040 | Another silent failure?
| node_modules\moment\min\moment-with-locales.js | 1828 | Find a better way to register and load all the locales in Node
| node_modules\moment\min\moment-with-locales.js | 2108 | We need to take the current isoWeekYear, but that depends on
| node_modules\moment\min\moment-with-locales.js | 2283 | Replace the vanilla JS Date object with an indepentent day-of-week check.
| node_modules\moment\min\moment-with-locales.js | 2387 | Move this to another part of the creation flow to prevent circular deps
| node_modules\moment\min\moment-with-locales.js | 2682 | Use [].sort instead?
| node_modules\moment\min\moment-with-locales.js | 3113 | remove 'name' arg after deprecation is removed
| node_modules\moment\min\moment-with-locales.js | 3668 | Remove "ordinalParse" fallback in next major release.
| node_modules\moment\min\moment-with-locales.js | 4196 | Use this.as('ms')?
| node_modules\moment\min\moment-with-locales.js | 7781 | Return 'e' when day of month > 1. Move this case inside
| node_modules\moment\locale\fr.js | 54 | Return 'e' when day of month > 1. Move this case inside
| node_modules\mongodb\lib\cursor.js | 1228 | refactor this logic into core
| node_modules\mongoose\lib\aggregate.js | 503 | refactor to reuse the query builder logic
| node_modules\mongoose\lib\query.js | 3520 | refactor
| node_modules\mquery\lib\mquery.js | 3040 | 
| node_modules\ng-file-upload\dist\FileAPI.js | 1310 | error
| node_modules\ng-file-upload\dist\FileAPI.js | 2202 | Оло-ло, нужно рефакторить это место
| node_modules\ngmap\controllers\map-controller.js | 219 | it's for backward compatibiliy. will be removed
| node_modules\ngmap\directives\drawing-manager.js | 22 | Add remove button.
| node_modules\ngmap\directives\info-window.js | 191 | DEPRECATED
| node_modules\node-sass\lib\index.js | 462 | remove for 4.0
| node_modules\node-sass\test\types.js | 242 | I'm not sure this object works well, it likely needs to be fleshed out more...
| node_modules\node-sass\test\types.js | 249 | I'm not sure this object works well, it likely needs to be fleshed out more...
| node_modules\node-sass\test\types.js | 294 | TypeError
| node_modules\node-sass\test\types.js | 302 | TypeError
| node_modules\node-sass\test\types.js | 401 | more complex set/get value scenarios
| node_modules\node-sass\test\types.js | 432 | TypeError
| node_modules\node-sass\test\types.js | 510 | TypeError
| node_modules\node-sass\test\types.js | 518 | TypeError
| node_modules\node-sass\test\types.js | 610 | TypeError
| node_modules\readable-stream\lib\_stream_writable.js | 289 | defer error events consistently everywhere, not just the cb
| node_modules\request\lib\auth.js | 52 | More complete implementation of RFC 2617.
| node_modules\sanitize-html\dist\sanitize-html.js | 926 | Legacy, not needed anymore. Remove in next major version.
| node_modules\sanitize-html\dist\sanitize-html.js | 3770 | consider creating a merged map
| node_modules\sanitize-html\dist\sanitize-html.js | 3855 | add ranges
| node_modules\sanitize-html\dist\sanitize-html.js | 4275 | make this a streamable handler
| node_modules\sanitize-html\dist\sanitize-html.js | 5413 | make events conditional
| node_modules\sanitize-html\dist\sanitize-html.js | 5666 | add a way to remove current tag
| node_modules\sanitize-html\dist\sanitize-html.js | 10505 | make this comparison case-insensitive on windows?
| node_modules\sanitize-html\dist\sanitize-html.js | 20956 | @bmeurer Change this back to const once hole checks are
| node_modules\sanitize-html\dist\sanitize-html.js | 22405 | defer error events consistently everywhere, not just the cb
| node_modules\sanitize-html\dist\sanitize-html.js | 23281 | Handling all encodings inside a single object makes it very difficult
| node_modules\sanitize-html\dist\sanitize-html.js | 23283 | There should be a utf8-strict encoding that rejects invalid UTF-8 code
| node_modules\stylus\lib\parser.js | 2054 | TernaryOp :)
| node_modules\svgo\plugins\convertPathData.js | 71 | get rid of functions returns
| node_modules\svgo\plugins\convertShapeToPath.js | 42 | Calculate sizes from % and non-px units if possible.
| node_modules\svgo\plugins\_collections.js | 514 | in - 'If no value is provided and this is the first filter primitive,
| node_modules\svgo\plugins\_collections.js | 608 | divisor - 'The default value is the sum of all values in kernelMatrix,
| node_modules\svgo\plugins\_collections.js | 612 | targetX - 'By default, the convolution matrix is centered in X over each
| node_modules\svgo\plugins\_collections.js | 617 | kernelUnitLength - 'The first number is the <dx> value. The second number
| node_modules\svgo\plugins\_collections.js | 655 | 'exactly one light source element, in any order'
| node_modules\svgo\plugins\_collections.js | 913 | exactly one 'light source element'
| node_modules\svgo\plugins\_collections.js | 1107 | "at most one 'font-face-src' element"
| node_modules\svgo\plugins\_collections.js | 1111 | empty content
| node_modules\tough-cookie\lib\cookie.js | 1193 | persist lastAccessed
| node_modules\ua-parser-js\src\ua-parser.js | 639 | move to string map
| node_modules\xmlhttprequest-ssl\lib\XMLHttpRequest.js | 271 | Make this case insensitive
| node_modules\xmlhttprequest-ssl\lib\XMLHttpRequest.js | 423 | Prevent looped redirects
| node_modules\xmlhttprequest-ssl\lib\XMLHttpRequest.js | 452 | Check if an XHR event needs to be fired here
| node_modules\xmlhttprequest-ssl\lib\XMLHttpRequest.js | 646 | figure out InspectorInstrumentation::didLoadXHR(cookie)
| node_modules\yargs\lib\command.js | 207 | move positional arg logic to yargs-parser and remove this duplication
| node_modules\yargs\lib\validation.js | 159 | case-insensitive configurability
| node_modules\@uirouter\angularjs\release\angular-ui-router.js | 2610 | explicitly make this user configurable
| node_modules\@uirouter\angularjs\release\angular-ui-router.js | 3083 | Also compare parameters
| node_modules\@uirouter\angularjs\release\angular-ui-router.js | 5034 | typeof?
| node_modules\@uirouter\angularjs\release\angular-ui-router.js | 5634 | Validate incoming view name with a regexp to allow:
| node_modules\@uirouter\angularjs\release\angular-ui-router.js | 9851 | Use $view service as a central point for registering component-level hooks
| node_modules\@uirouter\angularjs\release\ui-router-angularjs.js | 1863 | Use $view service as a central point for registering component-level hooks
| node_modules\@uirouter\core\_bundles\ui-router-core.js | 2603 | explicitly make this user configurable
| node_modules\@uirouter\core\_bundles\ui-router-core.js | 3076 | Also compare parameters
| node_modules\@uirouter\core\_bundles\ui-router-core.js | 5027 | typeof?
| node_modules\@uirouter\core\_bundles\ui-router-core.js | 5627 | Validate incoming view name with a regexp to allow:
| node_modules\argparse\lib\help\formatter.js | 10 | add [additonal formatters][1]
| node_modules\body-parser\lib\types\json.js | 74 | maybe make this configurable or part of "strict" option
| node_modules\body-parser\node_modules\debug\browser.js | 37 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\bootstrap\dist\js\bootstrap.bundle.js | 4688 | @fat these should probably be refactored out of modal.js
| node_modules\bootstrap\dist\js\bootstrap.bundle.js | 5840 | @fat remove sketch reliance on jQuery position/offset
| node_modules\bootstrap\dist\js\bootstrap.js | 2254 | @fat these should probably be refactored out of modal.js
| node_modules\bootstrap\dist\js\bootstrap.js | 3406 | @fat remove sketch reliance on jQuery position/offset
| node_modules\bootstrap\js\dist\modal.js | 397 | @fat these should probably be refactored out of modal.js
| node_modules\bootstrap\js\dist\scrollspy.js | 115 | @fat remove sketch reliance on jQuery position/offset
| node_modules\browser-sync\client\dist\index.js | 153 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\bson\lib\bson\decimal128.js | 239 | implementing a custom parsing for this, or refactoring the regex would yield
| node_modules\bootstrap\js\src\modal.js | 401 | @fat these should probably be refactored out of modal.js
| node_modules\bootstrap\js\src\scrollspy.js | 132 | @fat remove sketch reliance on jQuery position/offset
| node_modules\connect\node_modules\debug\browser.js | 37 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\csso\lib\parser\index.js | 190 | remove it as wrong thing
| node_modules\csso\lib\parser\index.js | 1594 | remove '=' since it's wrong operator, but theat as operator
| node_modules\duplexer2\node_modules\string_decoder\index.js | 43 | Handling all encodings inside a single object makes it very difficult
| node_modules\duplexer2\node_modules\string_decoder\index.js | 45 | There should be a utf8-strict encoding that rejects invalid UTF-8 code
| node_modules\express\node_modules\send\index.js | 791 | this is all lame, refactor meeee
| node_modules\finalhandler\node_modules\debug\browser.js | 37 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\fs-extra\lib\mkdirs\win32.js | 13 | expand to include the rest
| node_modules\glob\node_modules\minimatch\browser.js | 461 | It would probably be faster to determine this
| node_modules\glob\node_modules\minimatch\minimatch.js | 460 | It would probably be faster to determine this
| node_modules\glob-stream\node_modules\minimatch\browser.js | 461 | It would probably be faster to determine this
| node_modules\glob-stream\node_modules\minimatch\minimatch.js | 460 | It would probably be faster to determine this
| node_modules\glob-stream\node_modules\string_decoder\index.js | 43 | Handling all encodings inside a single object makes it very difficult
| node_modules\glob-stream\node_modules\string_decoder\index.js | 45 | There should be a utf8-strict encoding that rejects invalid UTF-8 code
| node_modules\globby\node_modules\glob\common.js | 106 | is an absolute `cwd` supposed to be resolved against `root`?
| node_modules\gulp-connect\node_modules\send\index.js | 685 | this is all lame, refactor meeee
| node_modules\js-yaml\lib\js-yaml\loader.js | 591 | rework to inline fn with no type cast?
| node_modules\js-yaml\lib\js-yaml\type.js | 45 | Add tag format check.
| node_modules\jsdoc\lib\jsdoc\augment.js | 180 | try to reduce overlap with similar methods
| node_modules\jsdoc\lib\jsdoc\augment.js | 217 | this will fail on longnames like: MyClass#"quoted#Longname"
| node_modules\jsdoc\lib\jsdoc\augment.js | 290 | why do we run a map if we always shorten the same value? this looks like a bug...
| node_modules\jsdoc\lib\jsdoc\augment.js | 306 | try to reduce overlap with similar methods
| node_modules\jsdoc\lib\jsdoc\augment.js | 373 | try to reduce overlap with similar methods
| node_modules\jsdoc\lib\jsdoc\borrow.js | 13 | add the index at parse time, so we don't have to iterate over all the doclets again
| node_modules\jsdoc\lib\jsdoc\borrow.js | 60 | this will fail on longnames like '"Foo#bar".baz'
| node_modules\jsdoc\lib\jsdoc\doclet.js | 45 | set this elsewhere (maybe jsdoc/src/astnode.getInfo)
| node_modules\jsdoc\lib\jsdoc\name.js | 83 | deprecate exports.resolve in favor of a better name
| node_modules\jsdoc\lib\jsdoc\name.js | 98 | check for specific doclet.kind values (probably function, class, and module)
| node_modules\jsdoc\lib\jsdoc\name.js | 223 | docs
| node_modules\jsdoc\lib\jsdoc\name.js | 259 | docs
| node_modules\jsdoc\lib\jsdoc\name.js | 337 | deprecate exports.shorten in favor of a better name
| node_modules\jsdoc\lib\jsdoc\name.js | 349 | docs
| node_modules\jsdoc\lib\jsdoc\name.js | 359 | docs
| node_modules\jsdoc\lib\jsdoc\name.js | 394 | docs
| node_modules\jsdoc\lib\jsdoc\name.js | 482 | deprecate exports.splitName in favor of a better name
| node_modules\jsdoc\lib\jsdoc\schema.js | 139 | get this from a real enum somewhere
| node_modules\jsdoc\lib\jsdoc\schema.js | 163 | get this from a real enum somewhere
| node_modules\jsdoc\lib\jsdoc\schema.js | 220 | define this as an enumeration elsewhere
| node_modules\jsdoc\lib\jsdoc\schema.js | 385 | define this as an enumeration elsewhere
| node_modules\jsdoc\lib\jsdoc\schema.js | 504 | make these an enumeration
| node_modules\jsdoc\templates\default\publish.js | 675 | move the tutorial functions to templateHelper.js
| node_modules\mongodb\lib\bulk\common.js | 202 | Something better
| node_modules\mongodb\lib\bulk\ordered.js | 227 | Bring from driver information in isMaster
| node_modules\moment\src\locale\fr.js | 50 | Return 'e' when day of month > 1. Move this case inside
| node_modules\mongodb-core\lib\connection\pool.js | 1193 | reenable when sessions development is complete
| node_modules\mongodb-core\lib\topologies\replset.js | 1188 | once we drop Node 4, use destructuring either here or in arguments.
| node_modules\mongodb-core\lib\topologies\shared.js | 385 | 
| node_modules\mongoose\lib\error\divergentArray.js | 23 | write up a docs page (FAQ) and link to it
| node_modules\mongoose\lib\types\documentarray.js | 153 | cast to the _id based on schema for proper comparison
| node_modules\mquery\lib\collection\node.js | 144 | 
| node_modules\ngmap\build\scripts\ng-map.debug.js | 245 | it's for backward compatibiliy. will be removed
| node_modules\ngmap\build\scripts\ng-map.debug.js | 860 | Add remove button.
| node_modules\ngmap\build\scripts\ng-map.debug.js | 1270 | DEPRECATED
| node_modules\ngmap\build\scripts\ng-map.js | 254 | it's for backward compatibiliy. will be removed
| node_modules\ngmap\build\scripts\ng-map.js | 878 | Add remove button.
| node_modules\ngmap\build\scripts\ng-map.js | 1279 | DEPRECATED
| node_modules\ngmap\build\scripts\ng-map.no-dependency.js | 254 | it's for backward compatibiliy. will be removed
| node_modules\ngmap\build\scripts\ng-map.no-dependency.js | 878 | Add remove button.
| node_modules\ngmap\build\scripts\ng-map.no-dependency.js | 1279 | DEPRECATED
| node_modules\ngmap\spec\directives\map_spec_bak.js | 64 | need to test events, but don't know how to detect event in a map
| node_modules\ngmap\spec\directives\map_spec_bak.js | 68 | need to test observers
| node_modules\ngmap\spec\directives\marker_spec_bak.js | 55 | need to test marker events, but don't know don't know how to get events of a marker
| node_modules\ngmap\spec\directives\marker_spec_bak.js | 59 | need to test marker observers
| node_modules\ngmap\spec\directives\shape_spec_bak.js | 47 | should test events, but don't know how to get events of a shape
| node_modules\ngmap\spec\directives\shape_spec_bak.js | 51 | need to test observers
| node_modules\ngmap\spec\e2e\testapp_spec.js | 32 | apply retry when it has console error. e.g. google image 404 error
| node_modules\ngmap\spec\lib\angular-mocks.js | 46 | @vojta remove this temporary api
| node_modules\ngmap\spec\lib\angular-mocks.js | 876 | @i this prevents methods being logged,
| node_modules\ngmap\spec\lib\angular-mocks.js | 1156 | @vojta change params to: method, url, data, headers, callback
| node_modules\ngmap\spec\lib\angular.js | 1620 | @misko this function needs to be removed
| node_modules\ngmap\spec\lib\angular.js | 1646 | @perf just check if all items in `nodes` are siblings and if they are return the original
| node_modules\ngmap\spec\lib\angular.js | 2973 | do we still need this?
| node_modules\ngmap\spec\lib\angular.js | 3037 | this is a hack for angularMocks/clearDataCache that makes it possible to deregister all
| node_modules\ngmap\spec\lib\angular.js | 4914 | @vojta remove this temporary api
| node_modules\ngmap\spec\lib\angular.js | 4947 | @vojta prefix this method with $$ ?
| node_modules\ngmap\spec\lib\angular.js | 5167 | @vojta refactor to use node's syntax for events
| node_modules\ngmap\spec\lib\angular.js | 6753 | decide whether or not to throw an error if "class"
| node_modules\ngmap\spec\lib\angular.js | 7002 | Make this detect MathML as well...
| node_modules\ngmap\spec\lib\angular.js | 7622 | merge `controllers` and `elementControllers` into single object.
| node_modules\ngmap\spec\lib\angular.js | 8213 | @perf what's this document fragment for? is it needed? can we at least reuse it?
| node_modules\ngmap\spec\lib\angular.js | 9784 | @vojta fix the signature
| node_modules\ngmap\spec\lib\angular.js | 11376 | @vojta rewrite link when opening in new tab/window (in legacy browser)
| node_modules\ngmap\spec\lib\angular.js | 12166 | @size maybe we should not support multiple statements?
| node_modules\ngmap\spec\lib\angular.js | 12787 | @docs add a note to docs that by implementing valueOf even objects and arrays can
| node_modules\ngmap\spec\lib\angular.js | 20033 | @matsko implement validateLater to reduce number of validations
| node_modules\ngmap\spec\lib\angular.js | 20049 | @matsko implement validateLater to reduce number of validations
| node_modules\ngmap\spec\lib\angular.js | 23409 | @perf why not move this to the action fn?
| node_modules\ngmap\spec\lib\angular.js | 24480 | @perf generate setters to shave off ~40ms or 1-1.5%
| node_modules\ngmap\spec\lib\angular.js | 24687 | @perf support naked previousNode in `enter` to avoid creation of jqLite wrapper?
| node_modules\ngmap\spec\lib\angular.js | 25889 | Add a test for this case
| node_modules\ngmap\spec\services\attr2_options_spec.js | 184 | 
| node_modules\ngmap\spec\services\attr2_options_spec.js | 190 | 
| node_modules\ngmap\spec\services\attr2_options_spec.js | 196 | 
| node_modules\ngmap\spec\services\attr2_options_spec.js | 201 | need some mock jobs for object, NavigatorGeolocation and GeoCoder
| node_modules\ngmap\spec\services\attr2_options_spec.js | 205 | needs some mock jobs for object and attrs
| node_modules\ngmap\testapp\lib\angular-ui-router.js | 1249 | in 1.0, make string .is() return false if value is undefined/null by default.
| node_modules\ngmap\testapp\lib\angular-ui-router.js | 1998 | Optimize groups of rules with non-empty prefix into some sort of decision tree
| node_modules\ngmap\testapp\lib\angular-ui-router.js | 2003 | Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
| node_modules\ngmap\testapp\lib\angular-ui-router.js | 3180 | We may not want to bump 'transition' if we're called from a location change
| node_modules\ngmap\testapp\lib\angular.js | 1620 | @misko this function needs to be removed
| node_modules\ngmap\testapp\lib\angular.js | 1646 | @perf just check if all items in `nodes` are siblings and if they are return the original
| node_modules\ngmap\testapp\lib\angular.js | 2973 | do we still need this?
| node_modules\ngmap\testapp\lib\angular.js | 3037 | this is a hack for angularMocks/clearDataCache that makes it possible to deregister all
| node_modules\ngmap\testapp\lib\angular.js | 4914 | @vojta remove this temporary api
| node_modules\ngmap\testapp\lib\angular.js | 4947 | @vojta prefix this method with $$ ?
| node_modules\ngmap\testapp\lib\angular.js | 5167 | @vojta refactor to use node's syntax for events
| node_modules\ngmap\testapp\lib\angular.js | 6753 | decide whether or not to throw an error if "class"
| node_modules\ngmap\testapp\lib\angular.js | 7002 | Make this detect MathML as well...
| node_modules\ngmap\testapp\lib\angular.js | 7622 | merge `controllers` and `elementControllers` into single object.
| node_modules\ngmap\testapp\lib\angular.js | 8213 | @perf what's this document fragment for? is it needed? can we at least reuse it?
| node_modules\ngmap\testapp\lib\angular.js | 9784 | @vojta fix the signature
| node_modules\ngmap\testapp\lib\angular.js | 11376 | @vojta rewrite link when opening in new tab/window (in legacy browser)
| node_modules\ngmap\testapp\lib\angular.js | 12166 | @size maybe we should not support multiple statements?
| node_modules\ngmap\testapp\lib\angular.js | 12787 | @docs add a note to docs that by implementing valueOf even objects and arrays can
| node_modules\ngmap\testapp\lib\angular.js | 20033 | @matsko implement validateLater to reduce number of validations
| node_modules\ngmap\testapp\lib\angular.js | 20049 | @matsko implement validateLater to reduce number of validations
| node_modules\ngmap\testapp\lib\angular.js | 23409 | @perf why not move this to the action fn?
| node_modules\ngmap\testapp\lib\angular.js | 24480 | @perf generate setters to shave off ~40ms or 1-1.5%
| node_modules\ngmap\testapp\lib\angular.js | 24687 | @perf support naked previousNode in `enter` to avoid creation of jqLite wrapper?
| node_modules\ngmap\testapp\lib\angular.js | 25889 | Add a test for this case
| node_modules\ngmap\testapp\lib\prettify.js | 240 | maybe style special characters inside a regexp as punctuation.
| node_modules\ngmap\testapp\lib\prettify.js | 458 | handle letters in numeric escapes.
| node_modules\ngmap\testapp\lib\prettify.js | 557 | handle tabs here?
| node_modules\ngmap\testapp\lib\prettify.js | 947 | @mikesamuel recognize non-latin letters and numerals in idents
| node_modules\ngmap\testapp\lib\prettify.js | 1215 | Possibly optimize by using '' if there's no flicker.
| node_modules\node-gyp\node_modules\glob\common.js | 106 | is an absolute `cwd` supposed to be resolved against `root`?
| node_modules\node-sass\node_modules\glob\common.js | 106 | is an absolute `cwd` supposed to be resolved against `root`?
| node_modules\oclazyload\bower_components\angular\angular.js | 2005 | @misko this function needs to be removed
| node_modules\oclazyload\bower_components\angular\angular.js | 2031 | @perf update `nodes` instead of creating a new object?
| node_modules\oclazyload\bower_components\angular\angular.js | 3539 | do we still need this?
| node_modules\oclazyload\bower_components\angular\angular.js | 3606 | this is a hack for angularMocks/clearDataCache that makes it possible to deregister all
| node_modules\oclazyload\bower_components\angular\angular.js | 4039 | @gkalpak Remove workaround when Chrome v52 is released
| node_modules\oclazyload\bower_components\angular\angular.js | 6101 | @vojta remove this temporary api
| node_modules\oclazyload\bower_components\angular\angular.js | 6318 | @vojta refactor to use node's syntax for events
| node_modules\oclazyload\bower_components\angular\angular.js | 8091 | @pete remove the following `forEach` before we release 1.6.0
| node_modules\oclazyload\bower_components\angular\angular.js | 8470 | decide whether or not to throw an error if "class"
| node_modules\oclazyload\bower_components\angular\angular.js | 8756 | Make this detect MathML as well...
| node_modules\oclazyload\bower_components\angular\angular.js | 9289 | remove this line after Chrome 50 has been released
| node_modules\oclazyload\bower_components\angular\angular.js | 12264 | @vojta prefix this method with $$ ?
| node_modules\oclazyload\bower_components\angular\angular.js | 12324 | @vojta fix the signature
| node_modules\oclazyload\bower_components\angular\angular.js | 12590 | this is the same as the constantWatchDelegate in parse.js
| node_modules\oclazyload\bower_components\angular\angular.js | 14038 | @vojta rewrite link when opening in new tab/window (in legacy browser)
| node_modules\oclazyload\bower_components\angular\angular.js | 14831 | check that it is a constant
| node_modules\oclazyload\bower_components\angular\angular.js | 16132 | @docs add a note to docs that by implementing valueOf even objects and arrays can
| node_modules\oclazyload\bower_components\angular\angular.js | 24872 | @matsko implement validateLater to reduce number of validations
| node_modules\oclazyload\bower_components\angular\angular.js | 24884 | @matsko implement validateLater to reduce number of validations
| node_modules\oclazyload\bower_components\angular\angular.js | 24898 | @matsko implement validateLater to reduce number of validations
| node_modules\oclazyload\bower_components\angular\angular.js | 24994 | @matsko implement validateLater to reduce number of validations
| node_modules\oclazyload\bower_components\angular\angular.js | 25016 | @matsko implement validateLater to reduce number of validations
| node_modules\oclazyload\bower_components\angular\angular.js | 25032 | @matsko implement validateLater to reduce number of validations
| node_modules\oclazyload\bower_components\angular\angular.js | 28639 | @perf why not move this to the action fn?
| node_modules\oclazyload\bower_components\angular\angular.js | 30655 | @perf generate setters to shave off ~40ms or 1-1.5%
| node_modules\oclazyload\bower_components\angular-mocks\angular-mocks.js | 47 | @vojta remove this temporary api
| node_modules\oclazyload\bower_components\angular-mocks\angular-mocks.js | 978 | @i this prevents methods being logged,
| node_modules\oclazyload\bower_components\angular-mocks\angular-mocks.js | 1340 | @vojta change params to: method, url, data, headers, callback
| node_modules\raw-body\node_modules\bytes\index.js | 36 | use is-finite module?
| node_modules\rimraf\node_modules\glob\common.js | 106 | is an absolute `cwd` supposed to be resolved against `root`?
| node_modules\sass-graph\node_modules\glob\common.js | 106 | is an absolute `cwd` supposed to be resolved against `root`?
| node_modules\sass-graph\node_modules\yargs\yargs.js | 250 | actually deprecate self.defaults.
| node_modules\sass-graph\node_modules\yargs\yargs.js | 347 | deprecate self.demand in favor of
| node_modules\serve-index\node_modules\debug\browser.js | 37 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\stylus\lib\functions\blend.js | 25 | different blend modes like overlay etc.
| node_modules\tiny-lr\node_modules\debug\browser.js | 37 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\underscore-contrib\test\vendor\jquery.js | 3157 | Stop taunting the data cache; remove global events and always attach to document
| node_modules\underscore-contrib\test\vendor\jquery.js | 4512 | Move to normal caching system
| node_modules\underscore-contrib\test\vendor\qunit.js | 152 | why??
| node_modules\vinyl-fs\lib\dest\index.js | 56 | option for either backpressure or lossy
| node_modules\vinyl-fs\node_modules\string_decoder\index.js | 43 | Handling all encodings inside a single object makes it very difficult
| node_modules\vinyl-fs\node_modules\string_decoder\index.js | 45 | There should be a utf8-strict encoding that rejects invalid UTF-8 code
| node_modules\vinyl-fs\node_modules\vinyl\index.js | 18 | should this be moved to vinyl-fs?
| node_modules\vinyl-fs\node_modules\vinyl\index.js | 23 | should this be moved to vinyl-fs?
| node_modules\vinyl-fs\node_modules\vinyl\index.js | 42 | should this be moved to vinyl-fs?
| node_modules\vinyl-fs\node_modules\vinyl\index.js | 149 | should this be moved to vinyl-fs?
| node_modules\@uirouter\angularjs\lib\directives\viewDirective.js | 196 | Use $view service as a central point for registering component-level hooks
| node_modules\@uirouter\angularjs\lib-esm\directives\viewDirective.js | 320 | Use $view service as a central point for registering component-level hooks
| node_modules\@uirouter\core\lib\resolve\resolvable.js | 13 | explicitly make this user configurable
| node_modules\@uirouter\core\lib\transition\transition.js | 165 | Also compare parameters
| node_modules\@uirouter\core\lib\url\urlMatcherFactory.js | 78 | typeof?
| node_modules\@uirouter\core\lib\view\view.js | 58 | Validate incoming view name with a regexp to allow:
| node_modules\@uirouter\core\lib-esm\resolve\resolvable.js | 11 | explicitly make this user configurable
| node_modules\@uirouter\core\lib-esm\transition\transition.js | 163 | Also compare parameters
| node_modules\@uirouter\core\lib-esm\url\urlMatcherFactory.js | 76 | typeof?
| node_modules\@uirouter\core\lib-esm\view\view.js | 56 | Validate incoming view name with a regexp to allow:
| node_modules\csso\lib\compressor\clean\Ruleset.js | 16 | remove toLowerCase when type selectors will be normalized
| node_modules\csso\lib\compressor\compress\color.js | 290 | remove those tokens
| node_modules\csso\lib\compressor\compress\color.js | 297 | remove those tokens
| node_modules\csso\lib\compressor\compress\color.js | 307 | remove those tokens
| node_modules\csso\lib\compressor\compress\color.js | 315 | remove those tokens
| node_modules\csso\lib\compressor\compress\Url.js | 30 | make better quote type selection
| node_modules\csso\lib\compressor\restructure\1-initialMergeRuleset.js | 41 | remove initial merge
| node_modules\csso\lib\compressor\restructure\8-restructRuleset.js | 80 | need to be checked
| node_modules\csso\lib\compressor\restructure\8-restructRuleset.js | 136 | disallow up merge only if any property interception only (i.e. diff.ne2overrided.length > 0);
| node_modules\duplexer2\node_modules\readable-stream\lib\_stream_writable.js | 162 | defer error events consistently everywhere, not just the cb
| node_modules\duplexer2\node_modules\readable-stream\lib\_stream_writable.js | 365 | @isaacs clean this up
| node_modules\engine.io\node_modules\debug\src\browser.js | 41 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\engine.io-client\node_modules\debug\src\browser.js | 41 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\express\node_modules\iconv-lite\encodings\dbcs-codec.js | 348 | What if we have no default? (resCode == undefined)
| node_modules\express\node_modules\iconv-lite\encodings\dbcs-codec.js | 472 | Callback with seq.
| node_modules\express\node_modules\iconv-lite\encodings\dbcs-data.js | 64 | KDDI extension to Shift_JIS
| node_modules\express\node_modules\iconv-lite\encodings\dbcs-data.js | 65 | IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
| node_modules\express\node_modules\iconv-lite\encodings\dbcs-data.js | 66 | IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
| node_modules\express\node_modules\iconv-lite\lib\extend-node.js | 167 | Set _charsWritten.
| node_modules\express\node_modules\mime\build\test.js | 46 | Uncomment once #157 is resolved
| node_modules\glob-stream\node_modules\readable-stream\lib\_stream_writable.js | 145 | defer error events consistently everywhere, not just the cb
| node_modules\globule\node_modules\minimatch\test\basic.js | 3 | Some of these tests do very bad things with backslashes, and will
| node_modules\globule\node_modules\minimatch\test\defaults.js | 3 | Some of these tests do very bad things with backslashes, and will
| node_modules\jquery\external\sizzle\dist\sizzle.js | 254 | identify versions
| node_modules\jquery\external\sizzle\dist\sizzle.js | 268 | identify versions
| node_modules\jsdoc\lib\jsdoc\opts\argparser.js | 85 | refactor addOption to accept objects, then get rid of this method
| node_modules\jsdoc\lib\jsdoc\src\astbuilder.js | 35 | docs
| node_modules\jsdoc\lib\jsdoc\src\astbuilder.js | 54 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 1 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 47 | handle blocks with "let" declarations
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 53 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 108 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 148 | Strictly speaking, the name should be '#' plus node.key, but because we
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 222 | we should use `name.LONGNAMES.ANONYMOUS` instead of an empty string, but that
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 320 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 335 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 342 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 348 | docs
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 456 | This duplicates logic for another node type in
| node_modules\jsdoc\lib\jsdoc\src\astnode.js | 490 | should we add a name for, e.g., "var foo = function bar() {}"?
| node_modules\jsdoc\lib\jsdoc\src\handlers.js | 183 | separate code that resolves `this` from code that resolves the module object
| node_modules\jsdoc\lib\jsdoc\src\handlers.js | 250 | handle cases where the module object is shadowed in the current scope
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 26 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 56 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 77 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 116 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 126 | update docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 193 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 198 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 203 | update docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 211 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 216 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 221 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 268 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 297 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 312 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 325 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 331 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 472 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 532 | is this behavior correct? when do we get here?
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 585 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 617 | docs
| node_modules\jsdoc\lib\jsdoc\src\parser.js | 640 | document other events
| node_modules\jsdoc\lib\jsdoc\src\syntax.js | 3 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 6 | consider exporting more stuff so users can override it
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 54 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 76 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 401 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 424 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 437 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 459 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 464 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 473 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 478 | docs; visitor signature is (node, parser, filename)
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 490 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 497 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 502 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 507 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 577 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 607 | docs
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 608 | note that it's essential to call this function before you try to resolve names!
| node_modules\jsdoc\lib\jsdoc\src\visitor.js | 627 | docs
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 12 | docs
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 17 | docs
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 29 | docs
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 47 | docs
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 62 | verify correctness
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 166 | verify correctness
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 169 | verify correctness
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 399 | add scope info??
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 637 | docs
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 644 | docs
| node_modules\jsdoc\lib\jsdoc\src\walker.js | 692 | docs
| node_modules\jsdoc\lib\jsdoc\tag\type.js | 144 | move to module:jsdoc/name?
| node_modules\jsdoc\lib\jsdoc\tag\type.js | 276 | allow users to add/remove type parsers (perhaps via plugins)
| node_modules\jsdoc\lib\jsdoc\tutorial\resolver.js | 15 | make this an instance member of `RootTutorial`?
| node_modules\jsdoc\lib\jsdoc\tutorial\resolver.js | 163 | should we complain about this?
| node_modules\jsdoc\lib\jsdoc\util\doop.js | 29 | can we remove the circular-ref checking? pretty sure it's not needed anymore...
| node_modules\jsdoc\lib\jsdoc\util\logger.js | 134 | document events
| node_modules\jsdoc\lib\jsdoc\util\templateHelper.js | 455 | Deprecate missingOpts once we have a better error-reporting mechanism.
| node_modules\jsdoc\lib\jsdoc\util\templateHelper.js | 630 | we should probably be doing this for other types of symbols, here or elsewhere; see
| node_modules\jsdoc\lib\jsdoc\util\templateHelper.js | 850 | do this on the *pruned* data
| node_modules\jsdoc\lib\jsdoc\util\templateHelper.js | 941 | generate a warning (ideally during parsing!)
| node_modules\jsdoc\lib\jsdoc\util\templateHelper.js | 975 | docs
| node_modules\jsdoc\plugins\test\specs\markdown.js | 13 | more tests; refactor the plugin so multiple settings can be tested
| node_modules\localtunnel\node_modules\yargs\lib\validation.js | 136 | case-insensitive configurability
| node_modules\localtunnel\node_modules\debug\src\browser.js | 36 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\moment\src\lib\create\from-array.js | 100 | We need to take the current isoWeekYear, but that depends on
| node_modules\moment\src\lib\create\from-string-and-format.js | 19 | Move this to another part of the creation flow to prevent circular deps
| node_modules\moment\src\lib\create\from-string.js | 136 | Replace the vanilla JS Date object with an indepentent day-of-week check.
| node_modules\moment\src\lib\duration\as.js | 35 | Use this.as('ms')?
| node_modules\moment\src\lib\locale\locales.js | 50 | Find a better way to register and load all the locales in Node
| node_modules\moment\src\lib\locale\set.js | 19 | Remove "ordinalParse" fallback in next major release.
| node_modules\moment\src\lib\moment\add-subtract.js | 9 | remove 'name' arg after deprecation is removed
| node_modules\moment\src\lib\moment\min-max.js | 52 | Use [].sort instead?
| node_modules\moment\src\lib\units\day-of-month.js | 26 | Remove "ordinalParse" fallback in next major release.
| node_modules\moment\src\lib\units\month.js | 152 | add sorting
| node_modules\moment\src\lib\units\month.js | 192 | Another silent failure?
| node_modules\ng-file-model\sample\lib\angular\angular.js | 1828 | @misko this function needs to be removed
| node_modules\ng-file-model\sample\lib\angular\angular.js | 1854 | @perf just check if all items in `nodes` are siblings and if they are return the original
| node_modules\ng-file-model\sample\lib\angular\angular.js | 3234 | do we still need this?
| node_modules\ng-file-model\sample\lib\angular\angular.js | 3298 | this is a hack for angularMocks/clearDataCache that makes it possible to deregister all
| node_modules\ng-file-model\sample\lib\angular\angular.js | 5480 | @vojta remove this temporary api
| node_modules\ng-file-model\sample\lib\angular\angular.js | 5513 | @vojta prefix this method with $$ ?
| node_modules\ng-file-model\sample\lib\angular\angular.js | 5690 | @vojta refactor to use node's syntax for events
| node_modules\ng-file-model\sample\lib\angular\angular.js | 7269 | decide whether or not to throw an error if "class"
| node_modules\ng-file-model\sample\lib\angular\angular.js | 7518 | Make this detect MathML as well...
| node_modules\ng-file-model\sample\lib\angular\angular.js | 8699 | @perf what's this document fragment for? is it needed? can we at least reuse it?
| node_modules\ng-file-model\sample\lib\angular\angular.js | 10579 | @vojta fix the signature
| node_modules\ng-file-model\sample\lib\angular\angular.js | 12130 | @vojta rewrite link when opening in new tab/window (in legacy browser)
| node_modules\ng-file-model\sample\lib\angular\angular.js | 12920 | check that it is a constant
| node_modules\ng-file-model\sample\lib\angular\angular.js | 14167 | @docs add a note to docs that by implementing valueOf even objects and arrays can
| node_modules\ng-file-model\sample\lib\angular\angular.js | 21753 | @matsko implement validateLater to reduce number of validations
| node_modules\ng-file-model\sample\lib\angular\angular.js | 21769 | @matsko implement validateLater to reduce number of validations
| node_modules\ng-file-model\sample\lib\angular\angular.js | 25216 | @perf why not move this to the action fn?
| node_modules\ng-file-model\sample\lib\angular\angular.js | 27060 | @perf generate setters to shave off ~40ms or 1-1.5%
| node_modules\ng-file-model\sample\lib\angular\angular.js | 27266 | @perf support naked previousNode in `enter` to avoid creation of jqLite wrapper?
| node_modules\ngmap\build\docs\js\prettify.js | 240 | maybe style special characters inside a regexp as punctuation.
| node_modules\ngmap\build\docs\js\prettify.js | 458 | handle letters in numeric escapes.
| node_modules\ngmap\build\docs\js\prettify.js | 557 | handle tabs here?
| node_modules\ngmap\build\docs\js\prettify.js | 947 | @mikesamuel recognize non-latin letters and numerals in idents
| node_modules\ngmap\build\docs\js\prettify.js | 1215 | Possibly optimize by using '' if there's no flicker.
| node_modules\ngmap\config\jsdoc\template\publish.js | 644 | move the tutorial functions to templateHelper.js
| node_modules\node-sass\node_modules\request\lib\auth.js | 52 | More complete implementation of RFC 2617.
| node_modules\nodemon\node_modules\debug\src\browser.js | 41 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\sass-graph\node_modules\yargs\lib\argsert.js | 7 | should this eventually raise an exception.
| node_modules\sass-graph\node_modules\yargs\lib\command.js | 288 | move positional arg logic to yargs-parser and remove this duplication
| node_modules\sass-graph\node_modules\yargs\lib\validation.js | 173 | case-insensitive configurability
| node_modules\send\node_modules\debug\src\browser.js | 36 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\socket.io-parser\node_modules\debug\src\browser.js | 41 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\vinyl-fs\node_modules\readable-stream\lib\_stream_writable.js | 145 | defer error events consistently everywhere, not just the cb
| node_modules\csso\lib\compressor\restructure\prepare\index.js | 23 | need to be checked
| node_modules\express\node_modules\body-parser\lib\types\json.js | 74 | maybe make this configurable or part of "strict" option
| node_modules\gulp-connect\node_modules\send\node_modules\debug\browser.js | 37 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\gulp-connect\node_modules\serve-static\node_modules\send\index.js | 791 | this is all lame, refactor meeee
| node_modules\stylus\node_modules\source-map\test\source-map\test-util.js | 202 | Issue #128: Define and test this function properly.
| node_modules\gulp-connect\node_modules\serve-static\node_modules\mime\build\test.js | 46 | Uncomment once #157 is resolved
| node_modules\nodemon\node_modules\expand-brackets\node_modules\debug\src\browser.js | 36 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\angular\angular.js | 2122 | @misko this function needs to be removed
| node_modules\angular\angular.js | 2148 | @perf update `nodes` instead of creating a new object?
| node_modules\angular\angular.js | 3717 | do we still need this?
| node_modules\angular\angular.js | 3784 | this is a hack for angularMocks/clearDataCache that makes it possible to deregister all
| node_modules\angular\angular.js | 6418 | @vojta remove this temporary api
| node_modules\angular\angular.js | 6450 | @vojta prefix this method with $$ ?
| node_modules\angular\angular.js | 6635 | @vojta refactor to use node's syntax for events
| node_modules\angular\angular.js | 8421 | @pete remove the following `forEach` before we release 1.6.0
| node_modules\angular\angular.js | 8837 | decide whether or not to throw an error if "class"
| node_modules\angular\angular.js | 9123 | Make this detect MathML as well...
| node_modules\angular\angular.js | 9656 | remove this line after Chrome 50 has been released
| node_modules\angular\angular.js | 12748 | @vojta fix the signature
| node_modules\angular\angular.js | 13025 | this is the same as the constantWatchDelegate in parse.js
| node_modules\angular\angular.js | 14494 | @vojta rewrite link when opening in new tab/window (in legacy browser)
| node_modules\angular\angular.js | 15296 | check that it is a constant
| node_modules\angular\angular.js | 16644 | @docs add a note to docs that by implementing valueOf even objects and arrays can
| node_modules\angular\angular.js | 25594 | @matsko implement validateLater to reduce number of validations
| node_modules\angular\angular.js | 25606 | @matsko implement validateLater to reduce number of validations
| node_modules\angular\angular.js | 25620 | @matsko implement validateLater to reduce number of validations
| node_modules\angular\angular.js | 25716 | @matsko implement validateLater to reduce number of validations
| node_modules\angular\angular.js | 25738 | @matsko implement validateLater to reduce number of validations
| node_modules\angular\angular.js | 25754 | @matsko implement validateLater to reduce number of validations
| node_modules\angular\angular.js | 31736 | @perf generate setters to shave off ~40ms or 1-1.5%
| node_modules\clap\index.js | 286 | suggestions for options
| node_modules\color-support\index.js | 100 | add more term programs
| node_modules\engine.io-client\engine.io.js | 3565 | add a `localStorage` variable to explicitly enable/disable colors
| node_modules\execa\index.js | 235 | missing some timeout logic for killed
| node_modules\execa\index.js | 277 | set `stderr: 'ignore'` when that option is implemented
| node_modules\execa\index.js | 282 | set `stdout: 'ignore'` when that option is implemented
| node_modules\jsbn\index.js | 1289 | allow reseeding after first request
| node_modules\jsdoc\cli.js | 33 | docs
| node_modules\jsdoc\cli.js | 50 | docs
| node_modules\jsdoc\cli.js | 113 | docs
| node_modules\jsdoc\cli.js | 143 | docs
| node_modules\jsdoc\cli.js | 155 | docs
| node_modules\jsdoc\cli.js | 170 | docs
| node_modules\jsdoc\cli.js | 197 | docs
| node_modules\jsdoc\cli.js | 206 | docs
| node_modules\jsdoc\cli.js | 217 | docs
| node_modules\jsdoc\cli.js | 222 | docs
| node_modules\jsdoc\cli.js | 229 | docs
| node_modules\jsdoc\cli.js | 304 | docs
| node_modules\jsdoc\cli.js | 464 | docs
| node_modules\liftoff\index.js | 91 | break this out into lib/
| node_modules\lodash\index.js | 7643 | Changes.cancel();
| node_modules\mime-types\index.js | 54 | use media-typer
| node_modules\mime-types\index.js | 78 | should this even be in this module?
| node_modules\mime-types\index.js | 91 | use content-type or other module
| node_modules\mime-types\index.js | 112 | use media-typer
| node_modules\minimatch\minimatch.js | 462 | It would probably be faster to determine this
| node_modules\moment\moment.js | 359 | Remove "ordinalParse" fallback in next major release.
| node_modules\moment\moment.js | 1002 | add sorting
| node_modules\moment\moment.js | 1042 | Another silent failure?
| node_modules\moment\moment.js | 1830 | Find a better way to register and load all the locales in Node
| node_modules\moment\moment.js | 2110 | We need to take the current isoWeekYear, but that depends on
| node_modules\moment\moment.js | 2285 | Replace the vanilla JS Date object with an indepentent day-of-week check.
| node_modules\moment\moment.js | 2389 | Move this to another part of the creation flow to prevent circular deps
| node_modules\moment\moment.js | 2684 | Use [].sort instead?
| node_modules\moment\moment.js | 3115 | remove 'name' arg after deprecation is removed
| node_modules\moment\moment.js | 3670 | Remove "ordinalParse" fallback in next major release.
| node_modules\moment\moment.js | 4198 | Use this.as('ms')?
| node_modules\oclazyload\changelog.js | 121 | @vojta if it's slow, use spawn and stream it instead
| node_modules\q\q.js | 745 | "===" should be Object.is or equiv
| node_modules\q\q.js | 1786 | attempt to recycle the rejection with "this".
| node_modules\send\index.js | 798 | this is all lame, refactor meeee
| node_modules\spdx-expression-parse\parse.js | 46 | Actually, everything is concatenated into one string
| node_modules\split\index.js | 13 | pass in a function to map across the lines.
| node_modules\taffydb\taffy.js | 1092 | The curly braces used to be unescaped
| node_modules\tweetnacl\nacl-fast.js | 2160 | Completely remove this in v0.15.
| node_modules\tweetnacl\nacl.js | 947 | Completely remove this in v0.15.
| node_modules\unzip-response\index.js | 6 | use Array#includes when targeting Node.js 6
| node_modules\update-notifier\index.js | 25 | Remove deprecated options at some point far into the future
| node_modules\uws\uws.js | 388 | default HTTP response
| node_modules\vinyl\index.js | 43 | should this be moved to vinyl-fs?
| node_modules\vinyl\index.js | 154 | should this be moved to vinyl-fs?

### FIXMEs
| Filename | line # | FIXME
|:------|:------:|:------
| node_modules\csso\lib\cli.js | 10 | don't chain until node.js 0.10 drop, since setEncoding isn't chainable in 0.10
| node_modules\debug\src\node.js | 200 | Should probably have an option in net.Socket to create a
| node_modules\debug\src\node.js | 208 | Hack to have stream not keep the event loop alive.
| node_modules\body-parser\node_modules\debug\node.js | 177 | Should probably have an option in net.Socket to create a
| node_modules\body-parser\node_modules\debug\node.js | 185 | Hack to have stream not keep the event loop alive.
| node_modules\connect\node_modules\debug\node.js | 177 | Should probably have an option in net.Socket to create a
| node_modules\connect\node_modules\debug\node.js | 185 | Hack to have stream not keep the event loop alive.
| node_modules\finalhandler\node_modules\debug\node.js | 177 | Should probably have an option in net.Socket to create a
| node_modules\finalhandler\node_modules\debug\node.js | 185 | Hack to have stream not keep the event loop alive.
| node_modules\leasot\lib\reporters\custom.js | 9 | make the default header a configurable option
| node_modules\nodemailer\lib\dkim\index.js | 3 | 
| node_modules\nodemon\lib\monitor\run.js | 266 | decide whether or not we need to decide the encoding
| node_modules\oclazyload\bower_components\angular\angular.js | 29848 | When a user selects an option, this watch will fire needlessly
| node_modules\serve-index\node_modules\debug\node.js | 177 | Should probably have an option in net.Socket to create a
| node_modules\serve-index\node_modules\debug\node.js | 185 | Hack to have stream not keep the event loop alive.
| node_modules\tiny-lr\node_modules\debug\node.js | 177 | Should probably have an option in net.Socket to create a
| node_modules\tiny-lr\node_modules\debug\node.js | 185 | Hack to have stream not keep the event loop alive.
| node_modules\localtunnel\node_modules\debug\src\node.js | 198 | Should probably have an option in net.Socket to create a
| node_modules\localtunnel\node_modules\debug\src\node.js | 206 | Hack to have stream not keep the event loop alive.
| node_modules\send\node_modules\debug\src\node.js | 198 | Should probably have an option in net.Socket to create a
| node_modules\send\node_modules\debug\src\node.js | 206 | Hack to have stream not keep the event loop alive.
| node_modules\gulp-connect\node_modules\send\node_modules\debug\node.js | 177 | Should probably have an option in net.Socket to create a
| node_modules\gulp-connect\node_modules\send\node_modules\debug\node.js | 185 | Hack to have stream not keep the event loop alive.
| node_modules\nodemon\node_modules\expand-brackets\node_modules\debug\src\node.js | 200 | Should probably have an option in net.Socket to create a
| node_modules\nodemon\node_modules\expand-brackets\node_modules\debug\src\node.js | 208 | Hack to have stream not keep the event loop alive.
| node_modules\angular\angular.js | 30842 | When a user selects an option, this watch will fire needlessly
| node_modules\esprima\esprima.js | 2614 | @ikarienator this is seemingly an issue in the previous location info convention.
| node_modules\is-my-ip-valid\index.js | 33 | this should probably be an option in the future
| node_modules\q\q.js | 355 | Remove this function once ES6 generators are in SpiderMonkey.
| node_modules\q\q.js | 363 | Remove this helper and Q.return once ES6 generators are in
| node_modules\q\q.js | 1309 | Remove this case when SM does ES6 generators.
| node_modules\q\q.js | 1341 | Remove this interface once ES6 generators are in SpiderMonkey.