import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="flex flex-col gap-6">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-semibold text-text sm:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-text sm:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-text sm:text-2xl">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc space-y-2 pl-5 text-text-secondary sm:text-lg">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal space-y-2 pl-5 text-text-secondary sm:text-lg">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-primary/40 pl-4 text-base text-text-secondary sm:text-lg">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-primary underline-offset-4 hover:underline"
            >
              {children}
            </a>
          ),
        code: ({ children, className }) => {
          const isInline =
            !className && !String(children).includes("\n");
          if (isInline) {
            return (
              <code className="rounded-md bg-card px-1.5 py-0.5 text-[0.9em] text-text">
                {children}
              </code>
            );
            }
            return (
              <pre className="overflow-x-auto rounded-2xl border border-border/60 bg-card/70 p-4 text-sm text-text">
                <code className={className}>{children}</code>
              </pre>
            );
          },
          hr: () => <hr className="border-border/60" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
