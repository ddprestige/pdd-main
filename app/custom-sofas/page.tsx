import type { Metadata } from "next";
import { CategoryPageTemplate, customSofaConfig } from "../components/CategoryPage";

export const metadata: Metadata = {
  title: customSofaConfig.seoTitle,
  description: customSofaConfig.seoDescription,
};

export default function LShapeSofasPage() {
  return <CategoryPageTemplate config={customSofaConfig} />;
}