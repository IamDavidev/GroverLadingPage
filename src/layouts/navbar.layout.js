import search from '../assets/icons/search.svg'
import canasta from '../assets/icons/canasta.svg'
import logo from '../assets/images/grover.png'

class navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /*css*/`
        :host{ }
        .container{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          align-items:center;
        }
        .contentLogo{
          display:flex;
          flex-direction:row;
          align-items: center;
          gap:10px;
        }
        .contentLogo span{
          font-size:1.2rem;
          font-weight:bold;
        }
        
        .routes{
          display:flex;
          flex-direction:row;
          list-style:none;
          gap:40px;
        }
        .route{
          cursor: pointer;
        }
        .contentSearch{
          display:flex;
          flex-direction:row;
          gap:9px;
          align-items:center;
          position: relative;
          border-radius:.5rem;
          padding: 0 .3rem; 
        }
        .contentSearch input {
          border:none;
          padding:.4rem 0; 
          border-radius:.5rem;
        }
        .contentSearch input:focus{
          outline: none;
        }
        .noti{
          position: absolute;
          height: 20px;
          width: 20px;
          border-radius:50%;
          background:var(--red--color);
          text-align:center;
          top:-.8rem;
          color:white;
          font-weight:bold;
        }
        .active{
          color:var(--red--color);
          font-weight:bold;
        }
    `;
  }

  // change color navigation 
  changeRoute() {

    // optener todas los elementos todos las rutas 
    const routes = this.shadowRoot.querySelectorAll('.route');
    // recorer todas las rutas
    routes.forEach(route => {
      route.addEventListener('click', () => {
        // revocar el estilo de todas las rutas (si lo tienen)
        routes.forEach(route => {
          route.classList.remove('active');
        });
        // agregar el estilo a la ruta que se hizo click
        route.classList.add('active');
      })
    })
  }

  connectedCallback() {
    this.render();
    this.changeRoute();
  }

  render() {
    this.shadowRoot.innerHTML =/*html*/`
        <style>${navbar.styles}</style>
     <nav class='container'>
       <div class="contentLogo">
            <img src="${logo}" alt="grover logo"/>
            <span>Grover</span>
       </div> 
       <div class="contentRoutes">
            <ul  class="routes">
                <li class="route active">Home</li> 
                <li class="route">Menu</li> 
                <li class="route">Service</li> 
                <li class="route">Shop</li> 
            </ul>
       </div>
       <div class="contentSearch">
            <img  src="${search}" alt="search" />
            <input  type="text" placeholder="search"/>
            <div>
                <img src="${canasta}"/>
                <span class="noti">2</span>
            </div>
       </div>
            
     </nav>
    `;
  }
}
customElements.define('navbar-layout', navbar);