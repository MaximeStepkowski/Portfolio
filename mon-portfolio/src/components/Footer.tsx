export default function Footer() {
  return (
    <footer
      className="w-full py-6 mt-8 text-white flex flex-col items-center gap-2"
      style={{ backgroundColor: "rgb(10, 7, 0)" }}
    >
      <div className="flex flex-wrap justify-center gap-6 items-center">
        <a
          href="https://fr.linkedin.com/in/maxime-stepkowski-740451297"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <span className="h-5 w-px bg-[#F2DCB3] inline-block"></span>
        <a href="mailto:maxime.stepkowski@gmail.com" className="hover:underline">
          stepkowskimaxime@gmail.com
        </a>
        <span className="h-5 w-px bg-[#F2DCB3] inline-block"></span>
        <a
          href="https://github.com/MaximeStepkowski"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
