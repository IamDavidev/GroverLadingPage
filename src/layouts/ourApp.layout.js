import store from '../assets/playStore.png'
import app from '../assets/app.png'

class ourApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
      }
      .container {
        display: flex;
        flex-direction: row;
      }
      .borderApp{
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

    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${ourApp.styles}</style>
     <div class='container'>
        <div>
            <figure class="borderApp">
                <img src="${app}" alt=""/>
            </figure>
        </div>
        <div>
            <span>Dowload our app</span>
            <div>Get the groceries App order More easily</div>
            <div>
                <button><img src="${store}" alt="Store"/>App Store</button>
                <button><img src="${store}" alt="Store"/>Play Store</button>
            </div>
        </div>
     </div>
    `;
    }
}
customElements.define('our-app', ourApp);