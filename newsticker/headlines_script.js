
const api_Headlines_Url = 'https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json'
async function getBreakingNews () {
    const response = await fetch(api_Headlines_Url);
    const data = await response.json ();
    console.log(data);
    console.log(data.title)
   
  
}

getBreakingNews();


