import Card from "../components/Card";
import { images } from "../assets";

const Section = () => {
  return (
    <div className="p-10">
      <h1>title</h1>
      <div className=" flex flex-wrap justify-center">
        <Card
          title="Polo"
          size="Beautiful Sunset"
          price="5$"
          color="blue"
          image={images.boss_blue}
        />
        <Card
          title="Polo"
          size="Beautiful Sunset"
          price="5$"
          color="blue"
          image={images.crocodile_blue}
        />
        <Card
          title="Polo"
          size="Beautiful Sunset"
          price="5$"
          color="blue"
          image={images.crocodile_round_green}
        />
        <Card
          title="Polo"
          size="Beautiful Sunset"
          price="5$"
          color="blue"
          image={images.crocs_cream}
        />
        <Card
          title="Polo"
          size="Beautiful Sunset"
          price="5$"
          color="blue"
          image={images.dd_green}
        />
      </div>
    </div>
  );
};

export default Section;
