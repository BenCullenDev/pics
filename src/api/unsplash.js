import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4vVBCl2RquOdbJJUqGGyEQV5pU_8jPSih1ACbRujIXY'
    }
});