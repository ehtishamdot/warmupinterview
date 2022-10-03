import Modal from "../../standard/Modal";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { IModal } from "../../data/type";

const ViewSolution = ({ ModalDetail }: IModal) => {
  //   console.log(questions[0]?.content[0]?.questions);

  console.log(JSON.parse(JSON.stringify(ModalDetail.solution)));
  return (
    <Modal>
      <div className="ViewSolution">
        <ReactMarkdown
          children={JSON.parse(JSON.stringify(ModalDetail.solution))}
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
          className="viewSolution__markdown"
        />
      </div>
    </Modal>
  );
};

export default ViewSolution;
