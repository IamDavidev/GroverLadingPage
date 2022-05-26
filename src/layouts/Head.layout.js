import headerImg from '../assets/images/header.jpg'
import '../components/CardItem.component.js'
import orange from '../assets/images/orange.png'
import clock from '../assets/icons/clock.svg'
import fresa from '../assets/icons/fresa.svg'

class Head extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`

        :host{

      }
      .container{
          margin-top:97px;
      }
      .more{
          background: #fdecfc;
          color: #f55556; 
          border:none;
          padding:15px 60px;
          display:flex;
          flex-direction:row;
          border-radius:1.5rem;
          font-size:1rem;
          font-weight:medium;
      }
      .more > img {
            width:25x;
            height: 25px;
      }
      .header{
          display:flex;
          flex-direction:row;
            justify-content:space-between;
            align-items:center;
            gap:7rem;
      }
      .headGrocer{
      }
      .headGrocer > h1{
            font-size:74px;
            color:var(--black--gray);
            margin:0;
            line-height:1.2;
      }
      .headGrocer > h1 > span {
          color:var(--red--color)
      }
      .headGrocer > p{
            font-size:1.3rem;
            color:#676767; 
            margin:0;
            margin-top:22px;
            margin-bottom:40px;
            width:45ch;
      }
      .headGrocer > div{
            display:flex;
            flex-direction:row;
            gap:35px;
      }
      .headGrocer > div > button{
          padding:25px 40px;
          border:none;
          font-size:1.3rem;
          font-weight:medium;
          border-radius:.8rem;
          cursor:pointer;
      }
      .now {
          background: #f86061;
          border-radius:1.2rem;
          color:#fff;
      }
      .process {
            background: #fdecfc;
            color:#363636;
      }
      .headIlustration{
          display:flex;
          position: relative;
          flex-direction:row;
      }
      .contentProduct{
          position: absolute;
          z-index:10;
          left: -7.5rem;
          bottom:0;
          top:4rem;
      } 
      .delivary{
            position: absolute;
            right: -3rem;
            display: flex;
            border:none;
            background: #fff;
            padding: .6rem 1.2rem;
            border-radius:.8rem;
            animation: animation--move 3.5s ease-in-out infinite;
            box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
            gap:18px;
      }
      .delivary > div > p {
          margin:0;
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
        <style>${Head.styles}</style>
     <section class='container'>
        <button class="more">more than Faster <img src="${fresa}" alt=""/></button>
        <header class="header">
            <div class="headGrocer">
                <h1>Groceries delivered in as little as <span>2 hours</span></h1>
                <p>Grocen atssures fresh grocery every morning to your family without getting out in this pandemic.</p>
                <div class="btns">
                    <button class="order now">Order Now</button>
                    <button class="order process">order Process</button>
                </div>
            </div>
            <div class="headIlustration">
                <div class="contentProduct">
                    <card-item
                     product="${orange}"
                     name="fresh orenge"
                     price="44.60"
                     span="free shipping">
                        </card-item>
                </div>
                <img src="${headerImg}" alt=""  class=""/>
                <button class="delivary">
                    <img src="${clock}" alt="" />
                    <div>
                        <p>Delivary</p>
                        <p>30 min</p>
                    </div>
                </button>
            </div>
        </header>
     </section>
    `;
    }
}

customElements.define('head-layout', Head);