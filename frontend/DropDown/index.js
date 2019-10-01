import './DropDown.css';

const template = (control) =>
   `    
      <span class="DropDown__label">${control.label}</span>
      <span></span>
      <span class="dropdown__arrowContainer">
         <svg
            class="dropdown__arrow"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill-rule="evenodd">          
               <path d="M10 0L5 5 0 0z"></path>
         </svg>
      </span>
   `

export default class DropDown {
   constructor({
      label = '',
      placeHolder = 'select value',
      items = []
   } = {}) {   
      this.label = label;
      this.placeHolder = placeHolder;
      this.items = items;
      this.elem = this.createElement();     
   }
   
   createElement() {
      let elem = document.createElement('div');
      elem.className = 'DropDown';
      
      elem.innerHTML = template(this);

      return elem;
   }    
}