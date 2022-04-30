import axios from "axios";







// const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"
// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'a0ba5a3faamsh1f02b54419dbd8dp16d7c2jsn647a4eb58ab6'
//   }
// }

export const getPlacesData = async (sw, ne) => {
    try {
        const response = await fetch("https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary?bl_latitude=11.847676&tr_latitude=12.838442&bl_longitude=109.095887&tr_longitude=109.149359&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "a0ba5a3faamsh1f02b54419dbd8dp16d7c2jsn647a4eb58ab6"
            }
        })
        // const response = await axios.get(url, options)
        const data = await response;
        console.log(data, "Res");
        // console.log(data, "get");
        return response;
    } catch (error) {
        console.log(error);
    }
}