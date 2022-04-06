const Row = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.secret}</td>
      <td>{props.power}</td>

      <td>
        <button onClick={props.edit} className="btn btn-light">Edit</button>
      </td>
      <td>
        <button onClick={()=>props.delete(props.idx)} className="btn btn-light">Delete</button>
      </td>
    </tr>
  );
};

export default Row;
