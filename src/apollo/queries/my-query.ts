import gql from 'graphql-tag'

export const MyQuery = gql`
  query MyQuery {
    _helloworld_article {
      id
      rating
      title
      author_id
    }
  }
`