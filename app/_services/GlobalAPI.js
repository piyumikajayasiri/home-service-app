import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        icon {
          url
        }
        name
        id
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCategory,
};
