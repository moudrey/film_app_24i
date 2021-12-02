import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl =
  'https://raw.githubusercontent.com/24i/smartapps-test/main/data.json';

const useMuviesApiCall = () => {
  const [isLoaded, setLoading] = useState(false);
  const [muviesData, setMuviesData] = useState({});

  useEffect(() => {
    const apiCall = async () => {
      try {
        const call = await axios.get(apiUrl);
        setMuviesData(call);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };

    apiCall();
  }, []);

  return { isLoaded, muviesData };
};

export default useMuviesApiCall;
