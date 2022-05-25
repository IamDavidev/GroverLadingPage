import './components/CardItem.component.js'
import './layouts/navbar.layout.js'

// assets
import juice from './assets/juice.png'


class GroverLading extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{}
        header{
            padding: 33px 135px;
        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${GroverLading.styles}</style>
     <div class='container'>
        <header>
            <navbar-layout></navbar-layout> 
        </header>
     </div>
     `;
    }
}
customElements.define('grover-lading', GroverLading);
    // <card-item
    //     product="${juice}"
    //     name="fresh orenge"
    //     price="44.60"
    //     span="free shipping">
    //     </card-item>