// export async function GET(request: Request) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await res.json();
//   return new Response(JSON.stringify(data), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }
// export async function GET() {
//     return new Response('Hello, Next.js!');

import { console } from "inspector";

// }
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
  
    console.log('Type:',type);
    const tabs = [
      {
        id: 1,
        title: 'Tab 1',
        content: 'Content for Tab 1',
      },
      {
        id: 2,
        title: 'Tab 2',
        content: 'Content for Tab 2',
      },
      {
        id: 3,
        title: 'Tab 3',
        content: 'Content for Tab 3',
      },
      {
        id: 4,
        title: 'Tab 4',
        content: 'Content for Tab 4',
      },
    ];
  
    return new Response(JSON.stringify(tabs), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  export async function POST(req: Request) {
    const body = await req.json();
    console.log('Request Body:', body);
    return new Response(JSON.stringify({ message: 'Data received', data: body }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
   
  
    //return  Response.json({ message: 'Data received successfully' }, { status: 200 });
  }
  