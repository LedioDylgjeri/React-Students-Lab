import Score from "../Score/Score";

const Student = (props) => {
  return ( 
    <>
      <h2>{props.student.name}</h2>
      <h4>{props.student.bio}</h4>
      < Score score={props.student.scores}/>
    </>
  );
}

export default Student;