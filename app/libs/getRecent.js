export const getRecent = async (page = 1, type = 1) => {
    const response = await fetch(`http://localhost:5000/recent-release?page=${page}&type=${type}`, 
    {cache: 'no-cache'})
    
    if(!response.ok){
        throw new Error('failed to fetch recent anime')
    }

    return await response.json()
}