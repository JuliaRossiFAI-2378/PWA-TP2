import { useTranslation } from "react-i18next";
import DetailStat from "../DetailStat/DetailStat";
const DetailStatCard = ({stats}) => {
    const {t} = useTranslation();
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
              <DetailStat stat={stats[0].base_stat} color="green"/>
              <DetailStat stat={stats[1].base_stat} color="red"/>
              <DetailStat stat={stats[2].base_stat} color="orange"/>
              <DetailStat stat={stats[3].base_stat} color="purple"/>
              <DetailStat stat={stats[4].base_stat} color="blue"/>
              <DetailStat stat={stats[5].base_stat} color="yellow"/>
          </div>
        </div>
      </div>
    )
}
export default DetailStatCard