import gql from 'graphql-tag'

export const GET_FILMS = gql`
	query{
		allPosts{
			title
			description
			slug
			thumbnail{
				url
			}
			upcoming
		}
	}
`;

export const GET_NEWS = gql`
	query{
		allNews{
			title
			text
			slug
			thumbnail{
				url
			}
		}
	}
`;