import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
import data from "./data/data.json";
import React, { useState } from "react";

function App() {
  const [heroData, setHeroData] = useState(data);
  const [visible, setVisible] = useState(false);
  const [modalInputs, setModalInputs] = useState({
    name: "",
    age: "",
    secretIdentity: "",
    power: "",
    id: "",
  });

  const handleCreate = (newHero) => {
    const copyHeroData = { ...heroData };
    copyHeroData.members.push(newHero);
    setHeroData(copyHeroData);
  };

  const handleDelete = (el) => {
    const copyHeroData = { ...heroData };
    copyHeroData.members.splice(el, 1);
    setHeroData(copyHeroData);
  };

const handleSave = (data, index) => {
  setVisible(false);
  const copyHeroData = { ...heroData };
  copyHeroData.members[index] = data
  setHeroData(copyHeroData)
}

  // const handleVisibility = (false) => {
  //     false ? 'style={{display: "block", opacity: "1"}}' : true
  // }

  const handleEdit = (name, age, secretIdentity, power, id) => {
    setVisible(true);
    setModalInputs({
      name: name,
      age: age,
      secretIdentity: secretIdentity,
      power: power,
      id: id,
      
    });
    console.log(name)
    console.log(age)
    console.log(id)
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <div className="jumbotron text-center">
      <Table
        squad={heroData.squadName}
        town={heroData.homeTown}
        base={heroData.secretBase}
      >
        <RowList
          delete={handleDelete}
          members={heroData.members}
          modal={handleEdit}
        />
      </Table>
      <CreateForm onSubmit={handleCreate} />
      <Modal visible={visible} invisible={hideModal} modalInputs={modalInputs} save={handleSave} />
    </div>
  );
}

export default App;
