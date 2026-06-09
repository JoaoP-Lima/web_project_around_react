export default function EditAvatar() {
    return (
       <form className="popup__form" name="updateAvatarForm">
            <input
              type="url"
              className="popup__input popup__input_type-link"
              name="avatar"
              placeholder="Link de Imagem de Perfil"
              required
              id="avatar-input"
            />
            <span className="popup__input-error avatar-input-error"></span>
            <button type="submit" className="popup__button button">Salvar</button>
          </form>
    )
    
}