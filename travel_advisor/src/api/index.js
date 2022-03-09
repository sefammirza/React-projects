import axios from "axios";

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (sw, ne) => {
    try {
/*         const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '64d47e031fmshb3b4605d2ca27e7p1093acjsn4c01ad106b3d'
          } */
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}