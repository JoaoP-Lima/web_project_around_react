export default function NewCard() {
    return (
        <form className="popup__form" id="new-card-form" name="newPlaceForm">
            <input
              className="popup__input popup__input_type_place-name"
              name="name"
              placeholder="Título"
              required
              type="text"
              minLength="2"
              maxLength="30"
              id="place-name-input"
            />
            <span class="popup__input-error place-name-input-error"></span>
            <input
              className="popup__input popup__input_type-link"
              name="link"
              placeholder="Link de Imagem"
              required
              type="url"
              id="place-link-input"
            />
            <span className="popup__input-error place-link-input-error"></span>
            <button className="button popup__button" type="submit" disabled>
              Criar
            </button>
          </form>
    )
    
}