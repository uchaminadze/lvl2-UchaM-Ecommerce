export function serializeProducts(data) {
  return data.map((el) => {
    return {
      id: el.id,
      title: el.title,
      price: el.price,
      desc: el.description,
      img: el.image,
      category: el.category,
    };
  });
}

export function serializeProducts2(data) {
  return {
    id: data.id,
    title: data.title,
    price: data.price,
    desc: data.description,
    img: data.image,
    category: data.category,
  };
}
