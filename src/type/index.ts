export {articleType,authorType,userinfoType}
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

interface userinfoType{
    avatar_url:string,
    create_at:string,
    githubUsername:string,
    loginname:string,
    recent_replies:Array<recentType>,
    recent_topic:Array<recentType>,
    score:number
}

interface recentType{
    author:authorType,
    id:string,
    last_reply_at:string,
    title:string
}