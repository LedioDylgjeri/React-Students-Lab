import Score from "../Score/Score";

const Student = (props) => { 
  return ( 
    <>
      <h2>{props.student.name}</h2>
      <h2>{props.student.bio}</h2>
      <h3>{props.student.scores.map(score =>
      <Score score={score} /> )}
      </h3>
    </>
  );
}

export default Student;