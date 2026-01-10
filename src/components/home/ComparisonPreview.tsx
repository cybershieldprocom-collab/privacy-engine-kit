import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, Star, ExternalLink } from "lucide-react";

const vpnComparison = [
  {
    name: "NordVPN",
    rating: 4.9,
    price: "$3.29/mo",
    servers: "6,000+",
    devices: 6,
    killSwitch: true,
    noLogs: true,
    streaming: true,
    recommended: true,
  },
  {
    name: "ExpressVPN",
    rating: 4.8,
    price: "$6.67/mo",
    servers: "3,000+",
    devices: 5,
    killSwitch: true,
    noLogs: true,
    streaming: true,
    recommended: false,
  },
  {
    name: "Surfshark",
    rating: 4.7,
    price: "$2.49/mo",
    servers: "3,200+",
    devices: "Unlimited",
    killSwitch: true,
    noLogs: true,
    streaming: true,
    recommended: false,
  },
];

const ComparisonPreview = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Quick <span className="text-gradient">Comparison</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how the top VPNs stack up against each other at a glance.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-semibold">VPN Provider</th>
                <th className="text-center p-4 font-display font-semibold">Rating</th>
                <th className="text-center p-4 font-display font-semibold">Price</th>
                <th className="text-center p-4 font-display font-semibold">Servers</th>
                <th className="text-center p-4 font-display font-semibold">Devices</th>
                <th className="text-center p-4 font-display font-semibold">Kill Switch</th>
                <th className="text-center p-4 font-display font-semibold">No Logs</th>
                <th className="text-center p-4 font-display font-semibold">Streaming</th>
                <th className="text-center p-4 font-display font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {vpnComparison.map((vpn, index) => (
                <tr
                  key={vpn.name}
                  className={`border-b border-border transition-colors hover:bg-muted/50 ${
                    vpn.recommended ? "bg-primary/5" : ""
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{vpn.name}</span>
                      {vpn.recommended && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          #1 Pick
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-semibold">{vpn.rating}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center font-semibold text-primary">{vpn.price}</td>
                  <td className="p-4 text-center">{vpn.servers}</td>
                  <td className="p-4 text-center">{vpn.devices}</td>
                  <td className="p-4 text-center">
                    {vpn.killSwitch ? (
                      <Check className="h-5 w-5 text-success mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {vpn.noLogs ? (
                      <Check className="h-5 w-5 text-success mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {vpn.streaming ? (
                      <Check className="h-5 w-5 text-success mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <Button variant="cta" size="sm">
                      Get Deal
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <Link to="/comparisons">
            <Button variant="outline" size="lg">
              See Full Comparison
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonPreview;
