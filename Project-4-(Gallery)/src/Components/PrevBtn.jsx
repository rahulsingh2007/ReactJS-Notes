const PrevBtn = (props) => {
    return (
        <div>
            <button
                style={{ opacity: props.index === 1 ? 0.5 : 1 }}
                className="bg-amber-500 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
                disabled={props.index === 1 || props.loading}
                onClick={() => {
                    if (props.index > 1) {
                        props.setIndex(props.index - 1)
                        props.setUserData([])
                    }
                }}>
                Prev
            </button>
        </div>
    )
}

export default PrevBtn
