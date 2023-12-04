interface Content {
 content: string,
 width: String,
 height: String,
 clazz?: string
}

const Button: React.FC<Content> = ({width, height, content, clazz}) => {
    return (
        <button className={`flex justify-center items-center m-auto font-semibold text-white text-[18px] bg-[#D8B152] mdx:hover:bg-amber-500 mdx:active:bg-amber-700 ${clazz} ${width} ${height} mdx:transition-all mdx:duration-[0.6s]`}>
            {content}
        </button>
    )
}

export default Button;