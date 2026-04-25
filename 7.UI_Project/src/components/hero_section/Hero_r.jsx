import Card from "./card";

const Hero_r = (props) => {
  return (
    <div className=" w-9/12 rounded-4xl overflow-hidden">
      
      <div className="flex gap-6 w-max animate-scroll">
        
        {/* original cards */}
        {props.data.map((elem) => (
          <Card
            key={elem.id}
            img={elem.image}
            index={elem.id}
            feedback={elem.feedback}
            color={elem.color}
          />
        ))}

        {/* duplicate cards for smooth infinite scroll */}
        {props.data.map((elem) => (
          <Card
            key={"dup-" + elem.id}
            img={elem.image}
            index={elem.id}
            feedback={elem.feedback}
            color={elem.color}
          />
        ))}

      </div>
    </div>
  );
};

export default Hero_r;