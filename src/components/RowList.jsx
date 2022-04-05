import Row from "./Row";

const RowList = (props) => {
  return (
    <>
      <Row
        name={props.members.map((m) => m.name)}
        age={props.members.map((m) => m.age)}
        secret={props.members.map((m) => m.secretIdentity)}
        power={props.members.map((m) => m.power)}
      />
      {/* <Row
        data={props.members.map((m) => (
          <Row
            name={m.name}
            age={m.age}
            secret={m.secretIdentity}
            power={m.power}
          />
        ))}
      /> */}
    </>
  );
};

export default RowList;
