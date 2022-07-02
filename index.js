// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,f=o.__defineGetter__,i=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r},p=t()?l:y,b=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},v=function(r){return r!=r},w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,s=d,A=function(r){return s.call(r)},_=Object.prototype.hasOwnProperty,m=function(r,n){return null!=r&&_.call(r,n)},h="function"==typeof Symbol?Symbol.toStringTag:"",N=m,U=h,g=d,j=A,I=function(r){var n,t,e;if(null==r)return g.call(r);t=r[U],n=N(r,U);try{r[U]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[U]=t:delete r[U],e},O=w&&"symbol"==typeof Symbol.toStringTag?I:j,S=O,E="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===S(r)},H=F,G=function(){var r,n;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},P="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},V=G()?P:L,W=O,k="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,M=function(r){return k&&r instanceof Float64Array||"[object Float64Array]"===W(r)},Y=x,q=function(){var r,n;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),r=M(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},C="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=q()?C:z,D=O,J="function"==typeof Uint8Array,K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K,X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=O,tr="function"==typeof Uint16Array,er="function"==typeof Uint16Array?Uint16Array:null,or=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ur=er,fr=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur(n=[1,3.14,-3.14,65536,65537]),r=or(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},ir="function"==typeof Uint16Array?Uint16Array:void 0,ar=function(){throw new Error("not implemented")},cr={uint16:fr()?ir:ar,uint8:rr};(r=new cr.uint16(1))[0]=4660;var lr,yr,pr=52===new cr.uint8(r.buffer)[0],br=V,vr=!0===pr?1:0,wr=new B(1),dr=new br(wr.buffer),sr=function(r){return wr[0]=r,dr[vr]},Ar=V,_r=!0===pr?0:1,mr=new B(1),hr=new Ar(mr.buffer),Nr=function(r,n){return mr[0]=r,hr[_r]=n>>>0,mr[0]},Ur=sr,gr=Nr,jr=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))},Ir=function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))},Or=function(r,n,t){var e,o,u,f,i,a,c,l,y;return(o=2147483647&(e=Ur(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),f=n+(y=r*r)*((i=y*r)*((f=jr(l=y*y))+(c=y*Ir(l)))+n),l=r+(f+=.3333333333333341*i),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-f))):1===t?l:(gr(y=l,0),c=f-(y-r),gr(a=u=-1/l,0),a+u*((i=1+a*y)+a*c))},Sr=V,Er=!0===pr?0:1,Fr=new B(1),Tr=new Sr(Fr.buffer),Hr=function(r){return Fr[0]=r,Tr[Er]};!0===pr?(lr=1,yr=0):(lr=0,yr=1);var Gr,Pr,Lr=V,Vr={HIGH:lr,LOW:yr},Wr=new B(1),kr=new Lr(Wr.buffer),xr=Vr.HIGH,Mr=Vr.LOW,Yr=function(r,n){return kr[xr]=r,kr[Mr]=n,Wr[0]},qr=Yr,Cr=Math.floor,zr=Number.POSITIVE_INFINITY,Br=Number.NEGATIVE_INFINITY,Dr=zr,Jr=Br,Kr=function(r){return r===Dr||r===Jr};!0===pr?(Gr=1,Pr=0):(Gr=0,Pr=1);var Qr=V,Rr={HIGH:Gr,LOW:Pr},Xr=new B(1),Zr=new Qr(Xr.buffer),$r=Rr.HIGH,rn=Rr.LOW,nn=function(r,n){return Xr[0]=n,r[0]=Zr[$r],r[1]=Zr[rn],r},tn=function(r,n){return 1===arguments.length?nn([0,0],r):nn(r,n)},en=tn,on=sr,un=qr,fn=[0,0],an=Kr,cn=v,ln=function(r){return Math.abs(r)},yn=function(r,n){return cn(n)||an(n)?(r[0]=n,r[1]=0,r):0!==n&&ln(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},pn=function(r,n){return 1===arguments.length?yn([0,0],r):yn(r,n)},bn=sr,vn=function(r){var n=bn(r);return(n=(2146435072&n)>>>20)-1023|0},wn=zr,dn=Br,sn=v,An=Kr,_n=function(r,n){var t,e;return en(fn,r),t=fn[0],t&=2147483647,e=on(n),un(t|=e&=2147483648,fn[1])},mn=pn,hn=vn,Nn=tn,Un=qr,gn=[0,0],jn=[0,0],In=function(r,n){var t,e;return 0===n||0===r||sn(r)||An(r)?r:(mn(gn,r),n+=gn[1],(n+=hn(r=gn[0]))<-1074?_n(0,r):n>1023?r<0?dn:wn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nn(jn,r),t=jn[0],t&=2148532223,e*Un(t|=n+1023<<20,jn[1])))},On=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t},Sn=Cr,En=In,Fn=function(r){return On(0,r)},Tn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Hn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Gn=16777216,Pn=5.960464477539063e-8,Ln=Fn(20),Vn=Fn(20),Wn=Fn(20),kn=Fn(20);function xn(r,n,t,e,o,u,f,i,a){var c,l,y,p,b,v,w,d,s;for(p=u,s=e[t],d=t,b=0;d>0;b++)l=Pn*s|0,kn[b]=s-Gn*l|0,s=e[d-1]+l,d-=1;if(s=En(s,o),s-=8*Sn(.125*s),s-=w=0|s,y=0,o>0?(w+=b=kn[t-1]>>24-o,kn[t-1]-=b<<24-o,y=kn[t-1]>>23-o):0===o?y=kn[t-1]>>23:s>=.5&&(y=2),y>0){for(w+=1,c=0,b=0;b<t;b++)d=kn[b],0===c?0!==d&&(c=1,kn[b]=16777216-d):kn[b]=16777215-d;if(o>0)switch(o){case 1:kn[t-1]&=8388607;break;case 2:kn[t-1]&=4194303}2===y&&(s=1-s,0!==c&&(s-=En(1,o)))}if(0===s){for(d=0,b=t-1;b>=u;b--)d|=kn[b];if(0===d){for(v=1;0===kn[u-v];v++);for(b=t+1;b<=t+v;b++){for(a[i+b]=Tn[f+b],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(b-d)];e[b]=l}return xn(r,n,t+=v,e,o,u,f,i,a)}}if(0===s)for(t-=1,o-=24;0===kn[t];)t-=1,o-=24;else(s=En(s,-o))>=Gn?(l=Pn*s|0,kn[t]=s-Gn*l|0,o+=24,kn[t+=1]=l):kn[t]=0|s;for(l=En(1,o),b=t;b>=0;b--)e[b]=l*kn[b],l*=Pn;for(b=t;b>=0;b--){for(l=0,v=0;v<=p&&v<=t-b;v++)l+=Hn[v]*e[b+v];Wn[t-b]=l}for(l=0,b=t;b>=0;b--)l+=Wn[b];for(n[0]=0===y?l:-l,l=Wn[0]-l,b=1;b<=t;b++)l+=Wn[b];return n[1]=0===y?l:-l,7&w}var Mn=function(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Ln[a]=c<0?0:Tn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Ln[f+(a-c)];Vn[a]=o}return xn(r,n,4,Vn,i,4,u,f,Ln)},Yn=Math.round,qn=sr,Cn=sr,zn=Hr,Bn=qr,Dn=Mn,Jn=function(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Yn(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(qn(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(qn(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e},Kn=1.5707963267341256,Qn=6077100506506192e-26,Rn=2*Qn,Xn=3*Qn,Zn=4*Qn,$n=[0,0,0],rt=[0,0],nt=function(r,n){var t,e,o,u,f,i,a;if((o=2147483647&Cn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Jn(r,o,n):o<=1073928572?r>0?(a=r-Kn,n[0]=a-Qn,n[1]=a-n[0]-Qn,1):(a=r+Kn,n[0]=a+Qn,n[1]=a-n[0]+Qn,-1):r>0?(a=r-2*Kn,n[0]=a-Rn,n[1]=a-n[0]-Rn,2):(a=r+2*Kn,n[0]=a+Rn,n[1]=a-n[0]+Rn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Jn(r,o,n):r>0?(a=r-3*Kn,n[0]=a-Xn,n[1]=a-n[0]-Xn,3):(a=r+3*Kn,n[0]=a+Xn,n[1]=a-n[0]+Xn,-3):1075388923===o?Jn(r,o,n):r>0?(a=r-4*Kn,n[0]=a-Zn,n[1]=a-n[0]-Zn,4):(a=r+4*Kn,n[0]=a+Zn,n[1]=a-n[0]+Zn,-4);if(o<1094263291)return Jn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=zn(r),a=Bn(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)$n[f]=0|a,a=16777216*(a-$n[f]);for($n[2]=a,u=3;0===$n[u-1];)u-=1;return i=Dn($n,rt,e,u),r<0?(n[0]=-rt[0],n[1]=-rt[1],-i):(n[0]=rt[0],n[1]=rt[1],i)},tt=sr,et=Or,ot=nt,ut=[0,0],ft=function(r){var n,t;return n=tt(r),(n&=2147483647)<=1072243195?n<1044381696?r:et(r,0,1):n>=2146435072?NaN:(t=ot(r,ut),et(ut[0],ut[1],1-((1&t)<<1)))},it=3.141592653589793;function at(r,n,t){return v(n)||v(t)||t<=0||v(r)||r<0||r>1?NaN:n+t*ft(it*(r-.5))}var ct=function(r){return function(){return r}};return b(at,"factory",(function(r,n){return v(r)||v(n)||n<=0?ct(NaN):function(t){return v(t)||t<0||t>1?NaN:r+n*ft(it*(t-.5))}})),at},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=n();
//# sourceMappingURL=index.js.map
