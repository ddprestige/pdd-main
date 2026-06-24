import type { Metadata } from "next";
import { CategoryPageTemplate, reclinerConfig } from "../components/CategoryPage";

export const metadata: Metadata = {
  title: reclinerConfig.seoTitle,
  description: reclinerConfig.seoDescription,
};

export default function LShapeSofasPage() {
  return <CategoryPageTemplate config={reclinerConfig} />;
}