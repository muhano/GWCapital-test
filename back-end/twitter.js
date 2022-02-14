const axios = require('axios').default;


const fetchData = async (req, res) => {
    try {
        const response = await axios.get('https://api.twitter.com/2/users/44196397/tweets?max_results=20&exclude=replies&expansions=author_id,attachments.media_keys&user.fields=id,name,username&media.fields=duration_ms,height,url,width', {
            headers: {'Authorization': process.env.BEARER_TOKEN},
        })
        // console.log(response.data);
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err);
    }
}
module.exports = {fetchData}