import axios from "axios";

export const useFetchUser = () => {
    return async ({ data }: { data: Record<string, any> }) => {
        const options = {
            method: "POST",
            url: "https://jwt-bearer-auth1.p.rapidapi.com/login",
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                "X-RapidAPI-Key": "26bd3fde4dmsheb9fe2c752929a2p15ade9jsndfed8b648045",
                "X-RapidAPI-Host": "jwt-bearer-auth1.p.rapidapi.com",
            },
            data,
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
};
