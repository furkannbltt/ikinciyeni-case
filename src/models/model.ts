export interface CarModel {
  brand: string;
  model: string;
  modelYear: number;
  kilometer: number;
  gearType: string;
  fuelType: string;
  otherInfo: string;
  img: string;
  price: number;
  color: string;
}

export interface FilterMenu {
  filterName: string;
  filterKey: string;
  type: FilterType|any;
  options?: Array<string | number>;
}

export const mockFilterData = [
  {
    filterName: "Marka",
    filterKey: "brand",
    type: "checkbox",
    options: [
      "Audi A3",
      "BMW 3 Serisi",
      "Mercedes-Benz C Serisi",
      "Volkswagen Golf",
      "Ford Focus",
      "Renault Clio",
      "Peugeot 208",
      "Opel Corsa",
      "Toyota Corolla",
      "Honda Civic",
      "Hyundai i20",
      "Kia Rio",
    ],
  },
  {
    filterName: "Vites Tipi",
    filterKey: "gearType",
    type: "checkbox",
    options: ["Manual", "Otomatik"],
  },
  {
    filterName: "Yakıt Tipi",
    filterKey: "fuelType",
    type: "checkbox",
    options: ["Hybrid(Elektrik/Benzin)", "Benzin", "Dizel"],
  },

  {
    filterName: "Fiyat",
    filterKey: "price",
    type: "maxmin",
  },
  {
    filterName: "Model Yılı",
    filterKey: "modelYear",
    type: "maxmin",
  },
  {
    filterName: "Km",
    filterKey: "kilometer",
    type: "maxmin",
  },
  {
    filterName: "Renk",
    filterKey: "color",
    type: "checkbox",
    options: [
      "Siyah",
      "Beyaz",
      "Gri",
      "Mavi",
      "Kırmızı",
      "Yeşil",
      "Turuncu",
      "Sarı",
      "Mor",
      "Kahverengi",
      "Bordo",
      "Pembe",
    ],
  },
];

export enum FilterType {
  Checkbox = "checkbox",
  MaxMin = "maxmin",
}

export const mockData: CarModel[] = [
  {
    brand: "Audi A3",
    model: "1.6 TDI Sportback",
    modelYear: 2019,
    kilometer: 65000,
    gearType: "Otomatik",
    fuelType: "Dizel",
    otherInfo: "Temiz, bakımlı araç",
    img: "https://ik.imagekit.io/rentiva/images/volkswagen-arac-fotografi.jpg?tr=h-465,w-737",
    color: "Siyah",
    price: 150000,
  },
  {
    brand: "BMW 3 Serisi",
    model: "320d xDrive M Sport",
    modelYear: 2020,
    kilometer: 40000,
    gearType: "Otomatik",
    fuelType: "Dizel",
    otherInfo: "Full donanımlı, eksiksiz servis geçmişi",
    img: "https://ik.imagekit.io/rentiva/images/renault-symbol-arac-fotografi.jpg?tr=h-465,w-737",
    color: "Beyaz",
    price: 200000,
  },
  {
    brand: "Mercedes-Benz C Serisi",
    model: "C180 AMG",
    modelYear: 2018,
    kilometer: 80000,
    gearType: "Otomatik",
    fuelType: "Benzin",
    otherInfo: "Yüksek donanımlı, sorunsuz kullanılmış",
    img: "https://ik.imagekit.io/rentiva/images/arac-audi.jpg?tr=h-465,w-737",
    color: "Gri",
    price: 180000,
  },
  {
    brand: "Volkswagen Golf",
    model: "1.6 TDI Highline",
    modelYear: 2017,
    kilometer: 90000,
    gearType: "Manual",
    fuelType: "Dizel",
    otherInfo: "Orta segment, düşük yakıt tüketimi",
    img: "https://ik.imagekit.io/rentiva/images/volkswagen-arac-fotografi.jpg?tr=h-465,w-737",
    color: "Mavi",
    price: 120000,
  },
  {
    brand: "Ford Focus",
    model: "1.5 TDCi Titanium",
    modelYear: 2018,
    kilometer: 75000,
    gearType: "Manual",
    fuelType: "Dizel",
    otherInfo: "Spor ve konforlu sürüş",
    img: "https://ik.imagekit.io/rentiva/images/arac-ford.jpg?tr=h-465,w-737",
    color: "Kırmızı",
    price: 135000,
  },
  {
    brand: "Renault Clio",
    model: "Joy 0.9 TCe",
    modelYear: 2019,
    kilometer: 60000,
    gearType: "Manual",
    fuelType: "Benzin",
    otherInfo: "Şehir içi kullanım için ideal",
    img: "https://ik.imagekit.io/rentiva/images/arac-audi.jpg?tr=h-465,w-737",
    color: "Siyah",
    price: 125000,
  },
  {
    brand: "Peugeot 208",
    model: "Active 1.6 BlueHDi",
    modelYear: 2017,
    kilometer: 85000,
    gearType: "Manual",
    fuelType: "Dizel",
    otherInfo: "Ekonomik ve şık tasarım",
    img: "https://ik.imagekit.io/rentiva/images/volkswagen-arac-fotografi.jpg?tr=h-465,w-737",
    color: "Beyaz",
    price: 110000,
  },
  {
    brand: "Opel Corsa",
    model: "1.4 Enjoy",
    modelYear: 2016,
    kilometer: 95000,
    gearType: "Manual",
    fuelType: "Benzin",
    otherInfo: "Dayanıklı ve kullanışlı",
    img: "https://ik.imagekit.io/rentiva/images/arac-ford.jpg?tr=h-465,w-737",
    color: "Gri",
    price: 95000,
  },
  {
    brand: "Toyota Corolla",
    model: "1.6 Comfort",
    modelYear: 2018,
    kilometer: 70000,
    gearType: "Manual",
    fuelType: "Benzin",
    otherInfo: "Uzun ömürlü ve düşük bakım maliyeti",
    img: "https://ik.imagekit.io/rentiva/images/volkswagen-arac-fotografi.jpg?tr=h-465,w-737",
    color: "Mavi",
    price: 130000,
  },
  {
    brand: "Honda Civic",
    model: "1.6 i-DTEC Executive",
    modelYear: 2019,
    kilometer: 55000,
    gearType: "Manual",
    fuelType: "Dizel",
    otherInfo: "Yüksek güvenlik ve konfor",
    img: "https://ik.imagekit.io/rentiva/images/arac-ford.jpg?tr=h-465,w-737",
    color: "Yeşil",
    price: 850000,
  },
  {
    brand: "Hyundai i20",
    model: "1.4 MPI Elite",
    modelYear: 2017,
    kilometer: 80000,
    gearType: "Manual",
    fuelType: "Benzin",
    otherInfo: "Geniş iç mekan ve düşük yakıt tüketimi",
    img: "https://ik.imagekit.io/rentiva/images/volkswagen-arac-fotografi.jpg?tr=h-465,w-737",
    color: "Sarı",
    price: 120000,
  },
  {
    brand: "Kia Rio",
    model: "1.4 CRDi Cool",
    modelYear: 2016,
    kilometer: 90000,
    gearType: "Manual",
    fuelType: "Dizel",
    otherInfo: "Konforlu sürüş ve düşük bakım maliyeti",
    img: "https://ik.imagekit.io/rentiva/images/renault-symbol-arac-fotografi.jpg?tr=h-465,w-737",
    color: "Turuncu",
    price: 850000,
  },
];
