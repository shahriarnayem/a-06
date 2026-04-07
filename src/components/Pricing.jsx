export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/Month",
      desc: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/Month",
      desc: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/Month",
      desc: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 text-black text-center">
      
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl lg:text-5xl font-bold">
          Simple, Transparent Pricing
        </h2>

        <p className="mt-4 text-white/70">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-xl text-left transition ${
                plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-purple-900 text-white"
                  : "bg-purple-50 border text-black"
              }`}
            >

              {plan.highlight && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-200 text-yellow-800 text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm mt-1 opacity-80">{plan.desc}</p>

              <div className="mt-6 text-4xl font-bold">
                {plan.price}
                <span className="text-sm font-normal opacity-70">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-full font-medium transition ${
                  plan.highlight
                    ? "bg-white text-purple-600"
                    : "bg-gradient-to-r from-purple-600 to-purple-900 text-white"
                }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}