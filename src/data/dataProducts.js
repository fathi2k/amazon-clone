


export const dataProducts = async ()=>{
    const data = await fetch('../public/api/data.json');
    const dataJson = await data.json();
  return dataJson
}