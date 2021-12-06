import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl =
  'https://raw.githubusercontent.com/24i/smartapps-test/main/data.json';

const useMoviesApiCall = () => {
  const [isLoaded, setLoading] = useState(false);
  const [moviesData, setMoviesData] =
    useState<{ carousels: Array<string | Array<{}>> }>();

  useEffect(() => {
    const apiCall = async () => {
      try {
        const call = await axios.get(apiUrl);
        setMoviesData(call.data);
        setLoading(true);
      } catch (error) {
        alert('No data');
        console.log(error);

        setLoading(false);
      }
    };

    apiCall();
  }, []);
  return { isLoaded, moviesData };
};

export default useMoviesApiCall;
