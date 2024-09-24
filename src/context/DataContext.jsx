import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const query = `
{
  pages(where: {name: "Homepage"}) {
    nodes {
      homepage {
        banners {
          bannerImage {
            node {
              sourceUrl
            }
          }
          bannersTitle
          bannerDescription
          bannerButton {
            title
            url
            target
          }
        }
        homeAboutTitle
        homeAboutSubtitle
        homeAboutButton {
          target
          title
          url
        }
        homeAboutVideoImage {
          node {
            sourceUrl
          }
        }
        homeAboutVideoUrl
        homeAboutDescription
        homeCategoryTitle
        homeCategorySubtitle
        homeServicesTitle
        homeServicesSubtitle
        homeColoursTitle
        homeColoursSubtitle
        homeColoursButton {
          target
          title
          url
        }
        homeJoinBackgroundImage {
          node {
            sourceUrl
          }
        }
        homeJoinTitle
        homeJoinSubtitle
        homeJoinButton {
          target
          title
          url
        }
        homeJoinDescription
        blogTitle
        blogSubtitle
        categories {
          link
          title
          image {
            node {
              sourceUrl
            }
          }
        }
      }
      seo {
        canonical
        metaKeywords
        metaDesc
        title
        opengraphType
        opengraphSiteName
        opengraphTitle
        opengraphDescription
        opengraphUrl
        schema {
          raw
        }
        opengraphImage {
          mediaItemUrl
        }
      }
    }
  }
  allColourCategory(where: {slug: "popular"}) {
    nodes {
      name
      colours {
        nodes {
          title
          slug
          colourInfo {
            selectColor
            colourRgb
          }
        }
      }
    }
  }
  blogs {
    nodes {
      featuredImage {
        node {
          sourceUrl
          slug
        }
      }
      slug
      title
      date
    }
  }
}
`;

  useEffect(() => {
    fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then(response => response.json())
      .then(result => {
        setData(result.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [query]);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};




