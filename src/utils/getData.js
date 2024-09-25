const API = 'https://api.spacexdata.com/v5/launches';

const getData = async (id) => {
    const apiURL = API;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (id) {
            const result = data.find(cohete => cohete.id === id)
            return result;
        } else {
            return data;
        }

    } catch (error) {
        console.log('Fetch Error..!!', error);
    };

};

export default getData;