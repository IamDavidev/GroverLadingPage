import juice from '../assets/juice.png'
import cart from '../assets/cart.svg'

class CardItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/ `
        :host{

      }
      .container{
        background: #fff;
        width:185px;
        min-height: 250px;
        position:relative;
        padding-top:40px;
        z-index:-1;
        background: transparent;
        margin:0;
        padding:0;
        animation: move 3.5s ease-in-out infinite;
      }
      .card{
        border-radius:20px;
        clip-path: polygon(0 20%, 100% 0%, 100% 99%, 0% 100%);
        width:150px;
        margin:auto;
        z-index:5;
        background: #fff;
        top:5rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-content:center;
        gap:10px;
        padding:2rem 1rem;
            min-height:200px;
        padding-top:2rem;
      }
      .cardItem{
        width:100%;
        height:100%;
        position: absolute;
        z-index: 10;
        top:-3rem;
        left: 0;
      }
      .cardInformation{
        text-align:center;
      }
      .cardInformation h3{
        font-size:12px;
        color:var(--black--gray);
        position:relative;
      }
      .cardInformation h3::before{
        content:'';
        display:block;
        position: absolute;
        height: 2px;
        width:50px;
        background: var(--yellow--color);
        bottom:-5px;
        left:50px;
        right:0;
      }
      .cardInformation span{
        font-size:1.5rem;
        color:var(--black--gray);
        font-weight:bold;
      }
      .cardInformation p{
        color:#a5a5a5;
        font-size:10px
      }

      .contentBtn{
        position: absolute;
        right:0;
        bottom:-1rem;
        left:0; 
      }
      
      .cardAdd{
        background:linear-gradient(to top, #e73d3e,#ff1071);
        border:none;
        border-radius:10px;
        width:48px;
        height:48px;
        margin:auto;
        display: flex;
        justify-content: center;
        padding:.5rem;
        box-sizing:border-box;
      }
      @keyframes move {
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
    this.name = this.getAttribute('name');
    this.product = this.getAttribute('product');
    this.price = this.getAttribute("price");
    this.span = this.getAttribute("span");
    this.render();
    console.log(this.name)
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
        <style>${CardItem.styles}</style>
     <div class='container'>
        <figure>
          <img src="${this.product}" alt="" class="cardItem" />
        </figure>
        <div class="card">
              <div class="cardInformation">
                  <h3>${this.name}</h3>
                  <span>$${this.price}</span>
                  <p>${this.span}</p>
              </div>
        </div>
        <div class="contentBtn">
          <div class="cardAdd">
            <img src="${cart}" alt="cart shopt"/>
          </div>
        </div>
     </div>
    `;
  }
}
customElements.define('card-item', CardItem);
