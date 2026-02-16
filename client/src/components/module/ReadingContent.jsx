import parse, { domToReact } from "html-react-parser";
import { Button } from "@/components/shared/ui/Button";
import GradientIcon from "@/components/shared/ui/GradientIcon";
import { WarningCircle } from "@phosphor-icons/react";

const ReadingContent = ({ step }) => {
  const options = {
    replace: (node) => {
      // Example: Replace <button class="ui-btn">Text</button> with <Button>Text</Button>
      if (
        node.type === "tag" &&
        node.attribs &&
        node.attribs.class &&
        node.attribs.class.includes("ui-btn")
      ) {
        return (
          <Button variant="default" className="my-2">
            {domToReact(node.children, options)}
          </Button>
        );
      }

      // Replace <span class="gradient-icon-warning"></span> with <GradientIcon icon={WarningCircle} variant="orange" size={32} />
      if (
        node.type === "tag" &&
        node.name === "span" &&
        node.attribs &&
        node.attribs.class &&
        node.attribs.class.includes("gradient-icon-warning")
      ) {
        return (
          <GradientIcon
            icon={WarningCircle}
            variant="orange"
            size={32}
            className="shrink-0" // Prevent icon from shrinking
          />
        );
      }
    },
  };

  return (
    <div className="prose max-w-none text-left text-Grayscale-900 font-sans">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-heading text-h3 text-Primary-600 mb-2">
          {step.title}
        </h1>
      </div>

      {/* Dynamic Content */}
      {step.content ? (
        <div className="reading-content-body">
          {parse(step.content, options)}
        </div>
      ) : (
        <p className="text-Grayscale-500 italic">
          No reading content available.
        </p>
      )}
    </div>
  );
};

export default ReadingContent;
