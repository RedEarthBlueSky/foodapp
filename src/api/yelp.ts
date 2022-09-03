import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 'Bearer C1Jlg2DFnWELLXqqhs-L835kEgsHEUtraTM5F9qBTf8MTOV3-nZ81W2pgB7hIIWjIwOlOLeQ7C-XIQhp50xkIOYx5-5JqyHksKEfkyZ9VNJs2fKO869NgmwWGOEpXnYx'
  }
})