import Head from "next/head";
import { useEffect, useState } from "react";
import { apiRequest } from "../utils/apiRequest";

export default function Home() {
    const [errData, errDataSet] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const data = await apiRequest("srv-captain--baqiudfjth", "GET");
            errDataSet(data.message);
        };
        fetchData();
    }, []);
    return (
        <div>
            <Head>
                <title>Less Async</title>
            </Head>
            <h1> Test frontend error handling</h1>
            <h2>{errData}</h2>
        </div>
    );
}
