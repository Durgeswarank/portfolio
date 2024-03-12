import Law from "../assets/project.jpg";
import portfolio from "../assets/portfolio.webp";

export default function Projects() {
  return (
    <section  id = "projects"className="flex flex-col justify-center px-5 py-10 bg-primary">
      <div className="w-1/2">
        <div>
          <p className="w-1/2 flex justify-center text-bold text-4xl border-b-4 w-[170px] mt-7 mb-4">
            Projects
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center mt-8 px-5 gap-5">
          <div>
            <img className="h-[200px]" src={Law} />
            <div>
              <p className="mt-5 text-white">
                An law application by using Angular,
                <br></br> tw elements, Tw css, AwS
              </p>
            </div>
          </div>

          <div>
            <img className="h-[200px]" src={portfolio} />
            <div className="mt-5 text-white">
              <p>An portfolio website build by React.js </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
