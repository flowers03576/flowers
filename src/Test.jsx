// import { Redis } from '@upstash/redis';
// import { NextResponse } from 'next/server';

import { useEffect } from "react";

// // Initialize Redis
// const redis = Redis.fromEnv();

// export const POST = async () => {
//   // Fetch data from Redis
//   const result = await redis.get("item");
  
//   // Return the result in the response
//   return new NextResponse(JSON.stringify({ result }), { status: 200 });
// };

export default function Test() {
  useEffect(() => {
    // Fetch data from Redis
    const fetchData = async () => {
      // const result = await redis.get("item");
      const response = await fetch("/api/survey", {
         method: "GET",
       }).then(res => res.json());
      console.log(response)
      // Update state with the fetched data
      // setState(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}