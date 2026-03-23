function AboutPage() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl sm:text-6xl font-bold leading-none tracking-wide'>
        We love{" "}
        <span className='bg-primary px-4 py-2 rounded-lg tracking-widest text-white'>
          store
        </span>
      </h1>

      <p className='mt-4 sm:mt-8 text-base sm:text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
        We create furniture inspired by Scandinavian and modern design
        principles—where simplicity meets functionality. Our pieces focus on
        clean lines, natural textures, and lasting quality. Every item is
        crafted to bring balance, warmth, and purpose into your home, helping
        you build a space that feels both minimal and inviting.
      </p>
    </section>
  );
}

export default AboutPage;
