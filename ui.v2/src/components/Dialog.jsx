export const Dialog = ({id, title, desc, action}) => {
    return (
        <div className="nsw-dialog js-dialog" id={id} role="dialog" aria-labelledby="danger-title">
            <div className="nsw-dialog__wrapper">
                <div className="nsw-dialog__container">
                    <div className="nsw-dialog__top">
                        <div className="nsw-dialog__title">
                            <h2 id="danger-title">{title}</h2>
                        </div>
                    </div>
                    <div className="nsw-dialog__content">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="nsw-dialog__bottom">
                    <button className="nsw-button nsw-button--dark nsw-button--danger js-close-dialog" onClick={action}>Delete</button>
                    <button className="nsw-button nsw-button--dark-outline-solid js-close-dialog">Cancel</button>
                </div>
            </div>
        </div>
    )
}