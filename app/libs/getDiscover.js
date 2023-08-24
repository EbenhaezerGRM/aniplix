export default async function getDiscover(){
    const response = await fetch(`http://localhost:5000/new-season`, 
    {cache: 'no-cache'})
    
    if(!response.ok){
        throw new Error('failed to fetch data')
    }

    return await response.json()
}