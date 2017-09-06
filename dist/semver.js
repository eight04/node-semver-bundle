var semverCompare=function(){"use strict";function r(e,t){if(e instanceof r){if(e.loose===t)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>k)throw new TypeError("version is longer than "+k+" characters");if(!(this instanceof r))return new r(e,t);this.loose=t;var n=e.trim().match(t?I[L]:I[_]);if(!n)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>T||this.major<0)throw new TypeError("Invalid major version");if(this.minor>T||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>T||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(function(r){if(/^[0-9]+$/.test(r)){var e=+r;if(e>=0&&e<T)return e}return r}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}function e(r,e){var t=fr.test(r),n=fr.test(e);return t&&n&&(r=+r,e=+e),t&&!n?-1:n&&!t?1:r<e?-1:r>e?1:0}function t(e,t,n){return new r(e,n).compare(new r(t,n))}function n(r,e,n){return t(r,e,n)>0}function i(r,e,n){return t(r,e,n)<0}function s(r,e,n){return 0===t(r,e,n)}function o(r,e,n){return 0!==t(r,e,n)}function a(r,e,n){return t(r,e,n)>=0}function h(r,e,n){return t(r,e,n)<=0}function p(r,e,t,p){var u;switch(e){case"===":"object"==typeof r&&(r=r.version),"object"==typeof t&&(t=t.version),u=r===t;break;case"!==":"object"==typeof r&&(r=r.version),"object"==typeof t&&(t=t.version),u=r!==t;break;case"":case"=":case"==":u=s(r,t,p);break;case"!=":u=o(r,t,p);break;case">":u=n(r,t,p);break;case">=":u=a(r,t,p);break;case"<":u=i(r,t,p);break;case"<=":u=h(r,t,p);break;default:throw new TypeError("Invalid operator: "+e)}return u}function u(r,e){if(r instanceof u){if(r.loose===e)return r;r=r.value}if(!(this instanceof u))return new u(r,e);this.loose=e,this.parse(r),this.semver===lr?this.value="":this.value=this.operator+this.semver.version}function c(r,e){if(r instanceof c)return r.loose===e?r:new c(r.raw,e);if(r instanceof u)return new c(r.value,e);if(!(this instanceof c))return new c(r,e);if(this.loose=e,this.raw=r,this.set=r.split(/\s*\|\|\s*/).map(function(r){return this.parseRange(r.trim())},this).filter(function(r){return r.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+r);this.format()}function f(r,e){return r=w(r,e),r=l(r,e),r=y(r,e),r=b(r,e)}function v(r){return!r||"x"===r.toLowerCase()||"*"===r}function l(r,e){return r.trim().split(/\s+/).map(function(r){return m(r,e)}).join(" ")}function m(r,e){var t=e?I[rr]:I[Y];return r.replace(t,function(r,e,t,n,i){var s;return v(e)?s="":v(t)?s=">="+e+".0.0 <"+(+e+1)+".0.0":v(n)?s=">="+e+"."+t+".0 <"+e+"."+(+t+1)+".0":i?("-"!==i.charAt(0)&&(i="-"+i),s=">="+e+"."+t+"."+n+i+" <"+e+"."+(+t+1)+".0"):s=">="+e+"."+t+"."+n+" <"+e+"."+(+t+1)+".0",s})}function w(r,e){return r.trim().split(/\s+/).map(function(r){return g(r,e)}).join(" ")}function g(r,e){var t=e?I[ir]:I[nr];return r.replace(t,function(r,e,t,n,i){var s;return v(e)?s="":v(t)?s=">="+e+".0.0 <"+(+e+1)+".0.0":v(n)?s="0"===e?">="+e+"."+t+".0 <"+e+"."+(+t+1)+".0":">="+e+"."+t+".0 <"+(+e+1)+".0.0":i?("-"!==i.charAt(0)&&(i="-"+i),s="0"===e?"0"===t?">="+e+"."+t+"."+n+i+" <"+e+"."+t+"."+(+n+1):">="+e+"."+t+"."+n+i+" <"+e+"."+(+t+1)+".0":">="+e+"."+t+"."+n+i+" <"+(+e+1)+".0.0"):s="0"===e?"0"===t?">="+e+"."+t+"."+n+" <"+e+"."+t+"."+(+n+1):">="+e+"."+t+"."+n+" <"+e+"."+(+t+1)+".0":">="+e+"."+t+"."+n+" <"+(+e+1)+".0.0",s})}function y(r,e){return r.split(/\s+/).map(function(r){return j(r,e)}).join(" ")}function j(r,e){r=r.trim();var t=e?I[Q]:I[O];return r.replace(t,function(r,e,t,n,i,s){var o=v(t),a=o||v(n),h=a||v(i),p=h;return"="===e&&p&&(e=""),o?r=">"===e||"<"===e?"<0.0.0":"*":e&&p?(a&&(n=0),h&&(i=0),">"===e?(e=">=",a?(t=+t+1,n=0,i=0):h&&(n=+n+1,i=0)):"<="===e&&(e="<",a?t=+t+1:n=+n+1),r=e+t+"."+n+"."+i):a?r=">="+t+".0.0 <"+(+t+1)+".0.0":h&&(r=">="+t+"."+n+".0 <"+t+"."+(+n+1)+".0"),r})}function b(r,e){return r.trim().replace(I[ur],"")}function d(r,e,t,n,i,s,o,a,h,p,u,c,f){return e=v(t)?"":v(n)?">="+t+".0.0":v(i)?">="+t+"."+n+".0":">="+e,a=v(h)?"":v(p)?"<"+(+h+1)+".0.0":v(u)?"<"+h+"."+(+p+1)+".0":c?"<="+h+"."+p+"."+u+"-"+c:"<="+a,(e+" "+a).trim()}function $(r,e){for(t=0;t<r.length;t++)if(!r[t].test(e))return!1;if(e.prerelease.length){for(var t=0;t<r.length;t++)if(r[t].semver!==lr&&r[t].semver.prerelease.length>0){var n=r[t].semver;if(n.major===e.major&&n.minor===e.minor&&n.patch===e.patch)return!0}return!1}return!0}function E(r,e,t){try{e=new c(e,t)}catch(r){return!1}return e.test(r)}var k=256,T=Number.MAX_SAFE_INTEGER||9007199254740991,I=[],R=[],x=0,A=x++;R[A]="0|[1-9]\\d*";var S=x++;R[S]="[0-9]+";var N=x++;R[N]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var z=x++;R[z]="("+R[A]+")\\.("+R[A]+")\\.("+R[A]+")";var C=x++;R[C]="("+R[S]+")\\.("+R[S]+")\\.("+R[S]+")";var M=x++;R[M]="(?:"+R[A]+"|"+R[N]+")";var V=x++;R[V]="(?:"+R[S]+"|"+R[N]+")";var X=x++;R[X]="(?:-("+R[M]+"(?:\\."+R[M]+")*))";var Z=x++;R[Z]="(?:-?("+R[V]+"(?:\\."+R[V]+")*))";var q=x++;R[q]="[0-9A-Za-z-]+";var P=x++;R[P]="(?:\\+("+R[q]+"(?:\\."+R[q]+")*))";var _=x++,F="v?"+R[z]+R[X]+"?"+R[P]+"?";R[_]="^"+F+"$";var G="[v=\\s]*"+R[C]+R[Z]+"?"+R[P]+"?",L=x++;R[L]="^"+G+"$";var B=x++;R[B]="((?:<|>)?=?)";var D=x++;R[D]=R[S]+"|x|X|\\*";var H=x++;R[H]=R[A]+"|x|X|\\*";var J=x++;R[J]="[v=\\s]*("+R[H]+")(?:\\.("+R[H]+")(?:\\.("+R[H]+")(?:"+R[X]+")?"+R[P]+"?)?)?";var K=x++;R[K]="[v=\\s]*("+R[D]+")(?:\\.("+R[D]+")(?:\\.("+R[D]+")(?:"+R[Z]+")?"+R[P]+"?)?)?";var O=x++;R[O]="^"+R[B]+"\\s*"+R[J]+"$";var Q=x++;R[Q]="^"+R[B]+"\\s*"+R[K]+"$";var U=x++;R[U]="(?:~>?)";var W=x++;R[W]="(\\s*)"+R[U]+"\\s+",I[W]=new RegExp(R[W],"g");var Y=x++;R[Y]="^"+R[U]+R[J]+"$";var rr=x++;R[rr]="^"+R[U]+R[K]+"$";var er=x++;R[er]="(?:\\^)";var tr=x++;R[tr]="(\\s*)"+R[er]+"\\s+",I[tr]=new RegExp(R[tr],"g");var nr=x++;R[nr]="^"+R[er]+R[J]+"$";var ir=x++;R[ir]="^"+R[er]+R[K]+"$";var sr=x++;R[sr]="^"+R[B]+"\\s*("+G+")$|^$";var or=x++;R[or]="^"+R[B]+"\\s*("+F+")$|^$";var ar=x++;R[ar]="(\\s*)"+R[B]+"\\s*("+G+"|"+R[J]+")",I[ar]=new RegExp(R[ar],"g");var hr=x++;R[hr]="^\\s*("+R[J]+")\\s+-\\s+("+R[J]+")\\s*$";var pr=x++;R[pr]="^\\s*("+R[K]+")\\s+-\\s+("+R[K]+")\\s*$";var ur=x++;R[ur]="(<|>)?=?\\s*\\*";for(var cr=0;cr<x;cr++)I[cr]||(I[cr]=new RegExp(R[cr]));r.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},r.prototype.toString=function(){return this.version},r.prototype.compare=function(e){return e instanceof r||(e=new r(e,this.loose)),this.compareMain(e)||this.comparePre(e)},r.prototype.compareMain=function(t){return t instanceof r||(t=new r(t,this.loose)),e(this.major,t.major)||e(this.minor,t.minor)||e(this.patch,t.patch)},r.prototype.comparePre=function(t){if(t instanceof r||(t=new r(t,this.loose)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;var n=0;do{var i=this.prerelease[n],s=t.prerelease[n];if(void 0===i&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===i)return-1;if(i!==s)return e(i,s)}while(++n)},r.prototype.inc=function(r,e){switch(r){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",e);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",e);break;case"prepatch":this.prerelease.length=0,this.inc("patch",e),this.inc("pre",e);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",e),this.inc("pre",e);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}e&&(this.prerelease[0]===e?isNaN(this.prerelease[1])&&(this.prerelease=[e,0]):this.prerelease=[e,0]);break;default:throw new Error("invalid increment argument: "+r)}return this.format(),this.raw=this.version,this};var fr=/^[0-9]+$/,vr=t,lr={};return u.prototype.parse=function(e){var t=this.loose?I[sr]:I[or],n=e.match(t);if(!n)throw new TypeError("Invalid comparator: "+e);this.operator=n[1],"="===this.operator&&(this.operator=""),n[2]?this.semver=new r(n[2],this.loose):this.semver=lr},u.prototype.toString=function(){return this.value},u.prototype.test=function(e){return this.semver===lr||("string"==typeof e&&(e=new r(e,this.loose)),p(e,this.operator,this.semver,this.loose))},u.prototype.intersects=function(r,e){if(!(r instanceof u))throw new TypeError("a Comparator is required");var t;if(""===this.operator)return t=new c(r.value,e),E(this.value,t,e);if(""===r.operator)return t=new c(this.value,e),E(r.semver,t,e);var n=!(">="!==this.operator&&">"!==this.operator||">="!==r.operator&&">"!==r.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==r.operator&&"<"!==r.operator),s=this.semver.version===r.semver.version,o=!(">="!==this.operator&&"<="!==this.operator||">="!==r.operator&&"<="!==r.operator),a=p(this.semver,"<",r.semver,e)&&(">="===this.operator||">"===this.operator)&&("<="===r.operator||"<"===r.operator),h=p(this.semver,">",r.semver,e)&&("<="===this.operator||"<"===this.operator)&&(">="===r.operator||">"===r.operator);return n||i||s&&o||a||h},c.prototype.format=function(){return this.range=this.set.map(function(r){return r.join(" ").trim()}).join("||").trim(),this.range},c.prototype.toString=function(){return this.range},c.prototype.parseRange=function(r){var e=this.loose;r=r.trim();var t=e?I[pr]:I[hr];r=(r=(r=(r=(r=r.replace(t,d)).replace(I[ar],"$1$2$3")).replace(I[W],"$1~")).replace(I[tr],"$1^")).split(/\s+/).join(" ");var n=e?I[sr]:I[or],i=r.split(" ").map(function(r){return f(r,e)}).join(" ").split(/\s+/);return this.loose&&(i=i.filter(function(r){return!!r.match(n)})),i=i.map(function(r){return new u(r,e)})},c.prototype.intersects=function(r,e){if(!(r instanceof c))throw new TypeError("a Range is required");return this.set.some(function(t){return t.every(function(t){return r.set.some(function(r){return r.every(function(r){return t.intersects(r,e)})})})})},c.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new r(e,this.loose));for(var t=0;t<this.set.length;t++)if($(this.set[t],e))return!0;return!1},vr}();