export default function Page({params}: { params: { slug: string } }){
    return(
    <div> my post: {params.slug[0]}  / {params.slug[1]} /{params.slug[2]} /{params.slug[3] } </div>
    );
}