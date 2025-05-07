import { useTranslation } from "react-i18next";
import DetailStat from "../DetailStat/DetailStat";
const DetailStatCard = ({stats}) => {
    const {t} = useTranslation();
    const colours = { //este objeto tiene que estar porque tailwind /NECESITA/ recibir parametros completos
        "hp":"bg-green-500 border-green-500", 
        "atk":"bg-red-500 border-red-500", 
        "def":"bg-orange-500 border-orange-500", 
        "spAtk":"bg-purple-500 border-purple-500", 
        "spDef":"bg-blue-500 border-blue-500", 
        "spd":"bg-yellow-500 border-yellow-500"}
    return(
        <div className="mx-auto mt-6 px-4 max-w-xl shadow-md shadow-sky-700/50 mb-6 bg-gray-700 rounded-md">
        <h3 className="text-center text-xl font-bold pt-2">{t("Base Stats")}</h3>
        <div className="flex flex-row justify-evenly py-4">
          <div className="flex flex-col justify-between text-blue-400 text-sm md:text-base lg:text-base">
            <div className="my-1">{t("Health Points")}:</div>
            <div className="my-1">{t("Attack")}:</div>
            <div className="my-1">{t("Defense")}:</div>
            <div className="my-1">{t("Special Attack")}:</div>
            <div className="my-1">{t("Special Defense")}:</div>
            <div className="my-1">{t("Speed")}:</div>
          </div>

          <div className="flex flex-col bg-blue-300 rounded-xl min-w-[150px] lg:min-w-[270px] md:min-w-[270px]">
              <DetailStat stat={stats[0].base_stat} color={colours.hp}/>
              <DetailStat stat={stats[1].base_stat} color={colours.atk}/>
              <DetailStat stat={stats[2].base_stat} color={colours.def}/>
              <DetailStat stat={stats[3].base_stat} color={colours.spAtk}/>
              <DetailStat stat={stats[4].base_stat} color={colours.spDef}/>
              <DetailStat stat={stats[5].base_stat} color={colours.spd}/>
          </div>
        </div>
      </div>
    )
}
export default DetailStatCard