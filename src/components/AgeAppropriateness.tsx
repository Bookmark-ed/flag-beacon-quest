interface AgeAppropriatenessProps {
  recommendedAgeRange: string;
  gradeEquivalent: string;
  readingLevel: string;
}

const AgeAppropriateness = ({
  recommendedAgeRange = "12-18 years",
  gradeEquivalent = "7th-12th Grade",
  readingLevel = "Middle School+",
}: Partial<AgeAppropriatenessProps>) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Age Appropriateness</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">{recommendedAgeRange}</div>
          <div className="text-sm text-muted-foreground">Recommended Age Range</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">{gradeEquivalent}</div>
          <div className="text-sm text-muted-foreground">Grade Equivalent</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">{readingLevel}</div>
          <div className="text-sm text-muted-foreground">Reading Level</div>
        </div>
      </div>
    </div>
  );
};

export default AgeAppropriateness;
