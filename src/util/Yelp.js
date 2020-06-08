const apiKey = 'H80mNzEUZRwa3Az5eyWYcakjbzEhC_5T16Hh_G5KrtT3ugNxEuBYhd-AnxHztwld19dirvrx8RafVv7EPYYCo05-0FE-Vh49bEYqItmurIgztAt7B1BGK08goYXeXnYx';

const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Autorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zidCode: business.location.zid_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                }));
            }
        })
    }
}