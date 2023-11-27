import qr from '../assets/image-qr-code.png'

function Card() {
  return (
    <div className="flex h-screen justify-center items-center border font-outfit">
    <div className="lg:w-10/12 lg:h-5/6 w-full h-full mx-auto bg-lightGray shadow-lg flex justify-center items-center">
      <div className="bg-white w-3/5 sm:w-3/12 h-fit rounded-xl p-3">
        <img className="rounded-xl mb-5 mx-auto" src={qr} alt="" />
        <h1 className="font-bold text-center my-2 text-darkBlue">Improve your front-end skills by building projects</h1>
        <p className="text-center text-sm text-grayishBlue mb-3">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  </div>
  )
}

export default Card
