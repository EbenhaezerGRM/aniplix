export const getDiscover = async (page = 1) => {
    const response = await fetch(`http://localhost:5000/new-season?page=${page}`, 
    {cache: 'no-cache'})
    
    if(!response.ok){
        throw new Error('failed to fetch new-season anime')
    }

    return await response.json()
}