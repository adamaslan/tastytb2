import { Link, useLoaderData } from "@remix-run/react";

import { loader } from "~/routes/notes";


export default function Article1() {
  const data = useLoaderData<typeof loader>();


  return (


      <div className="h-full mx-auto text-center text-2xl  w-3/4 border-r bg-gray-50">
        <Link to="/" className="block p-4 text-xl text-blue-500">
HELLLO
        </Link>

        <p>Struggling with formatting your resume using Google Docs? Are the bullets different sizes? Are you trying to get a specific sized bullet? Are you using google docs to create your resume?</p>
        <p>Here are 3 tips to help with Bulleting your resume!</p>
        <p>After reading these three tips you should be able to create two different sized bullets in your resume.</p>
        <p><strong>1. Find the formatting drop down menu for bulleting.</strong><br />While this isnt much of a tip, if you are like me you usually just press enter to create a bullet or try to copy and paste another bulleted point. This works if you already have smaller bullets, but doesn&apos;t work for the larger bullets.</p>
        <p><strong>2. Delete the smaller bullet and make sure the cursor is all the way to the left.</strong><br />When you position the cursor at this point you are setting up the document to insert larger bullets.<br />*Note: If you have text already it will be left of the other bullets.</p>
        <p><strong>3. Use the drop down menu to choose the format that starts with bullets.</strong></p>
        <p>It looks like this:<br />
          <a href="https://res.cloudinary.com/practicaldev/image/fetch/s--w7c6NwWR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/944g0t87u56war9ebvee.jpg">
            <img className="h-full mx-auto"  src="https://res.cloudinary.com/practicaldev/image/fetch/s--w7c6NwWR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/944g0t87u56war9ebvee.jpg" alt="Image description" width="95" height="110"/></a></p>
        <p>Just pop one of those bad boys in and you are ready to go.</p>



          <p className="p-4">


          </p>
</div>

  );
}
