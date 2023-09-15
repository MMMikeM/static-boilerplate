import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  type AccordionProps,
} from "./base/Accordion";

const AccordionDemo = (props: AccordionProps) => {
  const items = ["React", "Solid", "Vue"];
  return (
    <Accordion defaultValue={["React"]} multiple {...props}>
      {items.map((item, id) => (
        <AccordionItem key={id} value={item}>
          {({ isOpen }) => (
            <>
              <AccordionTrigger>{item}</AccordionTrigger>
              <AccordionContent>
                {isOpen ? "I'm open" : "I'm closed"}
                <div>
                  Pudding donut gummies chupa chups oat cake marzipan biscuit
                  tart. Dessert macaroon ice cream bonbon jelly. Jelly topping
                  tiramisu halvah lollipop.
                </div>
              </AccordionContent>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionDemo;
