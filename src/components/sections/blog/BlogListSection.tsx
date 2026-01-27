import Link from "next/link";
import { getAllPosts } from "@/components/blog/blogData";

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

export default function BlogListSection() {
  const posts = getAllPosts();

  return (
    <section className="bg-background pb-20 sm:pb-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-border/60 bg-card/70 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.12)] transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                <span>{formatDate(post.date)}</span>
                {post.readTime ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </>
                ) : null}
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-text group-hover:text-primary sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 text-base text-text-secondary sm:text-lg">
                {post.description}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                Ler artigo
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
