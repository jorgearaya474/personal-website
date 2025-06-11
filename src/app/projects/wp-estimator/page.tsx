import WPEstimator from "@/components/projects/WPEstimator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Project Time Estimator | Jorge Araya Web Developer",
  description:
    "Quickly estimate how long your next WordPress website will take to build. Use this interactive tool to plan timelines and set expectations with ease.",
  keywords: [
    "wordpress project estimator",
    "wordpress time calculator",
    "website timeline tool",
    "wordpress quote generator",
    "wordpress project planning",
    "wordpress development estimator",
  ],
};

export default function WPEstimatorTool() {
  return <WPEstimator />;
}
