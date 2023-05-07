import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Section = ({ title, isVisible, setIsVisible }) => {
  console.log("useContext", useContext(UserContext));
  return (
    <div className="border border-solid p-3 m-3">
      <h1 className="font-bold ">{title}</h1>
      <button
        className="cursor-pointer border p-1"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <p>
          Lorem ipsum dolor sit amet. Ad cupiditate commodi ab quis autem est
          suscipit eveniet. Qui commodi enim ut praesentium maiores quo dolores
          soluta sed aliquid quis sed delectus ullam et doloribus laborum a
          consequatur dolorem. Aut sapiente voluptatem ea enim animi hic porro
          maiores qui distinctio amet aut dolores nihil qui molestiae recusandae
          sed laudantium recusandae. Eum aliquid aspernatur ad nulla iusto et
          fugiat voluptatum qui internos incidunt quo ratione voluptatibus et
          quia voluptatem aut illo adipisci. A nihil perferendis cum quaerat
          internos est consequuntur excepturi est quas iusto sed rerum dolor eum
          voluptas repudiandae. Est sequi quia vel corrupti voluptas qui nihil
          galisum est ipsam sint ex rerum veniam eos repellendus consequatur.
          Eos perspiciatis ipsum qui corporis vero a iste odit non inventore
          ipsum.
        </p>
      )}
    </div>
  );
};
const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="font-bold p-3 m-3">Instamart</h1>
      <Section
        title="About"
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          visibleSection !== "about"
            ? setVisibleSection("about")
            : setVisibleSection("")
        }
      />
      <Section
        title="Team"
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          visibleSection !== "team"
            ? setVisibleSection("team")
            : setVisibleSection("")
        }
      />
      <Section
        title="Career"
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          visibleSection !== "career"
            ? setVisibleSection("career")
            : setVisibleSection("")
        }
      />
    </div>
  );
};
export default InstaMart;
