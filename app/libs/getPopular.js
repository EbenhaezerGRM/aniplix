export const getPopular = async (page = 1) => {
    const response = await fetch(`http://localhost:5000/popular?page=${page}`, 
    {cache: 'no-cache'})
  
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return await response.json()
  }
  