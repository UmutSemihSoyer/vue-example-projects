import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/', 
});

export async function getDestinations() {
  try {
    const response = await api.get('countries');
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching destinations');
  }
}



export async function getCountries(destinationId: any) {
  try {
    const response = await api.get(`countries/${destinationId}`);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching destinations');
  }
}

export async function getReviews(destinationId: any){
   try {
    const response = await api.get(`reviews/${destinationId}`);
    console.log(response.data)
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('Error fetching destinations');
  }
}

//get(`countries/${destinationId}`);
export default {
  getDestinations,
  getCountries
};
