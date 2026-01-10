import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, X, Star, ExternalLink } from "lucide-react";

const vpnComparison = [
  {
    name: "NordVPN",
    rating: 4.9,
    price: "$3.29/mo",
    servers: "6,000+",
    countries: 60,
    devices: 6,
    killSwitch: true,
    noLogs: true,
    streaming: true,
    torrenting: true,
    splitTunneling: true,
    recommended: true,
  },
  {
    name: "ExpressVPN",
    rating: 4.8,
    price: "$6.67/mo",
    servers: "3,000+",
    countries: 94,
    devices: 5,
    killSwitch: true,
    noLogs: true,
    streaming: true,
    torrenting: true,
    splitTunneling: true,
    recommended: false,
  },
  {
    name: "Surfshark",
    rating: 4.7,
    price: "$2.49/mo",
    servers: "3,200+",
    countries: 100,
    devices: "∞",
    killSwitch: true,
    noLogs: true,
    streaming: true,
    torrenting: true,
    splitTunneling: true,
    recommended: false,
  },
  {
    name: "CyberGhost",
    rating: 4.5,
    price: "$2.19/mo",
    servers: "9,000+",
    countries: 91,
    devices: 7,
    killSwitch: true,
    noLogs: true,
    streaming: true,
    torrenting: true,
    splitTunneling: false,
    recommended: false,
  },
  {
    name: "PIA",
    rating: 4.4,
    price: "$2.03/mo",
    servers: "35,000+",
    countries: 84,
    devices: 10,
    killSwitch: true,
    noLogs: true,
    streaming: true,
    torrenting: true,
    splitTunneling: true,
    recommended: false,
  },
];

const Comparisons = () => {
  return (
    <Layout>
      <PageHeader
        title="VPN Comparison Table"
        highlightedWord="Comparison"
        description="Compare the top VPNs side-by-side. Find the perfect VPN for your needs based on features, price, and performance."
        badge="Updated Weekly"
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-display font-semibold">VPN Provider</th>
                  <th className="text-center p-4 font-display font-semibold">Rating</th>
                  <th className="text-center p-4 font-display font-semibold">Price</th>
                  <th className="text-center p-4 font-display font-semibold">Servers</th>
                  <th className="text-center p-4 font-display font-semibold">Countries</th>
                  <th className="text-center p-4 font-display font-semibold">Devices</th>
                  <th className="text-center p-4 font-display font-semibold">Kill Switch</th>
                  <th className="text-center p-4 font-display font-semibold">No Logs</th>
                  <th className="text-center p-4 font-display font-semibold">Streaming</th>
                  <th className="text-center p-4 font-display font-semibold">Torrenting</th>
                  <th className="text-center p-4 font-display font-semibold">Split Tunnel</th>
                  <th className="text-center p-4 font-display font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {vpnComparison.map((vpn) => (
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
                            #1
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
                    <td className="p-4 text-center">{vpn.countries}</td>
                    <td className="p-4 text-center">{vpn.devices}</td>
                    <td className="p-4 text-center">
                      {vpn.killSwitch ? <Check className="h-5 w-5 text-success mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {vpn.noLogs ? <Check className="h-5 w-5 text-success mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {vpn.streaming ? <Check className="h-5 w-5 text-success mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {vpn.torrenting ? <Check className="h-5 w-5 text-success mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {vpn.splitTunneling ? <Check className="h-5 w-5 text-success mx-auto" /> : <X className="h-5 w-5 text-destructive mx-auto" />}
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

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {vpnComparison.map((vpn) => (
              <div
                key={vpn.name}
                className={`rounded-xl border p-6 ${
                  vpn.recommended ? "border-primary bg-primary/5" : "border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold">{vpn.name}</h3>
                      {vpn.recommended && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          #1 Pick
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-semibold">{vpn.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-display text-xl font-bold text-primary">{vpn.price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                    <span className="text-muted-foreground">Servers</span>
                    <span className="font-medium">{vpn.servers}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                    <span className="text-muted-foreground">Countries</span>
                    <span className="font-medium">{vpn.countries}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                    <span className="text-muted-foreground">Devices</span>
                    <span className="font-medium">{vpn.devices}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                    <span className="text-muted-foreground">Kill Switch</span>
                    {vpn.killSwitch ? <Check className="h-5 w-5 text-success" /> : <X className="h-5 w-5 text-destructive" />}
                  </div>
                </div>

                <Button variant="cta" className="w-full">
                  Get Deal
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Comparisons;
