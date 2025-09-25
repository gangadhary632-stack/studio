import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Alice", score: 9850 },
  { rank: 2, name: "Bob", score: 9500 },
  { rank: 3, name: "Charlie", score: 9200 },
  { rank: 4, name: "Diana", score: 8800 },
  { rank: 5, name: "Ethan", score: 8500 },
  { rank: 6, name: "Fiona", score: 8150 },
  { rank: 7, name: "George", score: 7900 },
  { rank: 8, name: "Hannah", score: 7650 },
  { rank: 9, name: "Ian", score: 7300 },
  { rank: 10, name: "Jane", score: 7050 },
];

export default function LeaderboardPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          <CardTitle>Leaderboard</CardTitle>
        </div>
        <CardDescription>See who's at the top of their game.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((player) => (
              <TableRow key={player.rank} className="font-medium">
                <TableCell>
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-secondary-foreground font-bold">
                    {player.rank}
                  </span>
                </TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell className="text-right">{player.score.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
