import { InMemoryCache } from '@apollo/client'
import introspectionResult from '~/apollo/fragmentTypes.json';

export default ({req, app}) => {
    return {
      httpEndpoint: "https://nssda-strapi.herokuapp.com/graphql",
      cache: new InMemoryCache({ introspectionResult })
    }
}