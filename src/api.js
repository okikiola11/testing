import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/'
});

// create a new deck and shuffle
const createNewDeckPlayerA = async () => {
  const { data } = await api.get(`new/shuffle`, {
    params: {
      deck_count: 1
    }
  });

  const { deck_id: deckId } = data;

  console.log(data);

  // draw a card from the deck
  const { data: cardResponse } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 1
    }
  });

  return {...cardResponse.cards[0], deckId }
}

const createNewDeckPlayerB = async () => { //API Call for player 2
  const { data: playerCardResponse } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 1
    }
  });

  return {...playerCardResponse.cards[0], deckId }
}

export { createNewDeckPlayerA }

