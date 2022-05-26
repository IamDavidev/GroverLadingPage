import why from '../assets/why.png'
import '../components/cardProduct.component.js'

class find extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
      }
      .container{
          display:flex;
          margin:77px 0 ;
          flex-direction:row;
          align-items: center;
          justify-content:center;
          gap:250px;
      }
      .container >  figure {
          margin:0;
          padding:1rem;
          box-sizing:border-box;
          position: relative;
      }
      .container > figure >  img{
          width:408px;
          height: 612px;
          object-fit:cover;
      }
      .contentProduct{
          position: absolute;
          bottom:10rem;
          right:-7rem;
      }

      .whyDescription > span{
            font-size:1.1rem;
            text-transform:uppercase;
            color:#03a66b
      }
      .whyDescription > h2{
          font-size:40px;
          font-weight:bold;
          margin:0;
          margin-top:8px;
          margin-bottom:22px;
      }
      .whyDescription > p{
            font-size:1.1rem;
            color:#676767;
      }
      .whyDescription > button{
            background-color:#f86061;
            font-size:20px;
            padding:25px 40px;
            border:none;
            color:#fff;
            border-radius:12px;
      }

    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${find.styles}</style>
     <div class='container'>
        <figure>
            <img  src="${why}" alt="" />
            <div class="contentProduct"> 
                <card-product product="melting" price="49.66" valoration="3.8" type="red stovery" ></card-product>
            </div>
        </figure>
        <div class="whyDescription">
            <span>why chose us </span>
            <h2>
                Find Favorites And Discover New Ones
            </h2>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus blandities praesen valuptatum deleniti
            </p>
            <button>
                explore Now
            </button>
        </div>
     </div>
    `;
    }
}
customElements.define('find-layout', find);