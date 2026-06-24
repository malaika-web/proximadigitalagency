function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-headline-lg text-headline-lg md:text-display-lg mb-4">
        {title.split(" ").map((word, idx) => {
          if (word.includes("*")) {
            return (
              <span key={idx} className="text-primary">
                {word.replace(/\*/g, "")}
              </span>
            );
          }
          return word + " ";
        })}
      </h2>
      {subtitle && <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
