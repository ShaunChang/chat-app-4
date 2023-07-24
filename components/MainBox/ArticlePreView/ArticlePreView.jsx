import { useState } from "react";
import Header from "./components/Header"
import Content from "./components/Content"


const ArticlePreView = ({article}) => {
    return(
        <div className="main px-xl-5 px-lg-4 px-3"style={{overflow: 'auto'}}>
            <Header title={article.title}/>
            <Content content={article.content}/>
        </div>
    )
}

export default ArticlePreView