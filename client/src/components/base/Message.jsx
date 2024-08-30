export default function Message() {
    return (
        <>
            <div className='px-4 flex-1 overflow-auto'>

                <div className='chat chat-end'>
                    <div className='chat-image avatar'>
                        <div className='w-10 rounded-full'>
                            <img
                                src="https://robohash.org/afasfasf"
                                alt="chat avatar"
                            />
                        </div>
                    </div>

                    <div className="chat-bubble text-gray-200 bg-blue-500">You were the Chosen One!</div>
                    <div className="chat-footer text-xs flex gap-1 items-center opacity-100 text-gray-200">Seen at 12:46</div>

                </div>

            </div>
        </>
    )
};