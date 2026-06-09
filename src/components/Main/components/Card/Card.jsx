import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";
import RemoveCard from "../Popup/components/RemoveCard/RemoveCard";
export default function Card(props) {
  const { name, link, isLiked } = props.card;

  const imagePopup = {
    title: null,
    children: <ImagePopup card={props.card} />,
  };

  const removeCardPopup = {
    title: "Tem certeza?",
    children: <RemoveCard />,
  }
  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={`Imagem de ${name}`}
        onClick={() => props.onClick(imagePopup)}
      />

      <button
        aria-label="Excluir cartão"
        className="card__delete-button"
        type="button"
        onClick={() => props.onClick(removeCardPopup) }
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botão de curtir"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}
