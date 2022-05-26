import logo from '../assets/images/grover.png'

class foooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get styles() {
        return /*css*/`
        :host{
      }
      .container{
          padding:72px 135px;
          display:flex;
          flex-direction:row;
          justify-content:center;
          gap:200px;
      }
      .menu{
        display:flex;
        flex-direction:row;
        gap:80px;
      }
      .contentLogo > figure{
          display:flex;
          margin:0;
          flex-direction:row;
          align-items:center;
          gap:10px;
      }
      .contentLogo > figure > span{
            font-size:1.2rem;
            font-weight:bold;
            color:var(--black--color);
            margin:0;
      }
      .contentLogo > p {
          color:#676767;
          margin:25px 0 ;
          line-height:1.7;
      }
      .menu > div > ul {
            display:flex;
            flex-direction:column;
            gap:20px;
            margin:0;
            padding:0;
            list-style:none;
      }
      .menu > div > ul > li{
            font-size:1rem;
            width:16ch
      }
        .menu > div > ul > li > a{
            text-decoration:none;
            margin:0;
            color:#676767;
        }
        .get > p {
            width:20ch;
            margin:10px 0;
            color:#676767;
        }
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =/*html*/`
        <style>${foooter.styles}</style>
     <footer class='container'>
        <div class="contentLogo">
            <figure>
                <img src="${logo}" alt="grover"/>
                <span>Grover</span>
            </figure>
            <p>
                Fast delivery, which is active all over the world. server with many transportation vehicles.
            </p>
        </div>
        <section class="menu">
            <div>
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us </a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">All Product</a></li>
                    <li><a href="#">Location Map</a></li>
                </ul>
            </div>
            <div>
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Order Tacking </a></li>
                    <li><a href="#">Wish List</a></li>
                    <li><a href="#">My account</a></li>
                    <li><a href="#">Terms & conditions</a></li>
                </ul>
            </div>
            <div class="get">
                <h3>Get In Touch</h3>
                <p>Subcribe to our weekly</p>    
                <p>Newsletter and receice</p>    
                <p>updates via email</p>    
            </div>
        </section>
     </footer>
    `;
    }
}
customElements.define('footer-layout', foooter);