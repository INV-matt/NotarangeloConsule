const BDCard = ({name, date, small=false}) => {
  return (
      <>
          <div className="box" style={small ? {height: '18vh', margin: 10} : {margin: 25}}>
              <p className="b_name">
                  {name}
              </p>
              <p className="b_date">
                  {date}
              </p>
          </div>
      </>
  )
}

const QCard = ({quote, author, small=false}) => {
    return(<>
        {!small && (
            <div className="q_card">
                <p className="q_card_text">
                    {quote}
                </p>
                <p className="author">
                    {author}
                </p>
                <p className="sign">
                    Michele Ferdinando Notarangelo,<br />candidato rappresentante di classe.
                </p>
            </div>
        )}
        {small && (
            <div className="sq_card">
                <p className="sq_card_text">
                    {quote}
                </p>
                <p className="author">
                    {author}
                </p>
                <p className="sign">
                    Michele Notarangelo
                </p>
            </div>
        )}
        </>
    )
}


export {BDCard, QCard}