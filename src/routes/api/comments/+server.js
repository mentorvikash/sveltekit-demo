import { Comments } from "$lib/comments";
import { json } from "@sveltejs/kit";

export function GET(){
    return json(Comments)
}


// function GET() {
//     return new Response(JSON.stringify(Comments), {
//         headers: {
//             "content-type": "application/json"
//         }
//     })
// }