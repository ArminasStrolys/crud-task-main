const Row = (props) => {

  const handleEdit = () => {
    props.edit(props.name, props.age, props.secret, props.power, props.id)
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.secret}</td>
      <td>{props.power}</td>

      <td>
        <button onClick={handleEdit} className="btn btn-light">Edit</button>
      </td>
      <td>
        <button onClick={()=>props.delete(props.idx)} className="btn btn-light">Delete</button>
      </td>
    </tr>
  );
};

export default Row;
