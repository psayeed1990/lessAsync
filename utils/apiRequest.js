export const apiRequest = async (url, method, formData) => {
    try {
        if (method === "GET") {
            console.log("ji");
            // handle get request
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            return data;
        } else {
            // handle other request
            const response = await fetch(url, {
                method: method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            return data;
        }
    } catch (err) {
        return err;
    }
};
