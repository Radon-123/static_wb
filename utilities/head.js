class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <link rel="stylesheet" href="my_style.css">
        <style>
          
        
        </style>
        <section>    
    <div class="Custom_Nav">   
        <a href="index.html">Home</a>
        <div class="dropbox">
            <button class="button">New Innovations  </button> 
                <div class="drop_cont" style="min-width: 320px;"   >
                    <a href="Epsilion3.html"> The Epsilon 3</a>
                </div>
            </div>
           
            <div class="dropbox">
                <button class="button">Customer Service </button> 
                    <div class="drop_cont" style="min-width: 320px;">
                        <a>Hot Line</a>
                        <a>Reviews</a>
                    </div>
                </div>

           
                <div class="dropbox">
                    <button class="button" >About Bun Tech </button> 
                        <div class="drop_cont" style="min-width: 290px;">
                            <a> Our Mission</a>
                            <a> Facilities</a>
                        </div>
                    </div>
        <div class="dropbox" >
        <button class="button">Employees  </button> 
            <div class="drop_cont" style="min-width: 220px;">
                <a href="Employee_Login.html"> Log In</a>
                <a href="FAQ.html"> FAQ</a>
            </div>
        </div>
       

        
        
      

    </div>

    
    
</section>
      `;
    }
  }
  
  customElements.define('header-component', Header);