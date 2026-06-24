import type { Metadata } from "next";
import { CategoryPageTemplate, sofaCumBedConfig } from "../components/CategoryPage";

export const metadata: Metadata = {
  title: sofaCumBedConfig.seoTitle,
  description: sofaCumBedConfig.seoDescription,
};

export default function LShapeSofasPage() {
  return <CategoryPageTemplate config={sofaCumBedConfig} />;
}





