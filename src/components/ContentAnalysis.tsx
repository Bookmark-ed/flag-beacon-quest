import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ShieldAlert, AlertTriangle, BookOpen, Eye, MessageSquare, CheckCircle, XCircle } from "lucide-react";

const ContentAnalysis = () => {
  return (
    <div className="space-y-6">
      {/* Status & Risk Overview */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Status & Risk Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-success/15 border-2 border-success/30">
            <ShieldCheck className="h-6 w-6 text-success mb-2" />
            <div className="text-sm text-muted-foreground">Ban Status</div>
            <div className="text-lg font-bold text-success">CLEAR</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-warning/15 border-2 border-warning/30">
            <ShieldAlert className="h-6 w-6 text-warning mb-2" />
            <div className="text-sm text-muted-foreground">Challenge Risk</div>
            <div className="text-lg font-bold text-warning">Low</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-info/15 border-2 border-info/30">
            <AlertTriangle className="h-5 w-5 text-info mb-2" />
            <div className="text-sm text-muted-foreground">Parental Guidance</div>
            <div className="text-lg font-bold text-info">Yes</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
            <BookOpen className="h-5 w-5 text-primary mb-2" />
            <div className="text-sm text-muted-foreground">Reading Level</div>
            <div className="text-lg font-bold text-primary">Adult</div>
          </div>
        </div>
      </div>

      {/* Content Ratings */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Content Ratings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Violence</span>
            </div>
            <Badge className="bg-warning/20 text-warning-foreground border-warning/40 font-semibold" variant="outline">Mild</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Sexual Content</span>
            </div>
            <Badge className="bg-warning/20 text-warning-foreground border-warning/40 font-semibold" variant="outline">Implied</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Language</span>
            </div>
            <Badge className="bg-warning/20 text-warning-foreground border-warning/40 font-semibold" variant="outline">Some mild profanity</Badge>
          </div>
        </div>
      </div>

      {/* Grade Level Suitability */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Grade Level Suitability</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-danger/30 bg-danger/10">
            <XCircle className="h-5 w-5 text-danger flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground">Elementary</div>
              <div className="text-xs font-semibold text-danger">Not recommended</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-danger/30 bg-danger/10">
            <XCircle className="h-5 w-5 text-danger flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground">Middle School</div>
              <div className="text-xs font-semibold text-danger">Not recommended</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-success/30 bg-success/10">
            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-foreground">High School</div>
              <div className="text-xs font-semibold text-success">Appropriate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Potential Concerns & Mature Themes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-3">Potential Concerns</h3>
          <div className="flex flex-wrap gap-2">
            {["Supernatural elements", "Mature themes"].map((concern) => (
              <Badge key={concern} className="bg-warning/20 text-warning-foreground border-warning/40 font-semibold px-3 py-1" variant="outline">
                <AlertTriangle className="h-3 w-3 mr-1" />
                {concern}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-3">Mature Themes</h3>
          <div className="flex flex-wrap gap-2">
            {["Infidelity", "Mental illness", "Suicide", "Alcoholism", "Supernatural elements"].map((theme) => (
              <Badge key={theme} className="bg-danger/15 text-danger border-danger/40 font-semibold px-3 py-1" variant="outline">
                {theme}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content Warnings */}
      <div className="bg-card rounded-lg border-2 border-danger/30 p-6">
        <h3 className="text-lg font-semibold text-danger mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Content Warnings
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Violence",
            "Disturbing Imagery",
            "Psychological Distress",
            "Possible Supernatural Elements",
          ].map((warning) => (
            <Badge key={warning} className="bg-danger/20 text-danger border-danger/50 font-semibold px-3 py-1" variant="outline">
              <AlertTriangle className="h-3 w-3 mr-1" />
              {warning}
            </Badge>
          ))}
        </div>
      </div>

      {/* Themes */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-3">Themes</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Paranormal Activity",
            "Obsession",
            "Neighborly Relationships",
            "Suburban Life",
            "Fear of the Unknown",
          ].map((theme) => (
            <Badge key={theme} className="bg-info/15 text-info border-info/40 font-semibold px-3 py-1" variant="outline">
              {theme}
            </Badge>
          ))}
        </div>
      </div>

      {/* Educational Value */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-3">Educational Value</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The book offers insights into suburban social dynamics and the psychological effects of unexplained phenomena on individuals and communities.
        </p>
      </div>

      {/* Book Description */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-3">Description</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          For fans of Not Quite a Ghost and Ghost Squad, acclaimed middle grade author Ellen Oh of Spirit Hunters and an APALA Honoree delivers a new spooky novel about young hero Rory and the creepy house next door. Filled with scary spirits, mysterious noises, and malevolent forces, the house has tormented many souls, and Rory must do everything he can to prevent the new neighbors from becoming its next victims. We Need Diverse Books cofounder Ellen Oh delivers another heart-pounding story that you won't be able to put down. Home is where the sinister lives. Rory Parker knows not to step a foot in, on, or around the house next door. He's seen things creeping in the shadows, has had encounters with spirits, and lost a best friend to the house's malevolence. But when his new neighbors, Jack and his lovable family, move into the house next door, Rory makes it his duty to protect them at all costs. But the vicious forces lying within the house are plotting something evil, something that puts Jack's little sister in extreme danger. Soon, Rory understands he'll need the help of his new friend and some friendly ghosts in order to stand a chance at defeating whatever lurks within its walls for good. But what exactly lives in the house next door, and will Rory and Jack find out in time to save the day, or can its evil never be evicted?
        </p>
      </div>
    </div>
  );
};

export default ContentAnalysis;
