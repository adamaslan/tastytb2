import { Link, useLoaderData } from "@remix-run/react";

import { loader } from "~/routes/notes";


export default function Article1() {
  const data = useLoaderData<typeof loader>();


  return (


    <div className="h-full mx-auto text-left text-2xl  w-3/4 border-r bg-gray-50">



<p>Tasty Tech Bytes is a publication focused on bring you the most delicious morsels of Tech out there. We strive to keep you informed on a wide variety of tech that comes from a
multitude of sectors in society with the aim of informing and entertaining our readers. Whether you are a software engineer, foodie, or physicist we hope to have your pallet for tasty tech bytes covered. </p>
<p>Stay tuned for more exciting news from Tasty Tech Bytes!</p>
    </div>

  );
}
