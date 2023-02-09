const axios = require('axios');
const cheerio = require('cheerio');
const PORT = 8000;
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
const title_names = [];

const fetchTitles = async () => {
    try {
        const response = await axios.get('https://old.reddit.com/r/technology/');
        const html = response.data;
        const $ = cheerio.load(html);
        $('div > p.title > a').each((_idx, el) => {
            const title_name = $(el).text().trim();
            title_names.push(title_name);
        });
        return title_names;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

fetchTitles();
// .then((title_names) => console.log(title_names))
// .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.send(title_names);
    // console.log(req);
});
