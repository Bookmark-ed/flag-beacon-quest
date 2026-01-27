import { Badge } from "@/components/ui/badge";

interface BookInfoProps {
  title: string;
  author: string;
  coverUrl: string;
  challengeCount: number;
  banCount: number;
}

const BookInfo = ({ title, author, coverUrl, challengeCount, banCount }: BookInfoProps) => {
  return (
    <div className="flex gap-8 mb-8">
      <div className="w-40 h-56 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
        <img
          src={coverUrl}
          alt={`${title} cover`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-2 mb-3">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            School Library
          </Badge>
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            Classroom Library (1)
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground text-lg mb-6">{author}</p>
        
        <hr className="border-border mb-6" />
        
        <h2 className="text-xl font-bold text-foreground mb-4">Challenges and Bans</h2>
        <div className="flex gap-6">
          <div className="flex-1 border border-border rounded-lg p-6 text-center">
            <div className="text-5xl font-bold text-foreground mb-1">{challengeCount}</div>
            <div className="text-sm text-muted-foreground">Times</div>
            <div className="text-primary font-medium">Challenges</div>
          </div>
          <div className="flex-1 border border-border rounded-lg p-6 text-center">
            <div className="text-5xl font-bold text-foreground mb-1">{banCount}</div>
            <div className="text-sm text-muted-foreground">Times</div>
            <div className="text-primary font-medium">Bans</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
