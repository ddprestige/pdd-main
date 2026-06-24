import type { Metadata } from "next";
import { CategoryPageTemplate, diningTableConfig } from "../components/CategoryPage";

export const metadata: Metadata = {
  title: diningTableConfig.seoTitle,
  description: diningTableConfig.seoDescription,
};

export default function LShapeSofasPage() {
  return <CategoryPageTemplate config={diningTableConfig} />;
}