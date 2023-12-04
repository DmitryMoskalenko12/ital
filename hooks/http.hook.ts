export const useHttp = () => {

    const request = async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
  
        try {
            const response = await fetch(url, {method, body, headers});
  
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
  
            const data = await response.json();
            const arr = [];
  
            for (const key in data) {
              arr.push({
                id: key,
                ...data[key]
              });
            }
            
            return arr;
        } catch(e) {
            throw e;
        }
    };
  
    return {request}
  }