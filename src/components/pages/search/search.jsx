import React from 'react';

import ChantList from '../common/chantList';

const Search = (props) => {
  const { chants, updateHomeChantLists, history } = props;

  const getChantsList = () => {
    if (chants === null)
      return (
        <section className="section-padding">검색 결과가 없습니다.</section>
      );
    if (chants.length === 0)
      return <section className="section-padding">성가를 검색하세요.</section>;
    return chants.map((chant) => (
      <ChantList
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
