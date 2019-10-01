import './DropDown.css';

const template = (control) =>
   `  <span class="DropDown__input">  
         <span class="DropDown__input-label">${control.label}</span>
         <span class="DropDown__input-value"></span>
         <span class="DropDown__input-arrowContainer">
            <svg
               class="DropDown__input-arrow"
               width="10"
               height="5"
               viewBox="0 0 10 5"
               fill-rule="evenodd"> 
                  <title>Открыть меню</title>
                  <path d="M10 0L5 5 0 0z"></path>
            </svg>
         </span>    
      </span>
       
      <span class="dropdown__list">
         ${control.items.map(item => `<span class="dropdown__list-item">${item.value}</span>`).join('')}
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
      this.items = [...items].map(item => ({value: item, isSelected: false}));
      this.elem = this.createElement();     
   }
   
   createElement() {
      let elem = document.createElement('div');
      elem.className = 'DropDown';
      
      elem.innerHTML = template(this);

      return elem;
   }    
}