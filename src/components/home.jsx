import React from "react";
import HomeChant from "./homeChant";

const Home = (props) => {
  const { homeChantLists, updateHomeChantLists, history } = props;
  return (
    <main>
      <section className="section-padding">
        <ul className="chant-ul">
          <p>입당성가</p>
          {homeChantLists.intro.map((chant) => (
            <HomeChant
              chant={chant}
              updateHomeChantLists={updateHomeChantLists}
              homeChantListName="intro"
              history={history}
              key={chant.id}
            />
          ))}
        </ul>
        <ul>
          <p>봉헌성가</p>
          {homeChantLists.offering.map((chant) => (
            <HomeChant
              chant={chant}
              updateHomeChantLists={updateHomeChantLists}
              homeChantListName="offering"
              history={history}
              key={chant.id}
            />
          ))}
        </ul>
        <ul>
          <p>성체성가</p>
          {homeChantLists.eucharist.map((chant) => (
            <HomeChant
              chant={chant}
              updateHomeChantLists={updateHomeChantLists}
              homeChantListName="eucharist"
              history={history}
              key={chant.id}
            />
          ))}
        </ul>
        <ul>
          <p>파견성가</p>
          {homeChantLists.dispatch.map((chant) => (
            <HomeChant
              chant={chant}
              updateHomeChantLists={updateHomeChantLists}
              homeChantListName="dispatch"
              history={history}
              key={chant.id}
            />
          ))}
        </ul>
        <ul>
          <p>기타</p>
          {homeChantLists.etc.map((chant) => (
            <HomeChant
              chant={chant}
              updateHomeChantLists={updateHomeChantLists}
              homeChantListName="etc"
              history={history}
              key={chant.id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
