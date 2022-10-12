import React, { useState } from "react";
import Modal from "../../standard/Modal";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AddQuestion = () => {
  const [document, setDocument] = useState("");

  return (
    <Modal>
      <form className="AddQuestion">
        <div className="AddQuestion__topWrapper">
          <h2 className="AddQuestion__topWrapper--title">Add Question</h2>
        </div>
        <div className="AddQuestion__boxWrapper">
          <p>Question</p>
          <textarea
            onChange={(event) => setDocument(event.target.value)}
            className="AddQuestion__input"
          ></textarea>
        </div>
        <ReactMarkdown
          children={document}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
          className="markdown"
        />
      </form>
    </Modal>
  );
};

export default AddQuestion;
