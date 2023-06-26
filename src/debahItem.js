import { useState } from "react";

function DebahItem({ name, phone, wilaya }) {
  const wilayas = [
    { name: "أدرار", id: 1 },
    { name: "الشلف", id: 2 },
    { name: "الأغواظ", id: 3 },
    { name: "أم البواقي", id: 4 },
    { name: "باتنة", id: 5 },
    { name: "بجاية", id: 6 },
    { name: "بسكرة", id: 7 },
    { name: "بشار", id: 8 },
    { name: "البليدة", id: 9 },
    { name: "البويرة", id: 10 },
    { name: "تمنراست", id: 11 },
    { name: "تبسة", id: 12 },
    { name: "تلمسان", id: 13 },
    { name: "تيارت", id: 14 },
    { name: "تيزي وزو", id: 15 },
    { name: "الجزائر", id: 16 },
    { name: "الجلفة", id: 17 },
    { name: "جيجل", id: 18 },
    { name: "سطيف", id: 19 },
    { name: "سعيدة", id: 20 },
    { name: "سكيكدة", id: 21 },
    { name: "سيدي بلعباس", id: 22 },
    { name: "عنابة", id: 23 },
    { name: "قالمة", id: 24 },
    { name: "قسنطينة", id: 25 },
    { name: "المدية", id: 26 },
    { name: "مستغانم", id: 27 },
    { name: "المسيلة", id: 28 },
    { name: "معسكر", id: 29 },
    { name: "ورقلة", id: 30 },
    { name: "وهران", id: 31 },
    { name: "البيض", id: 32 },
    { name: "إليزي", id: 33 },
    { name: "برج بوعريريج", id: 34 },
    { name: "بومرداس", id: 35 },
    { name: "الطارف", id: 36 },
    { name: "تندوف", id: 37 },

    { name: "تيسمسيلت", id: 38 },
    { name: "الوادي", id: 39 },
    { name: "خنشلة", id: 40 },
    { name: "سوق أهراس", id: 41 },
    { name: "تيبازة", id: 42 },
    { name: "ميلة", id: 43 },
    { name: "عين الدفلى", id: 44 },
    { name: "النعامة", id: 45 },
    { name: "عين تموشنت", id: 46 },
    { name: "غرداية", id: 47 },
    { name: "غليزان", id: 48 },
    { name: "المغير", id: 49 },
    { name: "المنيعة", id: 50 },
    { name: "أولاد جلال", id: 51 },
    { name: "برج باجي مخطار", id: 52 },
    { name: "بني عباس", id: 53 },
    { name: "تيميمون", id: 54 },
    { name: "توقرت", id: 55 },
    { name: "جانت", id: 56 },
    { name: "عين صالح ", id: 57 },
    { name: "عين  غزام", id: 58 },
  ];
  const [isNumberShown, setIsNumberShown] = useState(false);

  return (
    <div className="border-[2px] rounded-full mb-3 z-10 bg-white-text w-[80vw] max-w-lg grid grid-cols-2 py-3 items-center px-5 text-right ">
      <div className="p-0 text-center">
        {isNumberShown ? (
          <div className="bg-dark-green text-white-text z-[1000] px-4 py-2 rounded-full">
            {" "}
            {phone}{" "}
          </div>
        ) : (
          <div
            className="bg-dark-green hover:bg-light-green text-white-text z-[1000] px-4 py-2 rounded-full"
            onClick={() => setIsNumberShown(true)}
          >
            إظهار رقم الهاتف
          </div>
        )}
      </div>
      <div className="">
        {name}، {wilayas[wilaya].name}
      </div>{" "}
    </div>
  );
}

export default DebahItem;
