import { Link, useLoaderData } from "@remix-run/react";
import { useUser } from "~/utils";
import { loader } from "~/routes/notes";

export default function Article1() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (


      <div className="h-full w-80 border-r bg-gray-50">
        <Link to="article2" className="block p-4 text-xl text-blue-500">

        </Link>




          <p className="p-4">Article 1</p>
</div>

  );
}
