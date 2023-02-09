import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchCategories = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true)

      try {
        const response = await axios.get(`http://localhost:8080/categories`)
        setCategories(response.data.searchAll);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        alert(error);
      }

    })();
  }, []);

  return {
    categories,
    isLoading
  }
}
