import { Link, useLoaderData } from "@remix-run/react";

import { loader } from "~/routes/notes";


export default function Article1() {
  const data = useLoaderData<typeof loader>();


  return (


    <div className="h-full mx-auto text-left text-4xl  w-3/4 border-r bg-fuchsia-200">



      <p> Tasty Tech Bytes is looking for content, sponsors, and advertisers. Contact us at drinksfoodlife@gmail.com </p>
    </div>

  );
}
