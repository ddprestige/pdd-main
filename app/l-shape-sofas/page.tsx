import type { Metadata } from "next";
import { CategoryPageTemplate, lShapeConfig } from "../components/CategoryPage";

export const metadata: Metadata = {
  title: lShapeConfig.seoTitle,
  description: lShapeConfig.seoDescription,
};

export default function LShapeSofasPage() {
  return <CategoryPageTemplate config={lShapeConfig} />;
}