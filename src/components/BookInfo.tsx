import { Badge } from "@/components/ui/badge";

interface BookInfoProps {
  title: string;
  author: string;
  coverUrl: string;
}

const BookInfo = ({ title, author, coverUrl }: BookInfoProps) => {
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
        
        <h2 className="text-xl font-bold text-foreground mb-4">Content Analysis</h2>
        <p className="text-muted-foreground mb-6">
          This section provides an overview of the content analysis for this title, including themes, language, and subject matter considerations.
        </p>

        <h2 className="text-xl font-bold text-foreground mb-4">Awards and Recognition</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            California Young Reader Medal
          </Badge>
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            Georgia Peach Book Award
          </Badge>
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            Golden Duck Award
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
