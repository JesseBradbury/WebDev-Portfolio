import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function ProjectCard() {
    return (
        <Card className="w-[350px] border-4 rounded-md ">
            <CardHeader>
                <CardTitle>Project 1 -</CardTitle>
                <CardDescription>Language</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Details about the project and what its doing. </p>
            </CardContent>
            <CardFooter>
                <p>Links where you can view the project</p>
            </CardFooter>
        </Card>

    )
};

export default ProjectCard;