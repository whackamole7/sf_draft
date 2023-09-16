import{e as l,r as k,h as L,j as M,k as R,l as K,m as z,n as H,o as I,q as N,s as V,t as Z,u as S,v as p,w,x as J,y as W,z as $,A as G,D as Q,E as X,F as Y}from"./@ethersproject-21b0065b.js";var x={};(function(e){var A=l&&l.__createBinding||(Object.create?function(t,u,i,f){f===void 0&&(f=i),Object.defineProperty(t,f,{enumerable:!0,get:function(){return u[i]}})}:function(t,u,i,f){f===void 0&&(f=i),t[f]=u[i]}),E=l&&l.__setModuleDefault||(Object.create?function(t,u){Object.defineProperty(t,"default",{enumerable:!0,value:u})}:function(t,u){t.default=u}),h=l&&l.__importStar||function(t){if(t&&t.__esModule)return t;var u={};if(t!=null)for(var i in t)i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)&&A(u,t,i);return E(u,t),u};Object.defineProperty(e,"__esModule",{value:!0}),e.formatBytes32String=e.Utf8ErrorFuncs=e.toUtf8String=e.toUtf8CodePoints=e.toUtf8Bytes=e._toEscapedUtf8String=e.nameprep=e.hexDataSlice=e.hexDataLength=e.hexZeroPad=e.hexValue=e.hexStripZeros=e.hexConcat=e.isHexString=e.hexlify=e.base64=e.base58=e.TransactionDescription=e.LogDescription=e.Interface=e.SigningKey=e.HDNode=e.defaultPath=e.isBytesLike=e.isBytes=e.zeroPad=e.stripZeros=e.concat=e.arrayify=e.shallowCopy=e.resolveProperties=e.getStatic=e.defineReadOnly=e.deepCopy=e.checkProperties=e.poll=e.fetchJson=e._fetchData=e.RLP=e.Logger=e.checkResultErrors=e.FormatTypes=e.ParamType=e.FunctionFragment=e.EventFragment=e.ErrorFragment=e.ConstructorFragment=e.Fragment=e.defaultAbiCoder=e.AbiCoder=void 0,e.Indexed=e.Utf8ErrorReason=e.UnicodeNormalizationForm=e.SupportedAlgorithm=e.mnemonicToSeed=e.isValidMnemonic=e.entropyToMnemonic=e.mnemonicToEntropy=e.getAccountPath=e.verifyTypedData=e.verifyMessage=e.recoverPublicKey=e.computePublicKey=e.recoverAddress=e.computeAddress=e.getJsonWalletAddress=e.TransactionTypes=e.serializeTransaction=e.parseTransaction=e.accessListify=e.joinSignature=e.splitSignature=e.soliditySha256=e.solidityKeccak256=e.solidityPack=e.shuffled=e.randomBytes=e.sha512=e.sha256=e.ripemd160=e.keccak256=e.computeHmac=e.commify=e.parseUnits=e.formatUnits=e.parseEther=e.formatEther=e.isAddress=e.getCreate2Address=e.getContractAddress=e.getIcapAddress=e.getAddress=e._TypedDataEncoder=e.id=e.isValidName=e.namehash=e.hashMessage=e.dnsEncode=e.parseBytes32String=void 0;var n=M;Object.defineProperty(e,"AbiCoder",{enumerable:!0,get:function(){return n.AbiCoder}}),Object.defineProperty(e,"checkResultErrors",{enumerable:!0,get:function(){return n.checkResultErrors}}),Object.defineProperty(e,"ConstructorFragment",{enumerable:!0,get:function(){return n.ConstructorFragment}}),Object.defineProperty(e,"defaultAbiCoder",{enumerable:!0,get:function(){return n.defaultAbiCoder}}),Object.defineProperty(e,"ErrorFragment",{enumerable:!0,get:function(){return n.ErrorFragment}}),Object.defineProperty(e,"EventFragment",{enumerable:!0,get:function(){return n.EventFragment}}),Object.defineProperty(e,"FormatTypes",{enumerable:!0,get:function(){return n.FormatTypes}}),Object.defineProperty(e,"Fragment",{enumerable:!0,get:function(){return n.Fragment}}),Object.defineProperty(e,"FunctionFragment",{enumerable:!0,get:function(){return n.FunctionFragment}}),Object.defineProperty(e,"Indexed",{enumerable:!0,get:function(){return n.Indexed}}),Object.defineProperty(e,"Interface",{enumerable:!0,get:function(){return n.Interface}}),Object.defineProperty(e,"LogDescription",{enumerable:!0,get:function(){return n.LogDescription}}),Object.defineProperty(e,"ParamType",{enumerable:!0,get:function(){return n.ParamType}}),Object.defineProperty(e,"TransactionDescription",{enumerable:!0,get:function(){return n.TransactionDescription}});var g=R;Object.defineProperty(e,"getAddress",{enumerable:!0,get:function(){return g.getAddress}}),Object.defineProperty(e,"getCreate2Address",{enumerable:!0,get:function(){return g.getCreate2Address}}),Object.defineProperty(e,"getContractAddress",{enumerable:!0,get:function(){return g.getContractAddress}}),Object.defineProperty(e,"getIcapAddress",{enumerable:!0,get:function(){return g.getIcapAddress}}),Object.defineProperty(e,"isAddress",{enumerable:!0,get:function(){return g.isAddress}});var T=h(k);e.base64=T;var F=K;Object.defineProperty(e,"base58",{enumerable:!0,get:function(){return F.Base58}});var r=z;Object.defineProperty(e,"arrayify",{enumerable:!0,get:function(){return r.arrayify}}),Object.defineProperty(e,"concat",{enumerable:!0,get:function(){return r.concat}}),Object.defineProperty(e,"hexConcat",{enumerable:!0,get:function(){return r.hexConcat}}),Object.defineProperty(e,"hexDataSlice",{enumerable:!0,get:function(){return r.hexDataSlice}}),Object.defineProperty(e,"hexDataLength",{enumerable:!0,get:function(){return r.hexDataLength}}),Object.defineProperty(e,"hexlify",{enumerable:!0,get:function(){return r.hexlify}}),Object.defineProperty(e,"hexStripZeros",{enumerable:!0,get:function(){return r.hexStripZeros}}),Object.defineProperty(e,"hexValue",{enumerable:!0,get:function(){return r.hexValue}}),Object.defineProperty(e,"hexZeroPad",{enumerable:!0,get:function(){return r.hexZeroPad}}),Object.defineProperty(e,"isBytes",{enumerable:!0,get:function(){return r.isBytes}}),Object.defineProperty(e,"isBytesLike",{enumerable:!0,get:function(){return r.isBytesLike}}),Object.defineProperty(e,"isHexString",{enumerable:!0,get:function(){return r.isHexString}}),Object.defineProperty(e,"joinSignature",{enumerable:!0,get:function(){return r.joinSignature}}),Object.defineProperty(e,"zeroPad",{enumerable:!0,get:function(){return r.zeroPad}}),Object.defineProperty(e,"splitSignature",{enumerable:!0,get:function(){return r.splitSignature}}),Object.defineProperty(e,"stripZeros",{enumerable:!0,get:function(){return r.stripZeros}});var d=H;Object.defineProperty(e,"_TypedDataEncoder",{enumerable:!0,get:function(){return d._TypedDataEncoder}}),Object.defineProperty(e,"dnsEncode",{enumerable:!0,get:function(){return d.dnsEncode}}),Object.defineProperty(e,"hashMessage",{enumerable:!0,get:function(){return d.hashMessage}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return d.id}}),Object.defineProperty(e,"isValidName",{enumerable:!0,get:function(){return d.isValidName}}),Object.defineProperty(e,"namehash",{enumerable:!0,get:function(){return d.namehash}});var c=I;Object.defineProperty(e,"defaultPath",{enumerable:!0,get:function(){return c.defaultPath}}),Object.defineProperty(e,"entropyToMnemonic",{enumerable:!0,get:function(){return c.entropyToMnemonic}}),Object.defineProperty(e,"getAccountPath",{enumerable:!0,get:function(){return c.getAccountPath}}),Object.defineProperty(e,"HDNode",{enumerable:!0,get:function(){return c.HDNode}}),Object.defineProperty(e,"isValidMnemonic",{enumerable:!0,get:function(){return c.isValidMnemonic}}),Object.defineProperty(e,"mnemonicToEntropy",{enumerable:!0,get:function(){return c.mnemonicToEntropy}}),Object.defineProperty(e,"mnemonicToSeed",{enumerable:!0,get:function(){return c.mnemonicToSeed}});var C=N;Object.defineProperty(e,"getJsonWalletAddress",{enumerable:!0,get:function(){return C.getJsonWalletAddress}});var D=V;Object.defineProperty(e,"keccak256",{enumerable:!0,get:function(){return D.keccak256}});var U=Z;Object.defineProperty(e,"Logger",{enumerable:!0,get:function(){return U.Logger}});var y=S;Object.defineProperty(e,"computeHmac",{enumerable:!0,get:function(){return y.computeHmac}}),Object.defineProperty(e,"ripemd160",{enumerable:!0,get:function(){return y.ripemd160}}),Object.defineProperty(e,"sha256",{enumerable:!0,get:function(){return y.sha256}}),Object.defineProperty(e,"sha512",{enumerable:!0,get:function(){return y.sha512}});var P=p;Object.defineProperty(e,"solidityKeccak256",{enumerable:!0,get:function(){return P.keccak256}}),Object.defineProperty(e,"solidityPack",{enumerable:!0,get:function(){return P.pack}}),Object.defineProperty(e,"soliditySha256",{enumerable:!0,get:function(){return P.sha256}});var s=w;Object.defineProperty(e,"randomBytes",{enumerable:!0,get:function(){return s.randomBytes}}),Object.defineProperty(e,"shuffled",{enumerable:!0,get:function(){return s.shuffled}});var o=J;Object.defineProperty(e,"checkProperties",{enumerable:!0,get:function(){return o.checkProperties}}),Object.defineProperty(e,"deepCopy",{enumerable:!0,get:function(){return o.deepCopy}}),Object.defineProperty(e,"defineReadOnly",{enumerable:!0,get:function(){return o.defineReadOnly}}),Object.defineProperty(e,"getStatic",{enumerable:!0,get:function(){return o.getStatic}}),Object.defineProperty(e,"resolveProperties",{enumerable:!0,get:function(){return o.resolveProperties}}),Object.defineProperty(e,"shallowCopy",{enumerable:!0,get:function(){return o.shallowCopy}});var q=h(L);e.RLP=q;var j=W;Object.defineProperty(e,"computePublicKey",{enumerable:!0,get:function(){return j.computePublicKey}}),Object.defineProperty(e,"recoverPublicKey",{enumerable:!0,get:function(){return j.recoverPublicKey}}),Object.defineProperty(e,"SigningKey",{enumerable:!0,get:function(){return j.SigningKey}});var a=$;Object.defineProperty(e,"formatBytes32String",{enumerable:!0,get:function(){return a.formatBytes32String}}),Object.defineProperty(e,"nameprep",{enumerable:!0,get:function(){return a.nameprep}}),Object.defineProperty(e,"parseBytes32String",{enumerable:!0,get:function(){return a.parseBytes32String}}),Object.defineProperty(e,"_toEscapedUtf8String",{enumerable:!0,get:function(){return a._toEscapedUtf8String}}),Object.defineProperty(e,"toUtf8Bytes",{enumerable:!0,get:function(){return a.toUtf8Bytes}}),Object.defineProperty(e,"toUtf8CodePoints",{enumerable:!0,get:function(){return a.toUtf8CodePoints}}),Object.defineProperty(e,"toUtf8String",{enumerable:!0,get:function(){return a.toUtf8String}}),Object.defineProperty(e,"Utf8ErrorFuncs",{enumerable:!0,get:function(){return a.Utf8ErrorFuncs}});var b=G;Object.defineProperty(e,"accessListify",{enumerable:!0,get:function(){return b.accessListify}}),Object.defineProperty(e,"computeAddress",{enumerable:!0,get:function(){return b.computeAddress}}),Object.defineProperty(e,"parseTransaction",{enumerable:!0,get:function(){return b.parse}}),Object.defineProperty(e,"recoverAddress",{enumerable:!0,get:function(){return b.recoverAddress}}),Object.defineProperty(e,"serializeTransaction",{enumerable:!0,get:function(){return b.serialize}}),Object.defineProperty(e,"TransactionTypes",{enumerable:!0,get:function(){return b.TransactionTypes}});var m=Q;Object.defineProperty(e,"commify",{enumerable:!0,get:function(){return m.commify}}),Object.defineProperty(e,"formatEther",{enumerable:!0,get:function(){return m.formatEther}}),Object.defineProperty(e,"parseEther",{enumerable:!0,get:function(){return m.parseEther}}),Object.defineProperty(e,"formatUnits",{enumerable:!0,get:function(){return m.formatUnits}}),Object.defineProperty(e,"parseUnits",{enumerable:!0,get:function(){return m.parseUnits}});var v=X;Object.defineProperty(e,"verifyMessage",{enumerable:!0,get:function(){return v.verifyMessage}}),Object.defineProperty(e,"verifyTypedData",{enumerable:!0,get:function(){return v.verifyTypedData}});var O=Y;Object.defineProperty(e,"_fetchData",{enumerable:!0,get:function(){return O._fetchData}}),Object.defineProperty(e,"fetchJson",{enumerable:!0,get:function(){return O.fetchJson}}),Object.defineProperty(e,"poll",{enumerable:!0,get:function(){return O.poll}});var B=S;Object.defineProperty(e,"SupportedAlgorithm",{enumerable:!0,get:function(){return B.SupportedAlgorithm}});var _=$;Object.defineProperty(e,"UnicodeNormalizationForm",{enumerable:!0,get:function(){return _.UnicodeNormalizationForm}}),Object.defineProperty(e,"Utf8ErrorReason",{enumerable:!0,get:function(){return _.Utf8ErrorReason}})})(x);export{x as u};
