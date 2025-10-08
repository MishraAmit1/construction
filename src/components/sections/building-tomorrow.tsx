import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function BuildingTomorrow() {
  return (
    <section className="py-16 sm:py-24 bg-background" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
      backgroundSize: '20px 20px'
    }}>
      <div className="container text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight">
          Building Tomorrow, Together
        </h2>
        <div className="mt-4 mb-8 w-24 h-1 bg-accent mx-auto"></div>
        <p className="mt-6 text-lg text-foreground/80">
          With projects that span the nation, our reach and expertise are shaping the future of Indian infrastructure. At Veritas, we don’t just take on the world’s most challenging projects — we solve them.
        </p>
        <p className="mt-4 text-lg text-foreground/80">
          From engineers and project managers to skilled craft professionals, we seek colleagues with diverse perspectives who are ready to embrace challenges and push the boundaries of what's possible.
        </p>
        <div className="mt-12">
          <Link href="#" className="group inline-flex items-center gap-4 text-lg font-semibold text-primary hover:text-accent transition-colors">
            <div className="h-14 w-14 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent">
              <ArrowRight className="h-6 w-6" />
            </div>
            <span>Join the A&TTeam</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
