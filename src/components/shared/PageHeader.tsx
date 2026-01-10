interface PageHeaderProps {
  title: string;
  highlightedWord?: string;
  description: string;
  badge?: string;
}

const PageHeader = ({ title, highlightedWord, description, badge }: PageHeaderProps) => {
  const titleParts = highlightedWord
    ? title.split(highlightedWord)
    : [title];

  return (
    <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">{badge}</span>
            </div>
          )}
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {highlightedWord ? (
              <>
                {titleParts[0]}
                <span className="text-gradient">{highlightedWord}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
