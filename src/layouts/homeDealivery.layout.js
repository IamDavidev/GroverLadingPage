import Home from '../assets/images/take.png'
import bike from '../assets/images/bike.png'

class homeDealivery extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{}
        .container{
            display:flex;
            flex-direction:row;
            padding: 33px 120px;
            justify-content:center;
            align-items:center;
            box-sizing:border-box;
            gap:50px;
        }
        .orderDescription > span{
            text-transform:uppercase;
            font-size:1.2rem;
            color:var(--yellow--color)
        }
        .orderDescription > h2 {
            font-size:2.5rem;
            font-weight:bold;
            color:var(--black--gray);
            width:23ch;
        }
        .orderDescription > p{
            width:43ch;
            color:#676767;
            font-size:1.2rem;
        }
        .orderDescription > button{
            border:1px solid var(--red--color);
            color:var(--red--color);
            font-size:1.2rem;
            padding:1.5rem 2.3rem;
            background: transparent;
            border-radius:1rem;
        }
        .contentCard{
            animation: animation--move 3.5s ease-in-out infinite;
            position: absolute;
            bottom:12rem;
            right: -7rem;
        }
        .orderIlustration{
            position: relative;
        }
        .cardService{
            background:#fff;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
            display:flex;
            flex-direction:column;
            align-items:center;
            width:150px;
            padding:0 .5rem ;
            border-radius:1rem;
            text-align:center;
        }
        .cardService > h4 {
            margin:0;
            margin-top:26px;
            margin-bottom:8px;
            font-size:1rem;
            font-weight:bold;
            color:var(--black--gray);
        }
        .cardService > p {
            color:#676767;
            font-size:.8rem;

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
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${homeDealivery.styles}</style>
     <div class='container'>
        <div class="orderDescription">
            <span>Home Dealivery </span>
            <h2>Sit At Home We Will Take care Your Order</h2>
            <p>
                al vero eos at accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.
            </p>
            <button>Explore Now</button>
        </div>
        <div class="orderIlustration">
            <img src="${Home}" alt='home-delivery'>
            <div class="contentCard">
                <article class="cardService">
                    <img src="${bike}" alt="bike delivery"/>
                    <h4>Bike delivery</h4>
                    <p>bicle service ensures that you packages arrive quickly</p>
                </article>
            </div>
        </div>
     </div>
    `;
    }
}
customElements.define('home-dealivery', homeDealivery);