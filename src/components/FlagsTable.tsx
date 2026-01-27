import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";

interface Flag {
  id: string;
  organizationName: string;
  sourceLink: string;
  date: string;
  reasonsGiven: string;
  place: string;
}

const sampleFlags: Flag[] = [
  {
    id: "1",
    organizationName: "Moms for Liberty",
    sourceLink: "https://example.com/source1",
    date: "03/15/2024",
    reasonsGiven: "Contains mature themes unsuitable for middle school",
    place: "Florida / Brevard County Schools",
  },
  {
    id: "2",
    organizationName: "Citizens Defending Freedom",
    sourceLink: "https://example.com/source2",
    date: "01/22/2024",
    reasonsGiven: "Graphic violence and war imagery",
    place: "Texas / Keller ISD",
  },
  {
    id: "3",
    organizationName: "No Left Turn in Education",
    sourceLink: "https://example.com/source3",
    date: "11/08/2023",
    reasonsGiven: "Political bias concerns",
    place: "Virginia / Loudoun County",
  },
];

const FlagsTable = () => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-card-foreground">Flags</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold text-foreground">Name of Organization</TableHead>
            <TableHead className="font-semibold text-foreground">Link to Source</TableHead>
            <TableHead className="font-semibold text-foreground">Date</TableHead>
            <TableHead className="font-semibold text-foreground">Reasons Given</TableHead>
            <TableHead className="font-semibold text-foreground">Place (State/School)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleFlags.length > 0 ? (
            sampleFlags.map((flag) => (
              <TableRow key={flag.id} className="hover:bg-muted/30">
                <TableCell className="font-medium">{flag.organizationName}</TableCell>
                <TableCell>
                  <a
                    href={flag.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 inline-flex items-center gap-1"
                  >
                    View Source
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </TableCell>
                <TableCell>{flag.date}</TableCell>
                <TableCell className="max-w-xs">{flag.reasonsGiven}</TableCell>
                <TableCell>{flag.place}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                Oops! It looks like there are no results matching your search criteria.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default FlagsTable;
