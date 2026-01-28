import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({
      href,
      children,
      ...props
    }: ComponentPropsWithoutRef<"a">) => {
      if (typeof href === "string" && href.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
          {...props}
        >
          {children}
        </a>
      );
    },
    h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-4xl leading-tight mb-6" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2 className="text-2xl leading-tight mt-10 mb-4" {...props}>
        {children}
      </h2>
    ),
    p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p className="mb-5 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-disc pl-6 mb-5 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol className="list-decimal pl-6 mb-5 space-y-2" {...props}>
        {children}
      </ol>
    ),
    code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => (
      <code className="px-1 py-0.5 rounded bg-black/10" {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <pre className="p-4 rounded bg-black/10 overflow-x-auto mb-6" {...props}>
        {children}
      </pre>
    ),
    ...components,
  };
}

