export {articleType}
interface articleType{
    id:string,
    author_id:string,
    tab:string,
    content:string,
    title:string,
    last_reply_at:string,
    good:boolean,
    top:boolean,
    reply_count:number,
    visit_count:number,
    create_at:string,
    author:authorType
}

interface authorType{
    loginname:string,
    avatar_url:string
}