import Row from "./Row";

const RowList = (props) => {

  return (
    <>
      {props.members.map((member, i) => (
        <Row
          key={i}
          name={member.name}
          age={member.age}
          secret={member.secretIdentity}
          power={member.power}
          delete={props.delete}
          edit={props.edit}
          idx={i}
        />
      ))}
    </>
  );
};

export default RowList;
