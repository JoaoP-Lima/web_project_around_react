export default function RemoveCard (props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onDeleteCard();
        props.onClosePopup();


    }
    return (
     <form class="popup__form" name="deleteCardForm" onSubmit={handleSubmit}>
            <button type="submit" class="button popup__button">Sim</button>
          </form>
    )
}