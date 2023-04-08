import {Component} from 'react'
import './index.css'

const cardsList = [
  {
    id: 1,
    cadName: 'DIAMOND',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/SuitDiamonds.svg/1200px-SuitDiamonds.svg.png',
  },
  {
    id: 2,
    cadName: 'HEART',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/SuitHearts.svg/800px-SuitHearts.svg.png',
  },
  {
    id: 3,
    cadName: 'SPADE',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/SuitSpades.svg/800px-SuitSpades.svg.png',
  },
  {
    id: 4,
    cadName: 'CLUB',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/1200px-SuitClubs.svg.png',
  },
]

const initialCardsList = cardsList.slice(0, cardsList.length - 1)

class MagicCards extends Component {
  state = {
    shuffledCards: initialCardsList,
  }

  shuffleCards = () => {
    const updatedCardsList = cardsList.sort(() => Math.random() - 0.5)

    const shuffledCards = updatedCardsList.slice(0, 3)
    this.setState({shuffledCards})
  }

  render() {
    const {shuffledCards} = this.state

    return (
      <div className="magic-cards-bg-container">
        <ul className="cards-container">
          {shuffledCards.map(eachCard => (
            <li key={eachCard.id} className="card">
              <img
                className="card-image"
                src={eachCard.imageUrl}
                alt={eachCard.cardName}
              />
            </li>
          ))}
        </ul>
        <button
          className="shuffle-button"
          type="button"
          onClick={this.shuffleCards}
        >
          Suffle
        </button>
      </div>
    )
  }
}

export default MagicCards
