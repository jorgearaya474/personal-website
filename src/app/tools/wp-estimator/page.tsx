"use client";

import React, { useState, useMemo } from "react";
import HeroSection from "@/components/layout/HeroSection";
import ToolSectionTitle from "@/components/ui/ToolSectionTitle";
import EstSummaryItem from "@/components/ui/EstSummaryItem";
import ContactBanner from "@/components/layout/ContactBanner";
import BuyMeCoffeeSection from "@/components/layout/BuyMeACoffeeSection";

type DesignComplexity = "simple" | "medium" | "complex";
type Builder =
  | "elementor"
  | "bricks"
  | "beaver"
  | "divi"
  | "gutenberg"
  | "custom";
type Featurekey = keyof typeof CONFIGDATA.features;
type Additionalkey = keyof typeof CONFIGDATA.additionals;

interface Feature {
  name: string;
  hours: number;
}

interface Additional {
  name: string;
  hours: number;
}

const CONFIGDATA = {
  designHours: { simple: 3.5, medium: 4.5, complex: 5.5 } as Record<
    DesignComplexity,
    number
  >,
  builderFactor: {
    elementor: 1,
    bricks: 1,
    beaver: 1.2,
    divi: 1.3,
    gutenberg: 1.4,
    custom: 2,
  } as Record<Builder, number>,
  features: {
    forms: { name: "Advanced Forms", hours: 4 },
    ecommerce: { name: "E-commerce (WooCommerce)", hours: 20 },
    membership: { name: "Memberships", hours: 15 },
    multilingual: { name: "Multilingual", hours: 8 },
    booking: { name: "Bookings", hours: 12 },
    custom: { name: "Custom", hours: 25 },
  } as Record<string, Feature>,
  additionals: {
    migration: { name: "Content/Posts migration", hours: 10 },
    seo: { name: "SEO", hours: 6 },
    optimization: { name: "Site Optimization", hours: 6 },
  } as Record<string, Additional>,
};

