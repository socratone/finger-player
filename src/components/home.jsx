import React from "react";
import HomeChant from "./homeChant";

const Home = (props) => {
  const {
    homeChantLists,
    updateHomeChantLists,
    removeHomeLists,
    history,
  } = props;
  return (
    <main>
      <section className="section-padding">
        <ul className="chant-ul">
          <h3>입당성가</h3>
          {homeChantLists.intro.length > 0 ? (
            homeChantLists.intro.map((chant) => (
              <HomeChant
                chant={chant}
                updateHomeChantLists={updateHomeChantLists}
                homeChantListName="intro"
                history={history}
                key={chant.id}
              />
            ))
          ) : (
            <li>
              <p style={{ gridColumn: "span 3" }}>연주할 곡을 추가해 주세요.</p>
            </li>
          )}
        </ul>
        <ul className="chant-ul">
          <h3>봉헌성가</h3>
          {homeChantLists.offering.length > 0 ? (
            homeChantLists.offering.map((chant) => (
              <HomeChant
                chant={chant}
                updateHomeChantLists={updateHomeChantLists}
                homeChantListName="offering"
                history={history}
                key={chant.id}
              />
            ))
          ) : (
            <li>
              <p style={{ gridColumn: "span 3" }}>연주할 곡을 추가해 주세요.</p>
            </li>
          )}
        </ul>
        <ul className="chant-ul">
          <h3>성체성가</h3>
          {homeChantLists.eucharist.length > 0 ? (
            homeChantLists.eucharist.map((chant) => (
              <HomeChant
                chant={chant}
                updateHomeChantLists={updateHomeChantLists}
                homeChantListName="eucharist"
                history={history}
                key={chant.id}
              />
            ))
          ) : (
            <li>
              <p style={{ gridColumn: "span 3" }}>연주할 곡을 추가해 주세요.</p>
            </li>
          )}
        </ul>
        <ul className="chant-ul">
          <h3>파견성가</h3>
          {homeChantLists.dispatch.length > 0 ? (
            homeChantLists.dispatch.map((chant) => (
              <HomeChant
                chant={chant}
                updateHomeChantLists={updateHomeChantLists}
                homeChantListName="dispatch"
                history={history}
                key={chant.id}
              />
            ))
          ) : (
            <li>
              <p style={{ gridColumn: "span 3" }}>연주할 곡을 추가해 주세요.</p>
            </li>
          )}
        </ul>
        <ul className="chant-ul">
          <h3>기타</h3>
          {homeChantLists.etc.length > 0 ? (
            homeChantLists.etc.map((chant) => (
              <HomeChant
                chant={chant}
                updateHomeChantLists={updateHomeChantLists}
                homeChantListName="etc"
                history={history}
                key={chant.id}
              />
            ))
          ) : (
            <li>
              <p style={{ gridColumn: "span 3" }}>연주할 곡을 추가해 주세요.</p>
            </li>
          )}
        </ul>
        <button className="normal-button" onClick={removeHomeLists}>
          초기화
        </button>
      </section>
    </main>
  );
};

export default Home;
