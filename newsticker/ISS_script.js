const api_ISS_Url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS () {
    const response = await fetch(api_ISS_Url);
    const data = await response.json ();
    console.log(data);
    console.log(data.longitude)
   
  
}

getIS();