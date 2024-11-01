import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { categories, doctors } from "@/lib/data"
import { Button } from "./ui/button"
import Link from "next/link"

export default function DoctorChips({isHome}) {
   
    const filtered = isHome ? doctors.slice(0,6) : doctors
    return (
        <div className="mx-10">

        <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Doctors You Need</h1>

        {isHome ? (
          <Link href={"/doctors"}>
            <Button>See All</Button>
          </Link>
        ) : (
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

<div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">
{
    filtered.map((data)=>(    
            <Card key={data.name}>
            <CardHeader className={"flex flex-row  "}>
              <Avatar className="self-center h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DAS</AvatarFallback>
              </Avatar>
              <div className="pl-3">
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.category}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter>
              <Link href={`/doctors/${data.id}`}>
              <Button>See Detail</Button>
              </Link>
            </CardFooter>
        </Card>
    ))
}
</div>

        </div>

    )
}