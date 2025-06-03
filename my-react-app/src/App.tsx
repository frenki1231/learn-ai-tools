import PricingCard from "./components/PricingCard"

export default function App() {
  const pricingPlans = [
    {
      plan: "Standard",
      price: "$100",
      features: ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"],
      isFeatured: false,
    },
    {
      plan: "Pro",
      price: "$200",
      features: ["100,000 Requests", "7 contributors", "Up to 6 GB storage space"],
      isFeatured: true,
    },
    {
      plan: "Expert",
      price: "$500",
      features: ["200,000 Requests", "11 contributors", "Up to 10 GB storage space"],
      isFeatured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:items-end">
          {pricingPlans.map((planData, index) => (
            <PricingCard
              key={index}
              plan={planData.plan}
              price={planData.price}
              features={planData.features}
              isFeatured={planData.isFeatured}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
