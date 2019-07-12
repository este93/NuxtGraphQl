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

export const GET_UPCOMING = gql`
	query{
		allPosts(first: 3, filter: {upcoming: {eq: true} } ){
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
			createdAt
			thumbnail{
				url
			}
		}
	}
`;

export const GET_NEWS_HP = gql`
	query{
		allNews(first: 4){
			title
			text
			slug
			createdAt
			thumbnail{
				url
			}
		}
	}
`;

export const GET_FILM = gql`
	query Post($slug: String!){
	    post (filter: {slug: {eq: $slug}}) {
		    title
		    description
			content
		    thumbnail{
	            url
	        }
	        video{
	        	providerUid
	        	url
	        }
	    }
	}
`;
