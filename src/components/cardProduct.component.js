// import valoration from '../assets/val.svg'
import melting from '../assets/images/melting.png'
import more from '../assets/icons/more.svg'

const products = {
  melting
}

class cardProduct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/`
        :host{
      }
      .container{
          animation:animation--move 3.5s ease-in-out infinite;
          background: #fff;
          width:204px;
          display:flex;
          flex-direction:column;
          text-align:center;
          padding:18px;
            box-sizing:border-box;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius:12px;
      }
      .container > header > h3 {
         font-size:18px;
         color:var(--black--gray);
         font-weight:bold; 
         margin-bottom:0;
      }
      .container > header > span  {
          font-size:12px;
          color:#a5a4a4;
          margin-top:11px;
          margin-bottom:27px;
      }
      .container > span {
          font-size:1rem;
          color:#2e2e2e;
          text-align:left;
      }
      .container > footer {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
      }
      .container > footer > button {
            background:#f54748;
            border:none;
            padding:12px;
            box-sizing:border-box;    
            border-radius:8px;
      }
      @keyframes animation--move {
        0% {
          transform: translateY(0);
        }
        50%{
          transform: translateY(-10px);
        }
        100%{
          transform: translateY(0);
        }
      }
    `;
  }

  connectedCallback() {
    this.product = this.getAttribute('product');
    this.type = this.getAttribute('type');
    this.price = this.getAttribute('price')
    this.valoration = this.getAttribute('valoration')
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML =/*html*/`
        <style>${cardProduct.styles}</style>
     <article class='container'>
        <header>
            <h3>${this.product}</h3>
            <span>${this.type}</span>
        </header>
        <img src="${products[this.product]}" alt="${this.product}"/>
        <span>${this.valoration}</span>
        <footer>
            <span> $${this.price}</span>
            <button><img src="${more}" alt="more"/></button>
        </footer>
     </article>
    `;
  }
}
customElements.define('card-product', cardProduct);