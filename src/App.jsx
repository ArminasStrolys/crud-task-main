import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
import data from './data/data.json'
import React, { useState } from 'react';

function App() {

const [heroData, setHeroData] = useState(data)

// setHeroData(heroData.members[0].name = 'Mat')
console.log(heroData.members[0].name)

  return (
    <div className="jumbotron text-center">
      <Table squad={heroData.squadName} town={heroData.homeTown} base={heroData.secretBase}>
        <RowList members={heroData.members} />
      </Table>
      <CreateForm />
      <Modal />
    </div>
  );
}

export default App;
