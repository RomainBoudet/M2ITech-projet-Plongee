export const createHTML = (type, oneClasse, content, css, parent) => {
    const elem = document.createElement(type);
  
    if (content && !"") {
      content = document.createTextNode(content);
      elem.appendChild(content);
    }
  
    if (oneClasse && !"") {
      oneClasse.map((item) => elem.classList.add(item));
    }
  
    if (css && !"") {
      elem.style.cssText = css;
    }
  
    if(parent) {
      parent.appendChild(elem);
    }
  
    return elem;
  };