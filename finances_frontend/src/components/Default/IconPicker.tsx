import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FaHome,
  FaCar,
  FaUtensils,
  FaShoppingCart,
  FaGlassCheers,
  FaPlaneDeparture,
  FaMedkit,
  FaGraduationCap,
  FaGamepad,
  FaGift,
  FaCoffee,
  FaGasPump,
  FaBusAlt,
  FaMoneyBillWave,
  FaSuitcase,
  FaLaptop,
  FaMobileAlt,
  FaTshirt,
  FaGuitar,
  FaBriefcaseMedical,
  FaDumbbell,
  FaDog,
  FaBabyCarriage,
  FaToiletPaper,
  FaPiggyBank,
  FaChartLine,
  FaHandHoldingUsd,
  FaCoins,
  FaCreditCard,
  FaMoneyCheckAlt,
  FaUniversity,
  FaWallet,
  FaFileInvoiceDollar,
  FaPercentage,
  FaHandshake,
  FaBuilding,
  FaIndustry,
  FaTree,
  FaSun,
  FaUmbrella,
  FaStar,
  FaHeart,
  FaSmile,
  FaBell,
  FaCalendarAlt,
  FaClock,
  FaCamera,
  FaMusic,
  FaBook,
  FaNewspaper,
  FaFilm,
  FaPaintBrush,
  FaMicrophone,
  FaTrophy,
  FaCrown,
  FaLightbulb,
  FaWrench,
  FaTools,
  FaFlag,
} from "react-icons/fa";

const icons = [
  { id: "home", icon: <FaHome size={20} />, name: "Casa" },
  { id: "car", icon: <FaCar size={20} />, name: "Carro" },
  { id: "food", icon: <FaUtensils size={20} />, name: "Alimentação" },
  { id: "shopping", icon: <FaShoppingCart size={20} />, name: "Compras" },
  {
    id: "entertainment",
    icon: <FaGlassCheers size={20} />,
    name: "Entretenimento",
  },
  { id: "travel", icon: <FaPlaneDeparture size={20} />, name: "Viagem" },
  { id: "health", icon: <FaMedkit size={20} />, name: "Saúde" },
  { id: "education", icon: <FaGraduationCap size={20} />, name: "Educação" },
  { id: "games", icon: <FaGamepad size={20} />, name: "Jogos" },
  { id: "gifts", icon: <FaGift size={20} />, name: "Presentes" },
  { id: "coffee", icon: <FaCoffee size={20} />, name: "Café" },
  { id: "fuel", icon: <FaGasPump size={20} />, name: "Combustível" },
  { id: "transport", icon: <FaBusAlt size={20} />, name: "Transporte" },
  { id: "salary", icon: <FaMoneyBillWave size={20} />, name: "Salário" },
  { id: "business", icon: <FaSuitcase size={20} />, name: "Negócios" },
  { id: "tech", icon: <FaLaptop size={20} />, name: "Tecnologia" },
  { id: "phone", icon: <FaMobileAlt size={20} />, name: "Telefone" },
  { id: "clothing", icon: <FaTshirt size={20} />, name: "Vestuário" },
  { id: "hobby", icon: <FaGuitar size={20} />, name: "Hobby" },
  { id: "insurance", icon: <FaBriefcaseMedical size={20} />, name: "Seguro" },
  { id: "fitness", icon: <FaDumbbell size={20} />, name: "Fitness" },
  { id: "pets", icon: <FaDog size={20} />, name: "Animais" },
  { id: "baby", icon: <FaBabyCarriage size={20} />, name: "Bebê" },
  { id: "household", icon: <FaToiletPaper size={20} />, name: "Casa" },
  { id: "savings", icon: <FaPiggyBank size={20} />, name: "Poupança" },
  { id: "investment", icon: <FaChartLine size={20} />, name: "Investimentos" },
  { id: "loan", icon: <FaHandHoldingUsd size={20} />, name: "Empréstimo" },
  { id: "cryptocurrency", icon: <FaCoins size={20} />, name: "Criptomoeda" },
  { id: "credit", icon: <FaCreditCard size={20} />, name: "Cartão de Crédito" },
  { id: "check", icon: <FaMoneyCheckAlt size={20} />, name: "Cheque" },
  { id: "bank", icon: <FaUniversity size={20} />, name: "Banco" },
  { id: "wallet", icon: <FaWallet size={20} />, name: "Carteira" },
  { id: "bill", icon: <FaFileInvoiceDollar size={20} />, name: "Conta" },
  { id: "interest", icon: <FaPercentage size={20} />, name: "Juros" },
  { id: "business-deal", icon: <FaHandshake size={20} />, name: "Negociação" },
  { id: "real-estate", icon: <FaHome size={20} />, name: "Imóveis" },
  { id: "building", icon: <FaBuilding size={20} />, name: "Edifício" },
  { id: "industry", icon: <FaIndustry size={20} />, name: "Indústria" },
  { id: "nature", icon: <FaTree size={20} />, name: "Natureza" },
  { id: "weather", icon: <FaSun size={20} />, name: "Clima" },
  {
    id: "insurance-alt",
    icon: <FaUmbrella size={20} />,
    name: "Seguro Alternativo",
  },
  { id: "favorite", icon: <FaStar size={20} />, name: "Favorito" },
  { id: "love", icon: <FaHeart size={20} />, name: "Amor" },
  { id: "happy", icon: <FaSmile size={20} />, name: "Felicidade" },
  { id: "notification", icon: <FaBell size={20} />, name: "Notificação" },
  { id: "calendar", icon: <FaCalendarAlt size={20} />, name: "Calendário" },
  { id: "time", icon: <FaClock size={20} />, name: "Tempo" },
  { id: "photo", icon: <FaCamera size={20} />, name: "Foto" },
  { id: "music", icon: <FaMusic size={20} />, name: "Música" },
  { id: "book", icon: <FaBook size={20} />, name: "Livro" },
  { id: "news", icon: <FaNewspaper size={20} />, name: "Notícias" },
  { id: "movie", icon: <FaFilm size={20} />, name: "Filme" },
  { id: "art", icon: <FaPaintBrush size={20} />, name: "Arte" },
  { id: "audio", icon: <FaMicrophone size={20} />, name: "Áudio" },
  { id: "award", icon: <FaTrophy size={20} />, name: "Prêmio" },
  { id: "premium", icon: <FaCrown size={20} />, name: "Premium" },
  { id: "idea", icon: <FaLightbulb size={20} />, name: "Ideia" },
  { id: "repair", icon: <FaWrench size={20} />, name: "Reparo" },
  { id: "tools", icon: <FaTools size={20} />, name: "Ferramentas" },
  { id: "goal", icon: <FaFlag size={20} />, name: "Meta" },
];

interface IconPickerProps {
  selectedIcon: string;
  onChange: (iconId: string) => void;
  label?: string;
}

export const IconPicker = ({
  selectedIcon,
  onChange,
  label = "Selecionar Ícone",
}: IconPickerProps) => {
  const selectedIconObj =
    icons.find((icon) => icon.id === selectedIcon) || icons[0];

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="icon-picker">
          <AccordionTrigger className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8">
              {selectedIconObj.icon}
            </div>
            {label}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-6 gap-3 p-2 max-h-[240px] overflow-y-auto">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className={`flex flex-col items-center justify-center p-2 cursor-pointer rounded-md border hover:bg-gray-100 transition-colors ${
                    selectedIcon === icon.id
                      ? "bg-gray-100 border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => onChange(icon.id)}
                  title={icon.name}
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
