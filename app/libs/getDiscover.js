export default async function getDiscover(){
    const response = await fetch(`${process.env.GOGOANIME_BASE_URL}/new-season`, 
    {cache: 'no-cache'})
    
    if(!response.ok){
        throw new Error('failed to fetch data')
    }

    return await response.json()
}