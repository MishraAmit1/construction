import Image from "next/image";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
          Our Landmark Projects
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          We take pride in our portfolio of successfully completed infrastructure projects that connect communities and drive progress for the nation.
        </p>
        <div className="mt-4 mb-12 w-24 h-1 bg-accent mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group bg-card">
            <CardHeader className="p-0">
              <div className="relative h-56 w-full">
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3 font-semibold">{project.location}</Badge>
              <h3 className="font-headline text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3 h-[60px]">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
