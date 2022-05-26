import './layouts/navbar.layout.js'
import './layouts/Head.layout.js'
import './layouts/Services.layout.js'
import './layouts/find.layout.js'
import './layouts/homeDealivery.layout.js'
import './layouts/ourApp.layout.js'

// assets


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
        main{
            padding: 33px 120px;
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
            <head-layout></head-layout>
        </header>
        <main>
            <services-layout></services-layout>
            <find-layout></find-layout>
            <home-dealivery></home-dealivery>
            <our-app></our-app>
        </main>
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