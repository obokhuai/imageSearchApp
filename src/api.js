import axios from "axios";

const searchImages = async()=>{

 const response= await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: "Client-ID iYzi3zVvg1xzIWYDYV-EjHDZu5tkePgHt7O8d-SvNmA"
      },
      params: {
        query: "ocean"
      }
    })
    .then((response) => {
      console.log(response);
      return response;
     
    })
    .catch((error) => {
      console.error(error);
    });
};

export default searchImages;