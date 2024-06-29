const rickAndMorty = { login: false };

export const getAllLocalStorage = () => localStorage.getItem("rickAndMorty");
  
export const createLocalStorage = () => {
  localStorage.setItem("rickAndMorty", JSON.stringify(rickAndMorty));
};
  
export const changeLocalStorage = (rickAndMorty) => {
  localStorage.setItem("rickAndMorty", JSON.stringify(rickAndMorty));
};