import Link from "next/link";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import type { BlogPost } from "@/components/blog/blogData";

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

type BlogPostSectionProps = {
  post: BlogPost;
};

export default function BlogPostSection({ post }: BlogPostSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-[-40px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.2),_rgba(37,99,235,0)_70%)] blur-[90px]" />
      </div>
      <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <Link
            href="/blog"
            className="w-fit text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary hover:text-primary"
          >
            Voltar ao blog
          </Link>
          <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
            <span>{formatDate(post.date)}</span>
            {post.readTime ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </>
            ) : null}
          </div>
          <h1 className="text-3xl font-semibold text-text sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-base text-text-secondary sm:text-lg">
            {post.description}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <MarkdownRenderer content={post.content} />
        </div>
      </div>
    </section>
  );
}
