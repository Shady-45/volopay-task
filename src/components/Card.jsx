import React from 'react'
import '../index.css'

const Card = ({carditem}) => {
    
  return (
    <section>{
        carditem.map((item)=>{
            const {name,budget_name,owner_id,card_type,limit,status} = item
            return(
                <article key={owner_id}>
                    <h3>{name}</h3>
                    <p>{budget_name}</p>
                    <div className="details">
                        <div className="amt">
                        <p>{`Amount`}</p>
                    <p>`${item.spent.value}`</p>
                        </div>
                <div className="amt">
                <p>{`Frequency`}</p>
                <p>{` ${item.available_to_spend.value}`}</p>
                </div>
                    <div className="amt">
                    <p>{`Expiry`}</p>
                    <p>{`${item.expiry}`}</p>
                    </div>
                    
                    </div>
                    <div className="line-bar">
                        <span className="red"></span>
                        <span className="green"></span>
                    </div>
                    <div className="amt-spent">
                    <p>{`Spent: ${item.spent.value} SSD`}</p>
                    <p>{`Balance: ${item.available_to_spend.value - item.spent.value} SSD `  }</p>
                    </div>
                  
                </article>
            )
})
        
        }</section>
  )
}

export default Card