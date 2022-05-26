import store from '../assets/images/playStore.png';
import app from '../assets/images/app.png';

class ourApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{
      }
      .container {
        padding:110px 252px;
        box-sizing:border-box;
        display: flex;
        flex-direction: row;
        gap:180px;
        justify-content:center;
        align-items:center;
        background: #eedcdc
      }
      .borderApp{
          background: #fff;
          position: relative;
        border: 8px solid #000;
        border-radius:3rem;
        padding-top:50px;
        margin:0;
      }
      .borderApp::before{
          content:"";
          position:absolute;
          width:150px;
          height:30px;
          top:-8px;
          left:4rem;;
          right: 0;
          border-radius:1rem;
          background: #000;
      }
      .borderApp::after{
          content:""; 
          position:absolute;
          height: 60px;
          width:8px;
          right:-10px;
          top:100px;
          background: #000;
          border-radius:.8rem;
      }
      .borderApp > img {
          margin:0;
          border-radius:3rem;
      }
      .appDescription > span  {
        text-transform: uppercase;
        font-size:1.2rem;
        color:var(--red--color)
      }
      .appDescription > h2 {
        font-size:2.5rem;
        font-weight:bold;
        color:var(--black--gray);
        width:20ch;
        margin:0;
        margin-top:8px;
        margin-bottom:22px;
      }
      .appDescription > p{
        font-size:1.2rem;
        color:#676767;
        margin:0;
        margin-bottom:60px;

      }
      .contentBtns{
          display:flex;
          flex-direction:row;
          gap:30px;
      }
      .btnStore{
          border:none;
          background:#eedddc;
          font-size:1.2rem;
          padding:20px 23px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:20px;
          align-items:center;
          border:1px solid #676767;
          border-radius:12px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${ourApp.styles}</style>
     <div class='container'>
        <div>
            <figure class="borderApp">
                <img src="${app}" alt="Grover app"/> 
            </figure>
        </div>
        <div class="appDescription">
            <span>Dowload our app</span>
            <h2>Get the groceries App order More easily</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum, dolor, ea officia facere quae.</p>
            <div class="contentBtns">
                <button class="btnStore"><img src="${store}" alt="Store"/>App Store</button>
                <button class="btnStore"><img src="${store}" alt="Store"/>Play Store</button>
            </div>
        </div>
     </div>
    `;
  }
}
customElements.define('our-app', ourApp);
