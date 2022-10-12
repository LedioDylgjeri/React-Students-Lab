const Score = (props) => {
  return ( 
    <> 
      <h4>Scores:</h4> 
      <h4>{props.score.date}</h4>  
      <h4>{props.score.score}</h4>  
    </>
  );
}

export default Score;