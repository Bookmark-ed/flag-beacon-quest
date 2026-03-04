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
        
        <h2 className="text-xl font-bold text-foreground mb-4">Description</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          For fans of Not Quite a Ghost and Ghost Squad, acclaimed middle grade author Ellen Oh of Spirit Hunters and an APALA Honoree delivers a new spooky novel about young hero Rory and the creepy house next door. Filled with scary spirits, mysterious noises, and malevolent forces, the house has tormented many souls, and Rory must do everything he can to prevent the new neighbors from becoming its next victims. We Need Diverse Books cofounder Ellen Oh delivers another heart-pounding story that you won't be able to put down. Home is where the sinister lives. Rory Parker knows not to step a foot in, on, or around the house next door. He's seen things creeping in the shadows, has had encounters with spirits, and lost a best friend to the house's malevolence. But when his new neighbors, Jack and his lovable family, move into the house next door, Rory makes it his duty to protect them at all costs. But the vicious forces lying within the house are plotting something evil, something that puts Jack's little sister in extreme danger. Soon, Rory understands he'll need the help of his new friend and some friendly ghosts in order to stand a chance at defeating whatever lurks within its walls for good. But what exactly lives in the house next door, and will Rory and Jack find out in time to save the day, or can its evil never be evicted?
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
