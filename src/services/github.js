import axios from "axios"

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN || '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'
const API_URL = 'https://api.github.com/graphql'
const headers = {
  'Content-Type': 'application/json',
  Authorization: `bearer ${TOKEN}`,
}

export const fetchGithubData = user => {
  const body = {
    query: `
        query { 
          user(login: "${user}") {
            name
            avatarUrl
            login
            repositories(first: 100) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  languages(first: 10) {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }`
  }
  return axios.post(API_URL, JSON.stringify(body), { headers })
}