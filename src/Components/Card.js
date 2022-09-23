const BDCard = ({name, date}) => {
  return (
      <>
          <div className="box">
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


export {BDCard}