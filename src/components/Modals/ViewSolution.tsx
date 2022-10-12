import Modal from "../../standard/Modal";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { IModal } from "../../data/type";
import Navigation from "../Navigation";

const ViewSolution = ({ ModalDetail, ModalType }: IModal) => {
  return (
    <Modal>
      <div className="ViewSolution">
        <Navigation
          Buttons={[
            {
              text: "Take Interview",
              ModalType: "viewQuestion",
            },
          ]}
        />
        <ReactMarkdown
          children={JSON.parse(JSON.stringify(ModalDetail.solution))}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula}
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
