import React from "react";
import ReactMarkdown from "react-markdown";
import {CommentBox }from "./commentStyles"
import remarkGfm from "remark-gfm";
export default function Comment({ username, commentPassage }){
    return(
        <CommentBox>
          <div></div>
          <h1>{username}</h1>
          <br />
          <ReactMarkdown
              children={commentPassage}
              remarkPlugins={[remarkGfm]}
            />
          
          
        </CommentBox>
        )
}