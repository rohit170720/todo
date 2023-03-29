export const getItemsFromStorage = () => {
    

    if(!localStorage.getItem('todo')){
        localStorage.setItem('todo', JSON.stringify([]));
    }
    const todoString = localStorage.getItem('todo');
    return JSON.parse(todoString);
  };
  
  export const saveItemsToStorage = (items) => {
    localStorage.setItem('todo', JSON.stringify(items));
  };