export default function WPEstimator() {
  const [pages, setPages] = useState<number>(5);
  const [designComplexity, setDesignComplexity] =
    useState<DesignComplexity>("medium");
  const [builder, setBuilder] = useState<Builder>("elementor");
  const [features, setFeatures] = useState<Record<string, boolean>>({});
  const [additionals, setAdditionals] = useState<Record<string, boolean>>({});
  const [buffer, setBuffer] = useState<number>(20);

  const toggleFeature = (key: Featurekey): void => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAdditional = (key: Additionalkey): void => {
    setAdditionals((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const estimate = useMemo(() => {
    const base =
      pages *
      CONFIGDATA.designHours[designComplexity] *
      CONFIGDATA.builderFactor[builder];
    const featuresHours = Object.keys(features)
      .filter((key) => features[key])
      .reduce((acc, key) => acc + CONFIGDATA.features[key].hours, 0);
    const additionalsHours = Object.keys(additionals)
      .filter((key) => additionals[key])
      .reduce((acc, key) => acc + CONFIGDATA.additionals[key].hours, 0);
    const total = Math.round(
      (base + featuresHours + additionalsHours) * (1 + buffer / 100),
    );

    return {
      base: Math.round(base),
      total,
      days: Math.ceil(total / 8),
      weeks: Math.ceil(total / 40),
    };
  }, [pages, designComplexity, builder, features, additionals, buffer]);

  const handlePagesChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || 1;
    setPages(Math.max(1, Math.min(50, value)));
  };

  const handleDesignChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setDesignComplexity(e.target.value as DesignComplexity);
  };

  const handleBuilderChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setBuilder(e.target.value as Builder);
  };

  const handleBufferChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBuffer(parseInt(e.target.value));
  };

  const selectedFeatures = useMemo(() => {
    return Object.entries(features)
      .filter(([key, selected]) => selected)
      .map(([key]) => CONFIGDATA.features[key].name)
      .join(", ");
  }, [features]);

  const selectedAdditionals = useMemo(() => {
    return Object.entries(additionals)
      .filter(([key, selected]) => selected)
      .map(([key]) => CONFIGDATA.additionals[key].name)
      .join(", ");
  }, [additionals]);

  return (
    <>
      <HeroSection heading="WordPress Estimator" className="" />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col bg-zinc-800 p-8 rounded-lg">
            <div className="space-y-4">
              <ToolSectionTitle level={3} title="Site structure" num="1" />
              <div>
                <label className="block font-secondary text-lg font-medium text-white mb-2">
                  Number of pages
                </label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={pages}
                  onChange={handlePagesChange}
                  className="font-secondary text-md font-medium w-full p-2 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></input>
              </div>
              <div>
                <label className="block font-secondary text-lg font-medium text-white mb-2">
                  Design Complexity
                </label>
                <select
                  value={designComplexity}
                  onChange={handleDesignChange}
                  className="font-secondary text-md font-medium w-full p-3 border border-gray-300 rounded-xl text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="simple">Simple (basic design)</option>
                  <option value="medium">Medium (standard design)</option>
                  <option value="complex">Complex (unique design)</option>
                </select>
              </div>
              <div>
                <label className="block font-secondary text-lg font-medium text-white mb-2">
                  Building method
                </label>
                <select
                  value={builder}
                  onChange={handleBuilderChange}
                  className="font-secondary text-md font-medium w-full p-3 border border-gray-300 rounded-xl text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="elementor">Elementor</option>
                  <option value="bricks">Bricks Builder</option>
                  <option value="beaver">Beaver Builder</option>
                  <option value="divi">Divi</option>
                  <option value="gutenberg">Gutenberg</option>
                  <option value="custom">Custom code</option>
                </select>
              </div>
            </div>
            <div className="py-6">
              <hr />
            </div>
            <div className="space-y-4">
              <ToolSectionTitle
                level={3}
                title="Special Functionalities"
                num="2"
              />
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {Object.entries(CONFIGDATA.features).map(([key, feature]) => (
                  <label
                    key={key}
                    className="font-secondary flex items-center space-x-3 p-3 bg-white rounded-xl border hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!features[key]}
                      onChange={() => toggleFeature(key as Featurekey)}
                      className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                    />
                    <span className="text-md font-medium text-black">
                      {feature.name}
                    </span>
                    <span className="text-md text-gray-500">
                      +{feature.hours}h
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="py-6">
              <hr />
            </div>
            <div className="space-y-4">
              <ToolSectionTitle level={3} title="Additional Services" num="3" />
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(CONFIGDATA.additionals).map(
                  ([key, additional]) => (
                    <label
                      key={key}
                      className="font-secondary flex items-center space-x-3 p-3 bg-white rounded-xl border hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={!!additionals[key]}
                        onChange={() => toggleAdditional(key as Additionalkey)}
                        className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                      />
                      <span className="text-md font-medium text-black">
                        {additional.name}
                      </span>
                      <span className="text-md text-gray-500">
                        +{additional.hours}h
                      </span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-teal-500 to-cyan-700 text-white p-6 rounded-xl sticky top-28">
              <h3 className="font-primary text-2xl font-semibold mb-6 flex items-center gap-2">
                Project Estimation
              </h3>

              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg border-2 border-white/30">
                  <div className="text-xl opacity-90">Total</div>
                  <div className="text-3xl font-bold">{estimate.total}h</div>
                </div>
                <div className="font-secondary bg-white/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg opacity-90">Contingency Time</span>
                    <span className="text-xl">{buffer}%</span>
                  </div>
                  <input
                    type="range"
                    onChange={handleBufferChange}
                    min="10"
                    max="50"
                    step="5"
                    className="w-full accent-white cursor-pointer"
                  />
                  <p className="text-sm">Extra time for unexpected tasks</p>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg text-sm">
                  <h4 className="font-primary font-bold text-lg mb-2">
                    Estimation summary:
                  </h4>
                  <div className="space-y-1 opacity-90">
                    <EstSummaryItem
                      label="Base Hours"
                      value={estimate.base.toString()}
                    />
                    <EstSummaryItem
                      label="Days"
                      value={estimate.days.toString()}
                    />
                    <EstSummaryItem
                      label="Weeks"
                      value={estimate.weeks.toString()}
                    />
                    <EstSummaryItem label="Pages" value={pages.toString()} />
                    <EstSummaryItem label="Design" value={designComplexity} />
                    <EstSummaryItem label="Builder" value={builder} />
                    {selectedFeatures ? (
                      <EstSummaryItem
                        label="Features"
                        value={selectedFeatures}
                      />
                    ) : (
                      ""
                    )}
                    {selectedAdditionals ? (
                      <EstSummaryItem
                        label="Additionals"
                        value={selectedAdditionals}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="">
                  <small className="block italic mb-1">
                    Base Hours = pages + design complexity + builder method
                  </small>
                  <small className="italic">
                    <b>Disclaimer:</b> These are approximate estimates. Actual
                    project time may vary based on specific requirements and
                    complexity.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuyMeCoffeeSection
        title="Did this tool help you out?"
        text="Show your support with a coffee, it really makes a difference!"
      />
      <ContactBanner />
    </>
  );
}
