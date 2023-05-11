import axios from "axios";

const searchImages = async(term)=>{

 const response= await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: "Client-ID iYzi3zVvg1xzIWYDYV-EjHDZu5tkePgHt7O8d-SvNmA"
      },
      params: {
        query: term
      }
    })
    return response.data.results;
   };
//     .then((response) => {
//       return response.data.results;
     
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

export default searchImages;