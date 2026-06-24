import type { Metadata } from "next";
import { CategoryPageTemplate, bedConfig } from "../components/CategoryPage";

export const metadata: Metadata = {
  title: bedConfig.seoTitle,
  description: bedConfig.seoDescription,
};

export default function LShapeSofasPage() {
  return <CategoryPageTemplate config={bedConfig} />;
}