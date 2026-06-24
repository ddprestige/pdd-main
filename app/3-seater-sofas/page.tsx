import type { Metadata } from "next";
import { CategoryPageTemplate, threeSeaterConfig } from "../components/CategoryPage";

export const metadata: Metadata = {
  title: threeSeaterConfig.seoTitle,
  description: threeSeaterConfig.seoDescription,
};

export default function LShapeSofasPage() {
  return <CategoryPageTemplate config={threeSeaterConfig} />;
}