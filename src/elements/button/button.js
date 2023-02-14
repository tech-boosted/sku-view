function Button(type, button_text, bg_color, text_color) {
    return (
        <button
            type={type}
        >
            {button_text}
        </button>
    );
}

export default Button;