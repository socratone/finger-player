import React from 'react';
import Chant from './chant';

const Search = (props) => {
  const { chants, updateHomeChantLists, history } = props;

  const getChantsList = () => {
    if (chants === null)
      return (
        <section className="section-padding">검색 결과가 없습니다.</section>
      );
    if (chants.length === 0)
      return <section className="section-padding">_blank</section>;
    return chants.map((chant) => (
      <Chant
        chant={chant}
        updateHomeChantLists={updateHomeChantLists}
        key={chant.id}
        history={history}
      />
    ));
  };

  return (
    <main>
      <ul className="chant-ul">{getChantsList()}</ul>
    </main>
  );
};

export default Search;
