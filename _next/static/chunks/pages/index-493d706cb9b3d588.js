(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3031)}])},3031:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ez}});var a,s=t(5893),o=t(7294),i=t(701),r=t.n(i),c=t(9719),l=t.n(c);t(7918);var u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e?"".concat(e.slice(0,n),"...").concat(e.slice(-4)):""},d=function(e,n){var t=+n-+e,a=t>0?Math.floor(t/1e3/60/60/24):0,s=t>0?Math.floor(t/1e3/60/60)%24:0,o=t>0?Math.floor(t/1e3/60)%60:0,i=t>0?Math.floor(t/1e3)%60:0;return a=a<10?"0"+a:a,s=s<10?"0"+s:s,o=o<10?"0"+o:o,i=i<10?"0"+i:i,"".concat(a,":").concat(s,":").concat(o,":").concat(i)},_=t(4184),m=t.n(_),p="00:00:00:00",f=function(e){var n=e.className,t=(0,o.useState)(""),a=t[0],i=t[1],r=(0,o.useState)(new Date(2022,10,10)),c=r[0];return r[1],(0,o.useEffect)(function(){if(c){var e=setInterval(function(){var n=new Date,t=d(n,c);t===p&&clearInterval(e),i(t)},1e3);return function(){return clearInterval(e)}}},[c]),c&&a!==p&&(0,s.jsx)("span",{className:m()(l().timer,n),children:a})},h=t(331),x=t.n(h),g=t(9473),v=function(e){return{type:"CHANGE_CURRENT_POPUP",currentPopup:e}},N=t(3032),j=function(){var e=(0,g.I0)(),n=(0,N.useWallet)().connected,t=function(t){t.preventDefault(),n?e(v("buy-nft")):e(v("connect-wallet"))};return(0,s.jsxs)("div",{className:x().wrapperButton,children:[(0,s.jsx)("a",{onClick:t,href:"https://t.me/degendogechat",target:"_blank",rel:"noreferrer",className:x().button,children:n?"MINT SOON":"connect wallet"}),(0,s.jsx)("span",{className:x().amountMinted,children:"0/5555 minted"})]})},y=function(){return(0,s.jsxs)("div",{className:r().content,children:[(0,s.jsxs)("div",{className:r().poster,children:[(0,s.jsxs)("div",{className:m()(r().image,r().mintSoon),children:[(0,s.jsx)("img",{src:"/images/intro.gif",alt:"Doge"}),(0,s.jsx)(f,{className:r().timer})]}),(0,s.jsxs)("div",{className:r().text,children:["APTOD",(0,s.jsx)("br",{}),"o",(0,s.jsx)("br",{}),"g",(0,s.jsx)("br",{}),"e"]})]}),(0,s.jsxs)("div",{className:r().info,children:[(0,s.jsx)("div",{className:r().description,children:"NFT representation of your FOMO expirience on"}),(0,s.jsx)("img",{src:"/images/aptos2.png",alt:"aptos",className:r().aptos}),(0,s.jsx)(j,{})]})]})},b=t(477),w=t.n(b),T=t(7469),k=t.n(T),M=[{name:"twitter",href:"https://twitter.com/degennftdoge?s=21&t=s6lfbT7PiUGFmJSlvcHN7A"},],C=function(e){var n=e.classNameLink,t=e.classNameContainer;return(0,s.jsx)("div",{className:m()(k().socialLinks,t),children:M.map(function(e){var t=e.name,a=e.href;return(0,s.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:m()(k().item,n),children:t},a)})})},I=t(4924),F=t(8339),P=t.n(F),O=t(6042),S=t(9396),A=t(9534),B=t(6283),L=t.n(B),E=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1];return(0,o.useEffect)(function(){t(!0)},[]),{isReadyRender:n}},W=function(e){var n=e.className,t=e.children,a=(0,A.Z)(e,["className","children"]);return E().isReadyRender&&(0,s.jsx)("button",(0,S.Z)((0,O.Z)({className:m()(L().button,n)},a),{children:t}))},Z=function(){var e,n=(0,g.v9)(function(e){return{currentPopup:e.popup.currentPopup}}).currentPopup,t=(0,o.useState)(!1),a=t[0],i=t[1],r=(0,g.I0)(),c=E().isReadyRender,l=(0,N.useWallet)(),d=l.disconnect,_=l.account,p=l.connected,f=function(){p?d():r(v("connect-wallet"))};return(0,o.useEffect)(function(){console.log(a)},[a]),c&&(0,s.jsx)("div",{className:P().wrapper,children:(0,s.jsx)(W,{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onClick:f,className:m()(P().button,(e={},(0,I.Z)(e,P().active,"connect-wallet"===n),(0,I.Z)(e,P().disconnect,p&&a),e)),children:(0,s.jsxs)("span",{className:P().text,children:[p&&!a&&u(_.address),p&&a&&"disconnect",!p&&"connect wallet"]})})})},D=function(){return(0,s.jsxs)("div",{className:w().header,children:[(0,s.jsx)("div",{className:w().logo,children:(0,s.jsx)("img",{className:w().image,src:"/images/logo-2.png",alt:"Logo"})}),(0,s.jsx)(Z,{}),(0,s.jsx)(C,{})]})},H=t(1061),q=t.n(H),R=function(){return(0,s.jsxs)("div",{className:q().intro,children:[(0,s.jsx)(D,{}),(0,s.jsx)(y,{}),(0,s.jsxs)("div",{className:q().backgroundText,children:[(0,s.jsx)("span",{className:q().text,children:"wen lambo"}),(0,s.jsx)("span",{className:q().text,children:"much wow"}),(0,s.jsx)("span",{className:q().text,children:"420x"}),(0,s.jsx)("span",{className:q().text,children:"to the moon..."})]})]})},K=t(1300),U=t.n(K),Y=function(){return(0,g.I0)(),(0,s.jsxs)("div",{className:U().options,children:[(0,s.jsxs)("span",{className:U().title,children:["How to get my first ",(0,s.jsx)("span",{className:U().mark,children:"degen"})," NFT on APTOS?"]}),(0,s.jsxs)("div",{className:U().optionsItems,children:[(0,s.jsxs)("div",{className:U().optionsItem,children:[(0,s.jsx)("div",{className:U().imageWrapper,children:(0,s.jsx)("img",{className:U().image,src:"/images/options/option-1.jpg",alt:"Image doge"})}),(0,s.jsx)("span",{className:U().name,children:"option 1"}),(0,s.jsx)("div",{className:U().description,children:"get NFT instantly through our strange website"}),(0,s.jsx)(W,{className:U().button,children:(0,s.jsx)("span",{className:U().text,children:"buy with $APT"})})]}),(0,s.jsxs)("div",{className:U().optionsItem,children:[(0,s.jsx)("div",{className:U().imageWrapper,children:(0,s.jsx)("img",{className:U().image,src:"/images/options/option-1.jpg",alt:"Image doge"})}),(0,s.jsx)("span",{className:U().name,children:"option 1"}),(0,s.jsx)("div",{className:U().description,children:"get NFT through available NFT marketplaces"}),(0,s.jsxs)(W,{className:m()(U().button,U().red),children:[(0,s.jsx)("span",{className:U().text,children:"coming soon"}),(0,s.jsx)(f,{className:U().timer})]})]})]})]})},G=t(4899),X=t.n(G),Q=t(4939),V=t.n(Q),J=[{image:"/images/intro-doge.jpg",name:"150 unique traits "},{image:"/images/intro-doge.jpg",name:"Much wow"},{image:"/images/intro-doge.jpg",name:"Dogs"},{image:"/images/intro-doge.jpg",name:"Eco-Friendly"},{image:"/images/intro-doge.jpg",name:"Based on IPFS"}],$=function(){return(0,s.jsx)("div",{className:V().features,children:(0,s.jsx)("div",{className:V().featuresItems,children:J.map(function(e){var n=e.image,t=e.name;return(0,s.jsxs)("div",{className:V().featuresItem,children:[(0,s.jsx)("img",{className:V().image,src:n,alt:t}),(0,s.jsx)("span",{className:V().name,children:t})]},t)})})})},z=t(5731),ee=t.n(z),en=function(){var e=(0,o.useState)({mintDate:"28.10.22",price:1,limitPerWallet:33,supply:5555}),n=e[0];return e[1],(0,s.jsxs)("div",{className:ee().details,children:[(0,s.jsxs)("span",{className:ee().text,children:["Mint date: ",n.mintDate||"TBA"]}),(0,s.jsxs)("div",{className:m()(ee().text,ee().price),children:["Price: ",n.price||"TBA"," $APT"]}),(0,s.jsxs)("span",{className:ee().text,children:["Limit per wallet: ",n.limitPerWallet||"TBA"]}),(0,s.jsxs)("span",{className:ee().text,children:["Supply: ",n.supply||"TBA"," HFT"]})]})},et={"key-features":(0,s.jsx)($,{}),"mint-details":(0,s.jsx)(en,{})},ea=function(){var e=(0,o.useState)("key-features"),n=e[0],t=e[1],a=function(e){t(e)};return(0,s.jsxs)("div",{className:X().info,children:[(0,s.jsxs)("div",{className:X().tabs,children:[(0,s.jsx)(W,{onClick:function(){return a("key-features")},className:m()(X().tab,"key-features"===n&&X().active),children:(0,s.jsx)("span",{className:X().text,children:"Key features"})}),(0,s.jsx)(W,{onClick:function(){return a("mint-details")},className:m()(X().tab,"mint-details"===n&&X().active),children:(0,s.jsx)("span",{className:X().text,children:"Mint details"})})]}),et[n]]})},es=t(797),eo=t(7961),ei=t.n(eo),er=[{question:"What is APTOS?",answer:"Aptos is a new Layer 1 blockchain that is faster, more secure, and more scalable than other L1 blockchains that are live today. It was built by former Meta (Libra) engineers, who also developed the Move language for this blockchain. Aptos launched their mainnet some days ago, and made an airdrop of native $APT token for the claim of their free NFT, which has become a game changer for some crypto nerds. For everyone else, this is just another fucking story."},{question:"What is FOMO?",answer:"Short form for ‘fear of missing out’. The feeling when you see a huge green dildo on a chart and you don’t own that coin, or you spent a year in ct and never heard about APTOS, so you sell other shit NFTs on SOL to buy into APTOS NFTs. As crypto trading is still very much driven by emotions rather than valuation, FOMO is a huge factor to consider when swing trading in crypto."},{question:"WTF is APTODOGE?",answer:"5555 collection of pooing dogs which represent real situations and emotions of NFT collectors rn."},{question:"Why pooing Doge?",answer:"Looks like it is the best metaphor for your 24/7 ct scrolling and APT airdrop missing at the same time."},{question:"Any plans, roadmap?",answer:"Make fun on Aptos, then, be the first who makes shit on $SUI. However, you never know when you’ll want to take the next shit, so we’ll improvise."},{question:"What is the best trading strategy?",answer:"Don’t sell under 1 $APT and use it as your PFP. Classic"},],ec=function(){var e=(0,o.useState)([]),n=e[0],t=e[1],a=function(e){console.log(e),console.log(n),n.includes(e)?t(function(n){return n.filter(function(n){return n!==e})}):t(function(n){return(0,es.Z)(n).concat([e])})};return(0,s.jsxs)("div",{className:ei().faq,children:[(0,s.jsx)("span",{className:ei().title,children:"faq"}),(0,s.jsx)("div",{className:ei().items,children:er.map(function(e,t){var o=e.question,i=e.answer;return(0,s.jsxs)("div",{className:ei().item,children:[(0,s.jsx)("span",{onClick:function(){return a(t)},className:ei().question,children:o}),(0,s.jsx)("span",{className:m()(ei().answer,n.includes(t)&&ei().active),children:i})]},t)})})]})},el=t(6715),eu=t.n(el),ed=function(){return(0,s.jsxs)("div",{className:eu().footer,children:[(0,s.jsx)("img",{className:eu().logo,src:"/images/logo.png",alt:"Logo"}),(0,s.jsxs)("div",{className:eu().content,children:[(0,s.jsx)(C,{classNameContainer:eu().links,classNameLink:eu().link}),(0,s.jsx)("span",{className:eu().description,children:"made by degens for degens"})]}),(0,s.jsx)("img",{className:eu().logo,src:"/images/logo.png",alt:"Logo"})]})},e_=t(1900),em=t.n(e_),ep=t(7044),ef=t.n(ep),eh=function(){return(0,s.jsx)("div",{className:ef().tape,children:[,,].fill("").map(function(e,n){return(0,s.jsxs)("div",{className:ef().text,children:[(0,s.jsxs)("div",{className:ef().wrapper,children:[(0,s.jsx)("span",{className:ef().word,children:"MARKETPLACE SOON"}),(0,s.jsx)("span",{className:ef().word,children:"5555 NFTs"}),(0,s.jsx)("span",{className:ef().word,children:"HOSTED ON IPFS"}),(0,s.jsx)("span",{className:ef().word,children:"MARKETPLACE SOON"}),(0,s.jsx)("span",{className:ef().word,children:"5555 NFTs"}),(0,s.jsx)("span",{className:ef().word,children:"HOSTED ON IPFS"})]}),(0,s.jsxs)("div",{className:ef().wrapper,children:[(0,s.jsx)("span",{className:ef().word,children:"MARKETPLACE SOON"}),(0,s.jsx)("span",{className:ef().word,children:"5555 NFTs"}),(0,s.jsx)("span",{className:ef().word,children:"HOSTED ON IPFS"}),(0,s.jsx)("span",{className:ef().word,children:"MARKETPLACE SOON"}),(0,s.jsx)("span",{className:ef().word,children:"5555 NFTs"}),(0,s.jsx)("span",{className:ef().word,children:"HOSTED ON IPFS"})]})]},n)})})},ex=function(){return(0,s.jsxs)("div",{className:em().wrapper,children:[(0,s.jsxs)("div",{className:em().containerCarousel,children:[(0,s.jsx)("div",{className:em().image}),(0,s.jsx)("div",{className:m()(em().image,em().secondImage)})]}),(0,s.jsx)(eh,{}),(0,s.jsx)(eh,{})]})},eg=t(8993),ev=t.n(eg),eN=t(4488),ej=t.n(eN),ey=function(e,n){(0,o.useEffect)(function(){var t=function(t){!(!e.current||e.current.contains(t.target))&&n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,n])},eb=function(e){var n=e.children,t=e.className,a=(0,o.useRef)(null),i=(0,g.I0)();(0,o.useEffect)(function(){return void 0!==window&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="visible"}},[]);var r=function(){i(v(null))};return ey(a,r),(0,s.jsx)("div",{className:ej().container,children:(0,s.jsxs)("div",{ref:a,className:m()(ej().popup,t),children:[n,(0,s.jsx)("div",{onClick:r,className:ej().close,children:"X"})]})})},ew=function(){var e=(0,g.I0)(),n=(0,N.useWallet)(),t=n.connect,a=n.wallets,i=n.connected;return(0,o.useEffect)(function(){i&&e(v(null))},[i]),(0,s.jsxs)(eb,{className:ev().popup,children:[(0,s.jsx)("span",{className:ev().title,children:"Connect wallet"}),(0,s.jsx)("div",{className:ev().buttons,children:a.map(function(e){var n=e.adapter;return(0,s.jsx)(W,{className:ev().button,onClick:function(){t(n.name)},id:n.name.split(" ").join("_"),children:(0,s.jsxs)("span",{className:ev().text,children:["connect with ",n.name]})},n.name)})})]})},eT=t(7568),ek=t(655),eM=t(7881),eC=t.n(eM),eI=t(3704),eF=t.n(eI),eP=t(1021),eO=t.n(eP),eS=function(e){var n=e.className;return(0,s.jsxs)("div",{className:m()(eO().loader,n),children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})},eA=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:eF().doge,src:"/images/buttonMint/doge.png",alt:"doge"}),(0,s.jsxs)("div",{className:eF().loading,children:[(0,s.jsx)(eS,{className:eF().loader}),(0,s.jsx)("span",{className:eF().text,children:"loading"})]})]})},eB=t(4284),eL=t(9669),eE=t.n(eL),eW="0xb2ffa88ddf2eaa0ae972d96900d2e20619b406230a855d806ea804d3cfbdade0",eZ="Aptos Collection",eD="test",eH="0xdf5c814388f4162f353e14f6123fcba8f39a958e4a2640e38e9e2c7cdfd2ac1d";function eq(){return(eq=(0,eT.Z)(function(){var e,n,t,s,o,i,r,c;return(0,ek.__generator)(this,function(e){switch(e.label){case 0:return[4,eE().get("".concat(a,"/accounts/").concat(eW,"/resources"))];case 1:n=e.sent().data,t=!0,s=!1,o=void 0;try{for(i=n[Symbol.iterator]();!(t=(r=i.next()).done);t=!0)if((c=r.value).type==="".concat(eH,"::candy_machine_v2::ResourceData"))return[2,c.data.resource_account.account]}catch(l){s=!0,o=l}finally{try{t||null==i.return||i.return()}finally{if(s)throw o}}return console.error("Candy machine not initialized on given address for chain ".concat(eD)),[2,null]}})})).apply(this,arguments)}function eR(){return(eR=(0,eT.Z)(function(e){var n,t,s,o,i,r,c,l,u;return(0,ek.__generator)(this,function(n){switch(n.label){case 0:return[4,eE().get("".concat(a,"/accounts/").concat(e,"/resources"))];case 1:t=n.sent().data,s={},o=!0,i=!1,r=void 0;try{for(c=t[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){if(u=l.value,"0x3::token::Collections"===u.type){s.numUploadedTokens=u.data.create_token_data_events.counter,s.numMintedTokens=u.data.mint_token_events.counter,s.tokenDataHandle=u.data.token_data.handle;continue}u.type==="".concat(eH,"::candy_machine_v2::CollectionConfigs")&&(s.candyMachineConfigHandle=u.data.collection_configs.handle)}}catch(d){i=!0,r=d}finally{try{o||null==c.return||c.return()}finally{if(i)throw r}}return[2,s]}})})).apply(this,arguments)}function eK(){return(eK=(0,eT.Z)(function(e){var n,t,s,o,i,r,c,l,u;return(0,ek.__generator)(this,function(s){switch(s.label){case 0:return n=JSON.stringify({key_type:"vector<u8>",value_type:"".concat(eH,"::candy_machine_v2::CollectionConfig"),key:function(e){for(var n="",t=0;t<e.length;t++)n+=e.charCodeAt(t).toString(16);return n}(eZ)}),t={headers:{"Content-Type":"application/json"}},[4,eE().post("".concat(a,"/tables/").concat(e,"/item"),n,t)];case 1:return i=(o=s.sent().data).is_public,r=o.max_supply_per_user,c=o.mint_fee_per_mille/1e8,[2,{isPublic:i,maxMintsPerWallet:r,mintFee:c,presaleMintTime:l=o.presale_mint_time,publicMintTime:o.public_mint_time}]}})})).apply(this,arguments)}function eU(){return(eU=(0,eT.Z)(function(e,n,t,a,s){var o,i,r,c,l,u,d,_,m,p;return(0,ek.__generator)(this,function(f){switch(f.label){case 0:o=[],i=!0,r=!1,c=void 0,f.label=1;case 1:f.trys.push([1,9,10,11]),l=s.events[Symbol.iterator](),f.label=2;case 2:if(i=(u=l.next()).done)return[3,8];if("0x3::token::MintTokenEvent"!==(d=u.value).type)return[3,7];_={name:d.data.id.name,imageUri:null},f.label=3;case 3:return f.trys.push([3,5,,6]),[4,e.getTableItem(n,{key_type:"0x3::token::TokenDataId",value_type:"0x3::token::TokenData",key:{creator:t,collection:a,name:_.name}})];case 4:return _.imageUri=f.sent().uri,[3,6];case 5:return m=f.sent(),console.error(m),[3,6];case 6:o.push(_),f.label=7;case 7:return i=!0,[3,2];case 8:return[3,11];case 9:return p=f.sent(),r=!0,c=p,[3,11];case 10:try{i||null==l.return||l.return()}finally{if(r)throw c}return[7];case 11:return console.log("Minted NFTs"),console.log(o),[2,o]}})})).apply(this,arguments)}a="dev"==eD?"https://fullnode.devnet.aptoslabs.com/v1":"test"===eD?"https://fullnode.testnet.aptoslabs.com/v1":"https://fullnode.mainnet.aptoslabs.com/v1";var eY={getCandyMachineResourceAccount:function(){return eq.apply(this,arguments)},getCandyMachineCollectionInfo:function(e){return eR.apply(this,arguments)},getCandyMachineConfigData:function(e){return eK.apply(this,arguments)},getTimeDifference:function(e,n){if(n<e)return"LIVE";var t=Math.abs(n-e),a=Math.floor(t/86400),s=Math.floor((t-=86400*a)/3600)%24,o=Math.floor((t-=3600*s)/60)%60;return t-=60*o,{days:a,hours:s,minutes:o,seconds:Math.floor(t%60)}},getMintedNfts:function(e,n,t,a,s){return eU.apply(this,arguments)}},eG=new eB.gK(a),eX=function(){var e,n=(0,N.useWallet)(),t=(0,o.useState)(!1),a=(t[0],t[1]),i=(0,o.useState)({data:{},fetch:b}),r=i[0],c=i[1],l=(0,o.useState)({presale:"",public:"",timeout:null}),u=l[0],d=l[1],_=(0,o.useState)({numToMint:1,minting:!1,success:!1,mintedNfts:[]}),p=_[0],f=_[1],h=(0,o.useState)(!1),x=(h[0],h[1]),g=void 0===r.data.maxMintsPerWallet?10:Math.min(r.data.maxMintsPerWallet,r.data.numUploadedTokens-r.data.numMintedTokens),v=function(e){var n=p.numToMint+e;n>=0&&n<=g&&f((0,S.Z)((0,O.Z)({},p),{numToMint:n}))},j=(e=(0,eT.Z)(function(){var e,t,a,s,o,i,l,u;return(0,ek.__generator)(this,function(u){switch(u.label){case 0:if(console.log("wallet.account?.address?.toString()",null===(e=n.account)||void 0===e?void 0:null===(t=e.address)||void 0===t?void 0:t.toString()),(null===(a=n.account)||void 0===a?void 0:null===(s=a.address)||void 0===s?void 0:s.toString())===void 0||p.minting)return[2];f((0,S.Z)((0,O.Z)({},p),{minting:!0})),o={type:"entry_function_payload",function:"".concat(eH,"::candy_machine_v2::mint_tokens"),type_arguments:[],arguments:[eW,eZ,p.numToMint]},u.label=1;case 1:return u.trys.push([1,4,,5]),[4,n.signAndSubmitTransaction(o)];case 2:return l=u.sent(),console.log("txHash",l),[4,eG.waitForTransactionWithResult(l.hash)];case 3:return i=u.sent(),[3,5];case 4:return i={success:!1,vm_status:u.sent().message},[3,5];case 5:return console.log("txInfo",i),[4,function(e){return y.apply(this,arguments)}(i)];case 6:return u.sent(),i.success&&c((0,S.Z)((0,O.Z)({},r),{data:(0,S.Z)((0,O.Z)({},r.data),{numMintedTokens:(parseInt(r.data.numMintedTokens)+Number(p.numToMint)).toString()})})),[2]}})}),function(){return e.apply(this,arguments)});function y(){return(y=(0,eT.Z)(function(e){var n,t,a,s,o;return(0,ek.__generator)(this,function(i){switch(i.label){case 0:if(console.log(e),n=e.success,console.log(n?"Mint success!":"Mint failure, an error occured."),t=[],n)return[3,1];return a=new Map([["Failed to sign transaction","An error occured while signing."],["Move abort in 0x1::coin: EINSUFFICIENT_BALANCE(0x10006): Not enough coins to complete transaction","Insufficient funds to mint."]]),s=e.vm_status,console.error("Mint not successful: ".concat(s)),o=void 0===(o=a.get(s))?"Unkown error occured. Try again.":o,[3,3];case 1:return[4,eY.getMintedNfts(eG,r.data.tokenDataHandle,r.data.cmResourceAccount,eZ,e)];case 2:t=i.sent(),i.label=3;case 3:return f((0,S.Z)((0,O.Z)({},p),{minting:!1,success:n,mintedNfts:t})),[2]}})})).apply(this,arguments)}function b(){return w.apply(this,arguments)}function w(){return(w=(0,eT.Z)(function(){var e,n,t,s,o=arguments;return(0,ek.__generator)(this,function(i){switch(i.label){case 0:return e=o.length>0&&void 0!==o[0]&&o[0],console.log("Fetching candy machine data..."),e&&a(!0),[4,eY.getCandyMachineResourceAccount()];case 1:if(null===(n=i.sent()))return c((0,S.Z)((0,O.Z)({},r),{data:{}})),a(!1),[2];return[4,eY.getCandyMachineCollectionInfo(n)];case 2:return t=i.sent(),[4,eY.getCandyMachineConfigData(t.candyMachineConfigHandle)];case 3:return s=i.sent(),c((0,S.Z)((0,O.Z)({},r),{data:(0,O.Z)({cmResourceAccount:n},t,s)})),a(!1),[2]}})})).apply(this,arguments)}return(0,o.useEffect)(function(){b(!0);var e=setInterval(b,1e4);return function(){clearInterval(e)}},[]),(0,o.useEffect)(function(){return clearTimeout(u.timeout),function e(){var n=setTimeout(e,1e3);if(void 0!==r.data.presaleMintTime&&void 0!==r.data.publicMintTime){var t=Math.round(new Date().getTime()/1e3);d({timeout:n,presale:eY.getTimeDifference(t,r.data.presaleMintTime),public:eY.getTimeDifference(t,r.data.publicMintTime)})}}(),console.log(r.data),function(){clearTimeout(u.timeout)}},[r]),(0,o.useEffect)(function(){x(!0)},[n,r,u]),(0,s.jsx)(eb,{children:(0,s.jsxs)("div",{className:eC().popup,children:[(0,s.jsx)("span",{className:eC().title,children:"buy NFT with $DC"}),(0,s.jsxs)("div",{className:eC().buttons,children:[(0,s.jsxs)("div",{className:eC().counter,children:[(0,s.jsx)("span",{onClick:function(){return v(-1)},className:eC().minus,children:"-"}),(0,s.jsx)("span",{className:eC().value,children:p.numToMint}),(0,s.jsx)("span",{onClick:function(){return v(1)},className:eC().plus,children:"+"})]}),(0,s.jsxs)(W,{onClick:j,className:m()(eC().button,(0,I.Z)({},eC().loading,p.minting)),children:[!p.minting&&(0,s.jsx)("span",{className:eC().text,children:"mint"}),p.minting&&(0,s.jsx)(eA,{})]})]}),(0,s.jsxs)("span",{className:eC().available,children:["1/",g," available"]}),p.success&&(0,s.jsx)("div",{style:{flexWrap:"wrap"},children:p.mintedNfts.map(function(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:null===e.imageUri?"":e.imageUri}),(0,s.jsx)("h5",{children:e.name})]},e.name)})})]})})},eQ=function(){var e=(0,o.useState)({x:null,y:null}),n=e[0],t=e[1];return(0,o.useEffect)(function(){var e=function(e){var n;t({x:e.clientX,y:e.clientY})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}},[]),n},eV=t(7001),eJ=t.n(eV),e$=function(){var e=eQ(),n=e.x,t=e.y;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/images/logo.png",alt:"0",style:{left:"".concat(n,"px"),top:"".concat(t,"px")},className:eJ().dot}),(0,s.jsx)("img",{src:"/images/logo.png",alt:"0",style:{left:"".concat(n,"px"),top:"".concat(t,"px")},className:eJ().ring}),(0,s.jsx)("img",{src:"/images/logo.png",alt:"0",style:{left:"".concat(n,"px"),top:"".concat(t,"px")},className:eJ().ring}),(0,s.jsx)("img",{src:"/images/logo.png",alt:"0",style:{left:"".concat(n,"px"),top:"".concat(t,"px")},className:eJ().ring})]})},ez=function(){var e=(0,g.v9)(function(e){return{currentPopup:e.popup.currentPopup}}).currentPopup;return(0,s.jsxs)("div",{className:"wrap",children:[(0,s.jsx)(e$,{}),(0,s.jsx)(R,{}),(0,s.jsx)(ex,{}),(0,s.jsx)(Y,{}),(0,s.jsx)(ea,{}),(0,s.jsx)(ec,{}),(0,s.jsx)(ed,{}),"connect-wallet"===e&&(0,s.jsx)(ew,{}),"buy-nft"===e&&(0,s.jsx)(eX,{})]})}},8339:function(e){e.exports={wrapper:"ButtonConnectWallet_wrapper__WFXwF",button:"ButtonConnectWallet_button__dw6h6",active:"ButtonConnectWallet_active__pIoQt",disconnect:"ButtonConnectWallet_disconnect__duagr",text:"ButtonConnectWallet_text__L6_K3",balance:"ButtonConnectWallet_balance__jFSm0",address:"ButtonConnectWallet_address__SFf4Z"}},331:function(e){e.exports={wrapperButton:"ButtonOnIntro_wrapperButton__QtBlm",button:"ButtonOnIntro_button__3JRCk",active:"ButtonOnIntro_active__LeAit",amountMinted:"ButtonOnIntro_amountMinted__CkZbF"}},7001:function(e){e.exports={ring:"DotRing_ring__zsSUb",dot:"DotRing_dot__WOCvo"}},7961:function(e){e.exports={faq:"Faq_faq__KLhsM",title:"Faq_title__s2oCS",items:"Faq_items__mY4Mw",item:"Faq_item__KsDqr",question:"Faq_question__0ehii",answer:"Faq_answer__yGNCe",active:"Faq_active__YrbUJ"}},6715:function(e){e.exports={footer:"Footer_footer__Dhw_9",logo:"Footer_logo__By_cG",links:"Footer_links___OZQm",link:"Footer_link__Yh5A4",content:"Footer_content__YtAkP",description:"Footer_description__mjFIM"}},4899:function(e){e.exports={info:"Info_info__rNZRm",tabs:"Info_tabs__3A53C",tab:"Info_tab__B8kF_",active:"Info_active__IcI_F",text:"Info_text__Rk6IP"}},4939:function(e){e.exports={features:"KeyFeatures_features__2iY13",featuresItems:"KeyFeatures_featuresItems__lQmUf",featuresItem:"KeyFeatures_featuresItem__tolQA",image:"KeyFeatures_image__W7lcQ",name:"KeyFeatures_name__hMfwz"}},5731:function(e){e.exports={details:"MintDetails_details__O5ic3",text:"MintDetails_text__i3v7_",price:"MintDetails_price__7M3Ub",convert:"MintDetails_convert__9MKcn"}},1900:function(e){e.exports={wrapper:"InterlineLayer_wrapper__pdr_C",containerCarousel:"InterlineLayer_containerCarousel__xS2KE",image:"InterlineLayer_image__4HasK",slide:"InterlineLayer_slide__G_xMH",secondImage:"InterlineLayer_secondImage__F_YSs"}},7044:function(e){e.exports={tape:"Tape_tape__bEdBk",text:"Tape_text__XZzrj",wrapper:"Tape_wrapper__sopT0",marquee:"Tape_marquee__Yaujs",word:"Tape_word__skpIh"}},701:function(e){e.exports={content:"Content_content__HD92v",poster:"Content_poster__KSiah",image:"Content_image__V5Q0J",mintSoon:"Content_mintSoon__dACTc",timer:"Content_timer__cX4RH",text:"Content_text__B1lGm",info:"Content_info__WJTcj",description:"Content_description__BBmnU",aptos:"Content_aptos__OF8d_"}},477:function(e){e.exports={header:"Header_header__T7XI6",logo:"Header_logo__7T05e",image:"Header_image__U2isy",text:"Header_text__Y_ZZ_"}},1061:function(e){e.exports={intro:"Intro_intro__U5Vz6",backgroundText:"Intro_backgroundText__VklEr",text:"Intro_text__Ijb6W"}},1021:function(e){e.exports={loader:"Loader_loader__oPvmc","lds-ring":"Loader_lds-ring__X9I17"}},1300:function(e){e.exports={options:"Options_options__njdTH",title:"Options_title__rOc_7",mark:"Options_mark__jO29s",optionsItems:"Options_optionsItems__uvG7A",optionsItem:"Options_optionsItem__5dPNb",imageWrapper:"Options_imageWrapper__vINV7",image:"Options_image__MVGKB",name:"Options_name__MnWYi",description:"Options_description__WFvHC",info:"Options_info__mAGxd",button:"Options_button__H5l3e",red:"Options_red__I78_f",text:"Options_text__I0BRC",inactive:"Options_inactive__jbfDV",timer:"Options_timer__3yMbZ"}},7881:function(e){e.exports={popup:"PopupBuyNft_popup__8v_Ie",title:"PopupBuyNft_title__0I0eh",buttons:"PopupBuyNft_buttons__kIDiw",counter:"PopupBuyNft_counter__ZZK3q",plus:"PopupBuyNft_plus__vlBfb",minus:"PopupBuyNft_minus__pADFK",button:"PopupBuyNft_button__OVaHK",loading:"PopupBuyNft_loading__6HiJL",error:"PopupBuyNft_error__B6ZDL",disabled:"PopupBuyNft_disabled__Hk6fk",active:"PopupBuyNft_active__UWjlY",text:"PopupBuyNft_text__0s5_V",available:"PopupBuyNft_available__TqZpe"}},3704:function(e){e.exports={doge:"LoadingButton_doge__lpc60",loading:"LoadingButton_loading__4A3X8",loader:"LoadingButton_loader__rp5QM",text:"LoadingButton_text__IRn89"}},8993:function(e){e.exports={popup:"PopupConnectWallet_popup__Qf5FY",title:"PopupConnectWallet_title__GIuu_",buttons:"PopupConnectWallet_buttons__OjrkE",button:"PopupConnectWallet_button__JdjVN",active:"PopupConnectWallet_active__xTI2W",text:"PopupConnectWallet_text__o7nxW"}},4488:function(e){e.exports={container:"PopupLayout_container__bvXWc",popup:"PopupLayout_popup__w30aC",close:"PopupLayout_close__W3i_Y"}},9719:function(e){e.exports={timer:"SaleTimer_timer__hi6nv"}},7469:function(e){e.exports={socialLinks:"SocialLinks_socialLinks__JMZ1m",item:"SocialLinks_item__SZZ_e"}},6283:function(e){e.exports={button:"Button_button__GeQ2O"}}},function(e){e.O(0,[644,543,397,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);