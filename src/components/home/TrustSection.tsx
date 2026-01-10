import { Shield, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "100+",
    label: "Products Tested",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Users Trust Us",
  },
  {
    icon: Award,
    value: "5 Years",
    label: "Of Experience",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Updated Reviews",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
