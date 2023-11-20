export const getDataAPI = async (endpoint:any, application: string, params: { [key: string]: any }, apiKey:string = "") => {
  const URL = 'https://api.logis.com.co/v1/' + endpoint;
  const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
          ...params,
          'application': application
      }),
  });
  return await res.json();
}