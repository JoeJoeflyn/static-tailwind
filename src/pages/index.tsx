import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "/src/styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <p className="text-3xl font-bold text-red-500">Hello</p>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
