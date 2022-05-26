import shipping from '../assets/icons/free.svg'
import warranty from '../assets/icons/warranty.svg'
import secure from '../assets/icons/secure.svg'


const services = {
    shipping,
    warranty,
    secure
}

class cardService extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

      }
      .container{
          position: relative;
    }
    .service{
          background: #fff;
            display: flex;
            flex-direction:column;
            align-items: center;
            width:300px;
            height: 310px;
            box-sizing:border-box;
            padding:50px 0 ;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
            position: relative;
            border-radius:1rem;
            z-index:15;
      }
      .serviceName{
          font-size:1.4rem;
          font-weight:bold;
          color:var(--black--gray);
          margin:0;
      }
      .serviceDescription{
            font-size:.8rem;
            color:#676767;
            text-align:center;
            width:30ch;
      }
      .serviceMargin{
          position:absolute;
          z-index:10;
          top:-.4rem;;
          right: -1.2rem;
          background: #fe6a6a;
          border-radius:1rem;
          width:285px;
          height: 330px;
          transform:rotate(-4deg)

      }
    `;

    }

    connectedCallback() {
        this.service = this.getAttribute('service');
        this.description = this.getAttribute("description");
        this.margin = this.getAttribute('margin') || false;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${cardService.styles}</style>
     <div class='container '>
        <div class='${this.margin ? "serviceMargin" : ""}'></div>
        <div class="service">
            <img src="${services[this.service]}" alt="${this.name}" class="serviceImg">
            <h4 class="serviceName">${this.service}</h4>
            <p class="serviceDescription">${this.description}</p>
        </div>
     </div>
    `;
    }
}
customElements.define('card-service', cardService);