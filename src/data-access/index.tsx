const fetcher = async ({ url, method, body, json = true } : any) => {
    const res = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("API Error");
    }
    console.log(body);
    
    if (json) {
      const data = await res.json();
      return data;
    }
  };

export const sendContactForm = (post : any) => {
    return fetcher({
      url: "/api/contact",
      method: "POST",
      body: post,
    });
};

export const downloadCV = () => {
  return fetcher({
    url: "/api/download",
    method: "POST",
  });
};