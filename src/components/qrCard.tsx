import { FC } from "react";

interface CardProps {
  cardInfo: {
    qrCode: string;
    title: string;
    description: string;
  };
}

const QRCard: FC<CardProps> = ({ cardInfo }) => {
  return (
    <div className="bg-white rounded-xl p-4 w-11/12 h-5/6 flex flex-col items-center max-h-card max-w-card gap-4">
      <img src={cardInfo.qrCode} alt="QR code" className="rounded-xl" />
      <h1 className="text-center text-darkBlue font-extrabold normal-case text-title">
        {cardInfo.title}
      </h1>
      <p className="normal-case text-grayishBlue text-center text-description px-3 mb-4">
        {cardInfo.description}
      </p>
    </div>
  );
};

export default QRCard;
