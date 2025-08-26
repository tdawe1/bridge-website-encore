import { ArrowRight, CheckCircle, Zap, Target, TrendingUp } from "lucide-react";

export default function Index() {
  const handleBookDiscovery = () => {
    // Replace with actual Calendly or booking system URL
    window.open(
      "https://calendly.com/bridge-signal/discovery-sprint",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-headline mb-8 leading-tight">
            Reclaim Your Team's Time
          </h1>
          <p className="text-xl sm:text-2xl text-body max-w-3xl mx-auto mb-12 leading-relaxed">
            At Bridge & Signal, we create custom tools tailored to the way your
            business <em className="italic">actually</em> works—automating
            repetitive tasks so your team can focus on growth.
          </p>
          <button
            onClick={handleBookDiscovery}
            className="btn-electric text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Your Discovery Sprint
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-headline text-center mb-16">
            A Simple Path to Efficiency
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-headline mb-4">
                Discover
                <span className="block text-lg font-medium text-brand-electric-blue mt-1">
                  (1-2 Weeks)
                </span>
              </h3>
              <p className="text-body text-lg leading-relaxed">
                We partner with you to map your workflows and identify the 3-5
                bottlenecks with the highest potential for ROI.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-headline mb-4">
                Build
                <span className="block text-lg font-medium text-brand-electric-blue mt-1">
                  (2-4 Weeks)
                </span>
              </h3>
              <p className="text-body text-lg leading-relaxed">
                We build a lightweight, working tool that solves your most
                critical problem first and train your team on how to use it.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-headline mb-4">Deliver</h3>
              <p className="text-body text-lg leading-relaxed">
                We roll out a production-ready solution that delivers measurable
                time savings and a clear return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-headline mb-8">
            Real-World Bottlenecks, Solved.
          </h2>
          <p className="text-2xl text-body mb-16 font-medium">
            Our projects remove barriers to your business vision.
          </p>

          <div className="space-y-12 text-left">
            {/* Case Study 1 */}
            <div className="bg-brand-white border-l-4 border-brand-electric-blue pl-8 py-6">
              <p className="text-lg text-body leading-relaxed">
                <strong className="text-headline">
                  Spending hours refreshing job boards just to secure work?
                </strong>
                &nbsp;Our translation workflow now captures jobs
                automatically, filters for quality, and delivers first-pass
                translations—letting our client reliably generate revenue{" "}
                <strong className="text-headline">without</strong> constant
                monitoring.
              </p>
            </div>

            {/* Case Study 2 */}
            <div className="bg-brand-white border-l-4 border-brand-electric-blue pl-8 py-6">
              <p className="text-lg text-body leading-relaxed">
                <strong className="text-headline">
                  Buried in spreadsheets every week?
                </strong>{" "}
                Our automated reporting dashboard now{" "}
                <strong className="text-brand-electric-blue">
                  frees up 10+ hours of expert time
                </strong>
                , letting the team focus on generating leads and strategy
                instead of wrangling data. It's the power of Tableau, without
                the bloat.
              </p>
            </div>

            {/* Case Study 3 */}
            <div className="bg-brand-white border-l-4 border-brand-electric-blue pl-8 py-6">
              <p className="text-lg text-body leading-relaxed">
                <strong className="text-headline">
                  Struggling to produce accurate quotes quickly?
                </strong>{" "}
                Our lightweight quoting tool now generates complex quotes in
                minutes,{" "}
                <strong className="text-brand-electric-blue">
                  cutting reconciliation time by 70%
                </strong>{" "}
                and nearly eliminating costly errors—so the team can focus on
                winning business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            The first step is a no-obligation Discovery Call. We'll map your
            workflows, understand your business, and identify the opportunities
            that will have a real impact on your bottom line.
          </p>
          <button
            onClick={handleBookDiscovery}
            className="bg-brand-electric-blue hover:bg-brand-electric-blue/90 text-white font-medium px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Your Free Discovery Call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-soft-gray border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-headline">
                Bridge & Signal
              </h3>
              <p className="text-body mt-1">Bespoke automation for SMEs</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-body">
              <a
                href="mailto:hello@bridgeandsignal.com"
                className="hover:text-brand-electric-blue transition-colors duration-200"
              >
                hello@bridgeandsignal.com
              </a>
              <a
                href="https://linkedin.com/company/bridge-signal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-electric-blue transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="/privacy-policy"
                className="hover:text-brand-electric-blue transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-body">
            <p>&copy; 2024 Bridge & Signal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
