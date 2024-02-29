import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className=" w-full h-full pt-[6rem]">
      <div className=" max-w-[900px] mx-auto p-6">
        <h1 className=" text-4xl font-bold text-blue-900 mb-6">
          Contactez nous !
        </h1>
        <p>
          Contactez-nous dès maintenant pour des solutions électriques fiables
          et professionnelles. Remplissez le formulaire ci-dessous pour obtenir
          nos services
        </p>
      </div>
      <form className=" max-w-[900px] px-6 mx-auto pb-6">
        <div className=" w-full gap-4 mb-4 grid md:grid-cols-2 ">
          <input
            type="text"
            className=" w-full h-[60px] border-2 border-blue-900 focus:outline-none px-6"
            placeholder="votre nom"
          />
          <input
            type="text"
            className=" w-full h-[60px] border-2 border-blue-900 focus:outline-none px-6"
            placeholder="adresse e-mail"
          />
          <input
            type="text"
            className=" w-full h-[60px] border-2 border-blue-900 focus:outline-none px-6"
            placeholder=" sujet du message"
          />
          <input
            type="text"
            className=" w-full h-[60px] border-2 border-blue-900 focus:outline-none px-6"
            placeholder="numero de telephone"
          />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className=" resize-none border-blue-900 border-2 w-full focus:outline-none text-l p-6"
          placeholder="votre message..."
        ></textarea>
        <button className=" font-bold text-white py-4 rounded-lg bg-blue-900 mt-4 w-[150px] mx-auto">
          Envoyer
        </button>
      </form>
      <div className="w-full flex gap-4 items-center justify-center pb-6">
        <a
          href="/"
          className="h-[3rem] w-[3rem] rounded-[1.5rem] border border-blue-900 text-blue-900 flex items-center justify-center"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="/"
          className="h-[3rem] w-[3rem] rounded-[1.5rem] border border-blue-900 text-blue-900 flex items-center justify-center"
        >
          <FaLinkedin />
        </a>
        <a
          href="/"
          className="h-[3rem] w-[3rem] rounded-[1.5rem] border border-blue-900 text-blue-900 flex items-center justify-center"
        >
          <FaFacebookF />
        </a>
        <a
          href="/"
          className="h-[3rem] w-[3rem] rounded-[1.5rem] border border-blue-900 text-blue-900 flex items-center justify-center text-[1.5rem]"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default Contact
