import QRCard from "./components/qrCard";

const CARD_INFO = {
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  qrCode: "/images/image-qr-code.png",
};

function App() {
  return (
    <main className="min-h-screen size-full flex justify-center items-center bg-lightGray font-outfit">
      <QRCard cardInfo={CARD_INFO} />
    </main>
  );
}

export default App;
