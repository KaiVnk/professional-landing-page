export default function Form() {
    return (
        <>
            <form action="" className="">
                <div className="flex flex-col justify-center items-start my-[20px] max-w-[700px] mx-auto">
                  <label htmlFor="prénom">Nom et prénom <span className="text-red">*</span></label>
                  <input type="text" name="prénom" id="prénom" placeholder="Nom et prénom" required className="w-full px-2 py-3 border-[1px] border-black" />
                </div>
                <div className="flex flex-col justify-center items-start my-[20px] max-w-[700px] mx-auto">
                  <label htmlFor="societé">Nom de la societé</label>
                  <input type="text" name="societé" id="societé" placeholder="Nom de la societé" className="w-full px-2 py-3 border-[1px] border-black" />
                </div>
                <div className="flex flex-col justify-center items-start my-[20px] max-w-[700px] mx-auto">
                  <label htmlFor="email">E-mail <span className="text-red">*</span></label>
                  <input type="email" name="email" id="email" placeholder="E-mail" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" className="w-full px-2 py-3 border-[1px] border-black" />
                </div>
                <div className="flex flex-col justify-center items-start my-[20px] max-w-[700px] mx-auto">
                  <label htmlFor="message">Message <span className="text-red">*</span></label>
                  <textarea name="message" id="message" placeholder="Message" required className="w-full px-2 py-3 h-[150px] resize-none border-[1px] border-black"></textarea>
                </div>
                <div className="flex justify-center items-center w-full my-[20px] max-w-[700px] mx-auto">
                  <input type="submit" value="Envoye" className="py-3 px-9 w-full rounded-full border-[1px] border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer" />
                </div>
            </form>
        </>
    )
}