import{_ as v,a as U}from"./@babel-9a9b6246.js";import{r as f}from"./react-0beb1837.js";var O={},y=function(r){};function H(t,r){}function h(t,r){}function w(){O={}}function P(t,r,n){!r&&!O[n]&&(t(!1,n),O[n]=!0)}function M(t,r){P(H,t,r)}function D(t,r){P(h,t,r)}M.preMessage=y;M.resetWarned=w;M.noteOnce=D;function B(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=new Set;function c(u,s){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,E=a.has(u);if(M(!E,"Warning: There may be circular references"),E)return!1;if(u===s)return!0;if(n&&N>1)return!1;a.add(u);var S=N+1;if(Array.isArray(u)){if(!Array.isArray(s)||u.length!==s.length)return!1;for(var i=0;i<u.length;i++)if(!c(u[i],s[i],S))return!1;return!0}if(u&&s&&v(u)==="object"&&v(s)==="object"){var o=Object.keys(u);return o.length!==Object.keys(s).length?!1:o.every(function(_){return c(u[_],s[_],S)})}return!1}return c(t,r)}function C(t){var r=f.useRef();r.current=t;var n=f.useCallback(function(){for(var a,c=arguments.length,u=new Array(c),s=0;s<c;s++)u[s]=arguments[s];return(a=r.current)===null||a===void 0?void 0:a.call.apply(a,[r].concat(u))},[]);return n}function W(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var L=W()?f.useLayoutEffect:f.useEffect,V=function(r,n){var a=f.useRef(!0);L(function(){return r(a.current)},n),L(function(){return a.current=!1,function(){a.current=!0}},[])},d=function(r,n){V(function(a){if(!a)return r()},n)};function g(t){var r=f.useRef(!1),n=f.useState(t),a=U(n,2),c=a[0],u=a[1];f.useEffect(function(){return r.current=!1,function(){r.current=!0}},[]);function s(N,E){E&&r.current||u(N)}return[c,s]}function A(t){return t!==void 0}function Y(t,r){var n=r||{},a=n.defaultValue,c=n.value,u=n.onChange,s=n.postState,N=g(function(){return A(c)?c:A(a)?typeof a=="function"?a():a:typeof t=="function"?t():t}),E=U(N,2),S=E[0],i=E[1],o=c!==void 0?c:S,_=s?s(o):o,F=C(u),K=g([o]),T=U(K,2),R=T[0],m=T[1];d(function(){var l=R[0];S!==l&&F(S,l)},[R]),d(function(){A(c)||i(c)},[c]);var p=C(function(l,I){i(l,I),m([o],I)});return[_,p]}var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(r){var n=r.keyCode;if(r.altKey&&!r.ctrlKey||r.metaKey||n>=e.F1&&n<=e.F12)return!1;switch(n){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(r){if(r>=e.ZERO&&r<=e.NINE||r>=e.NUM_ZERO&&r<=e.NUM_MULTIPLY||r>=e.A&&r<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&r===0)return!0;switch(r){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};export{e as K,B as i,Y as u};
