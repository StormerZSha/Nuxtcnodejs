export {articleType,authorType,userinfoType,currenttopicType}
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

interface currenttopicType{
    author:authorType,
    author_id:string,
    content:string,
    create_at:string,
    good:boolean,
    id:string,
    is_collect:boolean,
    last_reply_at:string,
    replies:Array<replyType>,
    reply_count:number,
    tab:string,
    title:string,
    top:boolean,
    visit_count:number
}
interface replyType{
    author:authorType,
    content:string,
    create_at:string,
    id:string,
    is_uped:false,
    reply_id:null,
    ups:Array<string>,
}