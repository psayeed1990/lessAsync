import Head from "next/head";
import { useEffect } from "react";
import { apiRequest } from "../utils/apiRequest";

export default function Home() {
    useEffect(() => {
        const fetchData = async () => {
            const data = await apiRequest("http://localhost:5000", "GET");
            console.log("hi", data);
        };
        fetchData();
    });
    return (
        <div>
            <Head>
                <title>Less Async</title>
            </Head>
            <h1> Test frontend error handling</h1>
        </div>
    );
}
