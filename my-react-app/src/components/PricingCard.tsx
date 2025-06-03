interface PricingCardProps {
  plan: string
  price: string
  features: string[]
  isFeatured?: boolean
}

export default function PricingCard({ plan, price, features, isFeatured = false }: PricingCardProps) {
  const baseClasses =
    "relative p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
  const featuredClasses = isFeatured ? "bg-slate-700 text-white py-12" : "bg-white text-gray-900 py-8"
  const titleClasses = isFeatured ? "text-white" : "text-gray-900"
  const priceClasses = isFeatured ? "text-white" : "text-gray-900"
  const featureTextClasses = isFeatured ? "text-gray-300" : "text-gray-600"
  const borderClasses = isFeatured ? "border-b border-slate-600" : "border-b border-gray-200"
  const buttonClasses = isFeatured
    ? "text-white hover:text-gray-300 focus:ring-slate-400"
    : "text-gray-900 hover:text-gray-700 focus:ring-gray-400"

  return (
    <div className={`${baseClasses} ${featuredClasses}`} tabIndex={0}>
      <div className="text-center">
        <h3 className={`text-lg font-semibold mb-4 ${titleClasses}`}>{plan}</h3>

        <div className="mb-6">
          <span className={`text-4xl font-bold ${priceClasses}`}>{price}</span>
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className={`py-3 ${borderClasses}`}>
              <p className={`text-sm ${featureTextClasses}`}>{feature}</p>
            </div>
          ))}
        </div>

        <button
          className={`w-full py-3 px-6 font-semibold text-sm uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-4 ${buttonClasses}`}
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}
