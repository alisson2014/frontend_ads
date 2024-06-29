const rickAndMorty = {
  login: false
};

export const getAllLocalStorage = () => {
  return localStorage.getItem("rickAndMorty");
};
  
export const createLocalStorage = () => {
  localStorage.setItem("rickAndMorty", JSON.stringify(rickAndMorty));
};
  
export const changeLocalStorage = (rickAndMorty) => {
  localStorage.setItem("rickAndMorty", JSON.stringify(rickAndMorty));
};