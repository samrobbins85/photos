async function fetchGraphQL(query, preview = false) {
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
			body: JSON.stringify({ query }),
		}
	).then((response) => response.json());
}

export async function getImage() {
	const images = await fetchGraphQL(
		`
        {
  imageCollection {
    items {
      title
      imageCaption
      imageCredits
      photo {
        url
        width
        height
      }
    }
  }
}
        `
	);
	return images;
}

export async function getSections() {
	const sections = await fetchGraphQL(
		`
{
  sectionCollection{
    items{
      title
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
      title
    }
  }
}
        `
	);
	return sections.data.sectionCollection.items;
}
