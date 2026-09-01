export function About() {
  return (
    <section id="about" className="relative border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
          About
        </span>
        <h2 className="font-heading text-2xl font-semibold leading-snug md:text-[32px]">
          Results-oriented engineer with a track record of <span className="grad-text">modernizing legacy systems</span>{' '}
          and shipping enterprise-scale software in regulated, high-volume domains.
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Over 5 years designing, building, and deploying microservices-based applications — modernizing legacy
          architectures, integrating event-driven messaging (IBM MQ, Kafka), and automating CI/CD pipelines on AWS.
        </p>
        <p className="max-w-xl text-sm text-muted-foreground/70">
          B.Sc. (Hons) in Software Engineering, University of Kelaniya — First Class Honours, 3.74/4.00 GPA.
          Final-year research on an ML-based Experience-Based Developer Recommendation System.
        </p>
      </div>
    </section>
  );
}
