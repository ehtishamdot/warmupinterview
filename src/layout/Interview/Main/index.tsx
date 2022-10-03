import { useAppSelector } from "../../../hooks/useRedux";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Main = () => {
  const questions = useAppSelector((state) => state.questions);

  console.log(questions[0]?.content[0].questions);

  console.log();

  // console.log(JSON.parse(questions[0]?.content?.q));
  return (
    <div className="Main">
      <ReactMarkdown
        children={JSON.parse(
          JSON.stringify(questions[0]?.content[0].questions)
        )}
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

      {/* <Code textColor={"black"} /> */}
      {/* {<CodeBlock/> } */}
      {/* <CodeBlock /> */}
      {/* <CopyBlock  /> */}
    </div>
  );
};

export default Main;
