import{dy as y,dQ as K,c_ as c,c$ as we,cN as k,cO as H,cR as g,cS as v,cT as d,cQ as l,dg as W,d4 as M,dh as u,cP as ue,cV as X,cs as w,de as q,dL as be,dD as Z,ct as Q,cA as A,d6 as J,cY as ge,cv as z,dR as F,dI as ne,df as ye,cX as he,dS as ve,dT as xe,cu as $e,d0 as ke}from"./index-DVvzEmCy.js";import{S as Se}from"./SwapController-Bmrkz6gF.js";const pe={isUnsupportedChainView(){return c.state.view==="UnsupportedChain"||c.state.view==="SwitchNetwork"&&c.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){y.shake();return}if(await K.isSIWXCloseDisabled()){y.shake();return}(c.state.view==="DataCapture"||c.state.view==="DataCaptureOtpConfirm")&&we.disconnect(),y.close()}},Ce=k`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var We=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let ee=class extends v{render(){return d`<slot></slot>`}};ee.styles=[H,Ce];ee=We([g("wui-card")],ee);const Ie=k`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var te=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const Ee={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let D=class extends v{constructor(){super(...arguments),this.message="",this.type="info"}render(){return d`
      <wui-flex
        data-type=${W(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${Ee[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){M.close()}};D.styles=[H,Ie];te([l()],D.prototype,"message",void 0);te([l()],D.prototype,"type",void 0);D=te([g("wui-alertbar")],D);const Re=k`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var me=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const Ae={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let Y=class extends v{constructor(){super(),this.unsubscribe=[],this.open=M.state.open,this.onOpen(!0),this.unsubscribe.push(M.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o}=M.state,a=Ae[o];return d`
      <wui-alertbar
        message=${t}
        backgroundColor=${a==null?void 0:a.backgroundColor}
        iconColor=${a==null?void 0:a.iconColor}
        icon=${a==null?void 0:a.icon}
        type=${o}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Y.styles=Re;me([u()],Y.prototype,"open",void 0);Y=me([g("w3m-alertbar")],Y);const Pe=k`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var P=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let I=class extends v{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.fullWidth=!1,this.disabled=!1}render(){return d`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon}></wui-icon>
    </button>`}};I.styles=[H,ue,Pe];P([l()],I.prototype,"icon",void 0);P([l()],I.prototype,"variant",void 0);P([l()],I.prototype,"type",void 0);P([l()],I.prototype,"size",void 0);P([l({type:Boolean})],I.prototype,"fullWidth",void 0);P([l({type:Boolean})],I.prototype,"disabled",void 0);I=P([g("wui-icon-button")],I);const Oe=k`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var T=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const Ne={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ze={lg:"lg",md:"md",sm:"sm"};let E=class extends v{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return d`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=Ne[this.size];return this.text?d`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return d`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=ze[this.size];return d` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};E.styles=[H,ue,Oe];T([l()],E.prototype,"imageSrc",void 0);T([l()],E.prototype,"text",void 0);T([l()],E.prototype,"size",void 0);T([l()],E.prototype,"type",void 0);T([l({type:Boolean})],E.prototype,"disabled",void 0);E=T([g("wui-select")],E);const Te=k`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var R=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const _e=["SmartSessionList"],De={PayWithExchange:X.tokens.theme.foregroundPrimary};function se(){var m,f,O,N,L,j,V,U;const e=(f=(m=c.state.data)==null?void 0:m.connector)==null?void 0:f.name,t=(N=(O=c.state.data)==null?void 0:O.wallet)==null?void 0:N.name,o=(j=(L=c.state.data)==null?void 0:L.network)==null?void 0:j.name,a=t??e,r=J.getConnectors(),i=r.length===1&&((V=r[0])==null?void 0:V.id)==="w3m-email",n=(U=w.getAccountData())==null?void 0:U.socialProvider,s=n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social";return{Connect:`Connect ${i?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:a??"Connect Wallet",ConnectingWalletConnect:a??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:a?`Get ${a}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:o??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:s,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let $=class extends v{constructor(){super(),this.unsubscribe=[],this.heading=se()[c.state.view],this.network=w.state.activeCaipNetwork,this.networkImage=q.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=c.state.view,this.viewDirection="",this.unsubscribe.push(be.subscribeNetworkImages(()=>{this.networkImage=q.getNetworkImage(this.network)}),c.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.heading=se()[t]},Z.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),w.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=q.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=De[c.state.view]??X.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),d`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){Q.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),c.push("WhatIsAWallet")}async onClose(){await pe.safeClose()}rightHeaderTemplate(){var o,a,r;const t=(r=(a=(o=A)==null?void 0:o.state)==null?void 0:a.features)==null?void 0:r.smartSessions;return c.state.view!=="Account"||!t?this.closeButtonTemplate():d`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        type="neutral"
        variant="primary"
        @click=${()=>c.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return d`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){const t=_e.includes(this.view);return d`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text variant="lg-regular" color="primary" data-testid="w3m-header-text">
          ${this.heading}
        </wui-text>
        ${t?d`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var f;const{view:t}=c.state,o=t==="Connect",a=A.state.enableEmbedded,r=t==="ApproveTransaction",i=t==="ConnectingSiwe",n=t==="Account",s=A.state.enableNetworkSwitch,m=r||i||o&&a;return n&&s?d`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${W((f=this.network)==null?void 0:f.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${W(this.networkImage)}
      ></wui-select>`:this.showBack&&!m?d`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:d`<wui-icon-button
      data-hidden=${!o}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(Q.sendEvent({type:"track",event:"CLICK_NETWORKS"}),c.push("Networks"))}isAllowedNetworkSwitch(){const t=w.getAllRequestedCaipNetworks(),o=t?t.length>1:!1,a=t==null?void 0:t.find(({id:r})=>{var i;return r===((i=this.network)==null?void 0:i.id)});return o||!a}onViewChange(){const{history:t}=c.state;let o=Z.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(o=Z.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=o}async onHistoryChange(){var a;const{history:t}=c.state,o=(a=this.shadowRoot)==null?void 0:a.querySelector("#dynamic");t.length>1&&!this.showBack&&o?(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&o&&(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){c.goBack()}};$.styles=Te;R([u()],$.prototype,"heading",void 0);R([u()],$.prototype,"network",void 0);R([u()],$.prototype,"networkImage",void 0);R([u()],$.prototype,"showBack",void 0);R([u()],$.prototype,"prevHistoryLength",void 0);R([u()],$.prototype,"view",void 0);R([u()],$.prototype,"viewDirection",void 0);$=R([g("w3m-header")],$);const Be=k`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var oe=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let B=class extends v{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return d`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},o={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?d`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:d`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${o[this.variant]}
    ></wui-icon-box>`}};B.styles=[H,Be];oe([l()],B.prototype,"message",void 0);oe([l()],B.prototype,"variant",void 0);B=oe([g("wui-snackbar")],B);const He=ge`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var fe=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let G=class extends v{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=z.state.open,this.unsubscribe.push(z.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o}=z.state;return d` <wui-snackbar message=${t} variant=${o}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),z.state.autoClose&&(this.timeout=setTimeout(()=>z.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};G.styles=He;fe([u()],G.prototype,"open",void 0);G=fe([g("w3m-snackbar")],G);const Le=k`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var S=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const le="scroll-lock",je={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class x extends v{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=A.state.enableEmbedded,this.open=y.state.open,this.caipAddress=w.state.activeCaipAddress,this.caipNetwork=w.state.activeCaipNetwork,this.shake=y.state.shake,this.filterByNamespace=J.state.filterByNamespace,this.padding=X.spacing[1],this.mobileFullScreen=A.state.enableMobileFullScreen,this.initializeTheming(),F.prefetchAnalyticsConfig(),this.unsubscribe.push(y.subscribeKey("open",t=>t?this.onOpen():this.onClose()),y.subscribeKey("shake",t=>this.shake=t),w.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),w.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),A.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),J.subscribeKey("filterByNamespace",t=>{var o;this.filterByNamespace!==t&&!((o=w.getAccountData(t))!=null&&o.caipAddress)&&(F.fetchRecommendedWallets(),this.filterByNamespace=t)}),c.subscribeKey("view",()=>{this.dataset.border=ne.hasFooter()?"true":"false",this.padding=je[c.state.view]??X.spacing[1]}))}firstUpdated(){if(this.dataset.border=ne.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){y.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?d`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?d`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return d` <wui-card
      shake="${this.shake}"
      data-embedded="${W(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){if(t.target===t.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await pe.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:o}=ye.state,a=he.getColorTheme(o);ve(t,a)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),z.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=le,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${le}"]`);t&&t.remove()}onAddKeyboardListener(){var o;this.abortController=new AbortController;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",a=>{if(a.key==="Escape")this.handleClose();else if(a.key==="Tab"){const{tagName:r}=a.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const o=w.state.isSwitchingNamespace,a=c.state.view==="ProfileWallets";t?await this.onConnected({caipAddress:t,isSwitchingNamespace:o,isInProfileView:a}):!o&&!this.enableEmbedded&&!a&&y.close(),await K.initializeIfEnabled(t),this.caipAddress=t,w.setIsSwitchingNamespace(!1)}async onConnected(t){if(t.isInProfileView)return;const{chainNamespace:o,chainId:a,address:r}=xe.parseCaipAddress(t.caipAddress),i=`${o}:${a}`,n=!$e.getPlainAddress(this.caipAddress),s=await K.getSessions({address:r,caipNetworkId:i}),m=K.getSIWX()?s.some(N=>N.data.accountAddress===r):!0,f=t.isSwitchingNamespace&&m&&!this.enableEmbedded,O=this.enableEmbedded&&n;f?c.goBack():O&&y.close()}onNewNetwork(t){var ie,ae,re;const o=this.caipNetwork,a=(ie=o==null?void 0:o.caipNetworkId)==null?void 0:ie.toString(),r=o==null?void 0:o.chainNamespace,i=(ae=t==null?void 0:t.caipNetworkId)==null?void 0:ae.toString(),n=t==null?void 0:t.chainNamespace,s=a!==i,f=s&&!(r!==n),O=(o==null?void 0:o.name)===ke.UNSUPPORTED_NETWORK_NAME,N=c.state.view==="ConnectingExternal",L=c.state.view==="ProfileWallets",j=!((re=w.getAccountData(t==null?void 0:t.chainNamespace))!=null&&re.caipAddress),V=c.state.view==="UnsupportedChain",U=y.state.open;let _=!1;this.enableEmbedded&&c.state.view==="SwitchNetwork"&&(_=!0),s&&Se.resetState(),U&&!N&&!L&&(j?s&&(_=!0):(V||f&&!O)&&(_=!0)),_&&c.state.view!=="SIWXSignMessage"&&c.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(F.prefetch(),F.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}x.styles=Le;S([l({type:Boolean})],x.prototype,"enableEmbedded",void 0);S([u()],x.prototype,"open",void 0);S([u()],x.prototype,"caipAddress",void 0);S([u()],x.prototype,"caipNetwork",void 0);S([u()],x.prototype,"shake",void 0);S([u()],x.prototype,"filterByNamespace",void 0);S([u()],x.prototype,"padding",void 0);S([u()],x.prototype,"mobileFullScreen",void 0);let ce=class extends x{};ce=S([g("w3m-modal")],ce);let de=class extends x{};de=S([g("appkit-modal")],de);const Ve=k`
  :host {
    width: 100%;
  }
`;var p=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};let h=class extends v{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(t){super.updated(t),(t.has("name")||t.has("imageSrc")||t.has("walletRank"))&&(this.hasImpressionSent=!1),t.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&Q.sendEvent({type:"track",event:"WALLET_IMPRESSION",properties:{name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:c.state.view}}))}render(){return d`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${W(this.imageSrc)}
        name=${this.name}
        size=${W(this.size)}
        tagLabel=${W(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};h.styles=Ve;p([l({type:Array})],h.prototype,"walletImages",void 0);p([l()],h.prototype,"imageSrc",void 0);p([l()],h.prototype,"name",void 0);p([l()],h.prototype,"size",void 0);p([l()],h.prototype,"tagLabel",void 0);p([l()],h.prototype,"tagVariant",void 0);p([l()],h.prototype,"walletIcon",void 0);p([l()],h.prototype,"tabIdx",void 0);p([l({type:Boolean})],h.prototype,"disabled",void 0);p([l({type:Boolean})],h.prototype,"showAllWallets",void 0);p([l({type:Boolean})],h.prototype,"loading",void 0);p([l({type:String})],h.prototype,"loadingSpinnerColor",void 0);p([l()],h.prototype,"rdnsId",void 0);p([l()],h.prototype,"walletRank",void 0);h=p([g("w3m-list-wallet")],h);const Ue=k`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var C=function(e,t,o,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};const Fe=60;let b=class extends v{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=A.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(t){if(t.has("history")){const o=this.history;this.historyState!==""&&this.historyState!==o&&this.onViewChange(o)}t.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),t.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var t;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(o=>{var a;for(const r of o)if(r.target===this.getWrapper()){let i=r.contentRect.height;const n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){const s=((a=window.visualViewport)==null?void 0:a.height)||window.innerHeight,m=this.getHeaderHeight();i=s-m-n,this.style.setProperty("--local-border-bottom-radius","0px")}else i=i+n,this.style.setProperty("--local-border-bottom-radius",n?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var o;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),(o=window.visualViewport)==null||o.removeEventListener("resize",this.onViewportResize)}render(){return d`
      <div class="container" data-mobile-fullscreen="${W(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${W(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(t){const o=t.split(",").filter(Boolean),a=this.historyState.split(",").filter(Boolean),r=a.length,i=o.length,n=o[o.length-1]||"",s=he.cssDurationToNumber(this.transitionDuration);let m="";i>r?m="next":i<r?m="prev":i===r&&o[i-1]!==a[r-1]&&(m="next"),this.viewDirection=`${m}-${n}`,setTimeout(()=>{var f;this.historyState=t,(f=this.setView)==null||f.call(this,n)},s),setTimeout(()=>{this.viewDirection=""},s*2)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.page")}updateContainerHeight(){var r;const t=this.getWrapper();if(!t)return;const o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let a=0;if(this.mobileFullScreen){const i=((r=window.visualViewport)==null?void 0:r.height)||window.innerHeight,n=this.getHeaderHeight();a=i-n-o,this.style.setProperty("--local-border-bottom-radius","0px")}else a=t.getBoundingClientRect().height+o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${a}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${a}px`}getHeaderHeight(){return Fe}};b.styles=[Ue];C([l({type:String})],b.prototype,"transitionDuration",void 0);C([l({type:String})],b.prototype,"transitionFunction",void 0);C([l({type:String})],b.prototype,"history",void 0);C([l({type:String})],b.prototype,"view",void 0);C([l({attribute:!1})],b.prototype,"setView",void 0);C([u()],b.prototype,"viewDirection",void 0);C([u()],b.prototype,"historyState",void 0);C([u()],b.prototype,"previousHeight",void 0);C([u()],b.prototype,"mobileFullScreen",void 0);b=C([g("w3m-router-container")],b);export{de as AppKitModal,h as W3mListWallet,ce as W3mModal,x as W3mModalBase,b as W3mRouterContainer};
