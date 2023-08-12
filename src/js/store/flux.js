const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
      fetchStarWars: async (element, page, limit = 30) => {
        let baseUrl = `https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`;

        try {
          let response = await fetch(baseUrl);
          if (!response.ok) return response.status;
          let data = await response.json();
          let obj = {};
          obj[element] = data.results.map((item) => ({
            ...item,
            img: `https://starwars-visualguide.com/assets/img/${
              element == "people" ? "characters" : element
            }/${item.uid}.jpg`,
          }));
          setStore(obj);
        } catch (error) {
          console.error(error);
        }
      },
      removeFavorite: (name) => {
        const { favorites } = getStore();
        const newFavorites = favorites.filter((item) => item.name !== name);
        setStore({ favorites: newFavorites });
      },
      addFavorites: (id, name) => {
        let { favorites } = getStore();
        if (!favorites.some((item) => item.id == id)) {
          setStore({ favorites: [...favorites, { id: id, name: name }] });
        } else {
          let index = favorites.findIndex((item) => item.id == id);
          let newFavorites = [...favorites];
          newFavorites.splice(index, 1);
          setStore({ favorites: newFavorites });
        }
      },
      fetchElement: async (element, id) => {
        let baseUrl = `https://www.swapi.tech/api/${element}/${id}`;

        try {
          let response = await fetch(baseUrl);
          if (!response.ok) return response.status;
          let data = await response.json();
          let obj = {};
          obj[id] = {
            ...data.result.properties,
            img: `https://starwars-visualguide.com/assets/img/${
              element == "people" ? "characters" : element
            }/${id}.jpg`,
          };
          setStore({ element: obj });
        } catch (error) {
          console.error(error);
        }
      },
      fetchPages: async (element) => {
        let baseUrl = `https://www.swapi.tech/api/${element}`;

        try {
          let response = await fetch(baseUrl);
          if (!response.ok) return response.status;
          let data = await response.json();
          return data.total_pages;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
};

export default getState;
