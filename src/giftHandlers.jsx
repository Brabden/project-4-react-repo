

import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export async function handleUpdateGift(id, updatedData, setGifts) {
  const response = await axios.patch(API_URL + "/api/gifts/" + id, updatedData);

  setGifts(function (gifts) {
    return gifts.map(function (gift) {
      return gift.id === id ? response.data : gift;
    });
  });
}

export async function handleDeleteGift(id, setGifts) {
  await axios.delete(API_URL + "/api/gifts/" + id);

  setGifts(function (gifts) {
    return gifts.filter(function (gift) {
      return gift.id !== id;
    });
  });
}


