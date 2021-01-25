async function fetchGraphQL(query, { variables } = {}, preview = false) {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query, variables }),
		}
	).then((response) => response.json());
}

export async function getSections() {
	const sections = await fetchGraphQL(
		`
{
  sectionCollection{
    items{
	  title
	  slug
      coverImage{
        url
        width
        height
      }
    }
  }
}
        `
	);
	return sections.data.sectionCollection.items;
}

export async function getSectionPaths() {
	const sections = await fetchGraphQL(
		`
{
  sectionCollection{
    items{
	  slug
    }
  }
}
        `
	);
	return sections.data.sectionCollection.items;
}

export async function getPage(slug) {
	const sections = await fetchGraphQL(
		`
query ($slug: String!) {
  sectionCollection(where: {slug : $slug}){
    items{
      title
      imagesCollection{
        items{
          url
          width
          height
        }
      }
    }
  }
}

        `,
		{
			variables: {
				slug,
			},
		}
	);
	return sections.data.sectionCollection.items[0];
}
