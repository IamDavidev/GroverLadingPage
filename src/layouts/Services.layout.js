import '../components/cardService.component.js'


class Services extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{

      }
      .contentServices{
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            align-items:center;
            gap:50px;
      }
      .servicesDescription{
        text-align:center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:60px;
      }
      .servicesDescription span{
        font-size:1.3rem;
        color:#f54748;
      }
      .servicesDescription h2{
          font-size:40px;
          color:var(--black--gray);
          width:25ch;
          text-align:center;
          margin:8px 0px;
      }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${Services.styles}</style>
     <div class='container'>
        <div class="services">
            <div class="servicesDescription">
                <span class="serviceSpan">what we save</span>
                <h2 >Fruit adn Vegetable delivered to your home </h2>
            </div>
            <div class="contentServices">
                <card-service  description="enjoy order in a hand using the fressnes of groceries " service="shipping" ></card-service>
                <card-service margin="true" description="enjoy order in a hand using the fressnes of groceries " service="warranty" ></card-service>
                <card-service  description="enjoy order in a hand using the fressnes of groceries " service="secure" ></card-service>
            </div>
        </div>
     </div>
    `;
    }
}
customElements.define('services-layout', Services);